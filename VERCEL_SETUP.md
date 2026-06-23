# Vercel Environment Setup 鈥?SmartCalc MY

## 1. Add NEXT_PUBLIC_SITE_URL in Vercel

This variable controls every URL that appears in the sitemap, robots.txt,
Open Graph tags, canonical links, and JSON-LD structured data.

### Steps

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard) and open the **smartcalc-my** project
2. Click **Settings** (top navigation)
3. Click **Environment Variables** (left sidebar)
4. Click **Add New**
5. Fill in:

   | Field       | Value                                  |
   |-------------|----------------------------------------|
   | Key         | `NEXT_PUBLIC_SITE_URL`                 |
   | Value       | `https://smrtcalc.com`      |
   | Environment | 鉁?Production  鉁?Preview  鉁?Development |

6. Click **Save**

> When you connect a custom domain (e.g. `smartcalc.my`), update this value to
> `https://smartcalc.my` and redeploy. Every URL updates automatically.

---

## 2. How to Redeploy

### Option A 鈥?Trigger via Vercel Dashboard

1. Open the project on [vercel.com/dashboard](https://vercel.com/dashboard)
2. Go to **Deployments** tab
3. Click the **鈰?* menu on the latest deployment
4. Click **Redeploy** 鈫?**Redeploy**

### Option B 鈥?Push a new commit (automatic)

```bash
git commit --allow-empty -m "chore: trigger redeploy"
git push origin main
```

Every push to `main` automatically triggers a new production deployment.

---

## 3. How to Verify sitemap.xml

After deploying, open in your browser:

```
https://smrtcalc.com/sitemap.xml
```

Expected output 鈥?all 8 URLs should use your `NEXT_PUBLIC_SITE_URL`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://smrtcalc.com/</loc>
    <lastmod>2025-...</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1</priority>
  </url>
  <url><loc>https://smrtcalc.com/bmi-calculator</loc>...</url>
  <url><loc>https://smrtcalc.com/salary-calculator-malaysia</loc>...</url>
  <url><loc>https://smrtcalc.com/loan-calculator</loc>...</url>
  <url><loc>https://smrtcalc.com/about</loc>...</url>
  <url><loc>https://smrtcalc.com/contact</loc>...</url>
  <url><loc>https://smrtcalc.com/privacy-policy</loc>...</url>
  <url><loc>https://smrtcalc.com/terms</loc>...</url>
</urlset>
```

**Checklist:**
- [ ] All `<loc>` values start with your deployment URL (not `https://smartcalc.my`)
- [ ] All 8 routes are present
- [ ] `<priority>` values: `/` = 1.0, calculators = 0.9, company pages = 0.3鈥?.5

**Submit to Google Search Console:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property 鈫?URL prefix 鈫?`https://smrtcalc.com`
3. Sitemaps 鈫?Add sitemap 鈫?enter `sitemap.xml` 鈫?Submit

---

## 4. How to Verify robots.txt

Open in your browser:

```
https://smrtcalc.com/robots.txt
```

Expected output:

```
User-agent: *
Allow: /
Disallow: /_next/
Disallow: /api/

Host: https://smrtcalc.com
Sitemap: https://smrtcalc.com/sitemap.xml
```

**Checklist:**
- [ ] `Host:` matches your deployment URL
- [ ] `Sitemap:` points to your deployment URL
- [ ] `/_next/` is disallowed (prevents indexing of internal Next.js assets)

---

## 5. How to Verify Open Graph & Canonical URLs

### View page source

Open any page, right-click 鈫?**View Page Source**, and search for:

```html
<!-- Canonical -->
<link rel="canonical" href="https://smrtcalc.com/bmi-calculator" />

<!-- Open Graph -->
<meta property="og:url" content="https://smrtcalc.com/bmi-calculator" />
<meta property="og:image" content="https://smrtcalc.com/og-image.png" />
```

### Use online tools

| Tool | URL |
|------|-----|
| Open Graph debugger | [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug) |
| Twitter Card validator | [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator) |
| Rich Results (JSON-LD) | [search.google.com/test/rich-results](https://search.google.com/test/rich-results) |
| PageSpeed Insights | [pagespeed.web.dev](https://pagespeed.web.dev) |

---

## 6. Switching to a Custom Domain

When `smartcalc.my` is ready:

1. **Add domain in Vercel:** Project 鈫?Settings 鈫?Domains 鈫?Add `smartcalc.my`
2. **Update DNS** at your registrar:

   | Type  | Name | Value                  |
   |-------|------|------------------------|
   | A     | @    | 76.76.21.21            |
   | CNAME | www  | cname.vercel-dns.com   |

3. **Update environment variable** in Vercel:

   ```
   NEXT_PUBLIC_SITE_URL=https://smartcalc.my
   ```

4. **Redeploy** 鈥?sitemap, robots.txt, OG tags, and JSON-LD all update automatically

---

## 7. URL Architecture Reference

All URLs are derived from a single source of truth:

```
lib/siteConfig.ts
鈹斺攢鈹€ SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://smrtcalc.com"
    鈹溾攢鈹€ app/sitemap.ts        鈫?/sitemap.xml
    鈹溾攢鈹€ app/robots.ts         鈫?/robots.txt
    鈹溾攢鈹€ app/layout.tsx        鈫?metadataBase, OG, canonical (root)
    鈹溾攢鈹€ app/page.tsx          鈫?OG url, JSON-LD WebSite
    鈹溾攢鈹€ app/bmi-calculator/   鈫?OG url, canonical, JSON-LD
    鈹溾攢鈹€ app/salary-calculator-malaysia/ 鈫?OG url, canonical, JSON-LD
    鈹斺攢鈹€ app/loan-calculator/  鈫?OG url, canonical, JSON-LD
```
