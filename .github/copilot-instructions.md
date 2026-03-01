# Copilot Instructions — Soc Ops (Social Bingo)

## Dev Checklist (mandatory before every PR/commit)

- [ ] `npm run lint` — passes with zero warnings
- [ ] `npm run build` — `tsc -b && vite build` succeeds
- [ ] `npm run test` — all Vitest tests green

## Overview

Mobile-first React 19 + TypeScript bingo game. Tap squares matching prompts, five in a row wins. State persists in `localStorage`. Vite 7 bundler, Vitest 4 tests, Tailwind CSS v4 (CSS-first config in `src/index.css`; see `.github/instructions/tailwind-4.instructions.md`). Deploys to GitHub Pages via `VITE_REPO_NAME`.

## Architecture

`useBingoGame` hook → `App.tsx` (screen router) → `GameScreen` → `BingoBoard` → `BingoSquare`. Board is flat `BingoSquareData[25]`; index 12 = free space. Game logic lives as pure functions in `utils/bingoLogic.ts`; hook handles state + persistence. No external state library.

## Conventions

- **Styling:** Tailwind utilities inline; use `@theme` tokens (`--color-accent`, `--color-marked`) from `src/index.css`.
- **Components:** One per file in `src/components/`, named exports, local props interfaces.
- **Types:** Shared in `src/types/index.ts`; component props stay local.
- **Tests:** Co-located (`*.test.ts`), Vitest globals, `@testing-library/jest-dom` matchers.
- **Questions:** ≥24 strings in `src/data/questions.ts`.

## Adding Features

- Logic → pure functions in `utils/bingoLogic.ts` + tests
- State → extend `useBingoGame` hook; keep components stateless
- Screens → new `GameState` variant in `types/index.ts`, handle in `App.tsx`
- Components → `src/components/Name.tsx`, named export, local props
