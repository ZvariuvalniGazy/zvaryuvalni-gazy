import type { Metadata } from "next";
import { COMPANY, mapEmbed, mapLink } from "@/lib/company";
import { telHref } from "@/lib/format";
import { ClockIcon, MailIcon, PinIcon, UserIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Контакти",
  description: "Адреса, телефони та керівництво кооперативу «Зварювальні Гази», м. Харків, провулок Ігоря Остаповича, 3.",
};

const cardTitle = "mb-3 flex items-center gap-2.5 text-lg font-extrabold";
const card = "rounded-xl border border-line bg-white p-5";

export default function ContactsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-4">
      <h1 className="mb-6 mt-9 text-3xl font-extrabold tracking-tight">Контакти</h1>

      <div className="grid gap-4 md:grid-cols-2">
        <section className={card} aria-labelledby="addr">
          <h2 id="addr" className={cardTitle}>
            <MailIcon className="h-6 w-6 text-brand" />
            Електронна пошта
          </h2>
          <a href={`mailto:${COMPANY.email}`} className="font-semibold hover:text-brand">
            {COMPANY.email}
          </a>
        </section>

        <section className={card} aria-labelledby="hours">
          <h2 id="hours" className={cardTitle}>
            <ClockIcon className="h-6 w-6 text-brand" />
            Графік роботи
          </h2>
          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5">
            {COMPANY.hours.map((h) => (
              <div key={h.days} className="contents">
                <dt className="font-semibold">{h.days}</dt>
                <dd className="text-ink-muted">{h.time}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={`${card} md:col-span-2`} aria-labelledby="locations">
          <h2 id="locations" className={cardTitle}>
            <PinIcon className="h-6 w-6 text-brand" />
            Адреси на карті
          </h2>
          <ul className="grid gap-5 lg:grid-cols-3">
            {COMPANY.locations.map((loc) => (
              <li key={loc.address} className="grid content-start gap-2">
                <p className="text-sm text-ink-muted">{loc.title}</p>
                <p className="font-bold">{loc.address}</p>
                <iframe
                  title={`Карта: ${loc.address}`}
                  src={mapEmbed(loc.mapQuery)}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-44 w-full rounded-lg border border-line"
                />
                <a
                  href={mapLink(loc.mapQuery)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-brand hover:underline"
                >
                  Відкрити на карті →
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className={card} aria-labelledby="people">
          <h2 id="people" className={cardTitle}>
            <UserIcon className="h-6 w-6 text-brand" />
            Керівництво
          </h2>
          <ul className="grid gap-4">
            {COMPANY.people.map((person) => (
              <li key={person.role}>
                <p className={person.name ? "text-sm text-ink-muted" : "font-bold"}>{person.role}</p>
                {person.name && <p className="font-bold">{person.name}</p>}
                <a href={telHref(person.phone)} className="font-semibold text-brand hover:underline">
                  {person.phone}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
