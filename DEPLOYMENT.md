# SmartCalc MY 鈥?Vercel Deployment Guide

## Prerequisites

- GitHub account with the `smartcalc-my` repository pushed
- Vercel account (free tier is sufficient) 鈥?sign up at vercel.com

---

## 1. Deploy to Vercel (First Time)

### Option A 鈥?Vercel Dashboard (Recommended)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **Continue with GitHub** and authorise Vercel
3. Find `smartcalc-my` in your repository list and click **Import**
4. Vercel auto-detects Next.js 鈥?leave all settings as default
5. Click **Deploy**

Your site will be live at `https://smrtcalc.com` within ~2 minutes.

### Option B 鈥?Vercel CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

---

## 2. Add Custom Domain (smartcalc.my)

1. In Vercel dashboard 鈫?your project 鈫?**Settings** 鈫?**Domains**
2. Add `smartcalc.my` and `www.smartcalc.my`
3. Vercel provides DNS records 鈥?add them to your domain registrar:

| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

4. SSL is automatic 鈥?Vercel provisions a certificate via Let's Encrypt

---

## 3. Environment Variables

This project has **no required environment variables** for the MVP.

If you add features (e.g. contact form, analytics), add variables in:
**Vercel Dashboard 鈫?Project 鈫?Settings 鈫?Environment Variables**

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

Create a 1200脳630px image named `og-image.png` and place it in `/public/`.

Suggested tools: Figma, Canva, or [og-image.vercel.app](https://og-image.vercel.app)

---

## 7. PWA Icons

Create and place in `/public/`:
- `icon-192.png` 鈥?192脳192px app icon
- `icon-512.png` 鈥?512脳512px app icon
- `apple-touch-icon.png` 鈥?180脳180px for iOS

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

- [ ] `/` 鈥?Home page loads
- [ ] `/bmi-calculator` 鈥?BMI calculator works
- [ ] `/salary-calculator-malaysia` 鈥?Salary calculator works
- [ ] `/loan-calculator` 鈥?Loan calculator works
- [ ] `/about` 鈥?About page loads
- [ ] `/contact` 鈥?Contact page loads
- [ ] `/privacy-policy` 鈥?Privacy policy loads
- [ ] `/terms` 鈥?Terms page loads
- [ ] `/sitemap.xml` 鈥?Sitemap is accessible
- [ ] `/robots.txt` 鈥?Robots file is accessible
- [ ] `/manifest.json` 鈥?Web manifest is accessible

### SEO Validation Tools

- **Google Search Console** 鈥?submit sitemap at `https://smartcalc.my/sitemap.xml`
- **Rich Results Test** 鈥?[search.google.com/test/rich-results](https://search.google.com/test/rich-results)
- **PageSpeed Insights** 鈥?[pagespeed.web.dev](https://pagespeed.web.dev)
- **Open Graph Debugger** 鈥?[developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug)
- **Twitter Card Validator** 鈥?[cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)

---

## 10. Project Structure Reference

```
smartcalc-my/
鈹溾攢鈹€ app/
鈹?  鈹溾攢鈹€ layout.tsx                          # Root layout, global metadata
鈹?  鈹溾攢鈹€ page.tsx                            # Home page (/)
鈹?  鈹溾攢鈹€ sitemap.ts                          # Auto-generates /sitemap.xml
鈹?  鈹溾攢鈹€ robots.ts                           # Auto-generates /robots.txt
鈹?  鈹溾攢鈹€ globals.css                         # Tailwind v4 global styles
鈹?  鈹溾攢鈹€ bmi-calculator/
鈹?  鈹?  鈹溾攢鈹€ page.tsx                        # /bmi-calculator (server, SEO)
鈹?  鈹?  鈹斺攢鈹€ BMICalculator.tsx               # Client component
鈹?  鈹溾攢鈹€ salary-calculator-malaysia/
鈹?  鈹?  鈹溾攢鈹€ page.tsx                        # /salary-calculator-malaysia
鈹?  鈹?  鈹斺攢鈹€ SalaryCalculator.tsx            # Client component
鈹?  鈹溾攢鈹€ loan-calculator/
鈹?  鈹?  鈹溾攢鈹€ page.tsx                        # /loan-calculator
鈹?  鈹?  鈹斺攢鈹€ LoanCalculator.tsx              # Client component
鈹?  鈹溾攢鈹€ about/page.tsx
鈹?  鈹溾攢鈹€ contact/page.tsx
鈹?  鈹溾攢鈹€ privacy-policy/page.tsx
鈹?  鈹斺攢鈹€ terms/page.tsx
鈹溾攢鈹€ components/
鈹?  鈹溾攢鈹€ Navbar.tsx
鈹?  鈹溾攢鈹€ Footer.tsx
鈹?  鈹溾攢鈹€ Hero.tsx
鈹?  鈹溾攢鈹€ CalculatorCards.tsx
鈹?  鈹溾攢鈹€ Benefits.tsx
鈹?  鈹斺攢鈹€ JsonLd.tsx                          # Structured data helper
鈹溾攢鈹€ public/
鈹?  鈹溾攢鈹€ manifest.json                       # PWA manifest
鈹?  鈹溾攢鈹€ og-image.png                        # Add before launch (1200脳630)
鈹?  鈹溾攢鈹€ icon-192.png                        # Add before launch
鈹?  鈹溾攢鈹€ icon-512.png                        # Add before launch
鈹?  鈹斺攢鈹€ apple-touch-icon.png               # Add before launch
鈹斺攢鈹€ next.config.ts                          # Security headers, compression
```
