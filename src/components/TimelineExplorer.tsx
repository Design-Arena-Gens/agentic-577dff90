"use client";

import { timelineMoments } from "@/data/psychoContent";
import { useState } from "react";

export function TimelineExplorer() {
  const [activeIndex, setActiveIndex] = useState(3);
  const activeMoment = timelineMoments[activeIndex];

  return (
    <div className="grid gap-8 lg:grid-cols-5 lg:items-start">
      <div className="lg:col-span-2">
        <div className="flex gap-3 overflow-x-auto rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-inner shadow-white/40 dark:border-slate-800 dark:bg-slate-900/60">
          {timelineMoments.map((moment, index) => (
            <button
              key={moment.year}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`flex min-w-[6rem] flex-col items-start rounded-xl border px-4 py-3 text-left text-sm transition-all duration-200 ${
                index === activeIndex
                  ? "border-slate-900 bg-slate-900 text-white shadow-lg shadow-slate-900/20"
                  : "border-transparent bg-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-100"
              }`}
            >
              <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
                {moment.impact.split(" ")[0]}
              </span>
              <span className="text-2xl font-semibold">{moment.year}</span>
              <span className="mt-1 font-medium">{moment.title}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="lg:col-span-3">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-10 shadow-lg shadow-slate-200/60 dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900/80">
          <p className="text-sm font-medium uppercase tracking-[0.4em] text-slate-500">
            {activeMoment.year}
          </p>
          <h3 className="mt-4 text-3xl font-semibold text-slate-900">
            {activeMoment.title}
          </h3>
          <p className="mt-6 text-base leading-relaxed text-slate-600">
            {activeMoment.description}
          </p>
          <div className="mt-8 rounded-2xl bg-white/80 p-6 text-slate-700 shadow-inner shadow-slate-200/80">
            <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Why it matters
            </h4>
            <p className="mt-3 text-base leading-relaxed">
              {activeMoment.impact}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
