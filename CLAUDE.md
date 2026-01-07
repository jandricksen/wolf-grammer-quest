# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Wolf Grammar Quest** is an educational web app for teaching Year 5 UK English grammar and punctuation to a 10-year-old through wolf-themed challenges. The app uses a progression-based reward system where users earn and care for wolves by completing grammar territories.

**Key Design Principles:**

- Calm, focused learning (no frantic timers or overwhelming animations)
- Learning at the moment of need (rich explanations on wrong answers)
- UK English spelling and terminology throughout
- All content child-safe and wolf-themed only

## Technical Architecture

### TypeScript React Application (In Progress)

The app is being restructured from a single-file `wolf-grammar-quest.jsx` into a modular TypeScript React application with Vite build system. See `docs/plans/ongoing/restructure-react-app.md` for the full plan.

**Current Stack:**

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Context API** - State management (replacing 16 useState hooks)
- **Playwright** - End-to-end testing ✅ **100% test coverage (15/15 passing)**
- **ESLint** - Code quality and bug detection (TypeScript + React rules)
- **Prettier** - Automatic code formatting

**Core State Management:**

- `screen`: Controls which view is displayed (home, quiz, complete, pack, wolfDetail, inventory)
- `territories`: Large nested object containing all 8 grammar territories with questions
- `pack`: Array of wolf objects with traits, roles, and facts
- `treats`: Object tracking 4 treat types (meatChunk, wisdomBerry, swiftMeat, goldenKibble)
- `completedTerritories`: Object tracking which territories have been finished
- `territoryScores`: Object storing best scores per territory

### Screen Flow Architecture

The component uses conditional rendering based on the `screen` state variable:

1. **home** - Map screen showing all 8 territories with progress indicators
2. **quiz** - Active quiz with questions and immediate feedback
3. **complete** - Territory completion screen with score, treats earned, and wolf reward
4. **pack** - Wolf collection view showing all earned wolves
5. **wolfDetail** - Detailed view of a single wolf with trait
6. **inventory** - Treats inventory and how to earn them

### Data Structures

**Territory Object:**

```javascript
territories = {
  apostrophes: {
    name: 'Apostrophe Forest',
    description: 'Master the art of possession and contraction',
    icon: '🌲',
    questions: [...]  // Array of 10+ question objects
  },
  // 8 territories total
}
```

**Question Types:**

- `tap`: Tap a word in a sentence
- `tap-clause`: Tap multiple words forming a clause (uses correctRange)
- `tap-word`: Tap a specific word
- `multiple`: Multiple choice question
- `fill`: Fill in the blank

Each question has:

- `question`, `correct`, `explanation` (for correct answers)
- `wrongExplanation` (extended teaching when user is wrong - this is critical for learning)

**Wolf Object:**

```javascript
{
  id: 'unique_id',
  name: 'Auto-generated name',
  role: 'Scout' | 'Tracker' | 'Hunter' | 'Guardian' | 'Howler' | 'Shadow' | 'Elder' | 'Storyteller',
  earned: true,
  fact: 'Real wolf fact string',
  trait: 'wisdom' | 'swiftness' | 'courage' | 'kindness' | 'focus'
}
```

**Role-to-Trait Mapping:**
Each wolf role has one defining trait. See `roleTraits` in constants and `getWolfTrait()` function in wolfUtils.

| Role        | Trait     |
| ----------- | --------- |
| Alpha       | courage   |
| Scout       | swiftness |
| Tracker     | wisdom    |
| Hunter      | courage   |
| Guardian    | kindness  |
| Howler      | focus     |
| Shadow      | swiftness |
| Elder       | wisdom    |
| Storyteller | kindness  |

**Wolf Naming:**
Wolf names are randomly assigned from a curated list of 64 nature-themed names (WOLF_NAMES in constants). Names are unique within a pack when possible. See `getRandomWolfName()` function in wolfUtils.

**Treat System (Phase 1):**

- 1 Meat Chunk per 2 correct answers
- +1 bonus treat for 80%+ score
- +3 bonus treats for 90%+ score
- Special treats (Wisdom Berry, Swift Meat) for 90%+ scores

## The 8 Grammar Territories

1. **Apostrophe Forest** 🌲 - Possession vs contraction, it's/its
2. **Clause Canyon** 🏔️ - Subordinate clauses and subordinating conjunctions
3. **Word Class Wilderness** 🌿 - Nouns, verbs, adjectives, adverbs
4. **Pronoun Peak** ⛰️ - Personal, relative, and possessive pronouns
5. **Conjunction Creek** 🌊 - Coordinating (FANBOYS) vs subordinating
6. **Prefix & Suffix Summit** 🗻 - un-, re-, dis-, -ly, -ful, -less, etc.
7. **Comma Cave** 🦇 - Lists, fronted adverbials, parenthesis
8. **Speech Cavern** 💬 - Direct speech punctuation rules

Each territory unlocks a unique wolf role when completed at 80%+.

## Development Phases

The app is currently at **Phase 1** (Wolf Statistics & Treats completed).

**Completed:**

- Core grammar game with 8 territories
- Wolf collection with single defining trait per wolf
- Treat earning system
- Pack and inventory screens
- **Question and answer randomisation** to prevent pattern memorisation
- **100% E2E test coverage with Playwright (15 passing tests)**

**Planned (see DEVELOPMENT_PLAN.md):**

