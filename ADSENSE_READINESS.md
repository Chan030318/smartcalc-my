# AdSense Readiness — SmartCalc MY
**Date:** 2026-06-17  
**Assessment:** Site is substantially AdSense-ready. Specific pages need minor fixes before submission.

---

## AdSense Policy Requirements (Checklist)

| Requirement | Status | Notes |
|-------------|--------|-------|
| Original, non-copied content | ✓ Pass | All content is original Malaysian-context material |
| Sufficient content volume | ✓ Pass | 28 pages, 15 guide articles at 1200–2000+ words each |
| Clear site navigation | ⚠️ Partial | Guides not linked from navbar — discovery gap |
| Privacy Policy page | ✓ Pass | `/privacy-policy` exists and mentions AdSense |
| Contact page | ✓ Pass | `/contact` page exists |
| No prohibited content | ✓ Pass | Finance/health guides — standard permissible content |
| Not primarily ads | ✓ Pass | Content-first layout on all pages |
| Site has been live for sufficient time | ✓ Assumed | Deployed on Vercel |

---

## Page-by-Page AdSense Readiness

### Calculator Pages (7 pages) — READY ✓

All 7 calculators:
- `/bmi-calculator`
- `/salary-calculator-malaysia`
- `/loan-calculator`
- `/income-tax-calculator-malaysia`
- `/epf-calculator-malaysia`
- `/pcb-calculator-malaysia`
- `/dsr-calculator-malaysia`

**Content quality:** Each calculator page includes:
- Interactive tool (the calculator itself)
- Explanation of the calculation methodology
- Result interpretation guide
- FAQ section (5 questions each, 3–5 sentences per answer)
- JSON-LD WebApplication + FAQPage + BreadcrumbList schema
- Internal links to related guides
- Amber disclaimer banner

**AdSense verdict:** High-value pages. Calculators attract high commercial intent traffic (users researching financial decisions), which commands higher CPM from finance/insurance advertisers.

### Guide Articles (15 pages) — READY WITH ONE FIX ⚠️

All 15 guide articles:
- Word count: 1,200–2,000+ words each (estimated from content analysis)
- Structure: H2/H3 hierarchy, data tables, worked examples, Malaysian-specific figures
- Schema: Article + FAQPage + BreadcrumbList JSON-LD on each
- Internal links: 3–5 per article to related calculators and guides
- SEO metadata: Unique title, description, OG, Twitter card

**Issue:** No disclaimer on finance guides (tax, EPF, loans). AdSense policy for financial content recommends a disclaimer clarifying the information is for general guidance only and not professional advice.

**AdSense verdict:** High-value content. Malaysian personal finance guides attract advertisers from banking, insurance, property, and investment sectors — all high-CPM categories. Fix disclaimer before submission.

**Top articles by commercial value:**
1. `/guides/what-salary-to-afford-house-malaysia` — property advertisers (highest CPM)
2. `/guides/housing-loan-eligibility-malaysia` — mortgage/banking advertisers
3. `/guides/how-to-improve-loan-approval-malaysia` — financial services advertisers
4. `/guides/how-to-reduce-income-tax-malaysia` — tax/accounting/investment advertisers
5. `/guides/epf-withdrawal-guide-malaysia` — retirement/investment advertisers

### Index Pages (3 pages) — ACCEPTABLE ⚠️

**`/` (Home)**
- Content: Hero section, feature cards for 7 calculators, value propositions
- Concern: Thin editorial content — primarily navigation/marketing copy
- Verdict: Acceptable as a homepage; AdSense allows nav-heavy homepages if the site overall has sufficient content

**`/calculators`**
- Content: 3-category grid with 7 calculator cards, each with description + feature list
- Concern: Low prose density — cards contain short descriptions, not editorial paragraphs
- Verdict: Acceptable. Tool directory pages are standard.

**`/guides`**
- Content: 15 guide cards across 4 categories with descriptions and read times
- Concern: Same as /calculators — navigational rather than editorial
- Verdict: Acceptable. Index pages with substantial downstream content are permitted.

### Static Pages (4 pages) — THIN BUT ACCEPTABLE ⚠️

**`/about`**
- Content: 3 calculator cards + 4 value proposition tiles
- Issue: Lists only 3 of 7 calculators. Content is sparse.
- Verdict: Marginally acceptable. Update calculator list; consider adding 2–3 paragraphs about the site mission.

**`/contact`**
- Content: 4 short topic tiles + email address
- Issue: Very thin — standard "contact us" page with minimal content.
- Verdict: Standard for AdSense; contact pages are expected to be thin. AdSense will not penalise this.

**`/privacy-policy`**
- Content: Legal boilerplate covering AdSense, cookies, data collection
- Verdict: Required page. Content length is acceptable.

**`/terms`**
- Content: Terms of use including estimation disclaimer
- Verdict: Required page. Content length is acceptable.

---

## Overall AdSense Readiness Score

| Category | Score | Comment |
|----------|-------|---------|
| Content quality | 9/10 | Specific, original, Malaysian-context material |
| Content volume | 9/10 | 28 pages, 15 long-form guides |
| Technical SEO | 9/10 | Schema markup, sitemap, robots, canonical URLs |
| Navigation & UX | 7/10 | Guides not in navbar; footer guides list incomplete |
| Policy compliance | 8/10 | Missing disclaimers on finance guides |
| Site structure | 8/10 | Clear hierarchy; about/contact pages need updates |

**Overall: 83/100 — Substantially ready. Fix disclaimers on guides before submission.**

---

## Priority Fixes Before AdSense Submission

### Must Fix
1. **Add disclaimer to all finance guide pages** — a single small banner before article body: "This guide provides general information only and does not constitute financial, tax, or legal advice. Consult a qualified professional before making financial decisions."

### Recommended
2. **Add Guides link to navbar** — improves site navigation score (AdSense reviewers check that the site is navigable)
3. **Update footer Guides section** — either list all 15 guides or restructure to "All Guides + top picks"
4. **Update About page** — add all 7 calculators, add editorial paragraph about the site

### Optional (After Approval)
5. Update footer brand description to reflect full site scope
6. Consider adding a "last updated" date to guide articles for freshness signals
7. Add author/editorial information to increase E-E-A-T (Experience, Expertise, Authority, Trust) signals for YMYL (Your Money, Your Life) content

---

## AdSense Ad Placement Strategy (Post-Approval)

**Calculator pages:**
- 1 ad unit above the calculator widget (visible on load)
- 1 ad unit below the results section
- 1 ad unit between FAQ items (auto ads or manual)

**Guide articles:**
- 1 ad unit below the H1/intro (before main content)
- 1–2 in-article ad units between H2 sections
- 1 ad unit below the FAQ section

**Index pages (Home, /calculators, /guides):**
- 1 ad unit in the hero area
- Auto ads (let AdSense place optimally)

**Revenue estimate (rough):** Finance/insurance CPM in Malaysia is typically USD $0.50–$2.00 per 1,000 pageviews. At 10,000 monthly pageviews across calculator + guide pages, estimated monthly revenue: RM100–RM400. Scales linearly with traffic.
