import type { Territory } from "../../types";

export const wordclasses: Territory = {
  name: "Word Class Wilderness",
  description: "Identify nouns, verbs, and adjectives in the wild",
  icon: "🌿",
  questions: [
    {
      type: "multiple",
      question: "Which is a NOUN in: 'The fierce wolf guarded her territory'?",
      options: ["fierce", "wolf", "guarded", "her"],
      correct: "wolf",
      explanation: "Wolf is a noun — it names a creature. (Territory is also a noun!)",
      wrongExplanation:
        "A noun is a naming word — it names a person, place, thing, or creature. In this sentence, 'wolf' is a noun because it names a creature. 'Territory' is also a noun because it names a place. Look for words that answer 'what is it?' or 'who is it?'",
    },
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
      question: "Which is the ADJECTIVE in: 'The silver wolf moved silently through the trees'?",
      options: ["silver", "wolf", "moved", "silently"],
      correct: "silver",
      explanation: "Silver is an adjective — it describes what the wolf looks like.",
      wrongExplanation:
        "An adjective is a describing word — it tells us more about a noun (what something is like). Adjectives often describe colour, size, shape, or feelings. 'Silver' describes what the wolf looks like, so it's an adjective. Ask yourself: 'what kind of wolf?' A silver wolf!",
    },
    {
      type: "multiple",
      question: "In 'The young pup played happily', what word class is 'young'?",
      options: ["Noun", "Verb", "Adjective", "Adverb"],
      correct: "Adjective",
      explanation: "Young describes the pup, so it's an adjective.",
      wrongExplanation:
        "An adjective describes a noun — it tells us what something is like. 'Young' tells us about the pup (what kind of pup? a young pup), so it's an adjective. Remember: adjectives describe nouns, while adverbs describe verbs.",
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
      question: "Which is a NOUN in: 'Howling echoed across the frozen mountains'?",
      options: ["Howling", "echoed", "across", "mountains"],
      correct: "mountains",
      explanation:
        "Mountains is a noun — it names a place. (Howling can be a noun too in this sentence!)",
      wrongExplanation:
        "A noun is a naming word for a person, place, thing, or idea. 'Mountains' names a place, so it's a noun. Interestingly, 'Howling' is also acting as a noun here (the thing that echoed). Words can sometimes be different word classes depending on how they're used!",
    },
    {
      type: "multiple",
      question: "What type of word is 'swiftly' in: 'The wolf ran swiftly'?",
      options: ["Noun", "Verb", "Adjective", "Adverb"],
      correct: "Adverb",
      explanation:
        "Swiftly describes HOW the wolf ran — it modifies the verb, making it an adverb.",
      wrongExplanation:
        "An adverb describes a verb — it tells us how, when, or where something happens. Many adverbs end in '-ly'. 'Swiftly' tells us HOW the wolf ran, so it's an adverb. Remember: adjectives describe nouns, but adverbs describe verbs.",
    },
    {
      type: "multiple",
      question: "Which word is an ADJECTIVE?",
      options: ["pack", "ancient", "howled", "quickly"],
      correct: "ancient",
      explanation: "Ancient is an adjective — it could describe a wolf, forest, or territory.",
      wrongExplanation:
        "An adjective is a describing word that tells us about a noun. 'Ancient' can describe things (an ancient forest, an ancient wolf), so it's an adjective. 'Pack' is a noun, 'howled' is a verb, and 'quickly' is an adverb (it ends in -ly and describes how something is done).",
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
      question: "In 'The exhausted wolves rested', which TWO words are adjectives?",
      options: [
        "The and wolves",
        "exhausted and rested",
        "There is only one adjective",
        "wolves and rested",
      ],
      correct: "There is only one adjective",
      explanation:
        "Only 'exhausted' is an adjective (describing the wolves). 'Rested' is a verb here — it's what they did.",
      wrongExplanation:
        "An adjective describes a noun. Here, 'exhausted' describes the wolves (what kind of wolves? exhausted ones), so it's an adjective. But 'rested' is a verb — it tells us what the wolves did. Be careful: some words can be adjectives OR verbs depending on how they're used!",
    },
    {
      type: "multiple",
      question: "Which is an abstract NOUN in: 'Courage helped the young wolf survive the winter'?",
      options: ["Courage", "helped", "young", "wolf"],
      correct: "Courage",
      explanation:
        "Courage is an abstract noun — it names a quality or idea, not just physical things.",
      wrongExplanation:
        "A noun is a naming word. Most nouns name things you can see or touch (wolf, mountain), but abstract nouns name ideas, feelings, or qualities that you can't touch — like 'courage', 'happiness', or 'freedom'. 'Courage' is an abstract noun because it names a quality.",
    },
    {
      type: "multiple",
      question: "Which word class can 'run' belong to?",
      options: ["Only a verb", "Only a noun", "Both verb and noun", "Neither"],
      correct: "Both verb and noun",
      explanation:
        "'The wolf will run' (verb) vs 'The wolf went for a run' (noun). Many words can be different classes!",
      wrongExplanation:
        "Many English words can belong to different word classes depending on how they're used in a sentence. 'Run' can be a verb ('I run fast') or a noun ('I went for a run'). The word class depends on the job the word is doing in that particular sentence.",
    },
  ],
};
