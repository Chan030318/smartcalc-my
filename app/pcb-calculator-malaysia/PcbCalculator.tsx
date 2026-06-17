"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { trackPcbCalculated } from "@/lib/gtag";

// ─── Tax brackets YA 2024 ─────────────────────────────────────────────────────
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

function calcProgressiveTax(income: number): number {
  if (income <= 0) return 0;
  let tax = 0;
  let prev = 0;
  for (const b of BRACKETS) {
    if (income <= prev) break;
    tax += (Math.min(income, b.upto) - prev) * b.rate;
    prev = b.upto;
  }
  return r2(tax);
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function r2(n: number) { return Math.round(n * 100) / 100; }
function fmt(n: number) {
  return n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

type Residency = "resident" | "non-resident";
type MaritalStatus = "single" | "married-spouse-income" | "married-spouse-no-income";

interface PcbResult {
  // Inputs echo
  grossMonthly: number;
  residency: Residency;

  // Monthly deductions
  epfEmployee: number;         // statutory deduction
  annualEpf: number;

  // Reliefs used in PCB calc
  personalRelief: number;
  spouseRelief: number;
  childRelief: number;
  lifeInsRelief: number;
  medicalRelief: number;
  educationRelief: number;
  zakatMonthly: number;
  totalRelief: number;

  // Tax figures
  annualGross: number;
  chargeableIncome: number;
  annualTax: number;
  rebate: number;
  zakatOffset: number;
  annualPcb: number;
  monthlyPcb: number;

  // Payslip
  takehome: number;
  effectiveRate: number;        // PCB / gross monthly
}

function calcPcb(
  grossMonthly: number,
  residency: Residency,
  marital: MaritalStatus,
  childrenUnder18: number,
  childrenEdu: number,
  epfOverride: string,          // "" = auto 11%
  lifeIns: number,              // TP1 declared life insurance
  medical: number,
  education: number,
  zakatMonthly: number,
): PcbResult {
  // Non-resident: flat 30%, no reliefs
  if (residency === "non-resident") {
    const pcb = r2(grossMonthly * 0.3);
    return {
      grossMonthly,
      residency,
      epfEmployee: 0,
      annualEpf: 0,
      personalRelief: 0,
      spouseRelief: 0,
      childRelief: 0,
      lifeInsRelief: 0,
      medicalRelief: 0,
      educationRelief: 0,
      zakatMonthly: 0,
      totalRelief: 0,
      annualGross: r2(grossMonthly * 12),
      chargeableIncome: r2(grossMonthly * 12),
      annualTax: r2(grossMonthly * 12 * 0.3),
      rebate: 0,
      zakatOffset: 0,
      annualPcb: r2(pcb * 12),
      monthlyPcb: pcb,
      takehome: r2(grossMonthly - pcb),
      effectiveRate: 30,
    };
  }

  // EPF employee contribution
  const epfRate = epfOverride !== "" ? Math.min(Math.max(parseFloat(epfOverride) || 0, 0), 100) / 100 : 0.11;
  const epfEmployee = r2(grossMonthly * epfRate);
  const annualEpf = r2(epfEmployee * 12);
  const annualGross = r2(grossMonthly * 12);

  // Reliefs
  const personalRelief = 9_000;
  const spouseRelief = marital === "married-spouse-no-income" ? 4_000 : 0;
  const childRelief = r2(childrenUnder18 * 2_000 + childrenEdu * 8_000);
  const lifeInsRelief = Math.min(lifeIns, 3_000);
  const medicalRelief = Math.min(medical, 10_000);
  const educationRelief = Math.min(education, 7_000);
  const totalRelief = r2(
    personalRelief + spouseRelief + childRelief + lifeInsRelief + medicalRelief + educationRelief
  );

  const chargeableIncome = Math.max(0, r2(annualGross - annualEpf - totalRelief));
  const annualTax = calcProgressiveTax(chargeableIncome);
  const rebate = chargeableIncome <= 35_000 ? Math.min(400, annualTax) : 0;

  // Zakat offsets PCB 1-for-1 (annual zakat = zakatMonthly × 12)
  const zakatAnnual = r2(zakatMonthly * 12);
  const zakatOffset = Math.min(zakatAnnual, Math.max(0, annualTax - rebate));
  const annualPcb = r2(Math.max(0, annualTax - rebate - zakatOffset));
  const monthlyPcb = r2(annualPcb / 12);

  const takehome = r2(grossMonthly - epfEmployee - monthlyPcb);
  const effectiveRate = grossMonthly > 0 ? Math.round((monthlyPcb / grossMonthly) * 1000) / 10 : 0;

  return {
    grossMonthly,
    residency,
    epfEmployee,
    annualEpf,
    personalRelief,
    spouseRelief,
    childRelief,
    lifeInsRelief,
    medicalRelief,
    educationRelief,
    zakatMonthly,
    totalRelief,
    annualGross,
    chargeableIncome,
    annualTax,
    rebate,
    zakatOffset,
    annualPcb,
    monthlyPcb,
    takehome,
    effectiveRate,
  };
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "What is PCB (Potongan Cukai Berjadual)?",
    a: "PCB stands for Potongan Cukai Berjadual, meaning Monthly Tax Deduction (MTD). It is the amount your employer deducts from your monthly salary and remits directly to LHDN on your behalf. PCB is not a separate tax — it is a prepayment of your annual income tax, spread across 12 monthly instalments.",
  },
  {
    q: "How is PCB calculated by employers?",
    a: "Employers use one of two methods: (1) Schedule Method — using LHDN's published PCB tables; or (2) Formula Method — computing annual chargeable income (gross × 12 minus EPF and declared reliefs), applying progressive tax rates, then dividing by 12. Most modern payroll software uses the formula method for accuracy.",
  },
  {
    q: "What is Form TP1 and how does it reduce my PCB?",
    a: "Form TP1 (Borang TP1) allows you to declare additional tax reliefs to your employer — such as life insurance, medical expenses, education fees, spouse relief, and child relief. When your employer receives TP1, they factor these reliefs into the PCB calculation, reducing your monthly deduction. You can submit TP1 at any time during the year.",
  },
  {
    q: "What is Form TP3?",
    a: "Form TP3 is used when you join a new employer mid-year. It discloses your previous employment income and PCB already deducted in the same year, so your new employer can calculate accurate PCB for the remainder of the year without under- or over-deducting.",
  },
  {
    q: "Can Zakat payments reduce my PCB?",
    a: "Yes. Zakat payments made to a State Islamic Religious Council (MAJLIS) are a direct rebate against your tax payable — a ringgit-for-ringgit reduction. This means RM1 of Zakat reduces your annual tax bill by RM1, making it more valuable than an equivalent ringgit of tax relief. You can declare monthly Zakat payments to your employer for PCB adjustment.",
  },
  {
    q: "What happens if too much or too little PCB is deducted?",
    a: "When you file your annual income tax return (Form BE by 30 April), LHDN reconciles your total PCB paid against your actual tax liability. If excess PCB was deducted, you receive a refund. If insufficient PCB was deducted, you pay the balance. Deliberate under-deduction by employers or failure to remit PCB carries penalties under the Income Tax Act.",
  },
  {
    q: "Does PCB apply to bonuses and allowances?",
    a: "Yes. Most cash bonuses, commissions, and taxable allowances are subject to PCB. When your employer pays a bonus, they must compute the PCB for that additional income (often using the 'additional remuneration' method) and deduct it in the same pay period. Non-cash benefits and certain allowances (such as approved transport allowances up to RM6,000) may be exempt.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function PcbCalculator() {
  const [salaryInput, setSalaryInput] = useState("");
  const [residency, setResidency] = useState<Residency>("resident");
  const [marital, setMarital] = useState<MaritalStatus>("single");
  const [childrenUnder18, setChildrenUnder18] = useState("0");
  const [childrenEdu, setChildrenEdu] = useState("0");
  const [epfOverride, setEpfOverride] = useState("");        // blank = auto 11%
  const [lifeIns, setLifeIns] = useState("");
  const [medical, setMedical] = useState("");
  const [education, setEducation] = useState("");
  const [zakatInput, setZakatInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const grossMonthly = parseFloat(salaryInput.replace(/,/g, "")) || 0;
  const isValid = grossMonthly > 0;

  const result = useMemo((): PcbResult | null => {
    if (!submitted || !isValid) return null;
    return calcPcb(
      grossMonthly,
      residency,
      marital,
      parseInt(childrenUnder18) || 0,
      parseInt(childrenEdu) || 0,
      epfOverride,
      parseFloat(lifeIns) || 0,
      parseFloat(medical) || 0,
      parseFloat(education) || 0,
      parseFloat(zakatInput) || 0,
    );
  }, [submitted, grossMonthly, residency, marital, childrenUnder18, childrenEdu,
      epfOverride, lifeIns, medical, education, zakatInput]);

  const handleCalculate = () => { if (isValid) setSubmitted(true); };
  const handleReset = () => {
    setSalaryInput(""); setResidency("resident"); setMarital("single");
    setChildrenUnder18("0"); setChildrenEdu("0"); setEpfOverride("");
    setLifeIns(""); setMedical(""); setEducation(""); setZakatInput("");
    setSubmitted(false);
  };
  const onChange =
    (setter: (v: string) => void) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setter(e.target.value);
      setSubmitted(false);
    };

  const trackedPcb = useRef<number | null>(null);
  useEffect(() => {
    if (result && result.monthlyPcb !== trackedPcb.current) {
      trackedPcb.current = result.monthlyPcb;
      trackPcbCalculated(result.grossMonthly, result.monthlyPcb);
    }
  }, [result]);

  // Payslip rows
  const payslipRows = result
    ? [
        { label: "Gross Salary", amount: result.grossMonthly, sign: "", color: "text-gray-800 font-semibold" },
        ...(result.residency === "resident"
          ? [{ label: `EPF Employee (${epfOverride !== "" ? epfOverride : "11"}%)`, amount: result.epfEmployee, sign: "−", color: "text-red-500" }]
          : []),
        { label: "PCB / MTD", amount: result.monthlyPcb, sign: "−", color: "text-red-500" },
        { label: "Take-Home Pay", amount: result.takehome, sign: "", color: "text-indigo-700 font-bold" },
      ]
    : [];

  return (
    <>
      {/* Disclaimer */}
      <div className="bg-amber-50 border-b border-amber-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-start gap-2 text-sm text-amber-700">
          <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span><strong>Estimate only.</strong> PCB is calculated using the formula method with YA 2024 rates. Actual deductions depend on your employer&apos;s payroll system, TP1 declarations on file, and any mid-year income changes. Verify with your HR or payslip.</span>
        </div>
      </div>

      {/* ── Calculator ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* ── Inputs ── */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-5">
            <h2 className="text-lg font-semibold text-gray-800">Employment Details</h2>

            {/* Monthly salary */}
            <div>
              <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1.5">
                Monthly Gross Salary
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">RM</span>
                <input
                  id="salary"
                  type="number"
                  min="0"
                  step="100"
                  placeholder="e.g. 6000"
                  value={salaryInput}
                  onChange={onChange(setSalaryInput)}
                  onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-12 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                />
              </div>
              <p className="text-xs text-gray-400 mt-1.5">Before any deductions (EPF, PCB)</p>
            </div>

            {/* Residency */}
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">Tax Residency</p>
              <div className="grid grid-cols-2 gap-3">
                {(["resident", "non-resident"] as const).map((r) => (
                  <button
                    key={r}
                    onClick={() => { setResidency(r); setSubmitted(false); }}
                    className={`py-2.5 px-4 rounded-xl border text-sm font-medium transition-colors ${
                      residency === r
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "border-gray-200 text-gray-600 hover:border-indigo-300 hover:text-indigo-600"
                    }`}
                  >
                    {r === "resident" ? "Resident" : "Non-Resident"}
                  </button>
                ))}
              </div>
              {residency === "non-resident" && (
                <p className="text-xs text-amber-600 mt-2 bg-amber-50 rounded-lg px-3 py-2">
                  Non-residents pay a flat 30% on all Malaysian-sourced employment income. No reliefs apply.
                </p>
              )}
            </div>

            {residency === "resident" && (
              <>
                {/* Marital status */}
                <div>
                  <label htmlFor="marital" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Marital Status
                  </label>
                  <select
                    id="marital"
                    value={marital}
                    onChange={(e) => { setMarital(e.target.value as MaritalStatus); setSubmitted(false); }}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  >
                    <option value="single">Single</option>
                    <option value="married-spouse-income">Married — Spouse has income</option>
                    <option value="married-spouse-no-income">Married — Spouse has no income (+RM4,000)</option>
                  </select>
                </div>

                {/* Children row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="children18" className="block text-xs font-medium text-gray-700 mb-1.5">
                      Children under 18
                      <span className="text-gray-400 font-normal ml-1">(RM2,000 ea.)</span>
                    </label>
                    <select
                      id="children18"
                      value={childrenUnder18}
                      onChange={(e) => { setChildrenUnder18(e.target.value); setSubmitted(false); }}
                      className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      {[0,1,2,3,4,5].map((n) => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="childrenEdu" className="block text-xs font-medium text-gray-700 mb-1.5">
                      Children 18+, studying
                      <span className="text-gray-400 font-normal ml-1">(RM8,000 ea.)</span>
                    </label>
                    <select
                      id="childrenEdu"
                      value={childrenEdu}
                      onChange={(e) => { setChildrenEdu(e.target.value); setSubmitted(false); }}
                      className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      {[0,1,2,3,4,5].map((n) => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                </div>

                {/* TP1 reliefs */}
                <div className="space-y-3 border-t border-gray-100 pt-4">
                  <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                    TP1 Declarations (optional)
                  </p>

                  {/* EPF override */}
                  <div>
                    <label htmlFor="epfRate" className="block text-xs font-medium text-gray-600 mb-1">
                      EPF Employee Rate
                      <span className="ml-1.5 text-gray-400 font-normal">leave blank for default 11%</span>
                    </label>
                    <div className="relative">
                      <input
                        id="epfRate"
                        type="number"
                        min="0"
                        max="100"
                        step="0.5"
                        placeholder="11"
                        value={epfOverride}
                        onChange={onChange(setEpfOverride)}
                        className="w-full border border-gray-200 rounded-xl px-4 py-2 pr-8 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">%</span>
                    </div>
                  </div>

                  {/* Life insurance */}
                  <div>
                    <label htmlFor="lifeIns" className="block text-xs font-medium text-gray-600 mb-1">
                      Life Insurance / Takaful (annual)
                      <span className="ml-1.5 text-gray-400 font-normal">max RM3,000</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">RM</span>
                      <input
                        id="lifeIns"
                        type="number"
                        min="0"
                        max="3000"
                        placeholder="e.g. 2400"
                        value={lifeIns}
                        onChange={onChange(setLifeIns)}
                        className="w-full border border-gray-200 rounded-xl py-2 pl-9 pr-4 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                      />
                    </div>
                  </div>

                  {/* Medical */}
                  <div>
                    <label htmlFor="medical" className="block text-xs font-medium text-gray-600 mb-1">
                      Medical & Dental (annual)
                      <span className="ml-1.5 text-gray-400 font-normal">max RM10,000</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">RM</span>
                      <input
                        id="medical"
                        type="number"
                        min="0"
                        max="10000"
                        placeholder="e.g. 1500"
                        value={medical}
                        onChange={onChange(setMedical)}
                        className="w-full border border-gray-200 rounded-xl py-2 pl-9 pr-4 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                      />
                    </div>
                  </div>

                  {/* Education */}
                  <div>
                    <label htmlFor="education" className="block text-xs font-medium text-gray-600 mb-1">
                      Education Fees — self (annual)
                      <span className="ml-1.5 text-gray-400 font-normal">max RM7,000</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">RM</span>
                      <input
                        id="education"
                        type="number"
                        min="0"
                        max="7000"
                        placeholder="e.g. 3000"
                        value={education}
                        onChange={onChange(setEducation)}
                        className="w-full border border-gray-200 rounded-xl py-2 pl-9 pr-4 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                      />
                    </div>
                  </div>

                  {/* Zakat */}
                  <div>
                    <label htmlFor="zakat" className="block text-xs font-medium text-gray-600 mb-1">
                      Monthly Zakat Payment
                      <span className="ml-1.5 text-gray-400 font-normal">1-for-1 PCB rebate</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 pointer-events-none">RM</span>
                      <input
                        id="zakat"
                        type="number"
                        min="0"
                        placeholder="e.g. 100"
                        value={zakatInput}
                        onChange={onChange(setZakatInput)}
                        className="w-full border border-gray-200 rounded-xl py-2 pl-9 pr-4 text-sm text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="flex gap-3 pt-1">
              <button
                onClick={handleCalculate}
                disabled={!isValid}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-200 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                Calculate PCB
              </button>
              {submitted && (
                <button
                  onClick={handleReset}
                  className="px-5 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors text-sm"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* ── Results ── */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 flex flex-col justify-center">
            {!result ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">📋</div>
                <p className="text-gray-400 text-sm">
                  Enter your monthly salary and tap <strong>Calculate PCB</strong> to see your estimated monthly tax deduction.
                </p>
              </div>
            ) : (
              <>
                {/* Primary */}
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-500 mb-1">Monthly PCB Deduction</p>
                  <p className="text-5xl font-bold text-indigo-600 mb-1">
                    RM {fmt(result.monthlyPcb)}
                  </p>
                  <p className="text-sm text-gray-400">per month</p>
                </div>

                {/* 4-stat grid */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  {[
                    { label: "Monthly Take-Home", value: `RM ${fmt(result.takehome)}`, sub: "after EPF + PCB", color: "bg-indigo-50 text-indigo-700" },
                    { label: "Effective PCB Rate", value: `${result.effectiveRate}%`, sub: "of gross salary", color: "bg-indigo-50 text-indigo-700" },
                    { label: "Annual Tax Payable", value: `RM ${fmt(result.annualPcb)}`, sub: "across 12 months", color: "bg-gray-50 text-gray-700" },
                    { label: "Chargeable Income", value: `RM ${fmt(result.chargeableIncome)}`, sub: "per year after reliefs", color: "bg-gray-50 text-gray-700" },
                  ].map((m) => (
                    <div key={m.label} className={`rounded-xl px-4 py-3 ${m.color.split(" ")[0]}`}>
                      <p className={`text-xs mb-0.5 ${m.color.split(" ")[1]}`}>{m.label}</p>
                      <p className={`font-bold text-sm ${m.color.split(" ")[1]}`}>{m.value}</p>
                      <p className="text-xs text-gray-400">{m.sub}</p>
                    </div>
                  ))}
                </div>

                {/* Payslip strip */}
                <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                  <p className="text-xs font-semibold text-gray-500 mb-3">Monthly Payslip Estimate</p>
                  {payslipRows.map((row, i) => (
                    <div
                      key={row.label}
                      className={`flex justify-between text-sm ${
                        i === payslipRows.length - 1
                          ? "border-t border-gray-200 pt-2 mt-1"
                          : ""
                      }`}
                    >
                      <span className="text-gray-600">{row.label}</span>
                      <span className={row.color}>
                        {row.sign} RM {fmt(row.amount)}
                      </span>
                    </div>
                  ))}
                </div>

                {result.rebate > 0 && (
                  <div className="mt-3 bg-green-50 border border-green-100 rounded-xl px-4 py-3 text-xs text-green-700">
                    <span className="font-semibold">RM400 tax rebate applied</span> — chargeable income ≤ RM35,000.
                  </div>
                )}
                {result.zakatOffset > 0 && (
                  <div className="mt-3 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3 text-xs text-emerald-700">
                    <span className="font-semibold">Zakat offset: RM {fmt(result.zakatOffset)}</span> deducted from annual tax (1-for-1 rebate).
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* Full calculation breakdown */}
      {result && result.residency === "resident" && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Relief waterfall */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-5">Annual Calculation Waterfall</h2>
              <div className="space-y-2 text-sm">
                {[
                  { label: "Annual Gross Income", value: result.annualGross, sign: "", bold: true },
                  { label: `EPF Employee (${epfOverride || "11"}%)`, value: result.annualEpf, sign: "−", note: "Statutory deduction" },
                  { label: "Personal Relief", value: result.personalRelief, sign: "−", note: "Automatic" },
                  ...(result.spouseRelief > 0 ? [{ label: "Spouse Relief", value: result.spouseRelief, sign: "−", note: "Non-working spouse" }] : []),
                  ...(result.childRelief > 0 ? [{ label: "Child Relief", value: result.childRelief, sign: "−", note: `${childrenUnder18} under 18 + ${childrenEdu} studying` }] : []),
                  ...(result.lifeInsRelief > 0 ? [{ label: "Life Insurance / Takaful", value: result.lifeInsRelief, sign: "−", note: "TP1 declaration" }] : []),
                  ...(result.medicalRelief > 0 ? [{ label: "Medical & Dental", value: result.medicalRelief, sign: "−", note: "TP1 declaration" }] : []),
                  ...(result.educationRelief > 0 ? [{ label: "Education Fees", value: result.educationRelief, sign: "−", note: "TP1 declaration" }] : []),
                ].map((row) => (
                  <div key={row.label} className={`flex justify-between py-1.5 ${row.bold ? "border-b border-gray-100 pb-2 mb-1" : ""}`}>
                    <div>
                      {row.sign === "−" && <span className="text-green-500 mr-1.5">−</span>}
                      <span className={row.bold ? "font-semibold text-gray-800" : "text-gray-600"}>{row.label}</span>
                      {"note" in row && row.note && <span className="block text-xs text-gray-400 ml-4">{row.note}</span>}
                    </div>
                    <span className={row.bold ? "font-semibold text-gray-800" : "text-green-600 font-medium"}>
                      {row.sign === "−" ? `(${fmt(row.value)})` : fmt(row.value)}
                    </span>
                  </div>
                ))}
                <div className="flex justify-between pt-3 border-t-2 border-gray-200 font-bold text-gray-900">
                  <span>Chargeable Income</span>
                  <span>RM {fmt(result.chargeableIncome)}</span>
                </div>
              </div>
            </div>

            {/* Tax calc */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-5">Tax Computation</h2>
              <div className="space-y-2 text-sm">
                {[
                  { label: "Tax on chargeable income", value: result.annualTax, color: "text-gray-700" },
                  ...(result.rebate > 0 ? [{ label: "Less: Tax rebate (income ≤ RM35k)", value: result.rebate, color: "text-green-600", sign: "−" }] : []),
                  ...(result.zakatOffset > 0 ? [{ label: "Less: Zakat offset (1-for-1)", value: result.zakatOffset, color: "text-emerald-600", sign: "−" }] : []),
                ].map((row) => (
                  <div key={row.label} className="flex justify-between py-1.5">
                    <span className="text-gray-600">
                      {"sign" in row && row.sign === "−" && <span className={`${row.color} mr-1.5`}>−</span>}
                      {row.label}
                    </span>
                    <span className={`font-medium ${"sign" in row ? row.color : "text-gray-800"}`}>
                      RM {fmt(row.value)}
                    </span>
                  </div>
                ))}
                <div className="flex justify-between py-2 border-t border-gray-100 font-semibold text-gray-800">
                  <span>Annual PCB / MTD</span>
                  <span>RM {fmt(result.annualPcb)}</span>
                </div>
                <div className="flex justify-between py-2 border-t-2 border-indigo-200 font-bold text-indigo-700 text-base">
                  <span>Monthly PCB (÷ 12)</span>
                  <span>RM {fmt(result.monthlyPcb)}</span>
                </div>
              </div>

              {result.chargeableIncome === 0 && (
                <div className="mt-4 bg-green-50 border border-green-100 rounded-xl px-4 py-3 text-xs text-green-700">
                  Chargeable income is zero — no PCB required.
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* How PCB works */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">How PCB Is Calculated</h2>
            <p className="text-gray-600 leading-relaxed">
              PCB (Potongan Cukai Berjadual), also known as Monthly Tax Deduction (MTD), is the income tax instalment your employer deducts each month and pays directly to LHDN. It is computed by projecting your annual tax liability and dividing it into 12 equal payments. The formula method — used by this calculator and most modern payroll software — gives a more precise result than the older schedule tables.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            {[
              { step: "1", title: "Annualise Income", body: "Multiply monthly gross salary by 12 to get projected annual income.", color: "bg-indigo-50 border-indigo-100" },
              { step: "2", title: "Deduct EPF & Reliefs", body: "Subtract EPF contributions (11%) plus all declared reliefs (TP1 form).", color: "bg-purple-50 border-purple-100" },
              { step: "3", title: "Apply Tax Brackets", body: "Apply Malaysia's progressive tax rates to the chargeable income. Subtract rebates and Zakat.", color: "bg-blue-50 border-blue-100" },
              { step: "4", title: "Divide by 12", body: "The resulting annual tax divided by 12 is your monthly PCB deduction.", color: "bg-sky-50 border-sky-100" },
            ].map((c) => (
              <div key={c.step} className={`rounded-xl border p-4 ${c.color}`}>
                <div className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 mb-3">{c.step}</div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1.5">{c.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PCB vs Income Tax comparison */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">PCB vs Income Tax — What's the Difference?</h2>
          <p className="text-gray-500 text-sm mb-6">Both refer to the same underlying tax. PCB is the monthly collection mechanism; income tax is the annual liability.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-gray-100">
                  <th className="pb-3 font-semibold text-gray-700 w-1/3">Aspect</th>
                  <th className="pb-3 font-semibold text-indigo-600 w-1/3">PCB / MTD</th>
                  <th className="pb-3 font-semibold text-orange-600 w-1/3">Annual Income Tax</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { aspect: "Frequency", pcb: "Monthly (each pay cycle)", tax: "Once a year (by 30 April)" },
                  { aspect: "Who pays LHDN?", pcb: "Employer on your behalf", tax: "You directly (or via CP500)" },
                  { aspect: "Basis", pcb: "Projected annual tax ÷ 12", tax: "Actual annual chargeable income" },
                  { aspect: "Reliefs used", pcb: "TP1 declarations + EPF", tax: "All reliefs + receipts in Form BE" },
                  { aspect: "Reconciliation", pcb: "At year-end via Form BE", tax: "Refund or top-up after filing" },
                  { aspect: "Zakat", pcb: "Direct PCB rebate (monthly)", tax: "Direct tax rebate in Form BE" },
                ].map((row) => (
                  <tr key={row.aspect} className="border-b border-gray-50 last:border-0">
                    <td className="py-3 font-medium text-gray-700">{row.aspect}</td>
                    <td className="py-3 text-indigo-700">{row.pcb}</td>
                    <td className="py-3 text-orange-700">{row.tax}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* TP1 guide */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Reducing Your PCB with TP1 & Zakat</h2>
          <p className="text-gray-500 text-sm mb-6">Most employees pay more PCB than necessary because they never submit Form TP1 to their HR. Here is what you can declare.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: "Form TP1 — Additional Reliefs", emoji: "📄", items: ["Life insurance / takaful (max RM3,000)", "Medical & dental (max RM10,000)", "Education fees — self (max RM7,000)", "Spouse relief RM4,000 (if non-working)", "Child relief RM2,000 / RM8,000 each", "Private retirement scheme (PRS)", "Sports equipment, gym fees, etc."] },
              { title: "Zakat — Direct PCB Rebate", emoji: "🕌", items: ["Must be paid to an official State Islamic Religious Council (MAJLIS)", "Declare monthly Zakat amount to your employer", "RM1 Zakat = RM1 PCB reduction (more powerful than a relief)", "Applies to income Zakat (Zakat Pendapatan)", "Supported by LHDN circular — ask your HR for the TP declaration form", "Reduces PCB dollar-for-dollar, up to the PCB amount due"] },
            ].map((card) => (
              <div key={card.title} className="bg-indigo-50 border border-indigo-100 rounded-xl p-5">
                <div className="text-2xl mb-2">{card.emoji}</div>
                <h3 className="font-semibold text-indigo-900 text-sm mb-3">{card.title}</h3>
                <ul className="space-y-1.5">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-indigo-800">
                      <svg className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
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
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to all calculators
        </Link>
      </section>
    </>
  );
}
