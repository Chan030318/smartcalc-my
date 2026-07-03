"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { trackIncomeTaxCalculated } from "@/lib/gtag";
import { useLang } from "@/components/LangProvider";

// ─── Tax brackets YA 2024, resident individual ────────────────────────────────
const BRACKETS = [
  { upto: 5_000, rate: 0 },
  { upto: 20_000, rate: 0.01 },
  { upto: 35_000, rate: 0.03 },
  { upto: 50_000, rate: 0.08 },
  { upto: 70_000, rate: 0.13 },
  { upto: 100_000, rate: 0.21 },
  { upto: 400_000, rate: 0.24 },
  { upto: 600_000, rate: 0.245 },
  { upto: 2_000_000, rate: 0.25 },
  { upto: Infinity, rate: 0.3 },
];

interface BracketRow {
  range: string;
  rate: string;
  chargeable: number;
  tax: number;
}

interface TaxResult {
  annualIncome: number;
  totalRelief: number;
  chargeableIncome: number;
  taxPayable: number;
  effectiveRate: number;
  monthlyPcb: number;
  bracketRows: BracketRow[];
}

function calcTax(chargeableIncome: number): { tax: number; rows: BracketRow[] } {
  if (chargeableIncome <= 0) return { tax: 0, rows: [] };
  let tax = 0;
  let prev = 0;
  const rows: BracketRow[] = [];

  for (const b of BRACKETS) {
    if (chargeableIncome <= prev) break;
    const slice = Math.min(chargeableIncome, b.upto) - prev;
    const bracketTax = slice * b.rate;
    tax += bracketTax;

    const lower = prev === 0 ? 0 : prev + 1;
    const upper = b.upto === Infinity ? "above" : b.upto;
    const range =
      b.upto === Infinity
        ? `Above RM ${fmt(prev)}`
        : prev === 0
        ? `First RM ${fmt(b.upto)}`
        : `RM ${fmt(lower)} – RM ${fmt(b.upto as number)}`;

    rows.push({
      range,
      rate: `${(b.rate * 100).toFixed(1)}%`,
      chargeable: r2(slice),
      tax: r2(bracketTax),
    });
    prev = b.upto === Infinity ? prev : b.upto;
  }

  return { tax: r2(tax), rows };
}

function r2(n: number) {
  return Math.round(n * 100) / 100;
}

