import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import FinancialDisclaimer from "@/components/FinancialDisclaimer";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/guides/how-to-reduce-income-tax-malaysia`;

export const metadata: Metadata = {
  title: "How to Reduce Income Tax Legally in Malaysia (2024) — 15 Reliefs",
  description:
    "A complete guide to legally reducing your income tax in Malaysia using LHDN tax reliefs for YA 2024 — EPF, medical, education, lifestyle, PRS, donations, and more.",
  keywords: [
    "how to reduce income tax Malaysia",
    "tax relief Malaysia 2024",
    "LHDN tax relief Malaysia",
    "reduce cukai pendapatan Malaysia",
    "tax deduction Malaysia 2024",
    "EPF tax relief Malaysia",
    "PRS tax relief Malaysia",
    "cara kurangkan cukai pendapatan Malaysia",
  ],
  alternates: { canonical: "/guides/how-to-reduce-income-tax-malaysia" },
  openGraph: {
    title: "How to Reduce Income Tax Legally in Malaysia (2024) — 15 Reliefs",
    description: "15 legal tax reliefs for YA 2024 that reduce your LHDN income tax. EPF, medical, education, lifestyle, PRS, donations — all explained with amounts.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Reduce Income Tax Malaysia 2024" }],
  },
  twitter: { card: "summary_large_image", title: "How to Reduce Income Tax Legally in Malaysia (2024)", description: "15 LHDN tax reliefs for YA 2024 — amounts, eligibility, and tips.", images: ["/og-image.png"] },
};

const faqs = [
  { q: "What is the maximum tax relief in Malaysia for 2024?", a: "There is no single maximum — each relief category has its own cap. Combined, a typical salaried Malaysian with EPF, life insurance, medical expenses, lifestyle, and family reliefs can legitimately reduce chargeable income by RM30,000–RM60,000 or more, depending on their circumstances." },
  { q: "Can I claim EPF contributions as a tax relief?", a: "Yes. Employee EPF contributions (11% of salary) and voluntary EPF contributions qualify for tax relief of up to RM4,000 per year. This is separate from the life insurance relief. If your EPF contribution already exceeds RM4,000, you cannot top up further for additional relief, but the excess still goes into your EPF account." },
  { q: "What is PRS and how does it reduce my tax?", a: "PRS (Private Retirement Scheme) is a voluntary long-term savings scheme approved by the Securities Commission. Contributions to PRS qualify for an additional tax relief of up to RM3,000 per year — completely separate from the EPF relief. This is one of the most underused reliefs among young professionals." },
  { q: "Is donating to charity tax deductible in Malaysia?", a: "Yes, but only to LHDN-approved charities (those with Section 44(6) tax exemption status). Approved donations are deductible from chargeable income — for cash donations, up to 10% of aggregate income. Check the LHDN website or ask the charity for their exemption letter before claiming." },
  { q: "What is the lifestyle relief and what does it cover?", a: "The Lifestyle Relief (RM2,500/year) covers purchases of: books, magazines, and newspapers (printed or digital); smartphones, tablets, and computers; sports equipment; gym memberships; and internet subscription fees. Keep your receipts — LHDN may request them during audit. Since 2021, there is an additional RM2,500 for childcare and learning facilities." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Reduce Income Tax Legally in Malaysia (2024) — 15 Reliefs",
  description: "A comprehensive guide to all major LHDN income tax reliefs in Malaysia for YA 2024, with amounts, eligibility criteria, and practical tips for each.",
  url: PAGE_URL,
  datePublished: "2024-01-01",
  dateModified: "2024-11-01",
  author: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL },
  publisher: { "@type": "Organization", name: "SmartCalc MY", url: BASE_URL, logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.png` } },
  mainEntity: { "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  breadcrumb: { "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Guides", item: `${BASE_URL}/guides` },
    { "@type": "ListItem", position: 3, name: "How to Reduce Income Tax Malaysia", item: PAGE_URL },
  ]},
};

