# GA4 Setup Guide — SmartCalc MY

## 1. Create a GA4 Property

1. Go to [analytics.google.com](https://analytics.google.com) and sign in with your Google account.
2. Click **Admin** (gear icon, bottom-left).
3. In the **Account** column click **Create Account** (or select an existing account).
4. In the **Property** column click **Create Property**.
5. Enter a property name (e.g. `SmartCalc MY`), choose your time zone (`Malaysia / GMT+8`) and currency (`Malaysian Ringgit`).
6. Click **Next**, fill in business details, then click **Create**.

---

## 2. Set Up a Web Data Stream

1. After the property is created, choose **Web** as the platform.
2. Enter your website URL:
   - Production: `https://smartcalc.my` (or your Vercel URL `https://smartcalc-my.vercel.app`)
3. Enter a stream name (e.g. `SmartCalc MY Web`).
4. Leave **Enhanced measurement** enabled.
5. Click **Create stream**.

---

## 3. Obtain the Measurement ID

On the **Web stream details** page you will see:

```
Measurement ID
G-XXXXXXXXXX
```

Copy that value — it is your `NEXT_PUBLIC_GA_ID`.

**Format:** always starts with `G-` followed by exactly 10 alphanumeric characters.

---

## 4. Configure Environment Variables

### Local development

Create (or edit) `.env.local` in the project root — this file is git-ignored:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Restart the dev server after adding the variable:

```bash
npm run dev
```

### Vercel (production / preview)

1. Open your project in the [Vercel dashboard](https://vercel.com/dashboard).
2. Go to **Settings → Environment Variables**.
3. Click **Add New**.

| Name | Value | Environments |
|------|-------|--------------|
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` | Production, Preview, Development |

4. Click **Save**.
5. Trigger a new deployment (**Deployments → Redeploy**) so the variable is picked up.

> **Security note:** `NEXT_PUBLIC_` variables are embedded in the client bundle and visible in the browser. This is expected and safe for a GA Measurement ID — it is not a secret.

---

## 5. Analytics Disabled Without the Variable

When `NEXT_PUBLIC_GA_ID` is unset or empty:

- The GA script tags are **not injected** into the page (`GoogleAnalytics` returns `null`).
- All `gtag` helper calls (`pageview`, `event`, `trackBmiCalculated`, etc.) are **no-ops**.
- No network requests are made to Google's servers.

This means analytics is off by default in local development unless you explicitly add the variable to `.env.local`.

---

## 6. Events Reference

### Automatic events

| Event | When fired | Parameters |
|-------|-----------|------------|
| `page_view` | Every client-side route change | `page_path` |

### Custom calculator events

| Event name | Fired when | Parameters |
|-----------|-----------|------------|
| `bmi_calculated` | User clicks Calculate on the BMI page | `bmi_value` (number) |
| `salary_calculated` | User clicks Calculate on the Salary page | `gross_salary` (number, MYR) |
| `loan_calculated` | User clicks Calculate on the Loan page | `loan_amount` (number, MYR), `loan_years` (number) |

### Implementation files

| File | Role |
|------|------|
| [`lib/gtag.ts`](lib/gtag.ts) | `pageview()`, `event()`, `trackBmiCalculated()`, `trackSalaryCalculated()`, `trackLoanCalculated()` |
| [`components/GoogleAnalytics.tsx`](components/GoogleAnalytics.tsx) | Injects GA script tags; auto page-view tracker |
| [`app/layout.tsx`](app/layout.tsx) | Mounts `<GoogleAnalytics />` in the root layout |

---

## 7. Testing Guide

### 7a. Verify page views in Realtime

1. Open your site in Chrome.
2. In a separate tab open **GA4 → Reports → Realtime**.
3. Navigate between pages on your site (Home → BMI → Salary → Loan).
4. You should see **Active users: 1** and page events listed under **Event count by event name**.

### 7b. Verify custom calculator events

1. On your site, fill in the BMI / Salary / Loan calculator and click **Calculate**.
2. In **GA4 → Reports → Realtime**, scroll to **Event count by event name**.
3. You should see `bmi_calculated`, `salary_calculated`, or `loan_calculated` appear within a few seconds.
4. Click the event name to expand parameters and confirm the values (e.g. `bmi_value: 22.5`).

### 7c. Verify with GA Debugger (recommended for development)

1. Install the [**Google Analytics Debugger**](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) Chrome extension.
2. Enable the extension (toggle in the extension popup).
3. Open DevTools → **Console**.
4. Reload your site — you will see verbose GA event logs for every hit sent.

### 7d. Verify with browser DevTools (no extension needed)

1. Open DevTools → **Network** tab.
2. Filter by `collect` or `gtag`.
3. Use a calculator and look for POST requests to `https://www.google-analytics.com/g/collect`.
4. Click a request and check the **Payload** tab to see the event name and parameters.

---

## 8. Troubleshooting

| Symptom | Likely cause | Fix |
|---------|-------------|-----|
| No events in Realtime | `NEXT_PUBLIC_GA_ID` not set | Check `.env.local` / Vercel env vars; redeploy |
| Events appear but no data after 24 h | Data processing delay | Normal — standard reports lag by up to 48 h |
| `window.gtag is not defined` errors | Script loaded before GA init | Should not happen with `strategy="afterInteractive"` — check for ad blockers |
| Events fire twice | React StrictMode double-invoke | Expected in development only; will be single in production |
