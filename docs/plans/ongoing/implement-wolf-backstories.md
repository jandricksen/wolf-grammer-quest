# Plan: Implement Wolf Backstories

## Overview

Add short, fantasy-themed backstories to each wolf that connect to their territory and trait. Backstories appear when a wolf is first won and remain visible on the Wolf Detail screen. Each wolf role has 2-3 possible backstories that are randomly selected, with grammar concepts subtly woven into the text.

**Educational Value:** Reinforces grammar concepts through storytelling context. Children encounter correct grammar usage naturally while enjoying the narrative reward.

**Key Features:**

- Short backstory (1-2 sentences) for each wolf
- Fantasy theme connected to territory setting
- Grammar concept from territory subtly included
- 2-3 options per wolf role (randomly selected)
- Displayed on reward modal and wolf detail screen

---

## Backstory Content

### 🌲 Scout (Swiftness) — Apostrophe Forest

| #   | Backstory                                                                                          | Grammar Used           |
| --- | -------------------------------------------------------------------------------------------------- | ---------------------- |
| 1   | _"This swift wolf escaped the forest's darkest shadows when a hunter's trap couldn't hold her."_   | Possession apostrophes |
| 2   | _"Found racing through the ancient trees, this wolf's speed saved her from the poacher's snares."_ | Possession apostrophes |
| 3   | _"She fled the forest's edge at dawn, outrunning the trapper's hounds with ease."_                 | Possession apostrophes |

### 🏔️ Tracker (Wisdom) — Clause Canyon

| #   | Backstory                                                                                    | Grammar Used       |
| --- | -------------------------------------------------------------------------------------------- | ------------------ |
| 1   | _"Although others lost the trail, this wise wolf found the hidden path through the canyon."_ | Subordinate clause |
| 2   | _"She wandered into your territory because she sensed your pack's strength from afar."_      | Subordinate clause |
| 3   | _"When the canyon's mists grew thick, this wolf used her wisdom to guide lost pups home."_   | Subordinate clause |

### 🌿 Hunter (Courage) — Word Class Wilderness

| #   | Backstory                                                                                                | Grammar Used            |
| --- | -------------------------------------------------------------------------------------------------------- | ----------------------- |
| 1   | _"This brave wolf stalked fearlessly through the wild, tangled Wilderness where others dared not roam."_ | Strong verbs/adjectives |
| 2   | _"She hunted boldly in the deepest thickets, claiming her place through raw courage."_                   | Strong verbs/adverbs    |
| 3   | _"When danger prowled the Wilderness, she charged bravely forward while others fled."_                   | Strong verbs/adverbs    |

### ⛰️ Guardian (Kindness) — Pronoun Peak

| #   | Backstory                                                                                  | Grammar Used       |
| --- | ------------------------------------------------------------------------------------------ | ------------------ |
| 1   | _"She protected those who could not protect themselves on the frozen slopes of the Peak."_ | Relative pronoun   |
| 2   | _"This gentle wolf guarded her pack through the harshest winters on the mountain."_        | Possessive pronoun |
| 3   | _"When pups wandered too close to the edge, she gently guided them back to safety."_       | Personal pronouns  |

### 🌊 Howler (Focus) — Conjunction Creek

| #   | Backstory                                                                                        | Grammar Used             |
| --- | ------------------------------------------------------------------------------------------------ | ------------------------ |
| 1   | _"This wolf sat by the creek for hours, and her focused howls united packs from distant lands."_ | Coordinating conjunction |
| 2   | _"She listened intently, so she could call back wolves who had strayed from the pack."_          | Coordinating conjunction |
| 3   | _"Neither rushing waters nor howling winds could break her concentration at the creek."_         | Correlative conjunctions |

### 🗻 Shadow (Swiftness) — Prefix & Suffix Summit

| #   | Backstory                                                                                        | Grammar Used            |
| --- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| 1   | _"This wolf moved silently, disappearing and reappearing across the misty, unreachable summit."_ | Prefix (dis-, re-, un-) |
| 2   | _"She was fearless and tireless, endlessly climbing where no paw had stepped before."_           | Suffix (-less, -ly)     |
| 3   | _"When the summit grew dangerous, this swift wolf became invisible to all who wished her harm."_ | Prefix (in-)            |

### 🦇 Elder (Wisdom) — Comma Cave

| #   | Backstory                                                                                           | Grammar Used         |
| --- | --------------------------------------------------------------------------------------------------- | -------------------- |
| 1   | _"In the deepest, darkest, oldest part of the cave, this wise wolf kept the ancient stories safe."_ | List commas          |
| 2   | _"She waited patiently, watching carefully, until you proved worthy of her wisdom."_                | List commas          |
| 3   | _"This wolf, the oldest of her pack, chose to share her knowledge with a new generation."_          | Parenthetical commas |

### 💬 Storyteller (Kindness) — Speech Cavern

| #   | Backstory                                                                                             | Grammar Used  |
| --- | ----------------------------------------------------------------------------------------------------- | ------------- |
| 1   | _"'Come closer,' she whispered to the lost pups, 'and I will tell you the way home.'"_                | Direct speech |
| 2   | _"'Every wolf has a tale,' she said gently, 'and yours is just beginning.'"_                          | Direct speech |
| 3   | _"She called out, 'Follow my voice!' and led frightened wolves safely through the echoing darkness."_ | Direct speech |

---

## Phased Implementation Plan

