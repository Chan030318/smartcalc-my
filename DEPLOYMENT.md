# SmartCalc MY — Vercel Deployment Guide

## Prerequisites

- GitHub account with the `smartcalc-my` repository pushed
- Vercel account (free tier is sufficient) — sign up at vercel.com

---

## 1. Deploy to Vercel (First Time)

### Option A — Vercel Dashboard (Recommended)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **Continue with GitHub** and authorise Vercel
3. Find `smartcalc-my` in your repository list and click **Import**
4. Vercel auto-detects Next.js — leave all settings as default
5. Click **Deploy**

Your site will be live at `https://smartcalc-my.vercel.app` within ~2 minutes.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

---

## 2. Add Custom Domain (smartcalc.my)

1. In Vercel dashboard → your project → **Settings** → **Domains**
2. Add `smartcalc.my` and `www.smartcalc.my`
3. Vercel provides DNS records — add them to your domain registrar:

| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

4. SSL is automatic — Vercel provisions a certificate via Let's Encrypt

---

## 3. Environment Variables

This project has **no required environment variables** for the MVP.

If you add features (e.g. contact form, analytics), add variables in:
**Vercel Dashboard → Project → Settings → Environment Variables**

---

## 4. Google AdSense Setup

1. Apply at [adsense.google.com](https://adsense.google.com)
2. Once approved, add your AdSense script to `app/layout.tsx`:

```tsx
// In the <head> via Next.js Script component
import Script from "next/script";

<Script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
  crossOrigin="anonymous"
  strategy="afterInteractive"
/>
```

3. Place ad units in calculator pages between content sections

---

## 5. Google Analytics (Optional)

Add to `app/layout.tsx`:

```tsx
import Script from "next/script";

// Inside RootLayout, before </body>:
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

---

## 6. OG Image

Create a 1200×630px image named `og-image.png` and place it in `/public/`.

Suggested tools: Figma, Canva, or [og-image.vercel.app](https://og-image.vercel.app)

---

## 7. PWA Icons

Create and place in `/public/`:
- `icon-192.png` — 192×192px app icon
- `icon-512.png` — 512×512px app icon
- `apple-touch-icon.png` — 180×180px for iOS

---

## 8. Automatic Deployments

Every `git push` to the `main` branch automatically triggers a new Vercel deployment.

```bash
# Standard workflow after changes:
git add .
git commit -m "your message"
git push origin main
```

Vercel builds and deploys within ~1 minute.

---

## 9. Verify Production Checklist

After deploying, check each route:

- [ ] `/` — Home page loads
- [ ] `/bmi-calculator` — BMI calculator works
- [ ] `/salary-calculator-malaysia` — Salary calculator works
- [ ] `/loan-calculator` — Loan calculator works
- [ ] `/about` — About page loads
- [ ] `/contact` — Contact page loads
- [ ] `/privacy-policy` — Privacy policy loads
- [ ] `/terms` — Terms page loads
- [ ] `/sitemap.xml` — Sitemap is accessible
- [ ] `/robots.txt` — Robots file is accessible
- [ ] `/manifest.json` — Web manifest is accessible

### SEO Validation Tools

- **Google Search Console** — submit sitemap at `https://smartcalc.my/sitemap.xml`
- **Rich Results Test** — [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
- **PageSpeed Insights** — [pagespeed.web.dev](https://pagespeed.web.dev)
- **Open Graph Debugger** — [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug)
- **Twitter Card Validator** — [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)

---

## 10. Project Structure Reference

```
smartcalc-my/
├── app/
│   ├── layout.tsx                          # Root layout, global metadata
│   ├── page.tsx                            # Home page (/)
│   ├── sitemap.ts                          # Auto-generates /sitemap.xml
│   ├── robots.ts                           # Auto-generates /robots.txt
│   ├── globals.css                         # Tailwind v4 global styles
│   ├── bmi-calculator/
│   │   ├── page.tsx                        # /bmi-calculator (server, SEO)
│   │   └── BMICalculator.tsx               # Client component
│   ├── salary-calculator-malaysia/
│   │   ├── page.tsx                        # /salary-calculator-malaysia
│   │   └── SalaryCalculator.tsx            # Client component
│   ├── loan-calculator/
│   │   ├── page.tsx                        # /loan-calculator
│   │   └── LoanCalculator.tsx              # Client component
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── privacy-policy/page.tsx
│   └── terms/page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── CalculatorCards.tsx
│   ├── Benefits.tsx
│   └── JsonLd.tsx                          # Structured data helper
├── public/
│   ├── manifest.json                       # PWA manifest
│   ├── og-image.png                        # Add before launch (1200×630)
│   ├── icon-192.png                        # Add before launch
│   ├── icon-512.png                        # Add before launch
│   └── apple-touch-icon.png               # Add before launch
└── next.config.ts                          # Security headers, compression
```
