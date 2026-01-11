# Plan: Implement v2 Features (Phases A-D)

## Overview

Implement user feedback features from `docs/IMPLEMENTATION_PLAN_v2.md`. This plan covers Phases A-D, preparing the foundation for Phase E (Random Events) in the future.

**Key Changes:**

- Pass rate increased from 70% to 80%
- Computer-generated wolf names (remove text input)
- Simplify wolves from 5 stats to 1 trait per wolf
- Randomise questions and answer order
- Win state celebration for completing all territories
- Time-based hunger system giving treats a purpose

---

## Phase A: Quick Wins

**Goal:** Implement fast, low-risk changes that immediately improve the game.

### A1: Change Pass Rate to 80%

- [x] Update `src/utils/quizUtils.ts` - change `0.7` to `0.8` in `checkPassingScore()`
- [x] Update `src/screens/CompletionScreen.tsx` - change `70` to `80` in percentage check
- [x] Update `src/utils/treatUtils.ts` - change `0.7` to `0.8` for bonus treat threshold
- [x] Update `src/screens/CompletionScreen.tsx` - update "Score 70% or higher" message to "80%"

### A2: Computer-Generated Wolf Names

- [x] Add `WOLF_NAMES` array to `src/data/constants.ts` (64 curated names)
- [x] Add `getRandomWolfName(usedNames: string[]): string` to `src/utils/wolfUtils.ts`
- [x] Update `src/components/WolfRewardModal.tsx`:
  - Remove text input field
  - Display randomly selected name with reveal animation
  - Add "Meet your new wolf!" heading
- [x] Update `src/contexts/GameContext.tsx`:
  - Auto-assign name when wolf is earned (in `checkTerritoryReward()`)
  - Track used names to avoid duplicates
  - Removed `newWolfName` usage from modal

### A3: Verify Kindness Trait Displays

- [x] Code review verified Kindness is included in `statInfo` constant
- [x] Verified `WolfStatsPanel` uses `Object.entries(stats)` which includes all stats
- [x] Verified `WolfDetailScreen` displays all stats from statInfo including Kindness

### E2E Test Updates (Phase A)

**Affected tests:**

- [x] `e2e/wolf-earning.spec.ts` line 4: Updated comment "70%+" to "80%+"
- [x] `e2e/wolf-earning.spec.ts` line 203: Updated comment "50% - below 80% threshold"
- [x] `e2e/wolf-earning.spec.ts` line 91: "wolf naming flow" - **COMPLETED**
  - Renamed test to "wolf is assigned auto-generated name on earning"
  - Removed text input interactions
  - Verified name is auto-displayed in modal
  - Verified "Welcome to the Pack!" button (no input)
  - Verified wolf appears in pack with generated name (2 members strong)

### Documentation Update (Phase A)

- [x] Updated `CLAUDE.md` with new 80% pass rate
- [x] Updated `CLAUDE.md` with wolf naming section
- [x] Ran `npm run test:e2e` - **15/15 tests passing** ✅
- [x] Ran `npm run lint` - **no errors** ✅
- [x] Ran `npm run build` - **successful** ✅

**Status:** ✅ **COMPLETED**

---

## Phase B: Trait Simplification

**Goal:** Simplify wolves from 5 stats to 1 defining trait per wolf, making each wolf memorable and distinct.

### B1: Update Type Definitions

- [x] Update `src/types/index.ts`:
  - Removed `WolfStats` interface
  - Changed `Wolf.stats: WolfStats` to `Wolf.trait: StatName`
  - Kept `StatName` type as-is (wisdom, swiftness, courage, kindness, focus)
  - Replaced `RoleStatTemplate` interfaces with `RoleTraits` type

### B2: Update Constants

- [x] Update `src/data/constants.ts`:
  - Replaced `roleStatTemplates` with `roleTraits: RoleTraits`
  - Kept `statInfo` for trait display (icon, colour, description)

### B3: Update Wolf Utilities

