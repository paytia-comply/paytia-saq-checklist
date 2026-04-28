import type { Metadata } from "next";
import { Checklist } from "@/components/Checklist";
import { PdfCallout } from "@/components/PdfCallout";
import { saqB } from "@/data/saq-b";

export const metadata: Metadata = {
  title: "SAQ B Checklist — PCI DSS for imprint and dial-out terminals",
  description:
    "Free SAQ B checklist in plain English. ~40 PCI DSS controls for merchants using only imprint machines or standalone dial-out (PSTN) payment terminals.",
};

export default function SaqBPage() {
  return (
    <article className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <header className="mx-auto max-w-3xl">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-teal-dark">
          SAQ B
        </p>
        <h1 className="mt-2 text-4xl font-bold text-navy sm:text-5xl">
          SAQ B — Imprint and dial-out terminals
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          For merchants whose only card payments come through old-school
          imprint machines or standalone payment terminals that dial out
          over PSTN. No internet-connected payment systems, no e-commerce.
        </p>
        <p className="mt-3 text-lg text-slate-700">
          Roughly 40 controls. Most of the work is physical security and
          inspecting devices for tampering.
        </p>
      </header>

      <PdfCallout />

      <div className="mt-12">
        <Checklist sections={saqB} />
      </div>
    </article>
  );
}
