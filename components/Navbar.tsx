"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/components/LangProvider";
import type { Lang } from "@/lib/i18n";

const LANGS: { code: Lang; label: string }[] = [
  { code: "bm", label: "BM" },
  { code: "en", label: "EN" },
  { code: "zh", label: "中" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  const navLinks = [
    { href: "/financial-freedom-calculator", label: t.nav.freedom,  emoji: "🏆" },
    { href: "/calculators",                  label: t.nav.tools,    emoji: "🧮" },
    { href: "/guides",                       label: t.nav.guides,   emoji: "📚" },
  ];

  const toolGroups = [
    {
      heading: t.nav.freedom,
      links: [
        { href: "/financial-freedom-calculator", label: lang === "zh" ? "自由数字计算器" : lang === "en" ? "Freedom Number Calculator" : "Freedom Number Calculator", emoji: "🏆" },
        { href: "/compound-interest-calculator",  label: lang === "zh" ? "复利计算器" : lang === "en" ? "Compound Interest" : "Faedah Kompaun", emoji: "📈" },
        { href: "/savings-calculator-malaysia",   label: lang === "zh" ? "储蓄计算器" : lang === "en" ? "Savings Calculator" : "Kalkulator Simpanan", emoji: "💰" },
        { href: "/epf-calculator-malaysia",       label: lang === "zh" ? "EPF计算器" : lang === "en" ? "EPF Calculator" : "Kalkulator EPF", emoji: "🏛️" },
      ],
    },
    {
      heading: t.nav.loans,
      links: [
        { href: "/mortgage-calculator-malaysia",     label: lang === "zh" ? "房贷计算器" : lang === "en" ? "Mortgage Calculator" : "Kalkulator Mortgage", emoji: "🏠" },
        { href: "/car-loan-calculator-malaysia",     label: lang === "zh" ? "车贷计算器" : lang === "en" ? "Car Loan Calculator" : "Kalkulator Kereta", emoji: "🚗" },
        { href: "/loan-calculator",                  label: lang === "zh" ? "贷款计算器" : lang === "en" ? "Loan Calculator" : "Kalkulator Pinjaman", emoji: "🏦" },
        { href: "/dsr-calculator-malaysia",          label: lang === "zh" ? "DSR计算器" : lang === "en" ? "DSR Calculator" : "Kalkulator DSR", emoji: "📊" },
      ],
    },
    {
      heading: t.nav.tax,
      links: [
        { href: "/salary-calculator-malaysia",   label: lang === "zh" ? "薪资计算器" : lang === "en" ? "Salary Calculator" : "Kalkulator Gaji", emoji: "💸" },
        { href: "/income-tax-calculator-malaysia", label: lang === "zh" ? "所得税计算器" : lang === "en" ? "Income Tax" : "Cukai Pendapatan", emoji: "🧾" },
        { href: "/pcb-calculator-malaysia",       label: lang === "zh" ? "PCB计算器" : lang === "en" ? "PCB Calculator" : "Kalkulator PCB", emoji: "📋" },
        { href: "/socso-calculator-malaysia",     label: lang === "zh" ? "SOCSO计算器" : lang === "en" ? "SOCSO Calculator" : "Kalkulator SOCSO", emoji: "🛡️" },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <span className="text-2xl">💡</span>
          <div className="leading-none">
            <span className="font-black text-lg text-gray-900">SmartCalc</span>
            <span className="font-black text-lg text-emerald-600"> MY</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {/* Mega dropdown trigger */}
          <button
            onClick={() => setToolsOpen(!toolsOpen)}
            onBlur={() => setTimeout(() => setToolsOpen(false), 150)}
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors"
          >
            🧮 {lang === "zh" ? "工具" : lang === "en" ? "Tools" : "Alat"}
            <svg className={`w-4 h-4 transition-transform ${toolsOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <Link href="/financial-freedom-calculator" className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors">
            🏆 {t.nav.freedom}
          </Link>

          <Link href="/guides" className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors">
            📚 {t.nav.guides}
          </Link>

          {/* Spend game — fun link */}
          <Link href="/spend-billionaire-money" className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-amber-700 hover:text-amber-600 hover:bg-amber-50 rounded-xl transition-colors">
            💸 {lang === "zh" ? "挥霍游戏" : lang === "en" ? "Billionaire Game" : "Permainan Bilionair"}
          </Link>
        </div>

        {/* Right side: Lang switcher + mobile hamburger */}
        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <div className="flex items-center bg-gray-100 rounded-xl p-0.5 gap-0.5">
            {LANGS.map((l) => (
              <button key={l.code} onClick={() => setLang(l.code)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${lang === l.code ? "bg-white text-emerald-700 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}>
                {l.label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-xl text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mega dropdown (desktop) */}
      {toolsOpen && (
        <div className="hidden lg:block absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-xl z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-3 gap-8">
            {toolGroups.map((g) => (
              <div key={g.heading}>
                <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-3">{g.heading}</p>
                <div className="space-y-1">
                  {g.links.map((l) => (
                    <Link key={l.href} href={l.href} onClick={() => setToolsOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-gray-700 font-medium hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                      <span className="text-base">{l.emoji}</span>
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-4">
          {toolGroups.map((g) => (
            <div key={g.heading}>
              <p className="text-xs font-black text-gray-400 uppercase tracking-wider mb-2 px-2">{g.heading}</p>
              <div className="space-y-0.5">
                {g.links.map((l) => (
                  <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
                    <span>{l.emoji}</span>{l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <div className="pt-2 border-t border-gray-100">
            <Link href="/spend-billionaire-money" onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-amber-700 hover:bg-amber-50 transition-colors">
              💸 {lang === "zh" ? "挥霍游戏" : lang === "en" ? "Billionaire Game" : "Permainan Bilionair"}
            </Link>
            <Link href="/guides" onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors">
              📚 {t.nav.guides}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
