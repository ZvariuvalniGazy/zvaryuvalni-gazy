import Link from "next/link";
import { CATEGORIES, type CategoryId } from "@/lib/categories";
import { ArrowIcon, GasIcon, TorchIcon, WrenchIcon } from "./icons";

const ICONS: Record<CategoryId, typeof GasIcon> = {
  gases: GasIcon,
  welding: TorchIcon,
  supplies: WrenchIcon,
};

export function CategoryCards({ active }: { active?: CategoryId }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {CATEGORIES.map((c) => {
        const Icon = ICONS[c.id];
        const isActive = active === c.id;
        return (
          <Link
            key={c.id}
            href={`/catalog?category=${c.id}`}
            aria-current={isActive ? "page" : undefined}
            className={`group flex items-center gap-3.5 rounded-xl border p-[18px] font-bold transition-colors hover:border-brand ${
              isActive ? "border-brand bg-brand-tint" : "border-line bg-white"
            }`}
          >
            <span
              className={`grid h-12 w-12 flex-none place-items-center rounded-full ${
                isActive ? "bg-brand text-white" : "bg-brand-tint text-brand"
              }`}
            >
              <Icon className="h-6 w-6" />
            </span>
            {c.name}
            <ArrowIcon className="ml-auto h-5 w-5 text-ink-muted transition-transform group-hover:translate-x-0.5" />
          </Link>
        );
      })}
    </div>
  );
}
