import type { ChecklistSection } from "@/components/Checklist";

export const saqA: ChecklistSection[] = [
  {
    id: "policy",
    title: "Policy & scope",
    controls: [
      {
        id: "12.1",
        requirement: "Maintain an information security policy",
        plain:
          "Write down how your business handles security. One short document, reviewed once a year, signed off by a director. It doesn't need to be 80 pages.",
        evidence: "Signed policy document, last-reviewed date",
      },
      {
        id: "12.4",
        requirement: "Define PCI responsibilities",
        plain:
          "Name the person who owns PCI in your business. Could be the finance director, ops manager, whoever. Just one named person, written down.",
        evidence: "Org chart or job description naming the role",
      },
      {
        id: "12.8",
        requirement: "Manage third-party service providers",
        plain:
          "List every supplier that touches card data — your payment processor, hosting provider, the iframe vendor. Get their AOC (Attestation of Compliance) once a year.",
        evidence: "Supplier list + current AOCs on file",
      },
    ],
  },
  {
    id: "outsourcing",
    title: "Outsourcing & iframe controls",
    controls: [
      {
        id: "2.4.a",
        requirement: "Confirm payment is fully outsourced",
        plain:
          "Your website redirects customers to your payment processor's page, OR uses an iframe served entirely from the processor. You never see the card number, not even briefly.",
        evidence: "Architecture diagram showing redirect/iframe flow",
      },
      {
        id: "9.5",
        requirement: "Protect payment terminals from tampering",
        plain:
          "If you have any physical card terminals (e.g. for backup), keep a list of them, check them weekly for tampering, and train staff on what to look for.",
        evidence: "Terminal inventory + inspection log",
      },
    ],
  },
  {
    id: "incident",
    title: "Incident response",
    controls: [
      {
        id: "12.10.1",
        requirement: "Have a written incident response plan",
        plain:
          "Two pages is fine. Who do you call if you suspect a breach? How do you contact the card brands? Test it once a year with a tabletop exercise.",
        evidence: "Plan document + last tabletop exercise notes",
      },
      {
        id: "12.10.5",
        requirement: "Monitor security alerts from your providers",
        plain:
          "If your processor or hosting provider sends a security bulletin, somebody reads it within 24 hours. Set up an inbox alias if you have to.",
        evidence: "Email alias / monitoring setup",
      },
    ],
  },
  {
    id: "vendor",
    title: "Vendor relationships",
    controls: [
      {
        id: "12.8.2",
        requirement: "Written agreement with each provider",
        plain:
          "Your contract with the payment processor and any other PCI-relevant supplier needs to specifically say they're responsible for the security of cardholder data they handle.",
        evidence: "Signed contracts referencing PCI responsibilities",
      },
      {
        id: "12.8.4",
        requirement: "Track supplier compliance status",
        plain:
          "Keep a one-row spreadsheet per supplier: name, what they do, their PCI level, when their AOC was last issued, when it expires.",
        evidence: "Supplier compliance tracker spreadsheet",
      },
    ],
  },
  {
    id: "phone",
    title: "Phone payments (if applicable)",
    controls: [
      {
        id: "phone.1",
        requirement: "Take any payments over the phone?",
        plain:
          "If yes — even occasionally — SAQ A doesn't cover it. The agent typing the card number into a CRM brings the entire call into PCI scope. You need a descope solution like Paytia, or you'll need to complete SAQ D instead.",
        evidence:
          "Either no phone payments, or a phone-payment descope solution in place",
      },
    ],
  },
];
