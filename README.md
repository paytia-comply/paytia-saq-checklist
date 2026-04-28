# PCI DSS SAQ Checklist

Free, open-source PCI DSS Self-Assessment Questionnaire checklists in plain English.

**Live site:** [paytia-comply.github.io/paytia-saq-checklist](https://paytia-comply.github.io/paytia-saq-checklist/)

## What this is

The official PCI DSS SAQ documents are written for QSAs and security professionals. If you're a finance director or ops manager who's suddenly responsible for PCI, they're hard going.

This project translates the highest-impact controls from SAQ A, A-EP, B, and D into language a busy ops manager can actually use, with the evidence you'll need for each one.

It's a starting point for your own assessment, not a substitute for one — your QSA still has the final word.

## Contents

- **SAQ A** — card-not-present, fully outsourced (~16 controls)
- **SAQ A-EP** — e-commerce with iframe/redirect (~70 controls)
- **SAQ B** — imprint and dial-out terminals (~40 controls)
- **SAQ D** — comprehensive (high-impact subset of 330+)
- **Which SAQ?** — 8-step decision guide
- **Glossary** — 15 PCI terms in plain English

## Why we built this

We're [Paytia](https://www.paytia.com). We build PCI-compliant phone payment systems for merchants and call centres who take card payments over the phone. We see businesses get the SAQ wrong all the time — usually because the official guidance doesn't make it clear which one fits their setup.

Phone payments in particular are a trap: the moment an agent types a card number into a CRM during a call, the entire call recording, the agent's PC, and most of the office network falls into PCI scope. There's a way to remove that risk entirely — see [paytia.com/phone-payments](https://www.paytia.com/phone-payments).

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

The site is built with Next.js 16 + React 19 + Tailwind CSS 4 + TypeScript. Static export deploys to GitHub Pages automatically via the workflow in `.github/workflows/deploy.yml`.

## Contributing

Spotted a control we've explained badly? Found a SAQ change we haven't picked up? Open an issue or send a PR. Keep contributions in plain English — if a sentence sounds like it came out of a vendor whitepaper, it doesn't belong here.

## Licence

MIT. See `LICENSE`.

Not affiliated with the PCI Security Standards Council.

---

Maintained by [Paytia](https://www.paytia.com) — PCI-compliant phone payments.
