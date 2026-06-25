import type { Metadata } from "next";
import { SITE_URL } from "@/lib/siteConfig";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SavingsCalculator from "./SavingsCalculator";
import CalcSeoSection from "@/components/CalcSeoSection";
import type { CalcFaq, RelatedCalc } from "@/components/CalcSeoSection";

export const metadata: Metadata = {
  title: "Savings Calculator Malaysia 2025 | Future Value, FD & Interest Earned",
  description:
    "Calculate how much your savings will grow in Malaysia. Compare fixed deposits, ASB, and savings accounts. Enter monthly savings, interest rate and years to see future value and total interest earned.",
  keywords: [
    "savings calculator Malaysia",
    "tabungan kalkulator",
    "FD calculator Malaysia",
    "savings interest calculator",
    "future value calculator",
    "fixed deposit calculator Malaysia",
    "how much to save Malaysia",
  ],
  alternates: { canonical: `${SITE_URL}/savings-calculator-malaysia` },
  openGraph: {
    title: "Savings Calculator Malaysia 2025 — Future Value & Interest Earned",
    description:
      "Calculate your savings future value with monthly deposits and compound interest. Compare FD, ASB, and savings account rates for Malaysian investors.",
    url: `${SITE_URL}/savings-calculator-malaysia`,
    siteName: "SmartCalc MY",
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Savings Calculator Malaysia",
    description: "Calculate savings future value and total interest earned over time in Malaysia.",
  },
};

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Savings Calculator Malaysia",
      url: `${SITE_URL}/savings-calculator-malaysia`,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      description: "Calculate savings future value and interest earned with monthly deposits for Malaysian savers.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "MYR" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Calculators", item: `${SITE_URL}/calculators` },
        { "@type": "ListItem", position: 3, name: "Savings Calculator", item: `${SITE_URL}/savings-calculator-malaysia` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What is the best savings account interest rate in Malaysia in 2025?", acceptedAnswer: { "@type": "Answer", text: "Standard savings account rates in Malaysia typically offer 0.5–1.8% p.a. Regular savings accounts at major banks (Maybank, CIMB, Public Bank, RHB) pay around 0.5–1.0%. High-yield savings accounts (e.g. CIMB eSaver, Maybank SaveUp) may offer 1.5–1.8% when conditions are met. For higher returns, fixed deposits typically offer 3.3–3.8% p.a. as of 2025." } },
        { "@type": "Question", name: "What is the difference between a savings account and a fixed deposit in Malaysia?", acceptedAnswer: { "@type": "Answer", text: "A savings account offers flexibility — you can deposit and withdraw anytime but earns lower interest (0.5–1.8%). A fixed deposit locks your money for a fixed tenure (1 month to 60 months) but pays higher interest (3.3–3.8%). FD interest is paid upon maturity. Both are protected by PIDM up to RM250,000." } },
        { "@type": "Question", name: "How much should I save each month in Malaysia?", acceptedAnswer: { "@type": "Answer", text: "A widely used guideline is the 50/30/20 rule: 50% on needs, 30% on wants, 20% on savings and debt repayment. For a RM4,000 take-home salary, aim to save at least RM800/month. Prioritise: emergency fund first (3–6 months expenses), then EPF voluntary contributions, then other investments. Use our Salary Calculator to determine your take-home pay first." } },
        { "@type": "Question", name: "How much emergency fund should I have in Malaysia?", acceptedAnswer: { "@type": "Answer", text: "Financial planners recommend 3–6 months of living expenses as an emergency fund. For someone spending RM3,000/month, that means RM9,000–RM18,000 set aside in a liquid, accessible account. Keep the emergency fund in a savings account or short-term FD — not invested in unit trusts where you might face losses when you need the money." } },
        { "@type": "Question", name: "Is ASB better than a fixed deposit for savings in Malaysia?", acceptedAnswer: { "@type": "Answer", text: "ASB (Amanah Saham Bumiputera) typically offers 4.5–5.5% annual dividend, significantly higher than fixed deposits at 3.3–3.8%. ASB funds are also highly liquid (no lock-in period) and protected by Amanah Saham's government-linked structure. However, ASB is only available to Bumiputera Malaysians. For non-Bumiputera, Amanah Saham Malaysia (ASM) offers similar terms." } },
        { "@type": "Question", name: "Does PIDM protect my savings in Malaysia?", acceptedAnswer: { "@type": "Answer", text: "Yes. Perbadanan Insurans Deposit Malaysia (PIDM) protects deposits up to RM250,000 per depositor per PIDM member bank. This covers savings accounts, current accounts, and fixed deposits. If you have more than RM250,000 to protect, spread it across different banks. All major Malaysian banks (Maybank, CIMB, Public Bank, etc.) are PIDM members." } },
        { "@type": "Question", name: "How do I save for a house down payment in Malaysia?", acceptedAnswer: { "@type": "Answer", text: "For a RM350,000 property (10% down = RM35,000): saving RM1,000/month in a 3.5% FD takes approximately 33 months (~2.8 years). Saving RM1,500/month shortens it to 22 months. Boost savings by: using EPF Account Flexible for part of the down payment, choosing a property in the RM300,000–RM400,000 range to qualify for PR1MA or MyHome schemes, and starting a dedicated savings account immediately." } },
        { "@type": "Question", name: "What is the best way to save money in Malaysia?", acceptedAnswer: { "@type": "Answer", text: "The most effective saving strategy in Malaysia: (1) Automate monthly transfers to a dedicated savings account on salary day — pay yourself first. (2) Keep emergency funds in a high-yield savings account. (3) Lock excess savings in 3–12 month FDs for higher returns. (4) Make voluntary EPF top-ups for retirement (tax deductible). (5) Consider ASB/ASM for medium-term savings if eligible." } },
        { "@type": "Question", name: "How does inflation affect savings in Malaysia?", acceptedAnswer: { "@type": "Answer", text: "Malaysia's average inflation rate has ranged from 2–3% per year over the past decade. If your savings account pays 1% but inflation is 3%, your real return is -2% — your purchasing power shrinks. This is why keeping long-term savings in standard savings accounts is inadvisable. Fixed deposits (3.3–3.8%) slightly outpace inflation, but EPF (5–6%) meaningfully grows real wealth over time." } },
        { "@type": "Question", name: "What is a good savings goal amount for Malaysians?", acceptedAnswer: { "@type": "Answer", text: "Common savings benchmarks for Malaysians: Emergency fund = 3–6 months expenses (RM9k–RM20k for most). First car down payment = RM5,000–RM15,000. House down payment = RM30,000–RM80,000 (10% of RM300k–RM800k). Child education fund at 18 = RM150,000–RM300,000. Retirement = 25× annual expenses at retirement (e.g. RM30k/year × 25 = RM750,000). Use this calculator to find your monthly savings target for each goal." } },
      ],
    },
  ],
};

