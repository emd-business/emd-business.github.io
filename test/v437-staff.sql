-- V437: أداء الموظفين وعمولاتهم — تُشغَّل بعد ملف V436
alter function public.emd_co_api(text, jsonb) rename to emd_co_api_v436;

create or replace function public.emd_co_api(p_uid text, p_body jsonb)
returns jsonb language plpgsql security definer set search_path = public as $$
declare
  act text := coalesce(p_body->>'action','');
  d emd_co_devices; v_from timestamptz; v_to timestamptz;
begin
  if act <> 'staff' then
    return emd_co_api_v436(p_uid, p_body);
  end if;
  select * into d from emd_co_devices where token_hash = emd_co_hash(p_body->>'token') and not revoked;
  if d.id is null then raise exception 'device'; end if;
  v_from := case when coalesce(p_body->>'from','') ~ '^\d{4}-\d{2}-\d{2}T' then (p_body->>'from')::timestamptz else date_trunc('month', now()) end;
  v_to := case when coalesce(p_body->>'to','') ~ '^\d{4}-\d{2}-\d{2}T' then (p_body->>'to')::timestamptz else now() + interval '1 day' end;
  -- مبيعات كل موظف في كل فرع (غير المالك يرى فرعه فقط)
  return jsonb_build_object('ok', true, 'list', coalesce((
    select jsonb_agg(jsonb_build_object('s', s, 'b', b, 'n', n, 't', t, 'cs', cs))
    from (select coalesce(nullif(staff,''),'المدير') s, branch b, count(*) n, sum(total) t, sum(cost) cs
          from emd_co_sales
          where co = d.co and kind = 'pos' and at >= v_from and at < v_to and coalesce(status,'') <> 'void'
            and (d.is_owner or branch is not distinct from d.branch)
          group by 1, 2) z), '[]'::jsonb));
end $$;

revoke all on function public.emd_co_api(text, jsonb) from public, anon, authenticated;
revoke all on function public.emd_co_api_v436(text, jsonb) from public, anon, authenticated;
grant execute on function public.emd_co_api(text, jsonb) to service_role;
grant execute on function public.emd_co_api_v436(text, jsonb) to service_role;
