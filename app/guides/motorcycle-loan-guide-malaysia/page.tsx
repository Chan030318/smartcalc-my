import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import AuthorCard from "@/components/AuthorCard";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/motorcycle-loan-guide-malaysia`;

export const metadata: Metadata = {
  title: "Motorcycle Loan Guide Malaysia 2026 — Rates, Eligibility & Monthly Payment",
  description: "Everything about motorcycle loans in Malaysia — interest rates, eligibility criteria, maximum tenure, monthly instalment calculator, and how to choose between a bank loan and in-house financing.",
  keywords: ["motorcycle loan Malaysia 2026", "motorbike hire purchase Malaysia", "loan motor Malaysia interest rate", "kelayakan pinjaman motosikal Malaysia", "ansuran bulanan motor Malaysia", "motorcycle loan calculator Malaysia"],
  alternates: { canonical: "/guides/motorcycle-loan-guide-malaysia" },
  openGraph: {
    title: "Motorcycle Loan Guide Malaysia 2026 — Rates, Eligibility & Monthly Payment",
    description: "Motorcycle loan rates, eligibility, maximum tenure, and monthly instalment guide for Malaysian buyers.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Motorcycle Loan Guide Malaysia" }],
  },
  twitter: { card: "summary_large_image", title: "Motorcycle Loan Guide Malaysia 2026", description: "Motorcycle loan rates, eligibility, and monthly payment guide for Malaysian buyers.", images: ["/og-image.png"] },
};

const faqs = [
  { q: "What is the interest rate for a motorcycle loan in Malaysia?", a: "Motorcycle hire purchase interest rates in Malaysia typically range from 3.0% to 5.0% flat per annum. Bank loans for motorcycles (via Maybank, CIMB, RHB, etc.) tend to offer 3.0%–3.5% flat for standard motorcycles. In-house dealer financing (from companies like Honda, Yamaha, and independent dealers) may charge 4.0%–5.0% flat but with more relaxed eligibility criteria. Motosikal (motorcycle) loan rates are slightly higher than car loan rates due to the smaller loan size, faster depreciation, and higher default rates historically." },
  { q: "What is the maximum tenure for a motorcycle loan in Malaysia?", a: "Bank Negara Malaysia allows motorcycle hire purchase of up to 7 years (84 months) for new motorcycles. For used motorcycles, tenure is typically limited to 3–5 years depending on the age of the bike. In practice, many banks cap motorcycle loans at 5 years even for new bikes. Dealer financing may offer flexible terms. A longer tenure reduces monthly payments but significantly increases total interest paid — compare the total repayment amount, not just the monthly instalment." },
  { q: "What salary do I need for a motorcycle loan?", a: "Motorcycle loans are accessible at lower income levels than car loans. A common minimum salary criterion is RM1,000–RM1,500/month gross. For bank financing, income verification through payslips and bank statements is standard. For dealer/in-house financing, some dealers offer loans to gig workers, daily-rated workers, or those with informal income with more flexible documentation — though at higher interest rates. EPF contributions are sometimes used as income proof for irregular income earners." },
  { q: "Is it better to take a bank loan or dealer financing for a motorcycle?", a: "Bank loans generally offer lower interest rates (3.0%–3.5% vs 4.0%–5.0% for dealer financing), which translates to meaningfully less total interest over the loan term. However, bank loan processing takes longer (3–7 working days) and requires more documentation. Dealer financing approves faster (sometimes same day), is more accessible to informal income earners, and may bundle roadtax and insurance renewal services. If you qualify for bank financing, choose it for the lower rate. If you need faster approval or have non-standard income, dealer financing may be your practical option." },
  { q: "Can I finance a secondhand motorcycle in Malaysia?", a: "Yes, hire purchase financing is available for used motorcycles. Banks and dealers both offer secondhand motorcycle loans, typically requiring the bike to be no more than 10 years old (banks are often stricter — some limit to 7 years old). Interest rates for used motorcycles are higher than new bikes. Ensure the motorcycle's ownership transfer (Puspakom and JPJ process) is completed properly — the lender registers the encumbrance on the vehicle until the loan is fully repaid." },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "Motorcycle Loan Guide Malaysia 2026 — Rates, Eligibility & Monthly Payment", description: "Complete guide to motorcycle hire purchase loans in Malaysia — interest rates, eligibility, maximum tenure, monthly payment calculation, and bank vs dealer financing comparison.", url: PAGE_URL, datePublished: "2026-01-01", dateModified: "2026-06-22", author: { "@type": "Person", name: "Alvin Chan Wun Long", url: `${BASE_URL}/author/alvin-chan` }, publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` } } },
    { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE_URL }, { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` }, { "@type": "ListItem", position: 3, name: "Motorcycle Loan Guide Malaysia", item: PAGE_URL }] },
  ],
};

export default function MotorcycleLoanGuidePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-amber-50 to-orange-50 border-b border-amber-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-amber-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">Motorcycle Loan Guide Malaysia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">Motorcycle Loan Guide Malaysia 2026 — Rates, Eligibility &amp; Monthly Payment</h1>
            <p className="text-gray-600 text-lg leading-relaxed">Motorcycles are Malaysia&apos;s most common vehicle. Here is everything you need to know about motorcycle loans — interest rates, eligibility, how monthly payments are calculated, and whether to go with a bank or dealer.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-amber-100 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">Loans · Motorcycle</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">7 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">
          <h2>The Malaysian Motorcycle Market</h2>
          <p>Malaysia has one of the highest motorcycle ownership rates in the world — approximately 12 million registered motorcycles for a population of 33 million. Motorcycles are essential transport for millions of Malaysians, especially in urban areas where traffic congestion makes two-wheelers faster, and in rural areas where public transport is limited.</p>
          <p>The most popular motorcycles are in the 100cc–150cc class (Honda Wave, Yamaha Y15ZR, Modenas Kriss) priced from RM4,000–RM10,000 new. Premium scooters and sports bikes (150cc–800cc) range from RM10,000–RM60,000+. Financing is available across all these segments through bank hire purchase or dealer financing.</p>

          <h2>Monthly Instalment Calculation Examples</h2>
          <p>Like car loans, motorcycle hire purchase uses the flat rate method: Monthly instalment = (Principal + Total Interest) ÷ Months.</p>
          <div className="not-prose overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead><tr className="bg-amber-50"><th className="text-left px-4 py-3 font-semibold text-gray-700 border-b border-amber-100">Scenario</th><th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-amber-100">Monthly</th><th className="text-center px-4 py-3 font-semibold text-gray-700 border-b border-amber-100">Total Interest</th></tr></thead>
              <tbody>
                {[
                  ["RM6,000, 3.5% flat, 3 years", "RM197", "RM630"],
                  ["RM8,000, 3.5% flat, 5 years", "RM180", "RM1,400"],
                  ["RM15,000, 3.5% flat, 5 years", "RM338", "RM2,625"],
                  ["RM30,000, 4.0% flat, 7 years", "RM498", "RM8,400"],
                ].map(([s, m, i], idx) => (
                  <tr key={idx} className="border-b border-gray-50"><td className="px-4 py-2.5 text-gray-700">{s}</td><td className="px-4 py-2.5 text-center text-gray-600">{m}</td><td className="px-4 py-2.5 text-center text-red-600">{i}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>Use our <Link href="/loan-calculator-malaysia">Loan Calculator</Link> to calculate your exact motorcycle loan instalment.</p>

          <h2>Eligibility Requirements</h2>
          <p>For bank motorcycle loans: minimum age 18 (or 21 for some banks), Malaysian citizen or PR, minimum income RM1,000–RM1,500/month (some banks lower), no excessive CCRIS arrears, standard documentation (MyKad, payslips, bank statements). Banks may require the motorcycle to be a current-model-year unit from an authorised dealer.</p>
          <p>For dealer/in-house financing: typically more accessible — some schemes target B40 income group with minimal documentation. Approval can be same-day. Trade-off: higher interest rate (4%–5% flat vs 3%–3.5% at banks). The extra 1%–1.5% on a RM8,000 loan over 5 years adds approximately RM400–RM600 in total interest — not catastrophic, but meaningful for a cost-conscious borrower.</p>

          <h2>Insurance: Mandatory for All Financed Motorcycles</h2>
          <p>All financed motorcycles must maintain at minimum a <strong>third-party motor insurance policy</strong> throughout the loan tenure. The lender requires proof of insurance renewal annually. Many borrowers opt for comprehensive insurance for new motorcycles (covering own damage, fire, theft) and switch to third-party after the first 2–3 years when the depreciated value no longer justifies the comprehensive premium. Annual insurance for a standard 150cc motorcycle: RM200–RM350 for third-party; RM400–RM800 for comprehensive.</p>
          <p>For context on how a motorcycle loan fits your overall budget, use our <Link href="/guides/rm3000-salary-budget-plan-malaysia">RM3,000 Salary Budget Plan</Link> as a framework. For overall loan affordability, check the <Link href="/dsr-calculator-malaysia">DSR Calculator</Link>.</p>
        </article>

        <FinancialDisclaimer />

        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-gray-50 border border-gray-100 rounded-2xl">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-800 text-sm list-none">{faq.q}<svg className="w-4 h-4 text-gray-400 flex-shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></summary>
                <p className="px-6 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <AuthorCard />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-sm text-gray-500">
          <Link href="/guides" className="hover:text-blue-600 transition-colors">← Back to Guides</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
