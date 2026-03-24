# Code Review Rules - Multas Web

## ALL FILES

REJECT if:
- Hardcoded secrets/credentials
- `console.log` in production code
- Code duplication (DRY violation)
- Silent error handling (empty catch blocks)

REQUIRE:
- Descriptive variable and function names
- Error messages that help debugging

---

## TypeScript/React

REJECT if:
- `any` type without justification
- `import * as React` → use `import { useState }`
- Missing `"use client"` in client components
- `var()` or hex colors in className → use Tailwind classes
- Missing return types on exported functions

PREFER:
- Named exports over default exports
- cn() for conditional class merging (from tailwind-merge)
- Semantic HTML over generic divs
- Composition over inheritance

---

## Tailwind CSS

REJECT if:
- Hardcoded hex colors → use Tailwind classes
- `var()` in className → use semantic Tailwind classes

PREFER:
- Tailwind utility classes over custom CSS
- cn() utility for conditional classes

---

## Next.js

REJECT if:
- `getServerSideProps` without justification → use static generation when possible
- Client-side data fetching where server fetching works

PREFER:
- Server components by default
- Server Actions for mutations

---

## Response Format

FIRST LINE must be exactly:
STATUS: PASSED
or
STATUS: FAILED

If FAILED, list: `file:line - rule violated - issue`
