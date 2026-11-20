import { CheckCircleIcon, CrossCircleIcon } from "./icons";

export function StatusBadge({ inStock }: { inStock: boolean }) {
  return inStock ? (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-green-600/30 bg-green-50 px-2.5 py-0.5 text-[13px] font-medium text-green-700">
      <CheckCircleIcon className="h-3.5 w-3.5" />В наявності
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-red-600/30 bg-red-50 px-2.5 py-0.5 text-[13px] font-medium text-red-700">
      <CrossCircleIcon className="h-3.5 w-3.5" />Немає в наявності
    </span>
  );
}
