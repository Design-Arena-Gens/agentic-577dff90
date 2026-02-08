export type LearningModule = {
  id: string;
  title: string;
  description: string;
  focus: "behavioral" | "cognitive" | "social" | "clinical" | "developmental";
  duration: string;
  outcomes: string[];
  skillLevel: "Beginner" | "Intermediate" | "Advanced";
};

export type SpotlightFigure = {
  name: string;
  contribution: string;
  impact: string[];
  image: string;
  era: string;
};

export type CaseStudy = {
  title: string;
  scenario: string;
  question: string;
  insights: string[];
};

export type WellnessRoutine = {
  title: string;
  steps: string[];
  recommendedFor: string;
  duration: string;
};

export const learningModules: LearningModule[] = [
  {
    id: "behavioral-blueprint",
    title: "Behavioral Blueprint",
    description:
      "Decode how conditioning, reinforcement, and habit loops shape observable behavior.",
    focus: "behavioral",
    duration: "6 lessons · 3 hrs",
    outcomes: [
      "Classical vs operant conditioning map",
      "Trigger → reward analysis framework",
      "Behavior change intervention canvas",
    ],
    skillLevel: "Beginner",
  },
  {
    id: "cognitive-lab",
    title: "Cognitive Laboratory",
    description:
      "Explore attention, perception, memory, and decision-making with guided cognitive experiments.",
    focus: "cognitive",
    duration: "7 lessons · 4 hrs",
    outcomes: [
      "Working memory benchmark worksheet",
      "Bias spotting journal",
      "Rapid problem reframing drill",
    ],
    skillLevel: "Intermediate",
  },
  {
    id: "social-dynamics",
    title: "Social Dynamics Studio",
    description:
      "Understand group behavior, identity formation, and persuasion with applied lab sessions.",
    focus: "social",
    duration: "5 lessons · 2.5 hrs",
    outcomes: [
      "Conformity pressure simulator",
      "Communication climate inventory",
      "Micro-culture analysis toolkit",
    ],
    skillLevel: "Beginner",
  },
  {
    id: "clinical-mastery",
    title: "Clinical Skills Masterclass",
    description:
      "Practice formulation, assessment, and evidence-based interventions through case immersions.",
    focus: "clinical",
    duration: "9 lessons · 6 hrs",
    outcomes: [
      "Case formulation storyboard",
      "Differential diagnosis checklist",
      "Therapeutic alliance scorecard",
    ],
    skillLevel: "Advanced",
  },
  {
    id: "lifespan-architect",
    title: "Lifespan Development Architect",
    description:
      "Trace human development arcs from infancy to late adulthood with milestone mapping labs.",
    focus: "developmental",
    duration: "6 lessons · 3.5 hrs",
    outcomes: [
      "Milestone heatmap builder",
      "Protective factor grid",
      "Narrative identity interview guide",
    ],
    skillLevel: "Intermediate",
  },
];

export const spotlightFigures: SpotlightFigure[] = [
  {
    name: "B. F. Skinner",
    contribution: "Reinforcement schedules and radical behaviorism reshaped learning theory.",
    impact: [
      "Revolutionized classroom reinforcement strategies",
      "Inspired gamified habit tracking systems",
      "Groundwork for modern behavioral therapy protocols",
    ],
    image: "/figures/skinner.svg",
    era: "1930s-1970s",
  },
  {
    name: "Jean Piaget",
    contribution:
      "Unveiled stage-based cognitive development, reframing how we see lifelong learning.",
    impact: [
      "Catalyzed learner-centered curriculum design",
      "Set the stage for developmental diagnostics",
      "Influenced modern UX onboarding flows",
    ],
    image: "/figures/piaget.svg",
    era: "1920s-1980s",
  },
  {
    name: "Albert Bandura",
    contribution:
      "Social learning theory and self-efficacy reframed the role of modeling and agency.",
    impact: [
      "Sparked observational learning research",
      "Empowered coaching and mentorship models",
      "Anchored cognitive-behavioral therapy advances",
    ],
    image: "/figures/bandura.svg",
    era: "1960s-2000s",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "The Vanishing Motivation",
    scenario:
      "A startup team hits burnout after an aggressive product sprint. Engagement metrics drop and conflicts spike.",
    question: "How would you rebuild intrinsic motivation without relying on bonuses?",
    insights: [
      "Use self-determination theory to restore autonomy, competence, and relatedness.",
      "Layer short-cycle mastery quests instead of long crunch timelines.",
      "Rebuild rituals that reinforce psychological safety and peer recognition.",
    ],
  },
  {
    title: "Memory Palace in Chaos",
    scenario:
      "A student with ADHD struggles with working memory during high-stress exam blocks despite accommodations.",
    question: "Which cognitive strategies align with their neuroprofile?",
    insights: [
      "Chunk multi-step tasks and anchor them to sensory cues.",
      "Gamify recall with spaced retrieval and immediate feedback loops.",
      "Integrate mindfulness micro-practices to reset executive attention.",
    ],
  },
  {
    title: "Culture Clash in Care",
    scenario:
      "A therapy client from a collectivist culture resists individual-focused CBT assignments.",
    question: "How do you adapt the plan while keeping treatment goals on track?",
    insights: [
      "Blend family-inclusive rituals to honor cultural norms.",
      "Reframe cognitive work through relational narratives.",
      "Use collaborative goal setting to align cultural values and therapy outcomes.",
    ],
  },
];

