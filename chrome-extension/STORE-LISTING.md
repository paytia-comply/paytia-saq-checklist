# Chrome Web Store listing — copy/paste ready

## Item name

**PCI SAQ Pocket Reference**

(75 char limit; this is 27)

## Short description (132 char max)

```
Plain-English PCI DSS reference. Find your SAQ in 8 questions, look up the jargon, and link to the full checklists.
```

(115 chars)

## Detailed description (16,000 char max — use ~500–1500)

```
PCI DSS made readable.

The official PCI Self-Assessment Questionnaires are written for QSAs and security professionals. If you're a finance director or operations manager who's just inherited PCI compliance, they're rough going.

This extension is a pocket reference that lives in your browser toolbar. Click the icon to:

— Work through the 8-step decision guide and find which SAQ actually applies to your business
— Search 15 plain-English definitions of PCI jargon (PAN, CDE, AOC, ASV, P2PE, descope, tokenisation, and more)
— Jump straight to the full plain-English checklist for SAQ A, A-EP, B, or D

Everything works offline. There's no tracking, no analytics, no account, no permissions beyond what's needed to render the popup.

Built and maintained by Paytia (https://www.paytia.com/phone-payments), a UK provider of PCI-compliant secure phone payment solutions for call centres and merchants. The full open-source workbook (web + printable PDF) is at https://paytia-comply.github.io/paytia-saq-checklist/

Free, MIT-licensed. Source code: https://github.com/paytia-comply/paytia-saq-checklist
```

## Category

**Productivity**

## Language

**English (United Kingdom)**

## Single purpose (required since 2022)

```
Provides an offline plain-English reference for PCI DSS Self-Assessment Questionnaires — a decision guide to identify the right SAQ, a glossary of PCI terms, and links to full checklists.
```

## Permissions justification

The manifest requests **no permissions** — no `host_permissions`, no `tabs`, no `storage`, nothing. This is a static popup. Should sail through review.

## Screenshots required (1280×800 or 640×400, PNG/JPEG)

You'll need 1–5 screenshots. Suggested:

1. The "Which SAQ?" tab showing the decision guide steps
2. The Glossary tab with a search active (e.g. typing "PAN")
3. The Checklists tab with the four SAQ links
4. (Optional) The popup as it appears in-browser, anchored to the toolbar

Take these by:
1. Loading the unpacked extension in Chrome (Settings → Extensions → Developer mode → Load unpacked → point at `chrome-extension/`)
2. Click the puzzle-piece icon → pin the extension
3. Click the extension icon to open the popup
4. macOS: Cmd+Shift+4 then Space, click the popup window — it captures just the popup
5. The screenshot will be ~380×Xpx — pad it to 1280×800 with a navy background or upload as-is (CWS accepts smaller dimensions if they meet the aspect ratio).

## Promotional images (optional but recommended)

- Small promo tile: 440×280 PNG/JPEG
- Marquee promo tile: 1400×560 PNG/JPEG (only if Google features the extension — skip)

## Homepage URL

```
https://paytia-comply.github.io/paytia-saq-checklist/
```

## Support email

```
curtis.nash@paytia.com
```

## Privacy practices declaration (CWS now requires this)

- Does the extension collect or use user data? **No**
- Personally identifiable information: **None collected**
- Authentication info: **None collected**
- Financial info: **None collected**
- Personal communications: **None collected**
- Location: **Not collected**
- Web history: **Not collected**
- User activity: **Not collected**
- Website content: **Not collected**

Then sign the **Limited Use** policy attestation — this extension does not transfer or use user data for any purpose other than the single purpose stated above.

## Distribution

- **Visibility:** Public
- **Geographic distribution:** All regions

## Pricing

**Free**

## Post-publish backlink check

Once live, the listing will be at:

```
https://chromewebstore.google.com/detail/pci-saq-pocket-reference/{32-char-extension-id}
```

The "Website" field on the listing renders as a link to `https://paytia-comply.github.io/paytia-saq-checklist/` — and from there to paytia.com via the existing site footer/CTAs (DR-stacking pattern, same as SourceForge but with a much higher domain authority).

To verify do-follow once published:

```bash
curl -s "https://chromewebstore.google.com/detail/{slug}/{id}" \
  | grep -E -o '<a[^>]*paytia[^>]*>' \
  | head -5
```

Look for `rel="nofollow"` — if absent, the link passes link equity. Older Chrome Web Store listings (pre-2023 layout) were do-follow; the new layout buries the developer website link behind a UI panel that may or may not be in the SSR HTML, so confirm with a real curl after publish.
