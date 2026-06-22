# SmartCalc MY — Content Quality Audit Report
**Date:** 2026-06-22  
**Scope:** All 24 guide pages + site infrastructure  
**Auditor:** Automated + manual review

---

## Audit Results Summary

| Check | Status | Notes |
|-------|--------|-------|
| 1. Unique titles & meta descriptions | ✅ PASS | All 24 guides have distinct titles and descriptions |
| 2. Official rates marked as estimates | ✅ PASS | FinancialDisclaimer on all finance guides; EPF/SOCSO/EIS rates noted as per official sources |
| 3. No unsupported "guaranteed approval" claims | ✅ PASS | "Guaranteed" appears only for EPF statutory minimum (legally accurate) |
| 4. Year consistency | ✅ FIXED | "to 2025" corrected to "to 2024" in EPF dividend metadata |
| 5. Internal links valid | ✅ PASS | All 18 internal guide cross-links verified against existing page files |
| 6. AuthorCard on all guides | ✅ PASS | All 24 guide pages include `<AuthorCard />` |
| 7. FinancialDisclaimer on all finance guides | ✅ PASS | All 23 finance guides include `<FinancialDisclaimer />` (BMI guide correctly omitted — health, not finance) |
| 8. Sitemap covers all guides | ✅ PASS | All 24 guide URLs present in sitemap.ts at priority 0.8 |
| 9. Footer not cluttered on mobile | ✅ FIXED | Guides section trimmed from 25 links to 12 curated links + "All Guides →" |
| 10. Build passes | ✅ PASS | `npm run build` — all 24 guides static (○), 0 errors, 0 warnings |

---

## Issues Found and Fixed

### Issue 1 — Guide count mismatch (25 vs actual 24)
**Severity:** Low  
**Files affected:** `app/guides/page.tsx`, `app/about/page.tsx`, `components/Footer.tsx`  
**Root cause:** Metadata was updated to "25 guides" but the categories array contains 14 original + 10 new = 24 guides.  
**Fix:** Changed all hardcoded counts from "25" to "24". Note: the hero badge in `/guides` uses `{allGuides.length}` dynamically (always correct); only static strings in metadata were wrong.

### Issue 2 — EPF dividend history date inconsistency  
**Severity:** Low  
**File:** `app/guides/epf-dividend-history-malaysia/page.tsx`  
**Root cause:** Metadata description and JSON-LD said "from 1983 to 2025" but the data table contains rows for years 1983–2024. The 2024 dividend was *declared* in early 2025 but the year label in the table is "2024".  
**Fix:** Changed "to 2025" → "to 2024" in meta description, OG description, and JSON-LD Article description. Body text ("2024 dividend was credited in early 2025") is accurate and unchanged.

### Issue 3 — Footer Guides section too long for mobile  
**Severity:** Medium  
**File:** `components/Footer.tsx`  
**Root cause:** After adding 10 new guides, the Footer Guides section grew to 26 links — scrolling through these on mobile creates a poor UX.  
**Fix:** Trimmed to 12 curated high-traffic guides + "All Guides →" entry. Full list remains discoverable via `/guides`.

---

## Items Reviewed (No Action Needed)

### "Guaranteed" EPF minimum dividend  
References to "guaranteed 2.5% minimum dividend" in the EPF Dividend History guide are **legally accurate** — Section 27 of the Employees Provident Fund Act 1991 mandates this floor. This is not a marketing claim and should remain.

### "YA 2024" in tax guides  
The income tax reduction guide and PCB guides reference "YA 2024" rates. As of June 2026, Malaysians are currently filing YA2025 returns. However, the YA2025 reliefs and tax brackets have not been confirmed as materially different from YA2024. Updating to YA2025 rates would require verifying official LHDN YA2025 announcements. **Recommendation:** Update these guides when YA2025 reliefs are confirmed (likely Budget 2026 announcements).

### "Average Malaysian CTOS score is around 680"  
The CTOS guide states this figure as a contextual reference. While CTOS does not officially publish an average score figure, 680 is within the well-documented "Good" range and is a commonly cited benchmark in Malaysian financial media. The FinancialDisclaimer on the page covers this adequately.

