# Plan: v3 Game Enhancements

## Overview

Implement user feedback features to improve learning habits and add meaningful consequences to gameplay.

**Key Changes:**

- 5-second reading timer before answers appear (enforces reading questions)
- Failed territory makes a wolf hungry (consequence for poor performance)
- Standardise all quizzes to 10 questions (consistent length, allows larger question banks)
- Split Word Class Wilderness into 4 separate territories (focused learning)

---

## Phase A: Reading Timer

**Goal:** Enforce good reading habits by requiring 5 seconds of reading time before answer options appear.

### A1: Add Timer State

- [x] Update `src/contexts/GameContext.tsx`:
  - Add `showAnswers: boolean` to state (starts as `false`)
  - Add `readingTimeRemaining: number` to state (starts at 5)
- [x] Update `src/types/index.ts`:
  - Add `showAnswers` and `readingTimeRemaining` to `QuizState` interface

### A2: Implement Timer Logic

- [x] Update `src/contexts/GameContext.tsx`:
  - In `selectAnswer()`, do nothing if `!showAnswers`
  - In `nextQuestion()`, reset `showAnswers = false` and `readingTimeRemaining = 5`
  - In `startTerritory()`, set `showAnswers = false` and `readingTimeRemaining = 5`

### A3: Create Timer Component

- [x] Create `src/components/ReadingTimer.tsx`:
  - Displays countdown from 5 to 0
  - Circular or bar progress indicator
  - Calm visual (not frantic) - perhaps a wolf paw print filling in
  - Text like "Read the question carefully..."
  - Calls `onComplete` callback when timer reaches 0

### A4: Update QuizScreen

- [x] Update `src/screens/QuizScreen.tsx`:
  - Add timer effect that counts down each second
  - When `readingTimeRemaining` reaches 0, set `showAnswers = true`
  - Pass `showAnswers` to QuestionRenderer
- [x] Export `ReadingTimer` from `src/components/index.ts`

### A5: Update QuestionRenderer

- [x] Update `src/components/QuestionRenderer.tsx`:
  - Accept new prop `showAnswers: boolean`
  - When `showAnswers = false`, show ReadingTimer instead of answer buttons
  - When `showAnswers = true`, show answer buttons as normal
  - Smooth transition/animation between states

### A6: Add Timer Constant

- [x] Update `src/data/constants.ts`:
  - Add `READING_TIME_SECONDS = 5`

### E2E Test Updates (Phase A)

- [x] Update `e2e/quiz-flow.spec.ts`:
  - Add test: "reading timer shows before answers appear"
  - Add test: "reading timer resets for each question"
  - Update existing quiz tests to wait for timer before clicking answers
- [x] Create helper function `waitForAnswersToAppear()` in `e2e/test-utils.ts`
- [x] Increase Playwright timeout to 120s in `playwright.config.ts`

### Documentation Update (Phase A)

- [x] Update `CLAUDE.md` with reading timer feature
- [x] Run `npm run test:e2e` - ensure 100% pass (24/24 tests pass)
- [x] Run `npm run lint` and `npm run build`

**Status:** ✅ Complete

---

## Phase B: Failure Consequences

**Goal:** Add meaningful consequence to failing a territory - one wolf becomes hungry.

### B1: Design Decision - Which Wolf Gets Hungry?

Options to consider:

1. **Random wolf** - Simple but may feel unfair
2. **Most recently fed wolf** - Logical (least hungry becomes hungry)
3. **Wolf matching territory trait** - Thematic (fail courage territory, courage wolf gets hungry)
4. **User's choice** - Show modal asking which wolf to make hungry

**Recommended:** Most recently fed wolf (option 2) - feels fair and logical.

### B2: Add Failure Consequence Logic

- [ ] Update `src/contexts/GameContext.tsx`:
  - Add `makeWolfHungry(wolfId: string)` function
    - Sets `lastFedAt` to `Date.now() - (HUNGER_THRESHOLD_HOURS + 1) * 60 * 60 * 1000`
    - This makes the wolf immediately hungry
  - Update `checkTerritoryReward()` to handle failure:
    - If `!passed && pack.length > 0`:
      - Find wolf with most recent `lastFedAt` (excluding already hungry wolves)
      - Call `makeWolfHungry()` on that wolf
      - Store which wolf was made hungry for display

