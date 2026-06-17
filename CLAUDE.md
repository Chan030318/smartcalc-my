@AGENTS.md

# SmartCalc Malaysia — Project Overview

## Stack
- **Framework**: Next.js 16.2.9 (App Router)
- **UI**: React 19, Tailwind CSS v4 (`@import "tailwindcss"` syntax — no `tailwind.config.js`)
- **Language**: TypeScript
- **Fonts**: Geist Sans / Geist Mono via `next/font/google`

## Project Goal
Calculator website targeting Google AdSense revenue. SEO-optimised pages for Malaysian audiences.

## File Conventions
- Pages live under `app/` using the App Router (`page.tsx`, `layout.tsx`)
- Shared UI components go in `components/`
- Each calculator gets its own route: `app/bmi/page.tsx`, `app/salary/page.tsx`, `app/loan/page.tsx`

## Tailwind v4 Notes
- Config is in `postcss.config.mjs` — there is **no** `tailwind.config.js`
- Theme tokens are defined with `@theme inline {}` in `globals.css`
- Use standard utility classes; custom colours go in `globals.css` under `@theme`

## SEO
- Each page exports a `metadata` object (Next.js App Router convention)
- Target keywords: "BMI calculator Malaysia", "salary calculator Malaysia", "loan calculator Malaysia"
