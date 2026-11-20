import { formatPrice } from "@/lib/format";
import type { Product } from "@/lib/types";
import { StatusBadge } from "./StatusBadge";

type Props = { products: Product[]; title?: string };

export function ProductTable({ products, title }: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-white">
      {title && <h2 className="border-b border-line bg-brand-soft px-5 py-3 text-[17px] font-bold">{title}</h2>}

      {products.length === 0 ? (
        <p className="px-5 py-8 text-center text-ink-muted">
          Нічого не знайдено. Зателефонуйте — підберемо потрібну позицію.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-[15px]">
            <thead>
              <tr className="border-b border-line text-[13px] text-ink-muted">
                <th className="px-5 py-2.5 font-semibold">Найменування</th>
                <th className="px-5 py-2.5 font-semibold">Об’єм / Розмір</th>
                <th className="px-5 py-2.5 font-semibold">Стан</th>
                <th className="px-5 py-2.5 text-right font-semibold">Ціна з ПДВ</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id} className="border-b border-line last:border-0">
                  <td className="px-5 py-3 font-semibold">{p.name}</td>
                  <td className="px-5 py-3">{p.size}</td>
                  <td className="px-5 py-3">
                    <StatusBadge inStock={p.in_stock} />
                  </td>
                  <td className="whitespace-nowrap px-5 py-3 text-right">{formatPrice(p.price)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