### B3: Add Failure State

- [ ] Update `src/types/index.ts`:
  - Add to GameState: `failedWolfId: string | null` (wolf made hungry from failure)
- [ ] Update `src/contexts/GameContext.tsx`:
  - Add `failedWolfId` state
  - Set it when a wolf is made hungry due to failure
  - Clear it when navigating away from completion screen

### B4: Update Completion Screen

- [ ] Update `src/screens/CompletionScreen.tsx`:
  - When showing failure (below 80%), display which wolf became hungry
  - Message like: "Your poor score has left [Wolf Name] hungry!"
  - Show wolf card with hungry indicator
  - Encourage player to earn treats to feed them

### B5: Edge Cases

- [ ] Handle edge case: all wolves already hungry
  - No additional consequence if all wolves are hungry
- [ ] Handle edge case: only Luna (starting wolf)
  - Luna can still become hungry
- [ ] Handle edge case: player has 0 wolves
  - Should not happen (always have Luna), but guard against it

### E2E Test Updates (Phase B)

- [ ] Create `e2e/failure-consequences.spec.ts`:
  - Test: "failing territory makes most recently fed wolf hungry"
  - Test: "failure message shows which wolf became hungry"
  - Test: "all wolves already hungry - no additional consequence"
  - Test: "feeding hungry wolf after failure works"
- [ ] Update test utilities to support checking wolf hunger state

### Documentation Update (Phase B)

- [ ] Update `CLAUDE.md` with failure consequence system
- [ ] Run `npm run test:e2e` - ensure 100% pass
- [ ] Run `npm run lint` and `npm run build`

**Status:** ⬜ Not Started

---

## Phase C: Standardise Quiz Length

**Goal:** Every quiz is exactly 10 questions, regardless of question bank size. Enables future expansion.

### C1: Add Quiz Length Constant

- [ ] Update `src/data/constants.ts`:
  - Add `QUESTIONS_PER_QUIZ = 10`

### C2: Update Quiz Selection Logic

- [ ] Update `src/contexts/GameContext.tsx` in `startTerritory()`:
  - After shuffling questions, take only first `QUESTIONS_PER_QUIZ`
  - `setShuffledQuestions(shuffleArray(questions).slice(0, QUESTIONS_PER_QUIZ))`
  - If territory has fewer than 10 questions, use all available

### C3: Verify Score Calculations

- [ ] Review `calculateTreatsEarned()` in `src/utils/treatUtils.ts`:
  - Uses `totalQuestions` parameter, so should work automatically
- [ ] Review `checkPassingScore()` in `src/utils/quizUtils.ts`:
  - Uses percentage calculation, so should work automatically
- [ ] Review territory completion display:
  - Shows "X out of Y" which uses actual question count

### C4: Minimum Questions Guard

- [ ] Add validation in `startTerritory()`:
  - Log warning if territory has fewer than `QUESTIONS_PER_QUIZ` questions
  - Game continues with available questions (graceful degradation)

### E2E Test Updates (Phase C)

- [ ] Update quiz tests to verify exactly 10 questions shown
- [ ] Tests should continue to work as they use `shuffledQuestions.length`
- [ ] Add test: "quiz shows exactly 10 questions from larger bank"

### Documentation Update (Phase C)

- [ ] Update `CLAUDE.md` with standardised quiz length
- [ ] Run `npm run test:e2e` - ensure 100% pass
- [ ] Run `npm run lint` and `npm run build`

**Status:** ⬜ Not Started

---

## Phase D: Split Word Class Territories

**Goal:** Replace Word Class Wilderness with 4 focused territories: Noun Thicket, Verb Valley, Adjective Glade, and Adverb Trail.

### D1: Design New Territories

**New territory structure:**

