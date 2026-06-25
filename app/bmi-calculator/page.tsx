import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BMICalculator from "./BMICalculator";
import JsonLd from "@/components/JsonLd";
import CalcSeoSection, { type CalcFaq, type RelatedCalc } from "@/components/CalcSeoSection";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/bmi-calculator`;

export const metadata: Metadata = {
  title: "BMI Calculator Malaysia — Asian BMI Chart & Categories",
  description:
    "Free BMI calculator for Malaysians using WHO Asia-Pacific guidelines. Enter your height and weight to get your BMI and Asian category instantly. No sign-up needed.",
  keywords: [
    "BMI calculator Malaysia",
    "body mass index Malaysia",
    "Asian BMI chart",
    "BMI calculator kg cm",
    "healthy BMI Malaysia",
    "kalkulator BMI Malaysia",
    "BMI normal range Malaysia",
  ],
  alternates: { canonical: "/bmi-calculator" },
  openGraph: {
    title: "BMI Calculator Malaysia — Asian BMI Chart & Categories",
    description:
      "Free BMI calculator using WHO Asia-Pacific guidelines. Get instant BMI results with Asian health categories.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "BMI Calculator Malaysia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BMI Calculator Malaysia — Asian BMI Chart",
    description: "Free BMI calculator using WHO Asia-Pacific guidelines for Malaysians.",
    images: ["/og-image.png"],
  },
};

const faqs: CalcFaq[] = [
  {
    q: "What is a healthy BMI for Malaysians?",
    a: "For Malaysian and Asian adults, a BMI between 18.5 and 22.9 is considered healthy (Normal weight) under WHO Asia-Pacific guidelines. A BMI of 23.0–24.9 is classified as Overweight (At Risk), and 25.0 or above as Obese. These thresholds are lower than the standard WHO global categories because research shows Asians develop obesity-related health risks at lower BMI values.",
  },
  {
    q: "Why does Malaysia use different BMI thresholds from Western countries?",
    a: "The WHO Asia-Pacific guidelines (2000) recognised that Asians — including Malaysians — tend to carry more body fat at a given BMI and develop health risks like type 2 diabetes and cardiovascular disease at lower BMI values than Western populations. Malaysia's Ministry of Health adopts these adjusted cut-offs, classifying overweight as BMI ≥ 23 and obesity as BMI ≥ 25.",
  },
  {
    q: "Is a BMI of 23 overweight for Asians?",
    a: "Yes. Under the WHO Asia-Pacific criteria used in Malaysia, a BMI of 23.0–24.9 falls into the Overweight (At Risk) category. This differs from the international WHO standard where overweight starts at 25.0. If your BMI is 23–24.9, it is advisable to maintain your weight and avoid further gain, and to consult a healthcare professional if you have other risk factors.",
  },
  {
    q: "How accurate is BMI as a health measure?",
    a: "BMI is a useful screening tool but has known limitations. It does not differentiate between muscle mass and fat mass, so athletes may register a high BMI without excess body fat. It also does not account for fat distribution — visceral fat around the abdomen carries greater health risk. For a complete picture, use BMI alongside waist circumference, blood pressure, and blood glucose results.",
  },
  {
    q: "Can children use this BMI calculator?",
    a: "No. This calculator uses adult BMI thresholds for adults aged 18 and above. Children and teenagers use different BMI standards — their BMI is interpreted against age- and sex-specific percentile charts (BMI-for-age). For children under 18, consult a paediatrician or use a child-specific BMI tool.",
  },
  {
    q: "How often should I check my BMI?",
    a: "For most adults, checking BMI once every 3–6 months is sufficient to track trends. Day-to-day fluctuations in body weight due to hydration and meals can shift BMI by 0.5–1.0 points without reflecting actual fat change. BMI is best used as a long-term trend indicator rather than a precise daily metric.",
  },
];

const relatedCalcs: RelatedCalc[] = [
  { href: "/salary-calculator-malaysia", emoji: "💰", title: "Salary Calculator Malaysia", desc: "Calculate take-home pay after EPF, SOCSO, EIS & PCB" },
  { href: "/epf-calculator-malaysia", emoji: "🏦", title: "EPF Calculator Malaysia", desc: "Project your KWSP retirement savings with dividends" },
  { href: "/loan-calculator", emoji: "🏠", title: "Loan Calculator Malaysia", desc: "Estimate monthly repayment and total interest cost" },
  { href: "/income-tax-calculator-malaysia", emoji: "📊", title: "Income Tax Calculator Malaysia", desc: "Calculate LHDN tax payable for YA 2024" },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "BMI Calculator Malaysia",
      url: PAGE_URL,
      description: "Free BMI calculator for Malaysians using WHO Asia-Pacific guidelines with Asian BMI categories.",
      applicationCategory: "HealthApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "MYR" },
      publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "BMI Calculator", item: PAGE_URL },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function BMICalculatorPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-gray-50">
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Asian BMI Guidelines
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              BMI Calculator Malaysia
            </h1>
            <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
              Calculate your Body Mass Index using Asia-Pacific thresholds
              recommended for Malaysian and Asian adults.
            </p>
          </div>
        </section>

        <BMICalculator />

        <CalcSeoSection faqs={faqs} relatedCalcs={relatedCalcs}>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Is BMI (Body Mass Index)?</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Body Mass Index (BMI) is a numerical measure derived from your height and weight using the formula: <strong>BMI = weight (kg) ÷ height² (m²)</strong>. For example, if you are 1.70 m tall and weigh 70 kg, your BMI is 70 ÷ (1.70 × 1.70) = <strong>24.2</strong> — Normal weight under Malaysian guidelines.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Developed in the 19th century and adopted by the WHO as a population-level screening tool, BMI is the most widely used weight-status indicator globally — including in Malaysian clinical and public health settings. Malaysia&#39;s Ministry of Health and the Malaysian Dietary Guidelines follow the <strong>WHO Asia-Pacific (2000) BMI cut-off points</strong>, which are more conservative than global WHO standards because research consistently shows Asians develop metabolic complications such as type 2 diabetes, hypertension, and dyslipidaemia at lower BMI values than Caucasian populations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Asian BMI Categories Used in Malaysia</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              The table below compares the BMI classification system used in Malaysia with the standard WHO global categories. Asian thresholds are 2–5 points lower, reflecting the different relationship between BMI and metabolic risk in Asian populations.
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-4 py-3 font-semibold text-gray-700">Category</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">Malaysia / Asian BMI</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">WHO Global BMI</th>
                    <th className="px-4 py-3 font-semibold text-gray-700">Health Risk Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-blue-700">Underweight</td>
                    <td className="px-4 py-3 text-gray-700">&lt; 18.5</td>
                    <td className="px-4 py-3 text-gray-700">&lt; 18.5</td>
                    <td className="px-4 py-3 text-gray-600">Increased (malnutrition risk)</td>
                  </tr>
                  <tr className="bg-green-50 hover:bg-green-100">
                    <td className="px-4 py-3 font-medium text-green-700">Normal Weight</td>
                    <td className="px-4 py-3 text-gray-700">18.5 – 22.9</td>
                    <td className="px-4 py-3 text-gray-700">18.5 – 24.9</td>
                    <td className="px-4 py-3 text-gray-600">Low (healthy range)</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-yellow-700">Overweight (At Risk)</td>
                    <td className="px-4 py-3 text-gray-700">23.0 – 24.9</td>
                    <td className="px-4 py-3 text-gray-700">25.0 – 29.9</td>
                    <td className="px-4 py-3 text-gray-600">Moderate</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-orange-700">Obese I (Moderate Risk)</td>
                    <td className="px-4 py-3 text-gray-700">25.0 – 29.9</td>
                    <td className="px-4 py-3 text-gray-700">30.0 – 34.9</td>
                    <td className="px-4 py-3 text-gray-600">High</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-red-700">Obese II (Severe Risk)</td>
                    <td className="px-4 py-3 text-gray-700">≥ 30.0</td>
                    <td className="px-4 py-3 text-gray-700">≥ 35.0</td>
                    <td className="px-4 py-3 text-gray-600">Very High</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">Source: WHO Expert Consultation (2000); Malaysian Dietary Guidelines (2020).</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Example BMI Calculation</h2>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-4">Example: 30-year-old Malaysian, Height 170 cm, Weight 75 kg</h3>
              <div className="bg-white rounded-xl p-4 border border-blue-100 mb-4 font-mono text-sm text-gray-700">
                BMI = 75 ÷ (1.70 × 1.70)<br />
                BMI = 75 ÷ 2.89<br />
                <span className="font-bold text-gray-900">BMI = 25.9 → Obese I (Moderate Risk)</span>
              </div>
              <p className="text-sm text-blue-800">
                A BMI of 25.9 sits in the <strong>Obese I — Moderate Risk</strong> range under Malaysian/Asian guidelines, even though by global WHO standards it would be classified as Overweight. Lifestyle adjustments are recommended to reduce cardiometabolic risk.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Waist Circumference: The Complementary Measure</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              BMI does not capture where body fat is distributed — and location matters. Visceral fat stored around the abdominal organs is more metabolically harmful than subcutaneous fat. The Malaysian NHMS recommends these waist circumference thresholds as a complementary check:
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <div className="font-semibold text-gray-800 mb-2">Men</div>
                <div className="text-sm text-gray-600">Normal: <span className="font-semibold text-green-700">&lt; 90 cm</span></div>
                <div className="text-sm text-gray-600 mt-1">At Risk: <span className="font-semibold text-red-700">≥ 90 cm</span></div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <div className="font-semibold text-gray-800 mb-2">Women</div>
                <div className="text-sm text-gray-600">Normal: <span className="font-semibold text-green-700">&lt; 80 cm</span></div>
                <div className="text-sm text-gray-600 mt-1">At Risk: <span className="font-semibold text-red-700">≥ 80 cm</span></div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              If your BMI is in the normal range but your waist circumference exceeds these thresholds, you may still benefit from lifestyle interventions. Always discuss your complete results with a healthcare provider for personalised advice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tips to Achieve a Healthy BMI in Malaysia</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              For most Malaysians, achieving a healthy BMI involves sustainable dietary changes and regular physical activity. The Malaysian Dietary Guidelines recommend:
            </p>
            <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <li className="flex gap-2"><span className="text-blue-500 font-bold flex-shrink-0 mt-0.5">▸</span><span><strong>Use the Quarter-Quarter-Half plate model:</strong> ¼ grains, ¼ protein, ½ vegetables and fruit at each main meal.</span></li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold flex-shrink-0 mt-0.5">▸</span><span><strong>Reduce added sugar:</strong> Malaysians consume high levels of sugar through teh tarik, kuih, white rice, and sweetened beverages. Switching to unsweetened drinks and brown rice significantly reduces caloric intake.</span></li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold flex-shrink-0 mt-0.5">▸</span><span><strong>Be active for 150 minutes per week:</strong> Brisk walking, cycling, or swimming at moderate intensity meets the MOH recommendation and helps maintain a healthy weight.</span></li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold flex-shrink-0 mt-0.5">▸</span><span><strong>Sleep 7–9 hours per night:</strong> Poor sleep raises appetite hormones (ghrelin) and is independently associated with higher BMI.</span></li>
              <li className="flex gap-2"><span className="text-blue-500 font-bold flex-shrink-0 mt-0.5">▸</span><span><strong>Consult a registered dietitian:</strong> For sustained, safe weight management, professional guidance is more effective than self-directed dieting.</span></li>
            </ul>
          </div>
        </CalcSeoSection>
      </main>
      <Footer />
    </>
  );
}