- [x] Update `src/utils/wolfUtils.ts`:
  - Replaced `generateWolfStats(role)` with `getWolfTrait(role): StatName`
  - Updated `createInitialWolf()` to use single trait (courage for Alpha)
  - Removed stat generation logic

### B4: Update Wolf Components

- [x] Created `src/components/WolfTraitDisplay.tsx`:
  - Shows single trait with icon and label
  - Supports compact mode for wolf cards
  - Shows full trait with description in expanded mode
- [x] Deleted `src/components/WolfStatsPanel.tsx` (replaced by WolfTraitDisplay)
- [x] Deleted `src/components/StatBar.tsx` (no longer needed)
- [x] Updated `src/components/WolfRewardModal.tsx`:
  - Shows single trait in wolf reveal

### B5: Update Screens

- [x] Updated `src/screens/WolfDetailScreen.tsx`:
  - Features single trait prominently with "Defining Trait" heading
  - Removed 5-stat panel and stat guide
- [x] Updated `src/screens/PackScreen.tsx`:
  - Updated wolf card rendering for single trait (compact mode)
- [x] Updated `src/screens/HomeScreen.tsx`:
  - Updated pack preview to show trait instead of stats
  - Fixed 70% message to 80%

### B6: Update GameContext

- [x] Updated `src/contexts/GameContext.tsx`:
  - Updated `PendingWolf` interface to use `trait` instead of `stats`
  - Updated `addWolfToPack()` to use single trait
  - Updated `checkTerritoryReward()` to use `getWolfTrait()`
- [x] Updated `src/screens/CompletionScreen.tsx` and `src/screens/QuizScreen.tsx`:
  - Updated WolfRewardModal usage to pass `trait` instead of `stats`

### E2E Test Updates (Phase B)

- [x] Updated `e2e/screens.spec.ts` wolf detail test:
  - Changed from checking 5 stats to checking single "Defining Trait" and "courage"
  - Updated comments to reflect trait-based display

### Documentation Update (Phase B)

- [x] Updated `CLAUDE.md`:
  - Updated Wolf Object documentation to show `trait` instead of `stats`
  - Added Role-to-Trait Mapping table
  - Updated function documentation (`getWolfTrait` instead of `generateWolfStats`)
  - Updated descriptions throughout
- [x] Ran `npm run test:e2e` - **15/15 tests passing** ✅
- [x] Ran `npm run lint` - **no errors** ✅
- [x] Ran `npm run build` - **successful** ✅

**Status:** ✅ **COMPLETED**

---

## Phase C: Question Randomisation

**Goal:** Prevent pattern memorisation by randomising questions and answer order.

### C1: Add Shuffle Utility

- [x] Add `shuffleArray<T>(array: T[]): T[]` to `src/utils/quizUtils.ts`
  - Fisher-Yates shuffle algorithm
  - Returns new array, doesn't mutate original

### C2: Randomise Answer Order

- [x] Update `src/components/QuestionRenderer.tsx`:
  - Shuffle `options` array for `type: "multiple"` questions
  - Shuffle on question load using useEffect, not on every render
  - Store shuffled options in local state
  - Track correct answer by value, not position

### C3: Randomise Question Selection

- [x] Update `src/contexts/GameContext.tsx` in `startTerritory()`:
  - Shuffle full question array using `shuffleArray()`
  - Store shuffled questions in `shuffledQuestions` state
  - Use shuffled questions throughout quiz flow
- [x] No duplicate questions in same session (all questions shuffled once per territory attempt)

### C4: Expand Question Banks (Content Prep)

- [x] Documented: All territories have 10 questions currently
- [x] Note: Expanding to 20-25 questions per territory is future content work
- [x] Randomisation logic works regardless of pool size

### E2E Test Updates (Phase C)

**Impact analysis:**

- Existing tests used hardcoded question order - UPDATED
- Tests now use flexible answer matching that works with randomised questions
- Added helper function `answerQuizQuestions()` for consistent test pattern

