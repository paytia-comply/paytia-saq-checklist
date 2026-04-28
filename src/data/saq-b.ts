import type { ChecklistSection } from "@/components/Checklist";

export const saqB: ChecklistSection[] = [
  {
    id: "scope",
    title: "Scope &amp; eligibility",
    controls: [
      {
        id: "scope.1",
        requirement: "Imprint machines or standalone dial-out terminals only",
        plain:
          "SAQ B covers merchants with old-school imprint machines (the carbon-copy zip-zap) or standalone payment terminals that dial out via PSTN. No internet-connected terminals. No e-commerce. No phone payments through a soft phone.",
      },
      {
        id: "scope.2",
        requirement: "No electronic storage of cardholder data",
        plain:
          "If you store imprint slips in a locked cabinet, fine. If you scan them or type them into a computer, you've broken SAQ B scope.",
      },
    ],
  },
  {
    id: "physical",
    title: "Physical security of the device",
    controls: [
      {
        id: "9.1",
        requirement: "Restrict physical access to terminals",
        plain:
          "Terminals are kept in areas that aren't accessible to the general public — behind the counter, not on the customer side.",
      },
      {
        id: "9.5",
        requirement: "Inventory of devices",
        plain:
          "List every terminal: make, model, serial number, location. Update when devices are moved, replaced, or retired.",
        evidence: "Terminal inventory document",
      },
      {
        id: "9.9",
        requirement: "Inspect terminals for tampering",
        plain:
          "Train staff to spot a skimmer or modified terminal. Inspect daily and log it. The log doesn't need to be fancy — a tick-box per terminal per day is enough.",
        evidence: "Daily inspection log",
      },
    ],
  },
  {
    id: "paper",
    title: "Paper and receipts",
    controls: [
      {
        id: "9.6",
        requirement: "Physical security of paper records",
        plain:
          "Imprint slips and merchant copies of receipts go in a locked drawer or safe. Not in a tray on the counter.",
      },
      {
        id: "9.8",
        requirement: "Destroy paper records when no longer needed",
        plain:
          "Cross-cut shred or pulp anything containing card data when you don't need it any more. A stationery shredder is fine if it's cross-cut.",
        evidence: "Destruction log or witnessed-destruction certificate",
      },
      {
        id: "3.2",
        requirement: "Never store the full magnetic stripe, CVV, or PIN",
        plain:
          "Even if your old terminal somehow records it, don't keep printed copies. Truncated PAN (last 4 digits) is fine on receipts.",
      },
    ],
  },
  {
    id: "policy",
    title: "Policy &amp; people",
    controls: [
      {
        id: "12.1",
        requirement: "Information security policy",
        plain:
          "Same as SAQ A — one document, signed by a director, reviewed annually. For SAQ B it can be very short because the environment is so simple.",
        evidence: "Signed policy document",
      },
      {
        id: "12.6",
        requirement: "Security awareness training",
        plain:
          "Every staff member who handles cards gets trained on PCI basics when they start, and a refresh once a year. Keep a sign-off sheet.",
        evidence: "Training records",
      },
      {
        id: "12.10.1",
        requirement: "Incident response plan",
        plain:
          "Two pages. Who to call if a terminal looks tampered with. Who to call if you suspect a breach. Test it once a year.",
      },
    ],
  },
];
