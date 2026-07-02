"use client";

import { useState, useMemo } from "react";

// ─── Formatters ───────────────────────────────────────────────────────────────

function fmt(n: number, dec = 0) {
  return n.toLocaleString("en-MY", { minimumFractionDigits: dec, maximumFractionDigits: dec });
}
function fmtRM(n: number) {
  if (n >= 1_000_000_000) return `RM ${(n / 1_000_000_000).toFixed(2)} bilion`;
  if (n >= 1_000_000)     return `RM ${(n / 1_000_000).toFixed(2)} juta`;
  return `RM ${fmt(Math.round(n))}`;
}
function fmtRMShort(n: number) {
  if (n >= 1_000_000_000) return `RM ${(n / 1_000_000_000).toFixed(1)}B`;
  if (n >= 1_000_000)     return `RM ${(n / 1_000_000).toFixed(1)}j`;
  if (n >= 1_000)         return `RM ${(n / 1_000).toFixed(0)}k`;
  return `RM ${fmt(Math.round(n))}`;
}

// ─── Malaysian Investment Vehicles ────────────────────────────────────────────

const INVESTMENTS = [
  { id: "epf",      name: "EPF (KWSP)",         emoji: "🏛️", rate: 5.5,  risk: "Rendah",   desc: "Dividen tahunan anggaran 5–6%. Terjamin oleh kerajaan Malaysia.", minRM: 0,      type: "Jangka Panjang" },
  { id: "asb",      name: "ASB / ASNB",          emoji: "🌿", rate: 4.75, risk: "Rendah",   desc: "Untuk Bumiputera. Dividen stabil 4–5% p.a. + bonus kadangkala.", minRM: 1,      type: "Stabil" },
  { id: "fd",       name: "Fixed Deposit",        emoji: "🏦", rate: 3.25, risk: "Tiada",    desc: "Terjamin PIDM hingga RM250k. Kadar faedah 3–3.5% p.a.", minRM: 1_000,  type: "Selamat" },
  { id: "reit",     name: "REITs Malaysia",       emoji: "🏢", rate: 6.5,  risk: "Sederhana", desc: "Pelaburan hartanah tanpa beli bangunan. Dividen 5–8% p.a.", minRM: 100,   type: "Pendapatan" },
  { id: "stocks",   name: "Saham KLSE / ETF",     emoji: "📈", rate: 9.0,  risk: "Tinggi",   desc: "Purata KLSE jangka panjang ~8-10% p.a. Volatil jangka pendek.", minRM: 100,   type: "Pertumbuhan" },
  { id: "property", name: "Hartanah Sewa",        emoji: "🏠", rate: 5.0,  risk: "Sederhana", desc: "Hasil sewa bersih selepas kos biasanya 4–6% p.a. Perlu modal besar.", minRM: 50_000, type: "Aset Nyata" },
];

const RISK_C: Record<string, string> = {
  "Tiada":     "bg-green-100 text-green-700",
  "Rendah":    "bg-blue-100 text-blue-700",
  "Sederhana": "bg-amber-100 text-amber-700",
  "Tinggi":    "bg-red-100 text-red-700",
};

// ─── Rat Race Status ──────────────────────────────────────────────────────────

type RatStatus = "critical" | "trapped" | "progressing" | "close" | "free";