export const wellnessRoutines: WellnessRoutine[] = [
  {
    title: "Executive Function Warm-Up",
    steps: [
      "3-minute sensory scan",
      "Priority triad sketch in a bullet journal",
      "Commitment contract with a future self note",
    ],
    recommendedFor: "Students before deep work sessions",
    duration: "10 minutes",
  },
  {
    title: "Emotion Regulation Reset",
    steps: [
      "Label current affect with the feelings wheel",
      "Box breathing loop with gradual deceleration",
      "Reappraisal writing prompt focused on agency",
    ],
    recommendedFor: "Practitioners between emotionally heavy sessions",
    duration: "8 minutes",
  },
  {
    title: "Social Battery Recharge",
    steps: [
      "Quick perspective-taking story swap with a peer",
      "Shared gratitude reflection",
      "Intentional micro-connection goal for the day",
    ],
    recommendedFor: "Leaders managing hybrid teams",
    duration: "12 minutes",
  },
];

export const neuroBiologyHighlights = [
  {
    title: "Synaptic Sculpting",
    detail:
      "Experience drives synaptic pruning, refining neural networks by trimming unused connections.",
    application: "Design learning loops that resurface key concepts across contexts.",
  },
  {
    title: "Dopamine Calibration",
    detail:
      "Prediction error—unexpected reward or insight—triggers dopamine bursts reinforcing behavior.",
    application: "Introduce curiosity spikes and reflective pauses inside lessons.",
  },
  {
    title: "Polyvagal Pathways",
    detail:
      "The vagus nerve modulates stress responses and social engagement readiness via ventral regulation.",
    application: "Embed breathwork and co-regulation rituals before collaborative tasks.",
  },
];

export const timelineMoments = [
  {
    year: 1879,
    title: "First Psychological Lab",
    description:
      "Wilhelm Wundt opened the first experimental psychology lab in Leipzig, formalizing psychology as a science.",
    impact: "Catalyzed measurement-driven approaches to studying the mind.",
  },
  {
    year: 1905,
    title: "Binet-Simon Intelligence Scale",
    description:
      "The first practical IQ test established standardized assessment for educational support.",
    impact: "Sparked debates about intelligence, bias, and equitable testing.",
  },
  {
    year: 1954,
    title: "Hierarchy of Needs",
    description:
      "Abraham Maslow reframed motivation with a layered model of needs, from physiological to self-actualization.",
    impact: "Shifted focus onto holistic well-being inside organizations and schools.",
  },
  {
    year: 1967,
    title: "Cognitive Revolution",
    description:
      "Ulric Neisser's work cemented cognitive psychology, emphasizing information processing over behaviorism.",
    impact: "Lit the path for cognitive science, AI, and UX research.",
  },
  {
    year: 1997,
    title: "Positive Psychology Emerges",
    description:
      "Martin Seligman launched the positive psychology movement, pivoting toward strengths and flourishing.",
    impact: "Influenced coaching, leadership, and mental health prevention programs.",
  },
  {
    year: 2018,
    title: "Ethics in AI Psychology",
    description:
      "The APA convened a task force on AI and mental health, addressing human + machine collaboration in care.",
    impact: "Elevated discussions about algorithmic bias and therapeutic technology ethics.",
  },
];
