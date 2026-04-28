// PCI SAQ Pocket Reference — data
// All content here is the same source-of-truth data as the
// paytia-saq-checklist GH Pages site, kept in plain JS so the
// extension has zero build step.

const decisionSteps = [
  {
    n: 1,
    q: "Do you take any card payments at all?",
    yes: "Continue.",
    no: "PCI doesn't apply. You can stop here.",
  },
  {
    n: 2,
    q: "Are all card payments handled by a third party that you redirect customers to?",
    yes: "If your e-commerce flow is a redirect or processor-served iframe and you never touch card data, you're a candidate for SAQ A.",
    no: "Continue.",
  },
  {
    n: 3,
    q: "Do you have your own e-commerce checkout that loads a third-party payment iframe?",
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
    yes: "SAQ P2PE.",
    no: "You're on SAQ D — the catch-all. Most phone-payment merchants without a descope solution land here.",
  },
];

const glossary = [
  { term: "PAN", aka: "Primary Account Number", def: "The 16-digit card number on the front of a payment card. The single most regulated piece of data in PCI DSS." },
  { term: "CHD", aka: "Cardholder Data", def: "PAN, plus optionally cardholder name, expiry date, and service code. Storing or transmitting any of these brings you into scope." },
  { term: "SAD", aka: "Sensitive Authentication Data", def: "Full magstripe contents, CVV/CVC2, and PIN block. PCI DSS forbids storing SAD after authorisation, even if encrypted." },
  { term: "CVV / CVC2 / CID", def: "The 3- or 4-digit security number printed on the card. Used for card-not-present transactions. Never stored after authorisation." },
  { term: "CDE", aka: "Cardholder Data Environment", def: "Every system, network, person, and process that stores, processes, or transmits cardholder data — plus everything connected to it. The smaller you keep your CDE, the less PCI work you have." },
  { term: "Descope", def: "Architectural changes that remove cardholder data from a system or process so it falls outside PCI scope. Phone-payment descope solutions intercept card details before they reach the agent or call recording." },
  { term: "SAQ", aka: "Self-Assessment Questionnaire", def: "The form a merchant completes annually to attest PCI compliance. Nine variants (A, A-EP, B, B-IP, C-VT, C, P2PE, D-Merchant, D-Service Provider)." },
  { term: "AOC", aka: "Attestation of Compliance", def: "A signed declaration that an entity has completed its PCI assessment and meets requirements. You collect AOCs from your service providers annually." },
  { term: "ASV", aka: "Approved Scanning Vendor", def: "A PCI-Council-approved third party that runs quarterly external vulnerability scans against your internet-facing systems." },
  { term: "QSA", aka: "Qualified Security Assessor", def: "An individual or firm certified by the PCI Council to conduct on-site PCI DSS assessments. Required for Level 1 merchants." },
  { term: "ROC", aka: "Report on Compliance", def: "The full assessment report a QSA produces for Level 1 merchants. Replaces the SAQ for those merchants." },
  { term: "P2PE", aka: "Point-to-Point Encryption", def: "PCI-validated approach where card data is encrypted at the point of capture and only decrypted by the processor. Massively reduces merchant scope." },
  { term: "Tokenisation", def: "Replacing the PAN with a non-sensitive equivalent (a token) that has no exploitable value. Lets merchants reference customer cards without storing the PAN." },
  { term: "DTMF masking", def: "Phone-payment technique where the customer types card details on their handset keypad and the DTMF tones are intercepted, captured by a PCI-compliant payment system, and replaced with masked tones in the call recording. The agent never hears or sees the card data." },
  { term: "Acquirer", def: "The bank that processes card payments on a merchant's behalf and ultimately decides whether the merchant is PCI-compliant." },
];

const checklistUrls = {
  "SAQ A": "https://paytia-comply.github.io/paytia-saq-checklist/saq-a/",
  "SAQ A-EP": "https://paytia-comply.github.io/paytia-saq-checklist/saq-a-ep/",
  "SAQ B": "https://paytia-comply.github.io/paytia-saq-checklist/saq-b/",
  "SAQ D": "https://paytia-comply.github.io/paytia-saq-checklist/saq-d/",
};
