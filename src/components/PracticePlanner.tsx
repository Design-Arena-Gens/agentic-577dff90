"use client";

import { useMemo, useState } from "react";

const focusZones = [
  {
    label: "Self Regulation",
    practices: [
      "Body scan with temperature shifts",
      "Emotion labeling using the Plutchik wheel",
      "Pair breathing with progressive muscle release",
    ],
  },
  {
    label: "Cognitive Flexibility",
    practices: [
      "Reframe a current challenge with three alternative narratives",
      "Practice divergent thinking with a 5-minute idea sprint",
      "Run a mental contrasting loop (WOOP)",
    ],
  },
  {
    label: "Social Connection",
    practices: [
      "Send a gratitude voice note to a collaborator",
      "Host a 10-minute curiosity exchange",
      "Plan a micro-ritual for team onboarding",
    ],
  },
  {
    label: "Meaning & Purpose",
    practices: [
      "Write a legacy statement for your current project",
      "Map your values to today's top three tasks",
      "Curate a playlist that reflects your desired emotional energy",
    ],
  },
];

export function PracticePlanner() {
  const [seed, setSeed] = useState(() => Date.now());

  const plan = useMemo(() => {
    const random = seededRandom(seed);
    return focusZones.map((zone) => {
      const index = Math.floor(random() * zone.practices.length);
      return {
        label: zone.label,
        practice: zone.practices[index],
      };
    });
  }, [seed]);

  return (
    <div className="rounded-3xl border border-slate-900/10 bg-slate-900 p-8 text-slate-100 shadow-xl shadow-slate-900/40">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-300">
              Practice Generator
            </p>
            <h3 className="mt-2 text-2xl font-semibold">
              Focused Psychoeducation Sprint
            </h3>
          </div>
          <button
            type="button"
            onClick={() => setSeed(Date.now())}
            className="rounded-full border border-cyan-300/60 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 transition hover:bg-cyan-500/20"
          >
            Refresh plan
          </button>
        </div>
        <p className="text-sm text-slate-300">
          Blend applied practice with reflection. Each refresh assembles a new
          micro-learning sprint for today&apos;s context.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {plan.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-700 bg-slate-800/70 p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                {item.label}
              </p>
              <p className="mt-3 text-sm text-slate-100">{item.practice}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function seededRandom(seed: number) {
  let value = seed % 2147483647;
  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}
