import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import CalculatorsIndexClient from "@/components/CalculatorsIndexClient";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

const PAGE_URL = `${BASE_URL}/calculators`;

export const metadata: Metadata = {
  title: "All Free Malaysian Calculators - SmartCalc MY",
  description:
    "Browse all free calculators for Malaysians: BMI, Salary, Income Tax, EPF, PCB, SOCSO, EIS, Loan, DSR, car loan, mortgage, savings, compound interest, and currency conversion. Instant results, no sign-up required.",
  keywords: [
    "free calculators Malaysia",
    "Malaysian calculator tools",
    "BMI calculator Malaysia",
    "salary calculator Malaysia",
    "income tax calculator Malaysia",
    "EPF calculator Malaysia",
    "PCB calculator Malaysia",
    "loan calculator Malaysia",
    "DSR calculator Malaysia",
    "kalkulator Malaysia",
  ],
  alternates: { canonical: "/calculators" },
  openGraph: {
    title: "All Free Malaysian Calculators - SmartCalc MY",
    description:
      "14 free calculators for Malaysians: BMI, salary, tax, EPF, PCB, SOCSO, EIS, loans, DSR, savings, and currency conversion.",
    url: PAGE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "SmartCalc MY - All Calculators" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Free Malaysian Calculators - SmartCalc MY",
    description: "14 free calculators for Malaysians. Health, salary, tax, loans, savings, and currency tools.",
    images: ["/og-image.png"],
  },
};

const tools = [
  {
    href: "/bmi-calculator",
    title: "BMI Calculator",
    description: "Calculate Body Mass Index with Malaysia-relevant Asian BMI categories.",
  },
  {
    href: "/salary-calculator-malaysia",
    title: "Salary Calculator",
    description: "Estimate take-home pay after EPF, SOCSO, EIS, and PCB deductions.",
  },
  {
    href: "/income-tax-calculator-malaysia",
    title: "Income Tax Calculator",
    description: "Estimate annual Malaysian income tax with relief deductions.",
  },
  {
    href: "/epf-calculator-malaysia",
    title: "EPF / KWSP Calculator",
    description: "Project EPF retirement savings with dividends and contributions.",
  },
  {
    href: "/pcb-calculator-malaysia",
    title: "PCB Calculator",
    description: "Estimate monthly Potongan Cukai Berjadual deductions.",
  },
  {
    href: "/socso-calculator-malaysia",
    title: "SOCSO Calculator",
    description: "Calculate SOCSO/PERKESO employee and employer contributions.",
  },
  {
    href: "/eis-calculator-malaysia",
    title: "EIS / SIP Calculator",
    description: "Calculate Employment Insurance System contributions.",
  },
  {
    href: "/loan-calculator",
    title: "Loan Calculator",
    description: "Estimate repayments, interest, and amortisation for common loans.",
  },
  {
    href: "/dsr-calculator-malaysia",
    title: "DSR Calculator",
    description: "Check Debt Service Ratio and borrowing capacity before applying for a loan.",
  },
  {
    href: "/car-loan-calculator-malaysia",
    title: "Car Loan Calculator",
    description: "Estimate Malaysia hire purchase car loan instalments.",
  },
  {
    href: "/mortgage-calculator-malaysia",
    title: "Mortgage Calculator",
    description: "Estimate home loan repayments and amortisation.",
  },
  {
    href: "/compound-interest-calculator",
    title: "Compound Interest Calculator",
    description: "See how investments grow with compounding and regular contributions.",
  },
  {
    href: "/savings-calculator-malaysia",
    title: "Savings Calculator",
    description: "Project monthly savings growth, deposits, and interest earned.",
  },
  {
    href: "/currency-converter-malaysia",
    title: "Currency Converter",
    description: "Convert Malaysian Ringgit against major currencies with reference rates.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Free Malaysian Calculators",
  description: "All free calculators for Malaysians - health, salary, tax, loans, savings, and currency tools.",
  url: PAGE_URL,
  numberOfItems: tools.length,
  itemListElement: tools.map((tool, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: tool.title,
    url: `${BASE_URL}${tool.href}`,
    description: tool.description,
  })),
};

export default function CalculatorsPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />
      <CalculatorsIndexClient />
      <Footer />
    </>
  );
}
