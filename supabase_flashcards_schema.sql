-- ========================================
-- Flashcards schema (Supabase/Postgres)
-- Scope: Subject > Sub-subject > Deck > Card + Tags + SRS
-- ========================================

create extension if not exists pgcrypto;

-- ========================================
-- TAXONOMY
-- ========================================
create table if not exists public.flash_subjects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  name text not null,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  unique (user_id, name)
);

create table if not exists public.flash_subsubjects (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  subject_id uuid not null references public.flash_subjects(id) on delete cascade,
  name text not null,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  unique (id, subject_id),
  unique (subject_id, name)
);

create table if not exists public.flash_decks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  subject_id uuid not null references public.flash_subjects(id) on delete cascade,
  subsubject_id uuid,
  name text not null,
  description text not null default '',
  color text not null default '#2563eb',
  is_archived boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, name),
  constraint flash_decks_subsubject_matches_subject_fk
    foreign key (subsubject_id, subject_id)
    references public.flash_subsubjects(id, subject_id)
    on delete set null
);

-- ========================================
-- CONTENT
-- ========================================
create table if not exists public.flash_cards (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  deck_id uuid not null references public.flash_decks(id) on delete cascade,
  front_md text not null,
  back_md text not null,
  image_url text,
  image_thumb_url text,
  image_meta jsonb not null default '{}'::jsonb,
  is_suspended boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.flash_tags (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  name text not null,
  created_at timestamptz not null default now(),
  unique (user_id, name)
);

create table if not exists public.flash_card_tags (
  card_id uuid not null references public.flash_cards(id) on delete cascade,
  tag_id uuid not null references public.flash_tags(id) on delete cascade,
  user_id uuid not null,
  created_at timestamptz not null default now(),
  primary key (card_id, tag_id)
);

-- ========================================
-- SRS STATE + HISTORY
-- ========================================
create table if not exists public.flash_review_state (
  card_id uuid primary key references public.flash_cards(id) on delete cascade,
  user_id uuid not null,
  due_at timestamptz not null default now(),
  last_reviewed_at timestamptz,
  interval_days integer not null default 0,
  repetitions integer not null default 0,
  ease_factor numeric(4,2) not null default 2.50,
  lapses integer not null default 0,
  total_reviews integer not null default 0,
  last_grade smallint,
  updated_at timestamptz not null default now(),
  constraint flash_review_state_grade_ck check (last_grade between 0 and 5 or last_grade is null),
  constraint flash_review_state_ef_ck check (ease_factor >= 1.30)
);

create table if not exists public.flash_review_log (
  id uuid primary key default gen_random_uuid(),
  card_id uuid not null references public.flash_cards(id) on delete cascade,
  user_id uuid not null,
  answered_at timestamptz not null default now(),
  grade smallint not null,
  prev_interval_days integer not null,
  next_interval_days integer not null,
  prev_ease_factor numeric(4,2) not null,
  next_ease_factor numeric(4,2) not null,
  review_ms integer,
  constraint flash_review_log_grade_ck check (grade between 0 and 5)
);

-- Optional queue table to support offline-first sync reconciliation later.
create table if not exists public.flash_sync_ops (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  op_type text not null,
  payload jsonb not null,
  client_ts timestamptz not null,
  server_ts timestamptz not null default now()
);

-- ========================================
-- INDEXES
-- ========================================
create index if not exists flash_subjects_user_idx on public.flash_subjects(user_id);
create index if not exists flash_subsubjects_user_idx on public.flash_subsubjects(user_id);
create index if not exists flash_subsubjects_subject_idx on public.flash_subsubjects(subject_id);
create index if not exists flash_decks_user_idx on public.flash_decks(user_id);
create index if not exists flash_decks_subject_idx on public.flash_decks(subject_id);
create index if not exists flash_decks_subsubject_idx on public.flash_decks(subsubject_id);
create index if not exists flash_cards_user_idx on public.flash_cards(user_id);
create index if not exists flash_cards_deck_idx on public.flash_cards(deck_id);
create index if not exists flash_tags_user_idx on public.flash_tags(user_id);
create index if not exists flash_card_tags_user_idx on public.flash_card_tags(user_id);
create index if not exists flash_review_state_user_due_idx on public.flash_review_state(user_id, due_at);
create index if not exists flash_review_log_user_answered_idx on public.flash_review_log(user_id, answered_at desc);
create index if not exists flash_sync_ops_user_ts_idx on public.flash_sync_ops(user_id, server_ts desc);

-- ========================================
-- AUTO-UPDATE updated_at
-- ========================================
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists flash_decks_set_updated_at on public.flash_decks;
create trigger flash_decks_set_updated_at
before update on public.flash_decks
for each row execute function public.set_updated_at();

drop trigger if exists flash_cards_set_updated_at on public.flash_cards;
create trigger flash_cards_set_updated_at
before update on public.flash_cards
for each row execute function public.set_updated_at();

drop trigger if exists flash_review_state_set_updated_at on public.flash_review_state;
create trigger flash_review_state_set_updated_at
before update on public.flash_review_state
for each row execute function public.set_updated_at();

-- ========================================
-- RLS
-- ========================================
alter table public.flash_subjects enable row level security;
alter table public.flash_subsubjects enable row level security;
alter table public.flash_decks enable row level security;
alter table public.flash_cards enable row level security;
alter table public.flash_tags enable row level security;
alter table public.flash_card_tags enable row level security;
alter table public.flash_review_state enable row level security;
alter table public.flash_review_log enable row level security;
alter table public.flash_sync_ops enable row level security;

-- subjects
 drop policy if exists flash_subjects_owner_select on public.flash_subjects;
 drop policy if exists flash_subjects_owner_insert on public.flash_subjects;
 drop policy if exists flash_subjects_owner_update on public.flash_subjects;
 drop policy if exists flash_subjects_owner_delete on public.flash_subjects;

create policy flash_subjects_owner_select on public.flash_subjects
for select to authenticated using (auth.uid() = user_id);
create policy flash_subjects_owner_insert on public.flash_subjects
for insert to authenticated with check (auth.uid() = user_id);
create policy flash_subjects_owner_update on public.flash_subjects
for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy flash_subjects_owner_delete on public.flash_subjects
for delete to authenticated using (auth.uid() = user_id);

-- subsubjects
 drop policy if exists flash_subsubjects_owner_select on public.flash_subsubjects;
 drop policy if exists flash_subsubjects_owner_insert on public.flash_subsubjects;
 drop policy if exists flash_subsubjects_owner_update on public.flash_subsubjects;
 drop policy if exists flash_subsubjects_owner_delete on public.flash_subsubjects;

create policy flash_subsubjects_owner_select on public.flash_subsubjects
for select to authenticated using (auth.uid() = user_id);
create policy flash_subsubjects_owner_insert on public.flash_subsubjects
for insert to authenticated with check (auth.uid() = user_id);
create policy flash_subsubjects_owner_update on public.flash_subsubjects
for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy flash_subsubjects_owner_delete on public.flash_subsubjects
for delete to authenticated using (auth.uid() = user_id);

-- decks
 drop policy if exists flash_decks_owner_select on public.flash_decks;
 drop policy if exists flash_decks_owner_insert on public.flash_decks;
 drop policy if exists flash_decks_owner_update on public.flash_decks;
 drop policy if exists flash_decks_owner_delete on public.flash_decks;

create policy flash_decks_owner_select on public.flash_decks
for select to authenticated using (auth.uid() = user_id);
create policy flash_decks_owner_insert on public.flash_decks
for insert to authenticated with check (auth.uid() = user_id);
create policy flash_decks_owner_update on public.flash_decks
for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy flash_decks_owner_delete on public.flash_decks
for delete to authenticated using (auth.uid() = user_id);

-- cards
 drop policy if exists flash_cards_owner_select on public.flash_cards;
 drop policy if exists flash_cards_owner_insert on public.flash_cards;
 drop policy if exists flash_cards_owner_update on public.flash_cards;
 drop policy if exists flash_cards_owner_delete on public.flash_cards;

create policy flash_cards_owner_select on public.flash_cards
for select to authenticated using (auth.uid() = user_id);
create policy flash_cards_owner_insert on public.flash_cards
for insert to authenticated with check (auth.uid() = user_id);
create policy flash_cards_owner_update on public.flash_cards
for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy flash_cards_owner_delete on public.flash_cards
for delete to authenticated using (auth.uid() = user_id);

-- tags
 drop policy if exists flash_tags_owner_select on public.flash_tags;
 drop policy if exists flash_tags_owner_insert on public.flash_tags;
 drop policy if exists flash_tags_owner_update on public.flash_tags;
 drop policy if exists flash_tags_owner_delete on public.flash_tags;

create policy flash_tags_owner_select on public.flash_tags
for select to authenticated using (auth.uid() = user_id);
create policy flash_tags_owner_insert on public.flash_tags
for insert to authenticated with check (auth.uid() = user_id);
create policy flash_tags_owner_update on public.flash_tags
for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy flash_tags_owner_delete on public.flash_tags
for delete to authenticated using (auth.uid() = user_id);

-- card_tags
 drop policy if exists flash_card_tags_owner_select on public.flash_card_tags;
 drop policy if exists flash_card_tags_owner_insert on public.flash_card_tags;
 drop policy if exists flash_card_tags_owner_update on public.flash_card_tags;
 drop policy if exists flash_card_tags_owner_delete on public.flash_card_tags;

create policy flash_card_tags_owner_select on public.flash_card_tags
for select to authenticated using (auth.uid() = user_id);
create policy flash_card_tags_owner_insert on public.flash_card_tags
for insert to authenticated with check (auth.uid() = user_id);
create policy flash_card_tags_owner_update on public.flash_card_tags
for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy flash_card_tags_owner_delete on public.flash_card_tags
for delete to authenticated using (auth.uid() = user_id);

-- review_state
 drop policy if exists flash_review_state_owner_select on public.flash_review_state;
 drop policy if exists flash_review_state_owner_insert on public.flash_review_state;
 drop policy if exists flash_review_state_owner_update on public.flash_review_state;
 drop policy if exists flash_review_state_owner_delete on public.flash_review_state;

create policy flash_review_state_owner_select on public.flash_review_state
for select to authenticated using (auth.uid() = user_id);
create policy flash_review_state_owner_insert on public.flash_review_state
for insert to authenticated with check (auth.uid() = user_id);
create policy flash_review_state_owner_update on public.flash_review_state
for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy flash_review_state_owner_delete on public.flash_review_state
for delete to authenticated using (auth.uid() = user_id);

-- review_log
 drop policy if exists flash_review_log_owner_select on public.flash_review_log;
 drop policy if exists flash_review_log_owner_insert on public.flash_review_log;
 drop policy if exists flash_review_log_owner_update on public.flash_review_log;
 drop policy if exists flash_review_log_owner_delete on public.flash_review_log;

create policy flash_review_log_owner_select on public.flash_review_log
for select to authenticated using (auth.uid() = user_id);
create policy flash_review_log_owner_insert on public.flash_review_log
for insert to authenticated with check (auth.uid() = user_id);
create policy flash_review_log_owner_update on public.flash_review_log
for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy flash_review_log_owner_delete on public.flash_review_log
for delete to authenticated using (auth.uid() = user_id);

-- sync_ops
 drop policy if exists flash_sync_ops_owner_select on public.flash_sync_ops;
 drop policy if exists flash_sync_ops_owner_insert on public.flash_sync_ops;
 drop policy if exists flash_sync_ops_owner_update on public.flash_sync_ops;
 drop policy if exists flash_sync_ops_owner_delete on public.flash_sync_ops;

create policy flash_sync_ops_owner_select on public.flash_sync_ops
for select to authenticated using (auth.uid() = user_id);
create policy flash_sync_ops_owner_insert on public.flash_sync_ops
for insert to authenticated with check (auth.uid() = user_id);
create policy flash_sync_ops_owner_update on public.flash_sync_ops
for update to authenticated using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy flash_sync_ops_owner_delete on public.flash_sync_ops
for delete to authenticated using (auth.uid() = user_id);

-- ========================================
-- DASHBOARD VIEW (new/reviewed/learned by deck)
-- ========================================
create or replace view public.flash_deck_study_stats as
select
  d.id as deck_id,
  d.user_id,
  d.name as deck_name,
  count(c.id) filter (where coalesce(rs.total_reviews, 0) = 0 and coalesce(c.is_suspended, false) = false) as new_count,
  count(c.id) filter (where coalesce(rs.total_reviews, 0) > 0 and rs.due_at <= now() and coalesce(c.is_suspended, false) = false) as due_count,
  count(c.id) filter (where coalesce(rs.total_reviews, 0) > 0 and rs.due_at > now() and coalesce(c.is_suspended, false) = false) as learned_count,
  count(c.id) filter (where coalesce(c.is_suspended, false) = false) as total_active
from public.flash_decks d
left join public.flash_cards c on c.deck_id = d.id
left join public.flash_review_state rs on rs.card_id = c.id
group by d.id, d.user_id, d.name;
