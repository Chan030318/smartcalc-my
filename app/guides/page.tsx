import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides`;

export const metadata: Metadata = {
  title: "Free Malaysian Finance & Health Guides — SmartCalc MY",
  description:
    "24 free guides on Malaysian personal finance and health — EPF, salary, income tax, DSR, housing loans, credit scores, car loans, personal loans, emergency fund, and more. Plain English, written for Malaysians.",
  keywords: [
    "Malaysia finance guide",
    "EPF guide Malaysia",
    "salary deduction guide Malaysia",
    "income tax guide Malaysia",
    "DSR guide Malaysia",
    "housing loan guide Malaysia",
    "personal finance Malaysia",
    "panduan kewangan Malaysia",
  ],
  alternates: { canonical: "/guides" },
  openGraph: {
    title: "Free Malaysian Finance & Health Guides — SmartCalc MY",
    description: "15 free guides on EPF, salary, income tax, DSR, housing loans, and more — written for Malaysians.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "SmartCalc MY Guides" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Malaysian Finance & Health Guides — SmartCalc MY",
    description: "24 free guides on EPF, salary, income tax, DSR, housing loans, credit scores, car loans, and more for Malaysians.",
    images: ["/og-image.png"],
  },
};

type Guide = {
  href: string;
  emoji: string;
  title: string;
  description: string;
  category: string;
  categoryColor: string;
  readTime: string;
  gradient: string;
  border: string;
};

const categories: { id: string; label: string; guides: Guide[] }[] = [
  {
    id: "retirement",
    label: "Retirement & EPF",
    guides: [
      {
        href: "/guides/epf-contribution-guide-malaysia",
        emoji: "🏦",
        title: "EPF Contribution Guide Malaysia 2024",
        description: "Contribution rates, the 3-account structure (Akaun Persaraan, Sejahtera, Fleksibel), Basic Savings benchmarks, dividend history, and withdrawal rules.",
        category: "Retirement", categoryColor: "bg-teal-100 text-teal-700", readTime: "8 min",
        gradient: "from-teal-50 to-cyan-50", border: "border-teal-100",
      },
      {
        href: "/guides/how-much-epf-at-30-malaysia",
        emoji: "📈",
        title: "How Much EPF Should I Have at 30?",
        description: "Official benchmarks vs what you actually need, the compounding math, and 6 ways to grow your EPF balance faster if you're behind.",
        category: "Retirement", categoryColor: "bg-teal-100 text-teal-700", readTime: "8 min",
        gradient: "from-teal-50 to-emerald-50", border: "border-teal-100",
      },
      {
        href: "/guides/epf-withdrawal-guide-malaysia",
        emoji: "💳",
        title: "EPF Withdrawal Guide Malaysia 2024",
        description: "Every withdrawal type — Akaun Fleksibel (any time), Akaun Sejahtera (housing/education/medical), and retirement at age 55. When, how, and what to consider.",
        category: "Retirement", categoryColor: "bg-teal-100 text-teal-700", readTime: "9 min",
        gradient: "from-teal-50 to-cyan-50", border: "border-teal-100",
      },
    ],
  },
  {
    id: "salary-tax",
    label: "Salary & Tax",
    guides: [
      {
        href: "/guides/how-to-calculate-salary-after-epf",
        emoji: "💰",
        title: "How to Calculate Take-Home Salary After EPF",
        description: "Step-by-step guide to EPF (11%), SOCSO, EIS, and PCB deductions with a worked example for a RM5,000 salary.",
        category: "Salary", categoryColor: "bg-sky-100 text-sky-700", readTime: "6 min",
        gradient: "from-sky-50 to-blue-50", border: "border-sky-100",
      },
      {
        href: "/guides/salary-deductions-explained-malaysia",
        emoji: "🧮",
        title: "Malaysian Salary Deductions Explained — EPF, SOCSO, EIS, PCB",
        description: "What each deduction is for, who benefits, how rates are calculated, and how to verify your employer is contributing correctly.",
        category: "Salary", categoryColor: "bg-sky-100 text-sky-700", readTime: "7 min",
        gradient: "from-sky-50 to-blue-50", border: "border-sky-100",
      },
      {
        href: "/guides/pcb-vs-income-tax-malaysia",
        emoji: "🧾",
        title: "PCB vs Income Tax Malaysia — What's the Difference?",
        description: "PCB is prepaid income tax. Learn how monthly MTD deductions relate to your annual LHDN liability, why you get refunds, and how TP1 saves you money.",
        category: "Tax", categoryColor: "bg-orange-100 text-orange-700", readTime: "7 min",
        gradient: "from-orange-50 to-amber-50", border: "border-orange-100",
      },
      {
        href: "/guides/how-pcb-tax-works-malaysia",
        emoji: "📋",
        title: "How PCB Tax Works in Malaysia",
        description: "The PCB calculation formula, what factors affect your monthly amount, TP1 declarations, CP38 notices, and Zakat rebate explained step by step.",
        category: "Tax", categoryColor: "bg-indigo-100 text-indigo-700", readTime: "8 min",
        gradient: "from-indigo-50 to-violet-50", border: "border-indigo-100",
      },
      {
        href: "/guides/how-to-reduce-income-tax-malaysia",
        emoji: "📉",
        title: "How to Reduce Income Tax Legally in Malaysia (YA 2024)",
        description: "Every LHDN tax relief for 2024 — EPF, PRS, medical, lifestyle, family, donations, Zakat. Reference table with amounts, eligibility, and tips.",
        category: "Tax", categoryColor: "bg-orange-100 text-orange-700", readTime: "10 min",
        gradient: "from-orange-50 to-amber-50", border: "border-orange-100",
      },
    ],
  },
  {
    id: "loans-housing",
    label: "Loans & Housing",
    guides: [
      {
        href: "/guides/what-salary-to-afford-house-malaysia",
        emoji: "🏠",
        title: "What Salary Do You Need to Afford a House in Malaysia?",
        description: "The 3× rule, bank DSR limits, income-to-property price table, hidden upfront costs, and first-home buyer schemes like My First Home and PR1MA.",
        category: "Housing", categoryColor: "bg-purple-100 text-purple-700", readTime: "9 min",
        gradient: "from-purple-50 to-violet-50", border: "border-purple-100",
      },
      {
        href: "/guides/housing-loan-eligibility-malaysia",
        emoji: "🏦",
        title: "Housing Loan Eligibility Malaysia — What Banks Check",
        description: "The 8 eligibility criteria banks assess — DSR, CCRIS, CTOS, income documentation, LTV, tenure, and more. Includes a worked DSR example.",
        category: "Housing", categoryColor: "bg-emerald-100 text-emerald-700", readTime: "9 min",
        gradient: "from-emerald-50 to-green-50", border: "border-emerald-100",
      },
      {
        href: "/guides/how-to-improve-loan-approval-malaysia",
        emoji: "✅",
        title: "How to Improve Loan Approval Chances in Malaysia",
        description: "12 concrete steps — DSR reduction, CCRIS clean-up, CTOS check, income documentation, timing your application, and bank selection strategies.",
        category: "Loans", categoryColor: "bg-blue-100 text-blue-700", readTime: "9 min",
        gradient: "from-blue-50 to-sky-50", border: "border-blue-100",
      },
      {
        href: "/guides/personal-loan-vs-housing-loan-malaysia",
        emoji: "⚖️",
        title: "Personal Loan vs Housing Loan Malaysia",
        description: "Interest rates, tenure, collateral, total cost, and DSR impact compared. Includes flat vs reducing balance explained and when to use each loan type.",
        category: "Loans", categoryColor: "bg-violet-100 text-violet-700", readTime: "8 min",
        gradient: "from-violet-50 to-purple-50", border: "border-violet-100",
      },
      {
        href: "/guides/what-is-dsr-malaysia",
        emoji: "📊",
        title: "What Is DSR in Malaysia? Debt Service Ratio Explained",
        description: "DSR formula, 60%/70% bank thresholds, what counts as a commitment, gross vs net income, and 6 ways to improve your ratio before applying.",
        category: "Loans", categoryColor: "bg-blue-100 text-blue-700", readTime: "5 min",
        gradient: "from-blue-50 to-sky-50", border: "border-blue-100",
      },
    ],
  },
  {
    id: "health",
    label: "Health",
    guides: [
      {
        href: "/guides/how-to-calculate-bmi-malaysia",
        emoji: "⚖️",
        title: "How to Calculate BMI in Malaysia — Asian Categories Explained",
        description: "The BMI formula, why Malaysia uses lower Asian thresholds vs the WHO standard, what each category means, and the limitations of BMI as a health metric.",
        category: "Health", categoryColor: "bg-green-100 text-green-700", readTime: "5 min",
        gradient: "from-green-50 to-emerald-50", border: "border-green-100",
      },
    ],
  },
  {
    id: "social-security",
    label: "SOCSO & EIS",
    guides: [
      {
        href: "/guides/socso-contribution-table-malaysia",
        emoji: "🛡️",
        title: "SOCSO Contribution Table Malaysia 2026 — First & Second Category",
        description: "Complete SOCSO (PERKESO) contribution table for 2026 with all 15 salary brackets, employee and employer rates for First and Second Category, and what your contributions cover.",
        category: "SOCSO", categoryColor: "bg-rose-100 text-rose-700", readTime: "7 min",
        gradient: "from-rose-50 to-pink-50", border: "border-rose-100",
      },
      {
        href: "/guides/eis-contribution-table-malaysia",
        emoji: "🛟",
        title: "EIS Contribution Table Malaysia 2026 — Full Rate Table",
        description: "Complete EIS (SIP) contribution table for 2026. Every wage bracket from RM300 to RM4,000, employee and employer rates, wage ceiling, and how EIS compares to SOCSO and EPF.",
        category: "EIS", categoryColor: "bg-amber-100 text-amber-700", readTime: "6 min",
        gradient: "from-amber-50 to-yellow-50", border: "border-amber-100",
      },
    ],
  },
  {
    id: "retirement-advanced",
    label: "EPF & Retirement (Advanced)",
    guides: [
      {
        href: "/guides/epf-dividend-history-malaysia",
        emoji: "📊",
        title: "EPF Dividend History Malaysia 2026 — KWSP Rates Since 1983",
        description: "Every EPF dividend rate from 1983 to 2024 — conventional and Syariah. Why rates change each year, how dividends compound, and what historical returns mean for retirement.",
        category: "Retirement", categoryColor: "bg-teal-100 text-teal-700", readTime: "9 min",
        gradient: "from-teal-50 to-cyan-50", border: "border-teal-100",
      },
    ],
  },
  {
    id: "credit-scores",
    label: "Credit Scores & Reports",
    guides: [
      {
        href: "/guides/how-to-check-ccris-malaysia",
        emoji: "📋",
        title: "How to Check Your CCRIS Report Malaysia (2026 Guide)",
        description: "Step-by-step guide to accessing your free CCRIS report via BNM eCCRIS, what each section shows, how lenders use it, and how to dispute errors.",
        category: "Credit", categoryColor: "bg-blue-100 text-blue-700", readTime: "8 min",
        gradient: "from-blue-50 to-sky-50", border: "border-blue-100",
      },
      {
        href: "/guides/how-to-improve-ctos-score-malaysia",
        emoji: "📈",
        title: "How to Improve Your CTOS Score Malaysia (2026)",
        description: "CTOS score range 300–850 explained. What factors affect your score, 8 proven strategies to improve it, and how long improvement takes before a loan application.",
        category: "Credit", categoryColor: "bg-purple-100 text-purple-700", readTime: "9 min",
        gradient: "from-purple-50 to-violet-50", border: "border-purple-100",
      },
    ],
  },
  {
    id: "loans-property-advanced",
    label: "Loans & Property (More Guides)",
    guides: [
      {
        href: "/guides/first-home-buyer-guide-malaysia",
        emoji: "🏡",
        title: "First Home Buyer Guide Malaysia 2026 — Step-by-Step",
        description: "Complete first-time buyer guide. PR1MA, My First Home Scheme, SJKP, stamp duty exemptions, the full 7-step buying process, and all upfront costs explained.",
        category: "Housing", categoryColor: "bg-green-100 text-green-700", readTime: "11 min",
        gradient: "from-green-50 to-emerald-50", border: "border-green-100",
      },
      {
        href: "/guides/car-loan-eligibility-malaysia",
        emoji: "🚗",
        title: "Car Loan Eligibility Malaysia 2026 — Hire Purchase Guide",
        description: "How banks assess hire purchase eligibility, what the flat interest rate really costs you, new vs used car loan differences, and how to calculate your monthly instalment.",
        category: "Loans", categoryColor: "bg-orange-100 text-orange-700", readTime: "8 min",
        gradient: "from-orange-50 to-amber-50", border: "border-orange-100",
      },
      {
        href: "/guides/personal-loan-guide-malaysia",
        emoji: "💳",
        title: "Personal Loan Malaysia 2026 — Rates, Eligibility & How to Choose",
        description: "Personal loan rates by lender type, flat rate vs EIR explained, eligibility criteria, how much you can borrow, and when a personal loan is a good financial decision.",
        category: "Loans", categoryColor: "bg-indigo-100 text-indigo-700", readTime: "9 min",
        gradient: "from-indigo-50 to-blue-50", border: "border-indigo-100",
      },
    ],
  },
  {
    id: "budgeting",
    label: "Budgeting & Savings",
    guides: [
      {
        href: "/guides/emergency-fund-malaysia",
        emoji: "🛡️",
        title: "Emergency Fund Malaysia 2026 — How Much to Save & Where to Keep It",
        description: "How many months of expenses you need, how to calculate your target amount, and the best places to park your emergency fund in Malaysia for liquidity and decent returns.",
        category: "Savings", categoryColor: "bg-cyan-100 text-cyan-700", readTime: "8 min",
        gradient: "from-cyan-50 to-teal-50", border: "border-cyan-100",
      },
      {
        href: "/guides/rm3000-salary-budget-plan-malaysia",
        emoji: "📝",
        title: "RM3,000 Salary Budget Plan Malaysia 2026",
        description: "Exact take-home pay after EPF, SOCSO, EIS, and PCB deductions. A realistic RM3,000 monthly budget with allocation table, 50/30/20 framework, and savings priorities.",
        category: "Budgeting", categoryColor: "bg-violet-100 text-violet-700", readTime: "9 min",
        gradient: "from-violet-50 to-purple-50", border: "border-violet-100",
      },
    ],
  },
];

const allGuides = categories.flatMap(c => c.guides);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Free Malaysian Finance & Health Guides",
  description: "24 free guides on personal finance and health for Malaysians — EPF, salary, income tax, DSR, housing loans, credit scores, car loans, emergency fund, budgeting, and more.",
  url: PAGE_URL,
  publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL },
  hasPart: allGuides.map(g => ({
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
              {allGuides.length} Free Guides · Written for Malaysians · No sign-up
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Guides</h1>
            <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
              Plain-English explanations of Malaysian personal finance and health — EPF, salary deductions, income tax, loan eligibility, and more.
            </p>
            {/* Category jump links */}
            <div className="flex flex-wrap justify-center gap-2 mt-6">
              {categories.map(cat => (
                <a key={cat.id} href={`#${cat.id}`} className="text-xs font-medium px-3 py-1.5 bg-gray-100 hover:bg-blue-50 hover:text-blue-700 rounded-full text-gray-600 transition-colors">
                  {cat.label} ({cat.guides.length})
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Category sections */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
          {categories.map(cat => (
            <section key={cat.id} id={cat.id}>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-xl font-bold text-gray-900">{cat.label}</h2>
                <span className="text-xs text-gray-400 font-medium bg-gray-100 px-2.5 py-1 rounded-full">{cat.guides.length} guides</span>
                <div className="flex-1 h-px bg-gray-100" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {cat.guides.map(guide => (
                  <Link
                    key={guide.href}
                    href={guide.href}
                    className={`group bg-gradient-to-br ${guide.gradient} rounded-2xl border ${guide.border} p-6 flex flex-col shadow-sm hover:shadow-md transition-all`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-2xl">{guide.emoji}</span>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${guide.categoryColor}`}>{guide.category}</span>
                        <span className="text-xs text-gray-400 bg-white/70 px-2.5 py-1 rounded-full">{guide.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors leading-snug">
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">{guide.description}</p>
                    <span className="text-sm font-semibold text-blue-600 group-hover:underline">Read guide →</span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA to calculators */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-base font-semibold text-gray-700 mb-1">Looking for a calculator?</h2>
              <p className="text-sm text-gray-500">Every guide links to the relevant free calculator for instant results.</p>
            </div>
            <Link href="/calculators" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors flex-shrink-0">
              Browse All Calculators →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
