import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-navy text-slate-300 no-print">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              PCI SAQ Checklist
            </h3>
            <p className="mt-3 text-sm leading-relaxed">
              Open-source PCI DSS Self-Assessment Questionnaire checklists in
              plain English. Built for merchants, QSAs, and anyone trying to
              make sense of PCI compliance without slogging through 100-page
              specifications.
            </p>
            <p className="mt-3 text-sm">
              <a
                href="https://github.com/paytia-comply/paytia-saq-checklist"
                target="_blank"
                rel="noopener"
                className="text-teal-light hover:text-white"
              >
                View source on GitHub →
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              Maintained by Paytia
            </h3>
            <p className="mt-3 text-sm leading-relaxed">
              We&apos;re Paytia. We build PCI-compliant secure phone payment
              systems for call centres and merchants who take card payments
              over the phone. We open-sourced this checklist because most PCI
              guidance is written for QSAs, not the people actually trying to
              get compliant.
            </p>
            <p className="mt-3 text-sm">
              <a
                href="https://www.paytia.com"
                target="_blank"
                rel="noopener"
                className="text-teal-light hover:text-white"
              >
                paytia.com →
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white">
              Phone Payments &amp; PCI
            </h3>
            <p className="mt-3 text-sm leading-relaxed">
              If you take card payments over the phone, the agent typing the
              card number into your CRM brings the entire call into PCI
              scope. Paytia&apos;s descope solution removes that risk —
              cardholder data never reaches your agents or your systems.
            </p>
            <p className="mt-3 text-sm">
              <a
                href="https://www.paytia.com/solutions/telephone-payments"
                target="_blank"
                rel="noopener"
                className="text-teal-light hover:text-white"
              >
                How phone payment descope works →
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Released under the MIT licence. Not affiliated with the PCI
            Security Standards Council.
          </p>
          <ul className="flex gap-4">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/which-saq/" className="hover:text-white">
                Which SAQ?
              </Link>
            </li>
            <li>
              <Link href="/glossary/" className="hover:text-white">
                Glossary
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
