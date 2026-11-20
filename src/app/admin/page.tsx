import type { Metadata } from "next";
import { ProductForm } from "@/components/ProductForm";
import { categoryName } from "@/lib/categories";
import { isSupabaseConfigured } from "@/lib/products";
import { createClient } from "@/lib/supabase/server";
import type { Product } from "@/lib/types";
import { signOut } from "./actions";

export const metadata: Metadata = { title: "Адмінка", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

const NOTICES: Record<string, { text: string; ok: boolean }> = {
  saved: { text: "Зміни збережено.", ok: true },
  added: { text: "Товар додано.", ok: true },
  deleted: { text: "Товар видалено.", ok: true },
  invalid: { text: "Перевірте поля: потрібні назва, категорія та ціна від 0.", ok: false },
  error: { text: "Не вдалося виконати дію. Спробуйте ще раз.", ok: false },
};

type Props = { searchParams: Promise<{ notice?: string }> };

export default async function AdminPage({ searchParams }: Props) {
  if (!isSupabaseConfigured) {
    return (
      <main className="mx-auto max-w-2xl px-5 py-12">
        <h1 className="text-2xl font-extrabold">Адмінка</h1>
        <p className="mt-3 rounded-lg bg-amber-50 p-4 text-amber-800">
          Підключіть Supabase: додайте <code>NEXT_PUBLIC_SUPABASE_URL</code> та <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code> у
          змінні середовища й виконайте <code>supabase/schema.sql</code>. Деталі — у README.
        </p>
      </main>
    );
  }

  const { notice } = await searchParams;
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("products")
    .select("id, name, size, category, in_stock, price, popular")
    .order("category")
    .order("name");

  const products = (data ?? []).map((r) => ({ ...r, price: Number(r.price) })) as Product[];
  const banner = notice ? NOTICES[notice] : undefined;

  return (
    <main className="mx-auto max-w-6xl px-5 pb-6">
      <div className="mb-5 mt-9 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-3xl font-extrabold tracking-tight">Керування товарами</h1>
        <form action={signOut}>
          <button type="submit" className="rounded-lg border-2 border-brand px-5 py-2 text-sm font-bold text-brand hover:bg-brand-tint">
            Вийти
          </button>
        </form>
      </div>

      {banner && (
        <p
          role="status"
          className={`mb-4 rounded-lg px-4 py-3 text-sm font-semibold ${
            banner.ok ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
          }`}
        >
          {banner.text}
        </p>
      )}
      {error && <p className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800">Помилка завантаження: {error.message}</p>}

      <section aria-labelledby="new" className="mb-8">
        <h2 id="new" className="mb-2 text-lg font-extrabold">
          Новий товар
        </h2>
        <ProductForm />
      </section>

      <section aria-labelledby="all">
        <h2 id="all" className="mb-2 text-lg font-extrabold">
          Усі товари ({products.length})
        </h2>
        <div className="grid gap-3">
          {products.map((p) => (
            <div key={p.id}>
              <p className="sr-only">{categoryName(p.category)}</p>
              <ProductForm product={p} />
            </div>
          ))}
          {products.length === 0 && <p className="text-ink-muted">Товарів ще немає. Додайте перший вище.</p>}
        </div>
      </section>
    </main>
  );
}
