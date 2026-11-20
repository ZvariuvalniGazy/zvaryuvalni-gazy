# Зварювальні Гази — сайт каталогу газів і зварювального обладнання

Next.js 15 (App Router) + Tailwind CSS + Supabase. Інтерфейс українською.

## Сторінки

| Адреса | Що це |
| --- | --- |
| `/` | Головна: категорії, популярні товари, кнопки дзвінка й Telegram |
| `/catalog` | Каталог усіх товарів, фільтр за категорією (`?category=gases`) і пошук |
| `/contacts` | Адреса, графік, телефони, керівництво |
| `/admin` | Адмінка (вхід за поштою та паролем) |

Контактні дані змінюються в одному файлі: `src/lib/company.ts`.

## Запуск

```bash
npm install
cp .env.example .env.local   # заповніть значення
npm run dev
```

Без змінних Supabase сайт працює на демо-даних (`src/lib/seed.ts`), а адмінка показує підказку з налаштування.

## Налаштування Supabase

1. Створіть проєкт на [supabase.com](https://supabase.com).
2. **SQL Editor** → вставте вміст `supabase/schema.sql` → **Run**. Створиться таблиця `products`,
   політики доступу (читати може кожен, змінювати — тільки авторизований) і демо-товари.
3. **Authentication → Users → Add user**: створіть користувача для дяді Льоші (пошта + пароль,
   позначте «Auto Confirm User»). У **Authentication → Providers → Email** вимкніть публічну реєстрацію
   (Allow new users to sign up = off), щоб ніхто сторонній не міг створити собі акаунт.
4. **Project Settings → API**: скопіюйте `Project URL` і `anon public` ключ у `.env.local`.

## Деплой на Vercel

1. Завантажте проєкт у GitHub, у Vercel оберіть **Add New → Project** і імпортуйте репозиторій.
2. У **Environment Variables** додайте:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_TELEGRAM_URL` — необов'язково; за замовчуванням кнопка відкриває чат із номером +380 50 323 65 45
3. **Deploy**. Адмінка буде на `https://ваш-домен/admin`.

## Безпека

- `/admin` закрито middleware (`src/middleware.ts`), а кожна дія перевіряє сесію на сервері.
- Головний захист — політики RLS у базі: навіть із публічним anon-ключем змінювати товари можуть лише авторизовані користувачі.
- Публічного `service_role` ключа в проєкті немає і бути не повинно.
