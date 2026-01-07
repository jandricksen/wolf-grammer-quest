# 🐺 Wolf Grammar Quest

An educational web app that helps Year 5 students master UK English grammar and punctuation through wolf-themed challenges and pack-building rewards.

## About

Wolf Grammar Quest makes learning grammar engaging by combining:

- **8 Grammar Territories** covering the Year 5 UK curriculum
- **Wolf Pack Collection** - Earn unique wolves with stats by mastering territories
- **Treat Rewards** - Collect treats for correct answers and high scores
- **NFER-Style Questions** - Authentic test preparation in a fun format

Designed for a 10-year-old who loves wolves and needs focused, calm practice with grammar concepts.

## Features

### Grammar Territories

1. 🌲 **Apostrophe Forest** - Possession vs contraction, it's/its
2. 🏔️ **Clause Canyon** - Subordinate clauses and conjunctions
3. 🌿 **Word Class Wilderness** - Nouns, verbs, adjectives, adverbs
4. ⛰️ **Pronoun Peak** - Personal, relative, and possessive pronouns
5. 🌊 **Conjunction Creek** - Coordinating vs subordinating
6. 🗻 **Prefix & Suffix Summit** - Word building with affixes
7. 🦇 **Comma Cave** - Lists, fronted adverbials, parenthesis
8. 💬 **Speech Cavern** - Direct speech punctuation

### Learning Support

- **Rich Feedback** - Extended explanations when answers are wrong to reinforce learning
- **Wolf-Themed Content** - All sentences feature natural wolf behaviors
- **Progressive Rewards** - Build your pack by completing territories at 70%+
- **Wolf Stats** - Each wolf has unique stats (Wisdom, Swiftness, Courage, Kindness, Focus)

## How to Run

The app is being restructured into a modern TypeScript React application with Vite.

### Quick Start

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run end-to-end tests (15/15 passing)
npm run test:e2e

# Check code quality with ESLint
npm run lint

# Auto-fix code quality issues
npm run lint:fix

# Format code with Prettier
npm run format
```

### Legacy Single-File Version

The original `wolf-grammar-quest.jsx` has been archived to `wolf-grammar-quest.jsx.bak`. See [docs/plans/completed/restructure-react-app.md](docs/plans/completed/restructure-react-app.md) for the completed restructuring plan.

## Project Structure

```
wolf-grammer-quest/
├── src/
│   ├── main.tsx              # React entry point
│   ├── App.tsx               # Root component
│   ├── contexts/             # React Context for state management
│   ├── screens/              # Screen components (Home, Quiz, etc.)
│   ├── components/           # Reusable UI components
│   ├── data/                 # Static data and constants
│   ├── utils/                # Helper functions
│   ├── types/                # TypeScript type definitions
│   └── styles/               # CSS files
├── e2e/                      # Playwright E2E tests
├── docs/                     # Project documentation
├── package.json              # Project dependencies
├── vite.config.ts            # Vite configuration
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── eslint.config.js          # ESLint configuration
├── .prettierrc               # Prettier configuration
├── playwright.config.ts      # Playwright configuration
├── CLAUDE.md                 # AI assistant guidance
└── README.md                 # This file
```

## Development Status

**Current Phase:** Core App Complete, Phase 2 Planning

**Completed:**

- ✅ TypeScript React app with modular architecture (30+ files)
- ✅ 8 grammar territories with 10+ questions each
- ✅ Wolf collection with role-based stats
- ✅ Treat earning system
- ✅ Pack and inventory screens
- ✅ 100% E2E test coverage (15/15 Playwright tests passing)
- ✅ ESLint + Prettier for code quality

**Coming Soon:**

- Phase 2: Wolf care and feeding system
- Phase 3: Weekly pack encounters
- Phase 4: Wolf growth and evolution
- Phase 5: Year 6 expansion with dragon theme

See [DEVELOPMENT_PLAN.md](DEVELOPMENT_PLAN.md) for full roadmap.

## Educational Content

All content is:

- ✓ Aligned with Year 5 UK English curriculum
- ✓ Verified for grammatical accuracy
- ✓ Child-safe and age-appropriate
- ✓ Wolf-themed with natural behaviors only
- ✓ Using UK English spelling throughout

## Technical Details

- **Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **State Management:** Context API
- **Testing:** Playwright (15/15 E2E tests, 100% coverage)
- **Code Quality:** ESLint + Prettier
- **Data Persistence:** None (future: localStorage → cloud sync)

## Target Audience

Designed specifically for:

- 10-year-old students
- Year 5 UK curriculum
- NFER-style assessment preparation
- Students who love wolves
- Learners who need calm, focused practice

## License

Personal educational project.

---

Made with 🐺 for focused, engaging grammar learning.
