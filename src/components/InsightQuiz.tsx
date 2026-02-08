"use client";

import { useMemo, useState } from "react";

type Question = {
  prompt: string;
  choices: { label: string; explanation: string; correct: boolean }[];
};

const questions: Question[] = [
  {
    prompt:
      "A learner keeps procrastinating even after receiving frequent reminders. Which cognitive strategy best targets the bottleneck?",
    choices: [
      {
        label: "Introduce random rewards for completed tasks",
        explanation:
          "Unpredictable reinforcement can energize behavior, but it bypasses the root decision processes.",
        correct: false,
      },
      {
        label: "Map the thought → emotion → action loop and redesign the cue",
        explanation:
          "Surfacing the cognitive appraisal behind procrastination unlocks targeted reframing.",
        correct: true,
      },
      {
        label: "Increase peer accountability sessions to add social pressure",
        explanation:
          "Social support helps, yet cognitive overload may remain unresolved without appraisal work.",
        correct: false,
      },
    ],
  },
  {
    prompt:
      "During a therapy intake you notice a client avoiding eye contact and fidgeting. What's the most trauma-informed first move?",
    choices: [
      {
        label: "Ask directly about traumatic history to surface root causes",
        explanation:
          "Going straight to trauma content without regulation can compound distress.",
        correct: false,
      },
      {
        label: "Co-create a grounding ritual and pace the session with consent checks",
        explanation:
          "Safety-first pacing builds trust, supporting disclosure when the client is ready.",
        correct: true,
      },
      {
        label: "Redirect to solution-focused goals to keep momentum high",
        explanation:
          "Goal setting matters, but skipping stabilization may erode the alliance.",
        correct: false,
      },
    ],
  },
  {
    prompt:
      "You're designing a wellbeing curriculum for hybrid teams. Which lever maximizes social connectedness?",
    choices: [
      {
        label:
          "Weekly lectures on communication theory coupled with post-session quizzes",
        explanation:
          "Conceptual knowledge is helpful, yet applied shared experiences create deeper bonds.",
        correct: false,
      },
      {
        label:
          "Rotating peer storytelling sessions with structured empathy prompts",
        explanation:
          "Story-sharing builds vulnerability, empathy, and trust in distributed environments.",
        correct: true,
      },
      {
        label:
          "Individual performance dashboards that visualize collaborative metrics",
        explanation:
          "Metrics can align goals, but they rarely spark emotional resonance alone.",
        correct: false,
      },
    ],
  },
];

export function InsightQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [hasFinished, setHasFinished] = useState(false);

  const progress = useMemo(
    () => Math.round(((currentQuestion + (selectedIndex !== null ? 1 : 0)) / questions.length) * 100),
    [currentQuestion, selectedIndex]
  );

  function handleChoice(index: number) {
    if (selectedIndex !== null) return;

    setSelectedIndex(index);
    if (questions[currentQuestion].choices[index].correct) {
      setScore((prev) => prev + 1);
    }
  }

  function handleNext() {
    if (selectedIndex === null) return;

    const isLast = currentQuestion === questions.length - 1;
    if (isLast) {
      setHasFinished(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedIndex(null);
    }
  }

  function handleReset() {
    setCurrentQuestion(0);
    setSelectedIndex(null);
    setScore(0);
    setHasFinished(false);
  }

  const question = questions[currentQuestion];

  return (
    <div className="relative overflow-hidden rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-sky-50 p-8 shadow-xl shadow-cyan-100/80">
      <span className="absolute -left-12 -top-12 h-32 w-32 rounded-full bg-cyan-300/40 blur-3xl" />
      <span className="absolute -bottom-14 -right-10 h-36 w-36 rounded-full bg-sky-400/30 blur-3xl" />
      <div className="relative z-10 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">
            Insight Quiz
          </p>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
              Progress
            </span>
            <div className="h-2 w-32 overflow-hidden rounded-full bg-white/60">
              <div
                className="h-full rounded-full bg-cyan-500 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {!hasFinished ? (
          <>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                {question.prompt}
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              {question.choices.map((choice, index) => {
                const isSelected = selectedIndex === index;
                const hasAnswered = selectedIndex !== null;
                const stateClasses = (() => {
                  if (!hasAnswered) {
                    return "border-cyan-200 bg-white/80 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-200/70";
                  }
                  if (choice.correct) {
                    return "border-emerald-400 bg-emerald-50 shadow-lg shadow-emerald-200/60";
                  }
                  if (isSelected && !choice.correct) {
                    return "border-rose-400 bg-rose-50/90";
                  }
                  return "border-slate-200 bg-white/60 opacity-60";
                })();
                return (
                  <button
                    key={choice.label}
                    type="button"
                    onClick={() => handleChoice(index)}
                    className={`rounded-2xl border p-5 text-left text-sm text-slate-700 transition duration-200 ${stateClasses}`}
                  >
                    <p className="font-semibold text-slate-900">
                      {choice.label}
                    </p>
                    {isSelected || choice.correct ? (
                      <p className="mt-2 text-sm text-slate-600">
                        {choice.explanation}
                      </p>
                    ) : null}
                  </button>
                );
              })}
            </div>
            <div className="flex items-center justify-between pt-4">
              <p className="text-sm text-slate-600">
                Question {currentQuestion + 1} of {questions.length}
              </p>
              <button
                type="button"
                disabled={selectedIndex === null}
                onClick={handleNext}
                className="rounded-full bg-cyan-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-300/80 transition enabled:hover:bg-cyan-700 enabled:hover:shadow-xl disabled:cursor-not-allowed disabled:bg-cyan-300"
              >
                {currentQuestion === questions.length - 1
                  ? "See results"
                  : "Next"}
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center gap-6 text-center">
            <h3 className="text-3xl font-semibold text-slate-900">
              You scored {score} / {questions.length}
            </h3>
            <p className="max-w-md text-sm text-slate-600">
              Keep iterating your practice loops. Revisit modules that stretch
              your current edges and repeat the quiz whenever you need a quick
              diagnostic.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="rounded-full bg-slate-900 px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-400/60 transition hover:bg-slate-800"
            >
              Try again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
