import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import AuthorCard from "@/components/AuthorCard";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/first-home-buyer-guide-malaysia`;

export const metadata: Metadata = {
  title: "First Home Buyer Guide Malaysia 2026 — Step-by-Step Process",
  description:
    "Complete guide for first-time home buyers in Malaysia. Covers government schemes (PR1MA, My First Home, SJKP), affordability calculation, step-by-step buying process, legal costs, stamp duty exemptions, and what banks check.",
  keywords: [
    "first home buyer Malaysia",
    "first time home buyer guide Malaysia",
    "PR1MA Malaysia 2026",
    "My First Home Scheme Malaysia",
    "SJKP Malaysia",
    "stamp duty exemption first home Malaysia",
    "beli rumah pertama Malaysia",
  ],
  alternates: { canonical: "/guides/first-home-buyer-guide-malaysia" },
  openGraph: {
    title: "First Home Buyer Guide Malaysia 2026 — Step-by-Step Process",
    description: "Everything first-time buyers need to know — schemes, affordability, legal costs, and the step-by-step buying process in Malaysia.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "First Home Buyer Guide Malaysia 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "First Home Buyer Guide Malaysia 2026",
    description: "PR1MA, My First Home, SJKP — complete first home buyer guide for Malaysians.",
    images: ["/og-image.png"],
  },
};

const faqs = [
  {
    q: "How much salary do I need to buy my first home in Malaysia?",
    a: "A common rule is that your home loan should not exceed 3–4× your annual income, and your monthly instalment should not exceed 30–35% of your gross monthly salary. For a RM400,000 property with a 90% loan at 4% interest over 30 years, the monthly instalment is approximately RM1,718. This requires a gross salary of at least RM4,900–RM5,700 to stay within the 30–35% threshold. Use our DSR Calculator to check your specific situation.",
  },
  {
    q: "What is the stamp duty exemption for first-time home buyers in Malaysia?",
    a: "First-time buyers in Malaysia receive a full stamp duty exemption on the Sales and Purchase Agreement (SPA) and loan agreement for properties priced up to RM500,000. For properties priced between RM500,001 and RM1 million, a partial exemption applies. This exemption is automatic — you just need to declare that this is your first property when signing the SPA and loan documentation.",
  },
  {
    q: "What is the PR1MA scheme?",
    a: "PR1MA (Perumahan Rakyat 1Malaysia) is a government scheme offering affordable housing priced between RM100,000 and RM400,000 for Malaysian citizens with a household income of RM2,500–RM15,000 per month. PR1MA units are located across Malaysia and are built and sold directly by the PR1MA Corporation. Applications are made online at pr1ma.my and units are balloted when demand exceeds supply.",
  },
  {
    q: "Can I use EPF savings to buy my first home?",
    a: "Yes. Under EPF Account 2 (Akaun Sejahtera) withdrawal, you can withdraw savings to pay for your property's down payment, legal fees, and outstanding loan balance. The amount you can withdraw depends on your account balance and the property price. You must not have previously used Account 2 for housing and must have at least RM500 remaining in Account 2 after the withdrawal. You can also use EPF savings for monthly housing loan repayments if your employer does not contribute to EPF for that purpose.",
  },
  {
    q: "What are the upfront costs when buying a home in Malaysia?",
    a: "Upfront costs typically include: Down payment (10% of property price for standard loans, or 5% if below RM300,000 under certain schemes), Stamp Duty on SPA (exempted for first-time buyers up to RM500,000 since 2021), Stamp Duty on Loan Agreement (exempted for first-time buyers), Legal fees for SPA (approximately 0.5%–1% of property price), Legal fees for loan documentation (approximately 0.5% of loan amount), Valuation fee (if required by the bank), Property insurance (MRTA or MLTA), and maintenance deposits for stratified properties.",
  },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "First Home Buyer Guide Malaysia 2026 — Step-by-Step Process",
      description: "Complete guide for first-time home buyers in Malaysia covering government schemes, affordability calculations, the buying process, and all costs involved.",
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
        { "@type": "ListItem", position: 3, name: "First Home Buyer Guide Malaysia 2026", item: PAGE_URL },
      ],
    },
  ],
};

const steps = [
  { step: "1", title: "Assess Your Affordability", desc: "Calculate your DSR, check EPF savings, and determine the price range you can realistically afford before falling in love with a property." },
  { step: "2", title: "Check Your Credit Health", desc: "Pull your CCRIS via BNM eCCRIS and your CTOS report. Clean up any missed payments or errors at least 3 months before applying." },
  { step: "3", title: "Get a Bank Pre-Approval (AIP)", desc: "Apply for an Approval in Principle (AIP) from 2–3 banks to know your maximum loan quantum and compare interest rates before you start viewing properties." },
  { step: "4", title: "Find Your Property", desc: "Search on PropertyGuru, iProperty, or mudah.my. Visit multiple properties. Factor in location, developer track record (for new launches), and maintenance fees." },
  { step: "5", title: "Sign the Letter of Offer / Booking Fee", desc: "Pay a booking fee (usually 2–3% of property price) to reserve the unit. This is refundable if the bank does not approve your loan." },
  { step: "6", title: "Sign the SPA and Loan Agreement", desc: "Your lawyer handles the Sales and Purchase Agreement (SPA) and loan documentation. As a first-time buyer, present your declaration to receive stamp duty exemption." },
  { step: "7", title: "Wait for Completion and Get Keys", desc: "For new launches, completion takes 24–36 months. For subsale, the transfer typically completes within 3 months of signing the SPA. Your lawyer manages the title transfer." },
];

export default function FirstHomeBuyerGuidePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-green-50 to-emerald-50 border-b border-green-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-green-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">First Home Buyer Guide Malaysia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              First Home Buyer Guide Malaysia 2026
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Buying your first home in Malaysia? This step-by-step guide covers affordability, government schemes, the full buying process, all costs involved, and what banks check when assessing your application.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">Housing · First Home</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">11 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">

          <h2>Are You Ready to Buy Your First Home?</h2>
          <p>
            Buying a home is the largest financial decision most Malaysians make in their lifetime. The process is more complex than renting — it involves legal contracts, bank financing, government taxes, and decades of financial commitment. Before you start attending property launches or browsing listings, it is worth being honest about your financial readiness.
          </p>
          <p>
            The standard benchmark is that your total monthly debt commitments — including the new home loan — should not exceed 60–70% of your gross monthly income (your Debt Service Ratio, or DSR). Most banks in Malaysia use 60% as their standard threshold. If your current salary is RM5,000 and you already have a car loan costing RM700/month, your maximum additional monthly commitment is approximately RM2,300–RM3,000 (60–70% of RM5,000 minus RM700). Use our <Link href="/dsr-calculator-malaysia">DSR Calculator Malaysia</Link> to calculate your specific position.
          </p>
          <p>
            Beyond DSR, lenders will also check your CCRIS and CTOS credit records, your income documentation, your employment stability (most banks want at least 6 months with current employer if salaried, or 2 years of accounts if self-employed), and the property itself (valuation, developer track record for new builds).
          </p>

          <h2>Government Schemes for First-Time Buyers</h2>
          <p>
            Malaysia has several programmes that make it easier for first-time buyers to get into the property market:
          </p>
          <p>
            <strong>PR1MA (Perumahan Rakyat 1Malaysia)</strong>: Offers affordable homes priced RM100,000–RM400,000 in urban and suburban areas to Malaysians with household income of RM2,500–RM15,000/month. Applications via pr1ma.my. Units are balloted. Buyers must not own property and must occupy the PR1MA unit as their primary residence.
          </p>
          <p>
            <strong>My First Home Scheme (Skim Rumah Pertamaku)</strong>: Allows eligible borrowers to get a 100% financing (no down payment required) for homes priced up to RM300,000. Open to Malaysians aged 35 and below with a monthly income not exceeding RM5,000 (or RM10,000 for joint applications). Participating banks include Maybank, CIMB, RHB, AmBank, and others.
          </p>
          <p>
            <strong>SJKP (Skim Jaminan Kredit Perumahan)</strong>: A government loan guarantee scheme that helps Malaysians who are informally employed (no formal payslip) to access housing finance. SJKP acts as a guarantor so that banks are more willing to lend to gig workers, hawkers, and small business owners.
          </p>
          <p>
            <strong>Stamp Duty Exemption for First-Time Buyers</strong>: Since Budget 2021, first-time buyers receive a full stamp duty exemption on both the SPA and the loan agreement for properties priced up to RM500,000. For properties priced RM500,001–RM1,000,000, a 50% exemption applies. This can save you tens of thousands of ringgit in transaction costs.
          </p>
          <p>
            <strong>Rumah Selangorku / State Affordable Housing Schemes</strong>: Most states have their own affordable housing programmes with price ceilings and eligibility criteria. Check your state government&apos;s housing website for local options.
          </p>

          <h2>Step-by-Step: The Home Buying Process in Malaysia</h2>

          <div className="not-prose space-y-4 my-6">
            {steps.map((s) => (
              <div key={s.step} className="flex gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold">{s.step}</div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{s.title}</p>
                  <p className="text-gray-600 text-sm mt-0.5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2>Understanding the Costs of Buying a Home</h2>
          <p>
            Many first-time buyers underestimate the upfront costs beyond the down payment. Here is a realistic cost breakdown for a RM400,000 property with a 90% loan (RM360,000):
          </p>
          <ul>
            <li><strong>Down payment (10%)</strong>: RM40,000</li>
            <li><strong>SPA legal fees</strong>: Approximately RM3,500–RM4,500 (varies by lawyer)</li>
            <li><strong>SPA stamp duty</strong>: RM0 (first-time buyer exemption, property below RM500,000)</li>
            <li><strong>Loan agreement stamp duty</strong>: RM0 (first-time buyer exemption)</li>
            <li><strong>Loan legal fees</strong>: Approximately RM2,500–RM3,500</li>
            <li><strong>Valuation fee</strong>: RM1,500–RM2,000</li>
            <li><strong>MRTA / life insurance</strong>: RM5,000–RM15,000 depending on age and coverage</li>
            <li><strong>Renovation / moving costs</strong>: RM10,000–RM30,000+ depending on property condition</li>
          </ul>
          <p>
            For a RM400,000 property, you should budget approximately RM55,000–RM90,000 in total to cover the down payment, legal fees, insurance, and initial renovation. Having additional savings beyond the down payment is critical — do not use every last sen for the down payment and leave nothing for unexpected costs.
          </p>

          <h2>How Much Can You Borrow?</h2>
          <p>
            In Malaysia, banks typically lend up to 90% of the property&apos;s market value for a first home (and up to 90% for the second property if the first is fully settled). The Loan-to-Value (LTV) ratio is 90% for the first and second property and 70% for the third and beyond.
          </p>
          <p>
            The actual loan quantum you qualify for depends on your income and existing commitments. Banks use your DSR to calculate the maximum monthly instalment they will approve. Working backwards from the maximum monthly instalment to a loan quantum (using the prevailing interest rate and loan tenure of up to 35 years or age 70, whichever is lower), you get the maximum loan amount.
          </p>
          <p>
            Use our <Link href="/loan-calculator">Loan Calculator</Link> to estimate monthly instalments at different property prices and tenures, and read <Link href="/guides/what-salary-to-afford-house-malaysia">What Salary Do You Need to Afford a House in Malaysia?</Link> for a detailed income-to-property-price guide.
          </p>

          <h2>Documents You Will Need</h2>
          <p>
            Prepare these documents before approaching a bank for a housing loan:
          </p>
          <ul>
            <li>Copy of MyKad (front and back)</li>
            <li>Latest 3 months&apos; payslips</li>
            <li>Latest 6 months&apos; bank statements (salary crediting account)</li>
            <li>EA Form or latest year&apos;s income tax return (Form BE/B)</li>
            <li>Offer letter or employment contract</li>
            <li>For self-employed: 2 years of audited accounts and 12 months&apos; bank statements</li>
            <li>Sale and Purchase Agreement or booking receipt</li>
            <li>Property valuation report (bank may arrange this)</li>
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