| Territory ID | Name            | Icon | Description                         | Wolf Role |
| ------------ | --------------- | ---- | ----------------------------------- | --------- |
| nouns        | Noun Thicket    | 🌳   | Identify naming words in the wild   | Seeker    |
| verbs        | Verb Valley     | ⚡   | Spot action words in wolf sentences | Runner    |
| adjectives   | Adjective Glade | 🌸   | Find describing words in nature     | Painter   |
| adverbs      | Adverb Trail    | 💨   | Discover how, when, and where words | Whisperer |

**New wolf roles needed:**

- Seeker (trait: wisdom) - finds nouns
- Runner (trait: swiftness) - action-oriented
- Painter (trait: focus) - descriptive
- Whisperer (trait: kindness) - subtle communication

### D2: Update Types

- [ ] Update `src/types/index.ts`:
  - Add new roles to `WolfRole` union: "Seeker" | "Runner" | "Painter" | "Whisperer"

### D3: Update Constants

- [ ] Update `src/data/constants.ts`:
  - Add new roles to `roleTraits` mapping
  - Add wolf facts for new roles to `WOLF_FACTS` if it exists

### D4: Create New Territory Files

- [ ] Create `src/data/territories/nouns.ts`:
  - 10-12 noun-focused questions
  - Questions about: common nouns, proper nouns, abstract nouns, collective nouns
  - Wolf-themed sentences throughout
- [ ] Create `src/data/territories/verbs.ts`:
  - 10-12 verb-focused questions
  - Questions about: action verbs, state verbs, helping verbs, verb tenses
  - Wolf-themed sentences throughout
- [ ] Create `src/data/territories/adjectives.ts`:
  - 10-12 adjective-focused questions
  - Questions about: descriptive, comparative, superlative, possessive adjectives
  - Wolf-themed sentences throughout
- [ ] Create `src/data/territories/adverbs.ts`:
  - 10-12 adverb-focused questions
  - Questions about: manner (-ly), time, place, degree adverbs
  - Wolf-themed sentences throughout

### D5: Update Territory Index

- [ ] Update `src/data/territories/index.ts`:
  - Remove `wordclasses` import and export
  - Add imports for `nouns`, `verbs`, `adjectives`, `adverbs`
  - Export all 4 new territories
  - Total territories now: 11 (was 8)

### D6: Delete Old Territory

- [ ] Delete `src/data/territories/wordclasses.ts`
  - Content distributed across new files

### D7: Update Territory Wolves

- [ ] Update `src/data/territoryWolves.ts`:
  - Remove `wordclasses` entry
  - Add entries for `nouns`, `verbs`, `adjectives`, `adverbs`
  - Each with appropriate role and wolf fact

### D8: Update Win Condition

- [ ] Review `checkWinCondition()` in `GameContext`:
  - Currently uses `Object.keys(territories).length`
  - Should automatically work with 11 territories
- [ ] Update any hardcoded "8 territories" references in UI text

### D9: Migrate Existing Questions

Distribute existing wordclasses.ts questions:

**To nouns.ts:**

- Q1: "Which is a NOUN in: 'The fierce wolf guarded her territory'?"
- Q6: "Which is a NOUN in: 'Howling echoed across the frozen mountains'?"
- Q11: "Which is an abstract NOUN..."

**To verbs.ts:**

- Q2: "Which is the VERB in: 'The pack hunted through the snowy forest'?"
- Q5: "Which word is a VERB in: 'Luna protects her family fiercely'?"
- Q9: "Which is the VERB in: 'The determined wolf leapt gracefully...'"

**To adjectives.ts:**

- Q3: "Which is the ADJECTIVE in: 'The silver wolf moved silently...'"
- Q4: "In 'The young pup played happily', what word class is 'young'?"
- Q8: "Which word is an ADJECTIVE?"
- Q10: "In 'The exhausted wolves rested', which TWO words are adjectives?"

**To adverbs.ts:**

- Q7: "What type of word is 'swiftly' in: 'The wolf ran swiftly'?"

**General word class understanding (distribute or create new):**

- Q12: "Which word class can 'run' belong to?" - could go to any or create variations for each

### D10: Create Additional Questions

Each new territory needs 10-12 questions. After migration:

