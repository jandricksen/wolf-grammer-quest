import type { Territory } from "../../types";

export const conjunctions: Territory = {
  name: "Conjunction Creek",
  description: "Connect ideas with coordinating and subordinating conjunctions",
  icon: "🌊",
  questions: [
    {
      type: "multiple",
      question:
        "Which is the COORDINATING CONJUNCTION in: 'The wolf was tired but she kept running'?",
      options: ["tired", "but", "she", "kept"],
      correct: "but",
      explanation:
        "'But' is a coordinating conjunction — it joins two equal clauses. Remember: FANBOYS (For, And, Nor, But, Or, Yet, So).",
      wrongExplanation:
        "A coordinating conjunction joins two equal parts of a sentence. Remember FANBOYS: For, And, Nor, But, Or, Yet, So. These are the seven coordinating conjunctions! 'But' joins two equal clauses here: 'The wolf was tired' and 'she kept running'.",
    },
    {
      type: "multiple",
      question: "Which word is a SUBORDINATING conjunction?",
      options: ["and", "but", "because", "or"],
      correct: "because",
      explanation:
        "'Because' is subordinating — it introduces a clause that depends on the main clause.",
      wrongExplanation:
        "A subordinating conjunction introduces a subordinate clause (one that can't stand alone). Common subordinating conjunctions include: because, although, when, while, if, unless, until, before, after. 'And', 'but', and 'or' are coordinating conjunctions (FANBOYS). 'Because' is subordinating.",
    },
    {
      type: "multiple",
      question:
        "Which is the SUBORDINATING CONJUNCTION in: 'The pack waited until darkness fell over the valley'?",
      options: ["waited", "until", "darkness", "over"],
      correct: "until",
      explanation:
        "'Until' is a subordinating conjunction — it starts a subordinate clause explaining when they waited.",
      wrongExplanation:
        "A subordinating conjunction starts a subordinate clause — a clause that depends on the main clause. Subordinating conjunctions include: until, because, although, when, while, if, unless, before, after. 'Until' introduces 'until darkness fell over the valley'.",
    },
    {
      type: "multiple",
      question: "FANBOYS helps us remember coordinating conjunctions. What does it stand for?",
      options: [
        "For, And, Nor, But, Or, Yet, So",
        "First, After, Next, Before, Or, Yet, Since",
        "For, Although, Neither, But, Or, Yes, So",
        "Finally, And, Not, But, Over, Yes, So",
      ],
      correct: "For, And, Nor, But, Or, Yet, So",
      explanation:
        "FANBOYS: For, And, Nor, But, Or, Yet, So — the seven coordinating conjunctions!",
      wrongExplanation:
        "FANBOYS is a helpful way to remember the seven coordinating conjunctions: For, And, Nor, But, Or, Yet, So. These conjunctions join equal parts of a sentence. Any other words in the options (like 'although', 'before', 'after') are subordinating conjunctions, not coordinating ones.",
    },
    {
      type: "multiple",
      question: "What's the difference between coordinating and subordinating conjunctions?",
      options: [
        "Coordinating are longer words",
        "Coordinating join equal parts; subordinating create dependent clauses",
        "Subordinating only come at the start of sentences",
        "There is no difference",
      ],
      correct: "Coordinating join equal parts; subordinating create dependent clauses",
      explanation:
        "Coordinating conjunctions (and, but, or) join equals. Subordinating (because, although, when) make one clause depend on another.",
      wrongExplanation:
        "Coordinating conjunctions (FANBOYS: for, and, nor, but, or, yet, so) join two equal, independent parts. Subordinating conjunctions (because, although, when, if, until, etc.) create a dependent clause that relies on the main clause to make sense.",
    },
    {
      type: "multiple",
      question:
        "Which is a COORDINATING CONJUNCTION in: 'Luna could stay and rest or she could join the hunt'?",
      options: ["stay", "and", "rest", "join"],
      correct: "and",
      explanation:
        "'And' is coordinating (FANBOYS!) — it joins 'stay' and 'rest'. 'Or' is also coordinating!",
      wrongExplanation:
        "Coordinating conjunctions are FANBOYS: For, And, Nor, But, Or, Yet, So. They join equal parts. In this sentence, both 'and' and 'or' are coordinating conjunctions! 'And' joins 'stay' and 'rest'; 'or' gives two equal choices.",
    },
    {
      type: "multiple",
      question: "Which is a subordinating conjunction?",
      options: ["yet", "although", "so", "nor"],
      correct: "although",
      explanation:
        "'Although' is subordinating — it introduces a dependent clause. The others (yet, so, nor) are coordinating (FANBOYS).",
      wrongExplanation:
        "Subordinating conjunctions introduce clauses that can't stand alone. They include: although, because, when, while, if, unless, until, before, after. 'Yet', 'so', and 'nor' are all part of FANBOYS — they're coordinating conjunctions. 'Although' is the subordinating conjunction.",
    },
    {
      type: "multiple",
      question:
        "Which is the SUBORDINATING CONJUNCTION in: 'The wolves howled whenever the moon was bright'?",
      options: ["howled", "whenever", "moon", "bright"],
      correct: "whenever",
      explanation:
        "'Whenever' is subordinating — it introduces a clause that tells us when the wolves howled.",
      wrongExplanation:
        "A subordinating conjunction introduces a dependent clause. 'Whenever' (like 'when', 'while', 'because', 'although', 'if', 'until') is a subordinating conjunction. It starts the clause 'whenever the moon was bright', which depends on the main clause.",
    },
    {
      type: "multiple",
      question:
        "In 'The alpha led the pack, for she knew the way', what type of conjunction is 'for'?",
      options: ["Subordinating", "Coordinating", "It's not a conjunction here", "Relative"],
      correct: "Coordinating",
      explanation:
        "'For' meaning 'because' is actually a coordinating conjunction! It's the F in FANBOYS.",
      wrongExplanation:
        "This is a tricky one! 'For' can mean 'because', but it's still a coordinating conjunction — it's the F in FANBOYS (For, And, Nor, But, Or, Yet, So). Even though it gives a reason like 'because', it joins two independent clauses equally.",
    },
    {
      type: "multiple",
      question: "Which sentence uses a subordinating conjunction?",
      options: [
        "The wolf ran and the deer fled.",
        "Luna is fast yet careful.",
        "Although it was cold, they kept hunting.",
        "The pack was hungry so they hunted.",
      ],
      correct: "Although it was cold, they kept hunting.",
      explanation:
        "'Although' is subordinating — it creates a subordinate clause. 'And', 'yet', and 'so' are all coordinating.",
      wrongExplanation:
        "Subordinating conjunctions (although, because, when, if, until, etc.) create dependent clauses. Coordinating conjunctions are FANBOYS (for, and, nor, but, or, yet, so). 'And', 'yet', and 'so' are all FANBOYS! Only 'although' is subordinating.",
    },
  ],
};
