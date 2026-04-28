import Link from "next/link";

const links = [
  { href: "/which-saq/", label: "Which SAQ?" },
  { href: "/saq-a/", label: "SAQ A" },
  { href: "/saq-a-ep/", label: "SAQ A-EP" },
  { href: "/saq-b/", label: "SAQ B" },
  { href: "/saq-d/", label: "SAQ D" },
  { href: "/glossary/", label: "Glossary" },
];

export function Nav() {
  return (
    <nav className="glass-nav sticky top-0 z-50 no-print">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-white sm:text-xl"
        >
          PCI SAQ Checklist
        </Link>
        <ul className="hidden items-center gap-5 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://www.paytia.com/phone-payments"
              target="_blank"
              rel="noopener"
              className="rounded-full bg-teal px-4 py-2 text-sm font-semibold text-navy transition hover:bg-teal-light"
            >
              Phone Payments →
            </a>
          </li>
        </ul>
        <div className="lg:hidden">
          <a
            href="https://www.paytia.com/phone-payments"
            target="_blank"
            rel="noopener"
            className="rounded-full bg-teal px-3 py-1.5 text-xs font-semibold text-navy"
          >
            Phone Payments
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 bg-navy/95 lg:hidden">
        <ul className="mx-auto flex max-w-6xl gap-4 overflow-x-auto px-4 py-2 text-xs">
          {links.map((l) => (
            <li key={l.href} className="shrink-0">
              <Link href={l.href} className="text-slate-300 hover:text-white">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