const reliefs = [
  { category: "Retirement & Savings", items: [
    { name: "EPF / mandatory pension contributions", cap: "RM 4,000", notes: "Includes both mandatory (11%) and voluntary top-ups" },
    { name: "Private Retirement Scheme (PRS)", cap: "RM 3,000", notes: "Separate from EPF relief. Invest in SC-approved PRS funds." },
    { name: "SSPN savings for children (Skim Simpanan Pendidikan Nasional)", cap: "RM 8,000", notes: "Net deposits only (deposits minus withdrawals in the year)" },
  ]},
  { category: "Insurance", items: [
    { name: "Life insurance premiums", cap: "RM 3,000", notes: "Includes takaful contributions. Combined with EPF to RM7,000 total." },
    { name: "Medical and education insurance", cap: "RM 3,000", notes: "Private medical card, hospitalisation, critical illness coverage" },
    { name: "SOCSO contributions", cap: "RM 350", notes: "Employee SOCSO contribution (auto-deducted; include in return)" },
  ]},
  { category: "Medical & Health", items: [
    { name: "Medical expenses (self, spouse, children)", cap: "RM 10,000", notes: "Serious diseases: cancer, kidney dialysis, heart disease, etc." },
    { name: "Complete medical examination", cap: "RM 1,000", notes: "Health screening. Absorbed within the RM10,000 cap." },
    { name: "Mental health examination and treatment", cap: "RM 1,000", notes: "Added from YA 2022. Psychiatry, clinical psychology." },
    { name: "Fertility treatment (self and spouse)", cap: "RM 10,000", notes: "Within the broader medical relief cap" },
    { name: "Vaccination (self, spouse, children)", cap: "RM 1,000", notes: "Added from YA 2022" },
  ]},
  { category: "Education", items: [
    { name: "Education fees (self)", cap: "RM 7,000", notes: "Undergraduate or postgraduate at recognised institutions. Skills / vocational training also eligible." },
  ]},
  { category: "Lifestyle", items: [
    { name: "Lifestyle relief (books, devices, sports, internet, gym)", cap: "RM 2,500", notes: "Keep all receipts. Smartphones and computers included." },
    { name: "Sports equipment and gym membership", cap: "RM 500", notes: "Sub-limit within the lifestyle relief" },
    { name: "Electric vehicle (EV) charging equipment", cap: "RM 2,500", notes: "Added from YA 2024" },
  ]},
  { category: "Family", items: [
    { name: "Spouse (no income / income below RM4,000)", cap: "RM 4,000", notes: "Cannot be claimed if spouse already claims own reliefs" },
    { name: "Child relief (each child under 18)", cap: "RM 2,000 each", notes: "Or over 18 in full-time education" },
    { name: "Child in higher education", cap: "RM 8,000 each", notes: "Diploma and above at local or approved foreign institutions" },
    { name: "Disabled child", cap: "RM 6,000 each", notes: "Additional RM8,000 if pursuing higher education" },
  ]},
  { category: "Donations & Zakat", items: [
    { name: "Cash donations to approved charities", cap: "10% of aggregate income", notes: "Only LHDN-approved charities qualify (Section 44(6))" },
    { name: "Zakat (income zakat / zakat harta)", cap: "Actual amount", notes: "Full rebate against tax payable (1:1 reduction, not just relief)" },
  ]},
];