const faqs: CalcFaq[] = [
  { q: "What is the best savings account interest rate in Malaysia in 2025?", a: "Standard savings account rates typically offer 0.5–1.8% p.a. Regular accounts at major banks pay around 0.5–1.0%. High-yield savings accounts (e.g. CIMB eSaver, Maybank SaveUp) may offer 1.5–1.8% with conditions. Fixed deposits typically offer 3.3–3.8% p.a. for higher returns." },
  { q: "What is the difference between a savings account and fixed deposit in Malaysia?", a: "A savings account offers full flexibility — deposit and withdraw anytime but earns lower interest (0.5–1.8%). A fixed deposit locks money for a fixed tenure (1–60 months) but pays higher interest (3.3–3.8%). Both are protected by PIDM up to RM250,000 per depositor per bank." },
  { q: "How much should I save each month in Malaysia?", a: "A common guideline: 50% on needs, 30% on wants, 20% on savings. For RM4,000 take-home pay, aim to save at least RM800/month. Prioritise: emergency fund first (3–6 months expenses), then EPF voluntary top-ups, then other investments. Use our Salary Calculator to find your exact take-home pay." },
  { q: "How much emergency fund should I have in Malaysia?", a: "Financial planners recommend 3–6 months of living expenses. For someone spending RM3,000/month, that means RM9,000–RM18,000 in a liquid, accessible account. Keep this in a savings account or short-term FD — not unit trusts where you might face losses when you need the money urgently." },
  { q: "Is ASB better than a fixed deposit for savings in Malaysia?", a: "ASB typically offers 4.5–5.5% annual dividend — significantly higher than FD at 3.3–3.8%. ASB also has no lock-in and is highly liquid. However, ASB is only available to Bumiputera. For non-Bumiputera, Amanah Saham Malaysia (ASM) offers similar terms." },
  { q: "Does PIDM protect my savings in Malaysia?", a: "Yes. PIDM protects deposits up to RM250,000 per depositor per PIDM member bank. This covers savings accounts, current accounts, and FDs. If you have more than RM250,000, spread it across different banks. All major Malaysian banks are PIDM members." },
  { q: "How do I save for a house down payment in Malaysia?", a: "For a RM350,000 property (10% down = RM35,000): saving RM1,000/month in a 3.5% FD takes ~33 months. Saving RM1,500/month shortens it to ~22 months. You can also use EPF Account Flexible for part of the down payment." },
  { q: "What is the best way to save money in Malaysia?", a: "Most effective strategy: (1) Automate monthly transfers to savings on salary day. (2) Keep emergency funds in a high-yield savings account. (3) Lock excess savings in 3–12 month FDs. (4) Make voluntary EPF top-ups (tax deductible up to RM4,000). (5) Consider ASB/ASM if eligible." },
  { q: "How does inflation affect savings in Malaysia?", a: "Malaysia's average inflation has been 2–3% per year. If your savings account pays 1% but inflation is 3%, your real return is -2% — purchasing power shrinks. Fixed deposits (3.3–3.8%) slightly beat inflation; EPF (5–6%) meaningfully grows real wealth. Long-term savings in regular savings accounts lose value in real terms." },
  { q: "What is a good savings goal amount for Malaysians?", a: "Common benchmarks: Emergency fund = RM9k–RM20k (3–6 months expenses). Car down payment = RM5k–RM15k. House down payment = RM30k–RM80k. Child education at 18 = RM150k–RM300k. Retirement = 25× annual expenses at retirement. Use this calculator to find your monthly savings target for each goal." },
];

