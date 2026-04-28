import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Which SAQ do I need? — 8-step PCI DSS decision guide",
  description:
    "Eight quick questions to find the right PCI DSS SAQ — A, A-EP, B, B-IP, C-VT, C, P2PE, or D — for your merchant setup.",
};

const steps = [
  {
    n: 1,
    q: "Do you take any card payments at all?",
    yes: "Continue",
    no: "PCI doesn't apply. You can stop here.",
  },
  {
    n: 2,
    q: "Are all your card payments handled by a third party that you redirect customers to?",
    yes: "If your e-commerce flow is a redirect or processor-served iframe and you never touch card data, you're a candidate for SAQ A.",
    no: "Continue — you'll need a more comprehensive SAQ.",
  },
  {
    n: 3,
    q: "Do you have your own e-commerce checkout page that loads a third-party payment iframe?",
    yes: "SAQ A-EP. Your server controls the page, so it's in scope even though card data goes straight to the processor.",
    no: "Continue.",
  },
  {
    n: 4,
    q: "Do you take payments only through standalone, dial-out (PSTN) terminals or imprint machines?",
    yes: "SAQ B. No internet, no e-commerce.",
    no: "Continue.",
  },
  {
    n: 5,
    q: "Do you take payments only through standalone IP-connected payment terminals?",
    yes: "SAQ B-IP. Same as B but the terminal is on your IP network.",
    no: "Continue.",
  },
  {
    n: 6,
    q: "Do you take payments through a virtual terminal accessed only via a single, dedicated, isolated computer?",
    yes: "SAQ C-VT.",
    no: "Continue.",
  },
  {
    n: 7,
    q: "Do you have a payment application that's connected to the internet but stored data is segmented out?",
    yes: "SAQ C.",
    no: "Continue.",
  },
  {
    n: 8,
    q: "Do you use a PCI-listed P2PE (point-to-point encryption) solution?",
    yes: "SAQ P2PE — covers merchants using only validated P2PE solutions.",
    no: "You're on SAQ D — the catch-all. This includes most phone-payment merchants without a descope solution.",
  },
];

export default function WhichSaqPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <header className="mb-10">
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-teal-dark">
          Decision guide
        </p>
        <h1 className="mt-2 text-4xl font-bold text-navy sm:text-5xl">
          Which SAQ do I need?
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          The PCI Council publishes nine different SAQs. Most merchants only
          need to consider five of them. Work through the questions below in
          order — the first &quot;yes&quot; that matches is your starting
          point.
        </p>
      </header>

      <ol className="space-y-6">
        {steps.map((s) => (
          <li
            key={s.n}
            className="rounded-xl border border-slate-200 bg-white p-6"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm font-bold text-teal-dark">
                Step {s.n}
              </span>
            </div>
            <h2 className="mt-2 text-xl font-bold text-navy">{s.q}</h2>
            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-slate-50 p-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-green">
                  Yes
                </dt>
                <dd className="mt-1 text-sm text-slate-700">{s.yes}</dd>
              </div>
              <div className="rounded-lg bg-slate-50 p-4">
                <dt className="text-xs font-semibold uppercase tracking-wider text-amber">
                  No
                </dt>
                <dd className="mt-1 text-sm text-slate-700">{s.no}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ol>

      <aside className="mt-10 rounded-xl border-l-4 border-teal bg-slate-50 p-6">
        <h2 className="text-xl font-bold text-navy">
          A note on phone payments
        </h2>
        <p className="mt-2 text-slate-700">
          If your business takes card payments over the phone, the SAQ guide
          on its own can mislead you. The agent typing a card number into a
          CRM during a call pulls the entire call recording, the agent&apos;s
          PC, the phone system, and most of the office network into PCI
          scope. That bumps you to SAQ D regardless of what the rest of your
          environment looks like.
        </p>
        <p className="mt-3 text-slate-700">
          A descope solution like{" "}
          <a
            href="https://www.paytia.com/phone-payments"
            target="_blank"
            rel="noopener"
            className="font-semibold text-teal-dark underline"
          >
            Paytia
          </a>{" "}
          intercepts the card details before they reach the agent or the
          recording — typically reducing scope from SAQ D back down to SAQ A.
        </p>
      </aside>

      <p className="mt-10 text-sm text-slate-500">
        Reminder: this is a starting point, not a substitute for a Qualified
        Security Assessor. Your acquirer or QSA has the final say on which
        SAQ applies.
      </p>

      <nav className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/saq-a/"
          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-navy hover:border-teal"
        >
          SAQ A checklist →
        </Link>
        <Link
          href="/saq-a-ep/"
          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-navy hover:border-teal"
        >
          SAQ A-EP checklist →
        </Link>
        <Link
          href="/saq-b/"
          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-navy hover:border-teal"
        >
          SAQ B checklist →
        </Link>
        <Link
          href="/saq-d/"
          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-navy hover:border-teal"
        >
          SAQ D checklist →
        </Link>
      </nav>
    </article>
  );
}
