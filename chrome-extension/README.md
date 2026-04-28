# PCI SAQ Pocket Reference — Chrome extension

A toolbar-popup companion to the [PCI SAQ Workbook](https://paytia-comply.github.io/paytia-saq-checklist/). Manifest V3, no permissions, no build step.

## Test locally

1. Open `chrome://extensions` in Chrome
2. Toggle **Developer mode** (top right)
3. Click **Load unpacked**, point at this directory
4. Click the puzzle-piece icon in the toolbar → pin the extension
5. Click the icon to open the popup

## Package for Chrome Web Store

```bash
zip -r pci-saq-pocket-reference-v1.0.0.zip \
  manifest.json popup.html popup.css popup.js data.js icons/ \
  -x "*.DS_Store"
```

Upload the resulting ZIP via the [Developer Dashboard](https://chrome.google.com/webstore/devconsole). Listing copy is in `STORE-LISTING.md`. Screenshots are in `screenshots/` (1280×800, ready to upload).

## Files

- `manifest.json` — MV3 manifest, no permissions
- `popup.html` / `popup.css` / `popup.js` — toolbar popup (380px wide)
- `data.js` — decision tree, glossary, checklist URLs
- `icons/` — 16/48/128 px icons (derived from `pdf/thumbnail-600.png`)
- `screenshots/` — CWS submission screenshots (1280×800)
- `screenshots/_compose.html` — internal screenshot composer (not shipped)

## Single purpose

Provides an offline plain-English reference for PCI DSS Self-Assessment Questionnaires — a decision guide to identify the right SAQ, a glossary of PCI terms, and links to full checklists.
