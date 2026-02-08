import { wellnessRoutines } from "@/data/psychoContent";

export function WellnessToolkit() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {wellnessRoutines.map((routine) => (
        <article
          key={routine.title}
          className="flex h-full flex-col gap-5 rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-8 shadow-lg shadow-emerald-100/60"
        >
          <div>
            <span className="rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
              Routine
            </span>
            <h3 className="mt-4 text-xl font-semibold text-emerald-900">
              {routine.title}
            </h3>
            <p className="mt-2 text-sm text-emerald-700">
              {routine.recommendedFor}
            </p>
          </div>
          <ul className="space-y-3 text-sm text-emerald-900">
            {routine.steps.map((step, index) => (
              <li
                key={step}
                className="flex items-start gap-3 rounded-2xl bg-white/80 p-3 shadow-inner shadow-emerald-100/80"
              >
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/80 text-xs font-bold text-white">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
          <p className="mt-auto text-xs font-semibold uppercase tracking-[0.3em] text-emerald-500">
            {routine.duration}
          </p>
        </article>
      ))}
    </div>
  );
}
