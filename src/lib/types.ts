import type { CategoryId } from "./categories";

export type Product = {
  id: string;
  name: string;
  size: string;
  category: CategoryId;
  in_stock: boolean;
  price: number;
  popular: boolean;
};
