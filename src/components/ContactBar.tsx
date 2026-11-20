import Link from "next/link";
import { COMPANY, MAPS_URL } from "@/lib/company";
import { telHref } from "@/lib/format";
import { PhoneIcon, PinIcon, TelegramIcon } from "./icons";

export function ContactBar() {
  const mainPhone = COMPANY.headerPhones[0];
  const a = COMPANY.address;

  return (
    <div className="flex flex-wrap items-center gap-4 rounded-xl border border-line bg-brand-soft p-4">
      <div className="flex flex-wrap gap-3">
        <a
          href={telHref(mainPhone)}
          className="inline-flex items-center gap-2.5 rounded-lg border-2 border-brand bg-brand px-5 py-3 text-[15px] font-bold text-white transition-colors hover:border-brand-dark hover:bg-brand-dark"
        >
          <PhoneIcon className="h-5 w-5" />
          Зателефонувати
        </a>
        <a
          href={COMPANY.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 rounded-lg border-2 border-brand bg-white px-5 py-3 text-[15px] font-bold text-brand transition-colors hover:bg-brand-tint"
        >
          <TelegramIcon className="h-5 w-5" />
          Написати в Telegram
        </a>
      </div>

      <div className="flex w-full items-center gap-3 md:ml-auto md:w-auto md:border-l md:border-line md:pl-5">
        <PinIcon className="h-8 w-8 flex-none text-brand" />
        <div className="text-sm">
          <Link href="/contacts" className="font-bold hover:text-brand">
            м. Харків, {a.street}
          </Link>
          <p className="text-[13px] text-ink-muted">
            {COMPANY.hours.map((h) => `${h.days}: ${h.time}`).join("  |  ")}
          </p>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="sr-only">
            Показати на карті
          </a>
        </div>
      </div>
    </div>
  );
}
