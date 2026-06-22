import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import AuthorCard from "@/components/AuthorCard";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/personal-loan-guide-malaysia`;

export const metadata: Metadata = {
  title: "Personal Loan Malaysia 2026 — Rates, Eligibility & How to Choose",
  description:
    "Complete guide to personal loans in Malaysia. Covers interest rates (2026), eligibility requirements, how much you can borrow, comparison of bank and non-bank lenders, and how to choose the right personal loan.",
  keywords: [
    "personal loan Malaysia 2026",
    "personal loan interest rate Malaysia",
    "personal loan eligibility Malaysia",
    "best personal loan Malaysia",
    "pinjaman peribadi Malaysia 2026",
    "personal loan bank Malaysia",
    "personal loan calculator Malaysia",
  ],
  alternates: { canonical: "/guides/personal-loan-guide-malaysia" },
  openGraph: {
    title: "Personal Loan Malaysia 2026 — Rates, Eligibility & How to Choose",
    description: "Personal loan rates, eligibility, and how to choose the right lender in Malaysia.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Personal Loan Malaysia 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Loan Malaysia 2026 — Complete Guide",
    description: "Personal loan rates, eligibility, and lender comparison for Malaysia.",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    q: "What is the interest rate for personal loans in Malaysia?",
    a: "Personal loan interest rates in Malaysia range from approximately 4.5% to 17% per annum depending on the lender, your credit profile, and the loan amount. Bank personal loans (from licensed commercial banks) typically offer lower rates of 5%–12% p.a. for salaried employees. Licensed moneylenders can charge up to 18% p.a. under the Moneylenders Act 1951. Always compare the Effective Interest Rate (EIR), not the flat or advertised rate, to make fair comparisons between products.",
  },
  {
    q: "What is the maximum personal loan amount I can get in Malaysia?",
    a: "The maximum personal loan amount depends on your income and the bank's policy. Most banks offer up to 10× your gross monthly salary as the maximum loan quantum. However, your actual eligibility is capped by your DSR — your total monthly debt commitments including the new loan instalment cannot exceed 60–70% of your gross monthly income. For a RM5,000/month earner with no other debt, maximum eligibility might be RM120,000–RM150,000 with a 5-year tenure.",
  },
  {
    q: "How long does a personal loan approval take in Malaysia?",
    a: "For salaried employees with complete documentation submitted online, most major banks now process personal loans within 1–3 working days. Some banks offer instant approval for existing customers via their mobile banking apps. Physical branch applications typically take 3–5 working days. Complex cases — self-employed, irregular income, or credit issues — can take 1–2 weeks.",
  },
  {
    q: "Can I use a personal loan to pay off credit card debt?",
    a: "Yes, using a lower-interest personal loan to pay off higher-interest credit card debt (debt consolidation) is a financially sound strategy if the personal loan rate is significantly lower than your credit card's effective rate (credit cards in Malaysia typically charge 15%–18% p.a.). However, this only works if you then cut up or reduce the usage of the paid-off credit cards — otherwise you risk accumulating new credit card debt on top of the personal loan.",
  },
  {
    q: "Is it better to get a personal loan from a bank or a licensed moneylender?",
    a: "Banks are almost always preferable for salaried employees who qualify. Licensed banks offer lower interest rates (5%–12% p.a. vs up to 18% p.a. for licensed moneylenders), longer tenures, and better consumer protection. Licensed moneylenders under the Moneylenders Act 1951 serve borrowers who do not qualify for bank loans. Avoid unlicensed lenders (Ah Long / loan sharks) completely — they operate outside the law and use illegal debt collection methods.",
  },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Personal Loan Malaysia 2026 — Rates, Eligibility & How to Choose",
      description: "Complete guide to personal loans in Malaysia covering interest rates, eligibility requirements, how much you can borrow, bank vs moneylender comparison, and tips for choosing the right loan.",
      url: PAGE_URL,
      datePublished: "2026-01-01",
      dateModified: "2026-06-22",
      author: { "@type": "Person", name: "Alvin Chan Wun Long", url: `${BASE_URL}/author/alvin-chan` },
      publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` } },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` },
        { "@type": "ListItem", position: 3, name: "Personal Loan Guide Malaysia", item: PAGE_URL },
      ],
    },
  ],
};

export default function PersonalLoanGuidePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-indigo-50 to-blue-50 border-b border-indigo-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-indigo-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">Personal Loan Guide Malaysia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Personal Loan Malaysia 2026 — Rates, Eligibility & How to Choose
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Personal loans are one of the most flexible financial products in Malaysia. Here is everything you need to know about rates, eligibility, how much you can borrow, and how to pick the right lender.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">Personal Finance · Loans</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">9 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">

          <h2>What Is a Personal Loan?</h2>
          <p>
            A personal loan is an unsecured credit facility — meaning no collateral is required — that you can use for virtually any purpose: home renovation, medical expenses, education, wedding, debt consolidation, travel, or any other personal need. Because it is unsecured, personal loans carry higher interest rates than secured loans like mortgages or hire purchase, where the lender has an asset to repossess if you default.
          </p>
          <p>
            In Malaysia, personal loans are offered by licensed commercial banks, Islamic banks (as personal financing-i under Syariah principles), licensed moneylenders under the Moneylenders Act 1951, and government agencies like PTPTN (for education), MARA (for Bumiputera entrepreneurs), and Amanah Ikhtiar Malaysia (for microloans). Each category has different rates, eligibility, and consumer protections.
          </p>

          <h2>Personal Loan Interest Rates in Malaysia (2026)</h2>
          <p>
            Personal loan interest rates in Malaysia vary significantly by lender type and borrower profile. Here are the general ranges for 2026:
          </p>
          <ul>
            <li><strong>Public sector employees (government)</strong>: 3.5%–5.5% p.a. (flat or reducing balance). Government employees have the advantage of automatic salary deduction (potongan gaji) which makes them lower-risk for lenders. BSN, Bank Rakyat, and Maybank offer competitive rates for civil servants.</li>
            <li><strong>Private sector salaried employees</strong>: 6%–12% p.a. depending on credit profile, income, and bank. Employees at established companies with a strong credit history can access rates toward the lower end.</li>
            <li><strong>Self-employed / contract workers</strong>: 8%–15% p.a. Higher rates reflect the income variability and documentation challenges associated with non-salaried income.</li>
            <li><strong>Licensed moneylenders</strong>: Up to 18% p.a. under the Moneylenders Act 1951 for secured loans, up to 18% for unsecured loans. Reserved for borrowers who cannot qualify for bank loans.</li>
          </ul>

          <h2>How to Compare Personal Loans: Flat Rate vs Effective Rate</h2>
          <p>
            This is one of the most important — and most commonly misunderstood — aspects of personal loans in Malaysia. Banks advertise personal loans using either a <strong>flat rate</strong> or an <strong>effective interest rate (EIR)</strong>, and these are not directly comparable.
          </p>
          <p>
            A flat rate calculates interest on the original loan amount throughout the tenure. An EIR (also called reducing balance rate) calculates interest only on the outstanding balance, which shrinks as you repay. For the same loan, the EIR is approximately double the flat rate. A 6% flat rate is roughly equivalent to a 10%–11% EIR.
          </p>
          <p>
            Bank Negara Malaysia requires all lenders to disclose the EIR in loan agreements and marketing materials. When comparing personal loans, always compare using the EIR. Some banks advertise a low flat rate but when you calculate the EIR, it is comparable or higher than competitors advertising a higher flat rate.
          </p>

          <h2>Personal Loan Eligibility Requirements</h2>
          <p>Standard eligibility criteria for bank personal loans in Malaysia:</p>
          <ul>
            <li>Malaysian citizen or permanent resident (PR)</li>
            <li>Age 21–60 years (some banks up to 65)</li>
            <li>Minimum gross monthly income: RM2,000–RM3,000 (varies by bank)</li>
            <li>Minimum 6 months with current employer (salaried) or 2 years in business (self-employed)</li>
            <li>Clean credit record: no active defaults, no bankruptcy proceedings</li>
            <li>DSR within acceptable range after including the new loan instalment</li>
          </ul>

          <h2>How Much Can You Borrow?</h2>
          <p>
            Most Malaysian banks offer personal loans of up to 10× your monthly gross income — so a RM5,000/month earner could borrow up to RM50,000 from standard bank products, and higher-income earners may qualify for up to RM150,000 or more. The actual amount is capped by your DSR: your total monthly debt payments including the new loan must stay within 60–70% of gross income.
          </p>
          <p>
            Use our <Link href="/loan-calculator">Loan Calculator</Link> to estimate monthly instalments and check how a personal loan would affect your <Link href="/dsr-calculator-malaysia">DSR</Link>.
          </p>

          <h2>When a Personal Loan Makes Sense (and When It Doesn&apos;t)</h2>
          <p>
            <strong>Good use cases</strong>: Debt consolidation (replacing high-interest credit card debt with a lower-rate personal loan), emergency expenses (medical bills, urgent home repairs), education or skills training that increases your earning capacity, home renovation that increases property value.
          </p>
          <p>
            <strong>Poor use cases</strong>: Lifestyle spending (holidays, luxury goods, gadgets), investing or trading (high risk of loss while carrying fixed loan repayments), gambling, paying off one loan with another without addressing the root cause of debt. Using a personal loan for consumption spending is a path to a debt spiral.
          </p>

          <h2>How to Get the Best Personal Loan Rate</h2>
          <ul>
            <li><strong>Improve your credit score first</strong>: A clean CCRIS and CTOS record gets you the best rates. Read <Link href="/guides/how-to-improve-ctos-score-malaysia">How to Improve Your CTOS Score</Link>.</li>
            <li><strong>Compare using EIR, not flat rate</strong>: Always ask for the EIR and use it to compare across lenders.</li>
            <li><strong>Check your existing bank first</strong>: Banks often offer preferential rates to existing salary account or mortgage customers.</li>
            <li><strong>Borrow only what you need</strong>: Larger loans have more total interest even at the same rate. Do not overborrow because you can.</li>
            <li><strong>Consider tenure carefully</strong>: A shorter tenure means higher monthly payments but lower total interest. A longer tenure is more affordable monthly but significantly more expensive overall.</li>
          </ul>
        </article>

        <FinancialDisclaimer />

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

        <AuthorCard />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-sm text-gray-500">
          <Link href="/guides" className="hover:text-blue-600 transition-colors">← Back to Guides</Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
