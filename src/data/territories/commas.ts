import type { Territory } from "../../types";

export const commas: Territory = {
  name: "Comma Cave",
  description: "Learn where to pause with commas",
  icon: "🦇",
  questions: [
    {
      type: "multiple",
      question: "Which sentence uses commas correctly in a LIST?",
      options: [
        "Wolves eat deer, rabbits, and elk.",
        "Wolves eat deer rabbits and elk.",
        "Wolves eat, deer, rabbits, and, elk.",
        "Wolves, eat deer rabbits and elk.",
      ],
      correct: "Wolves eat deer, rabbits, and elk.",
      explanation:
        "Commas separate items in a list. The comma before 'and' (Oxford comma) is optional but helpful!",
      wrongExplanation:
        "When writing a list of three or more items, use commas to separate each item. Put a comma after each item except the last one. For example: 'deer, rabbits, and elk'. Don't put commas in random places — only between the items in your list.",
    },
    {
      type: "multiple",
      question: "Where should the comma go after a FRONTED ADVERBIAL?",
      options: [
        "Without warning the, wolf pounced.",
        "Without warning, the wolf pounced.",
        "Without, warning the wolf pounced.",
        "No comma needed.",
      ],
      correct: "Without warning, the wolf pounced.",
      explanation:
        "Fronted adverbials need a comma after them. 'Without warning' tells us how/when the action happened.",
      wrongExplanation:
        "A fronted adverbial is a word or phrase at the start of a sentence that tells us how, when, or where something happens. It always needs a comma after it to separate it from the main clause. 'Without warning' is a fronted adverbial, so we write: 'Without warning, the wolf pounced.'",
    },
    {
      type: "multiple",
      question: "Which fronted adverbial is punctuated correctly?",
      options: [
        "Silently, the pack approached their prey.",
        "Silently the pack, approached their prey.",
        "Silently the pack approached, their prey.",
        "Silently the pack approached their prey.",
      ],
      correct: "Silently, the pack approached their prey.",
      explanation: "'Silently' is a fronted adverbial — it needs a comma right after it.",
      wrongExplanation:
        "A fronted adverbial comes at the start of a sentence and tells us how, when, or where. It must be followed by a comma. 'Silently' is a fronted adverbial (it tells us how), so the comma goes immediately after it: 'Silently, the pack approached their prey.'",
    },
    {
      type: "multiple",
      question: "In 'The wolf, who was called Luna, led the hunt', why are there commas?",
      options: [
        "It's a list",
        "It's a fronted adverbial",
        "It's extra information (parenthesis)",
        "It's direct speech",
      ],
      correct: "It's extra information (parenthesis)",
      explanation:
        "'Who was called Luna' is extra information that could be removed. Commas show it's an embedded clause.",
      wrongExplanation:
        "When extra information is added in the middle of a sentence (called parenthesis), we use a pair of commas around it. 'Who was called Luna' is extra information about the wolf — if you removed it, the sentence would still make sense: 'The wolf led the hunt.' The commas show this is additional, removable information.",
    },
    {
      type: "multiple",
      question: "Which sentence needs a comma?",
      options: [
        "The wolf howled loudly.",
        "Before dawn the pack set off.",
        "Luna ran quickly.",
        "The deer escaped.",
      ],
      correct: "Before dawn the pack set off.",
      explanation:
        "'Before dawn' is a fronted adverbial — it needs a comma: 'Before dawn, the pack set off.'",
      wrongExplanation:
        "A fronted adverbial is a word or phrase at the start of a sentence that tells us how, when, or where. It needs a comma after it. 'Before dawn' tells us when the pack set off — it's a fronted adverbial, so it needs a comma: 'Before dawn, the pack set off.'",
    },
    {
      type: "multiple",
      question:
        "Where should commas go in: 'The alpha a powerful grey wolf watched over the pack'?",
      options: [
        "The alpha, a powerful grey wolf watched over the pack.",
        "The alpha a powerful grey wolf, watched over the pack.",
        "The alpha, a powerful grey wolf, watched over the pack.",
        "No commas needed.",
      ],
      correct: "The alpha, a powerful grey wolf, watched over the pack.",
      explanation:
        "'A powerful grey wolf' is extra information about the alpha. It needs commas on both sides.",
      wrongExplanation:
        "When extra information (parenthesis) is inserted into a sentence, it needs commas on both sides. 'A powerful grey wolf' is extra information about the alpha — we could remove it and the sentence would still work. So we need a comma before and after: 'The alpha, a powerful grey wolf, watched over the pack.'",
    },
    {
      type: "multiple",
      question: "Which is NOT a reason to use a comma?",
      options: [
        "After a fronted adverbial",
        "To separate items in a list",
        "Before every 'and'",
        "Around extra information",
      ],
      correct: "Before every 'and'",
      explanation:
        "We don't always need commas before 'and'. Only in lists or between main clauses.",
      wrongExplanation:
        "Commas are used: after fronted adverbials, to separate items in a list, and around extra information (parenthesis). We do NOT put a comma before every 'and' — only in lists or when joining two main clauses. For example, 'The wolf howled and the pack followed' doesn't need a comma.",
    },
    {
      type: "multiple",
      question: "Choose the correct comma use:",
      options: [
        "The wolf ran, fast.",
        "Cautiously, the pup approached.",
        "Luna, howled.",
        "The pack, hunted deer.",
      ],
      correct: "Cautiously, the pup approached.",
      explanation:
        "'Cautiously' is a fronted adverbial and needs a comma after it. The others incorrectly break up the sentence.",
      wrongExplanation:
        "A fronted adverbial at the start of a sentence needs a comma after it. 'Cautiously' tells us how the pup approached — it's a fronted adverbial, so it needs a comma. The other sentences have commas in the wrong places, breaking up the subject and verb incorrectly.",
    },
    {
      type: "multiple",
      question: "'With great speed, the wolf chased the rabbit.' What is 'With great speed'?",
      options: ["A subordinate clause", "A fronted adverbial", "The subject", "Direct speech"],
      correct: "A fronted adverbial",
      explanation:
        "'With great speed' is a fronted adverbial — it tells us how the wolf chased and comes before the main clause.",
      wrongExplanation:
        "A fronted adverbial is a word or phrase at the start of a sentence that tells us how, when, or where something happens. 'With great speed' tells us HOW the wolf chased (quickly), so it's a fronted adverbial. That's why it has a comma after it.",
    },
    {
      type: "multiple",
      question:
        "How many commas are needed? 'The old wolf the pack's former leader rested in the shade'",
      options: ["None", "One", "Two", "Three"],
      correct: "Two",
      explanation:
        "'The pack's former leader' is extra information needing commas around it: 'The old wolf, the pack's former leader, rested in the shade.'",
      wrongExplanation:
        "When extra information (parenthesis) is inserted into a sentence, it needs a comma on each side — that's two commas. 'The pack's former leader' is extra information about the old wolf, so we need commas before and after it to separate it from the main sentence.",
    },
  ],
};
