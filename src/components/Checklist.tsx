"use client";

import { useMemo, useState } from "react";

export type ChecklistControl = {
  id: string;
  requirement: string;
  plain: string;
  evidence?: string;
};

export type ChecklistSection = {
  id: string;
  title: string;
  controls: ChecklistControl[];
};

export function Checklist({ sections }: { sections: ChecklistSection[] }) {
  const allIds = useMemo(
    () => sections.flatMap((s) => s.controls.map((c) => c.id)),
    [sections],
  );
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const completed = allIds.filter((id) => checked[id]).length;
  const total = allIds.length;
  const pct = total === 0 ? 0 : Math.round((completed / total) * 100);

  function toggle(id: string) {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function reset() {
    setChecked({});
  }

  function print() {
    if (typeof window !== "undefined") window.print();
  }

  return (
    <div>
      <div className="sticky top-16 z-30 -mx-4 mb-8 border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6 lg:top-14 no-print">
        <div className="mx-auto flex max-w-4xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <div className="flex items-baseline justify-between">
              <p className="text-sm font-semibold text-navy">
                {completed} / {total} controls complete
              </p>
              <p className="text-xs text-slate-500">{pct}%</p>
            </div>
            <div className="mt-1 h-2 overflow-hidden rounded-full bg-slate-200">
              <div
                className="h-full bg-teal transition-all"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={reset}
              className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={print}
              className="rounded-md bg-navy px-3 py-1.5 text-xs font-semibold text-white hover:bg-navy-mid"
            >
              Print
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl space-y-12">
        {sections.map((section) => {
          const sectionDone = section.controls.filter((c) => checked[c.id])
            .length;
          return (
            <section key={section.id} id={section.id}>
              <h2 className="text-2xl font-bold text-navy">
                {section.title}
                <span className="ml-3 text-sm font-medium text-slate-500">
                  {sectionDone} / {section.controls.length}
                </span>
              </h2>
              <ul className="mt-4 space-y-3">
                {section.controls.map((c) => {
                  const isOn = !!checked[c.id];
                  return (
                    <li
                      key={c.id}
                      className="checklist-item rounded-lg border border-slate-200 bg-white p-4 transition hover:border-teal/40"
                    >
                      <label className="flex cursor-pointer items-start gap-3">
                        <input
                          type="checkbox"
                          checked={isOn}
                          onChange={() => toggle(c.id)}
                          className="mt-1 h-5 w-5 shrink-0 rounded border-slate-400 text-teal focus:ring-teal"
                        />
                        <div className="flex-1">
                          <div className="flex flex-wrap items-baseline gap-2">
                            <span className="font-mono text-xs font-semibold text-teal-dark">
                              {c.id}
                            </span>
                            <span
                              className={`font-semibold ${
                                isOn ? "text-slate-400 line-through" : "text-navy"
                              }`}
                            >
                              {c.requirement}
                            </span>
                          </div>
                          <p className="mt-1 text-sm leading-relaxed text-slate-600">
                            {c.plain}
                          </p>
                          {c.evidence && (
                            <p className="mt-2 text-xs text-slate-500">
                              <strong className="text-slate-700">
                                Evidence:
                              </strong>{" "}
                              {c.evidence}
                            </p>
                          )}
                        </div>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
