import Link from "next/link";

export function HeroSection() {
  return (
    <header className="relative overflow-hidden rounded-[3rem] border border-slate-900/10 bg-gradient-to-br from-slate-900 via-slate-800 to-black px-10 py-16 text-slate-100 shadow-2xl shadow-slate-900/50 sm:px-16">
      <div className="absolute -left-24 -top-32 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute -right-16 -bottom-20 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />
      <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.6em] text-cyan-300">
            Psychoeducation Studio
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Learn psychology with immersive labs, guided practice, and evidence
            informed rituals.
          </h1>
          <p className="text-base text-slate-200/90 sm:text-lg">
            Build real-world insight with micro-experiments, cognitive
            blueprints, and reflective tools designed by practitioners. Anchor
            theory, experiment with applications, and track your growth.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#learning-paths"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 shadow-lg shadow-white/40 transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Explore learning paths
            </Link>
            <Link
              href="#toolkit"
              className="rounded-full border border-slate-500/60 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-100 transition hover:border-white/80 hover:bg-white/10"
            >
              Daily practice toolkit
            </Link>
          </div>
        </div>
        <div className="flex w-full max-w-sm flex-col gap-6 rounded-3xl border border-slate-700/60 bg-slate-900/40 p-6 backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">
            Rapid orientation
          </p>
          <div className="space-y-4 text-sm text-slate-200">
            <div className="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-800/70 px-4 py-3">
              <span className="font-medium uppercase tracking-[0.2em] text-slate-300">
                Applied labs
              </span>
              <span className="text-xl font-semibold text-cyan-300">18</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-800/70 px-4 py-3">
              <span className="font-medium uppercase tracking-[0.2em] text-slate-300">
                Practice rituals
              </span>
              <span className="text-xl font-semibold text-emerald-300">27</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-800/70 px-4 py-3">
              <span className="font-medium uppercase tracking-[0.2em] text-slate-300">
                Downloadable canvases
              </span>
              <span className="text-xl font-semibold text-violet-300">12</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
