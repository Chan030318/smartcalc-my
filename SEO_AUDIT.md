# SEO Audit — SmartCalc MY
**Date:** 2026-06-17  
**Pages audited:** 28 (7 calculators + /calculators index + 15 guide articles + /guides index + 4 static pages)

---

## 1. Duplicate Titles
**Result: PASS ✓**  
All 28 page titles are unique and descriptive. Each title includes the page topic and "Malaysia" or "SmartCalc MY". No duplicates detected.

## 2. Duplicate Meta Descriptions
**Result: PASS ✓**  
All 28 meta descriptions are unique. Length is appropriate (120–165 characters on most pages). No boilerplate repetition detected.

## 3. Broken Internal Links
**Result: PASS ✓**  
All internal `<Link href="...">` references in guide pages point to valid routes that exist in `app/`. Verified routes:
- `/bmi-calculator`, `/salary-calculator-malaysia`, `/loan-calculator`
- `/income-tax-calculator-malaysia`, `/epf-calculator-malaysia`
- `/pcb-calculator-malaysia`, `/dsr-calculator-malaysia`
- `/calculators`, `/guides`, all 15 guide sub-routes
- `/about`, `/contact`, `/privacy-policy`, `/terms`

No 404-risk links found.

## 4. Sitemap Completeness
**Result: PASS ✓**  
`app/sitemap.ts` includes all 28 content pages:
- Home (priority 1.0)
- 7 calculator pages (priority 0.9)
- /calculators index (priority 0.95)
- /guides index (priority 0.85)
- 15 guide articles (priority 0.8)
- 4 static pages: /about, /contact, /privacy-policy, /terms (priority 0.3–0.5)

## 5. Robots.txt
**Result: PASS ✓**  
`app/robots.ts` correctly:
- Allows all crawlers at `/`
- Disallows `/_next/` and `/api/`
- Points sitemap to `${SITE_URL}/sitemap.xml`

## 6. Navbar & Footer Links

### Navbar
**Result: MINOR ISSUE ⚠️**  
Current navbar has 4 links: BMI Calculator, Salary Calculator, Loan Calculator, All Tools.  
**No Guides link.** The 15 guide articles are only discoverable via footer or internal links from calculator pages. Guides represent ~54% of the site's content but are invisible from the primary navigation.

**Recommendation:** Add a "Guides" link to the navbar, or rename "All Tools" to a dropdown with both Calculators and Guides. At minimum, /guides should be linked from the navbar.

### Footer — Guides Column
**Result: ISSUE ✗**  
Footer Guides column lists only 6 entries (All Guides + 5 original articles). The 10 new guide articles added in the latest batch are not listed:
- Missing: `/guides/what-salary-to-afford-house-malaysia`
- Missing: `/guides/how-much-epf-at-30-malaysia`
- Missing: `/guides/how-to-reduce-income-tax-malaysia`
- Missing: `/guides/salary-deductions-explained-malaysia`
- Missing: `/guides/how-pcb-tax-works-malaysia`
- Missing: `/guides/how-to-improve-loan-approval-malaysia`
- Missing: `/guides/epf-withdrawal-guide-malaysia`
- Missing: `/guides/housing-loan-eligibility-malaysia`
- Missing: `/guides/personal-loan-vs-housing-loan-malaysia`

**Recommendation:** The footer Guides column is too long to list all 15 individually. Replace with category-representative links or just "All Guides →" and the top 3–4 most popular articles.

### Footer — Brand Copy
**Result: MINOR ISSUE ⚠️**  
Footer brand description still reads "BMI, salary, and loan repayments" — written when the site had only 3 calculators. Site now has 7 calculators and 15 guides.

**Recommendation:** Update to reflect the full site scope (e.g., "7 free calculators and 15 guides for Malaysians").

### About Page
**Result: MINOR ISSUE ⚠️**  
`app/about/page.tsx` lists only 3 calculators (BMI, Salary, Loan) in its "tools" grid. The 4 newer calculators (Income Tax, EPF, PCB, DSR) are not shown.

## 7. Mobile Responsiveness
**Result: LIKELY ISSUES ⚠️** *(static analysis only — no browser testing performed)*

Potential issues identified:
- **Data tables** (`overflow-x-auto` wrapper present on all tables): Tables in guide pages use `overflow-x-auto` which prevents overflow but results in horizontal scroll on mobile. This is acceptable but not ideal.
- **Comparison table on personal-loan-vs-housing-loan**: 4-column table may be tight on narrow screens even with overflow-x-auto.
- **Card grids**: All grids use `grid-cols-1 md:grid-cols-2` — safe on mobile.
- **Navbar**: No hamburger menu — all 4 nav links are shown horizontally. On small screens (320px–375px) this may wrap awkwardly depending on link label lengths.

**Recommendation:** Test navbar and wide tables on 375px (iPhone SE) viewport. Consider adding a hamburger menu if nav links wrap.

## 8. AI Generic Wording
**Result: MINOR ISSUES ⚠️**

Phrases to avoid for AdSense policy and content quality:
- "A comprehensive guide to..." — appears in several JSON-LD `description` fields (not user-visible, but signals AI generation)
- "it's important to note" — not found in prose
- "in this article" — not found in prose  
- "In conclusion" — not found

The guide article bodies are specific with Malaysian-context data, worked examples, and real figures. The prose quality is generally good. The main issue is JSON-LD description strings that include "comprehensive" (internal-only, not a user-facing problem).

## 9. Missing Disclaimers
**Result: ISSUE ✗**

Calculator pages have an amber disclaimer banner: "For estimation purposes only. Consult a qualified financial advisor before making financial decisions."

**Guide pages on financial topics have no equivalent disclaimer.** Guides covering:
- Income tax reduction strategies
- EPF withdrawal decisions
- Loan eligibility and approval
- Housing affordability

...contain specific financial advice without any "this is for information only" disclaimer. This is a potential AdSense policy risk (financial content without disclaimer) and a legal/trust concern.

**Recommendation:** Add a small disclaimer component to guide pages, similar to the calculator amber banner, before the article body. Example: "This guide is for general information only and does not constitute financial, tax, or legal advice. Consult a qualified professional before making financial decisions."

## 10. Thin Pages for AdSense
**Result: MINOR ISSUES ⚠️** (see ADSENSE_READINESS.md for full analysis)

Pages at potential risk:
- `/about` — lists 3 calculators (stale), limited editorial content
- `/contact` — 4 short topic tiles + email address; minimal content
- `/privacy-policy` — boilerplate legal text; standard for AdSense
- `/terms` — same

Index pages (`/`, `/calculators`, `/guides`) have moderate content but could benefit from additional editorial sections.

---

## Summary of Issues

| # | Issue | Severity | Status |
|---|-------|----------|--------|
| 1 | Footer Guides section missing 9 new guides | Medium | ✗ Fix recommended |
| 2 | No Guides link in navbar | Medium | ⚠️ Improvement |
| 3 | Footer brand copy stale (says 3 calculators) | Low | ⚠️ Update |
| 4 | About page lists only 3 of 7 calculators | Low | ⚠️ Update |
| 5 | No disclaimer on finance guide pages | Medium | ✗ Fix recommended |
| 6 | Navbar may wrap on very narrow screens | Low | ⚠️ Test |
| 7 | JSON-LD descriptions use "comprehensive" | Very Low | ⚠️ Optional |

All structural SEO elements (sitemap, robots.txt, canonical URLs, metadata, JSON-LD schemas) are correct.
