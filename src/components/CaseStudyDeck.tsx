import { caseStudies } from "@/data/psychoContent";

export function CaseStudyDeck() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {caseStudies.map((study) => (
        <article
          key={study.title}
          className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white/80 p-7 shadow-lg shadow-slate-200/60 transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
        >
          <div className="flex flex-col gap-4">
            <span className="self-start rounded-full bg-slate-900 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-white">
              Scenario Lab
            </span>
            <h3 className="text-2xl font-semibold text-slate-900">
              {study.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              {study.scenario}
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-slate-900/90 p-6 text-slate-100">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
              Challenge
            </p>
            <p className="text-base font-medium leading-relaxed">
              {study.question}
            </p>
            <div className="space-y-3 text-sm leading-relaxed text-slate-200/90">
              {study.insights.map((insight) => (
                <p key={insight} className="rounded-xl bg-slate-800/70 p-3">
                  {insight}
                </p>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
