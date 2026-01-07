# Wolf Grammar Quest — Development Plan

## Overview

An educational web app helping a 10-year-old learn Year 5 UK English grammar and punctuation through wolf-themed challenges and pack-building rewards.

**Target User:** 10-year-old girl, Year 5, loves wolves, struggles with NFER-style grammar tests

**Design Principles:**

- Calm and focused (no frantic timers or overwhelming animations)
- Learning happens at the moment of need (rich feedback on wrong answers)
- Meaningful progression (wolves feel valuable, not disposable)
- UK English throughout
- All content child-safe and age-appropriate

---

## Current State (Completed)

### ✅ Core Grammar Game

- 8 grammar territories covering Year 5 curriculum
- 10+ NFER-style questions per territory
- Wolf-themed sentences throughout
- Immediate feedback with explanations
- Enhanced wrong-answer explanations that teach the concept

### ✅ Basic Wolf Collection

- Start with Luna (Alpha wolf)
- Earn one wolf per territory (70%+ score required)
- Name each wolf you earn
- Each wolf has a role and real wolf fact
- Pack view to see your collection

### ✅ Progress Tracking

- Territory completion status
- Best scores per territory
- Visual progress on map screen

---

## Phase 1: Wolf Statistics & Treats

**Goal:** Make each wolf feel unique and give children a reason to replay territories.

### 1.1 Enhanced Wolf Data

Each wolf gains statistics that reflect their role:

| Role        | Primary Stat | Secondary Stat |
| ----------- | ------------ | -------------- |
| Scout       | Swiftness    | Focus          |
| Tracker     | Wisdom       | Focus          |
| Hunter      | Courage      | Swiftness      |
| Guardian    | Courage      | Kindness       |
| Howler      | Kindness     | Wisdom         |
| Shadow      | Swiftness    | Courage        |
| Elder       | Wisdom       | Kindness       |
| Storyteller | Kindness     | Wisdom         |

Stats range from 1-10 and are randomly generated within a sensible range for each role.

### 1.2 Treat System

- **Basic Treats:** Earned by completing any territory (1 treat per 2 correct answers)
- **Bonus Treats:** Extra treats for high scores (70%+ = 1 bonus, 90%+ = 3 bonus)
- **Special Treats:** Rare treats that boost specific stats (earned at 90%+)

Treat types:

- 🍖 **Meat Chunk** — Basic treat, restores hunger
- 🫐 **Wisdom Berry** — Temporarily boosts Wisdom
- 🥩 **Swift Meat** — Temporarily boosts Swiftness
- ✨ **Golden Kibble** — Boosts all stats (rare, weekend challenges only)

### 1.3 Inventory Screen

New screen showing:

- Current treat counts
- Wolf stat explanations
- Which wolves need feeding

### Technical Requirements

- Expand wolf object structure with stats
- Add treats to game state
- Create inventory UI component
- Update reward calculation after territory completion

---

## Phase 2: Wolf Care & Feeding

**Goal:** Create a gentle responsibility loop that encourages daily engagement without pressure.

### 2.1 Hunger System

