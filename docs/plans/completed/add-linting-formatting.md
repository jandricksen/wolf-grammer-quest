# Plan: Add ESLint and Prettier for Code Quality

## Overview

Install and configure **ESLint** (code quality linter) and **Prettier** (code formatter) to maintain code consistency and catch potential bugs in the Wolf Grammar Quest TypeScript React codebase.

## Summary

**Completion Status:** ✅ COMPLETED - All phases finished

**Goals:**

- ESLint catches bugs, enforces React/TypeScript best practices
- Prettier auto-formats code for consistency
- Both tools integrated with VSCode for real-time feedback
- Scripts added to package.json for CLI usage

---

## Phased Implementation Plan

### Phase 1: Install Dependencies

**Goal:** Add ESLint and Prettier packages to the project.

**Tasks:**

- [x] Install ESLint core packages:
  - `eslint` - Core linting engine
  - `@typescript-eslint/parser` - Parses TypeScript for ESLint
  - `@typescript-eslint/eslint-plugin` - TypeScript-specific rules
- [x] Install ESLint React plugins:
  - `eslint-plugin-react` - React-specific linting rules
  - `eslint-plugin-react-hooks` - Enforces Rules of Hooks
  - `eslint-plugin-jsx-a11y` - Accessibility checks in JSX
- [x] Install Prettier packages:
  - `prettier` - Code formatter
  - `eslint-config-prettier` - Disables ESLint formatting rules that conflict with Prettier
  - `eslint-plugin-prettier` - Runs Prettier as an ESLint rule
- [x] Run `npm install` and verify all packages installed successfully

**Commands:**