**Test changes:**

- [x] Updated `quiz-flow.spec.ts` - complete full quiz journey test to find visible correct answers
- [x] Updated `wolf-earning.spec.ts` - all tests updated with helper function
- [x] Updated "failing score" test with list of known wrong answers to click
- [x] Updated "progress" and "feedback" tests to use correct answer list
- [x] All 15 tests passing ✅

### Documentation Update (Phase C)

- [x] Updated `CLAUDE.md` to note randomisation in completed features
- [x] Added randomisation details to Key Functions section
- [x] Ran `npm run test:e2e` - **15/15 tests passing** ✅
- [x] Ran `npm run lint` - **no errors** ✅
- [x] Ran `npm run build` - **successful** ✅

**Status:** ✅ **COMPLETED**

---

## Phase D: Goals & Purpose

**Goal:** Add win state for game completion and give treats a purpose through wolf hunger system.

### D1: Win State

#### D1a: Add Win Screen Type

- [ ] Update `src/types/index.ts`:
  - Add `"win"` to `Screen` type union

#### D1b: Create Win Screen

- [ ] Create `src/screens/WinScreen.tsx`:
  - Celebration display with all wolves together
  - "Alpha of Alphas" title award
  - Display completion stats (territories, wolves, treats earned)
  - Option to continue playing or reset
- [ ] Add to `src/screens/index.ts` barrel export

#### D1c: Add Win State Logic

- [ ] Update `src/contexts/GameContext.tsx`:
  - Add `checkWinCondition()` function
  - Check if all 8 territories completed at 80%+
  - Trigger on territory completion
  - Add `hasWon: boolean` to state
  - Navigate to win screen when condition met

#### D1d: Wire Up Win Screen

- [ ] Update `src/App.tsx`:
  - Add case for "win" screen
  - Import and render WinScreen

### D2: Time-Based Hunger System

#### D2a: Update Types

- [ ] Update `src/types/index.ts`:
  - Add `lastFedAt: number` to `Wolf` interface (timestamp)

#### D2b: Add Hunger Constants

- [ ] Update `src/data/constants.ts`:
  - Add `HUNGER_THRESHOLD_HOURS = 24`
  - Add `FEEDING_COST = 1` (meat chunks per feeding)

#### D2c: Add Hunger Utilities

- [ ] Update `src/utils/wolfUtils.ts`:
  - Add `isWolfHungry(wolf: Wolf): boolean`
  - Add `getHoursSinceFed(wolf: Wolf): number`
  - Add `getHungerStatus(wolf: Wolf): "ready" | "hungry"`

#### D2d: Update Wolf Display

- [ ] Update `src/components/WolfCard.tsx`:
  - Show hungry/ready indicator icon
  - Visual distinction for hungry wolves (dimmed, icon overlay)
- [ ] Update `src/screens/WolfDetailScreen.tsx`:
  - Show hunger status prominently
  - Add "Feed" button (disabled if no treats or already fed)
  - Show time until hungry

#### D2e: Add Feeding Logic

- [ ] Update `src/contexts/GameContext.tsx`:
  - Add `feedWolf(wolfId: string)` action
  - Deduct 1 meat chunk from treats
  - Update wolf's `lastFedAt` to `Date.now()`
  - Validate: has treats, wolf exists, wolf is hungry
- [ ] Update initial Luna wolf with `lastFedAt: Date.now()`
- [ ] Update `addWolfToPack()` to set `lastFedAt: Date.now()`

#### D2f: Update Pack Screen

- [ ] Update `src/screens/PackScreen.tsx`:
  - Show count of hungry wolves
  - Highlight hungry wolves visually
  - Consider "Feed All" button (optional)

### E2E Test Updates (Phase D)

**New tests needed for Win State:**

- [ ] Create `e2e/win-state.spec.ts`:
  - Test: "win screen appears when all territories completed at 80%+"
  - Test: "win screen displays all wolves"
  - Test: "Alpha of Alphas title is awarded"
  - Test: "can continue playing after winning"

