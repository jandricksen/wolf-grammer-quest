import type { Territory } from "../../types";

export const adjectives: Territory = {
  name: "Adjective Glade",
  description: "Find describing words in nature",
  icon: "🌸",
  questions: [
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
      question: "Which word is an ADJECTIVE?",
      options: ["pack", "ancient", "howled", "quickly"],
      correct: "ancient",
      explanation: "Ancient is an adjective — it could describe a wolf, forest, or territory.",
      wrongExplanation:
        "An adjective is a describing word that tells us about a noun. 'Ancient' can describe things (an ancient forest, an ancient wolf), so it's an adjective. 'Pack' is a noun, 'howled' is a verb, and 'quickly' is an adverb (it ends in -ly and describes how something is done).",
    },
    {
      type: "multiple",
      question: "In 'The exhausted wolves rested', how many adjectives are there?",
      options: ["None", "One", "Two", "Three"],
      correct: "One",
      explanation:
        "Only 'exhausted' is an adjective (describing the wolves). 'Rested' is a verb here — it's what they did.",
      wrongExplanation:
        "An adjective describes a noun. Here, 'exhausted' describes the wolves (what kind of wolves? exhausted ones), so it's an adjective. But 'rested' is a verb — it tells us what the wolves did. Be careful: some words can be adjectives OR verbs depending on how they're used!",
    },
    {
      type: "multiple",
      question:
        "Which is the COMPARATIVE adjective in: 'The grey wolf is faster than the brown one'?",
      options: ["grey", "faster", "brown", "one"],
      correct: "faster",
      explanation: "'Faster' compares two things — it's a comparative adjective.",
      wrongExplanation:
        "Comparative adjectives compare two things and often end in '-er' (bigger, smaller, faster) or use 'more' (more beautiful). 'Faster' compares the grey wolf to the brown wolf, so it's a comparative adjective.",
    },
    {
      type: "multiple",
      question: "Which is the SUPERLATIVE adjective in: 'Luna was the bravest wolf in the pack'?",
      options: ["Luna", "bravest", "wolf", "pack"],
      correct: "bravest",
      explanation: "'Bravest' is superlative — it means the most brave of all.",
      wrongExplanation:
        "Superlative adjectives describe the highest degree — the most of something. They often end in '-est' (biggest, smallest, bravest) or use 'most' (most beautiful). 'Bravest' means braver than all others in the pack.",
    },
    {
      type: "multiple",
      question: "How many ADJECTIVES are in: 'The small, fluffy pup slept in the warm den'?",
      options: ["One", "Two", "Three", "Four"],
      correct: "Three",
      explanation: "'Small', 'fluffy', and 'warm' are all adjectives describing nouns.",
      wrongExplanation:
        "Count the describing words: 'small' describes the pup, 'fluffy' describes the pup, and 'warm' describes the den. That's three adjectives! 'Slept' is a verb.",
    },
    {
      type: "multiple",
      question: "Which word is NOT an adjective in: 'The fierce, hungry wolf hunted quickly'?",
      options: ["fierce", "hungry", "wolf", "quickly"],
      correct: "quickly",
      explanation: "'Quickly' is an adverb (it describes how the wolf hunted), not an adjective.",
      wrongExplanation:
        "Adjectives describe nouns. 'Fierce' and 'hungry' both describe the wolf (a noun), so they're adjectives. 'Wolf' is a noun. 'Quickly' describes how the wolf hunted (a verb), making it an adverb, not an adjective.",
    },
    {
      type: "multiple",
      question:
        "Which adjective describes a FEELING in: 'The nervous pup stayed close to its proud mother'?",
      options: ["nervous", "close", "proud", "Both nervous and proud"],
      correct: "Both nervous and proud",
      explanation: "Both 'nervous' and 'proud' describe feelings or emotions.",
      wrongExplanation:
        "Some adjectives describe feelings or emotions. 'Nervous' describes how the pup feels, and 'proud' describes the mother's feeling. Both are adjectives that describe emotions, so 'Both nervous and proud' is correct.",
    },
    {
      type: "multiple",
      question: "What is the correct ORDER of adjectives in: 'The ___ wolf howled at the moon'?",
      options: ["grey old large", "large old grey", "old grey large", "grey large old"],
      correct: "large old grey",
      explanation: "Adjectives follow an order: size, age, colour. So 'large old grey' is correct.",
      wrongExplanation:
        "In English, adjectives follow a specific order: opinion, size, age, shape, colour, origin, material. So we say 'large' (size) then 'old' (age) then 'grey' (colour) = 'large old grey wolf'.",
    },
    {
      type: "multiple",
      question: "Which is a POSSESSIVE adjective in: 'The wolf licked her injured paw'?",
      options: ["The", "her", "injured", "paw"],
      correct: "her",
      explanation: "'Her' is a possessive adjective — it shows the paw belongs to the wolf.",
      wrongExplanation:
        "Possessive adjectives (my, your, his, her, its, our, their) show ownership. 'Her' shows the paw belongs to the wolf. 'Injured' is also an adjective but it describes the paw's condition, not ownership.",
    },
    {
      type: "multiple",
      question:
        "Which word could be BOTH an adjective AND a noun depending on the sentence?",
      options: ["brave", "cold", "quick", "tall"],
      correct: "cold",
      explanation:
        "'Cold' can be an adjective ('the cold wind') or a noun ('I caught a cold').",
      wrongExplanation:
        "Some words can be different word classes. 'Cold' can be an adjective ('The cold wolf shivered') or a noun ('The cold was unbearable' or 'I have a cold'). The other options (brave, quick, tall) are mainly used as adjectives only.",
    },
  ],
};
