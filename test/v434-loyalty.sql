-- V434: حسابات العملاء ونقاط الولاء عبر الفروع
-- كل فاتورة بيع مباشر تحمل رقم العميل ونقاطه، فيُجمع رصيده (المستحق والنقاط) من كل الفروع.
alter table public.emd_co_sales add column if not exists cp text;
alter table public.emd_co_sales add column if not exists cn text;
alter table public.emd_co_sales add column if not exists pe numeric(14,0) not null default 0;
alter table public.emd_co_sales add column if not exists pr numeric(14,0) not null default 0;
create index if not exists emd_co_sales_cp on public.emd_co_sales(co, cp) where cp is not null;

-- نُبقي الدالة السابقة (V433) كما هي ونغلّفها
alter function public.emd_co_api(text, jsonb) rename to emd_co_api_v433;

create or replace function public.emd_co_api(p_uid text, p_body jsonb)
returns jsonb language plpgsql security definer set search_path = public as $$
declare
  act text := coalesce(p_body->>'action','');
  d emd_co_devices; r jsonb; x jsonb; v_cp text; v_e numeric; v_x numeric;
begin
  if act in ('cust','custs') then
    select * into d from emd_co_devices where token_hash = emd_co_hash(p_body->>'token') and not revoked;
    if d.id is null then raise exception 'device'; end if;
    if act = 'cust' then
      v_cp := right(regexp_replace(coalesce(p_body->>'phone',''),'\D','','g'),8);
      if length(v_cp) < 7 then raise exception 'bad_request'; end if;
      -- مبيعات هذا العميل في الأجهزة الأخرى فقط (الجهاز السائل يحسب مبيعاته بنفسه)
      return (
        select jsonb_build_object('ok', true,
          'e', coalesce(sum(s.pe),0), 'x', coalesce(sum(s.pr),0), 'n', count(*),
          'due', coalesce(sum(case when s.status = 'void' then 0 else greatest(0, s.total - s.paid) end),0),
          't', coalesce(sum(case when s.status = 'void' then 0 else s.total end),0),
          'name', max(s.cn),
          'list', coalesce((select jsonb_agg(jsonb_build_object('id', split_part(z.sid,':',2), 'at', z.at, 't', z.total, 'pd', z.paid, 'st', z.status,
                     'b', (select name from emd_co_branches b where b.id = z.branch)) order by z.at desc)
                   from (select * from emd_co_sales where co = d.co and cp = v_cp and kind = 'pos' and device is distinct from d.id order by at desc limit 80) z), '[]'::jsonb))
        from emd_co_sales s where s.co = d.co and s.cp = v_cp and s.kind = 'pos' and s.device is distinct from d.id);
    end if;
    return jsonb_build_object('ok', true, 'list', coalesce((
      select jsonb_agg(jsonb_build_object('p', g.cp, 'n', g.cn, 'e', g.e, 'x', g.x, 'due', g.due, 'c', g.c))
      from (select cp, max(cn) cn, sum(pe) e, sum(pr) x, count(*) c,
                   sum(case when status = 'void' then 0 else greatest(0, total - paid) end) due
            from emd_co_sales where co = d.co and cp is not null and kind = 'pos' and device is distinct from d.id
            group by cp
            having sum(case when status = 'void' then 0 else greatest(0, total - paid) end) > 0.0005 or sum(pe) - sum(pr) > 0
            order by 6 desc limit 400) g), '[]'::jsonb));
  end if;

  r := emd_co_api_v433(p_uid, p_body);

  -- بعد المزامنة: نحفظ العميل ونقاطه على كل فاتورة وصلت
  if act = 'sync' and jsonb_typeof(p_body->'sales') = 'array' then
    select * into d from emd_co_devices where token_hash = emd_co_hash(p_body->>'token') and not revoked;
    if d.id is not null then
      for x in select value from jsonb_array_elements(p_body->'sales') limit 2000 loop
        if jsonb_typeof(x->'cu') = 'object' then
          v_cp := right(regexp_replace(coalesce(x->'cu'->>'p',''),'\D','','g'),8);
          v_e := case when coalesce(x->'cu'->>'e','') ~ '^\d{1,9}$' then (x->'cu'->>'e')::numeric else 0 end;
          v_x := case when coalesce(x->'cu'->>'x','') ~ '^\d{1,9}$' then (x->'cu'->>'x')::numeric else 0 end;
          update emd_co_sales set cp = nullif(v_cp,''), cn = left(x->'cu'->>'n', 80), pe = v_e, pr = v_x
            where co = d.co and sid = d.id::text || ':' || (x->>'sid');
        end if;
      end loop;
    end if;
  end if;
  return r;
end $$;

revoke all on function public.emd_co_api(text, jsonb) from public, anon, authenticated;
revoke all on function public.emd_co_api_v433(text, jsonb) from public, anon, authenticated;
grant execute on function public.emd_co_api(text, jsonb) to service_role;
grant execute on function public.emd_co_api_v433(text, jsonb) to service_role;
