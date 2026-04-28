import type { Metadata } from "next";
import { Checklist } from "@/components/Checklist";
import { saqA } from "@/data/saq-a";

export const metadata: Metadata = {
  title: "SAQ A Checklist — PCI DSS for fully outsourced merchants",
  description:
    "Free SAQ A checklist in plain English. ~16 PCI DSS controls for card-not-present merchants who fully outsource cardholder data handling.",
};

export default function SaqAPage() {
  return (
    <article className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <header className="mx-auto max-w-3xl">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-teal-dark">
          SAQ A
        </p>
        <h1 className="mt-2 text-4xl font-bold text-navy sm:text-5xl">
          SAQ A — Card-not-present, fully outsourced
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          The lightest SAQ. For merchants who never see, store, or transmit
          card data because a third party (your processor) handles all of
          it. Roughly 16 controls covering policy, third-party management,
          and physical security of any backup terminals.
        </p>
        <div className="mt-6 rounded-xl border-l-4 border-amber bg-amber/5 p-4 text-sm text-slate-700">
          <strong className="text-amber">Heads up:</strong> SAQ A does not
          cover phone payments where agents type card numbers into a CRM. If
          that&apos;s you,{" "}
          <a
            href="https://www.paytia.com/phone-payments"
            target="_blank"
            rel="noopener"
            className="font-semibold text-teal-dark underline"
          >
            Paytia&apos;s phone-payment descope
          </a>{" "}
          is what gets you back to SAQ A. Without it, you&apos;re on SAQ D.
        </div>
      </header>

      <div className="mt-12">
        <Checklist sections={saqA} />
      </div>
    </article>
  );
}
