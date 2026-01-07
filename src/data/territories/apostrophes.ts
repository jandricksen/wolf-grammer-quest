import type { Territory } from "../../types";

export const apostrophes: Territory = {
  name: "Apostrophe Forest",
  description: "Master the art of possession and contraction",
  icon: "🌲",
  questions: [
    {
      type: "multiple",
      question: "Which word shows possession in: 'The wolf's howl echoed through the mountains'?",
      options: ["wolf's", "howl", "echoed", "mountains"],
      correct: "wolf's",
      explanation:
        "Wolf's shows the howl belongs to the wolf. The apostrophe before the 's' shows possession.",
      wrongExplanation:
        "A possessive apostrophe shows that something belongs to someone or something. Look for a word with an apostrophe followed by 's' (like wolf's) — this means 'belonging to the wolf'. The correct answer is 'wolf's' because the howl belongs to the wolf.",
    },
    {
      type: "multiple",
      question: "Which sentence uses the apostrophe correctly?",
      options: [
        "The wolve's hunted together.",
        "The wolves' territory was vast.",
        "The wolves territory was vast.",
        "The wolf's were howling.",
      ],
      correct: "The wolves' territory was vast.",
      explanation:
        "Wolves' shows the territory belongs to multiple wolves. The apostrophe comes after the 's' for plurals.",
      wrongExplanation:
        "When something belongs to more than one person or thing (plural), the apostrophe goes after the 's'. So 'wolves' territory' means 'the territory belonging to the wolves'. The correct answer is 'The wolves' territory was vast.' — the apostrophe after 'wolves' shows the territory belongs to multiple wolves.",
    },
    {
      type: "multiple",
      question:
        "Which is the contraction in: 'The pack doesn't hunt during the hottest part of the day'?",
      options: ["pack", "doesn't", "hottest", "day"],
      correct: "doesn't",
      explanation:
        "Doesn't is a contraction of 'does not'. The apostrophe shows where letters have been removed.",
      wrongExplanation:
        "A contraction is when two words are squashed together and some letters are removed. The apostrophe shows where the missing letters used to be. For example, 'does not' becomes 'doesn't' — the apostrophe replaces the 'o' in 'not'. The correct answer is 'doesn't'.",
    },
    {
      type: "multiple",
      question: "What does the apostrophe show in: 'The alpha's decision was final'?",
      options: [
        "A letter is missing",
        "The decision belongs to the alpha",
        "There is more than one alpha",
        "The sentence is a question",
      ],
      correct: "The decision belongs to the alpha",
      explanation:
        "This is a possessive apostrophe — it shows the decision belongs to the alpha wolf.",
      wrongExplanation:
        "Apostrophes have two main jobs: showing possession (belonging) or showing where letters are missing (contractions). In 'alpha's decision', the apostrophe + s shows the decision belongs to the alpha. This is a possessive apostrophe.",
    },
    {
      type: "multiple",
      question: "Which is correct: 'The pups coats were thick and warm'?",
      options: ["pup's coats", "pups' coats", "pups coat's", "pups coats"],
      correct: "pups' coats",
      explanation: "Multiple pups own the coats, so the apostrophe goes after the 's' in pups.",
      wrongExplanation:
        "When showing possession for plurals (more than one), the apostrophe goes after the 's'. Since multiple pups own the coats, we write 'pups' coats' — the apostrophe after 'pups' shows the coats belong to all the pups.",
    },
    {
      type: "multiple",
      question: "Which word is a contraction?",
      options: ["wolf's den", "couldn't howl", "the pack's hunt", "Luna's fur"],
      correct: "couldn't howl",
      explanation:
        "Couldn't is short for 'could not'. The other examples show possession (belonging to).",
      wrongExplanation:
        "A contraction is two words joined together with some letters removed (like 'could not' becoming 'couldn't'). The other options (wolf's, pack's, Luna's) are possessive — they show something belongs to the wolf, pack, or Luna. The correct answer is 'couldn't' because it's short for 'could not'.",
    },
    {
      type: "multiple",
      question:
        "Which word is possessive in: 'It's clear that the pack's strength comes from working together'?",
      options: ["It's", "pack's", "strength", "working"],
      correct: "pack's",
      explanation:
        "Pack's shows the strength belongs to the pack. 'It's' is a contraction of 'it is', not possession!",
      wrongExplanation:
        "A possessive word shows that something belongs to someone or something. Be careful: 'It's' is a contraction meaning 'it is' — it's NOT possessive! The word showing possession here is 'pack's' because the strength belongs to the pack.",
    },
    {
      type: "multiple",
      question: "'It's' and 'its' — which sentence is correct?",
      options: [
        "The wolf wagged it's tail.",
        "Its a cold night for hunting.",
        "The pack knows its territory well.",
        "It's fur was silver and grey.",
      ],
      correct: "The pack knows its territory well.",
      explanation:
        "'Its' (no apostrophe) shows possession. 'It's' always means 'it is' or 'it has'.",
      wrongExplanation:
        "This is a tricky rule! 'It's' (with apostrophe) ALWAYS means 'it is' or 'it has'. 'Its' (no apostrophe) shows possession — something belonging to 'it'. So 'its territory' means 'the territory belonging to it'. The correct answer is 'The pack knows its territory well.'",
    },
    {
      type: "multiple",
      question: "Which is correct: 'The ___ den was hidden in the rocks'?",
      options: ["wolfs", "wolf's", "wolves", "wolves'"],
      correct: "wolf's",
      explanation: "One wolf owns the den, so we use wolf's with an apostrophe before the 's'.",
      wrongExplanation:
        "To show that something belongs to one person or thing, we add apostrophe + s. Since one wolf owns the den, we write 'wolf's den' — the apostrophe before the 's' shows singular possession.",
    },
    {
      type: "multiple",
      question: "How many wolves own something in: 'The wolves' howls filled the valley'?",
      options: ["One wolf", "More than one wolf", "No wolves own anything", "We cannot tell"],
      correct: "More than one wolf",
      explanation: "The apostrophe after 'wolves' tells us multiple wolves are doing the howling.",
      wrongExplanation:
        "The position of the apostrophe tells us how many owners there are. When the apostrophe comes after the 's' (wolves'), it means the word is plural — so more than one wolf. When the apostrophe comes before the 's' (wolf's), it means just one.",
    },
  ],
};
