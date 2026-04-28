import type { Metadata } from "next";
import { Checklist } from "@/components/Checklist";
import { PdfCallout } from "@/components/PdfCallout";
import { saqAEp } from "@/data/saq-a-ep";

export const metadata: Metadata = {
  title: "SAQ A-EP Checklist — PCI DSS for partial-outsource e-commerce",
  description:
    "Free SAQ A-EP checklist in plain English. ~70 PCI DSS controls for e-commerce merchants whose own webpage loads a third-party payment iframe or redirect.",
};

export default function SaqAEpPage() {
  return (
    <article className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <header className="mx-auto max-w-3xl">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-teal-dark">
          SAQ A-EP
        </p>
        <h1 className="mt-2 text-4xl font-bold text-navy sm:text-5xl">
          SAQ A-EP — E-commerce with iframe/redirect
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          For online merchants whose own checkout page loads a third-party
          payment iframe or initiates the redirect. Card data goes straight
          to the processor, but your server is in scope because a
          compromised page could redirect customers somewhere malicious.
        </p>
        <p className="mt-3 text-lg text-slate-700">
          Roughly 70 controls — significantly more than SAQ A because your
          web infrastructure has to be hardened and monitored.
        </p>
      </header>

      <PdfCallout />

      <div className="mt-12">
        <Checklist sections={saqAEp} />
      </div>
    </article>
  );
}
