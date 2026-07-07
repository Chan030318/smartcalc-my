"use client";

import Link from "next/link";
import { useLang } from "@/components/LangProvider";
import type { Lang } from "@/lib/i18n";

type FooterLink = {
  href: string;
  label: Record<Lang, string>;
};

type FooterSection = {
  title: Record<Lang, string>;
  links: FooterLink[];
};

const FOOTER_COPY: Record<
  Lang,
  {
    brandDescription: string;
    rights: string;
    disclaimer: string;
  }
> = {
  en: {
    brandDescription:
      "Free Malaysia-focused calculators, guides, and financial literacy tools for young people building better money habits.",
    rights: "All rights reserved.",
    disclaimer:
      "Results are for education and general information only. They are not financial, tax, legal, medical, or investment advice.",
  },
  bm: {
    brandDescription:
      "Kalkulator, panduan, dan alat celik kewangan percuma untuk rakyat Malaysia muda yang mahu membina tabiat wang yang lebih baik.",
    rights: "Hak cipta terpelihara.",
    disclaimer:
      "Keputusan adalah untuk pendidikan dan maklumat umum sahaja. Ia bukan nasihat kewangan, cukai, undang-undang, perubatan, atau pelaburan.",
  },
  zh: {
    brandDescription:
      "为马来西亚年轻人打造的免费计算器、指南和财商工具，帮助你建立更好的金钱习惯。",
    rights: "保留所有权利。",
    disclaimer:
      "结果仅供教育与一般参考，不构成财务、税务、法律、医疗或投资建议。",
  },
};

const SECTIONS: FooterSection[] = [
  {
    title: { en: "Calculators", bm: "Kalkulator", zh: "计算器" },
    links: [
      { href: "/calculators", label: { en: "All Calculators", bm: "Semua Kalkulator", zh: "全部计算器" } },
      { href: "/bmi-calculator", label: { en: "BMI Calculator", bm: "Kalkulator BMI", zh: "BMI 计算器" } },
      { href: "/salary-calculator-malaysia", label: { en: "Salary Calculator", bm: "Kalkulator Gaji", zh: "薪水计算器" } },
      { href: "/income-tax-calculator-malaysia", label: { en: "Income Tax Calculator", bm: "Kalkulator Cukai Pendapatan", zh: "所得税计算器" } },
      { href: "/epf-calculator-malaysia", label: { en: "EPF Calculator", bm: "Kalkulator KWSP", zh: "EPF/KWSP 计算器" } },
      { href: "/pcb-calculator-malaysia", label: { en: "PCB Calculator", bm: "Kalkulator PCB", zh: "PCB 计算器" } },
      { href: "/loan-calculator", label: { en: "Loan Calculator", bm: "Kalkulator Pinjaman", zh: "贷款计算器" } },
      { href: "/dsr-calculator-malaysia", label: { en: "DSR Calculator", bm: "Kalkulator DSR", zh: "DSR 计算器" } },
      { href: "/socso-calculator-malaysia", label: { en: "SOCSO Calculator", bm: "Kalkulator PERKESO", zh: "SOCSO/PERKESO 计算器" } },
      { href: "/eis-calculator-malaysia", label: { en: "EIS Calculator", bm: "Kalkulator SIP/EIS", zh: "EIS/SIP 计算器" } },
    ],
  },
  {
    title: { en: "Guides", bm: "Panduan", zh: "指南" },
    links: [
      { href: "/guides", label: { en: "All Guides", bm: "Semua Panduan", zh: "全部指南" } },
      { href: "/guides/epf-contribution-guide-malaysia", label: { en: "EPF Contribution Guide", bm: "Panduan Caruman KWSP", zh: "EPF 供款指南" } },
      { href: "/guides/how-to-calculate-salary-after-epf", label: { en: "Salary After EPF", bm: "Gaji Selepas KWSP", zh: "EPF 后薪水" } },
      { href: "/guides/salary-deductions-explained-malaysia", label: { en: "Salary Deductions Explained", bm: "Potongan Gaji Dijelaskan", zh: "薪水扣除说明" } },
      { href: "/guides/how-to-reduce-income-tax-malaysia", label: { en: "Reduce Income Tax", bm: "Kurangkan Cukai Pendapatan", zh: "减少所得税" } },
      { href: "/guides/what-is-dsr-malaysia", label: { en: "What Is DSR?", bm: "Apa Itu DSR?", zh: "什么是 DSR？" } },
      { href: "/guides/first-home-buyer-guide-malaysia", label: { en: "First Home Buyer Guide", bm: "Panduan Pembeli Rumah Pertama", zh: "首购族指南" } },
      { href: "/guides/how-to-check-ccris-malaysia", label: { en: "How to Check CCRIS", bm: "Cara Semak CCRIS", zh: "如何查询 CCRIS" } },
      { href: "/guides/how-to-improve-ctos-score-malaysia", label: { en: "Improve CTOS Score", bm: "Baiki Skor CTOS", zh: "改善 CTOS 分数" } },
      { href: "/guides/socso-contribution-table-malaysia", label: { en: "SOCSO Contribution Table", bm: "Jadual Caruman PERKESO", zh: "SOCSO 供款表" } },
      { href: "/guides/emergency-fund-malaysia", label: { en: "Emergency Fund Guide", bm: "Panduan Dana Kecemasan", zh: "紧急基金指南" } },
      { href: "/guides/rm3000-salary-budget-plan-malaysia", label: { en: "RM3,000 Budget Plan", bm: "Pelan Bajet RM3,000", zh: "RM3,000 预算计划" } },
    ],
  },
  {
    title: { en: "Company", bm: "Syarikat", zh: "公司" },
    links: [
      { href: "/about", label: { en: "About Us", bm: "Tentang Kami", zh: "关于我们" } },
      { href: "/contact", label: { en: "Contact", bm: "Hubungi Kami", zh: "联系我们" } },
      { href: "/privacy-policy", label: { en: "Privacy Policy", bm: "Dasar Privasi", zh: "隐私政策" } },
      { href: "/terms", label: { en: "Terms of Use", bm: "Terma Penggunaan", zh: "使用条款" } },
    ],
  },
];

export default function Footer() {
  const { lang } = useLang();
  const copy = FOOTER_COPY[lang];

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-xl mb-3">
              <span className="text-2xl" aria-hidden="true">
                📊
              </span>
              SmartCalc MY
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">{copy.brandDescription}</p>
          </div>

          {SECTIONS.map((section) => (
            <div key={section.title.en}>
              <h3 className="text-white font-semibold mb-4">{section.title[lang]}</h3>
              <ul className="space-y-2">
                {section.links.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm hover:text-white transition-colors">
                      {item.label[lang]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>
            © {new Date().getFullYear()} SmartCalc MY. {copy.rights}
          </p>
          <p className="text-xs text-gray-600 text-center sm:text-right max-w-sm">{copy.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
