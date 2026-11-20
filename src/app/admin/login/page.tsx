import type { Metadata } from "next";
import { isSupabaseConfigured } from "@/lib/products";
import { signIn } from "../actions";

export const metadata: Metadata = { title: "Вхід в адмінку", robots: { index: false, follow: false } };

type Props = { searchParams: Promise<{ error?: string }> };

const field = "w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-[15px]";

export default async function LoginPage({ searchParams }: Props) {
  const { error } = await searchParams;

  return (
    <main className="mx-auto max-w-sm px-5 py-12">
      <form action={signIn} className="grid gap-4 rounded-xl border border-line bg-white p-6">
        <h1 className="text-xl font-extrabold">Вхід в адмінку</h1>

        {!isSupabaseConfigured && (
          <p className="rounded-lg bg-amber-50 p-3 text-sm text-amber-800">
            Supabase ще не підключено. Додайте змінні середовища (див. README).
          </p>
        )}

        <label className="grid gap-1 text-sm font-semibold">
          Електронна пошта
          <input name="email" type="email" required autoComplete="username" className={field} />
        </label>
        <label className="grid gap-1 text-sm font-semibold">
          Пароль
          <input name="password" type="password" required autoComplete="current-password" className={field} />
        </label>

        {error && (
          <p role="alert" className="text-sm font-semibold text-red-700">
            Невірна пошта або пароль
          </p>
        )}

        <button type="submit" className="rounded-lg bg-brand px-5 py-3 font-bold text-white hover:bg-brand-dark">
          Увійти
        </button>
      </form>
    </main>
  );
}
