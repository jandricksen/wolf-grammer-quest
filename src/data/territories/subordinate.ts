import type { Territory } from "../../types";

export const subordinate: Territory = {
  name: "Clause Canyon",
  description: "Find the subordinate clauses hiding in sentences",
  icon: "🏔️",
  questions: [
    {
      type: "multiple",
      question:
        "Which is the subordinate clause in: 'The wolf waited patiently until the deer moved closer'?",
      options: [
        "The wolf waited patiently",
        "until the deer moved closer",
        "the deer moved closer",
        "waited patiently",
      ],
      correct: "until the deer moved closer",
      explanation:
        "The subordinate clause starts with 'until' and gives extra information. The main clause 'The wolf waited patiently' makes sense on its own.",
      wrongExplanation:
        "A subordinate clause is a group of words with a verb that cannot stand alone as a sentence — it depends on the main clause. It usually starts with words like 'until', 'because', 'when', 'although', or 'if'. Here, 'until the deer moved closer' is the subordinate clause because it can't be a sentence on its own.",
    },
    {
      type: "multiple",
      question:
        "Which is the subordinate clause in: 'Because she was hungry, the wolf began to hunt'?",
      options: ["the wolf began to hunt", "Because she was hungry", "began to hunt", "the wolf"],
      correct: "Because she was hungry",
      explanation:
        "'Because she was hungry' is subordinate — it can't stand alone as a sentence and starts with the subordinating conjunction 'because'.",
      wrongExplanation:
        "A subordinate clause cannot stand alone as a complete sentence — it needs the main clause to make sense. It often starts with words like 'because', 'although', 'when', 'if', or 'until'. 'Because she was hungry' is subordinate because you can't just say that on its own — it needs 'the wolf began to hunt' to complete the thought.",
    },
    {
      type: "multiple",
      question: "What makes a clause 'subordinate'?",
      options: [
        "It is very short",
        "It cannot stand alone as a complete sentence",
        "It always comes at the end",
        "It contains a verb",
      ],
      correct: "It cannot stand alone as a complete sentence",
      explanation:
        "A subordinate clause depends on the main clause. It adds information but isn't a complete thought by itself.",
      wrongExplanation:
        "A subordinate clause is a group of words containing a verb that cannot stand alone as a complete sentence. It depends on the main clause to make sense. For example, 'because she was tired' has a verb but isn't a complete thought — it needs a main clause like 'the wolf rested'.",
    },
    {
      type: "multiple",
      question:
        "What word starts the subordinate clause in: 'The pack rested when the sun was at its highest'?",
      options: ["rested", "when", "sun", "highest"],
      correct: "when",
      explanation:
        "'When' is a subordinating conjunction. It introduces the subordinate clause 'when the sun was at its highest'.",
      wrongExplanation:
        "Subordinate clauses are introduced by subordinating conjunctions — words like 'when', 'because', 'although', 'if', 'until', 'while', and 'before'. These words signal that a subordinate clause is about to begin. Here, 'when' starts the subordinate clause.",
    },
    {
      type: "multiple",
      question: "Which word could NOT start a subordinate clause?",
      options: ["because", "although", "wolf", "while"],
      correct: "wolf",
      explanation:
        "Subordinate clauses start with subordinating conjunctions like because, although, while, when, if, unless, until.",
      wrongExplanation:
        "Subordinate clauses must start with subordinating conjunctions — special words like 'because', 'although', 'while', 'when', 'if', 'unless', 'until', 'before', and 'after'. 'Wolf' is a noun (a naming word), not a conjunction, so it cannot start a subordinate clause.",
    },
    {
      type: "multiple",
      question:
        "In 'Although the night was cold, the wolves kept moving', which is the main clause?",
      options: [
        "Although the night was cold",
        "the wolves kept moving",
        "the night was cold",
        "kept moving",
      ],
      correct: "the wolves kept moving",
      explanation:
        "'The wolves kept moving' makes complete sense on its own — that's your main clause!",
      wrongExplanation:
        "The main clause is the part of the sentence that can stand alone and make complete sense. The subordinate clause (starting with 'although') depends on it. Ask yourself: which part makes sense as a complete sentence? 'The wolves kept moving' does — that's the main clause.",
    },
    {
      type: "multiple",
      question:
        "What is the subordinating conjunction in: 'The alpha stayed alert while the pups were sleeping'?",
      options: ["alert", "while", "pups", "sleeping"],
      correct: "while",
      explanation:
        "'While' is a subordinating conjunction — it introduces the subordinate clause 'while the pups were sleeping'.",
      wrongExplanation:
        "A subordinating conjunction is a word that introduces a subordinate clause. Common ones include: while, when, because, although, if, unless, until, before, after. Here, 'while' introduces the subordinate clause 'while the pups were sleeping'.",
    },
    {
      type: "multiple",
      question: "Where is the subordinate clause in: 'The wolf, who was the oldest, led the hunt'?",
      options: ["The wolf led the hunt", "who was the oldest", "led the hunt", "The wolf"],
      correct: "who was the oldest",
      explanation:
        "This subordinate clause is embedded in the middle! 'Who was the oldest' gives extra information about the wolf.",
      wrongExplanation:
        "A subordinate clause adds extra information and cannot stand alone. Sometimes it's embedded in the middle of a sentence, between commas. 'Who was the oldest' is a relative clause (a type of subordinate clause) — it gives extra information about the wolf but isn't a complete sentence on its own.",
    },
    {
      type: "multiple",
      question: "Which sentence contains a subordinate clause?",
      options: [
        "The wolves howled loudly.",
        "The pack ran and the deer fled.",
        "Before dawn broke, the hunt began.",
        "Luna is fast and strong.",
      ],
      correct: "Before dawn broke, the hunt began.",
      explanation:
        "'Before dawn broke' is subordinate — it starts with 'before' and can't stand alone.",
      wrongExplanation:
        "A subordinate clause starts with a subordinating conjunction (like 'before', 'because', 'when', 'although') and cannot stand alone as a sentence. Look for these signal words! 'Before dawn broke' starts with 'before' and can't be a sentence on its own — that makes it a subordinate clause.",
    },
    {
      type: "multiple",
      question:
        "If you remove the subordinate clause from 'The wolf slept because she was tired', what remains?",
      options: ["because she was tired", "The wolf slept", "she was tired", "wolf slept because"],
      correct: "The wolf slept",
      explanation:
        "The main clause 'The wolf slept' is a complete sentence. The subordinate clause 'because she was tired' adds extra information.",
      wrongExplanation:
        "The main clause is what remains when you remove the subordinate clause. The main clause can stand alone as a complete sentence. 'Because she was tired' is the subordinate clause (it starts with 'because' and can't stand alone). Remove it, and you're left with 'The wolf slept' — the main clause.",
    },
  ],
};
