-- V433: أسعار وعروض لكل فرع — تُحفظ مع هيكل الشركة (emd_co.pricing) وتصل إلى كل الأجهزة
alter table public.emd_co add column if not exists pricing jsonb not null default '{}'::jsonb;

create or replace function public.emd_co_struct(p_co uuid) returns jsonb language sql stable set search_path = public as $$
  select jsonb_build_object(
    'id', c.id, 'name', c.name, 'store_wh', c.store_wh, 'staff', c.staff, 'px', c.pricing,
    'b', coalesce((select jsonb_agg(jsonb_build_object('id',id,'n',name,'c',city,'on',active) order by sort, name) from emd_co_branches where co = c.id), '[]'),
    'w', coalesce((select jsonb_agg(jsonb_build_object('id',id,'n',name,'b',branch,'on',active) order by sort, name) from emd_co_wh where co = c.id), '[]'))
  from emd_co c where c.id = p_co
$$;

-- نُبقي الدالة السابقة كما هي، ونغلّفها: عند «struct» من المالك نحفظ الأسعار والعروض أيضًا
alter function public.emd_co_api(text, jsonb) rename to emd_co_api_v432;

create or replace function public.emd_co_api(p_uid text, p_body jsonb)
returns jsonb language plpgsql security definer set search_path = public as $$
declare r jsonb; v_id uuid;
begin
  r := emd_co_api_v432(p_uid, p_body);
  if coalesce(p_body->>'action','') = 'struct' and jsonb_typeof(p_body->'px') = 'object'
     and length((p_body->'px')::text) < 400000 and p_uid is not null and length(p_uid) >= 8 then
    update emd_co set pricing = p_body->'px', rev = nextval('emd_co_rev') where owner = p_uid returning id into v_id;
    if v_id is not null then
      r := r || jsonb_build_object('struct', emd_co_struct(v_id), 'rev', emd_co_maxrev(v_id));
    end if;
  end if;
  return r;
end $$;

revoke all on function public.emd_co_api(text, jsonb) from public, anon, authenticated;
revoke all on function public.emd_co_api_v432(text, jsonb) from public, anon, authenticated;
revoke all on function public.emd_co_struct(uuid) from public, anon, authenticated;
grant execute on function public.emd_co_api(text, jsonb) to service_role;
grant execute on function public.emd_co_api_v432(text, jsonb) to service_role;
