import type { Territory } from "../../types";

export const directspeech: Territory = {
  name: "Speech Cavern",
  description: "Master the art of direct speech and speech marks",
  icon: "💬",
  questions: [
    {
      type: "multiple",
      question: "Which sentence punctuates direct speech correctly?",
      options: [
        'Luna said, "Follow me!"',
        'Luna said "Follow me"!',
        "Luna said Follow me!",
        '"Luna said, Follow me!"',
      ],
      correct: 'Luna said, "Follow me!"',
      explanation:
        "Speech marks go around the spoken words only. The comma comes after 'said' but before the speech marks.",
      wrongExplanation:
        "Direct speech is the exact words someone says, shown in speech marks (\" \"). The speech marks go around ONLY the spoken words. Before opening the speech marks, use a comma after words like 'said' or 'asked'. The correct format is: Luna said, \"Follow me!\"",
    },
    {
      type: "multiple",
      question: "Where does the punctuation go at the END of speech?",
      options: [
        "After the speech marks",
        "Before the closing speech marks",
        "It doesn't matter",
        "There's no punctuation",
      ],
      correct: "Before the closing speech marks",
      explanation: 'Punctuation (! ? . ,) goes inside the speech marks: "Hello!" not "Hello"!',
      wrongExplanation:
        'In direct speech, punctuation at the end (full stop, exclamation mark, question mark, or comma) always goes INSIDE the closing speech marks. Write "Hello!" not "Hello"! This is a standard rule for writing speech in English.',
    },
    {
      type: "multiple",
      question: "Which is correct?",
      options: [
        '"I smell danger", whispered the wolf.',
        '"I smell danger," whispered the wolf.',
        '"I smell danger" whispered, the wolf.',
        '"I smell danger whispered the wolf."',
      ],
      correct: '"I smell danger," whispered the wolf.',
      explanation:
        "When speech comes first, use a comma inside the speech marks (unless it's ! or ?), then the reporting clause.",
      wrongExplanation:
        "When speech comes before words like 'whispered' or 'said', use a comma inside the closing speech marks (unless the speech ends with ! or ?). This comma is a writing rule that shows the sentence continues - it's not something the character actually said. Correct: \"I smell danger,\" whispered the wolf.",
    },
    {
      type: "multiple",
      question: "What's missing? 'The alpha warned Stay close to the pack'",
      options: ["Just speech marks", "Speech marks and a comma", "Just a comma", "A full stop"],
      correct: "Speech marks and a comma",
      explanation: 'It should be: The alpha warned, "Stay close to the pack."',
      wrongExplanation:
        "Direct speech needs: (1) speech marks around the spoken words, (2) a comma after 'said/warned/asked' before the speech marks open, and (3) punctuation inside at the end. It should be: The alpha warned, \"Stay close to the pack.\"",
    },
    {
      type: "multiple",
      question: "Where should the question mark go?",
      options: [
        '"Where are the pups"? asked Luna.',
        '"Where are the pups?" asked Luna.',
        '"Where are the pups," asked Luna?',
        '"Where are the pups" asked Luna?',
      ],
      correct: '"Where are the pups?" asked Luna.',
      explanation:
        "The question mark goes inside the speech marks because it's part of what Luna asked.",
      wrongExplanation:
        'In direct speech, punctuation goes INSIDE the speech marks. The question mark is part of what Luna asked, so it goes inside: "Where are the pups?" When speech ends with ? or !, you don\'t need a comma as well.',
    },
    {
      type: "multiple",
      question: "Why do we start a new line for each new speaker?",
      options: [
        "To make it look nice",
        "It's the law",
        "To make it clear who is speaking",
        "We don't need to",
      ],
      correct: "To make it clear who is speaking",
      explanation: "A new line for each speaker helps readers follow the conversation.",
      wrongExplanation:
        "When writing dialogue (conversation), we start a new line each time a different person speaks. This is a rule of direct speech that helps readers follow who is saying what. It makes conversations much easier to read and understand.",
    },
    {
      type: "multiple",
      question: "Which sentence is correct?",
      options: [
        '"I hear something," Luna said, "in the forest."',
        '"I hear something", Luna said, "in the forest".',
        '"I hear something" Luna said "in the forest."',
        '"I hear something, Luna said, in the forest."',
      ],
      correct: '"I hear something," Luna said, "in the forest."',
      explanation:
        "When speech is interrupted, commas and speech marks go around the interruption. Full stop at the very end.",
      wrongExplanation:
        'When speech is split (interrupted by \'said\'), you need: comma inside first closing speech marks, then who said it, then comma, then open speech marks again. The final punctuation goes inside the last speech marks: "I hear something," Luna said, "in the forest."',
    },
    {
      type: "multiple",
      question: "What punctuation comes BEFORE opening speech marks?",
      options: [
        "Always a comma",
        "Always a colon",
        "A comma or nothing, depending on the sentence",
        "Always a full stop",
      ],
      correct: "A comma or nothing, depending on the sentence",
      explanation:
        'Usually a comma (Luna said, "...") but sometimes nothing if the speech flows naturally.',
      wrongExplanation:
        "Before opening speech marks, you usually use a comma after reporting words like 'said' or 'asked'. For example: Luna said, \"Hello.\" However, sometimes the speech flows naturally without a comma. A comma is most common.",
    },
    {
      type: "multiple",
      question: "'Run!' howled Luna. Why is there no comma after 'Run'?",
      options: [
        "It's a mistake",
        "The exclamation mark replaces the comma",
        "Commas are never used in speech",
        "Because 'howled' comes after",
      ],
      correct: "The exclamation mark replaces the comma",
      explanation:
        "Exclamation marks and question marks show HOW something was said (with urgency or as a question) - so they replace the comma.",
      wrongExplanation:
        'Exclamation marks (!) and question marks (?) show HOW something was said - with excitement, urgency, or as a question. Unlike commas (which are just a writing convention), these marks are part of the meaning. They replace the comma: write "Run!" howled Luna, not "Run!," howled Luna.',
    },
    {
      type: "multiple",
      question: "What's the rule for writing speech from two different speakers?",
      options: [
        "Put both speeches in the same paragraph",
        "Start a new line for each new speaker",
        "Use different coloured speech marks",
        "Put the names in capital letters",
      ],
      correct: "Start a new line for each new speaker",
      explanation: "Each speaker gets a new line. This makes conversations easier to follow.",
      wrongExplanation:
        "When writing dialogue with multiple speakers, each new speaker starts on a new line. This is a key rule of direct speech that helps readers know when a different character is talking. Each speech still needs its own speech marks and punctuation.",
    },
  ],
};
