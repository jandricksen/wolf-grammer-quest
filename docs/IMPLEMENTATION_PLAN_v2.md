# Wolf Grammar Quest - Implementation Plan v2

_Created: January 2026_

---

## Overview

This document outlines the planned improvements to Wolf Grammar Quest based on user feedback. Each suggestion has been analysed for educational value, development complexity, and optimal implementation order.

The guiding principle throughout: **How will this help a 10-year-old learn better?**

---

## Feedback Summary

Eight suggestions were received:

1. Introduce Random Events requiring story writing
2. Add a win state
3. Change pass rate from 70% to 80%
4. Add Kindness as a wolf trait
5. Simplify to one trait per wolf
6. Give food/treats a purpose
7. Add more questions with randomisation
8. Computer-generated wolf names

---

## Detailed Analysis

### 1. Random Events (Story Writing)

**Description:** Occasional events trigger when the user logs in, such as "poachers have retaken a territory" or "lack of food has forced the pack to migrate". To resolve these, the child must:

- Select a wolf to send
- Write a story featuring that wolf and its trait
- Include 10 correct uses of the territory's grammar concept
- Submit for marking (manual initially, AI-assisted later)

**Educational Value:** ⭐⭐⭐⭐⭐ Excellent

This moves children from _recognition_ (selecting correct answers) to _production_ (creating correct grammar in context). This is a significantly higher cognitive skill and mirrors what NFER tests actually require—children must demonstrate grammar knowledge in their own writing.

The narrative wrapper (wolf + trait + challenge) provides meaningful context, which research shows improves retention and transfer of learning.

**Development Complexity:** 🔴 High

Requires multiple interconnected systems:

- Event trigger logic (when/how often events occur)
- Event type definitions and territory associations
- Wolf selection interface
- Story editor with word/character tracking
- Submission and storage system
- Marking workflow (manual initially)
- Resolution/reward system

