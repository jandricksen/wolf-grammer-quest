# Plan: Address Security Vulnerabilities

## Overview

Review and fix npm security vulnerabilities reported during installation.

## Summary

**Status:** ⏳ Not started

**Goals:**

- Run security audit to identify vulnerabilities
- Apply safe auto-fixes where available
- Review and address remaining vulnerabilities
- Ensure tests and build remain stable

---

## Implementation Plan

### Tasks

- [ ] Run `npm audit` to see detailed vulnerability report
- [ ] Review each vulnerability to understand:
  - Which packages are affected
  - Severity level (low, moderate, high, critical)
  - Whether they affect production or only devDependencies
  - Available fixes or workarounds
- [ ] Run `npm audit fix` to auto-fix vulnerabilities without breaking changes
- [ ] If `npm audit fix` doesn't resolve all issues, review `npm audit fix --force` option
  - **WARNING**: `--force` can introduce breaking changes, test thoroughly after
- [ ] Verify all 15 Playwright tests still pass (100%) after fixes
- [ ] Verify `npm run build` still works after fixes
- [ ] Document any remaining vulnerabilities that cannot be fixed (with justification)

---

## Testing Requirements

After applying fixes:

- [ ] `npm run lint` runs without errors
- [ ] `npm run build` completes with zero TypeScript errors
- [ ] `npm run test:e2e` shows 15/15 tests passing (100%)
- [ ] No new console errors in dev server

---

## Notes

- Focus on vulnerabilities in production dependencies first
- DevDependencies vulnerabilities are lower priority (not shipped to users)
- Some vulnerabilities may require upstream package updates
- Document any accepted risks for unfixable vulnerabilities
