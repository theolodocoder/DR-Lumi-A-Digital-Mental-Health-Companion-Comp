create table anonymous_identities (
  user_id uuid primary key references auth.users,
  anonymous_name text not null,
  avatar_code text not null,
  created_at timestamptz default now()
);

create table community_posts (
  id uuid primary key default uuid_generate_v4(),
  anonymous_user_id uuid references anonymous_identities(user_id),
  content text not null,
  category varchar(50),
  created_at timestamptz default now(),
  is_flagged boolean default false
);

create table reported_posts (
  id uuid primary key default uuid_generate_v4(),
  post_id uuid references community_posts,
  reason text,
  created_at timestamptz default now()
);