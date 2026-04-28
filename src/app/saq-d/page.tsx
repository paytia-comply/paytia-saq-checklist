import type { Metadata } from "next";
import { Checklist } from "@/components/Checklist";
import { PdfCallout } from "@/components/PdfCallout";
import { saqD } from "@/data/saq-d";

export const metadata: Metadata = {
  title: "SAQ D Checklist — Comprehensive PCI DSS self-assessment",
  description:
    "Free SAQ D checklist in plain English. The high-impact PCI DSS controls (subset of 330+) for merchants who store, process, or transmit cardholder data.",
};

export default function SaqDPage() {
  return (
    <article className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <header className="mx-auto max-w-3xl">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-teal-dark">
          SAQ D
        </p>
        <h1 className="mt-2 text-4xl font-bold text-navy sm:text-5xl">
          SAQ D — Comprehensive
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          The catch-all SAQ. If your environment doesn&apos;t fit any of the
          narrower questionnaires, you&apos;re on SAQ D. The full
          questionnaire covers 330+ controls — this checklist focuses on the
          high-impact ones that catch most merchants out.
        </p>
        <div className="mt-6 rounded-xl border-l-4 border-teal bg-slate-50 p-4 text-sm text-slate-700">
          <strong className="text-teal-dark">
            Phone payments? Read this first.
          </strong>{" "}
          Most merchants land on SAQ D because they take card payments over
          the phone and the agent types the number into a CRM — bringing
          calls, recordings, and the office network into scope. A descope
          solution like{" "}
          <a
            href="https://www.paytia.com/phone-payments"
            target="_blank"
            rel="noopener"
            className="font-semibold text-teal-dark underline"
          >
            Paytia
          </a>{" "}
          typically reduces SAQ D scope back to SAQ A — fewer controls,
          fewer audits, less risk.
        </div>
      </header>

      <PdfCallout />

      <div className="mt-12">
        <Checklist sections={saqD} />
      </div>
    </article>
  );
}