- Each wolf has a hunger level (0-100)
- Hunger decreases by 15 points per day
- Wolves with hunger below 20 become "sleepy" (greyed out, can't be used)
- Feeding a wolf restores hunger and wakes them up

### 2.2 Feeding Interaction

- Tap a wolf in the Pack view to see their details
- "Feed" button shows available treats
- Simple animation when fed (wolf wags tail, hearts appear)
- Gentle reminder on home screen if wolves are hungry (not alarming)

### 2.3 Daily Check-In Bonus

- First territory attempt each day earns bonus treats
- Encourages regular practice without punishment for missing days
- "Welcome back!" message shows how pack is doing

### Technical Requirements

- Add hunger and lastFed to wolf data
- Implement daily decay calculation
- Create wolf detail/feeding modal
- Add localStorage persistence for cross-session data
- Implement daily bonus logic

---

## Phase 3: Weekly Pack Encounters

**Goal:** Give wolves a purpose beyond collection — strategic thinking meets storytelling.

### 3.1 Encounter System

Weekly story-based scenarios appear (refreshed each Monday):

- Child reads a short story about a challenge the pack faces
- Must choose one wolf from their pack to help
- Success depends on wolf's stats matching the challenge requirements
- Some randomness keeps it exciting (but weighted toward success)

### 3.2 Example Encounters

| Encounter          | Story                                | Required Stat | Reward                         |
| ------------------ | ------------------------------------ | ------------- | ------------------------------ |
| The Frozen River   | The pack must cross thin ice         | Courage 5+    | 5 treats, 20 XP                |
| The Lost Cub       | A frightened cub needs help          | Kindness 4+   | 4 treats, chance of bonus wolf |
| The Ancient Riddle | Strange markings block the path      | Wisdom 6+     | 6 treats, special treat        |
| The Quick Escape   | Danger approaches — run!             | Swiftness 5+  | 5 treats, 15 XP                |
| The Long Watch     | Someone must guard through the night | Focus 5+      | 4 treats, 20 XP                |

### 3.3 Encounter Rewards

- **Treats:** Always earned on success
- **XP:** Wolves gain experience, contributing to growth
- **Rare Wolves:** Some encounters can unlock bonus pack members
- **Story Continuation:** Success unlocks next chapter of ongoing narrative

### 3.4 Failure Handling

- Failure is gentle — "The pack found another way"
- No punishment, just missed reward
- Encourages trying again next week with a stronger wolf

### Technical Requirements

- Create encounters data structure
- Build encounter UI (story screen, wolf selection, outcome)
- Implement stat-checking logic with weighted randomness
- Add XP to wolf data
- Create weekly refresh system

---

## Phase 4: Wolf Growth & Evolution

**Goal:** Long-term progression that rewards sustained engagement.

### 4.1 Growth Stages

Wolves progress through life stages:

| Stage    | XP Required | Appearance | Stat Bonus   |
| -------- | ----------- | ---------- | ------------ |
| Pup      | 0           | 🐕         | Base stats   |
| Juvenile | 50 XP       | 🐺         | +1 all stats |
| Adult    | 150 XP      | 🐺✨       | +2 all stats |

### 4.2 XP Sources

- Weekly encounters (15-25 XP per success)
- Bonus XP for 100% territory scores
- Special events (holidays, milestones)

### 4.3 Evolution Celebration

- Special animation when wolf evolves
- New wolf fact unlocked
- Stat boost clearly shown
- Shareable achievement (optional)

### Technical Requirements

- Add stage and XP to wolf data
- Create evolution check logic
- Build evolution celebration modal
- Design stage-appropriate wolf visuals

---

## Phase 5: Polish & Expansion

### 5.1 Quality of Life

- **Save/Load System:** Export progress as JSON file (backup)
- **Parent Dashboard:** View child's progress, time spent, struggling areas
- **Accessibility:** Larger text option, dyslexia-friendly font toggle
- **Sound Effects:** Optional gentle sounds for correct answers, wolf howls

### 5.2 Content Expansion

- Additional questions per territory (20+ each)
- "Challenge Mode" with harder variants
- Revision mode targeting weak areas
- Seasonal themed questions (Christmas wolves, etc.)

### 5.3 Year 6 Preparation (Dragon Theme)

- New territories for Year 6 curriculum
- Dragon collection alongside wolves
- Crossover events (wolves meet dragons)

---

## Data Persistence Strategy

### Phase 1-2: localStorage

```javascript
// Simple browser storage
localStorage.setItem("wolfGrammarQuest", JSON.stringify(gameState));
```

**Pros:** Works offline, simple, no account needed
**Cons:** Lost if browser data cleared, device-specific

### Phase 3+: Consider Cloud Sync

If the app proves valuable, consider:

- Simple account system (parent email)
- Firebase or Supabase for cloud storage
- Sync across tablet and computer

### Backup System (All Phases)

- "Export Save" button creates downloadable JSON
- "Import Save" button restores from file
- Peace of mind for parents

---

## Success Metrics

How we'll know it's working:

| Metric            | Target                      | How to Measure              |
| ----------------- | --------------------------- | --------------------------- |
| Daily engagement  | 3-4 times per week          | Last played date            |
| Territory mastery | All 8 completed at 70%+     | Completion tracking         |
| Retention         | Still playing after 4 weeks | First played vs last played |
| Learning transfer | Improved NFER scores        | Parent feedback             |
| Enjoyment         | Child asks to play          | Qualitative                 |

---

## Technical Stack

| Component | Technology   | Notes                                 |
| --------- | ------------ | ------------------------------------- |
| Framework | React        | Single-file component for simplicity  |
| Styling   | Tailwind CSS | Utility classes, no build step needed |
| Storage   | localStorage | JSON serialisation                    |
| Hosting   | TBD          | Could be static HTML on tablet        |
| Testing   | Manual       | Parent and child feedback             |

---

## Next Steps

1. **Implement Phase 1.1** — Add stats to wolf data structure
2. **Implement Phase 1.2** — Add treat earning to territory completion
3. **Test with target user** — Does she find stats interesting?
4. **Iterate based on feedback** — Adjust before moving to Phase 2

---

## Notes & Ideas Parking Lot

Things to consider but not commit to yet:

- **Trading cards:** Printable collector cards for each wolf
- **Pack bonds:** Wolves paired together get combo bonuses
- **Wolf den:** Customisable habitat decoration
- **Multiplayer:** Compare packs with friends (complex, maybe never)
- **Voice acting:** Recorded wolf howls and narration
- **Mini-games:** Quick grammar reflex games between territories

---

_Last updated: January 2026_