function fmt(n: number) {
  return n.toLocaleString("en-MY", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function fmtDec(n: number) {
  return n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function capRelief(val: string, cap: number): number {
  const n = parseFloat(val.replace(/,/g, "")) || 0;
  return Math.min(Math.max(n, 0), cap);
}

const PERSONAL_RELIEF = 9_000;

const RICH_DAD_COPY = {
  en: {
    formTitle: "Enter Your Income & Reliefs",
    annualIncome: "Annual Income",
    annualHint: "Gross annual salary, rental income, freelance income, or total income for the year",
    reliefs: "Tax Reliefs",
    optional: "optional",
    epf: "EPF Contributions / Life Insurance",
    medical: "Medical & Dental",
    education: "Education Fees",
    spouse: "Spouse Relief",
    spouseAmount: "RM4,000",
    children: "Children under 18",
    child: "child",
    childrenPlural: "children",
    calculate: "Calculate Tax",
    reset: "Reset",
    empty: "Enter your annual income and tap Calculate Tax to see your estimated tax payable.",
    taxPayable: "Estimated Tax Payable",
    perYear: "per year",
    monthlyPcb: "Monthly PCB",
    monthlyPcbSub: "est. monthly deduction",
    effectiveRate: "Effective Rate",
    effectiveRateSub: "of annual income",
    chargeableIncome: "Chargeable Income",
    chargeableIncomeSub: "after all reliefs",
    totalReliefs: "Total Reliefs",
    totalReliefsSub: "deducted from income",
    annualIncomeMetric: "Annual Income",
    reliefsMetric: "Reliefs",
    taxMetric: "Tax Payable",
    rebate: "RM400 rebate applied",
    rebateNote: "chargeable income is below RM35,000.",
    ratRaceTitle: "Rat Race Insight",
    taxedCashFlow: "After tax, the strongest move is not just earning more. It is turning leftover cash flow into assets that can pay you back.",
    richDadLesson: "Rich Dad lesson: high income alone does not create freedom. Assets create cash flow; liabilities consume cash flow.",
    assetAction: "Next move: decide how much of your after-tax income can go into EPF top-ups, ASB, REITs, dividend stocks, or an emergency fund before lifestyle spending expands.",
    activeIncome: "Active income taxed",
    assetIncome: "Cash flow to build assets",
    freedomLink: "Calculate freedom number",
    reliefBreakdown: "Relief Breakdown",
    taxByBracket: "Tax by Bracket",
    noTax: "No tax payable - chargeable income is zero.",
    bracket: "Bracket",
    rate: "Rate",
    howTitle: "How to Read This Like Rich Dad",
    howBody: "Income tax tells you how much active income leaks out before it reaches your pocket. The important question is what you do with the cash flow that remains.",
    step1: "Earn active income",
    step1Body: "Salary and business income are useful starting points, but they stop when you stop working.",
    step2: "Protect cash flow",
    step2Body: "Use legal reliefs, avoid bad debt, and keep enough emergency cash so one setback does not push you deeper into the Rat Race.",
    step3: "Buy or build assets",
    step3Body: "Move part of after-tax income into assets that can produce passive income over time.",
    back: "Back to all calculators",
  },
  bm: {
    formTitle: "Masukkan Pendapatan & Pelepasan",
    annualIncome: "Pendapatan Tahunan",
    annualHint: "Gaji kasar tahunan, sewa, freelance, atau jumlah pendapatan setahun",
    reliefs: "Pelepasan Cukai",
    optional: "pilihan",
    epf: "Caruman EPF / Insurans Hayat",
    medical: "Perubatan & Pergigian",
    education: "Yuran Pendidikan",
    spouse: "Pelepasan Pasangan",
    spouseAmount: "RM4,000",
    children: "Anak bawah 18",
    child: "anak",
    childrenPlural: "anak",
    calculate: "Kira Cukai",
    reset: "Reset",
    empty: "Masukkan pendapatan tahunan dan tekan Kira Cukai untuk lihat anggaran cukai.",
    taxPayable: "Anggaran Cukai Perlu Dibayar",
    perYear: "setahun",
    monthlyPcb: "PCB Bulanan",
    monthlyPcbSub: "anggaran potongan bulanan",
    effectiveRate: "Kadar Efektif",
    effectiveRateSub: "daripada pendapatan tahunan",
    chargeableIncome: "Pendapatan Bercukai",
    chargeableIncomeSub: "selepas semua pelepasan",
    totalReliefs: "Jumlah Pelepasan",
    totalReliefsSub: "ditolak daripada pendapatan",
    annualIncomeMetric: "Pendapatan Tahunan",
    reliefsMetric: "Pelepasan",
    taxMetric: "Cukai",
    rebate: "Rebat RM400 digunakan",
    rebateNote: "pendapatan bercukai bawah RM35,000.",
    ratRaceTitle: "Pandangan Rat Race",
    taxedCashFlow: "Selepas cukai, langkah paling kuat bukan sekadar tambah gaji. Ia ialah menukar lebihan cash flow kepada aset yang boleh membayar anda semula.",
    richDadLesson: "Pelajaran Rich Dad: pendapatan tinggi sahaja tidak mencipta kebebasan. Aset mencipta cash flow; liabiliti makan cash flow.",
    assetAction: "Langkah seterusnya: tentukan berapa daripada pendapatan selepas cukai boleh masuk ke EPF top-up, ASB, REITs, saham dividen, atau dana kecemasan sebelum gaya hidup membesar.",
    activeIncome: "Pendapatan aktif dikenakan cukai",
    assetIncome: "Cash flow untuk bina aset",
    freedomLink: "Kira freedom number",
    reliefBreakdown: "Pecahan Pelepasan",
    taxByBracket: "Cukai Mengikut Bracket",
    noTax: "Tiada cukai perlu dibayar - pendapatan bercukai adalah sifar.",
    bracket: "Bracket",
    rate: "Kadar",
    howTitle: "Cara Baca Ini Seperti Rich Dad",
    howBody: "Cukai pendapatan menunjukkan berapa banyak pendapatan aktif keluar sebelum masuk poket. Soalan penting ialah apa anda buat dengan cash flow yang tinggal.",
    step1: "Jana pendapatan aktif",
    step1Body: "Gaji dan pendapatan bisnes ialah permulaan yang berguna, tetapi ia berhenti bila anda berhenti kerja.",
    step2: "Lindungi cash flow",
    step2Body: "Gunakan pelepasan sah, elak hutang jahat, dan simpan dana kecemasan supaya satu masalah tidak menolak anda lebih dalam ke Rat Race.",
    step3: "Beli atau bina aset",
    step3Body: "Alihkan sebahagian pendapatan selepas cukai ke aset yang boleh menjana pendapatan pasif dari masa ke masa.",
    back: "Kembali ke semua kalkulator",
  },
  zh: {
    formTitle: "输入收入与税务减免",
    annualIncome: "年度收入",
    annualHint: "全年税前薪水、租金、兼职收入，或一整年的总收入",
    reliefs: "税务减免",
    optional: "可选",
    epf: "EPF 供款 / 人寿保险",
    medical: "医疗与牙科",
    education: "教育费用",
    spouse: "配偶减免",
    spouseAmount: "RM4,000",
    children: "18 岁以下孩子",
    child: "个孩子",
    childrenPlural: "个孩子",
    calculate: "计算税额",
    reset: "重设",
    empty: "输入年度收入，然后点击计算税额，就能看到预计应缴税。",
    taxPayable: "预计应缴税",
    perYear: "每年",
    monthlyPcb: "每月 PCB",
    monthlyPcbSub: "预计每月扣税",
    effectiveRate: "有效税率",
    effectiveRateSub: "占年度收入",
    chargeableIncome: "应课税收入",
    chargeableIncomeSub: "扣除所有减免后",
    totalReliefs: "总减免",
    totalReliefsSub: "从收入中扣除",
    annualIncomeMetric: "年度收入",
    reliefsMetric: "税务减免",
    taxMetric: "应缴税",
    rebate: "已应用 RM400 回扣",
    rebateNote: "应课税收入低于 RM35,000。",
    ratRaceTitle: "老鼠圈提醒",
    taxedCashFlow: "扣税之后，最重要的不只是赚更多，而是把剩下的现金流变成会付钱给你的资产。",
    richDadLesson: "富爸爸方法：高收入不等于财务自由。资产创造现金流，负债消耗现金流。",
    assetAction: "下一步：决定税后收入中有多少要先进入 EPF top-up、ASB、REITs、股息股票或紧急备用金，而不是马上提高生活开销。",
    activeIncome: "主动收入被征税",
    assetIncome: "用现金流建立资产",
    freedomLink: "计算自由数字",
    reliefBreakdown: "减免明细",
    taxByBracket: "分层税额",
    noTax: "无需缴税 - 应课税收入为零。",
    bracket: "税率层级",
    rate: "税率",
    howTitle: "用富爸爸的方法看这份税表",
    howBody: "所得税让你看到主动收入在进到口袋前流失了多少。真正重要的问题是：剩下的现金流你拿去消费，还是拿去买资产？",
    step1: "赚取主动收入",
    step1Body: "薪水和生意收入是起点，但你停止工作时，它们也会停止。",
    step2: "保护现金流",
    step2Body: "合法使用税务减免，避开坏债，准备紧急备用金，避免一次意外把你推回老鼠圈。",
    step3: "购买或建立资产",
    step3Body: "把一部分税后收入转进长期能产生被动收入的资产。",
    back: "回到所有计算器",
  },
} as const;


const faqs = [
  {
    q: "Who needs to file income tax in Malaysia?",
    a: "Malaysian residents with an annual income exceeding RM34,000 (after EPF deduction) are required to register and file their income tax with LHDN (Lembaga Hasil Dalam Negeri). Non-residents pay a flat rate of 30% on Malaysian-sourced income.",
  },
  {
    q: "What is chargeable income?",
    a: "Chargeable income is your total annual income minus all eligible tax reliefs and deductions. It is the amount that income tax rates are actually applied to. Reducing your chargeable income through reliefs is the most effective way to lower your tax bill.",
  },
  {
    q: "What is the personal relief amount for 2024?",
    a: "Every Malaysian tax resident automatically receives a personal relief of RM9,000 per year. No documentation is required — it is deducted from your income before tax is calculated.",
  },
  {
    q: "Can I claim EPF contributions as a tax relief?",
    a: "Yes. EPF contributions (and/or life insurance premiums) are claimable up to a combined maximum of RM7,000 per year. If you contribute 11% of your salary to EPF, you will typically max out this relief at salaries above roughly RM5,300/month.",
  },
  {
    q: "What is the difference between tax relief and tax rebate?",
    a: "Tax reliefs reduce your chargeable income before the tax rate is applied — they save you money proportional to your tax bracket. Tax rebates (like the RM400 rebate for income below RM35,000) are deducted directly from the tax payable after calculation, giving a fixed ringgit-for-ringgit reduction.",
  },
  {
    q: "What is PCB and how does it relate to my annual tax?",
    a: "PCB (Potongan Cukai Berjadual) is the monthly income tax instalment deducted from your salary by your employer and paid directly to LHDN. It is an estimate of your annual tax liability divided across 12 months. When you file your annual return (Form BE), any over- or under-payment is settled.",
  },
  {
    q: "When is the deadline to file my income tax return?",
    a: "For salaried employees (Form BE), the deadline is 30 April each year for the preceding year of assessment. For example, YA 2024 taxes must be filed by 30 April 2025. e-Filing via MyTax is recommended and extends the deadline by 15 days.",
  },
];

export default function IncomeTaxCalculator() {
  const { lang } = useLang();
  const copy = RICH_DAD_COPY[lang];
  const [incomeInput, setIncomeInput] = useState("");
  const [epfInput, setEpfInput] = useState("");
  const [medicalInput, setMedicalInput] = useState("");
  const [educationInput, setEducationInput] = useState("");
  const [spouseRelief, setSpouseRelief] = useState(false);
  const [childrenUnder18, setChildrenUnder18] = useState("0");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const annualIncome = parseFloat(incomeInput.replace(/,/g, "")) || 0;

  const result = useMemo((): TaxResult | null => {
    if (!submitted || annualIncome <= 0) return null;

    const epfRelief = capRelief(epfInput, 7_000);
    const medicalRelief = capRelief(medicalInput, 10_000);
    const educationRelief = capRelief(educationInput, 7_000);
    const spouseAmt = spouseRelief ? 4_000 : 0;
    const childrenAmt = (parseInt(childrenUnder18) || 0) * 2_000;

    const totalRelief =
      PERSONAL_RELIEF + epfRelief + medicalRelief + educationRelief + spouseAmt + childrenAmt;

    const chargeableIncome = Math.max(0, annualIncome - totalRelief);
    const { tax, rows } = calcTax(chargeableIncome);

    // RM400 rebate if chargeable income ≤ RM35,000
    const rebate = chargeableIncome <= 35_000 ? Math.min(400, tax) : 0;
    const taxPayable = r2(Math.max(0, tax - rebate));

    const effectiveRate = annualIncome > 0 ? (taxPayable / annualIncome) * 100 : 0;
    const monthlyPcb = r2(taxPayable / 12);

    return {
      annualIncome: r2(annualIncome),
      totalRelief: r2(totalRelief),
      chargeableIncome: r2(chargeableIncome),
      taxPayable,
      effectiveRate: Math.round(effectiveRate * 10) / 10,
      monthlyPcb,
      bracketRows: rows,
    };
  }, [submitted, annualIncome, epfInput, medicalInput, educationInput, spouseRelief, childrenUnder18]);

  const handleCalculateAndTrack = () => {
    if (annualIncome <= 0) return;
    setSubmitted(true);
  };

  // Fire analytics event once per calculation (when result first appears after submit)
  const trackedTax = useRef<number | null>(null);
  useEffect(() => {
    if (result && result.taxPayable !== trackedTax.current) {
      trackedTax.current = result.taxPayable;
      trackIncomeTaxCalculated(result.annualIncome, result.taxPayable);
    }
  }, [result]);

  const handleReset = () => {
    setIncomeInput("");
    setEpfInput("");
    setMedicalInput("");
    setEducationInput("");
    setSpouseRelief(false);
    setChildrenUnder18("0");
    setSubmitted(false);
  };

  const reliefRows = result
    ? [
        { label: "Personal Relief", amount: PERSONAL_RELIEF, note: "Automatic — every resident" },
        {
          label: "EPF / Life Insurance",
          amount: capRelief(epfInput, 7_000),
          note: "Capped at RM7,000",
        },
        {
          label: "Medical & Dental",
          amount: capRelief(medicalInput, 10_000),
          note: "Capped at RM10,000",
        },
        {
          label: "Education Fees",
          amount: capRelief(educationInput, 7_000),
          note: "Capped at RM7,000",
        },
        ...(spouseRelief ? [{ label: copy.spouse, amount: 4_000, note: "Non-working spouse" }] : []),
        ...((parseInt(childrenUnder18) || 0) > 0
          ? [
              {
                label: `${copy.children} (x${childrenUnder18})`,
                amount: (parseInt(childrenUnder18) || 0) * 2_000,
                note: "RM2,000 each",
              },
            ]
          : []),
      ]
    : [];

  return (
    <>
      {/* Calculator */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* ── Inputs ── */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">
            <h2 className="text-lg font-semibold text-gray-800">{copy.formTitle}</h2>

            {/* Annual income */}
            <div>
              <label htmlFor="income" className="block text-sm font-medium text-gray-700 mb-1.5">
                {copy.annualIncome}
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">
                  RM
                </span>
                <input
                  id="income"
                  type="number"
                  min="0"
                  step="1000"
                  placeholder="e.g. 72000"
                  value={incomeInput}
                  onChange={(e) => { setIncomeInput(e.target.value); setSubmitted(false); }}
                  onKeyDown={(e) => e.key === "Enter" && handleCalculateAndTrack()}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-12 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                />
              </div>
              <p className="text-xs text-gray-400 mt-1.5">{copy.annualHint}</p>
            </div>

            {/* Reliefs */}
            <div className="space-y-4">
              <p className="text-sm font-semibold text-gray-700">{copy.reliefs} <span className="font-normal text-gray-400">({copy.optional})</span></p>

              {/* EPF */}
              <div>
                <label htmlFor="epf" className="block text-xs font-medium text-gray-600 mb-1">
                  {copy.epf}
                  <span className="ml-1.5 text-gray-400 font-normal">max RM7,000</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 pointer-events-none">RM</span>
                  <input
                    id="epf"
                    type="number"
                    min="0"
                    max="7000"
                    placeholder="e.g. 4800"
                    value={epfInput}
                    onChange={(e) => { setEpfInput(e.target.value); setSubmitted(false); }}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 pl-12 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Medical */}
              <div>
                <label htmlFor="medical" className="block text-xs font-medium text-gray-600 mb-1">
                  {copy.medical}
                  <span className="ml-1.5 text-gray-400 font-normal">max RM10,000</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 pointer-events-none">RM</span>
                  <input
                    id="medical"
                    type="number"
                    min="0"
                    max="10000"
                    placeholder="e.g. 2000"
                    value={medicalInput}
                    onChange={(e) => { setMedicalInput(e.target.value); setSubmitted(false); }}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 pl-12 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Education */}
              <div>
                <label htmlFor="education" className="block text-xs font-medium text-gray-600 mb-1">
                  {copy.education}
                  <span className="ml-1.5 text-gray-400 font-normal">max RM7,000</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 pointer-events-none">RM</span>
                  <input
                    id="education"
                    type="number"
                    min="0"
                    max="7000"
                    placeholder="e.g. 3000"
                    value={educationInput}
                    onChange={(e) => { setEducationInput(e.target.value); setSubmitted(false); }}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 pl-12 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Spouse + children */}
              <div className="grid grid-cols-2 gap-3">
                <label className="flex items-start gap-2.5 cursor-pointer bg-gray-50 rounded-xl p-3 border border-gray-100 hover:border-orange-200 transition-colors">
                  <input
                    type="checkbox"
                    checked={spouseRelief}
                    onChange={(e) => { setSpouseRelief(e.target.checked); setSubmitted(false); }}
                    className="mt-0.5 accent-orange-500"
                  />
                  <span className="text-xs text-gray-700 leading-snug">
                    <span className="font-medium">{copy.spouse}</span>
                    <br />
                    <span className="text-gray-400">RM4,000</span>
                  </span>
                </label>

                <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                  <label htmlFor="children" className="text-xs font-medium text-gray-700 block mb-1.5">
                    {copy.children}
                  </label>
                  <select
                    id="children"
                    value={childrenUnder18}
                    onChange={(e) => { setChildrenUnder18(e.target.value); setSubmitted(false); }}
                    className="w-full text-sm bg-white border border-gray-200 rounded-lg px-2 py-1.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    {[0, 1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? copy.child : copy.childrenPlural}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleCalculateAndTrack}
                disabled={!annualIncome || annualIncome <= 0}
                className="flex-1 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-200 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                {copy.calculate}
              </button>
              {submitted && (
                <button
                  onClick={handleReset}
                  className="px-5 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors text-sm"
                >
                  {copy.reset}
                </button>
              )}
            </div>
          </div>

          {/* ── Results ── */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 flex flex-col justify-center">
            {!result ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🧾</div>
                <p className="text-gray-400 text-sm">
                  {copy.empty}
                </p>
              </div>
            ) : (
              <>
                {/* Primary figure */}
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-500 mb-1">{copy.taxPayable}</p>
                  <p className="text-5xl font-bold text-orange-500 mb-1">
                    RM {fmtDec(result.taxPayable)}
                  </p>
                  <p className="text-sm text-gray-400">{copy.perYear}</p>
                </div>

                {/* Key metrics */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: copy.monthlyPcb, value: `RM ${fmtDec(result.monthlyPcb)}`, sub: copy.monthlyPcbSub },
                    { label: copy.effectiveRate, value: `${result.effectiveRate}%`, sub: copy.effectiveRateSub },
                    { label: copy.chargeableIncome, value: `RM ${fmt(result.chargeableIncome)}`, sub: copy.chargeableIncomeSub },
                    { label: copy.totalReliefs, value: `RM ${fmt(result.totalRelief)}`, sub: copy.totalReliefsSub },
                  ].map((m) => (
                    <div key={m.label} className="bg-orange-50 rounded-xl px-4 py-3 text-center">
                      <p className="text-xs text-orange-600 mb-0.5">{m.label}</p>
                      <p className="font-bold text-orange-800 text-sm">{m.value}</p>
                      <p className="text-xs text-orange-400">{m.sub}</p>
                    </div>
                  ))}
                </div>

                {/* Visual bar */}
                <div className="space-y-2">
                  {[
                    { label: copy.annualIncomeMetric, value: result.annualIncome, color: "bg-gray-300", pct: 100 },
                    { label: copy.reliefsMetric, value: result.totalRelief, color: "bg-green-400", pct: (result.totalRelief / result.annualIncome) * 100 },
                    { label: copy.taxMetric, value: result.taxPayable, color: "bg-orange-400", pct: (result.taxPayable / result.annualIncome) * 100 },
                  ].map((row) => (
                    <div key={row.label}>
                      <div className="flex justify-between text-xs text-gray-500 mb-0.5">
                        <span>{row.label}</span>
                        <span className="font-medium text-gray-700">RM {fmtDec(row.value)}</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${row.color} transition-all duration-500`}
                          style={{ width: `${Math.min(row.pct, 100)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {result.chargeableIncome <= 35_000 && result.taxPayable > 0 && (
                  <div className="mt-4 bg-green-50 border border-green-100 rounded-xl px-4 py-3 text-xs text-green-700">
                    <span className="font-semibold">{copy.rebate}</span> - {copy.rebateNote}
                  </div>
                )}

                <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-left">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-700">{copy.ratRaceTitle}</p>
                  <p className="mt-3 text-sm leading-6 text-amber-950">{copy.taxedCashFlow}</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl bg-white/70 p-3">
                      <p className="text-xs font-bold text-gray-500">{copy.activeIncome}</p>
                      <p className="mt-1 text-lg font-black text-orange-600">RM {fmtDec(result.taxPayable)}</p>
                    </div>
                    <div className="rounded-xl bg-white/70 p-3">
                      <p className="text-xs font-bold text-gray-500">{copy.assetIncome}</p>
                      <p className="mt-1 text-lg font-black text-emerald-700">RM {fmtDec(Math.max(0, result.annualIncome - result.taxPayable))}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-700">{copy.richDadLesson}</p>
                  <p className="mt-2 text-sm leading-6 text-gray-700">{copy.assetAction}</p>
                  <Link href="/financial-freedom-calculator" className="mt-4 inline-flex text-sm font-bold text-amber-800 hover:text-amber-700">
                    {copy.freedomLink} <span aria-hidden="true" className="ml-1">-&gt;</span>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Relief breakdown + bracket table */}
      {result && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Relief breakdown */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-5">{copy.reliefBreakdown}</h2>
              <div className="space-y-2">
                <div className="flex justify-between text-sm py-2 border-b border-gray-100">
                  <span className="font-semibold text-gray-800">Annual Income</span>
                  <span className="font-semibold text-gray-800">RM {fmtDec(result.annualIncome)}</span>
                </div>
                {reliefRows.map((row) => (
                  <div key={row.label} className="flex justify-between text-sm py-1.5">
                    <div>
                      <span className="text-green-600 mr-1.5">−</span>
                      <span className="text-gray-700">{row.label}</span>
                      <span className="block text-xs text-gray-400 ml-4">{row.note}</span>
                    </div>
                    <span className="text-green-600 font-medium shrink-0 ml-2">({fmtDec(row.amount)})</span>
                  </div>
                ))}
                <div className="flex justify-between text-sm pt-3 border-t-2 border-gray-200">
                  <span className="font-bold text-gray-900">Chargeable Income</span>
                  <span className="font-bold text-gray-900">RM {fmtDec(result.chargeableIncome)}</span>
                </div>
              </div>
            </div>

            {/* Tax bracket breakdown */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-5">{copy.taxByBracket}</h2>
              {result.bracketRows.length === 0 ? (
                <p className="text-sm text-gray-400">{copy.noTax}</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-gray-100 text-left">
                        <th className="pb-2 font-semibold text-gray-600">{copy.bracket}</th>
                        <th className="pb-2 font-semibold text-gray-600 text-center">{copy.rate}</th>
                        <th className="pb-2 font-semibold text-gray-600 text-right">Tax (RM)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.bracketRows.map((row) => (
                        <tr key={row.range} className={`border-b border-gray-50 ${row.tax === 0 ? "text-gray-400" : "text-gray-700"}`}>
                          <td className="py-2 pr-2">{row.range}</td>
                          <td className="py-2 text-center">{row.rate}</td>
                          <td className="py-2 text-right font-medium">{fmtDec(row.tax)}</td>
                        </tr>
                      ))}
                      <tr className="border-t-2 border-gray-200 font-bold text-gray-900">
                        <td className="pt-3 pb-1" colSpan={2}>Tax Payable</td>
                        <td className="pt-3 pb-1 text-right text-orange-600">{fmtDec(result.taxPayable)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">{copy.howTitle}</h2>
            <p className="text-gray-600 leading-relaxed">
              {copy.howBody}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { step: "1", title: copy.step1, body: copy.step1Body, color: "bg-orange-50 border-orange-100" },
              { step: "2", title: copy.step2, body: copy.step2Body, color: "bg-yellow-50 border-yellow-100" },
              { step: "3", title: copy.step3, body: copy.step3Body, color: "bg-green-50 border-green-100" },
            ].map((c) => (
              <div key={c.step} className={`rounded-xl border p-5 ${c.color}`}>
                <div className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 mb-3">{c.step}</div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1.5">{c.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full bracket reference table */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Income Tax Rates — YA 2024</h2>
          <p className="text-gray-500 text-sm mb-6">Progressive rates for Malaysian tax residents. Rates apply only to the income within each bracket, not the total income.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-gray-100">
                  <th className="pb-3 font-semibold text-gray-700">Chargeable Income (RM)</th>
                  <th className="pb-3 font-semibold text-gray-700 text-center">Rate</th>
                  <th className="pb-3 font-semibold text-gray-700 text-right hidden sm:table-cell">Max Tax in Bracket (RM)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { range: "0 – 5,000", rate: "0%", max: "0" },
                  { range: "5,001 – 20,000", rate: "1%", max: "150" },
                  { range: "20,001 – 35,000", rate: "3%", max: "450" },
                  { range: "35,001 – 50,000", rate: "8%", max: "1,200" },
                  { range: "50,001 – 70,000", rate: "13%", max: "2,600" },
                  { range: "70,001 – 100,000", rate: "21%", max: "6,300" },
                  { range: "100,001 – 400,000", rate: "24%", max: "72,000" },
                  { range: "400,001 – 600,000", rate: "24.5%", max: "49,000" },
                  { range: "600,001 – 2,000,000", rate: "25%", max: "350,000" },
                  { range: "Above 2,000,000", rate: "30%", max: "—" },
                ].map((row) => (
                  <tr key={row.range} className="border-b border-gray-50 last:border-0">
                    <td className="py-3 text-gray-700">{row.range}</td>
                    <td className="py-3 text-center font-medium text-gray-800">{row.rate}</td>
                    <td className="py-3 text-right text-gray-500 hidden sm:table-cell">{row.max}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-4">Source: Lembaga Hasil Dalam Negeri (LHDN), Year of Assessment 2024. Rates subject to change — verify at <span className="underline">hasil.gov.my</span> before filing.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                <span className="font-medium text-gray-800 text-sm sm:text-base">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Back to home */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange-600 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {copy.back}
        </Link>
      </section>
    </>
  );
}