const relatedCalcs: RelatedCalc[] = [
  { href: "/compound-interest-calculator", title: "Compound Interest Calculator", emoji: "📈", desc: "See how investments grow over time" },
  { href: "/epf-calculator-malaysia", title: "EPF Calculator", emoji: "🏛️", desc: "Project your EPF retirement savings" },
  { href: "/salary-calculator-malaysia", title: "Salary Calculator", emoji: "💰", desc: "Calculate how much you can save monthly" },
  { href: "/income-tax-calculator-malaysia", title: "Income Tax Calculator", emoji: "📋", desc: "Find tax savings from EPF voluntary top-ups" },
  { href: "/mortgage-calculator-malaysia", title: "Mortgage Calculator", emoji: "🏠", desc: "Plan savings for a house down payment" },
  { href: "/car-loan-calculator-malaysia", title: "Car Loan Calculator", emoji: "🚗", desc: "Compare loan cost vs saving up" },
  { href: "/dsr-calculator-malaysia", title: "DSR Calculator", emoji: "📊", desc: "Check your loan eligibility ratio" },
  { href: "/currency-converter-malaysia", title: "Currency Converter", emoji: "💱", desc: "Convert MYR savings to foreign currencies" },
];

export default function SavingsPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />

      <div className="bg-gradient-to-br from-sky-50 to-blue-50 border-b border-sky-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <a href="/" className="hover:text-sky-600 transition-colors">Home</a>
            <span>/</span>
            <a href="/calculators" className="hover:text-sky-600 transition-colors">Calculators</a>
            <span>/</span>
            <span className="text-gray-800 font-medium">Savings</span>
          </nav>
          <div className="text-4xl mb-4">🏦</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Savings Calculator Malaysia
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl">
            Calculate how much your savings will grow. Enter your monthly savings, interest rate and number of years to see your future value, total deposited and total interest earned.
          </p>
        </div>
      </div>

      <SavingsCalculator />

      <CalcSeoSection faqs={faqs} relatedCalcs={relatedCalcs}>
        {/* EEAT Author Box */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-800">Written by <a href="/author/alvin-chan" className="text-sky-600 hover:underline">Alvin Chan</a></p>
              <p className="text-xs text-gray-500 mt-0.5">Reviewed by the SmartCalc Editorial Team · Last updated: 25 June 2025</p>
              <p className="text-xs text-gray-400 mt-0.5">Sources: Bank Negara Malaysia, PIDM, EPF, ASNB</p>
            </div>
          </div>
        </div>

        <div className="prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Complete Malaysian Savings Guide (2025)</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Saving money in Malaysia is not complicated — but choosing the right vehicle, understanding how interest compounds, and setting realistic targets based on your income makes the difference between reaching your goals and perpetually deferring them. This guide covers three common Malaysian savings scenarios with full worked examples, a comparison of all major savings products, PIDM deposit insurance, and a practical savings ladder for different life stages.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Three Worked Examples — Real Malaysian Savings Goals</h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Example 1: Building a RM18,000 Emergency Fund</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            Scenario: You spend RM3,000/month and want 6 months of expenses (RM18,000) as an emergency fund. You can save RM600/month in a high-yield savings account at 1.8% p.a.
          </p>
          <div className="bg-sky-50 border border-sky-100 rounded-xl p-5 mb-3 text-sm font-mono text-gray-700">
            <p>Monthly savings: RM600 | Rate: 1.8% p.a. (0.15%/month)</p>
            <p>Months to reach RM18,000 = ~29 months (~2.4 years)</p>
            <p>Total deposited: RM600 × 29 = RM17,400</p>
            <p>Interest earned: ~RM600</p>
            <p>Final balance: <strong>~RM18,000 ✓</strong></p>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Tip: Save your emergency fund in a <strong>separate named account</strong> — not your everyday account — to reduce the temptation to spend it. Use a high-yield savings account rather than a fixed deposit so it remains accessible in an emergency. Check the <a href="https://www.pidm.gov.my" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">PIDM member list</a> to confirm your bank is covered.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Example 2: House Down Payment — RM35,000 in 3 Years</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            Scenario: You want to buy a RM350,000 property and need a 10% down payment (RM35,000) plus an estimated RM10,000 for legal fees and stamp duty. Total target: RM45,000 in 36 months.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-3 text-sm">
            <div className="grid grid-cols-2 gap-2 text-gray-700">
              <span className="font-medium">Target amount:</span><span>RM 45,000</span>
              <span className="font-medium">Timeline:</span><span>36 months (3 years)</span>
              <span className="font-medium">Strategy:</span><span>6-month rolling FD at 3.6% p.a.</span>
            </div>
          </div>
          <div className="bg-sky-50 border border-sky-100 rounded-xl p-5 mb-6 text-sm font-mono text-gray-700">
            <p>Required monthly savings: <strong>~RM1,192/month</strong></p>
            <p>Total deposited: RM1,192 × 36 = RM42,912</p>
            <p>Interest earned (approx): RM2,088</p>
            <p>Final balance: <strong>~RM45,000 ✓</strong></p>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Use our <a href="/mortgage-calculator-malaysia" className="text-sky-600 hover:underline">Mortgage Calculator</a> to confirm the property is affordable once purchased. Also verify your <a href="/dsr-calculator-malaysia" className="text-sky-600 hover:underline">DSR</a> against the expected monthly repayment before committing to a property price target.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mb-3">Example 3: Education Fund — RM100,000 in 15 Years</h3>
          <p className="text-gray-600 leading-relaxed mb-3">
            Scenario: Your child is 3 years old. You want RM100,000 for their university costs at age 18 (15 years from now). Strategy: monthly savings in a balanced unit trust at an average 6% p.a.
          </p>
          <div className="bg-sky-50 border border-sky-100 rounded-xl p-5 mb-6 text-sm font-mono text-gray-700">
            <p>Required monthly savings to reach RM100,000 at 6% over 15 years:</p>
            <p><strong>~RM348/month</strong></p>
            <p>Total deposited: RM348 × 180 = RM62,640</p>
            <p>Growth (compound interest): RM37,360</p>
            <p>Final balance: <strong>RM100,000 ✓</strong></p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Comparison Table 1: Fixed Deposit vs Savings Account in Malaysia</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Feature</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold text-sky-700">Savings Account</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold text-blue-700">Fixed Deposit</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Typical rate (2025)", "0.5–1.8% p.a.", "3.3–3.8% p.a."],
                  ["Minimum deposit", "RM0–RM50", "RM500–RM1,000"],
                  ["Liquidity", "Full (withdraw anytime)", "Locked until maturity"],
                  ["Early withdrawal penalty", "None", "Loss of some or all interest"],
                  ["Compounding frequency", "Monthly / quarterly", "Monthly, quarterly or at maturity"],
                  ["PIDM protection", "Yes (up to RM250k)", "Yes (up to RM250k)"],
                  ["Best for", "Emergency fund, daily savings", "Short-to-medium term goals"],
                  ["Available at", "All banks", "All banks"],
                ].map(([f, a, b]) => (
                  <tr key={f} className="border border-gray-200">
                    <td className="p-3 font-medium text-gray-700">{f}</td>
                    <td className="p-3 text-right text-gray-600">{a}</td>
                    <td className="p-3 text-right text-gray-600">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Comparison Table 2: Malaysian Savings Products at a Glance</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-3 border border-gray-200 font-semibold">Product</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold">Rate (2025)</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold">Liquidity</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold">Who</th>
                  <th className="text-right p-3 border border-gray-200 font-semibold">Protection</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Regular Savings Acct", "0.5–1.0%", "Full", "All", "PIDM"],
                  ["High-Yield Savings Acct", "1.2–1.8%", "Full", "All", "PIDM"],
                  ["Fixed Deposit (1–12 mth)", "3.3–3.8%", "Locked", "All", "PIDM"],
                  ["ASB", "~5.0–5.5%", "Full", "Bumiputera", "Govt-linked"],
                  ["ASM (non-Bumi)", "~4.5–5.0%", "Full", "All Msian", "Govt-linked"],
                  ["EPF voluntary top-up", "~5.5%", "Restricted", "EPF members", "Govt"],
                  ["Balanced Unit Trust", "5–7% (variable)", "T+3 days", "All", "SC regulation"],
                ].map(([p, r, l, w, prot]) => (
                  <tr key={p} className="border border-gray-200">
                    <td className="p-3 font-medium text-gray-700">{p}</td>
                    <td className="p-3 text-right text-sky-600 font-semibold">{r}</td>
                    <td className="p-3 text-right text-gray-600">{l}</td>
                    <td className="p-3 text-right text-gray-500">{w}</td>
                    <td className="p-3 text-right text-gray-500">{prot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">PIDM Deposit Insurance — What It Covers</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            <a href="https://www.pidm.gov.my" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">Perbadanan Insurans Deposit Malaysia (PIDM)</a> provides automatic protection for deposits at member banks. Key facts:
          </p>
          <ul className="text-gray-600 space-y-2 mb-6">
            <li className="flex gap-2"><span className="text-sky-600 font-bold">•</span><span>Maximum coverage: <strong>RM250,000 per depositor per member institution</strong></span></li>
            <li className="flex gap-2"><span className="text-sky-600 font-bold">•</span><span>Coverage is per institution — deposits at two different banks are each covered up to RM250,000</span></li>
            <li className="flex gap-2"><span className="text-sky-600 font-bold">•</span><span>Covers: savings accounts, current accounts, fixed deposits in MYR</span></li>
            <li className="flex gap-2"><span className="text-sky-600 font-bold">•</span><span>Does NOT cover: unit trusts, bonds, equities, foreign currency deposits at some institutions</span></li>
            <li className="flex gap-2"><span className="text-sky-600 font-bold">•</span><span>All major Malaysian banks (Maybank, CIMB, Public Bank, RHB, AmBank, etc.) are PIDM members</span></li>
          </ul>
          <p className="text-gray-600 leading-relaxed mb-6">
            If you have more than RM250,000 to protect, split deposits across two or more PIDM member banks. A couple can also hold deposits jointly — joint account holders may receive separate coverage depending on account structure.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Malaysian Savings Ladder</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A savings ladder allocates your savings to the right product at each life stage based on time horizon and risk tolerance:
          </p>
          <div className="space-y-3 mb-8">
            {[
              { tier: "Tier 1 — Emergency Fund (0–12 months)", rate: "1.2–1.8%", vehicle: "High-yield savings account", purpose: "Liquid, safe, accessible within hours. Target: 3–6 months expenses." },
              { tier: "Tier 2 — Short-Term Goals (1–3 years)", rate: "3.3–3.8%", vehicle: "Fixed deposit (3, 6 or 12 months)", purpose: "House down payment, car down payment, wedding fund. Lock-in is acceptable because goal date is known." },
              { tier: "Tier 3 — Medium-Term Goals (3–10 years)", rate: "4.5–6.0%", vehicle: "ASB/ASM, EPF voluntary top-up, Amanah Saham", purpose: "Education fund, property upgrade. Moderate return, government-backed." },
              { tier: "Tier 4 — Long-Term Wealth (10+ years)", rate: "6–10% (variable)", vehicle: "Equity unit trusts, PRS, additional EPF", purpose: "Retirement, generational wealth. Higher volatility is acceptable over 10+ year horizon." },
            ].map((t) => (
              <div key={t.tier} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <span className="font-bold text-sm text-gray-800">{t.tier}</span>
                  <span className="text-xs text-sky-600 font-semibold bg-sky-50 border border-sky-100 px-2 py-0.5 rounded-full">{t.rate}</span>
                </div>
                <p className="text-xs text-gray-500 mb-1"><strong>Vehicle:</strong> {t.vehicle}</p>
                <p className="text-xs text-gray-600">{t.purpose}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Voluntary EPF Top-Up — The Tax-Efficient Savings Hack</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Malaysian income tax relief allows up to <strong>RM4,000 per year</strong> for voluntary EPF contributions (Caruman Pilihan). If you are in the 13% tax bracket, RM4,000 voluntary EPF contribution saves RM520 in income tax annually — in addition to earning EPF&apos;s historical 5–6% dividend. This makes voluntary EPF one of the best after-tax savings vehicles in Malaysia. Use our <a href="/income-tax-calculator-malaysia" className="text-sky-600 hover:underline">Income Tax Calculator</a> to see your exact tax saving, and our <a href="/epf-calculator-malaysia" className="text-sky-600 hover:underline">EPF Calculator</a> to model the long-term growth.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-Life Savings Scenarios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { scenario: "Fresh Graduate (RM2,800 take-home)", goal: "RM9,000 emergency fund", strategy: "Save RM400/month in CIMB eSaver at 1.5%. Done in ~22 months. Then redirect RM400 to FD for house deposit.", link: "/guides/rm3000-salary-budget-plan-malaysia", linkText: "RM3k budget plan →" },
              { scenario: "Young Professional (RM5,000 take-home)", goal: "House deposit + retirement", strategy: "RM1,200/month to FD for house (3yr). RM300/month voluntary EPF top-up. After buying house, redirect FD savings to unit trusts.", link: "/guides/salary-rm5000-budget-plan-malaysia", linkText: "RM5k budget plan →" },
              { scenario: "Family (RM10,000 combined)", goal: "Children education + retirement", strategy: "RM500/month to Amanah Saham for education. RM800/month voluntary EPF. Keep 6-month emergency fund in FD.", link: "/guides/how-to-save-first-rm10000-malaysia", linkText: "First RM10k guide →" },
            ].map((s) => (
              <div key={s.scenario} className="bg-sky-50 border border-sky-100 rounded-xl p-4">
                <p className="font-bold text-gray-800 text-sm mb-1">{s.scenario}</p>
                <p className="text-xs text-sky-700 font-medium mb-2">{s.goal}</p>
                <p className="text-gray-600 text-xs leading-relaxed mb-2">{s.strategy}</p>
                <a href={s.link} className="text-xs text-sky-600 hover:underline font-medium">{s.linkText}</a>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              { href: "/guides/emergency-fund-malaysia", title: "Emergency Fund Guide Malaysia", desc: "How much to save and where to keep it" },
              { href: "/guides/how-much-emergency-fund-malaysia", title: "How Much Emergency Fund?", desc: "Calculate your exact emergency fund target" },
              { href: "/guides/best-savings-accounts-malaysia", title: "Best Savings Accounts Malaysia", desc: "Highest-yield savings accounts compared for 2025" },
              { href: "/guides/fixed-deposit-vs-epf-malaysia", title: "Fixed Deposit vs EPF", desc: "Which is better for your surplus savings?" },
              { href: "/guides/how-to-save-first-rm10000-malaysia", title: "How to Save Your First RM10,000", desc: "Step-by-step guide for early-career Malaysians" },
              { href: "/guides/salary-rm4000-budget-plan-malaysia", title: "RM4,000 Salary Budget Plan", desc: "Monthly budget allocation at RM4,000 take-home" },
            ].map((g) => (
              <a key={g.href} href={g.href} className="flex flex-col bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 hover:border-sky-200 hover:bg-sky-50 transition-colors">
                <span className="font-semibold text-sm text-gray-800">{g.title}</span>
                <span className="text-xs text-gray-500 mt-0.5">{g.desc}</span>
              </a>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Official References</h2>
          <ul className="text-sm text-gray-600 space-y-2">
            <li><a href="https://www.bnm.gov.my" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline font-medium">Bank Negara Malaysia (BNM)</a> — Savings account and FD interest rate data, consumer credit guidelines</li>
            <li><a href="https://www.pidm.gov.my" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline font-medium">Perbadanan Insurans Deposit Malaysia (PIDM)</a> — Deposit insurance coverage, member bank list</li>
            <li><a href="https://www.asnb.com.my" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline font-medium">Amanah Saham Nasional Berhad (ASNB)</a> — ASB, ASM, ASN fund performance and dividend history</li>
            <li><a href="https://www.kwsp.gov.my" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline font-medium">Kumpulan Wang Simpanan Pekerja (EPF/KWSP)</a> — Voluntary contribution guidelines and tax relief</li>
          </ul>
        </div>
      </CalcSeoSection>
      <Footer />
    </>
  );
}