**New tests needed for Hunger System:**

- [ ] Add to `e2e/wolf-earning.spec.ts` or create `e2e/hunger.spec.ts`:
  - Test: "new wolf starts as ready (not hungry)"
  - Test: "feeding wolf deducts treats"
  - Test: "cannot feed wolf with zero treats"
  - Test: "hungry indicator shows on wolf card" (may need time mocking)

**Existing test updates:**

- `e2e/screens.spec.ts` wolf detail: Add check for feed button
- `e2e/screens.spec.ts` pack screen: Add check for hunger status indicators

### Documentation Update (Phase D)

- [ ] Update `CLAUDE.md`:
  - Document win condition
  - Document hunger system
  - Update Wolf Object structure
- [ ] Update `docs/GAME_OVERVIEW.md`
- [ ] Run `npm run test:e2e` and add tests for new features
- [ ] Run `npm run lint` and `npm run build`

**Status:** ⬜ Not Started

---

## Testing Requirements

### Commands to Run After Each Phase

```bash
npm run test:e2e    # Must maintain 100% pass rate (currently 15/15)
npm run lint        # Must have no errors
npm run build       # Must compile successfully
```

### Test Summary by Phase

| Phase | Existing Tests Affected                   | New Tests Required                   |
| ----- | ----------------------------------------- | ------------------------------------ |
| A     | `wolf-earning.spec.ts` (wolf naming flow) | Auto-generated name test             |
| B     | `screens.spec.ts` (wolf detail - 5 stats) | Single trait assertions              |
| C     | Minimal (answer matching by value works)  | Optional: randomisation verification |
| D     | `screens.spec.ts` (add feed button)       | `win-state.spec.ts`, hunger tests    |

### Expected Final Test Count

- Current: 15 tests (3 files)
- After Phase D: ~22-25 tests (4-5 files)

---

## Files Summary

### Files to Modify

| File                                 | Changes                                                          |
| ------------------------------------ | ---------------------------------------------------------------- |
| `src/types/index.ts`                 | Add Screen "win", change Wolf.stats to Wolf.trait, add lastFedAt |
| `src/data/constants.ts`              | Add WOLF_NAMES, roleTraits, HUNGER_THRESHOLD_HOURS               |
| `src/utils/quizUtils.ts`             | Change 0.7 to 0.8, add shuffleArray                              |
| `src/utils/wolfUtils.ts`             | Add getRandomWolfName, getWolfTrait, isWolfHungry                |
| `src/utils/treatUtils.ts`            | Change 0.7 to 0.8                                                |
| `src/contexts/GameContext.tsx`       | Auto-name wolves, single trait, win check, feedWolf              |
| `src/components/WolfRewardModal.tsx` | Remove text input, show name reveal                              |
| `src/components/WolfCard.tsx`        | Single trait, hunger indicator                                   |
| `src/screens/QuizScreen.tsx`         | Shuffle answers                                                  |
| `src/screens/CompletionScreen.tsx`   | 80% messages                                                     |
| `src/screens/WolfDetailScreen.tsx`   | Single trait, feed button                                        |
| `src/screens/PackScreen.tsx`         | Hunger status                                                    |
| `src/App.tsx`                        | Add win screen route                                             |

### New Files

| File                            | Purpose                                     |
| ------------------------------- | ------------------------------------------- |
| `src/screens/WinScreen.tsx`     | Victory celebration screen                  |
| `e2e/win-state.spec.ts`         | E2E tests for win condition and celebration |
| `e2e/hunger.spec.ts` (optional) | E2E tests for feeding/hunger system         |

---

## Notes

- Phase E (Random Events with story writing) depends on this work being complete
- Time-based hunger prepares for Random Events where wolves must be "ready" to participate
- Question randomisation infrastructure supports future question bank expansion
- All changes maintain UK English throughout