export default function ReduceIncomeTaxPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <main className="flex-1 bg-white">
        <section className="bg-gradient-to-br from-orange-50 to-amber-50 border-b border-orange-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="flex items-center gap-2 text-sm text-orange-700 font-medium mb-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-500">Reduce Income Tax</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              How to Reduce Income Tax Legally in Malaysia (YA 2024)
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Malaysia&rsquo;s tax relief system rewards a wide range of spending — from EPF contributions to gym memberships and charity donations. Here is every major relief available for YA 2024 and how to claim them.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">Tax</span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">10 min read</span>
            </div>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 prose prose-gray prose-lg max-w-none">
          <h2>How Tax Reliefs Work in Malaysia</h2>
          <p>Tax reliefs reduce your <strong>chargeable income</strong> — the amount on which income tax is calculated. They are not direct reductions in your tax bill; they reduce the income you are taxed on. Because Malaysia uses a progressive tax rate, the tax saving from a relief depends on which bracket it falls in.</p>
          <p><strong>Example:</strong> If you are in the 24% tax bracket and claim a RM3,000 PRS relief, your tax saving is RM3,000 × 24% = <strong>RM720</strong> less tax to pay.</p>
          <p>Zakat is the notable exception — it is a direct 1:1 rebate against your final tax payable, not just a chargeable income reduction.</p>

          <h2>Complete YA 2024 Tax Relief Reference</h2>
          {reliefs.map((cat) => (
            <div key={cat.category} className="not-prose mb-8">
              <h3 className="text-base font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-orange-400 inline-block" />
                {cat.category}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="text-left px-4 py-2.5 font-semibold text-gray-700 border-b border-orange-100">Relief</th>
                      <th className="text-center px-4 py-2.5 font-semibold text-gray-700 border-b border-orange-100 whitespace-nowrap">Maximum</th>
                      <th className="text-left px-4 py-2.5 font-semibold text-gray-700 border-b border-orange-100">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cat.items.map((item, i) => (
                      <tr key={i} className="border-b border-gray-100">
                        <td className="px-4 py-3 text-gray-800">{item.name}</td>
                        <td className="px-4 py-3 text-center font-semibold text-orange-700 whitespace-nowrap">{item.cap}</td>
                        <td className="px-4 py-3 text-gray-500 text-xs">{item.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          <h2>4 High-Impact Strategies Most Malaysians Miss</h2>
          <ol>
            <li><strong>PRS contribution.</strong> The RM3,000 PRS relief is completely separate from your EPF relief. A person in the 24% bracket saves RM720 in tax just by contributing RM3,000 to a PRS fund. The money is locked until retirement, but it grows tax-free and you can claim the relief every year.</li>
            <li><strong>Medical card upgrade.</strong> Private medical and education insurance has a separate RM3,000 cap from life insurance. If you only have a company group medical card, consider a personal medical card — the premium may qualify for this relief.</li>
            <li><strong>Upskilling.</strong> Education expenses for skills or vocational training (not just degree-level) at registered institutions qualify for the RM7,000 education relief. Many professional certifications (accounting, HR, data science) qualify.</li>
            <li><strong>SSPN deposits.</strong> If you have children, depositing into SSPN (Skim Simpanan Pendidikan Nasional) gives RM8,000 relief per year (net of withdrawals). SSPN also earns competitive dividends. This relief is underused because many parents are unaware of it.</li>
          </ol>

          <h2>Submit a TP1 to Get the Benefit Monthly</h2>
          <p>Most of these reliefs are claimed in your annual tax return (Borang BE), filed March–April the following year. But you can get the cash benefit <em>immediately</em> by declaring your reliefs to your employer via a <strong>TP1 form</strong>. This reduces your monthly PCB deduction — you keep more cash each month rather than waiting for a year-end refund.</p>

          <div className="not-prose bg-orange-500 rounded-2xl p-6 sm:p-8 text-white my-8">
            <h3 className="text-xl font-bold mb-2">Calculate Your Tax After Reliefs</h3>
            <p className="text-orange-100 mb-5 text-sm">Enter your income and reliefs to see your chargeable income, LHDN tax payable, and effective tax rate for YA 2024.</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/income-tax-calculator-malaysia" className="inline-flex items-center gap-2 bg-white text-orange-600 font-semibold px-5 py-2.5 rounded-xl hover:bg-orange-50 transition-colors text-sm">Income Tax Calculator →</Link>
              <Link href="/pcb-calculator-malaysia" className="inline-flex items-center gap-2 bg-orange-400 text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-orange-300 transition-colors text-sm border border-orange-300">PCB Calculator →</Link>
            </div>
          </div>

          <h2>Related Guides</h2>
          <ul>
            <li><Link href="/guides/pcb-vs-income-tax-malaysia">PCB vs Income Tax Malaysia</Link> — how monthly deductions relate to annual filing</li>
            <li><Link href="/guides/how-pcb-tax-works-malaysia">How PCB Tax Works in Malaysia</Link></li>
            <li><Link href="/income-tax-calculator-malaysia">Income Tax Calculator Malaysia</Link></li>
            <li><Link href="/pcb-calculator-malaysia">PCB Calculator Malaysia</Link></li>
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
                  <svg className="w-4 h-4 text-gray-400 flex-shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
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
