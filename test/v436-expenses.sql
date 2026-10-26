-- V436: المصروفات والأرباح لكل فرع
-- تُشغَّل بعد ملف V434. كل جهاز يرفع مصروفاته، والمالك يرى ربح كل فرع بعد المصروفات.
create table if not exists public.emd_co_exp(
  co uuid not null references public.emd_co(id) on delete cascade,
  device uuid not null, id text not null,
  branch uuid, dy date not null, amount numeric(14,3) not null default 0,
  cat text, name text, updated_at timestamptz not null default now(),
  primary key (co, device, id)
);
create index if not exists emd_co_exp_d on public.emd_co_exp(co, dy);
alter table public.emd_co_exp enable row level security;
revoke all on public.emd_co_exp from anon, authenticated;

alter function public.emd_co_api(text, jsonb) rename to emd_co_api_v435;

create or replace function public.emd_co_api(p_uid text, p_body jsonb)
returns jsonb language plpgsql security definer set search_path = public as $$
declare
  act text := coalesce(p_body->>'action','');
  d emd_co_devices; x jsonb; v_b uuid; v_from date; v_to date;
begin
  if act not in ('exp','pnl') then
    return emd_co_api_v435(p_uid, p_body);
  end if;
  select * into d from emd_co_devices where token_hash = emd_co_hash(p_body->>'token') and not revoked;
  if d.id is null then raise exception 'device'; end if;

  if act = 'exp' then
    for x in select value from jsonb_array_elements(coalesce(p_body->'up','[]')) limit 500 loop
      if length(coalesce(x->>'id','')) not between 1 and 60 or coalesce(x->>'d','') !~ '^\d{4}-\d{2}-\d{2}$'
         or coalesce(x->>'a','') !~ '^-?\d{1,11}(\.\d+)?$' then continue; end if;
      v_b := case when x->>'b' = '*' then d.branch
                  when coalesce(x->>'b','') ~ '^[0-9a-f-]{36}$' then (x->>'b')::uuid else null end;
      if v_b is not null and not exists (select 1 from emd_co_branches where id = v_b and co = d.co) then v_b := d.branch; end if;
      insert into emd_co_exp(co, device, id, branch, dy, amount, cat, name)
        values (d.co, d.id, x->>'id', v_b, (x->>'d')::date, (x->>'a')::numeric, left(x->>'c',60), left(x->>'n',120))
        on conflict (co, device, id) do update set branch = excluded.branch, dy = excluded.dy, amount = excluded.amount,
          cat = excluded.cat, name = excluded.name, updated_at = now();
    end loop;
    delete from emd_co_exp where co = d.co and device = d.id
      and id in (select jsonb_array_elements_text(coalesce(p_body->'del','[]')) limit 500);
    return jsonb_build_object('ok', true);
  end if;

  -- pnl: مصروفات الفترة حسب الفرع والتصنيف (غير المالك يرى فرعه فقط)
  v_from := case when coalesce(p_body->>'from','') ~ '^\d{4}-\d{2}-\d{2}$' then (p_body->>'from')::date else date_trunc('month', now())::date end;
  v_to := case when coalesce(p_body->>'to','') ~ '^\d{4}-\d{2}-\d{2}$' then (p_body->>'to')::date else (date_trunc('month', now()) + interval '1 month')::date end;
  return jsonb_build_object('ok', true, 'exp', coalesce((
    select jsonb_agg(jsonb_build_object('b', branch, 'c', coalesce(cat,'أخرى'), 'a', a))
    from (select branch, cat, sum(amount) a from emd_co_exp
          where co = d.co and dy >= v_from and dy < v_to
            and (d.is_owner or branch is not distinct from d.branch)
          group by branch, cat) z), '[]'::jsonb));
end $$;

revoke all on function public.emd_co_api(text, jsonb) from public, anon, authenticated;
revoke all on function public.emd_co_api_v435(text, jsonb) from public, anon, authenticated;
grant execute on function public.emd_co_api(text, jsonb) to service_role;
grant execute on function public.emd_co_api_v435(text, jsonb) to service_role;
