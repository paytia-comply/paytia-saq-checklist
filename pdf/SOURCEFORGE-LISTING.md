# SourceForge listing — copy/paste ready

Sign up at sourceforge.net (free), then click **Create New Project** in the top nav. SourceForge will walk you through ~6 screens. The fields below map to those screens in roughly the order they appear.

---

## Project name (display)

**The PCI SAQ Workbook**

Or alternatively (more searchable): **PCI SAQ Checklist — Plain-English Compliance Workbook**

---

## Project URL name (slug)

**`paytia-saq-checklist`**

(Final URL: `https://sourceforge.net/projects/paytia-saq-checklist/`)

---

## Summary / short description (~140 chars)

```
Free, open-source PCI DSS Self-Assessment Questionnaire (SAQ) checklists in plain English. SAQ A, A-EP, B, and D — translated out of QSA jargon.
```

---

## Long description (Markdown supported)

```
The PCI SAQ Workbook is a free, open-source, plain-English version of the PCI DSS Self-Assessment Questionnaire — designed for the people who actually have to fill it in.

The official SAQ documents are written for QSAs and security professionals. If you're a finance director or operations manager who's suddenly responsible for PCI compliance, they're rough going. This project translates the highest-impact controls from SAQ A, A-EP, B, and D into language a busy ops manager can use, with the evidence you'll need to gather for each one.

## What's inside

- **8-step decision guide** — work out which SAQ actually applies to your business before you start ticking boxes
- **Plain-English checklists** for SAQ A, A-EP, B, and SAQ D's high-impact subset
- **15-term PCI glossary** that decodes the alphabet soup (PAN, CHD, AOC, ASV, P2PE)
- **25-page printable PDF** with all the checklists in one document

## Available formats

- **Interactive web version** with progress tracking: https://paytia-comply.github.io/paytia-saq-checklist
- **Printable PDF** workbook (download from the Files tab)
- **Source code** (Next.js + React + TypeScript): https://github.com/paytia-comply/paytia-saq-checklist

## Who this is for

- Finance directors and operations managers who've inherited PCI responsibility
- Small-to-mid merchants preparing for a self-assessment
- Anyone trying to scope a PCI project without paying a QSA for the first conversation

## Why it's free

This project is maintained by Paytia (https://www.paytia.com) — a UK-based provider of PCI-compliant secure phone payment solutions for call centres and merchants. We see businesses get the SAQ wrong all the time, usually because the official guidance doesn't make it clear which SAQ fits their setup. We open-sourced these checklists because most PCI guidance is written for QSAs, not the people actually trying to get compliant.

If you take card payments over the phone, the agent typing the card number into a CRM during the call brings the entire call recording, the agent's PC, the phone system, and most of the office network into PCI scope. There's a way to remove that risk entirely — see https://www.paytia.com/phone-payments

## Licence

MIT. Use it, fork it, send pull requests. Spotted a control we've explained badly? Issues and PRs welcome on GitHub.
```

---

## Licence

**MIT License (OSI Approved)** — select from SourceForge's dropdown.

---

## Trove categorisation (use SourceForge's category browser)

These are SourceForge's "Trove" categories — pick the closest matches:

- **Topic:** Office/Business → Office Suites → Documentation Tools
- **Topic:** Software Development → Documentation
- **Topic:** Other/Nonlisted Topic (if Compliance/Security is available, prefer that)
- **Intended Audience:** Information Technology
- **Intended Audience:** System Administrators
- **Intended Audience:** End Users / Desktop
- **User Interface:** Web-based
- **Programming Language:** TypeScript
- **Programming Language:** JavaScript
- **Operating System:** OS Independent (Web-based)
- **Database Environment:** No database

---

## Homepage URL — IMPORTANT, this is the primary backlink

```
https://paytia-comply.github.io/paytia-saq-checklist/
```

This goes in the "External Homepage" field. Some merchants would point this directly at paytia.com — but pointing at the GH Pages site is better because:

