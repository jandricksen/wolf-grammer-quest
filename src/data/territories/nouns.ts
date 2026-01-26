import type { Territory } from "../../types";

export const nouns: Territory = {
  name: "Noun Thicket",
  description: "Identify naming words in the wild",
  icon: "🌳",
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
      question: "Which is a NOUN in: 'The swift wolf ran quickly'?",
      options: ["swift", "wolf", "ran", "quickly"],
      correct: "wolf",
      explanation: "Wolf is a noun — it names a creature.",
      wrongExplanation:
        "A noun is a naming word — it names a person, place, thing, or creature. 'Wolf' names a creature, so it's a noun. 'Swift' is an adjective (describes the wolf), 'ran' is a verb (the action), and 'quickly' is an adverb (how the wolf ran).",
    },
    {
      type: "multiple",
      question: "Which is a NOUN in: 'The brave wolf crossed the frozen river'?",
      options: ["brave", "wolf", "crossed", "frozen"],
      correct: "wolf",
      explanation:
        "Wolf is a noun — it names a creature. Nouns are naming words for people, places, things, or animals.",
      wrongExplanation:
        "A noun is a naming word — it names a person, place, thing, or creature. In this sentence, 'wolf' is a noun because it names an animal. 'River' is also a noun (it names a thing), but it's not in the options. 'Brave' and 'frozen' are adjectives (describing words), and 'crossed' is a verb (an action word).",
    },
    {
      type: "multiple",
      question: "Which word is a PROPER NOUN in: 'Luna led her pack through Whispering Valley'?",
      options: ["pack", "Luna", "led", "Valley"],
      correct: "Luna",
      explanation:
        "Luna is a proper noun — it's the specific name of a wolf. Proper nouns always start with a capital letter.",
      wrongExplanation:
        "A proper noun is the specific name of a person, place, or thing, and always starts with a capital letter. 'Luna' is the wolf's name, so it's a proper noun. 'Whispering Valley' is also a proper noun (the name of a place), but 'Luna' is the correct answer as it names the wolf specifically.",
    },
    {
      type: "multiple",
      question: "Which is the COLLECTIVE NOUN in: 'A pack of wolves hunted together'?",
      options: ["wolves", "pack", "hunted", "together"],
      correct: "pack",
      explanation: "Pack is a collective noun — it names a group of wolves.",
      wrongExplanation:
        "A collective noun names a group of people, animals, or things. 'Pack' is a collective noun because it refers to a group of wolves. Other examples include 'flock' (birds), 'herd' (cattle), and 'family' (people).",
    },
    {
      type: "multiple",
      question: "How many NOUNS are in: 'The pup found shelter in a cave'?",
      options: ["One", "Two", "Three", "Four"],
      correct: "Three",
      explanation: "The nouns are 'pup', 'shelter', and 'cave' — all naming words.",
      wrongExplanation:
        "Count the naming words: 'pup' (names a young wolf), 'shelter' (names a thing), and 'cave' (names a place). That's three nouns! Remember, nouns answer 'what is it?' or 'who is it?'",
    },
    {
      type: "multiple",
      question: "Which is the NOUN in: 'The alpha howled loudly at the moon'?",
      options: ["howled", "loudly", "at", "moon"],
      correct: "moon",
      explanation:
        "Moon is a noun — it names a thing in the sky. 'Alpha' is also a noun but isn't in the options.",
      wrongExplanation:
        "A noun is a naming word for a person, place, thing, or creature. Looking at the options: 'howled' is a verb (an action), 'loudly' is an adverb (tells us how), 'at' is a preposition, and 'moon' is a noun (it names a thing). The correct answer is 'moon'.",
    },
    {
      type: "multiple",
      question: "Which is a NOUN in: 'The grey wolf howled loudly at the moon'?",
      options: ["grey", "howled", "loudly", "moon"],
      correct: "moon",
      explanation: "'Moon' is a noun — it names a thing in the sky.",
      wrongExplanation:
        "A noun is a naming word for a person, place, thing, or creature. 'Moon' names a thing, so it's a noun. 'Grey' is an adjective (describes the wolf), 'howled' is a verb (the action), and 'loudly' is an adverb (how the wolf howled).",
    },
    {
      type: "multiple",
      question: "Which is the PLURAL NOUN in: 'The wolf watched the deer from the shadows'?",
      options: ["wolf", "deer", "shadows", "watched"],
      correct: "shadows",
      explanation: "'Shadows' is plural (more than one shadow). 'Deer' can be singular or plural!",
      wrongExplanation:
        "A plural noun refers to more than one of something. 'Shadows' ends in 's' and means more than one shadow. 'Deer' is tricky because it can be both singular and plural, but in this sentence it could be one deer. 'Shadows' is clearly plural.",
    },
    {
      type: "multiple",
      question: "Which word is an ADVERB in: 'The pack moved quietly through the trees'?",
      options: ["pack", "moved", "quietly", "trees"],
      correct: "quietly",
      explanation:
        "Quietly is an adverb — it tells us HOW the pack moved. Many adverbs end in '-ly'.",
      wrongExplanation:
        "An adverb tells us more about a verb — it describes how, when, or where something happens. Many adverbs end in '-ly'. In this sentence, 'quietly' tells us HOW the pack moved, so it's an adverb. 'Pack' and 'trees' are nouns, and 'moved' is a verb.",
    },
    {
      type: "multiple",
      question: "Which is the POSSESSIVE NOUN in: 'The wolf's den was warm and safe'?",
      options: ["wolf's", "den", "warm", "safe"],
      correct: "wolf's",
      explanation: "'Wolf's' is a possessive noun — it shows the den belongs to the wolf.",
      wrongExplanation:
        "A possessive noun shows ownership or belonging. 'Wolf's' has an apostrophe and 's' to show that the den belongs to the wolf. The apostrophe is the key clue for possessive nouns!",
    },
    {
      type: "multiple",
      question: "Which is the COMMON NOUN in: 'Luna spotted a rabbit near the stream'?",
      options: ["Luna", "rabbit", "spotted", "near"],
      correct: "rabbit",
      explanation:
        "'Rabbit' is a common noun — it names a type of animal, not a specific one with a name.",
      wrongExplanation:
        "A common noun is a general naming word (not a specific name). 'Rabbit' names a type of animal and doesn't need a capital letter, so it's a common noun. 'Luna' is a proper noun because it's the specific name of the wolf.",
    },
  ],
};