function getRatStatus(passiveIncome: number, expenses: number): { status: RatStatus; pct: number; label: string; emoji: string; color: string; bg: string; border: string; message: string } {
  const pct = expenses > 0 ? (passiveIncome / expenses) * 100 : 0;
  if (pct >= 100) return { status: "free",        pct, label: "BEBAS! 🎉",          emoji: "🏆", color: "text-green-700",  bg: "bg-green-50",  border: "border-green-300", message: "Tahniah! Pendapatan pasif kau dah melebihi perbelanjaan. Kau BEBAS daripada Rat Race." };
  if (pct >= 75)  return { status: "close",       pct, label: "Hampir Bebas",        emoji: "🌅", color: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-300", message: "Kau sangat hampir! Kurang sedikit lagi — teruskan pelaburan konsisten." };
  if (pct >= 40)  return { status: "progressing", pct, label: "Sedang Berkembang",   emoji: "📈", color: "text-blue-700",   bg: "bg-blue-50",   border: "border-blue-300",   message: "Kau dah di jalan yang betul. Pendapatan pasif kau semakin kukuh." };
  if (pct >= 10)  return { status: "trapped",     pct, label: "Masih Terjebak",      emoji: "🐀", color: "text-amber-700",  bg: "bg-amber-50",  border: "border-amber-300",  message: "Kau ada beberapa aset tetapi masih bergantung pada gaji. Teruskan bina aset." };
  return             { status: "critical",    pct, label: "Dalam Rat Race",       emoji: "😰", color: "text-red-700",    bg: "bg-red-50",    border: "border-red-300",    message: "Hampir semua keperluan kau bergantung kepada gaji aktif. Masa untuk mula bina aset pertama." };
}

// ─── Compound Growth ──────────────────────────────────────────────────────────

function yearsToFreedom(currentAssets: number, monthlyContrib: number, annualRate: number, freedomNumber: number): number {
  if (currentAssets >= freedomNumber) return 0;
  if (monthlyContrib <= 0 && currentAssets <= 0) return 999;
  const r = annualRate / 100 / 12;
  if (r === 0) {
    if (monthlyContrib <= 0) return 999;
    return Math.ceil((freedomNumber - currentAssets) / monthlyContrib / 12);
  }
  // FV of lump sum + FV of annuity = FN → solve for n (months)
  let months = 0;
  let fv = currentAssets;
  while (fv < freedomNumber && months < 12 * 100) {
    fv = fv * (1 + r) + monthlyContrib;
    months++;
  }
  return months >= 12 * 100 ? 999 : Math.ceil(months / 12);
}

function projectGrowth(currentAssets: number, monthlyContrib: number, annualRate: number, years: number): number {
  const r = annualRate / 100 / 12;
  const months = years * 12;
  if (r === 0) return currentAssets + monthlyContrib * months;
  const fvLump = currentAssets * Math.pow(1 + r, months);
  const fvAnnuity = monthlyContrib * ((Math.pow(1 + r, months) - 1) / r);
  return Math.round(fvLump + fvAnnuity);
}

// ─── Small UI Atoms ───────────────────────────────────────────────────────────

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 ${className}`}>{children}</div>;
}
function CardTitle({ icon, title, sub }: { icon: string; title: string; sub?: string }) {
  return (
    <div className="flex items-start gap-2 mb-4">
      <span className="text-xl mt-0.5 flex-shrink-0">{icon}</span>
      <div>
        <h3 className="font-bold text-gray-800 text-sm sm:text-base leading-tight">{title}</h3>
        {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
      </div>
    </div>
  );
}
function Bar({ pct, color, h = "h-2", className = "" }: { pct: number; color: string; h?: string; className?: string }) {
  return (
    <div className={`w-full bg-gray-100 rounded-full ${h} overflow-hidden ${className}`}>
      <div className={`${h} rounded-full transition-all duration-700 ${color}`} style={{ width: `${Math.min(100, Math.max(0, pct))}%` }} />
    </div>
  );
}
function InputRow({ label, prefix, suffix, placeholder, value, onChange, hint, type = "number" }: {
  label: string; prefix?: string; suffix?: string; placeholder: string;
  value: string; onChange: (v: string) => void; hint?: string; type?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
      <div className="relative">
        {prefix && <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">{prefix}</span>}
        <input type={type} placeholder={placeholder} value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full border border-gray-200 rounded-xl py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition ${prefix ? "pl-12" : "pl-4"} ${suffix ? "pr-16" : "pr-4"}`} />
        {suffix && <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">{suffix}</span>}
      </div>
      {hint && <p className="text-xs text-gray-400 mt-1.5">{hint}</p>}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function FreedomCalculator() {
  // Inputs
  const [monthlyExpenses, setMonthlyExpenses] = useState("");
  const [currentAssets,   setCurrentAssets]   = useState("");
  const [monthlySavings,  setMonthlySavings]  = useState("");
  const [returnRate,      setReturnRate]       = useState("6");
  const [currentAge,      setCurrentAge]       = useState("");
  const [submitted, setSubmitted] = useState(false);

  const expenses  = parseFloat(monthlyExpenses.replace(/,/g, ""))  || 0;
  const assets    = parseFloat(currentAssets.replace(/,/g, ""))    || 0;
  const savings   = parseFloat(monthlySavings.replace(/,/g, ""))   || 0;
  const rate      = parseFloat(returnRate) || 0;
  const age       = parseInt(currentAge) || 0;
  const isValid   = expenses > 0;

  // ── Core Calculations ──────────────────────────────────────────────────────
  const calc = useMemo(() => {
    if (!submitted || !isValid) return null;

    const annualExpenses  = expenses * 12;
    const freedomNumber   = annualExpenses / (rate / 100);           // Capital needed
    const passiveIncomeNow = assets * (rate / 100) / 12;             // Monthly passive income today
    const gap             = Math.max(0, freedomNumber - assets);
    const gapPct          = freedomNumber > 0 ? (assets / freedomNumber) * 100 : 0;
    const ratStatus       = getRatStatus(passiveIncomeNow, expenses);
    const yrs             = yearsToFreedom(assets, savings, rate, freedomNumber);
    const freedomAge      = age > 0 && yrs < 999 ? age + yrs : null;

    // Scenario: save RM500 more
    const yrsPlus500  = yearsToFreedom(assets, savings + 500,  rate,     freedomNumber);
    // Scenario: 2% higher return
    const yrsBetterRate = yearsToFreedom(assets, savings, rate + 2, freedomNumber);
    // Scenario: 10% lower expenses
    const fnLower     = (expenses * 0.9 * 12) / (rate / 100);
    const yrsLower    = yearsToFreedom(assets, savings, rate, fnLower);

    // Milestones
    const milestones = [100_000, 250_000, 500_000, 1_000_000].map((m) => ({
      amount: m,
      reached: assets >= m,
      yearsToReach: assets >= m ? 0 : yearsToFreedom(assets, savings, rate, m),
    }));

    // 10-year projection
    const proj10 = projectGrowth(assets, savings, rate, 10);
    const proj20 = projectGrowth(assets, savings, rate, 20);
    const proj30 = projectGrowth(assets, savings, rate, 30);

    // Investment vehicle comparison
    const invComparison = INVESTMENTS.map((inv) => ({
      ...inv,
      yearsNeeded: yearsToFreedom(assets, savings, inv.rate, freedomNumber),
      passiveIncome: assets * (inv.rate / 100) / 12,
      freedomNumber: (annualExpenses) / (inv.rate / 100),
    }));

    return {
      freedomNumber, annualExpenses, passiveIncomeNow,
      gap, gapPct, ratStatus, yrs, freedomAge,
      yrsPlus500, yrsBetterRate, yrsLower, fnLower,
      milestones, proj10, proj20, proj30,
      invComparison,
    };
  }, [submitted, expenses, assets, savings, rate, age, isValid]);

  const handleCalc = () => { if (isValid) setSubmitted(true); };
  const handleChange = (setter: (v: string) => void) => (v: string) => { setter(v); setSubmitted(false); };

  return (
    <>
      {/* ── Hero Banner ───────────────────────────────────────────────────── */}
      <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-emerald-950 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* ── Form ────────────────────────────────────────────────────── */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h2 className="text-white font-bold text-lg mb-5">Kira Freedom Number Kau</h2>
              <div className="space-y-4">
                <InputRow label={<span className="text-gray-200 text-sm font-medium">Perbelanjaan Bulanan Kau</span> as unknown as string}
                  prefix="RM" placeholder="cth: 3000"
                  value={monthlyExpenses} onChange={handleChange(setMonthlyExpenses)}
                  hint="Semua perbelanjaan hidup — sewa, makan, transport, bil" />

                <InputRow label={<span className="text-gray-200 text-sm font-medium">Jumlah Simpanan / Pelaburan Sekarang</span> as unknown as string}
                  prefix="RM" placeholder="cth: 50000"
                  value={currentAssets} onChange={handleChange(setCurrentAssets)}
                  hint="EPF + ASNB + FD + saham + simpanan — jumlahkan semua" />

                <InputRow label={<span className="text-gray-200 text-sm font-medium">Simpan / Labur Setiap Bulan</span> as unknown as string}
                  prefix="RM" placeholder="cth: 500"
                  value={monthlySavings} onChange={handleChange(setMonthlySavings)}
                  hint="Berapa yang kau masukkan ke dalam pelaburan setiap bulan" />

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1.5">
                    Jangkaan Pulangan Tahunan: <span className="text-emerald-400 font-bold">{returnRate}%</span>
                  </label>
                  <input type="range" min="1" max="15" step="0.5" value={returnRate}
                    onChange={(e) => { setReturnRate(e.target.value); setSubmitted(false); }}
                    className="w-full accent-emerald-500" />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1% (FD)</span><span>4-5% (EPF/ASB)</span><span>6-7% (REITs)</span><span>10-15% (Saham)</span>
                  </div>
                </div>

                <InputRow label={<span className="text-gray-200 text-sm font-medium">Umur Sekarang (Pilihan)</span> as unknown as string}
                  suffix="tahun" placeholder="cth: 28"
                  value={currentAge} onChange={handleChange(setCurrentAge)}
                  hint="Untuk kira umur kau bila bebas" />
              </div>

              <button onClick={handleCalc} disabled={!isValid}
                className="w-full mt-6 bg-emerald-500 hover:bg-emerald-400 disabled:bg-gray-700 disabled:text-gray-500 text-white font-black py-3.5 rounded-xl transition-colors text-base">
                Kira Freedom Number Saya →
              </button>
            </div>

            {/* ── Concept Explainer ────────────────────────────────────────── */}
            <div className="text-white">
              {!calc ? (
                <>
                  <div className="text-5xl mb-4">💡</div>
                  <h3 className="text-xl font-black mb-3 text-emerald-400">Apa itu Freedom Number?</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    <strong className="text-white">Freedom Number</strong> adalah jumlah aset yang kau perlukan supaya pendapatan pasif kau melebihi perbelanjaan hidup kau — dan kau tak perlu kerja lagi kalau tak mahu.
                  </p>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4 font-mono text-sm mb-4">
                    <p className="text-gray-400 mb-1">Formula:</p>
                    <p className="text-emerald-400 font-bold">Freedom Number =</p>
                    <p className="text-white">Perbelanjaan Tahunan ÷ Kadar Pulangan</p>
                    <p className="text-gray-500 text-xs mt-2">Contoh: RM 3,000/bulan × 12 ÷ 6% = RM 600,000</p>
                  </div>
                  <div className="space-y-2">
                    {[
                      { q: "E → B/I", a: "Dari pekerja → pemilik aset yang menjana income" },
                      { q: "Masa Bebas", a: "Kau pilih nak kerja atau tidak — bukan kerana terpaksa" },
                      { q: "Passive > Active", a: "Bila duit masuk walaupun kau tidur, kau dah bebas" },
                    ].map((f) => (
                      <div key={f.q} className="flex items-start gap-3">
                        <span className="bg-emerald-900/50 text-emerald-400 text-xs font-bold px-2 py-1 rounded-lg flex-shrink-0 mt-0.5">{f.q}</span>
                        <span className="text-gray-300 text-sm">{f.a}</span>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-2">Freedom Number Kau</p>
                  <p className="text-5xl sm:text-6xl font-black text-white mb-2">{fmtRMShort(calc.freedomNumber)}</p>
                  <p className="text-emerald-400 font-semibold mb-4">= {fmtRM(calc.freedomNumber)}</p>

                  <div className={`rounded-2xl border-2 ${calc.ratStatus.border} ${calc.ratStatus.bg} p-4 mb-4`}>
                    <p className="text-4xl mb-1">{calc.ratStatus.emoji}</p>
                    <p className={`font-black text-lg ${calc.ratStatus.color}`}>{calc.ratStatus.label}</p>
                    <p className={`text-sm mt-1 ${calc.ratStatus.color} opacity-80`}>{calc.ratStatus.message}</p>
                  </div>

                  {calc.yrs < 999 ? (
                    <div className="bg-white/10 rounded-xl p-4">
                      <p className="text-gray-400 text-sm">Masa untuk bebas</p>
                      <p className="text-white font-black text-3xl">{calc.yrs} tahun</p>
                      {calc.freedomAge && <p className="text-emerald-400 text-sm mt-1">Kau bebas pada umur <strong>{calc.freedomAge}</strong> tahun</p>}
                    </div>
                  ) : (
                    <div className="bg-red-900/30 border border-red-800 rounded-xl p-4">
                      <p className="text-red-300 text-sm">Dengan kadar simpanan semasa, agak sukar untuk mencapai Freedom Number. Tingkatkan simpanan bulanan kau.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════ */}
      {/* ── DASHBOARD ──────────────────────────────────────────────────────── */}
      {/* ══════════════════════════════════════════════════════════════════════ */}
      {calc && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Laporan Kebebasan Kewangan Kau</h2>
            <p className="text-gray-500 text-sm">Berdasarkan prinsip Rich Dad Poor Dad — dari Rat Race ke Financial Freedom.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* ── Card 1: Rat Race Meter (full) ─────────────────────────────── */}
            <Card className={`md:col-span-2 border-2 ${calc.ratStatus.border} ${calc.ratStatus.bg}`}>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="text-5xl flex-shrink-0">{calc.ratStatus.emoji}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-xl font-black ${calc.ratStatus.color}`}>Rat Race Meter</h3>
                    <span className={`text-2xl font-black ${calc.ratStatus.color}`}>{Math.round(calc.ratStatus.pct)}%</span>
                  </div>
                  <Bar pct={calc.ratStatus.pct} h="h-4"
                    color={calc.ratStatus.pct >= 100 ? "bg-green-500" : calc.ratStatus.pct >= 75 ? "bg-emerald-500" : calc.ratStatus.pct >= 40 ? "bg-blue-500" : calc.ratStatus.pct >= 10 ? "bg-amber-500" : "bg-red-500"}
                    className="mb-2" />
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>0% — Sepenuhnya bergantung gaji</span>
                    <span>100% — BEBAS 🏆</span>
                  </div>
                  <p className={`text-sm mt-3 font-medium ${calc.ratStatus.color}`}>{calc.ratStatus.message}</p>
                </div>
              </div>
            </Card>

            {/* ── Card 2: Freedom Number Breakdown ──────────────────────────── */}
            <Card>
              <CardTitle icon="🎯" title="Freedom Number Kau" sub="Berapa modal yang kau perlukan" />
              <div className="text-center mb-4">
                <p className="text-3xl font-black text-gray-900">{fmtRM(calc.freedomNumber)}</p>
                <p className="text-xs text-gray-400 mt-1">= RM {fmt(expenses * 12)} perbelanjaan tahunan ÷ {rate}% pulangan</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-green-50 rounded-xl px-4 py-3">
                  <span className="text-sm text-gray-600">Kau dah ada</span>
                  <span className="font-bold text-green-700">{fmtRM(assets)}</span>
                </div>
                <div className="flex justify-between items-center bg-red-50 rounded-xl px-4 py-3">
                  <span className="text-sm text-gray-600">Gap yang tinggal</span>
                  <span className="font-bold text-red-700">{fmtRM(calc.gap)}</span>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Progress kau</span>
                  <span>{calc.gapPct.toFixed(1)}%</span>
                </div>
                <Bar pct={calc.gapPct} color={calc.gapPct >= 75 ? "bg-emerald-500" : calc.gapPct >= 40 ? "bg-blue-500" : calc.gapPct >= 10 ? "bg-amber-500" : "bg-red-400"} h="h-3" />
              </div>
            </Card>

            {/* ── Card 3: Passive Income Today ──────────────────────────────── */}
            <Card>
              <CardTitle icon="💸" title="Pendapatan Pasif Kau Sekarang" sub="Wang bekerja untuk kau setiap bulan" />
              <div className="text-center mb-5">
                <p className="text-3xl font-black text-gray-900">RM {fmt(calc.passiveIncomeNow, 2)}</p>
                <p className="text-xs text-gray-400 mt-1">sebulan (pada pulangan {rate}%)</p>
              </div>
              <div className="space-y-2">
                {[
                  { label: "Pendapatan pasif sekarang", val: calc.passiveIncomeNow, color: "text-blue-600" },
                  { label: "Perbelanjaan bulanan",       val: expenses,             color: "text-red-500" },
                  { label: "Gap bulanan",                val: expenses - calc.passiveIncomeNow, color: "text-amber-600" },
                ].map((r) => (
                  <div key={r.label} className="flex justify-between text-sm">
                    <span className="text-gray-500">{r.label}</span>
                    <span className={`font-bold ${r.color}`}>RM {fmt(Math.abs(r.val), 2)}</span>
                  </div>
                ))}
              </div>
              {calc.passiveIncomeNow > 0 && (
                <p className="text-xs text-gray-400 mt-3 bg-gray-50 rounded-lg px-3 py-2">
                  Aset kau dah menjana <strong>RM {fmt(calc.passiveIncomeNow * 12, 0)}</strong> setahun — walaupun kau tidur.
                </p>
              )}
            </Card>

            {/* ── Card 4: Timeline ──────────────────────────────────────────── */}
            <Card>
              <CardTitle icon="⏳" title="Bila Kau Akan Bebas?" sub="Berdasarkan kadar simpanan semasa" />
              {calc.yrs < 999 ? (
                <>
                  <div className="text-center mb-4">
                    <p className="text-5xl font-black text-emerald-600">{calc.yrs}</p>
                    <p className="text-gray-500 text-sm">tahun dari sekarang</p>
                    {calc.freedomAge && <p className="text-emerald-600 font-semibold mt-1">Umur kau: <strong>{calc.freedomAge} tahun</strong></p>}
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    {[
                      { label: "10 tahun", val: calc.proj10 },
                      { label: "20 tahun", val: calc.proj20 },
                      { label: "30 tahun", val: calc.proj30 },
                    ].map((p) => (
                      <div key={p.label} className={`rounded-xl p-3 ${p.val >= calc.freedomNumber ? "bg-emerald-50 border border-emerald-200" : "bg-gray-50"}`}>
                        <p className="text-gray-400 mb-1">{p.label}</p>
                        <p className={`font-bold text-sm ${p.val >= calc.freedomNumber ? "text-emerald-700" : "text-gray-700"}`}>{fmtRMShort(p.val)}</p>
                        {p.val >= calc.freedomNumber && <p className="text-emerald-600 text-xs mt-0.5">🏆 Bebas!</p>}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-4">
                  <p className="text-4xl mb-2">😔</p>
                  <p className="text-gray-600 text-sm">Dengan simpanan semasa, sukar untuk capai Freedom Number. Cuba tingkatkan simpanan bulanan atau kadar pulangan.</p>
                </div>
              )}
            </Card>

            {/* ── Card 5: Milestones ────────────────────────────────────────── */}
            <Card>
              <CardTitle icon="🏁" title="Pencapaian Kewangan" sub="Milestone dalam perjalanan kau" />
              <div className="space-y-3">
                {calc.milestones.map((m) => (
                  <div key={m.amount} className={`flex items-center justify-between rounded-xl px-4 py-3 ${m.reached ? "bg-emerald-50 border border-emerald-200" : "bg-gray-50"}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{m.reached ? "✅" : "⬜"}</span>
                      <div>
                        <p className={`font-bold text-sm ${m.reached ? "text-emerald-700" : "text-gray-700"}`}>{fmtRMShort(m.amount)}</p>
                        {m.reached
                          ? <p className="text-xs text-emerald-600">Dah tercapai! 🎉</p>
                          : <p className="text-xs text-gray-400">{m.yearsToReach < 999 ? `~${m.yearsToReach} tahun lagi` : "Tambah simpanan"}</p>
                        }
                      </div>
                    </div>
                    {m.reached && <span className="text-emerald-500 font-bold text-xs">DONE</span>}
                  </div>
                ))}
              </div>
            </Card>

            {/* ── Card 6: Investment Comparison (full) ──────────────────────── */}
            <Card className="md:col-span-2">
              <CardTitle icon="📊" title="Kenderaan Pelaburan Malaysia" sub="Sama freedom number, beza kadar pulangan — beza masa untuk bebas" />
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="pb-3 text-left font-semibold text-gray-600 text-xs">Pelaburan</th>
                      <th className="pb-3 text-right font-semibold text-gray-600 text-xs hidden sm:table-cell">Pulangan</th>
                      <th className="pb-3 text-right font-semibold text-gray-600 text-xs">Pasif/Bulan</th>
                      <th className="pb-3 text-right font-semibold text-gray-600 text-xs hidden md:table-cell">Freedom Number</th>
                      <th className="pb-3 text-right font-semibold text-gray-600 text-xs">Masa Bebas</th>
                      <th className="pb-3 text-center font-semibold text-gray-600 text-xs hidden sm:table-cell">Risiko</th>
                    </tr>
                  </thead>
                  <tbody>
                    {calc.invComparison.sort((a, b) => a.yearsNeeded - b.yearsNeeded).map((inv) => (
                      <tr key={inv.id} className={`border-b border-gray-50 last:border-0 ${inv.id === "epf" || inv.id === "asb" ? "bg-emerald-50/50" : ""}`}>
                        <td className="py-3">
                          <div className="flex items-center gap-2">
                            <span className="text-lg">{inv.emoji}</span>
                            <div>
                              <p className="font-semibold text-gray-800 text-xs sm:text-sm">{inv.name}</p>
                              <p className="text-xs text-gray-400 hidden sm:block">{inv.type}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 text-right font-bold text-gray-700 hidden sm:table-cell">{inv.rate}%</td>
                        <td className="py-3 text-right text-emerald-600 font-bold">RM {fmt(inv.passiveIncome, 0)}</td>
                        <td className="py-3 text-right text-gray-500 hidden md:table-cell text-xs">{fmtRMShort(inv.freedomNumber)}</td>
                        <td className="py-3 text-right">
                          <span className={`font-bold text-sm ${inv.yearsNeeded < 999 ? (inv.yearsNeeded <= 20 ? "text-emerald-600" : inv.yearsNeeded <= 35 ? "text-blue-600" : "text-amber-600") : "text-red-500"}`}>
                            {inv.yearsNeeded < 999 ? `${inv.yearsNeeded}yr` : "Lama sekali"}
                          </span>
                        </td>
                        <td className="py-3 text-center hidden sm:table-cell">
                          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${RISK_C[inv.risk]}`}>{inv.risk}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-3">Angka di atas adalah anggaran berdasarkan pulangan sejarah. Pulangan masa depan tidak dijamin. Diversifikasi antara beberapa kenderaan pelaburan adalah strategi terbaik.</p>
            </Card>

            {/* ── Card 7: What-If Scenarios ──────────────────────────────────── */}
            <Card className="md:col-span-2">
              <CardTitle icon="🔀" title="Senario 'Bagaimana Kalau...'" sub="Perubahan kecil boleh beri kesan besar" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  {
                    emoji: "💰", title: `Simpan RM 500 lebih/bulan`,
                    current: calc.yrs, new: calc.yrsPlus500,
                    good: true,
                    desc: `Dari RM ${fmt(savings)} → RM ${fmt(savings + 500)}/bulan`,
                  },
                  {
                    emoji: "📈", title: `Pulangan +2% (${(rate + 2).toFixed(1)}%)`,
                    current: calc.yrs, new: calc.yrsBetterRate,
                    good: true,
                    desc: "Diversifikasi ke REITs atau saham untuk pulangan lebih tinggi",
                  },
                  {
                    emoji: "✂️", title: `Kurangkan perbelanjaan 10%`,
                    current: calc.yrs, new: calc.yrsLower,
                    good: true,
                    desc: `Freedom Number turun ke ${fmtRMShort(calc.fnLower)} — lebih mudah dicapai`,
                  },
                ].map((s) => {
                  const saved = s.current - s.new;
                  return (
                    <div key={s.title} className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                      <div className="text-2xl mb-2">{s.emoji}</div>
                      <p className="font-bold text-gray-800 text-sm mb-1">{s.title}</p>
                      <p className="text-xs text-gray-400 mb-3">{s.desc}</p>
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-500">Sekarang</span>
                          <span className="font-semibold text-gray-700">{calc.yrs < 999 ? `${calc.yrs} tahun` : "Lama sekali"}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-500">Dengan ini</span>
                          <span className="font-bold text-emerald-600">{s.new < 999 ? `${s.new} tahun` : "Lama sekali"}</span>
                        </div>
                        {saved > 0 && s.new < 999 && (
                          <div className="bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-1.5 text-xs text-emerald-700 font-semibold text-center mt-2">
                            ⚡ Jimat {saved} tahun!
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* ── Card 8: Action Plan ────────────────────────────────────────── */}
            <Card className="md:col-span-2">
              <CardTitle icon="🗺️" title="Pelan Tindakan Kau" sub="Langkah konkrit berdasarkan situasi semasa" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    step: 1, emoji: "🛡️",
                    title: "Bina Dana Kecemasan Dahulu",
                    desc: `Pastikan kau ada RM ${fmt(expenses * 6)} (6 bulan perbelanjaan) dalam FD atau simpanan sebelum melabur agresif.`,
                    href: "/savings-calculator-malaysia", cta: "Kalkulator Simpanan →",
                    priority: assets < expenses * 6,
                  },
                  {
                    step: 2, emoji: "🏛️",
                    title: "Maksimumkan Caruman EPF",
                    desc: "EPF adalah aset terjamin kerajaan dengan pulangan ~5.5% p.a. Pertimbangkan caruman sukarela jika mampu.",
                    href: "/epf-calculator-malaysia", cta: "Kalkulator EPF →",
                    priority: true,
                  },
                  {
                    step: 3, emoji: "🏠",
                    title: "Nilai Semula: Aset atau Liabiliti?",
                    desc: "Semak setiap 'aset' kau — kereta, rumah sendiri, gadget mahal. Mana yang sebenarnya menguras poket kau?",
                    href: "/mortgage-calculator-malaysia", cta: "Kalkulator Mortgage →",
                    priority: false,
                  },
                  {
                    step: 4, emoji: "📈",
                    title: "Mulakan Portfolio Pelaburan",
                    desc: "Diversifikasi: EPF + ASB/ASNB + unit trust + REITs. Jangan letak semua telur dalam satu bakul.",
                    href: "/compound-interest-calculator", cta: "Kalkulator Faedah Kompaun →",
                    priority: calc.gapPct < 50,
                  },
                  {
                    step: 5, emoji: "💳",
                    title: "Kurangkan Hutang Berkadar Tinggi",
                    desc: "Kad kredit (18% p.a.) atau pinjaman peribadi menguras kekayaan kau. Bayar habis sebelum labur.",
                    href: "/loan-calculator", cta: "Kalkulator Pinjaman →",
                    priority: false,
                  },
                  {
                    step: 6, emoji: "📚",
                    title: "Naikkan Financial IQ Kau",
                    desc: "Baca Rich Dad Poor Dad, The Psychology of Money. Pengetahuan adalah aset yang tak boleh diambil orang.",
                    href: "/guides/what-is-dsr-malaysia", cta: "Panduan Kewangan →",
                    priority: false,
                  },
                ].map((a) => (
                  <a key={a.step} href={a.href}
                    className={`flex gap-4 rounded-2xl p-4 border transition-colors group ${a.priority ? "bg-emerald-50 border-emerald-200 hover:bg-emerald-100" : "bg-gray-50 border-gray-100 hover:border-gray-300"}`}>
                    <div className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm ${a.priority ? "bg-emerald-500 text-white" : "bg-gray-200 text-gray-600"}`}>
                      {a.step}
                    </div>
                    <div>
                      <p className={`font-semibold text-sm mb-0.5 ${a.priority ? "text-emerald-800" : "text-gray-800"}`}>{a.emoji} {a.title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed mb-1.5">{a.desc}</p>
                      <p className={`text-xs font-semibold ${a.priority ? "text-emerald-600" : "text-blue-600"}`}>{a.cta}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

          </div>

          {/* ── Rich Dad Quote ──────────────────────────────────────────────── */}
          <div className="mt-6 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 text-center">
            <p className="text-gray-400 text-xs mb-3">— Robert Kiyosaki, Rich Dad Poor Dad</p>
            <p className="text-white text-base font-medium leading-relaxed italic">
              &ldquo;Orang miskin dan kelas pertengahan bekerja untuk wang. Orang kaya membuatkan wang bekerja untuk mereka.&rdquo;
            </p>
            <p className="text-emerald-400 text-sm mt-4 font-semibold">
              Freedom Number kau: {fmtRM(calc.freedomNumber)} — ini bukan impian, ini matematik. 🧮
            </p>
          </div>

          <p className="text-xs text-gray-400 text-center mt-6">
            Pengiraan ini adalah anggaran untuk tujuan perancangan sahaja. Kadar pulangan pelaburan adalah tidak dijamin. Dapatkan nasihat daripada perancang kewangan berlesen untuk pelan yang lebih terperinci.
          </p>
        </section>
      )}
    </>
  );
}
