import type { Metadata } from "next";
import Link from "next/link";
import { CategoryCards } from "@/components/CategoryCards";
import { ContactBar } from "@/components/ContactBar";
import { ProductTable } from "@/components/ProductTable";
import { categoryName, isCategoryId } from "@/lib/categories";
import { getProducts } from "@/lib/products";

export const metadata: Metadata = { title: "Каталог" };

type Props = { searchParams: Promise<{ category?: string; q?: string }> };

export default async function CatalogPage({ searchParams }: Props) {
  const params = await searchParams;
  const category = isCategoryId(params.category) ? params.category : undefined;
  const query = (params.q ?? "").trim().toLowerCase();

  const all = await getProducts();
  const products = all.filter(
    (p) => (!category || p.category === category) && (!query || p.name.toLowerCase().includes(query)),
  );

  return (
    <main className="mx-auto max-w-6xl px-5 pb-4">
      <h1 className="mb-6 mt-9 text-3xl font-extrabold tracking-tight">Каталог</h1>
      <CategoryCards active={category} />

      <form action="/catalog" className="mt-5 flex flex-wrap gap-3">
        {category && <input type="hidden" name="category" value={category} />}
        <input
          type="search"
          name="q"
          defaultValue={params.q ?? ""}
          placeholder="Пошук за назвою"
          aria-label="Пошук за назвою"
          className="min-w-[220px] flex-1 rounded-lg border border-line px-3.5 py-2.5 text-sm"
        />
        <button type="submit" className="rounded-lg bg-brand px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-dark">
          Знайти
        </button>
        {(category || query) && (
          <Link href="/catalog" className="grid place-items-center px-2 text-sm font-semibold text-brand hover:underline">
            Скинути фільтри
          </Link>
        )}
      </form>

      <div className="mt-5">
        <ProductTable products={products} title={category ? categoryName(category) : "Усі товари"} />
      </div>

      <div className="mt-6">
        <ContactBar />
      </div>
    </main>
  );
}
