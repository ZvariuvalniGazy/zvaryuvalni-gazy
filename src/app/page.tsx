import Link from "next/link";
import { CategoryCards } from "@/components/CategoryCards";
import { ContactBar } from "@/components/ContactBar";
import { ProductTable } from "@/components/ProductTable";
import { ShieldIcon } from "@/components/icons";
import { getProducts } from "@/lib/products";

export const revalidate = 60;

export default async function HomePage() {
  const products = await getProducts();
  const popular = products.filter((p) => p.popular).slice(0, 4);

  return (
    <main>
      <section className="border-b border-line bg-gradient-to-r from-[#eef3fb] to-[#dce8f8]">
        <div className="mx-auto max-w-6xl px-5 py-11">
          <h1 className="max-w-2xl text-[clamp(28px,4.6vw,44px)] font-extrabold leading-[1.12] tracking-tight">
            Промислові та медичні гази. Доставка балонів по Харкову
          </h1>
          <p className="mt-4 max-w-xl text-ink-muted">
            Зварювальні Гази — постачальник промислових і медичних газів, зварювального обладнання та витратних матеріалів для
            бізнесу та виробництва.
          </p>
          <div className="mt-5 flex items-center gap-2.5 text-sm">
            <ShieldIcon className="h-[30px] w-[30px] flex-none text-brand" />
            <div>
              <b className="block">Якість і безпека</b>
              <span className="text-[13px] text-ink-muted">Повний спектр газів і обладнання з доставкою</span>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5">
        <h2 className="my-10 flex items-center gap-[18px] text-2xl font-extrabold before:h-px before:flex-1 before:bg-line after:h-px after:flex-1 after:bg-line">
          Наша продукція
        </h2>
        <CategoryCards />

        <div className="mt-5">
          <ProductTable products={popular} title="Популярна продукція в наявності" />
        </div>
        <Link href="/catalog" className="mx-auto mt-3.5 block w-fit text-sm font-semibold text-brand hover:underline">
          Переглянути весь каталог →
        </Link>

        <div className="mt-6">
          <ContactBar />
        </div>
      </div>
    </main>
  );
}
