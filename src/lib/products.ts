import { createClient } from "@supabase/supabase-js";
import { SEED_PRODUCTS } from "./seed";
import type { Product } from "./types";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(url && key);

/** Публічне читання каталогу (працює без авторизації завдяки RLS). */
export async function getProducts(): Promise<Product[]> {
  if (!url || !key) return SEED_PRODUCTS;

  const supabase = createClient(url, key, { auth: { persistSession: false } });
  const { data, error } = await supabase
    .from("products")
    .select("id, name, size, category, in_stock, price, popular")
    .order("category")
    .order("name");

  if (error) {
    console.error("Supabase: не вдалося завантажити товари", error.message);
    return [];
  }
  return (data ?? []).map((row) => ({ ...row, price: Number(row.price) })) as Product[];
}
