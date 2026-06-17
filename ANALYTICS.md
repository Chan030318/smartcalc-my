# Google Analytics 4 Setup

## Quick start

1. **Create a GA4 property** at [analytics.google.com](https://analytics.google.com)
   - Account → Create → Property → choose **Web**
   - Enter your site URL (`https://smartcalc-my.vercel.app` or your custom domain)
   - Copy the **Measurement ID** (format: `G-XXXXXXXXXX`)

2. **Set the environment variable**

   Local development — add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

   Vercel — go to **Project → Settings → Environment Variables** and add:
   | Key | Value |
   |-----|-------|
   | `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` |

3. **Redeploy** (Vercel picks up new env vars on the next deploy).

## What's tracked

| Event | Trigger | Parameters |
|-------|---------|------------|
| `page_view` | Every route change (automatic) | `page_path` |
| `calculator_use` | BMI calculated | `event_category: "bmi"`, `bmi` |
| `calculator_use` | Salary calculated | `event_category: "salary"`, `gross_salary` |
| `calculator_use` | Loan calculated | `event_category: "loan"`, `loan_amount`, `loan_years` |

## Implementation files

| File | Purpose |
|------|---------|
| [`lib/gtag.ts`](lib/gtag.ts) | Core helpers — `pageview()`, `event()`, `trackCalculatorUse()` |
| [`components/GoogleAnalytics.tsx`](components/GoogleAnalytics.tsx) | Loads GA script + auto page-view tracker |
| [`app/layout.tsx`](app/layout.tsx) | Mounts `<GoogleAnalytics />` globally |

## Disabling analytics

Leave `NEXT_PUBLIC_GA_ID` unset (or empty). All gtag calls are no-ops when the ID is absent — no script is injected.

## Verifying it works

1. Install the [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) Chrome extension, or open **GA4 → Reports → Realtime**.
2. Visit your site and use a calculator.
3. You should see `calculator_use` events appear in the Realtime report within seconds.
