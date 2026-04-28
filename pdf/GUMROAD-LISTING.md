# Gumroad listing — copy/paste ready

When you create the Gumroad creator profile, paste these into the relevant fields.

---

## Product type

**Digital product** → Free download (price: $0)

---

## Title (max ~70 chars)

**The PCI SAQ Workbook — Plain-English Compliance Checklists**

(Alternate, shorter: *Free PCI SAQ Workbook — SAQ A, A-EP, B & D in plain English*)

---

## Subtitle / summary (one line, used in search and previews)

The PCI Self-Assessment Questionnaire, translated out of QSA jargon. 25 pages. SAQ A, A-EP, B, and D. Free, MIT licensed.

---

## Long description (Markdown — paste into the description field)

> The official PCI DSS SAQ documents are written for QSAs and security professionals. If you're a finance director or operations manager who's suddenly responsible for PCI, they're rough going.
>
> This 25-page workbook translates the highest-impact controls from **SAQ A, A-EP, B, and D** into language a busy ops manager can actually use, with the evidence you'll need for each one.

### What's inside

- An **8-step decision guide** — work out which SAQ actually applies to your business, before you start ticking boxes
- **Plain-English checklists** for SAQ A, A-EP, B, and SAQ D's high-impact subset
- A **15-term PCI glossary** that decodes the alphabet soup (PAN, CHD, AOC, ASV, P2PE…)
- Print-ready formatting — tick the boxes by hand, share with your team, hand to your auditor

### Who it's for

- Finance directors and ops managers who've inherited PCI responsibility
- Small-to-mid merchants preparing for a self-assessment
- Anyone trying to scope a PCI project without paying a QSA for the first conversation

### What it isn't

This isn't a substitute for a Qualified Security Assessor — your QSA still has the final word on which SAQ applies and whether you've met it. It's a starting point: scope your work, build the team checklist, prepare for the QSA conversation.

### Why it's free

We're [Paytia](https://www.paytia.com). We build PCI-compliant phone payment systems for merchants and call centres. We see businesses get the SAQ wrong all the time — usually because the official guidance doesn't make it clear which one fits their setup. We open-sourced the checklists because most PCI guidance is written for QSAs, not the people actually trying to get compliant.

If you take card payments over the phone, the agent typing the card number into a CRM during the call brings the entire call recording, the agent's PC, the phone system, and most of the office network into PCI scope. There's a way to remove that risk entirely — see [paytia.com/phone-payments](https://www.paytia.com/solutions/telephone-payments).

### Also available

- **Interactive online version** with progress tracking: [paytia-comply.github.io/paytia-saq-checklist](https://paytia-comply.github.io/paytia-saq-checklist/)
- **Open source on GitHub** (MIT licence): [github.com/paytia-comply/paytia-saq-checklist](https://github.com/paytia-comply/paytia-saq-checklist)

Spotted something we've explained badly? Open an issue or send a PR.

---

## Tags

`pci-dss`, `compliance`, `saq`, `pci-compliance`, `payment-security`, `merchant-services`, `cyber-security`, `infosec`, `cardholder-data`, `phone-payments`

---

## Categories

Primary: **Business & Money** → Compliance / Operations
Secondary: **Computers & Tech** → Cybersecurity

---

## Price

**$0** (Free) — set "Pay what you want" with $0 minimum if you'd rather give buyers the option to tip.

---

## Cover image

The first page of the PDF works as a cover. Easiest: open `paytia-saq-workbook.pdf` in Preview, screenshot the first page (Cmd+Shift+5, capture window), upload that.

For a more polished cover image (recommended): export the cover at higher resolution with this command:

```
pdftoppm -png -r 200 -f 1 -l 1 pdf/paytia-saq-workbook.pdf pdf/cover-hi
```

Then upload `pdf/cover-hi-01.png` to Gumroad.

---

## Custom URL slug suggestion

`paytia-saq-workbook` — short, brand + content, SEO-friendly.

Final URL: `https://paytia.gumroad.com/l/paytia-saq-workbook`

---

## Post-launch checklist

- [ ] Verify the download link works (open an incognito window, follow the gumroad URL, download the PDF)
- [ ] Add the Gumroad URL to the README of `paytia-saq-checklist` (footer link)
- [ ] Add a "Get the PDF" button to `paytia-comply.github.io/paytia-saq-checklist` homepage
- [ ] Tweet/share the launch — link from any Paytia social channels
- [ ] After 7 days, check the Gumroad referrer in GA4 / Ahrefs to confirm the backlink is live
