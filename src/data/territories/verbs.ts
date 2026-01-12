import type { Territory } from "../../types";

export const verbs: Territory = {
  name: "Verb Valley",
  description: "Spot action words in wolf sentences",
  icon: "⚡",
  questions: [
    {
      type: "multiple",
      question: "Which is the VERB in: 'The pack hunted through the snowy forest'?",
      options: ["pack", "hunted", "snowy", "forest"],
      correct: "hunted",
      explanation: "Hunted is a verb — it tells us what the pack did.",
      wrongExplanation:
        "A verb is an action word or 'doing' word — it tells us what someone or something does, did, or will do. To find the verb, ask 'what did they do?' The pack 'hunted' — that's the action, so 'hunted' is the verb.",
    },
    {
      type: "multiple",
      question: "Which word is a VERB in: 'Luna protects her family fiercely'?",
      options: ["Luna", "protects", "family", "fiercely"],
      correct: "protects",
      explanation: "Protects is what Luna does — it's the action, so it's a verb.",
      wrongExplanation:
        "A verb tells us what someone or something does — it's the action word. Ask 'what does Luna do?' She protects. 'Protects' is the verb because it's the action being performed.",
    },
    {
      type: "multiple",
      question: "Which is the VERB in: 'The determined wolf leapt gracefully over the stream'?",
      options: ["determined", "wolf", "leapt", "gracefully"],
      correct: "leapt",
      explanation: "Leapt is the verb — it's the action the wolf performed.",
      wrongExplanation:
        "A verb is an action word — it tells us what someone or something does. Ask 'what did the wolf do?' The wolf leapt. 'Leapt' is the verb because it's the action. ('Determined' describes the wolf, so it's an adjective.)",
    },
    {
      type: "multiple",
      question: "Which is the PAST TENSE verb in: 'The wolves will hunt when the moon rises'?",
      options: ["will", "hunt", "rises", "None of these"],
      correct: "None of these",
      explanation:
        "'Will hunt' is future tense, and 'rises' is present tense. There is no past tense verb here!",
      wrongExplanation:
        "Past tense verbs tell us about actions that already happened (e.g., hunted, ran, slept). 'Will hunt' is future tense (it hasn't happened yet), and 'rises' is present tense. This sentence has no past tense verbs.",
    },
    {
      type: "multiple",
      question: "Which word is the MAIN VERB in: 'The pup was sleeping in the den'?",
      options: ["was", "sleeping", "in", "den"],
      correct: "sleeping",
      explanation: "'Sleeping' is the main verb — it's the main action. 'Was' is a helping verb.",
      wrongExplanation:
        "In 'was sleeping', there are two verbs working together. 'Was' is a helping verb (auxiliary), and 'sleeping' is the main verb that tells us the actual action. The main verb carries the meaning of what is happening.",
    },
    {
      type: "multiple",
      question: "Which is an IMPERATIVE verb in: 'Run to the den before the storm comes!'?",
      options: ["Run", "den", "storm", "comes"],
      correct: "Run",
      explanation: "'Run' is an imperative verb — it gives a command or instruction.",
      wrongExplanation:
        "An imperative verb gives a command, instruction, or order. 'Run' is telling someone what to do — it's a command! Imperative verbs often appear at the start of sentences and don't have a visible subject (the 'you' is understood).",
    },
    {
      type: "multiple",
      question: "How many VERBS are in: 'The wolf howled and the pack listened carefully'?",
      options: ["One", "Two", "Three", "Four"],
      correct: "Two",
      explanation: "'Howled' and 'listened' are both verbs — they are the actions.",
      wrongExplanation:
        "Count the action words: 'howled' (what the wolf did) and 'listened' (what the pack did). That's two verbs! 'Carefully' is an adverb describing how they listened.",
    },
    {
      type: "multiple",
      question: "Which is a MODAL VERB in: 'The young wolf could run faster than the others'?",
      options: ["young", "could", "run", "faster"],
      correct: "could",
      explanation: "'Could' is a modal verb — it shows possibility or ability.",
      wrongExplanation:
        "Modal verbs (can, could, will, would, shall, should, may, might, must) show possibility, ability, permission, or obligation. 'Could' shows the wolf had the ability to run faster. Modal verbs always come before another verb.",
    },
    {
      type: "multiple",
      question:
        "Which verb is in the PRESENT TENSE in: 'Yesterday the pack hunted, but today they rest'?",
      options: ["Yesterday", "hunted", "rest", "today"],
      correct: "rest",
      explanation: "'Rest' is present tense (happening now). 'Hunted' is past tense.",
      wrongExplanation:
        "Present tense verbs describe what is happening now. 'Rest' is present tense — the wolves are resting today. 'Hunted' is past tense because it happened yesterday. 'Yesterday' and 'today' are not verbs.",
    },
    {
      type: "multiple",
      question: "Which is a LINKING VERB in: 'The alpha wolf seemed tired after the long chase'?",
      options: ["seemed", "tired", "long", "chase"],
      correct: "seemed",
      explanation: "'Seemed' is a linking verb — it connects the subject to a description.",
      wrongExplanation:
        "A linking verb connects the subject to more information about it, rather than showing action. 'Seemed' links 'the alpha wolf' to 'tired'. Other linking verbs include: is, are, was, were, become, appear, feel, look.",
    },
    {
      type: "multiple",
      question: "Which word is NOT a verb in: 'Wolves hunt, sleep, and play together'?",
      options: ["hunt", "sleep", "play", "together"],
      correct: "together",
      explanation: "'Together' is an adverb (how they do things), not a verb.",
      wrongExplanation:
        "Verbs are action words. 'Hunt', 'sleep', and 'play' are all actions (verbs). 'Together' describes how they do these actions, making it an adverb, not a verb.",
    },
    {
      type: "multiple",
      question: "Which is the INFINITIVE verb in: 'The pack wanted to explore the new territory'?",
      options: ["wanted", "to explore", "new", "territory"],
      correct: "to explore",
      explanation: "'To explore' is an infinitive — the basic form of a verb with 'to'.",
      wrongExplanation:
        "An infinitive is the basic form of a verb, usually with 'to' in front (to run, to eat, to sleep). 'To explore' is the infinitive form. 'Wanted' is a past tense verb, but the question asks for the infinitive.",
    },
  ],
};
