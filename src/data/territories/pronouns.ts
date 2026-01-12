import type { Territory } from "../../types";

export const pronouns: Territory = {
  name: "Pronoun Peak",
  description: "Master pronouns, including relative and possessive",
  icon: "⛰️",
  questions: [
    {
      type: "multiple",
      question:
        "Which is a PRONOUN in: 'Luna found the deer and she chased it through the forest'?",
      options: ["Luna", "deer", "she", "forest"],
      correct: "she",
      explanation:
        "'She' is a pronoun that replaces 'Luna'. It stops us having to repeat the name.",
      wrongExplanation:
        "A pronoun is a word that takes the place of a noun so we don't have to keep repeating it. Common pronouns include: I, you, he, she, it, we, they, me, him, her, us, them. In this sentence, 'she' replaces 'Luna' and 'it' replaces 'deer' — both are pronouns!",
    },
    {
      type: "multiple",
      question: "Which is a RELATIVE PRONOUN?",
      options: ["she", "they", "which", "her"],
      correct: "which",
      explanation:
        "Relative pronouns (who, which, that, whose, whom) introduce relative clauses and relate back to a noun.",
      wrongExplanation:
        "A relative pronoun introduces a relative clause and relates back to a noun earlier in the sentence. The relative pronouns are: who, whom, whose, which, and that. 'She', 'they', and 'her' are personal pronouns, not relative pronouns. 'Which' is the relative pronoun here.",
    },
    {
      type: "multiple",
      question: "Which is the RELATIVE PRONOUN in: 'The wolf who led the pack was the strongest'?",
      options: ["wolf", "who", "pack", "strongest"],
      correct: "who",
      explanation:
        "'Who' is a relative pronoun — it introduces information about the wolf and relates back to it.",
      wrongExplanation:
        "A relative pronoun (who, whom, whose, which, that) introduces extra information about a noun and relates back to it. In this sentence, 'who' relates back to 'the wolf' and introduces the clause 'who led the pack'. Use 'who' for people and named animals.",
    },
    {
      type: "multiple",
      question: "In 'The territory that they guard is huge', what is 'that'?",
      options: ["A possessive pronoun", "A relative pronoun", "A personal pronoun", "A noun"],
      correct: "A relative pronoun",
      explanation:
        "'That' introduces the relative clause 'that they guard' and relates back to 'territory'.",
      wrongExplanation:
        "A relative pronoun introduces a relative clause and connects it back to a noun. The relative pronouns are: who, whom, whose, which, and that. Here, 'that' introduces the clause 'that they guard' and relates back to 'territory', so it's a relative pronoun.",
    },
    {
      type: "multiple",
      question: "Which is a POSSESSIVE PRONOUN?",
      options: ["who", "theirs", "they", "which"],
      correct: "theirs",
      explanation:
        "Possessive pronouns (mine, yours, his, hers, its, ours, theirs) show ownership without a noun after them.",
      wrongExplanation:
        "A possessive pronoun shows ownership and stands alone (without a noun after it). The possessive pronouns are: mine, yours, his, hers, its, ours, theirs. 'Theirs' means 'belonging to them' and stands alone. 'Who' and 'which' are relative pronouns, and 'they' is a personal pronoun.",
    },
    {
      type: "multiple",
      question:
        "Which is a POSSESSIVE PRONOUN in: 'That den is not ours but the territory is theirs'?",
      options: ["That", "ours", "but", "territory"],
      correct: "ours",
      explanation:
        "'Ours' is a possessive pronoun — it shows the den doesn't belong to us. 'Theirs' is also possessive!",
      wrongExplanation:
        "A possessive pronoun shows ownership and stands alone without a noun after it. The possessive pronouns are: mine, yours, his, hers, its, ours, theirs. Both 'ours' and 'theirs' in this sentence are possessive pronouns — they show who things belong to.",
    },
    {
      type: "multiple",
      question: "'My' and 'mine' — what's the difference?",
      options: [
        "They mean the same thing",
        "'My' comes before a noun, 'mine' stands alone",
        "'Mine' comes before a noun, 'my' stands alone",
        "'My' is for wolves, 'mine' is for other animals",
      ],
      correct: "'My' comes before a noun, 'mine' stands alone",
      explanation:
        "'My territory' (before noun) vs 'The territory is mine' (stands alone as possessive pronoun).",
      wrongExplanation:
        "'My' and 'mine' both show possession, but they work differently. 'My' is a possessive determiner — it comes before a noun ('my territory'). 'Mine' is a possessive pronoun — it stands alone without a noun after it ('the territory is mine'). Same meaning, different jobs!",
    },
    {
      type: "multiple",
      question:
        "Which is the RELATIVE PRONOUN in: 'The prey whose scent they followed had escaped'?",
      options: ["prey", "whose", "they", "escaped"],
      correct: "whose",
      explanation:
        "'Whose' is a relative pronoun showing possession — it relates back to 'prey' and introduces more information.",
      wrongExplanation:
        "A relative pronoun (who, whom, whose, which, that) introduces a relative clause. 'Whose' is special — it's a relative pronoun that also shows possession. Here, 'whose' relates back to 'prey' and tells us about the prey's scent. It introduces the clause 'whose scent they followed'.",
    },
    {
      type: "multiple",
      question: "Which sentence uses a relative pronoun correctly?",
      options: [
        "The wolf which howled was Luna.",
        "The wolf who howled was Luna.",
        "Both are correct",
        "Neither is correct",
      ],
      correct: "Both are correct",
      explanation:
        "In British English, both 'who' and 'which' can be used for animals. 'Who' is often preferred for named animals.",
      wrongExplanation:
        "Relative pronouns (who, which, that) introduce extra information. In British English, both 'who' and 'which' are acceptable for animals. Many writers prefer 'who' for named or personified animals like Luna, but 'which' is also grammatically correct. Both sentences work!",
    },
    {
      type: "multiple",
      question:
        "In 'The pups played with their mother. She watched them carefully', how many pronouns are there?",
      options: ["One", "Two", "Three", "Four"],
      correct: "Three",
      explanation:
        "'Their' (possessive), 'She' (personal), and 'them' (personal) — three pronouns in total!",
      wrongExplanation:
        "A pronoun replaces a noun. Count them: 'their' (possessive pronoun/determiner showing the mother belongs to the pups), 'She' (personal pronoun replacing 'mother'), and 'them' (personal pronoun replacing 'pups'). That's three pronouns!",
    },
  ],
};
