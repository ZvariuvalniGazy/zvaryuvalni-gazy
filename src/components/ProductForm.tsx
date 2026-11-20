import { deleteProduct, saveProduct } from "@/app/admin/actions";
import { CATEGORIES } from "@/lib/categories";
import type { Product } from "@/lib/types";
import { DeleteButton } from "./DeleteButton";

const field = "w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink";
const label = "grid gap-1 text-xs font-semibold text-ink-muted";

/** Рядок редагування товару; без `product` — форма додавання нового. */
export function ProductForm({ product }: { product?: Product }) {
  return (
    <form action={saveProduct} className="grid gap-3 rounded-xl border border-line bg-white p-4 sm:grid-cols-2 lg:grid-cols-6">
      {product && <input type="hidden" name="id" value={product.id} />}

      <label className={`${label} lg:col-span-2`}>
        Назва
        <input name="name" required defaultValue={product?.name} className={field} />
      </label>
      <label className={label}>
        Об’єм / Розмір
        <input name="size" defaultValue={product?.size} className={field} />
      </label>
      <label className={label}>
        Категорія
        <select name="category" defaultValue={product?.category ?? "gases"} className={field}>
          {CATEGORIES.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </label>
      <label className={label}>
        Наявність
        <select name="in_stock" defaultValue={String(product?.in_stock ?? true)} className={field}>
          <option value="true">В наявності</option>
          <option value="false">Немає в наявності</option>
        </select>
      </label>
      <label className={label}>
        Ціна з ПДВ, грн
        <input
          name="price"
          type="number"
          min="0"
          step="0.01"
          required
          defaultValue={product?.price ?? 0}
          className={field}
        />
      </label>

      <div className="flex flex-wrap items-center gap-3 sm:col-span-2 lg:col-span-6">
        <label className="flex items-center gap-2 text-sm font-semibold">
          <input name="popular" type="checkbox" defaultChecked={product?.popular} className="h-4 w-4 accent-brand" />
          Показувати на головній
        </label>

        <div className="flex gap-2 sm:ml-auto">
          <button type="submit" className="rounded-lg bg-brand px-5 py-2 text-sm font-bold text-white hover:bg-brand-dark">
            {product ? "Зберегти" : "Додати товар"}
          </button>
          {product && <DeleteButton name={product.name} action={deleteProduct} />}
        </div>
      </div>
    </form>
  );
}
