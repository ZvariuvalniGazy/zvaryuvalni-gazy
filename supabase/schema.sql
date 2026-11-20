-- Виконайте в Supabase → SQL Editor

create table if not exists public.products (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  size        text not null default '',
  category    text not null check (category in ('gases', 'welding', 'supplies')),
  in_stock    boolean not null default true,
  price       numeric(10, 2) not null default 0 check (price >= 0),
  popular     boolean not null default false,
  created_at  timestamptz not null default now()
);

alter table public.products enable row level security;

-- Каталог бачать усі відвідувачі
create policy "Публічне читання" on public.products
  for select using (true);

-- Змінювати дані можуть лише авторизовані користувачі (адмін)
create policy "Запис для авторизованих" on public.products
  for all to authenticated using (true) with check (true);

insert into public.products (name, size, category, in_stock, price, popular) values
  ('Кисень технічний', '40 л (6 м³)', 'gases', true, 345, true),
  ('Аргон (Ar)', '40 л (6 м³)', 'gases', true, 420, true),
  ('Вуглекислий газ (CO₂)', '40 л (6 м³)', 'gases', true, 290, true),
  ('Ацетилен (розчинений)', '40 л (5 м³)', 'gases', true, 615, true),
  ('Кисень медичний', '40 л (6 м³)', 'gases', true, 390, false),
  ('Азот', '40 л (6 м³)', 'gases', false, 380, false),
  ('Інверторний зварювальний апарат MMA-250', '250 А', 'welding', true, 5900, false),
  ('Напівавтомат MIG/MAG-200', '200 А', 'welding', true, 11800, false),
  ('Редуктор балонний кисневий', '1 шт.', 'welding', true, 980, false),
  ('Пальник газовий', '1 шт.', 'welding', false, 760, false),
  ('Електроди для зварювання', '3 мм, 5 кг', 'supplies', true, 540, false),
  ('Дріт зварювальний омідненний', '0,8 мм, 5 кг', 'supplies', true, 690, false),
  ('Зварювальна маска «хамелеон»', '1 шт.', 'supplies', true, 1250, false),
  ('Шланг газовий', '9 мм, 1 м', 'supplies', false, 48, false);