### Phase A: Data Structure Updates

**Goal:** Add backstory data to the codebase without changing any UI.

**Tasks:**

- [ ] Create `src/data/wolfBackstories.ts` with backstory arrays per territory
- [ ] Update `src/types/index.ts`:
  - Add `backstory?: string` to `Wolf` interface
  - Add `WolfBackstories` type for the backstory data structure
- [ ] Update `src/data/territoryWolves.ts`:
  - Add `backstories: string[]` array to each territory wolf definition
- [ ] Update `src/data/index.ts` to export new backstory data
- [ ] Verify TypeScript compiles with no errors

### Documentation Update (Phase A)

- [ ] Update `CLAUDE.md` Wolf Object section to include `backstory` field
- [ ] Run `npm run lint` - verify no errors
- [ ] Run `npm run build` - verify successful

**Status:** ⬜ NOT STARTED

**Estimated Time:** 1-2 hours

---

### Phase B: Wolf Creation Logic

**Goal:** Assign a random backstory when a wolf is earned.

**Tasks:**

- [ ] Create `src/utils/backstoryUtils.ts` with:
  - `getRandomBackstory(territoryKey: string): string` function
  - Selects randomly from available backstories for that territory
- [ ] Update `src/contexts/GameContext.tsx`:
  - Import `getRandomBackstory` function
  - In `checkTerritoryReward()`, assign backstory when creating pending wolf
- [ ] Update `PendingWolf` interface in GameContext to include `backstory: string`
- [ ] Update `addWolfToPack()` to copy backstory from pending wolf to pack wolf
- [ ] Verify wolf creation still works correctly

### Documentation Update (Phase B)

- [ ] Update `CLAUDE.md` with `getRandomBackstory()` function documentation
- [ ] Run `npm run lint` - verify no errors
- [ ] Run `npm run build` - verify successful

**Status:** ⬜ NOT STARTED

**Estimated Time:** 1-2 hours

---

### Phase C: Wolf Reward Modal Update

**Goal:** Display the backstory when a wolf is first won.

**Tasks:**

- [ ] Update `src/components/WolfRewardModal.tsx`:
  - Add `backstory` to component props
  - Display backstory text below wolf name/trait
  - Style with italic text and appropriate spacing
  - Ensure text is readable and fits the reward moment
- [ ] Update `src/screens/CompletionScreen.tsx`:
  - Pass `backstory` prop to WolfRewardModal
- [ ] Manual test: Complete a territory and verify backstory appears in reward modal

### Documentation Update (Phase C)

- [ ] Run `npm run lint` - verify no errors
- [ ] Run `npm run build` - verify successful

**Status:** ⬜ NOT STARTED

**Estimated Time:** 1-2 hours

---

### Phase D: Wolf Detail Screen Update

**Goal:** Display the backstory on the Wolf Detail screen for viewing later.

**Tasks:**

- [ ] Update `src/screens/WolfDetailScreen.tsx`:
  - Add backstory section below "Defining Trait"
  - Use "Origin Story" or "How They Joined" as heading
  - Display backstory in italic text
  - Handle case where wolf has no backstory (Luna, the starter wolf)
- [ ] Style backstory section to match existing design
- [ ] Manual test: View wolf detail screen and verify backstory displays correctly

### Documentation Update (Phase D)

- [ ] Run `npm run lint` - verify no errors
- [ ] Run `npm run build` - verify successful

**Status:** ⬜ NOT STARTED

**Estimated Time:** 1-2 hours

---

### Phase E: E2E Test Updates

**Goal:** Update tests to verify backstory functionality.

**Tasks:**

- [ ] Update `e2e/wolf-earning.spec.ts`:
  - Add check for backstory text appearing in wolf reward modal
  - Verify backstory is displayed (any text in italic/backstory area)
- [ ] Update `e2e/screens.spec.ts`:
  - Add check for backstory section on wolf detail screen
  - Note: Luna (starter wolf) should NOT have a backstory
- [ ] Run full test suite and verify all tests pass

### Documentation Update (Phase E)

- [ ] Run `npm run test:e2e` - verify all tests passing
- [ ] Run `npm run lint` - verify no errors
- [ ] Run `npm run build` - verify successful
- [ ] Update `CLAUDE.md` if any additional documentation needed

**Status:** ⬜ NOT STARTED

**Estimated Time:** 1-2 hours

---

## Summary

| Phase | Description               | Time Estimate | Status         |
| ----- | ------------------------- | ------------- | -------------- |
| A     | Data Structure Updates    | 1-2 hours     | ⬜ NOT STARTED |
| B     | Wolf Creation Logic       | 1-2 hours     | ⬜ NOT STARTED |
| C     | Wolf Reward Modal Update  | 1-2 hours     | ⬜ NOT STARTED |
| D     | Wolf Detail Screen Update | 1-2 hours     | ⬜ NOT STARTED |
| E     | E2E Test Updates          | 1-2 hours     | ⬜ NOT STARTED |

**Total Estimated Time:** 5-10 hours

---

## Dependencies

- None. This feature is independent and can be implemented at any time.

---

## Future Enhancements

- **Backstory for Luna:** Create a special backstory for the starting wolf that explains how they became your Alpha.
- **More backstory options:** Add 1-2 more backstories per wolf for greater variety.
- **Backstory unlocks:** Hide backstory until wolf completes a certain action (stretch goal).

---

_Created: January 2026_
