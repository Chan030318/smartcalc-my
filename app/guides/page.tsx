import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides`;

export const metadata: Metadata = {
  title: "Malaysian Finance & Health Guides — SmartCalc MY",
  description:
    "Free guides on Malaysian personal finance and health — EPF contributions, salary deductions, income tax, PCB, DSR loan eligibility, and BMI. Written for Malaysians.",
  keywords: [
    "Malaysia finance guide",
    "EPF contribution guide Malaysia",
    "DSR guide Malaysia",
    "PCB income tax guide Malaysia",
    "salary deduction guide Malaysia",
    "BMI guide Malaysia",
    "personal finance Malaysia",
  ],
  alternates: { canonical: "/guides" },
  openGraph: {
    title: "Malaysian Finance & Health Guides — SmartCalc MY",
    description:
      "Free guides on EPF, salary deductions, income tax, DSR, PCB, and BMI — written for Malaysians.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "SmartCalc MY Guides" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Malaysian Finance & Health Guides — SmartCalc MY",
    description: "Free guides on EPF, salary, income tax, DSR, PCB, and BMI for Malaysians.",
    images: ["/og-image.png"],
  },
};

const guides = [
  {
    href: "/guides/epf-contribution-guide-malaysia",
    emoji: "🏦",
    title: "EPF Contribution Guide Malaysia 2024",
    description: "Contribution rates, the new 3-account structure (Akaun Persaraan, Sejahtera, Fleksibel), Basic Savings benchmarks, dividend history, and withdrawal rules.",
    category: "Retirement",
    categoryColor: "bg-teal-100 text-teal-700",
    readTime: "8 min",
    relatedCalc: { href: "/epf-calculator-malaysia", label: "EPF Calculator" },
    gradient: "from-teal-50 to-cyan-50",
    border: "border-teal-100",
  },
  {
    href: "/guides/how-to-calculate-salary-after-epf",
    emoji: "💰",
    title: "How to Calculate Take-Home Salary After EPF",
    description: "Step-by-step guide to EPF (11%), SOCSO, EIS, and PCB deductions with a worked example for a RM5,000 salary. Know what arrives in your bank account.",
    category: "Salary",
    categoryColor: "bg-sky-100 text-sky-700",
    readTime: "6 min",
    relatedCalc: { href: "/salary-calculator-malaysia", label: "Salary Calculator" },
    gradient: "from-sky-50 to-blue-50",
    border: "border-sky-100",
  },
  {
    href: "/guides/pcb-vs-income-tax-malaysia",
    emoji: "🧾",
    title: "PCB vs Income Tax Malaysia — What's the Difference?",
    description: "Confused about PCB and income tax? Learn how monthly MTD deductions relate to your annual LHDN liability, why you get refunds, and how TP1 declarations save you money.",
    category: "Tax",
    categoryColor: "bg-orange-100 text-orange-700",
    readTime: "7 min",
    relatedCalc: { href: "/pcb-calculator-malaysia", label: "PCB Calculator" },
    gradient: "from-orange-50 to-amber-50",
    border: "border-orange-100",
  },
  {
    href: "/guides/what-is-dsr-malaysia",
    emoji: "📊",
    title: "What Is DSR in Malaysia? Debt Service Ratio Explained",
    description: "DSR is the number banks look at before approving any loan. Learn how it's calculated, what the 60% and 70% thresholds mean, and 6 ways to improve your ratio.",
    category: "Loans",
    categoryColor: "bg-blue-100 text-blue-700",
    readTime: "5 min",
    relatedCalc: { href: "/dsr-calculator-malaysia", label: "DSR Calculator" },
    gradient: "from-blue-50 to-sky-50",
    border: "border-blue-100",
  },
  {
    href: "/guides/how-to-calculate-bmi-malaysia",
    emoji: "⚖️",
    title: "How to Calculate BMI in Malaysia — Asian Categories Explained",
    description: "Malaysia uses Asian-specific BMI cutoffs lower than the WHO standard. Learn the formula, what each category means, and the important limitations of BMI as a health metric.",
    category: "Health",
    categoryColor: "bg-green-100 text-green-700",
    readTime: "5 min",
    relatedCalc: { href: "/bmi-calculator", label: "BMI Calculator" },
    gradient: "from-green-50 to-emerald-50",
    border: "border-green-100",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Malaysian Finance & Health Guides",
  description: "Free guides on personal finance and health for Malaysians — EPF, salary, income tax, PCB, DSR, and BMI.",
  url: PAGE_URL,
  publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL },
  hasPart: guides.map((g) => ({
    "@type": "Article",
    headline: g.title,
    url: `${BASE_URL}${g.href}`,
    description: g.description,
  })),
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Guides", item: PAGE_URL },
    ],
  },
};

export default function GuidesIndexPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-gray-50">
        {/* Hero */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
            <span className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              {guides.length} Free Guides · Written for Malaysians
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Guides
            </h1>
            <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
              Plain-English explanations of Malaysian personal finance and health topics — EPF, salary deductions, income tax, loan eligibility, and more.
            </p>
          </div>
        </section>

        {/* Guide cards */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className={`group bg-gradient-to-br ${guide.gradient} rounded-2xl border ${guide.border} p-6 flex flex-col shadow-sm hover:shadow-md transition-all`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{guide.emoji}</span>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${guide.categoryColor}`}>
                      {guide.category}
                    </span>
                    <span className="text-xs text-gray-400 bg-white/70 px-2.5 py-1 rounded-full">
                      {guide.readTime}
                    </span>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors leading-snug">
                  {guide.title}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
                  {guide.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-600 group-hover:underline">
                    Read guide →
                  </span>
                  <span className="text-xs text-gray-400 bg-white/60 px-2.5 py-1 rounded-lg">
                    → {guide.relatedCalc.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Footer nav */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-base font-semibold text-gray-700 mb-1">Looking for a calculator?</h2>
              <p className="text-sm text-gray-500">All guides link to the relevant free calculator for instant results.</p>
            </div>
            <Link
              href="/calculators"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors flex-shrink-0"
            >
              Browse All Calculators →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