**Dependencies:** Should be implemented after traits are simplified (#5) and food has purpose (#6).

---

### 2. Win State

**Description:** Currently, there is no clear end goal. A win state provides closure and motivation.

**Educational Value:** ⭐⭐⭐⭐ High

Children need clear goals to maintain motivation. The satisfaction of "completing" something drives continued engagement. Without a win state, the game feels endless, which can reduce motivation over time.

**Development Complexity:** 🟢 Low

Requires:

- Check if all 8 territories completed at 80%+
- Celebration screen/animation
- Possible title or badge reward

**Suggested Implementation:**

- Award "Alpha of Alphas" title upon completion
- Display special celebration with all wolves together
- Could unlock bonus content (stretch goal)

---

### 3. 80% Pass Rate

**Description:** Change the territory completion threshold from 70% to 80%.

**Educational Value:** ⭐⭐⭐⭐ High

80% (8 out of 10) is the standard "secure" threshold used in UK primary assessment. This ensures children demonstrate genuine mastery before progression, not just familiarity. It also aligns with school expectations, making the game's standards feel consistent with classroom learning.

**Development Complexity:** 🟢 Trivial

Single number change in the scoring/reward logic.

---

### 4. Kindness as a Wolf Trait

**Description:** Ensure Kindness is included as a wolf trait.

**Educational Value:** ⭐⭐⭐ Moderate

Kindness is an important character trait to model, and having wolves demonstrate it normalises prosocial behaviour.

**Development Complexity:** 🟢 Very Low (Verification)

According to GAME_OVERVIEW.md, Kindness already exists as one of the five stats. This may be a display bug or the feedback may be based on an older version. Needs verification rather than implementation.

**Action:** Check current build to confirm Kindness displays correctly.

---

### 5. One Trait Per Wolf

**Description:** Simplify from five stats per wolf to one defining trait per wolf.

**Educational Value:** ⭐⭐⭐⭐ High

For a 10-year-old, "this wolf is THE brave one" is cognitively clearer than balancing five different stats. Each wolf becomes memorable and distinct. This also creates cleaner gameplay for random events: "You need a COURAGEOUS wolf for this challenge."

**Development Complexity:** 🟡 Medium

Requires:

- Restructure wolf data model
- Update wolf display UI
- Assign one trait per wolf type
- Update any references to multi-stat system

**Suggested Trait Assignments:**

| Wolf Role    | Assigned Trait | Justification                    |
| ------------ | -------------- | -------------------------------- |
| Alpha (Luna) | Courage        | Leaders must be brave            |
| Scout        | Swiftness      | Scouts move quickly ahead        |
| Tracker      | Wisdom         | Tracking requires knowledge      |
| Hunter       | Courage        | Hunting requires bravery         |
| Guardian     | Kindness       | Guardians protect with care      |
| Howler       | Focus          | Perfect howls need concentration |
| Shadow       | Swiftness      | Shadows move silently and fast   |
| Elder        | Wisdom         | Elders hold knowledge            |
| Storyteller  | Kindness       | Stories connect and comfort      |

---

### 6. Food/Treat Purpose

**Description:** Currently, treats are earned but have no meaningful use. They need a purpose.

**Educational Value:** ⭐⭐⭐ Moderate

Creates an ongoing reason to replay territories (earning more treats) and adds strategic thinking when treats become a resource for random events.

**Development Complexity:** 🟠 Medium-High

Requires design decisions before implementation:

- What do treats actually do?
- How do they integrate with other systems?

**Suggested Implementation:**

Introduce a "Readiness" system:

- Wolves have a readiness state (Ready / Hungry)
- Wolves must be fed (1 treat) to participate in random events
- This creates a reason to:
  - Replay territories for more treats
  - Think strategically about which wolves to keep ready
  - Engage with the treat-earning system meaningfully

This elegantly connects treats → wolves → random events into a cohesive loop.

---

### 7. More Questions with Randomisation

**Description:** Add more questions per territory and randomise both question selection and answer order.

**Educational Value:** ⭐⭐⭐⭐⭐ Excellent

Pattern memorisation is not learning. If children can memorise "the answer to question 3 is always B", they're not learning grammar—they're gaming the system. Randomisation ensures genuine engagement with content on every replay.

More questions also mean better coverage of each grammar concept and reduced repetition fatigue.

**Development Complexity:** 🟡 Medium

Technical implementation is straightforward:

- Randomise answer order on display
- Randomly select N questions from larger pool
- Ensure no duplicate questions in single session

Content creation is time-consuming:

- Each territory needs expanded question bank (suggest 20-25 questions per territory)
- All questions need wolf-themed sentences
- All questions need detailed wrong-answer explanations

**Suggested Approach:**

- Implement randomisation logic first (quick technical win)
- Expand question banks gradually over time
- Prioritise territories the child finds most challenging

---

### 8. Computer-Generated Wolf Names

**Description:** Instead of the child typing a name, the computer assigns a name from a curated list.

**Educational Value:** ⭐⭐⭐ Moderate

Removes friction from the reward moment. Typing can frustrate young children, especially those with spelling concerns. A curated list ensures names are:

- Appropriate and safe
- Wolf-themed and atmospheric
- Spelled correctly
- Quick to assign

**Development Complexity:** 🟢 Very Low

Requires:

- Array of 30-50 wolf-appropriate names
- Random selection function
- Remove text input UI, replace with name reveal

**Suggested Name List Categories:**

- Nature names: Storm, River, Frost, Shadow, Ember
- Strength names: Brave, Swift, Noble, Valor
- Colour names: Silver, Grey, Ash, Snow, Midnight
- Traditional names: Fenrir, Akela, Balto, Lobo

---

## Implementation Priority

### Ranked by Complexity (Easiest to Hardest)

| Rank | Suggestion                | Complexity     | Time Estimate                |
| ---- | ------------------------- | -------------- | ---------------------------- |
| 1    | #3: 80% pass rate         | 🟢 Trivial     | < 1 hour                     |
| 2    | #8: Computer names wolves | 🟢 Very Easy   | 1-2 hours                    |
| 3    | #4: Kindness trait        | 🟢 Verify      | < 1 hour                     |
| 4    | #2: Win state             | 🟡 Easy        | 2-3 hours                    |
| 5    | #5: One trait per wolf    | 🟡 Medium      | 4-6 hours                    |
| 6    | #7: More questions        | 🟡 Medium      | Variable (content-dependent) |
| 7    | #6: Food purpose          | 🟠 Medium-High | 4-6 hours                    |
| 8    | #1: Random Events         | 🔴 High        | 15-20+ hours                 |

---

## Recommended Implementation Order

Development is organised into five phases, ordered to maximise value while managing dependencies.

### Phase A: Quick Wins

**Items:** #3, #8, #4

**Rationale:** These changes are fast, low-risk, and improve the game immediately. They can be completed in a single development session and deployed quickly. Early wins build momentum.

**Tasks:**

1. Change pass rate constant from 70 to 80
2. Create wolf name array and random picker
3. Remove name input UI, add name reveal animation
4. Verify Kindness displays correctly in wolf stats

**Estimated Time:** 2-4 hours total

---

### Phase B: Simplification

**Items:** #5

**Rationale:** The trait system must be simplified BEFORE random events are built, since random events will depend on traits. Refactoring traits after building random events would require significant rework. Better to simplify now.

**Tasks:**

1. Redesign wolf data model (single trait per wolf)
2. Assign traits to each wolf role
3. Update wolf card/detail UI to feature single trait prominently
4. Update any references to multi-stat calculations
5. Test all wolves display correctly

**Estimated Time:** 4-6 hours

---

### Phase C: Core Content

**Items:** #7

**Rationale:** Educational content is the heart of the app. More varied questions directly improve learning outcomes. This should be prioritised before adding more game mechanics.

**Tasks:**

1. Implement answer order randomisation (technical)
2. Implement question pool randomisation (technical)
3. Expand question banks (content work, ongoing)
4. Ensure all new questions have full explanations
5. Test randomisation doesn't repeat questions in single session

**Estimated Time:** 4-6 hours (technical) + ongoing content work

**Content Target:** 20-25 questions per territory (currently ~10-12)

---

### Phase D: Goals and Purpose

**Items:** #2, #6

**Rationale:** These features work together to create motivation loops. The win state provides the overarching goal; the food/readiness system provides ongoing engagement between territory completions.

**Tasks:**

1. Implement completion checker (all 8 territories at 80%+)
2. Create win state celebration screen
3. Award "Alpha of Alphas" title
4. Implement wolf readiness system
5. Connect treats to wolf feeding
6. Add UI for feeding wolves
7. Display hungry/ready status on wolf cards

**Estimated Time:** 6-10 hours

---

### Phase E: Capstone Feature

**Items:** #1

**Rationale:** Random Events is the most complex and educationally valuable feature. Building it last means:

- All dependencies are in place (simplified traits, food system, question bank)
- The core game is stable and tested
- The child gets maximum benefit when it launches

**Tasks:**

1. Design event trigger system (frequency, conditions)
2. Create event type definitions
3. Build wolf selection interface for events
4. Build story editor with grammar tracking
5. Implement local storage for submissions
6. Create marking queue interface (for parent)
7. Build resolution/reward flow
8. Test full event lifecycle

**Estimated Time:** 15-20+ hours

**Future Enhancement:** AI-assisted marking using Claude API

---

## Phase E Detail: Random Events Design

Given the complexity of Random Events, here is expanded design thinking.

### Event Types

| Event               | Narrative                                                                      | Trigger          |
| ------------------- | ------------------------------------------------------------------------------ | ---------------- |
| Poacher Invasion    | "Poachers have entered [Territory]! Send a wolf to drive them away."           | Random           |
| Food Shortage       | "Winter has been harsh. The pack must find new hunting grounds."               | Low treat count? |
| Lost Pup            | "A young pup has wandered into [Territory]. Write a story to guide them home." | Random           |
| Territory Challenge | "A rival pack is testing your borders at [Territory]."                         | Random           |

### Story Requirements

For each event, the child must write a short story (100-200 words suggested) that:

- Features the selected wolf by name
- Incorporates the wolf's trait meaningfully
- Uses 10 correct examples of the territory's grammar focus

**Example Prompt (Apostrophe Forest):**

> "Write a story about [Wolf Name] the [Trait] wolf driving poachers from Apostrophe Forest. Your story must include at least 10 apostrophes used correctly—for possession (the wolf's howl) or contraction (don't, can't, wouldn't)."

### Writing Interface Features

- Word count display
- Grammar checklist: "Apostrophes used: 3/10" (updates as they type, if technically feasible)
- Save draft functionality
- Clear submit button
- Confirmation before submission

### Marking Workflow (Manual v1)

1. Child submits story
2. Story saved to local storage with metadata:
   - Date/time
   - Territory
   - Wolf used
   - Grammar focus
   - Word count
3. Parent accesses marking queue
4. Parent reads story, marks grammar uses
5. Parent marks as Pass/Needs Revision
6. If Pass: Event resolves, rewards granted
7. If Needs Revision: Child can edit and resubmit

### Future: AI-Assisted Marking

Using Claude API, stories could be:

- Analysed for grammar concept usage
- Checked for correct application
- Given gentle, encouraging feedback
- Auto-marked with parent override option

This would significantly reduce parent workload while maintaining quality control.

---

## Success Metrics

How will we know these changes are working?

| Change             | Success Indicator                                         |
| ------------------ | --------------------------------------------------------- |
| 80% pass rate      | Child demonstrates solid understanding before progression |
| Computer names     | Faster reward flow, no spelling frustration               |
| One trait per wolf | Child can name each wolf's trait from memory              |
| Win state          | Child expresses goal of "completing the game"             |
| Food purpose       | Child replays territories to earn treats                  |
| More questions     | Child can't predict answers, engages with each question   |
| Random events      | Child produces grammatically correct creative writing     |

---

## Risks and Mitigations

| Risk                                     | Mitigation                                                     |
| ---------------------------------------- | -------------------------------------------------------------- |
| 80% too hard, causes frustration         | Monitor closely; can adjust if needed                          |
| Random events too complex for child      | Start with simple events; scale complexity based on response   |
| Story writing feels like homework        | Strong narrative framing; exciting rewards; keep stories short |
| Manual marking becomes burden for parent | Keep events infrequent initially; plan AI marking for v2       |
| Question expansion takes too long        | Prioritise most-practiced territories first                    |

---

## Timeline Summary

| Phase | Focus           | Estimated Time      |
| ----- | --------------- | ------------------- |
| A     | Quick Wins      | 2-4 hours           |
| B     | Simplification  | 4-6 hours           |
| C     | Core Content    | 4-6 hours + ongoing |
| D     | Goals & Purpose | 6-10 hours          |
| E     | Random Events   | 15-20+ hours        |

**Total Estimated Development Time:** 30-45+ hours

---

## Next Steps

1. ✅ Document approved (this document)
2. ⬜ Begin Phase A implementation
3. ⬜ Review and test Phase A changes
4. ⬜ Proceed to Phase B
5. ⬜ Continue through phases sequentially

---

## Appendix: Wolf Name Suggestions

A curated list of appropriate wolf names for the random name generator:

**Nature Names:**
Storm, River, Frost, Shadow, Ember, Stone, Thorn, Bramble, Willow, Birch, Cedar, Aspen, Brook, Glen, Cliff, Ridge, Vale, Meadow, Heath, Moss

**Strength Names:**
Brave, Swift, Noble, Valor, Spirit, Arrow, Flint, Steel, Crest, Peak

**Colour Names:**
Silver, Grey, Ash, Snow, Midnight, Dusk, Dawn, Smoke, Coal, Slate, Ivory, Onyx, Russet, Auburn, Copper

**Traditional/Literary Names:**
Akela, Lobo, Fenrir, Sif, Freya, Odin, Thor, Skadi, Rune, Saga, Echo, Atlas, Luna, Nova, Stella, Comet

**Total: 60+ names** (sufficient to avoid repetition across a full playthrough)

---

_Document Version: 2.0_
_Last Updated: January 2026_
