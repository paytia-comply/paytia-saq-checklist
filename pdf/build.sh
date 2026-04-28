#!/usr/bin/env bash
# Renders pdf/source.html to pdf/paytia-saq-workbook.pdf via headless Chrome.
# Run from repo root: bash pdf/build.sh
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

if [ ! -x "$CHROME" ]; then
  echo "Chrome not found at $CHROME"
  echo "Install Google Chrome or update the path in pdf/build.sh"
  exit 1
fi

"$CHROME" \
  --headless \
  --disable-gpu \
  --no-pdf-header-footer \
  --print-to-pdf-no-header \
  --print-to-pdf="$DIR/paytia-saq-workbook.pdf" \
  "file://$DIR/source.html"

echo "Built: $DIR/paytia-saq-workbook.pdf"
ls -lh "$DIR/paytia-saq-workbook.pdf"