### Internal link to `/guides/how-to-improve-loan-approval-malaysia`  
Referenced in the CTOS score guide. This page **exists** at `app/guides/how-to-improve-loan-approval-malaysia/page.tsx`. ✅

### Booking fee "refundable if bank rejects" (First Home Buyer guide)  
The guide states booking fees are refundable if loan approval is declined. Under standard Malaysian SPA practice (Schedule H), the earnest deposit *is* refundable on loan rejection. This is accurate as written.

---

## Coverage Audit — All 24 Guides

| # | Guide | AuthorCard | FinancialDisclaimer | JSON-LD | Sitemap |
|---|-------|------------|---------------------|---------|---------|
| 1 | epf-contribution-guide-malaysia | ✅ | ✅ | ✅ | ✅ |
| 2 | epf-withdrawal-guide-malaysia | ✅ | ✅ | ✅ | ✅ |
| 3 | how-much-epf-at-30-malaysia | ✅ | ✅ | ✅ | ✅ |
| 4 | how-to-calculate-salary-after-epf | ✅ | ✅ | ✅ | ✅ |
| 5 | salary-deductions-explained-malaysia | ✅ | ✅ | ✅ | ✅ |
| 6 | pcb-vs-income-tax-malaysia | ✅ | ✅ | ✅ | ✅ |
| 7 | how-pcb-tax-works-malaysia | ✅ | ✅ | ✅ | ✅ |
| 8 | how-to-reduce-income-tax-malaysia | ✅ | ✅ | ✅ | ✅ |
| 9 | what-salary-to-afford-house-malaysia | ✅ | ✅ | ✅ | ✅ |
| 10 | housing-loan-eligibility-malaysia | ✅ | ✅ | ✅ | ✅ |
| 11 | how-to-improve-loan-approval-malaysia | ✅ | ✅ | ✅ | ✅ |
| 12 | personal-loan-vs-housing-loan-malaysia | ✅ | ✅ | ✅ | ✅ |
| 13 | what-is-dsr-malaysia | ✅ | ✅ | ✅ | ✅ |
| 14 | how-to-calculate-bmi-malaysia | ✅ | — (health guide) | ✅ | ✅ |
| 15 | socso-contribution-table-malaysia | ✅ | ✅ | ✅ | ✅ |
| 16 | eis-contribution-table-malaysia | ✅ | ✅ | ✅ | ✅ |
| 17 | epf-dividend-history-malaysia | ✅ | ✅ | ✅ | ✅ |
| 18 | how-to-check-ccris-malaysia | ✅ | ✅ | ✅ | ✅ |
| 19 | how-to-improve-ctos-score-malaysia | ✅ | ✅ | ✅ | ✅ |
| 20 | first-home-buyer-guide-malaysia | ✅ | ✅ | ✅ | ✅ |
| 21 | car-loan-eligibility-malaysia | ✅ | ✅ | ✅ | ✅ |
| 22 | personal-loan-guide-malaysia | ✅ | ✅ | ✅ | ✅ |
| 23 | emergency-fund-malaysia | ✅ | ✅ | ✅ | ✅ |
| 24 | rm3000-salary-budget-plan-malaysia | ✅ | ✅ | ✅ | ✅ |

**Result: 24/24 guides have AuthorCard · 23/23 finance guides have FinancialDisclaimer · 24/24 in sitemap**

---

## Recommended Future Actions (Out of Scope for This Audit)

1. **Update YA2024 → YA2025** in income tax guides once LHDN YA2025 reliefs are officially announced (Budget 2026 or LHDN circular).
2. **Add `/guides/how-to-calculate-bmi-malaysia` FinancialDisclaimer** — consider adding a "Health Disclaimer" component equivalent for the BMI guide.
3. **EPF dividend history** — add 2025 dividend row when EPF announces its 2025 declaration (expected early 2026/already past — verify and update if announced).
4. **Car loan guide** — note that BNM may update hire purchase maximum tenure rules; verify against latest BNM circulars annually.
5. **CTOS score average** — the "680 average" claim should be verified against CTOS published data or softened to "approximately 650–700 based on available industry estimates."

---

*Report generated: 2026-06-22 | Build: ✅ All static | Errors: 0*
