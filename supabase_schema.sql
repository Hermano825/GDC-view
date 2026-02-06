-- Supabase schema for quiz stats with RLS
create extension if not exists pgcrypto;

create table if not exists public.stats (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  category text not null,
  score integer not null,
  total integer not null,
  created_at timestamptz not null default now()
);

-- Enable Row Level Security
alter table public.stats enable row level security;

-- Recreate policies idempotently (DROP then CREATE) because CREATE POLICY
-- does not support IF NOT EXISTS in some Postgres versions
drop policy if exists "Stats are viewable by owner" on public.stats;
drop policy if exists "Users can insert their own stats" on public.stats;

-- Only allow authenticated users to see their own rows
create policy "Stats are viewable by owner"
  on public.stats
  for select
  to authenticated
  using (auth.uid() = user_id);

-- Only allow authenticated users to insert rows for themselves
create policy "Users can insert their own stats"
  on public.stats
  for insert
  to authenticated
  with check (auth.uid() = user_id);

-- Optional: indexes for performance
create index if not exists stats_user_id_idx on public.stats (user_id);
create index if not exists stats_created_at_idx on public.stats (created_at desc);
