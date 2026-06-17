import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/how-to-calculate-bmi-malaysia`;

export const metadata: Metadata = {
  title: "How to Calculate BMI in Malaysia — Asian BMI Categories Explained (2024)",
  description:
    "Learn how to calculate BMI, understand the Asian BMI categories used in Malaysia, and find out what your result means for your health. Includes a free BMI calculator.",
  keywords: [
    "how to calculate BMI Malaysia",
    "BMI calculator Malaysia",
    "Asian BMI categories Malaysia",
    "BMI normal range Malaysia",
    "kalkulator BMI Malaysia",
    "BMI obesity Malaysia",
    "BMI formula Malaysia",
    "healthy weight Malaysia",
  ],
  alternates: { canonical: "/guides/how-to-calculate-bmi-malaysia" },
  openGraph: {
    title: "How to Calculate BMI in Malaysia — Asian BMI Categories Explained",
    description:
      "The BMI formula, why Malaysia uses Asian-specific categories, what your number means, and the limitations you should know about.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "BMI Malaysia Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Calculate BMI in Malaysia — Asian Categories Explained",
    description: "Asian BMI categories, the calculation formula, and what your result means for your health.",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    q: "What is a healthy BMI range in Malaysia?",
    a: "Malaysia and most Asian countries use a modified BMI scale. A healthy BMI for Asians is 18.5 to 22.9. Overweight is defined as 23.0 to 27.4, and obese as 27.5 and above — lower than the international WHO thresholds of 25 and 30 respectively.",
  },
  {
    q: "Why does Malaysia use different BMI categories from Western countries?",
    a: "Research has found that people of Asian ethnicity carry more body fat at a given BMI compared to those of European descent. At the same BMI, Asians face higher risks of type 2 diabetes, cardiovascular disease, and hypertension. The Asia-Pacific guidelines (endorsed by MOH Malaysia) therefore set the overweight and obesity cutoffs lower.",
  },
  {
    q: "What is the BMI formula?",
    a: "BMI = weight (kg) ÷ height² (m²). For example, if you weigh 70 kg and are 1.70 m tall: BMI = 70 ÷ (1.70 × 1.70) = 70 ÷ 2.89 = 24.2.",
  },
  {
    q: "Is BMI an accurate measure of health?",
    a: "BMI is a useful screening tool but has limitations. It does not distinguish between fat mass and muscle mass, so athletes may be classified as overweight despite low body fat. It also does not account for fat distribution — abdominal (central) obesity carries greater health risk than the same weight distributed elsewhere. Waist circumference is often used alongside BMI.",
  },
  {
    q: "What should I do if my BMI is above 23?",
    a: "A BMI above 23 (overweight by Asian standards) is a prompt to consult a healthcare professional, review your diet and physical activity, and consider measuring your waist circumference. For adults, a waist above 90 cm (men) or 80 cm (women) indicates central obesity and elevated metabolic risk, according to Malaysian clinical guidelines.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Calculate BMI in Malaysia — Asian BMI Categories Explained (2024)",
  description:
    "A guide to BMI calculation for Malaysians — the formula, Asian-specific categories, what your result means, and the important limitations of BMI as a health metric.",
  url: PAGE_URL,
  datePublished: "2024-01-01",
  dateModified: "2024-11-01",
  author: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL },
  publisher: {
    "@type": "Organization",
    name: "SmartCalc MY",
    url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` },
  },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` },
      { "@type": "ListItem", position: 3, name: "How to Calculate BMI Malaysia", item: PAGE_URL },
    ],
  },
};

const categories = [
  { range: "Below 18.5", label: "Underweight", color: "bg-blue-50 text-blue-700 border-blue-100", advice: "Below the healthy range. Consult a doctor if unintentional." },
  { range: "18.5 – 22.9", label: "Healthy Weight", color: "bg-emerald-50 text-emerald-700 border-emerald-100", advice: "Optimal range for Asian adults." },
  { range: "23.0 – 27.4", label: "Overweight", color: "bg-amber-50 text-amber-700 border-amber-100", advice: "Increased risk — consider lifestyle adjustments." },
  { range: "27.5 and above", label: "Obese", color: "bg-red-50 text-red-700 border-red-100", advice: "Higher risk of chronic disease. Seek medical advice." },
];

export default function HowToCalculateBmiPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-green-50 to-emerald-50 border-b border-green-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-green-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">BMI Malaysia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              How to Calculate BMI in Malaysia — Asian BMI Categories Explained
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Malaysia uses Asian-specific BMI cutoffs that are lower than the international WHO standards. Here is the formula, what the categories mean, and the limitations you should know.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">Health</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">5 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">

          <h2>The BMI Formula</h2>
          <p>
            Body Mass Index (BMI) is a simple number derived from your weight and height:
          </p>
          <div className="not-prose bg-green-50 border border-green-100 rounded-2xl p-5 my-6 text-center">
            <p className="text-sm text-green-700 font-semibold mb-1">BMI Formula</p>
            <p className="text-2xl font-bold text-gray-900">BMI = Weight (kg) ÷ Height² (m²)</p>
          </div>
          <p>
            <strong>Example:</strong> You weigh 68 kg and are 1.65 m tall.
            BMI = 68 ÷ (1.65 × 1.65) = 68 ÷ 2.7225 = <strong>24.98</strong>
          </p>
          <p>
            By Asian standards, 24.98 falls in the <strong>Overweight</strong> category (23.0–27.4). By the international WHO standard it would be just inside the &ldquo;Normal&rdquo; range (18.5–24.9). This difference matters.
          </p>

          <h2>Asian BMI Categories Used in Malaysia</h2>
          <p>
            The Ministry of Health Malaysia (MOH) and clinical practice guidelines follow the <strong>Asia-Pacific BMI classification</strong>, which sets lower thresholds for overweight and obesity compared to the international WHO standard. The reason: research consistently shows Asians carry more visceral fat at lower BMI values, leading to higher metabolic risk at the same number.
          </p>

          <div className="not-prose grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            {categories.map((cat) => (
              <div key={cat.label} className={`rounded-2xl border p-5 ${cat.color}`}>
                <p className="font-bold text-lg mb-0.5">{cat.range}</p>
                <p className="font-semibold text-sm mb-2">{cat.label}</p>
                <p className="text-xs">{cat.advice}</p>
              </div>
            ))}
          </div>

          <h2>International WHO vs Asian BMI — Side by Side</h2>

          <div className="not-prose my-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Category</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">WHO (International)</th>
                  <th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-gray-200">Asia-Pacific (Malaysia)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Underweight", "< 18.5", "< 18.5"],
                  ["Normal / Healthy", "18.5 – 24.9", "18.5 – 22.9"],
                  ["Overweight", "25.0 – 29.9", "23.0 – 27.4"],
                  ["Obese", "≥ 30.0", "≥ 27.5"],
                ].map(([cat, who, asia]) => (
                  <tr key={cat} className="border-b border-gray-100">
                    <td className="px-4 py-3 text-gray-800 font-medium">{cat}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{who}</td>
                    <td className="px-4 py-3 text-center text-gray-600 font-semibold">{asia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>What Your BMI Result Means</h2>
          <p>
            Your BMI category gives you a population-level health risk signal:
          </p>
          <ul>
            <li><strong>Underweight (below 18.5):</strong> Associated with nutritional deficiency, weakened immunity, and bone density loss. Seek medical review if weight loss was unintentional.</li>
            <li><strong>Healthy Weight (18.5–22.9):</strong> Associated with the lowest risk of cardiovascular disease, type 2 diabetes, and hypertension in the Asian population. Aim to maintain this range.</li>
            <li><strong>Overweight (23.0–27.4):</strong> Moderately increased risk. The MOH recommends lifestyle modifications (diet and exercise) and regular health screening.</li>
            <li><strong>Obese (27.5 and above):</strong> Substantially increased risk of metabolic conditions. Medical consultation is advised.</li>
          </ul>

          <h2>Important Limitations of BMI</h2>
          <p>
            BMI is a useful screening tool but does not tell the full story. Its key limitations:
          </p>
          <ul>
            <li><strong>Does not distinguish fat from muscle.</strong> Athletes and bodybuilders can have a high BMI despite very low body fat.</li>
            <li><strong>Ignores fat distribution.</strong> Central (abdominal) obesity — a large waist circumference — is a stronger predictor of metabolic risk than BMI alone.</li>
            <li><strong>Waist circumference matters.</strong> Malaysian guidelines flag risk at waist &gt; 90 cm for men and &gt; 80 cm for women, regardless of BMI.</li>
            <li><strong>Does not apply to children</strong> in the same way. Paediatric BMI uses age and sex-specific percentiles.</li>
          </ul>
          <p>
            Always use BMI alongside waist circumference and, where possible, a clinical assessment of your overall health.
          </p>

          {/* CTA */}
          <div className="not-prose bg-green-600 rounded-2xl p-6 sm:p-8 text-white my-8">
            <h3 className="text-xl font-bold mb-2">Calculate Your BMI Instantly</h3>
            <p className="text-green-100 mb-5 text-sm">
              Enter your weight and height to get your BMI result using the Asian categories used in Malaysia.
            </p>
            <Link
              href="/bmi-calculator"
              className="inline-flex items-center gap-2 bg-white text-green-700 font-semibold px-6 py-3 rounded-xl hover:bg-green-50 transition-colors"
            >
              BMI Calculator Malaysia →
            </Link>
          </div>

          <h2>Related Guides and Calculators</h2>
          <ul>
            <li><Link href="/bmi-calculator">BMI Calculator Malaysia</Link> — instant result with Asian categories</li>
            <li><Link href="/salary-calculator-malaysia">Salary Calculator Malaysia</Link></li>
          </ul>
        </article>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-gray-50 border border-gray-100 rounded-2xl">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-800 text-sm list-none">
                  {faq.q}
                  <svg className="w-4 h-4 text-gray-400 flex-shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-sm text-gray-500">
          <Link href="/guides" className="hover:text-blue-600 transition-colors">← Back to Guides</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
