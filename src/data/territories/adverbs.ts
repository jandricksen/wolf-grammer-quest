import type { Territory } from "../../types";

export const adverbs: Territory = {
  name: "Adverb Trail",
  description: "Discover how, when, and where words",
  icon: "💨",
  questions: [
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
      question: "Which is an ADVERB OF MANNER in: 'The pack moved silently through the forest'?",
      options: ["pack", "moved", "silently", "forest"],
      correct: "silently",
      explanation: "'Silently' tells us HOW the pack moved — it's an adverb of manner.",
      wrongExplanation:
        "Adverbs of manner tell us HOW something is done. They often end in '-ly'. 'Silently' tells us how the pack moved (in a silent way), so it's an adverb of manner. Other examples: quickly, carefully, loudly.",
    },
    {
      type: "multiple",
      question: "Which is an ADVERB OF TIME in: 'The wolves will hunt tomorrow'?",
      options: ["wolves", "will", "hunt", "tomorrow"],
      correct: "tomorrow",
      explanation: "'Tomorrow' tells us WHEN the wolves will hunt — it's an adverb of time.",
      wrongExplanation:
        "Adverbs of time tell us WHEN something happens. 'Tomorrow' tells us when the wolves will hunt. Other adverbs of time include: yesterday, today, soon, later, always, never, sometimes.",
    },
    {
      type: "multiple",
      question: "Which is an ADVERB OF PLACE in: 'The pup looked everywhere for its mother'?",
      options: ["pup", "looked", "everywhere", "mother"],
      correct: "everywhere",
      explanation: "'Everywhere' tells us WHERE the pup looked — it's an adverb of place.",
      wrongExplanation:
        "Adverbs of place tell us WHERE something happens. 'Everywhere' tells us where the pup looked. Other adverbs of place include: here, there, outside, inside, nearby, away.",
    },
    {
      type: "multiple",
      question: "Which is an ADVERB OF DEGREE in: 'The alpha wolf was extremely tired'?",
      options: ["alpha", "wolf", "extremely", "tired"],
      correct: "extremely",
      explanation: "'Extremely' tells us HOW MUCH the wolf was tired — it's an adverb of degree.",
      wrongExplanation:
        "Adverbs of degree tell us HOW MUCH or TO WHAT EXTENT something is. 'Extremely' tells us how tired (very, very tired). Other adverbs of degree include: very, quite, rather, almost, completely, hardly.",
    },
    {
      type: "multiple",
      question:
        "Which word is NOT an adverb in: 'The wolf quickly and quietly approached the deer'?",
      options: ["quickly", "quietly", "approached", "deer"],
      correct: "deer",
      explanation:
        "'Deer' is a noun. 'Quickly' and 'quietly' are adverbs, and 'approached' is a verb.",
      wrongExplanation:
        "Adverbs describe verbs (how, when, where, how much). 'Quickly' and 'quietly' describe how the wolf approached. 'Approached' is the verb (action). 'Deer' is a noun — it names the animal.",
    },
    {
      type: "multiple",
      question: "Which ADVERB OF FREQUENCY fits: 'Wolves ___ hunt in packs'?",
      options: ["beautifully", "usually", "yesterday", "outside"],
      correct: "usually",
      explanation: "'Usually' is an adverb of frequency — it tells us how often something happens.",
      wrongExplanation:
        "Adverbs of frequency tell us HOW OFTEN something happens. 'Usually' means most of the time. Other adverbs of frequency include: always, often, sometimes, rarely, never. 'Beautifully' is manner, 'yesterday' is time, 'outside' is place.",
    },
    {
      type: "multiple",
      question: "How many ADVERBS are in: 'Yesterday, the wolf ran quickly here'?",
      options: ["One", "Two", "Three", "Four"],
      correct: "Three",
      explanation: "'Yesterday' (time), 'quickly' (manner), and 'here' (place) are all adverbs.",
      wrongExplanation:
        "Count the words that tell us when, how, or where: 'Yesterday' tells us WHEN, 'quickly' tells us HOW, and 'here' tells us WHERE. That's three adverbs! 'Ran' is a verb and 'wolf' is a noun.",
    },
    {
      type: "multiple",
      question: "Which adverb makes the sentence NEGATIVE: 'The wolf ___ abandoned its pack'?",
      options: ["quickly", "never", "outside", "very"],
      correct: "never",
      explanation: "'Never' is a negative adverb — it means 'at no time'.",
      wrongExplanation:
        "Some adverbs make sentences negative. 'Never' means 'at no time' — it's a negative adverb. Other negative adverbs include: not, nowhere, hardly. The other options don't make the sentence negative.",
    },
    {
      type: "multiple",
      question: "Where should the adverb 'always' go in: 'The pack ___ hunts together'?",
      options: [
        "Before 'pack'",
        "Before 'hunts'",
        "After 'together'",
        "It can go in multiple places",
      ],
      correct: "Before 'hunts'",
      explanation:
        "Adverbs of frequency usually go before the main verb: 'The pack always hunts together'.",
      wrongExplanation:
        "Adverbs of frequency (always, usually, often, sometimes, never) typically go before the main verb. So 'The pack always hunts together' is the most natural position. This is a rule for adverbs of frequency in English.",
    },
    {
      type: "multiple",
      question: "Which word is an adverb in: 'The young wolf barked loudly at the intruder'?",
      options: ["young", "wolf", "loudly", "intruder"],
      correct: "loudly",
      explanation: "'Loudly' is an adverb — it tells us HOW the wolf barked.",
      wrongExplanation:
        "An adverb describes a verb. 'Loudly' tells us how the wolf barked, so it's an adverb. 'Young' is an adjective (describes the wolf), 'wolf' and 'intruder' are nouns.",
    },
    {
      type: "multiple",
      question: "Which adverb best completes: 'The wolf waited ___ for its prey'?",
      options: ["patient", "patiently", "patience", "patients"],
      correct: "patiently",
      explanation: "'Patiently' is the adverb form — it describes HOW the wolf waited.",
      wrongExplanation:
        "We need an adverb to describe the verb 'waited'. 'Patiently' is the adverb (ends in -ly). 'Patient' is an adjective, 'patience' is a noun, and 'patients' is a plural noun. Add '-ly' to many adjectives to make adverbs!",
    },
  ],
};