- Phase 2: Wolf Care & Feeding (hunger system, daily check-ins)
- Phase 3: Weekly Pack Encounters (story-based challenges)
- Phase 4: Wolf Growth & Evolution (XP and life stages)
- Phase 5: Polish & Year 6 Expansion (dragons theme)

## Content Guidelines

**When adding questions:**

- All sentences must be wolf-themed with natural wolf behaviors
- Use UK English spelling (behaviour, colour, realise, etc.)
- Follow NFER-style question formats
- Provide both `explanation` (brief, for correct answers) and `wrongExplanation` (extended teaching for wrong answers)
- Ensure grammar answers are verified for Year 5 UK curriculum accuracy

**Question balance:**

- Mix of tap, multiple choice, and fill-in types
- 10-12 questions per territory
- Difficulty appropriate for 10-year-olds

**Wolf facts:**

- Must be real, child-appropriate facts about wolf behavior, habitat, or biology
- Keep to 1-2 sentences

## Key Functions

**Territory Management:**

- `startTerritory(territoryId)` - Initialize quiz for a territory, shuffle questions using `shuffleArray()`
- `selectAnswer(answer)` - Handle answer selection and show feedback
- `nextQuestion()` - Advance to next question or completion screen
- `completeTerritory()` - Calculate score, award treats and wolves

**Quiz Utilities:**

- `shuffleArray<T>(array: T[]): T[]` - Fisher-Yates shuffle algorithm for randomising questions and answers
- Questions are shuffled when territory starts (stored in `shuffledQuestions` state)
- Multiple choice answers are shuffled when each question loads (in `QuestionRenderer`)

**Wolf Management:**

- `getWolfTrait(role)` - Get the defining trait for a wolf based on role
- `addWolfToPack()` - Add named wolf to pack array
- `getRandomWolfName(usedNames)` - Get unique wolf name from curated list

**Treat Calculation:**

- Happens in territory completion flow
- Stored in `pendingTreats` state for display on completion screen
- Added to `treats` state after user acknowledges

## Styling

Uses Tailwind CSS utility classes throughout. Common patterns:

- Screen backgrounds: `bg-gradient-to-b from-slate-800 to-slate-900`
- Cards: `bg-white rounded-xl p-6`
- Buttons: `bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg`
- Info boxes: `bg-amber-50 border border-amber-200 rounded-lg`

## Build System & Development

**Current Status:** The app is being restructured from a single-file component into a TypeScript React application with Vite.

**Running the App:**

```bash
npm install          # Install dependencies
npm run dev          # Start development server (http://localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build
npm run test:e2e     # Run Playwright end-to-end tests
npm run lint         # Run ESLint to check code quality
npm run lint:fix     # Auto-fix ESLint issues
npm run format       # Format all code with Prettier
npm run format:check # Check if code is formatted correctly
```

**Legacy Single-File Component:**
The original `wolf-grammar-quest.jsx` (~1,777 lines) has been archived to `wolf-grammar-quest.jsx.bak`. See `docs/plans/ongoing/restructure-react-app.md` for the full restructuring plan.

## Testing

### 🚨 CRITICAL: 100% Test Coverage Required

**Non-Negotiable Testing Standards:**

- **ALL** Playwright E2E tests MUST pass at 100% before committing ANY changes
- Current status: **15/15 tests passing (100%)** ✅
- Run `npm run test:e2e` to verify tests before every commit
- **Zero tolerance policy**: Any code change that causes a test to fail MUST be fixed immediately
- Never commit code that breaks existing tests under any circumstances
- Add new tests for any new features to maintain 100% coverage

**Test Structure:**

- `e2e/screens.spec.ts` - Screen loading and navigation (5 tests)
- `e2e/quiz-flow.spec.ts` - Quiz journey and question types (5 tests)
- `e2e/wolf-earning.spec.ts` - Wolf reward flow and scoring (5 tests)

**Running Tests:**

```bash
npm run test:e2e              # Run all tests (MUST show 15/15 passing)
npm run test:e2e -- --ui      # Run with Playwright UI
npm run test:e2e -- screens   # Run only screen tests
```

**Test Development Guidelines:**

- Always use correct answers in tests for predictable outcomes
- Use regex patterns for flexible text matching (e.g., `/scored \d+ out of \d+/`)
- Add `.first()` to selectors that may match multiple elements (strict mode)
- Never test exact values for randomly generated content (wolf names)
- Verify tests pass locally before committing

## Code Quality & Formatting

**ESLint Configuration:**

- Uses ESLint 9 with flat config format ([eslint.config.js](eslint.config.js))
- TypeScript + React rules enabled
- Enforces React Hooks rules and accessibility (jsx-a11y)
- Integrated with Prettier for consistent formatting

**Prettier Configuration:**

- Double quotes for strings
- 2-space indentation
- 100 character line width
- ES5 trailing commas
- Semicolons enabled

**Before Committing:**

1. Run `npm run lint` to check for code quality issues
2. Run `npm run format` to auto-format all files
3. Run `npm run test:e2e` to ensure all 15 tests pass
4. Run `npm run build` to verify TypeScript compiles

**Common ESLint Rules:**

- No unescaped entities in JSX (use `&apos;`, `&ldquo;`, `&rdquo;`)
- No unused variables (use `,` instead of `_` in destructuring)
- No `autoFocus` prop (accessibility concern)
- Import React types correctly (`import { type KeyboardEvent } from "react"`)

## Future Considerations

**Data Persistence:**
Currently no persistence - all state is lost on refresh. Future phases will add localStorage then potentially cloud sync (Firebase/Supabase).