```bash
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

**Status:** ✅ COMPLETED (2026-01-03)

---

### Phase 2: Configure ESLint

**Goal:** Create ESLint configuration for TypeScript + React.

**Tasks:**

- [x] Create `eslint.config.js` in project root with:
  - TypeScript parser configuration
  - React plugin settings (detect React version automatically)
  - Recommended rule sets for TypeScript and React
  - Prettier integration
  - Environment settings (browser, ES2020)
  - **Note:** Using ESLint 9's flat config format instead of legacy `.eslintrc.json`
- [x] Configure ignores in `eslint.config.js`:
  - `dist/` - Build output
  - `node_modules/` - Dependencies
  - `*.config.js` - Config files
  - `*.config.ts` - Config files
  - `.playwright/` - Playwright cache
- [x] Verify ESLint runs without crashing (warnings/errors expected at this stage)

**Configuration file:**
`.eslintrc.json`:

```json
{
  "env": {
    "browser": true,
    "es2020": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": ["@typescript-eslint", "react", "react-hooks", "jsx-a11y"],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off"
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

**Status:** ✅ COMPLETED (2026-01-03)

**Notes:**

- ESLint 9 uses flat config format (`eslint.config.js`) instead of `.eslintrc.json`
- ESLint runs successfully - found 832 formatting issues (expected, will be fixed by Prettier in Phase 3)
- All config files use ESM imports (matches project's `"type": "module"` in package.json)

---

### Phase 3: Configure Prettier

**Goal:** Create Prettier configuration for consistent code formatting.

**Tasks:**

- [x] Create `.prettierrc` in project root with formatting preferences:
  - Semi-colons: true (TypeScript convention)
  - Single quotes: false (double quotes for consistency with ESLint defaults)
  - Tab width: 2 spaces (matches existing code)
  - Trailing commas: ES5 standard
  - Print width: 100 characters
- [x] Create `.prettierignore` to exclude:
  - `dist/` - Build output
  - `node_modules/` - Dependencies
  - `package-lock.json` - Auto-generated
  - `.playwright/` - Playwright cache
- [x] Run Prettier on one test file to verify configuration works

**Configuration file:**
`.prettierrc`:

```json
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

**Status:** ✅ COMPLETED (2026-01-03)

**Notes:**

- Configuration uses double quotes (`singleQuote: false`) for consistency with ESLint
- Successfully tested on `src/App.tsx` - formatting works correctly
- `.prettierignore` excludes build artifacts and auto-generated files

---

### Phase 4: Add Scripts & Test Integration

**Goal:** Add npm scripts and verify everything works together.

**Tasks:**

- [x] Add scripts to `package.json`:
  - `"lint"`: Run ESLint on all source files
  - `"lint:fix"`: Auto-fix ESLint issues
  - `"format"`: Run Prettier on all files
  - `"format:check"`: Check if files are formatted (for CI)
- [x] Run `npm run lint` and review output (expect some warnings/errors)
- [x] Run `npm run format` to auto-format all files
- [x] Run `npm run lint:fix` to auto-fix fixable issues
- [x] Run `npm run build` to ensure TypeScript still compiles
- [x] Run `npm run test:e2e` to ensure all 15 tests still pass (100%)
- [x] Update CLAUDE.md documentation with linting information

**Scripts to add to package.json:**

```json
{
  "scripts": {
    "lint": "eslint . --ext .ts,.tsx",
    "lint:fix": "eslint . --ext .ts,.tsx --fix",
    "format": "prettier --write \"**/*.{ts,tsx,json,css,md}\"",
    "format:check": "prettier --check \"**/*.{ts,tsx,json,css,md}\""
  }
}
```

**VSCode Integration (Optional):**

- Recommend user install extensions:
  - `dbaeumer.vscode-eslint` - ESLint extension
  - `esbenp.prettier-vscode` - Prettier extension
- Create `.vscode/settings.json` (if user wants):
  - Enable format on save
  - Use Prettier as default formatter
  - Enable ESLint auto-fix on save

**Status:** ✅ COMPLETED (2026-01-03)

**Results:**

- All 4 npm scripts added to package.json
- Prettier formatted 45 files successfully
- ESLint found and fixed 6 code quality issues:
  - Fixed unescaped quotes in JSX (QuestionRenderer, WolfRewardModal)
  - Fixed unused variable in destructuring (TreatsDisplay)
  - Fixed React type import (WolfRewardModal)
  - Removed autoFocus for accessibility (WolfRewardModal)
- All ESLint errors resolved - clean lint output ✅
- TypeScript build completes with zero errors ✅
- All 15 Playwright E2E tests passing (100%) ✅
- CLAUDE.md updated with linting/formatting documentation

---

## Testing Checklist

All tests verified and passing:

- [x] `npm run lint` runs without crashing
- [x] `npm run lint:fix` fixes auto-fixable issues
- [x] `npm run format` formats all files
- [x] `npm run build` completes with zero TypeScript errors
- [x] `npm run test:e2e` shows 15/15 tests passing (100%)
- [x] No new console errors in dev server
- [x] Code formatting is consistent across all files

---

## Dependencies Summary

**New devDependencies:**

```json
{
  "eslint": "^8.55.0",
  "@typescript-eslint/parser": "^6.15.0",
  "@typescript-eslint/eslint-plugin": "^6.15.0",
  "eslint-plugin-react": "^7.33.2",
  "eslint-plugin-react-hooks": "^4.6.0",
  "eslint-plugin-jsx-a11y": "^6.8.0",
  "prettier": "^3.1.1",
  "eslint-config-prettier": "^9.1.0",
  "eslint-plugin-prettier": "^5.0.1"
}
```

---

## Notes

- **ESLint** focuses on code quality and catching bugs
- **Prettier** focuses on code formatting and style consistency
- Both tools work together via `eslint-config-prettier` and `eslint-plugin-prettier`
- Some ESLint rules are intentionally disabled:
  - `react/react-in-jsx-scope` - Not needed in React 17+ with new JSX transform
  - `react/prop-types` - Not needed with TypeScript
- Prettier will auto-format on every save if VSCode extension is installed
- ESLint will show inline warnings/errors in VSCode with extension installed
- **CRITICAL**: All Playwright tests (15/15) must still pass after setup
