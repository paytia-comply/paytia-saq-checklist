export function PdfCallout() {
  return (
    <div className="mx-auto mt-6 max-w-3xl rounded-xl border border-teal/30 bg-teal/5 p-4 sm:flex sm:items-center sm:justify-between sm:gap-6">
      <div>
        <p className="text-sm font-semibold text-navy">
          Prefer a printable workbook?
        </p>
        <p className="mt-1 text-sm text-slate-600">
          The free 25-page PDF includes all four SAQ checklists, the
          decision guide, and the glossary in one printable document.
        </p>
      </div>
      <a
        href="https://curtnash.gumroad.com/l/kjxsy"
        target="_blank"
        rel="noopener"
        className="mt-3 inline-block shrink-0 rounded-full bg-teal px-5 py-2 text-sm font-semibold text-navy transition hover:bg-teal-light sm:mt-0"
      >
        Download free PDF →
      </a>
    </div>
  );
}
