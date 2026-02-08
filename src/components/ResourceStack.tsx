const resources = [
  {
    title: "Psych Science Dispatch",
    description:
      "Weekly digest translating new research into applied experiments for classrooms and clinics.",
    link: "https://www.psychologicalscience.org/",
    format: "Newsletter",
  },
  {
    title: "The Psychology Podcast",
    description:
      "Conversations with scientists and practitioners bridging cognitive science, wellbeing, and design.",
    link: "https://scottbarrykaufman.com/podcast/",
    format: "Podcast",
  },
  {
    title: "Open Psychometrics Library",
    description:
      "Interactive assessments with open-source scoring for personality, cognition, and wellbeing.",
    link: "https://openpsychometrics.org/",
    format: "Tools",
  },
  {
    title: "Society for the Teaching of Psychology",
    description:
      "Lesson plans, activity guides, and lab simulations curated for active psychoeducation.",
    link: "https://teachpsych.org/",
    format: "Community",
  },
];

export function ResourceStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {resources.map((resource) => (
        <a
          key={resource.title}
          href={resource.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-md shadow-slate-200/60 transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
        >
          <div className="flex flex-col gap-4">
            <span className="self-start rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white">
              {resource.format}
            </span>
            <h3 className="text-xl font-semibold text-slate-900">
              {resource.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {resource.description}
            </p>
          </div>
          <span className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600 transition group-hover:translate-x-1">
            Open resource →
          </span>
        </a>
      ))}
    </div>
  );
}
