import Link from "next/link";

const links = {
  Calculators: [
    { href: "/calculators", label: "All Calculators" },
    { href: "/bmi-calculator", label: "BMI Calculator" },
    { href: "/salary-calculator-malaysia", label: "Salary Calculator" },
    { href: "/income-tax-calculator-malaysia", label: "Income Tax Calculator" },
    { href: "/epf-calculator-malaysia", label: "EPF Calculator" },
    { href: "/pcb-calculator-malaysia", label: "PCB Calculator" },
    { href: "/loan-calculator", label: "Loan Calculator" },
    { href: "/dsr-calculator-malaysia", label: "DSR Calculator" },
    { href: "/socso-calculator-malaysia", label: "SOCSO Calculator" },
    { href: "/eis-calculator-malaysia", label: "EIS Calculator" },
  ],
  Guides: [
    { href: "/guides", label: "All Guides →" },
    { href: "/guides/epf-contribution-guide-malaysia", label: "EPF Contribution Guide" },
    { href: "/guides/how-to-calculate-salary-after-epf", label: "Salary After EPF" },
    { href: "/guides/salary-deductions-explained-malaysia", label: "Salary Deductions Explained" },
    { href: "/guides/how-to-reduce-income-tax-malaysia", label: "Reduce Income Tax" },
    { href: "/guides/what-is-dsr-malaysia", label: "What Is DSR?" },
    { href: "/guides/first-home-buyer-guide-malaysia", label: "First Home Buyer Guide" },
    { href: "/guides/how-to-check-ccris-malaysia", label: "How to Check CCRIS" },
    { href: "/guides/how-to-improve-ctos-score-malaysia", label: "Improve CTOS Score" },
    { href: "/guides/socso-contribution-table-malaysia", label: "SOCSO Contribution Table" },
    { href: "/guides/emergency-fund-malaysia", label: "Emergency Fund Guide" },
    { href: "/guides/rm3000-salary-budget-plan-malaysia", label: "RM3,000 Budget Plan" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Use" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl mb-3">
              <span className="text-2xl">🧮</span>
              SmartCalc MY
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Free, accurate calculators and guides built for Malaysians. 9 calculators and 24 guides — no sign-up, no fees.
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h3 className="text-white font-semibold mb-4">{section}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} SmartCalc MY. All rights reserved.</p>
          <p className="text-xs text-gray-600 text-center sm:text-right max-w-sm">
            Disclaimer: Results are for informational purposes only and do not constitute financial or medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