- nouns.ts: 3 questions - needs 7-9 more
- verbs.ts: 3 questions - needs 7-9 more
- adjectives.ts: 4 questions - needs 6-8 more
- adverbs.ts: 1 question - needs 9-11 more

- [ ] Write additional noun questions (focus on: proper nouns, plural nouns, possessive nouns)
- [ ] Write additional verb questions (focus on: past/present/future tense, imperative, modal verbs)
- [ ] Write additional adjective questions (focus on: comparative/superlative, order of adjectives)
- [ ] Write additional adverb questions (focus on: adverbs of time, place, frequency, degree)

### E2E Test Updates (Phase D)

- [ ] Update all tests referencing "wordclasses" territory
- [ ] Update test utilities with new territory IDs
- [ ] Add tests for new territories (can use existing quiz flow tests as templates)
- [ ] Update win condition tests for 11 territories

### Documentation Update (Phase D)

- [ ] Update `CLAUDE.md`:
  - Update "The 8 Grammar Territories" to "The 11 Grammar Territories"
  - Add descriptions for new territories
  - Update wolf role list
- [ ] Run `npm run test:e2e` - ensure 100% pass
- [ ] Run `npm run lint` and `npm run build`

**Status:** ⬜ Not Started

---

## Implementation Order

**Recommended order:**

1. **Phase A (Reading Timer)** - Independent feature, improves UX immediately
2. **Phase C (Quiz Length)** - Quick change, prepares for expanded question banks
3. **Phase B (Failure Consequences)** - Adds gameplay depth
4. **Phase D (Split Word Classes)** - Largest change, requires content creation

Phases A, B, and C can technically be done in any order. Phase D should be last as it requires the most content work and has the most test updates.

---

## Testing Requirements

### Commands to Run After Each Phase

```bash
npm run test:e2e    # Must maintain 100% pass rate
npm run lint        # Must have no errors
npm run build       # Must compile successfully
```

### Test Summary by Phase

| Phase | Existing Tests Affected               | New Tests Required        |
| ----- | ------------------------------------- | ------------------------- |
| A     | Quiz flow tests (add timer waits)     | Timer countdown tests     |
| B     | None directly                         | Failure consequence tests |
| C     | Minimal (uses dynamic question count) | Quiz length validation    |
| D     | Many (territory references)           | New territory tests       |

---

## Files Summary

### Files to Modify

| File                                  | Changes                                              |
| ------------------------------------- | ---------------------------------------------------- |
| `src/types/index.ts`                  | Add WolfRole types, QuizState fields                 |
| `src/data/constants.ts`               | READING_TIME_SECONDS, QUESTIONS_PER_QUIZ, roleTraits |
| `src/contexts/GameContext.tsx`        | Timer state, failure logic, quiz length limit        |
| `src/components/QuestionRenderer.tsx` | Accept showAnswers prop                              |
| `src/screens/QuizScreen.tsx`          | Timer countdown effect                               |
| `src/screens/CompletionScreen.tsx`    | Failure wolf display                                 |
| `src/data/territories/index.ts`       | New territory imports                                |
| `src/data/territoryWolves.ts`         | New territory wolf mappings                          |

### New Files

| File                                 | Purpose                      |
| ------------------------------------ | ---------------------------- |
| `src/components/ReadingTimer.tsx`    | 5-second countdown component |
| `src/data/territories/nouns.ts`      | Noun-focused questions       |
| `src/data/territories/verbs.ts`      | Verb-focused questions       |
| `src/data/territories/adjectives.ts` | Adjective-focused questions  |
| `src/data/territories/adverbs.ts`    | Adverb-focused questions     |
| `e2e/failure-consequences.spec.ts`   | Failure consequence tests    |

### Files to Delete

| File                                  | Reason                            |
| ------------------------------------- | --------------------------------- |
| `src/data/territories/wordclasses.ts` | Replaced by 4 focused territories |

---

## Notes

- All new questions must use UK English spelling and terminology
- All sentences must be wolf-themed with natural wolf behaviours
- The reading timer should feel calm, not stressful (no alarming sounds or frantic visuals)
- Consider making timer duration configurable in future (accessibility)
- Phase D content creation may take longest - consider recruiting help with question writing
