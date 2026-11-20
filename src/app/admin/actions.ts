"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { isCategoryId } from "@/lib/categories";
import { createClient } from "@/lib/supabase/server";

async function requireUser() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");
  return supabase;
}

function parseProduct(formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const size = String(formData.get("size") ?? "").trim();
  const category = formData.get("category");
  const price = Number(String(formData.get("price") ?? "").replace(",", "."));

  if (!name || !isCategoryId(category) || !Number.isFinite(price) || price < 0) return null;

  return {
    name,
    size,
    category,
    price,
    in_stock: formData.get("in_stock") === "true",
    popular: formData.get("popular") === "on",
  };
}

function refresh() {
  revalidatePath("/");
  revalidatePath("/catalog");
  revalidatePath("/admin");
}

export async function signIn(formData: FormData) {
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email: String(formData.get("email") ?? "").trim(),
    password: String(formData.get("password") ?? ""),
  });
  if (error) redirect("/admin/login?error=1");
  redirect("/admin");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export async function saveProduct(formData: FormData) {
  const supabase = await requireUser();
  const data = parseProduct(formData);
  if (!data) redirect("/admin?notice=invalid");

  const id = String(formData.get("id") ?? "");
  const { error } = id
    ? await supabase.from("products").update(data).eq("id", id)
    : await supabase.from("products").insert(data);

  if (error) redirect("/admin?notice=error");
  refresh();
  redirect(`/admin?notice=${id ? "saved" : "added"}`);
}

export async function deleteProduct(formData: FormData) {
  const supabase = await requireUser();
  const id = String(formData.get("id") ?? "");
  if (!id) redirect("/admin?notice=error");

  const { error } = await supabase.from("products").delete().eq("id", id);
  if (error) redirect("/admin?notice=error");
  refresh();
  redirect("/admin?notice=deleted");
}
