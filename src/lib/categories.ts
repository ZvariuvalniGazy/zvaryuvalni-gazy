export const CATEGORIES = [
  { id: "gases", name: "Гази" },
  { id: "welding", name: "Зварювальне обладнання" },
  { id: "supplies", name: "Витратні матеріали" },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];

export const isCategoryId = (value: unknown): value is CategoryId =>
  CATEGORIES.some((c) => c.id === value);

export const categoryName = (id: CategoryId) =>
  CATEGORIES.find((c) => c.id === id)?.name ?? id;
