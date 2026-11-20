import Link from "next/link";
import { COMPANY, fullAddress } from "@/lib/company";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-line py-6 text-center text-[13px] text-ink-muted">
      <p>
        © {new Date().getFullYear()} {COMPANY.name}. {fullAddress()}.{" "}
        <Link href="/contacts" className="font-semibold text-brand hover:underline">
          Контакти
        </Link>
      </p>
      <p className="mt-1">Ціни вказані з ПДВ і можуть змінюватися.</p>
    </footer>
  );
}
