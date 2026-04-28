import Link from "next/link";

const cards = [
  {
    href: "/saq-a/",
    title: "SAQ A",
    blurb:
      "Card-not-present, fully outsourced. Your processor handles everything. ~16 controls.",
    audience: "E-commerce with redirect/iframe, mail-order with outsourced call centre",
  },
  {
    href: "/saq-a-ep/",
    title: "SAQ A-EP",
    blurb:
      "E-commerce with iframe or redirect, but your server controls the page that loads them. ~70 controls.",
    audience: "Online merchants with their own checkout page that embeds the processor",
  },
  {
    href: "/saq-b/",
    title: "SAQ B",
    blurb:
      "Imprint machines or standalone dial-out terminals. No internet-connected payment systems. ~40 controls.",
    audience: "Small retail, market traders, anyone still using carbon-copy or PSTN",
  },
  {
    href: "/saq-d/",
    title: "SAQ D",
    blurb:
      "The catch-all. Used when nothing simpler fits — including most phone payment setups without a descope solution. 330+ controls.",
    audience: "Service providers, complex environments, or anyone storing/processing card data directly",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-navy via-navy-mid to-navy-light pt-12 pb-16 text-white sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <p className="font-display text-sm font-semibold uppercase tracking-widest text-teal-light">
            Open-source PCI compliance
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
            PCI DSS SAQ Checklists
            <br />
            <span className="bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent">
              in plain English
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            Free, open-source checklists for PCI DSS Self-Assessment
            Questionnaires. SAQ A, A-EP, B, and D — translated out of QSA
            jargon into language a busy ops manager can actually use.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/which-saq/"
              className="rounded-full bg-teal px-6 py-3 font-semibold text-navy transition hover:bg-teal-light"
            >
              Which SAQ do I need? →
            </Link>
            <a
              href="https://github.com/paytia-comply/paytia-saq-checklist"
              target="_blank"
              rel="noopener"
              className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-navy">
            Pick your SAQ
          </h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Not sure which one applies?{" "}
            <Link
              href="/which-saq/"
              className="font-semibold text-teal-dark underline"
            >
              Take the 8-step decision guide
            </Link>
            .
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {cards.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group rounded-xl border border-slate-200 bg-white p-6 transition hover:border-teal hover:shadow-lg"
              >
                <h3 className="text-2xl font-bold text-navy group-hover:text-teal-dark">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm font-semibold text-slate-500">
                  {c.audience}
                </p>
                <p className="mt-3 text-slate-700">{c.blurb}</p>
                <p className="mt-4 text-sm font-semibold text-teal-dark">
                  Open checklist →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-navy">
            Why this exists
          </h2>
          <div className="prose prose-slate mt-4 max-w-none">
            <p>
              The official PCI DSS SAQ documents are written for QSAs and
              security professionals. If you&apos;re a finance director or
              ops manager who&apos;s suddenly responsible for PCI, they&apos;re
              hard going.
            </p>
            <p>
              We&apos;re Paytia. We build PCI-compliant phone payment systems
              for merchants and call centres. We see businesses get the SAQ
              wrong all the time — usually because the official guidance
              doesn&apos;t make it clear which one fits their setup, or what
              each control actually means in practice.
            </p>
            <p>
              These checklists are our attempt at a shortcut: the controls
              that matter, in plain English, with the evidence you&apos;ll
              need. They&apos;re a starting point for your own assessment,
              not a substitute for one — your QSA still has the final word.
            </p>
            <p>
              <strong>Phone payments are the one area we know best.</strong>{" "}
              If your business takes card payments over the phone, the agent
              typing the card number into a CRM brings the whole call into
              PCI scope. There&apos;s a way to remove that risk entirely —{" "}
              <a
                href="https://www.paytia.com/phone-payments"
                target="_blank"
                rel="noopener"
              >
                see how Paytia descopes phone payments
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
