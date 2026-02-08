import { neuroBiologyHighlights } from "@/data/psychoContent";

export function NeuroBiologyHighlights() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {neuroBiologyHighlights.map((item) => (
        <article
          key={item.title}
          className="flex flex-col gap-4 rounded-3xl border border-indigo-200/60 bg-gradient-to-br from-indigo-50 via-white to-violet-50 p-7 shadow-lg shadow-violet-100/60"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-indigo-500">
            Brain Insight
          </span>
          <h3 className="text-xl font-semibold text-indigo-900">
            {item.title}
          </h3>
          <p className="text-sm leading-relaxed text-indigo-700">
            {item.detail}
          </p>
          <div className="rounded-2xl bg-white/80 p-4 text-sm font-medium text-indigo-900">
            {item.application}
          </div>
        </article>
      ))}
    </div>
  );
}