1. The GH Pages site is the canonical home for the project (matches the README)
2. The GH Pages site already links to paytia.com/phone-payments in its hero, footer, and CTAs — so users still funnel to Paytia
3. We get a direct sourceforge.net → github.io DR-stacking effect

If SourceForge has a separate "Vendor / Sponsor URL" or "Funding URL" field, **put `https://www.paytia.com/phone-payments` there** as a second backlink.

---

## Tags / topics (use comma-separated where allowed)

```
pci-dss, pci-compliance, saq, payment-security, compliance-checklist, infosec, cardholder-data, phone-payments, qsa, audit-tools, pci-saq, plain-english, free-resource
```

---

## Logo / icon (square 256×256 minimum)

We already have `pdf/thumbnail-600.png` — that's a clean 600×600 navy + teal branded image. Drag-and-drop into SourceForge's logo upload.

If SourceForge requires PNG with transparent background (some platforms do), the navy gradient may need swapping for transparent. If the upload fails, tell me and I'll generate a transparent variant.

---

## Screenshots (if SourceForge prompts for them)

Two ways to get these quickly:

1. **From the live GH Pages site:** open https://paytia-comply.github.io/paytia-saq-checklist/ in Chrome, take a full-page screenshot of the homepage and one SAQ checklist page (Cmd+Shift+5 → entire screen, or use Chrome DevTools → Run command → Capture screenshot).
2. **From the PDF:** open `pdf/paytia-saq-workbook.pdf`, screenshot the cover and one content page.

Upload 2–4 screenshots showing variety: cover/hero, decision guide, a checklist page, the glossary.

---

## Initial release / Files tab

After the project is created, go to the **Files** tab and upload:

- **`paytia-saq-workbook.pdf`** from `~/Documents/Projects/paytia-saq-checklist/pdf/` — file path on disk

Set release name `v1.0` or `2026.04.28`. Add a brief release note: "Initial release. 25-page workbook covering SAQ A, A-EP, B, and D in plain English."

The Files tab gives downloads a separate URL (`sourceforge.net/projects/paytia-saq-checklist/files/...`) — these are publicly indexed and add another small backlink hop.

---

## GitHub mirror (powerful, do this)

SourceForge has a GitHub-mirror feature that automatically pulls your repo's releases into the SourceForge Files tab whenever you tag a release on GitHub.

To set it up:

1. Once the project is created, go to **Admin → Tools → Add a Tool**
2. Find **"GitHub Importer"** (sometimes called "Allura GitHub mirror") and enable it
3. Point it at `https://github.com/paytia-comply/paytia-saq-checklist`

This means future updates to the SAQ workbook automatically appear on SourceForge — no manual upload required.

---

## Post-launch checklist

- [ ] Verify the project page is live at `https://sourceforge.net/projects/paytia-saq-checklist/`
- [ ] View page source, confirm `paytia-comply.github.io/paytia-saq-checklist` and `paytia.com` are both in the rendered HTML
- [ ] Add the SourceForge URL to the README of `paytia-saq-checklist` (in the "Available formats" / footer section)
- [ ] Update the DR list in mem to ✅ DONE
- [ ] After 7 days, check Ahrefs for `sourceforge.net` as a referring domain to paytia.com

---

## Quirks to watch for

- **Approval delay:** SourceForge approves new projects automatically for most legitimate-looking submissions, but can hold for review if the project name conflicts with anything trademarked or if the description triggers their spam filter. If your project gets held for "review," respond to the verification email promptly.
- **Project description max length:** ~10,000 chars. The description above is well under, no problem.
- **Logo aspect ratio:** SourceForge auto-crops to square. If you use the 600×600 PNG, it'll display fine.
- **No tags-only fields:** unlike GitHub, SourceForge tags via "Trove" categories rather than freeform tags. The keyword list above is for use inside the description body if there's no separate tags field.
- **"Operating system" is required** even though this is web-based — pick "OS Independent" or whatever maps to platform-agnostic.
