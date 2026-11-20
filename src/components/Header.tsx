import Link from "next/link";
import { COMPANY, mapLink } from "@/lib/company";
import { telHref } from "@/lib/format";
import { PinIcon, LogoIcon } from "./icons";

const NAV = [
  { href: "/", label: "Головна" },
  { href: "/catalog", label: "Каталог" },
  { href: "/contacts", label: "Контакти" },
];

export function Header() {
  return (
    <header className="border-b border-line bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-3.5">
        <Link href="/" className="flex items-center gap-2.5">
          <LogoIcon className="h-10 w-10 text-brand" />
          <span>
            <span className="block text-[22px] font-extrabold leading-tight tracking-tight">{COMPANY.name}</span>
            <span className="block text-[11px] text-ink-muted">{COMPANY.slogan}</span>
          </span>
        </Link>

        <nav aria-label="Основна навігація" className="order-last flex w-full gap-5 text-sm font-semibold sm:order-none sm:w-auto">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="text-ink-muted transition-colors hover:text-brand">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <div className="flex flex-col text-sm font-semibold">
            {COMPANY.headerPhones.map((phone) => (
              <a key={phone} href={telHref(phone)} className="hover:text-brand">
                {phone}
              </a>
            ))}
            <a href={`mailto:${COMPANY.email}`} className="font-medium text-ink-muted hover:text-brand">
              {COMPANY.email}
            </a>
          </div>
          <a
            href={mapLink(COMPANY.cityMapQuery)}
            target="_blank"
            rel="noopener noreferrer"
            title="Показати на карті"
            className="flex items-center gap-2 text-sm font-semibold hover:text-brand"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full border border-line text-ink-muted">
              <PinIcon className="h-4 w-4" />
            </span>
            {COMPANY.city}
          </a>
        </div>
      </div>
    </header>
  );
}
