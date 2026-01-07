import type { Territory } from "../../types";

export const affixes: Territory = {
  name: "Prefix & Suffix Summit",
  description: "Discover how prefixes and suffixes change word meanings",
  icon: "🗻",
  questions: [
    {
      type: "multiple",
      question: "What does the PREFIX 'un-' do to a word?",
      options: [
        "Makes it plural",
        "Makes it mean the opposite",
        "Makes it past tense",
        "Makes it bigger",
      ],
      correct: "Makes it mean the opposite",
      explanation: "Un- reverses meaning: happy → unhappy, known → unknown, like → unlike.",
      wrongExplanation:
        "A prefix is a group of letters added to the beginning of a word to change its meaning. 'Un-' is a prefix that means 'not' or 'the opposite of'. When you add 'un-' to 'happy', you get 'unhappy' (not happy). The prefix reverses the meaning.",
    },
    {
      type: "multiple",
      question: "In 'The wolf moved silently', what is the SUFFIX in 'silently'?",
      options: ["-ent", "-ly", "-ily", "silent"],
      correct: "-ly",
      explanation: "'-ly' is added to 'silent' to make it an adverb describing how the wolf moved.",
      wrongExplanation:
        "A suffix is a group of letters added to the end of a word to change its meaning or word class. In 'silently', the root word is 'silent' and '-ly' is added to the end. The suffix '-ly' often turns adjectives into adverbs (describing how something is done).",
    },
    {
      type: "multiple",
      question: "What does the prefix 're-' mean in 'The pack returned to their den'?",
      options: ["Not", "Again/back", "Before", "Very"],
      correct: "Again/back",
      explanation:
        "'Re-' means again or back. Returned = turned back, going to where they were before.",
      wrongExplanation:
        "A prefix is added to the beginning of a word to change its meaning. The prefix 're-' means 'again' or 'back'. So 'return' means to go back, 'replay' means to play again, and 'reread' means to read again.",
    },
    {
      type: "multiple",
      question:
        "Which word has a PREFIX in: 'It was impossible for the wolf to cross the frozen river'?",
      options: ["impossible", "frozen", "river", "cross"],
      correct: "impossible",
      explanation: "'Im-' is a prefix meaning 'not'. Impossible = not possible.",
      wrongExplanation:
        "A prefix is a group of letters added to the beginning of a word to change its meaning. Look for words where you can spot a root word with something added at the start. 'Impossible' has the prefix 'im-' (meaning 'not') added to 'possible'. So impossible means 'not possible'.",
    },
    {
      type: "multiple",
      question: "What does the suffix '-less' mean in 'fearless'?",
      options: ["Full of", "Without", "More", "Like"],
      correct: "Without",
      explanation: "'-less' means without. A fearless wolf is one without fear!",
      wrongExplanation:
        "A suffix is added to the end of a word to change its meaning. The suffix '-less' means 'without'. So 'fearless' means 'without fear', 'hopeless' means 'without hope', and 'careless' means 'without care'.",
    },
    {
      type: "multiple",
      question: "Which word has both a prefix AND a suffix?",
      options: ["unhappy", "running", "uncomfortable", "jumped"],
      correct: "uncomfortable",
      explanation:
        "Un- (prefix meaning not) + comfort + -able (suffix meaning can be). Uncomfortable!",
      wrongExplanation:
        "A prefix goes at the beginning of a word; a suffix goes at the end. 'Uncomfortable' has both: 'un-' (prefix meaning 'not') + 'comfort' (root word) + '-able' (suffix meaning 'can be'). 'Unhappy' only has a prefix, and 'running' and 'jumped' only have suffixes.",
    },
    {
      type: "multiple",
      question: "What does the prefix 'dis-' mean?",
      options: ["Very", "Not/opposite of", "Before", "After"],
      correct: "Not/opposite of",
      explanation: "'Dis-' means not or the opposite. Disappear = not appear, disobey = not obey.",
      wrongExplanation:
        "A prefix is added to the start of a word to change its meaning. 'Dis-' is a prefix meaning 'not' or 'the opposite of'. So 'disagree' means 'not agree', 'disappear' means 'not appear', and 'disobey' means 'not obey'.",
    },
    {
      type: "multiple",
      question:
        "Which word has a SUFFIX in: 'The powerful wolf showed great strength and determination'?",
      options: ["powerful", "strength", "showed", "great"],
      correct: "powerful",
      explanation: "'Powerful' has the suffix '-ful' meaning 'full of'. Full of power!",
      wrongExplanation:
        "A suffix is a group of letters added to the end of a word to change its meaning. Look for words where you can spot a root word with something added at the end. 'Powerful' has the suffix '-ful' (meaning 'full of') added to 'power'. So powerful means 'full of power'.",
    },
    {
      type: "multiple",
      question: "If 'pre-' means before, what does 'prehistoric' mean?",
      options: ["After history", "During history", "Before recorded history", "About history"],
      correct: "Before recorded history",
      explanation:
        "Pre- (before) + historic = before recorded history. Wolves are prehistoric animals!",
      wrongExplanation:
        "A prefix changes a word's meaning. 'Pre-' is a prefix meaning 'before'. So 'prehistoric' means 'before history' (before recorded history). Other examples: 'preview' (view before), 'prepay' (pay before), 'preheat' (heat before).",
    },
    {
      type: "multiple",
      question: "What suffix turns 'hunt' into 'hunter'?",
      options: ["-er", "-or", "-ist", "-ment"],
      correct: "-er",
      explanation: "'-er' often means 'one who does'. A hunter is one who hunts!",
      wrongExplanation:
        "A suffix is added to the end of a word to change its meaning. The suffix '-er' often means 'a person who does something'. Hunt + -er = hunter (one who hunts). Similarly: teach + -er = teacher, run + -er = runner.",
    },
    {
      type: "multiple",
      question: "In 'The wolf was unable to find food', what is the root word?",
      options: ["un", "unable", "able", "find"],
      correct: "able",
      explanation:
        "'Able' is the root word. 'Un-' is the prefix that changes its meaning to 'not able'.",
      wrongExplanation:
        "The root word is the main word before any prefixes or suffixes are added. In 'unable', if we remove the prefix 'un-', we're left with 'able' — that's the root word. The prefix 'un-' has been added to change its meaning to 'not able'.",
    },
    {
      type: "multiple",
      question: "Which prefix would make 'visible' mean 'cannot be seen'?",
      options: ["un-", "in-", "dis-", "re-"],
      correct: "in-",
      explanation: "'Invisible' uses 'in-' (which becomes 'in-' before 'v') to mean 'not visible'.",
      wrongExplanation:
        "Different prefixes mean 'not', but they're used with different words. 'In-' is the prefix used with 'visible' to make 'invisible' (not visible/cannot be seen). Note: 'in-' can change to 'im-' before some letters (like 'impossible').",
    },
  ],
};
