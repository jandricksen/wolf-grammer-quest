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
      question: "Which is an abstract NOUN in: 'The wolf showed great wisdom'?",
      options: ["wolf", "showed", "great", "wisdom"],
      correct: "wisdom",
      explanation: "Wisdom is an abstract noun — it names a quality you cannot touch or see.",
      wrongExplanation:
        "Abstract nouns name ideas, feelings, or qualities that you cannot physically touch. 'Wisdom' is something you can have but cannot hold in your hands, making it an abstract noun. Other abstract nouns include 'love', 'fear', and 'happiness'.",
    },
    {
      type: "multiple",
      question: "Which word is NOT a noun in: 'The hungry wolves crossed the frozen river'?",
      options: ["wolves", "river", "hungry", "The"],
      correct: "hungry",
      explanation: "'Hungry' is an adjective describing the wolves, not a noun.",
      wrongExplanation:
        "Nouns are naming words. 'Wolves' and 'river' are nouns (they name things). 'The' is an article (a type of determiner). 'Hungry' is an adjective — it describes the wolves. Only 'hungry' is describing rather than naming.",
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
      question: "Which word class can 'run' belong to?",
      options: ["Only a verb", "Only a noun", "Both verb and noun", "Neither"],
      correct: "Both verb and noun",
      explanation:
        "'The wolf will run' (verb) vs 'The wolf went for a run' (noun). Many words can be different classes!",
      wrongExplanation:
        "Many English words can belong to different word classes depending on how they're used in a sentence. 'Run' can be a verb ('I run fast') or a noun ('I went for a run'). The word class depends on the job the word is doing in that particular sentence.",
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
