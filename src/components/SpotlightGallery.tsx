import Image from "next/image";
import { spotlightFigures } from "@/data/psychoContent";

export function SpotlightGallery() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {spotlightFigures.map((figure) => (
        <article
          key={figure.name}
          className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-md shadow-slate-200/70 transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
        >
          <span className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent opacity-0 transition group-hover:opacity-100" />
          <div className="flex flex-col gap-4">
            <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-2xl bg-slate-100 shadow-inner">
              <Image
                src={figure.image}
                alt={figure.name}
                fill
                className="object-cover object-center"
                sizes="112px"
              />
            </div>
            <div className="flex flex-col gap-2 text-center">
              <h3 className="text-lg font-semibold text-slate-900">
                {figure.name}
              </h3>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                {figure.era}
              </p>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              {figure.contribution}
            </p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {figure.impact.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-2 text-left text-slate-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
