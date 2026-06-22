import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import AuthorCard from "@/components/AuthorCard";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/salary-to-buy-rm500k-house-malaysia`;

export const metadata: Metadata = {
  title: "What Salary Do You Need to Buy a RM500,000 House in Malaysia?",
  description: "Minimum salary required for a RM500,000 home loan in Malaysia. DSR calculation, monthly instalment at current rates, total upfront costs, and whether RM500k is affordable on a dual income.",
  keywords: ["salary to buy RM500k house Malaysia", "RM500000 house loan salary Malaysia", "RM500k home loan eligibility", "DSR RM500k house", "RM500k house Malaysia affordability", "gaji beli rumah RM500k Malaysia"],
  alternates: { canonical: "/guides/salary-to-buy-rm500k-house-malaysia" },
  openGraph: {
    title: "What Salary Do You Need to Buy a RM500,000 House in Malaysia?",
    description: "DSR calculation, monthly instalment, and total cost breakdown for a RM500,000 home loan in Malaysia.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Salary for RM500k House Malaysia" }],
  },
  twitter: { card: "summary_large_image", title: "Salary for RM500k House Malaysia", description: "How much salary do you need for a RM500,000 home loan in Malaysia?", images: ["/og-image.png"] },
};

const faqs = [
  { q: "What is the minimum salary to buy a RM500,000 house in Malaysia?", a: "For a RM500,000 property with a 90% loan (RM450,000) at 4.0% over 30 years, the monthly instalment is approximately RM2,148. At a 60% DSR with no other debts, the minimum gross salary is approximately RM3,580. Most banks expect your DSR including all commitments to stay below 60–70%. If you have a car loan of RM700/month, your minimum salary rises to approximately RM4,745 gross. A dual income of RM4,000 each (RM8,000 combined) gives you comfortable eligibility." },
  { q: "Can a couple jointly apply for a RM500,000 home loan?", a: "Yes, and joint applications are common for RM500,000 properties. Both incomes are combined for DSR calculation, and both names appear on the title and loan agreement. A couple earning RM4,000 each (RM8,000 combined) with a car loan each of RM700/month has a combined commitment of RM2,148 (housing) + RM1,400 (cars) = RM3,548, which is 44% DSR — well within the 60% threshold. The trade-off of joint ownership is that both parties are jointly and severally liable for the full debt." },
  { q: "What is the monthly instalment for a RM500,000 home loan?", a: "At 4.0% interest over 30 years on a RM450,000 loan: approximately RM2,148/month. Over 35 years at the same rate: approximately RM1,971/month. Over 25 years at 4.0%: approximately RM2,373/month. At the higher rate of 4.5%, the 30-year instalment rises to approximately RM2,279/month. Use our Loan Calculator for exact figures with your specific bank's rate." },
  { q: "How much is the stamp duty on a RM500,000 property?", a: "Under Malaysia's tiered stamp duty on the SPA (Memorandum of Transfer): First RM100,000 at 1% = RM1,000; Next RM400,000 at 2% = RM8,000; Total stamp duty = RM9,000. First-time buyers receive a full stamp duty exemption on both the SPA and loan agreement for properties up to RM500,000 — saving RM9,000+ on a RM500,000 property. This exemption applies to the SPA (buyer's stamp duty on the transfer instrument), not to the legal fees." },
  { q: "Is RM500,000 considered affordable in Kuala Lumpur?", a: "By global standards, RM500,000 is very affordable. By Malaysian income standards, it requires careful planning. The Khazanah Research Institute classifies properties priced more than 3× median household income as 'severely unaffordable' — Malaysia's median household income is approximately RM7,000/month or RM84,000/year, making the 3× threshold RM252,000. By this measure, RM500,000 is above the severely unaffordable threshold for median-income households. However, dual-income professional households earning RM8,000–RM12,000 combined can comfortably service a RM500k loan." },
];

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Article", headline: "What Salary Do You Need to Buy a RM500,000 House in Malaysia?", description: "Complete salary, DSR, monthly instalment, and cost breakdown for purchasing a RM500,000 property in Malaysia, including joint application scenarios.", url: PAGE_URL, datePublished: "2026-01-01", dateModified: "2026-06-22", author: { "@type": "Person", name: "Alvin Chan Wun Long", url: `${BASE_URL}/author/alvin-chan` }, publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` } } },
    { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: BASE_URL }, { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` }, { "@type": "ListItem", position: 3, name: "Salary for RM500k House Malaysia", item: PAGE_URL }] },
  ],
};

export default function SalaryRm500kHousePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-blue-50 to-sky-50 border-b border-blue-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-blue-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">Salary for RM500k House Malaysia</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">What Salary Do You Need to Buy a RM500,000 House in Malaysia?</h1>
            <p className="text-gray-600 text-lg leading-relaxed">RM500,000 sits at the mid-range of the Malaysian property market and is a common target for dual-income professional households. Here is the complete salary and affordability breakdown for a RM500k home loan.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">Housing · Loans</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">8 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">
          <h2>Key Numbers for a RM500,000 Property</h2>
          <p>RM500,000 marks the boundary of the first-time buyer stamp duty exemption — properties priced at or below RM500,000 receive a full exemption on stamp duty for first-time buyers. Above RM500,000, the exemption is partial. This makes RM500,000 a significant price point in Malaysian property.</p>
          <ul>
            <li><strong>Property price:</strong> RM500,000</li>
            <li><strong>Down payment (10%):</strong> RM50,000</li>
            <li><strong>Loan amount (90%):</strong> RM450,000</li>
            <li><strong>Monthly instalment at 4.0%, 30 years:</strong> ~RM2,148</li>
            <li><strong>Total interest paid (30 years):</strong> ~RM323,000</li>
            <li><strong>Minimum salary (60% DSR, no other debt):</strong> ~RM3,580</li>
            <li><strong>Stamp duty (first-time buyer):</strong> RM0 (full exemption)</li>
          </ul>

          <h2>DSR Calculation for Different Income Scenarios</h2>
          <p>Your DSR is calculated as: (Total monthly debt commitments ÷ Gross monthly income) × 100. For a RM500k loan with a RM2,148/month instalment:</p>
          <ul>
            <li><strong>Gross salary RM4,000, no other debt:</strong> DSR = 53.7% — borderline, likely approved if credit is clean</li>
            <li><strong>Gross salary RM4,000, car loan RM700/month:</strong> DSR = 71.2% — likely rejected by most banks</li>
            <li><strong>Gross salary RM6,000, no other debt:</strong> DSR = 35.8% — very comfortable</li>
            <li><strong>Combined income RM8,000, two car loans RM1,200/month total:</strong> DSR = 41.9% — comfortable</li>
          </ul>
          <p>The lesson: for a RM500,000 property, a single earner ideally needs RM5,500–RM7,000+ gross with manageable other commitments. A dual income of RM7,000–RM10,000 combined gives comfortable eligibility. Use our <Link href="/dsr-calculator-malaysia">DSR Calculator</Link> for your specific numbers.</p>

          <h2>Total Upfront Cash Required</h2>
          <p>The down payment is just one component. For a RM500,000 subsale property:</p>
          <ul>
            <li><strong>Down payment (10%):</strong> RM50,000</li>
            <li><strong>SPA legal fees:</strong> ~RM4,500–RM5,500</li>
            <li><strong>SPA stamp duty:</strong> RM0 (first-time buyer, property ≤RM500,000)</li>
            <li><strong>Loan agreement legal fees:</strong> ~RM3,000–RM4,000</li>
            <li><strong>Loan stamp duty:</strong> RM0 (first-time buyer exemption)</li>
            <li><strong>Valuation fee:</strong> ~RM1,500–RM2,000</li>
            <li><strong>MRTA or life insurance:</strong> ~RM12,000–RM25,000 depending on age</li>
          </ul>
          <p>Total upfront cash needed: approximately RM71,000–RM86,500. This is the typical "hidden cost" that surprises many buyers — the total cash outlay is significantly more than just the 10% down payment.</p>

          <h2>Saving the Down Payment: Timeline</h2>
          <p>Saving RM50,000 for a down payment is a significant milestone. At different saving rates:</p>
          <ul>
            <li>Save RM1,000/month: 50 months (4 years 2 months)</li>
            <li>Save RM1,500/month: 33 months (2 years 9 months)</li>
            <li>Save RM2,000/month: 25 months (2 years 1 month)</li>
          </ul>
          <p>This assumes you have no existing savings. If you have RM20,000 saved already and can save RM1,500/month, you reach RM50,000 in approximately 20 months. Our <Link href="/guides/how-to-save-first-rm10000-malaysia">guide on saving your first RM10,000</Link> covers the strategies to accelerate this. Also consider using EPF Account 2 (Akaun Sejahtera) for the down payment — check your balance in i-Akaun to see if this is an option.</p>

          <h2>RM500,000 in Different Malaysian Cities</h2>
          <p>RM500,000 buys very different properties depending on location. In Kuala Lumpur city centre, RM500,000 typically gets a studio or small 1-bedroom condominium (400–600 sq ft). In Petaling Jaya or Subang Jaya, it gets a 2-bedroom condominium. In Shah Alam, Klang, or Cheras, it may reach a smaller terraced house. In Johor Bahru, Penang island, or Ipoh, it can approach a 3-bedroom terrace or semi-detached home. In Sabah or Sarawak, RM500,000 opens up to larger properties and even landed homes in some areas.</p>
          <p>Location choice dramatically affects both your lifestyle and your property's long-term capital appreciation. For full context on what banks look at, read <Link href="/guides/housing-loan-eligibility-malaysia">Housing Loan Eligibility — What Banks Check</Link> and our <Link href="/guides/first-home-buyer-guide-malaysia">First Home Buyer Guide</Link>.</p>
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
