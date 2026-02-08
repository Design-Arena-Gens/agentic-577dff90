import { learningModules } from "@/data/psychoContent";

const focusLabel: Record<(typeof learningModules)[number]["focus"], string> = {
  behavioral: "Behavioral",
  cognitive: "Cognitive",
  social: "Social",
  clinical: "Clinical",
  developmental: "Developmental",
};

const focusAccent: Record<(typeof learningModules)[number]["focus"], string> = {
  behavioral: "from-rose-500/20 to-amber-500/40 border-rose-300/50",
  cognitive: "from-sky-500/20 to-indigo-500/40 border-sky-300/50",
  social: "from-emerald-500/20 to-teal-500/40 border-emerald-300/50",
  clinical: "from-purple-500/20 to-fuchsia-500/40 border-purple-300/50",
  developmental: "from-orange-400/20 to-pink-500/30 border-orange-300/50",
};

export function LearningPathGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {learningModules.map((module) => (
        <article
          key={module.id}
          className={`group relative overflow-hidden rounded-3xl border bg-white/70 p-8 shadow-sm shadow-slate-200 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70 dark:border-slate-900/40 dark:bg-slate-900/70`}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${focusAccent[module.focus]} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
            aria-hidden
          />
          <div className="relative flex h-full flex-col gap-5">
            <span className="self-start rounded-full border border-white/40 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700 shadow-sm">
              {focusLabel[module.focus]}
            </span>
            <h3 className="text-2xl font-semibold text-slate-900">
              {module.title}
            </h3>
            <p className="text-sm text-slate-600">{module.description}</p>
            <div className="mt-auto flex flex-wrap items-center gap-3 text-sm text-slate-500">
              <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700">
                {module.duration}
              </span>
              <span className="rounded-full border border-slate-200 px-3 py-1 font-medium text-slate-700">
                {module.skillLevel}
              </span>
            </div>
            <ul className="mt-5 space-y-3 text-sm text-slate-600">
              {module.outcomes.map((outcome) => (
                <li className="flex items-start gap-3" key={outcome}>
                  <span className="mt-1 h-2.5 w-2.5 min-w-[0.625rem] rounded-full bg-slate-900" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
