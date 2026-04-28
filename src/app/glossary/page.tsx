import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PCI DSS Glossary — 15 terms in plain English",
  description:
    "Plain-English glossary of PCI DSS terms — PAN, CDE, AOC, ASV, CVV, CHD, descope, P2PE, QSA, SAQ, tokenisation, and more.",
};

const terms: { term: string; def: string; aka?: string }[] = [
  {
    term: "PAN",
    aka: "Primary Account Number",
    def: "The 16-digit (or sometimes 13–19) card number printed on the front of a payment card. The single most regulated piece of data in PCI DSS.",
  },
  {
    term: "CHD",
    aka: "Cardholder Data",
    def: "PAN, plus optionally cardholder name, expiry date, and service code. Storing or transmitting any of these brings you into scope.",
  },
  {
    term: "SAD",
    aka: "Sensitive Authentication Data",
    def: "Full magstripe contents, CVV/CVC2, and PIN block. PCI DSS forbids storing SAD after authorisation, even if encrypted.",
  },
  {
    term: "CVV / CVC2 / CID",
    def: "The 3- or 4-digit security number printed on the card (not encoded in the magstripe). Used to verify card-not-present transactions. Never stored after authorisation.",
  },
  {
    term: "CDE",
    aka: "Cardholder Data Environment",
    def: "Every system, network, person, and process that stores, processes, or transmits cardholder data — plus everything connected to it. The smaller you keep your CDE, the less PCI work you have.",
  },
  {
    term: "Descope",
    def: "Architectural changes that remove cardholder data from a system or process so it falls outside PCI scope. Phone-payment descope solutions intercept card details before they reach the agent or call recording.",
  },
  {
    term: "SAQ",
    aka: "Self-Assessment Questionnaire",
    def: "The form a merchant completes annually to attest PCI compliance. Nine variants (A, A-EP, B, B-IP, C-VT, C, P2PE, D-Merchant, D-Service Provider) covering different environments.",
  },
  {
    term: "AOC",
    aka: "Attestation of Compliance",
    def: "A signed declaration that an entity (merchant or service provider) has completed its PCI assessment and meets requirements. You collect AOCs from your service providers annually.",
  },
  {
    term: "ASV",
    aka: "Approved Scanning Vendor",
    def: "A PCI-Council-approved third party that runs quarterly external vulnerability scans against your internet-facing systems.",
  },
  {
    term: "QSA",
    aka: "Qualified Security Assessor",
    def: "An individual or firm certified by the PCI Council to conduct on-site PCI DSS assessments. Required for Level 1 merchants; optional but useful for smaller ones.",
  },
  {
    term: "ROC",
    aka: "Report on Compliance",
    def: "The full assessment report a QSA produces for Level 1 merchants. Replaces the SAQ for those merchants.",
  },
  {
    term: "P2PE",
    aka: "Point-to-Point Encryption",
    def: "A PCI-validated approach where card data is encrypted at the point of capture (e.g. inside a payment terminal) and only decrypted by the processor. Massively reduces merchant scope.",
  },
  {
    term: "Tokenisation",
    def: "Replacing the PAN with a non-sensitive equivalent (a token) that has no exploitable value. Lets merchants reference customer cards (e.g. for refunds) without storing the PAN.",
  },
  {
    term: "DTMF masking",
    def: "Phone-payment technique where the customer types card details on their handset keypad and the DTMF tones are intercepted, captured by a PCI-compliant payment system, and replaced with masked tones in the call recording. The agent never hears or sees the card data.",
  },
  {
    term: "Acquirer",
    def: "The bank or financial institution that processes card payments on a merchant&apos;s behalf and ultimately decides whether the merchant is PCI-compliant.",
  },
];

export default function GlossaryPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <header>
        <p className="font-display text-sm font-semibold uppercase tracking-widest text-teal-dark">
          Glossary
        </p>
        <h1 className="mt-2 text-4xl font-bold text-navy sm:text-5xl">
          PCI DSS terms in plain English
        </h1>
        <p className="mt-4 text-lg text-slate-700">
          The terms you&apos;ll see most often when you&apos;re working
          through a SAQ.
        </p>
      </header>

      <dl className="mt-10 space-y-6">
        {terms.map((t) => (
          <div
            key={t.term}
            id={t.term.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <dt>
              <span className="text-xl font-bold text-navy">{t.term}</span>
              {t.aka && (
                <span className="ml-2 text-sm font-medium text-slate-500">
                  ({t.aka})
                </span>
              )}
            </dt>
            <dd
              className="mt-2 text-slate-700"
              dangerouslySetInnerHTML={{ __html: t.def }}
            />
          </div>
        ))}
      </dl>
    </article>
  );
}
