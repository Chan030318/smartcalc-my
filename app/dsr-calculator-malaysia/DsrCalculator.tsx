"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { trackDsrCalculated } from "@/lib/gtag";
import { useLang } from "@/components/LangProvider";
import WhatsAppShareButton from "@/components/WhatsAppShareButton";

const tr = {
  en: {
    formTitle: "Your Financial Details",
    incomeLabel: "Gross Monthly Income", incomeHint: "Before EPF and tax deductions (gross salary)",
    existingLabel: "Existing Monthly Commitments",
    existingHint: "Home loan, car loan, personal loan, PTPTN, credit card minimum payments",
    newLoanLabel: "New Loan Monthly Repayment", newLoanHint: "Leave blank or 0 if checking existing DSR only",
    newLoanHint2: "Monthly repayment of the loan you are applying for.",
    useLoanCalc: "Use the Loan Calculator →",
    notSureHint: "Not sure what your new repayment would be?",
    calculate: "Calculate DSR", reset: "Reset",
    empty: "Enter your income and commitments to see your DSR rating.",
    yourDsr: "Your DSR",
    capacityTitle: "Remaining Borrowing Capacity",
    capacityHint: "How much additional monthly repayment you can afford based on standard bank thresholds, after your existing commitments.",
    standardLimit: "Standard bank limit",
    higherIncomeLimit: "Higher-income / some banks",
    exceeded: "Exceeded",
    additionalRepayLabel: "additional repayment",
    maxTotalDebt: "Max total debt",
    capacityNote: "Capacity = bank threshold × income − existing commitments. Your new loan repayment is not subtracted here, so you can compare scenarios.",
    at60: "60% DSR threshold", at70: "70% DSR threshold",
    additionalCapacity: "Additional monthly repayment",
    maxDebt: "Max total monthly debt",
    breakdownTitle: "DSR Breakdown",
    colItem: "Item", colAmount: "Amount (RM)", colPct: "% of Income",
    grossIncome: "Gross Monthly Income",
    existingCommit: "Existing Commitments",
    newRepayment: "New Loan Repayment",
    remainingIncome: "Remaining Income",
    totalCommit: "Total Commitments",
    yourDsrRow: "Your DSR",
    incomeBreakdown: "Income Breakdown",
    whatCounts: "What counts as monthly debt commitments?",
    faqTitle: "Frequently Asked Questions",
    back: "Back to all calculators",
    howBanksTitle: "How Malaysian Banks Use DSR",
    howBanksDesc: "DSR (Debt Service Ratio) is the single most important metric Malaysian banks use when assessing a loan application. While credit score, employment type, and collateral all matter, a DSR above the bank's threshold is usually an automatic disqualifier — regardless of other factors. Understanding your DSR before you apply gives you the power to improve it first.",
    colDsrRange: "DSR Range", colCategory: "Category", colBankStance: "Bank Stance",
    tipsTitle: "Tips to Improve Your DSR",
    tipsSub: "If your DSR is Moderate or High Risk, these steps can help bring it below 60% before you apply.",
    whatCountsTitle: "What Counts as Monthly Commitments?",
    whatCountsSub: "Use these to build your \"Existing Monthly Commitments\" figure above.",
    colCommitType: "Commitment Type", colHowToFind: "How to Find the Amount",
    notIncluded: "Not included in DSR: Rent, utilities, groceries, insurance premiums, and other living expenses. Only licensed loan repayments count.",
    relatedTitle: "Related Calculators",
  },
  bm: {
    formTitle: "Maklumat Kewangan Anda",
    incomeLabel: "Pendapatan Kasar Bulanan", incomeHint: "Sebelum potongan EPF dan cukai (gaji kasar)",
    existingLabel: "Komitmen Bulanan Sedia Ada",
    existingHint: "Pinjaman rumah, kereta, peribadi, PTPTN, bayaran minimum kad kredit",
    newLoanLabel: "Bayaran Balik Pinjaman Baru", newLoanHint: "Biarkan kosong atau 0 jika hanya semak DSR sedia ada",
    newLoanHint2: "Bayaran balik bulanan pinjaman yang anda pohon.",
    useLoanCalc: "Guna Kalkulator Pinjaman →",
    notSureHint: "Tidak pasti berapa bayaran balik baru anda?",
    calculate: "Kira DSR", reset: "Reset",
    empty: "Masukkan pendapatan dan komitmen anda untuk lihat penarafan DSR.",
    yourDsr: "DSR Anda",
    capacityTitle: "Kapasiti Pinjaman Tinggal",
    capacityHint: "Berapa banyak bayaran balik bulanan tambahan yang mampu anda tanggung berdasarkan had bank standard, selepas komitmen sedia ada.",
    standardLimit: "Had bank standard",
    higherIncomeLimit: "Pendapatan tinggi / sesetengah bank",
    exceeded: "Melebihi Had",
    additionalRepayLabel: "bayaran balik tambahan",
    maxTotalDebt: "Jumlah hutang maksimum",
    capacityNote: "Kapasiti = had threshold bank × pendapatan − komitmen sedia ada. Bayaran balik pinjaman baru tidak ditolak di sini supaya anda boleh bandingkan senario.",
    at60: "Had DSR 60%", at70: "Had DSR 70%",
    additionalCapacity: "Bayaran balik bulanan tambahan",
    maxDebt: "Jumlah maksimum hutang bulanan",
    breakdownTitle: "Pecahan DSR",
    colItem: "Item", colAmount: "Jumlah (RM)", colPct: "% Pendapatan",
    grossIncome: "Pendapatan Kasar Bulanan",
    existingCommit: "Komitmen Sedia Ada",
    newRepayment: "Bayaran Pinjaman Baru",
    remainingIncome: "Pendapatan Tinggal",
    totalCommit: "Jumlah Komitmen",
    yourDsrRow: "DSR Anda",
    incomeBreakdown: "Pecahan Pendapatan",
    whatCounts: "Apa yang dikira sebagai komitmen hutang bulanan?",
    faqTitle: "Soalan Lazim",
    back: "Kembali ke semua kalkulator",
    howBanksTitle: "Cara Bank Malaysia Guna DSR",
    howBanksDesc: "DSR (Nisbah Khidmat Hutang) adalah metrik terpenting yang digunakan bank Malaysia untuk menilai permohonan pinjaman. Walaupun skor kredit, jenis pekerjaan, dan cagaran semuanya penting, DSR melebihi had bank biasanya menjadi penolak automatik — tanpa mengira faktor lain. Memahami DSR anda sebelum memohon memberi anda kuasa untuk memperbaikinya dahulu.",
    colDsrRange: "Julat DSR", colCategory: "Kategori", colBankStance: "Pendirian Bank",
    tipsTitle: "Tips Tingkatkan DSR Anda",
    tipsSub: "Jika DSR anda Sederhana atau Berisiko Tinggi, langkah-langkah ini boleh membantu membawanya di bawah 60% sebelum anda memohon.",
    whatCountsTitle: "Apa yang Dikira sebagai Komitmen Bulanan?",
    whatCountsSub: "Gunakan ini untuk membina angka \"Komitmen Bulanan Sedia Ada\" anda di atas.",
    colCommitType: "Jenis Komitmen", colHowToFind: "Cara Cari Jumlah",
    notIncluded: "Tidak termasuk dalam DSR: Sewa, utiliti, barangan runcit, premium insurans, dan perbelanjaan harian lain. Hanya bayaran pinjaman berlesen yang dikira.",
    relatedTitle: "Kalkulator Berkaitan",
  },
  zh: {
    formTitle: "你的财务资料",
    incomeLabel: "税前月收入", incomeHint: "EPF 和税款扣除之前（税前薪水）",
    existingLabel: "现有每月债务承诺",
    existingHint: "房贷、车贷、个人贷款、PTPTN、信用卡最低还款",
    newLoanLabel: "新贷款每月还款", newLoanHint: "如果只检查现有 DSR，可以留空或填 0",
    newLoanHint2: "你正在申请的贷款每月还款额。",
    useLoanCalc: "使用贷款计算器 →",
    notSureHint: "不确定新贷款的还款额？",
    calculate: "计算 DSR", reset: "重设",
    empty: "输入收入和债务承诺，查看你的 DSR 评级。",
    yourDsr: "你的 DSR",
    capacityTitle: "剩余借贷能力",
    capacityHint: "根据标准银行门槛，扣除现有债务承诺后，你还能负担的额外每月还款额。",
    standardLimit: "标准银行门槛",
    higherIncomeLimit: "高收入 / 部分银行",
    exceeded: "已超出",
    additionalRepayLabel: "额外还款能力",
    maxTotalDebt: "最高总债务",
    capacityNote: "借贷能力 = 银行门槛 × 收入 − 现有债务承诺。此处不扣除新贷款还款，方便你比较不同方案。",
    at60: "DSR 60% 门槛", at70: "DSR 70% 门槛",
    additionalCapacity: "额外每月还款能力",
    maxDebt: "最高每月总债务",
    breakdownTitle: "DSR 明细",
    colItem: "项目", colAmount: "金额 (RM)", colPct: "占收入 %",
    grossIncome: "税前月收入",
    existingCommit: "现有债务承诺",
    newRepayment: "新贷款还款",
    remainingIncome: "剩余收入",
    totalCommit: "总债务承诺",
    yourDsrRow: "你的 DSR",
    incomeBreakdown: "收入明细",
    whatCounts: "哪些项目算作每月债务承诺？",
    faqTitle: "常见问题",
    back: "回到所有计算器",
    howBanksTitle: "马来西亚银行如何使用 DSR",
    howBanksDesc: "DSR（债务偿还比率）是马来西亚银行评估贷款申请时最重要的指标。虽然信用评分、职业类型和抵押品都重要，但 DSR 超过银行门槛通常会被自动拒绝 — 不论其他因素如何。申请前了解自己的 DSR，让你有机会先改善它。",
    colDsrRange: "DSR 范围", colCategory: "类别", colBankStance: "银行态度",
    tipsTitle: "提高 DSR 的技巧",
    tipsSub: "如果你的 DSR 处于中等或高风险，以下步骤可以帮助你在申请前将其降至 60% 以下。",
    whatCountsTitle: "哪些算作每月债务承诺？",
    whatCountsSub: "用这些来计算上方「现有每月债务承诺」的数字。",
    colCommitType: "债务类型", colHowToFind: "如何找到金额",
    notIncluded: "不计入 DSR：租金、水电费、日常用品、保险费及其他生活开销。只有持牌贷款还款才算。",
    relatedTitle: "相关计算器",
  },
} as const;

// ─── Types ────────────────────────────────────────────────────────────────────
type DsrCategory = "excellent" | "good" | "moderate" | "high-risk";

interface DsrResult {
  monthlyIncome: number;
  existingCommitments: number;
  newRepayment: number;
  totalCommitments: number;
  dsr: number;
  category: DsrCategory;
  // Remaining capacity
  capacityAt60: number;   // max additional monthly repayment at 60% DSR
  capacityAt70: number;   // max additional monthly repayment at 70% DSR
  maxDebtAt60: number;
  maxDebtAt70: number;
}

function calcDsr(
  income: number,
  existing: number,
  newLoan: number,
): DsrResult {
  const total = existing + newLoan;
  const dsr = income > 0 ? r1((total / income) * 100) : 0;

  let category: DsrCategory;
  if (dsr <= 40) category = "excellent";
  else if (dsr <= 60) category = "good";
  else if (dsr <= 70) category = "moderate";
  else category = "high-risk";

  const maxDebtAt60 = r2(income * 0.6);
  const maxDebtAt70 = r2(income * 0.7);
  const capacityAt60 = r2(Math.max(0, maxDebtAt60 - existing));
  const capacityAt70 = r2(Math.max(0, maxDebtAt70 - existing));

  return {
    monthlyIncome: income,
    existingCommitments: existing,
    newRepayment: newLoan,
    totalCommitments: r2(total),
    dsr,
    category,
    capacityAt60,
    capacityAt70,
    maxDebtAt60,
    maxDebtAt70,
  };
}

function r1(n: number) { return Math.round(n * 10) / 10; }
function r2(n: number) { return Math.round(n * 100) / 100; }
function fmt(n: number) {
  return n.toLocaleString("en-MY", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// ─── Category config ──────────────────────────────────────────────────────────
type CatStyle = { color: string; bg: string; border: string; ring: string; bar: string; icon: string };
const CAT_STYLES: Record<DsrCategory, CatStyle> = {
  excellent:   { color: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-200", ring: "ring-emerald-400", bar: "bg-emerald-500", icon: "✅" },
  good:        { color: "text-green-700",   bg: "bg-green-50",   border: "border-green-200",   ring: "ring-green-400",   bar: "bg-green-500",   icon: "✅" },
  moderate:    { color: "text-amber-700",   bg: "bg-amber-50",   border: "border-amber-200",   ring: "ring-amber-400",   bar: "bg-amber-400",   icon: "⚠️" },
  "high-risk": { color: "text-red-700",     bg: "bg-red-50",     border: "border-red-200",     ring: "ring-red-400",     bar: "bg-red-500",     icon: "❌" },
};

const CAT_COPY: Record<DsrCategory, { en: { label: string; headline: string; description: string }; bm: { label: string; headline: string; description: string }; zh: { label: string; headline: string; description: string } }> = {
  excellent: {
    en: { label: "Excellent", headline: "Strong borrowing position", description: "Your DSR is well within limits. Most Malaysian banks will view your application very favourably. You have substantial remaining borrowing capacity." },
    bm: { label: "Cemerlang", headline: "Kedudukan pinjaman yang kukuh", description: "DSR anda jauh dalam had. Kebanyakan bank Malaysia akan memandang permohonan anda dengan sangat baik. Anda mempunyai kapasiti pinjaman yang besar." },
    zh: { label: "优秀", headline: "借贷能力强劲", description: "你的 DSR 远低于上限。大多数马来西亚银行会对你的申请持非常正面的态度。你有充裕的剩余借贷能力。" },
  },
  good: {
    en: { label: "Good", headline: "Acceptable to most banks", description: "Your DSR falls within the standard 60% threshold used by most Malaysian banks. Your loan application is likely to proceed to full assessment." },
    bm: { label: "Baik", headline: "Diterima kebanyakan bank", description: "DSR anda berada dalam had 60% standard yang digunakan oleh kebanyakan bank Malaysia. Permohonan pinjaman anda berkemungkinan besar akan diteruskan ke penilaian penuh." },
    zh: { label: "良好", headline: "大多数银行可接受", description: "你的 DSR 在大多数马来西亚银行使用的标准 60% 门槛内。你的贷款申请很可能进入完整评估阶段。" },
  },
  moderate: {
    en: { label: "Moderate", headline: "Borderline — some banks may approve", description: "Your DSR is between 60–70%. Some Malaysian banks accept up to 70% for applicants earning above RM10,000/month. Consider reducing existing commitments or the loan amount before applying." },
    bm: { label: "Sederhana", headline: "Sempadan — sesetengah bank mungkin meluluskan", description: "DSR anda antara 60–70%. Sesetengah bank Malaysia menerima sehingga 70% untuk pemohon yang berpendapatan melebihi RM10,000/bulan. Pertimbangkan untuk mengurangkan komitmen sedia ada atau jumlah pinjaman sebelum memohon." },
    zh: { label: "中等", headline: "边缘状态 — 部分银行或许会批准", description: "你的 DSR 介于 60–70%。部分马来西亚银行对月收入超过 RM10,000 的申请人可接受至 70%。建议申请前先减少现有债务承诺或降低贷款金额。" },
  },
  "high-risk": {
    en: { label: "High Risk", headline: "Most banks likely to decline", description: "Your DSR exceeds 70%. Most Malaysian banks and licensed lenders will decline a new loan at this ratio. You will need to reduce your existing commitments, increase income, or apply for a smaller loan amount." },
    bm: { label: "Risiko Tinggi", headline: "Kebanyakan bank berkemungkinan menolak", description: "DSR anda melebihi 70%. Kebanyakan bank Malaysia dan pemberi pinjaman berlesen akan menolak pinjaman baru pada nisbah ini. Anda perlu mengurangkan komitmen sedia ada, meningkatkan pendapatan, atau memohon jumlah pinjaman yang lebih kecil." },
    zh: { label: "高风险", headline: "大多数银行可能拒绝", description: "你的 DSR 超过 70%。大多数马来西亚银行和持牌贷款机构会拒绝这个比率的新贷款申请。你需要减少现有债务承诺、增加收入，或申请较小金额的贷款。" },
  },
};

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const FAQS = {
  en: [
    { q: "What is DSR (Debt Service Ratio)?", a: "DSR is the percentage of your gross monthly income that goes toward servicing all debt obligations — existing loans plus the new loan you are applying for. For example, if you earn RM5,000/month and your total monthly loan repayments are RM3,000, your DSR is 60%. Malaysian banks use DSR as the primary measure of your ability to repay a new loan." },
    { q: "What DSR do Malaysian banks use for loan approval?", a: "Most Malaysian banks use a DSR threshold of 60% for standard residential and personal loans. Some banks allow up to 70% for borrowers with higher income (typically RM10,000+/month) or for government employees with stable income. Bank Negara Malaysia (BNM) does not mandate a specific cap but issues responsible lending guidelines that banks follow." },
    { q: "What counts as monthly debt commitments in DSR?", a: "Monthly debt commitments include: (1) Home loan / mortgage monthly repayments, (2) Car loan / hire-purchase instalments, (3) Personal loan repayments, (4) PTPTN education loan repayments, (5) Credit card minimum payments (typically 5% of the credit limit per card), (6) Any other licensed loan repayments. Utility bills, rent, and daily living expenses are generally not included." },
    { q: "Is DSR calculated on gross or net income?", a: "Malaysian banks typically calculate DSR using gross monthly income (before EPF, tax, and other deductions). However, some banks may use net income for self-employed applicants or for more conservative assessments. This calculator uses gross income, which is the standard approach for salaried employees." },
    { q: "Do credit card balances count toward DSR?", a: "Yes, but only the minimum monthly payment is counted, not the full outstanding balance. Most banks calculate credit card commitment as 5% of the credit limit (not the balance drawn) per card. Clearing credit card balances and cancelling unused cards before applying for a loan can meaningfully reduce your DSR." },
    { q: "Can I improve my DSR before applying for a loan?", a: "Yes. Common strategies include: (1) Settling smaller loans fully before applying, (2) Cancelling unused credit cards, (3) Refinancing multiple loans into a single lower-rate consolidation loan, (4) Increasing your documented income (e.g., adding commission, overtime, or rental income), (5) Reducing the loan amount or extending the tenure to lower the monthly repayment." },
    { q: "Does PTPTN count toward my DSR?", a: "Yes. PTPTN repayments are treated as a monthly debt commitment and are factored into your DSR by most banks. The monthly repayment is based on a graduated scale — if you opted for automatic salary deduction (Potongan Gaji), this amount is counted. Settling PTPTN before applying for a large loan can help your DSR." },
  ],
  bm: [
    { q: "Apa itu DSR (Nisbah Khidmat Hutang)?", a: "DSR adalah peratusan pendapatan kasar bulanan anda yang digunakan untuk membayar semua obligasi hutang — pinjaman sedia ada ditambah pinjaman baru yang anda pohon. Contohnya, jika anda berpendapatan RM5,000/bulan dan jumlah bayaran balik pinjaman bulanan anda ialah RM3,000, DSR anda ialah 60%. Bank Malaysia menggunakan DSR sebagai ukuran utama kemampuan anda membayar balik pinjaman baru." },
    { q: "DSR berapa yang bank Malaysia guna untuk kelulusan pinjaman?", a: "Kebanyakan bank Malaysia menggunakan had DSR 60% untuk pinjaman kediaman dan peribadi standard. Sesetengah bank membenarkan sehingga 70% untuk peminjam berpendapatan lebih tinggi (biasanya RM10,000+/bulan) atau pekerja kerajaan berpendapatan stabil. Bank Negara Malaysia (BNM) tidak menetapkan had khusus tetapi mengeluarkan garis panduan peminjaman bertanggungjawab yang dipatuhi bank." },
    { q: "Apa yang dikira sebagai komitmen hutang bulanan dalam DSR?", a: "Komitmen hutang bulanan termasuk: (1) Bayaran balik pinjaman rumah / gadai janji, (2) Ansuran pinjaman kereta / sewabeli, (3) Bayaran balik pinjaman peribadi, (4) Bayaran balik pinjaman pendidikan PTPTN, (5) Bayaran minimum kad kredit (biasanya 5% daripada had kredit setiap kad), (6) Sebarang bayaran balik pinjaman berlesen lain. Bil utiliti, sewa, dan perbelanjaan harian umumnya tidak termasuk." },
    { q: "Adakah DSR dikira berdasarkan pendapatan kasar atau bersih?", a: "Bank Malaysia biasanya mengira DSR menggunakan pendapatan kasar bulanan (sebelum EPF, cukai, dan potongan lain). Walau bagaimanapun, sesetengah bank mungkin menggunakan pendapatan bersih untuk pemohon bekerja sendiri atau penilaian yang lebih konservatif. Kalkulator ini menggunakan pendapatan kasar, iaitu pendekatan standard untuk pekerja bergaji." },
    { q: "Adakah baki kad kredit dikira dalam DSR?", a: "Ya, tetapi hanya bayaran minimum bulanan yang dikira, bukan jumlah baki penuh. Kebanyakan bank mengira komitmen kad kredit sebagai 5% daripada had kredit (bukan baki yang digunakan) setiap kad. Membersihkan baki kad kredit dan membatalkan kad yang tidak digunakan sebelum memohon pinjaman boleh mengurangkan DSR anda dengan ketara." },
    { q: "Bolehkah saya tingkatkan DSR sebelum memohon pinjaman?", a: "Ya. Strategi biasa termasuk: (1) Selesaikan pinjaman kecil sepenuhnya sebelum memohon, (2) Batalkan kad kredit yang tidak digunakan, (3) Gabungkan beberapa pinjaman ke dalam satu pinjaman konsolidasi kadar rendah, (4) Tingkatkan pendapatan yang didokumentasikan (contohnya, tambah komisyen, lebih masa, atau pendapatan sewa), (5) Kurangkan jumlah pinjaman atau lanjutkan tempoh untuk rendahkan bayaran balik bulanan." },
    { q: "Adakah PTPTN dikira dalam DSR saya?", a: "Ya. Bayaran balik PTPTN dianggap sebagai komitmen hutang bulanan dan diambil kira dalam DSR anda oleh kebanyakan bank. Bayaran balik bulanan adalah berdasarkan skala berperingkat — jika anda memilih potongan gaji automatik (Potongan Gaji), jumlah ini dikira. Selesaikan PTPTN sebelum memohon pinjaman besar boleh membantu DSR anda." },
  ],
  zh: [
    { q: "什么是 DSR（债务偿还比率）？", a: "DSR 是你的税前月收入中用于偿还所有债务义务的百分比 — 包括现有贷款和你正在申请的新贷款。例如，如果你月收入 RM5,000，每月贷款总还款额为 RM3,000，你的 DSR 就是 60%。马来西亚银行以 DSR 作为衡量你偿还新贷款能力的主要指标。" },
    { q: "马来西亚银行用什么 DSR 来批准贷款？", a: "大多数马来西亚银行对标准住宅和个人贷款采用 60% 的 DSR 门槛。部分银行对高收入借款人（通常月收入 RM10,000 以上）或稳定收入的政府雇员可接受至 70%。国家银行（BNM）没有规定具体上限，但发布了银行遵循的负责任贷款指南。" },
    { q: "DSR 计算中哪些算作每月债务承诺？", a: "每月债务承诺包括：(1) 房贷 / 按揭每月还款，(2) 车贷 / 分期购买安装，(3) 个人贷款还款，(4) PTPTN 教育贷款还款，(5) 信用卡最低还款（通常为每张卡信用额度的 5%），(6) 其他任何持牌贷款还款。水电费、租金和日常生活开销一般不计入。" },
    { q: "DSR 是按税前还是税后收入计算的？", a: "马来西亚银行通常使用税前月收入（EPF、税款及其他扣款前）计算 DSR。不过，对于自雇申请人或较保守的评估，部分银行可能使用税后收入。本计算器使用税前收入，这是受薪雇员的标准做法。" },
    { q: "信用卡余额计入 DSR 吗？", a: "是的，但只计算每月最低还款额，而不是全部未偿余额。大多数银行以每张卡信用额度的 5%（而非已用余额）计算信用卡债务。在申请贷款前清偿信用卡余额并注销不用的卡，可以显著降低你的 DSR。" },
    { q: "申请贷款前可以改善 DSR 吗？", a: "可以。常见策略包括：(1) 申请前先全额还清小额贷款，(2) 注销不用的信用卡，(3) 将多笔贷款整合为一笔低利率综合贷款，(4) 增加有据可查的收入（如佣金、加班费或租金收入），(5) 减少贷款金额或延长还款期以降低每月还款额。" },
    { q: "PTPTN 计入我的 DSR 吗？", a: "是的。PTPTN 还款被视为每月债务承诺，大多数银行在计算 DSR 时会将其纳入。每月还款额按累进制计算 — 如果你选择了自动薪资扣款（Potongan Gaji），该金额会被计入。在申请大额贷款前还清 PTPTN 有助于改善你的 DSR。" },
  ],
};

// ─── Commitment examples ──────────────────────────────────────────────────────
const COMMITMENT_EXAMPLES = {
  en: [
    { item: "Home loan / mortgage", example: "Monthly instalment from your bank statement" },
    { item: "Car loan / hire purchase", example: "Monthly instalment from your bank statement" },
    { item: "Personal loan", example: "Monthly repayment amount" },
    { item: "PTPTN", example: "Graduated monthly repayment or salary deduction amount" },
    { item: "Credit card", example: "5% of credit limit per card (not balance)" },
    { item: "Other hire purchase", example: "e.g. motorcycle, furniture, gadgets" },
  ],
  bm: [
    { item: "Pinjaman rumah / gadai janji", example: "Ansuran bulanan daripada penyata bank anda" },
    { item: "Pinjaman kereta / sewabeli", example: "Ansuran bulanan daripada penyata bank anda" },
    { item: "Pinjaman peribadi", example: "Jumlah bayaran balik bulanan" },
    { item: "PTPTN", example: "Bayaran balik bulanan berperingkat atau jumlah potongan gaji" },
    { item: "Kad kredit", example: "5% daripada had kredit setiap kad (bukan baki)" },
    { item: "Sewabeli lain", example: "contoh: motosikal, perabot, gajet" },
  ],
  zh: [
    { item: "房贷 / 按揭", example: "银行对账单上的每月安装额" },
    { item: "车贷 / 分期购买", example: "银行对账单上的每月安装额" },
    { item: "个人贷款", example: "每月还款金额" },
    { item: "PTPTN", example: "累进制每月还款额或薪资扣款金额" },
    { item: "信用卡", example: "每张卡信用额度的 5%（非余额）" },
    { item: "其他分期购买", example: "如摩托车、家具、电子产品" },
  ],
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function DsrCalculator() {
  const { lang } = useLang();
  const t = (k: keyof typeof tr.en) => tr[lang][k];
  const [incomeInput, setIncomeInput] = useState("");
  const [existingInput, setExistingInput] = useState("");
  const [newLoanInput, setNewLoanInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const income = parseFloat(incomeInput.replace(/,/g, "")) || 0;
  const existing = parseFloat(existingInput.replace(/,/g, "")) || 0;
  const newLoan = parseFloat(newLoanInput.replace(/,/g, "")) || 0;
  const isValid = income > 0;

  const result = useMemo(
    (): DsrResult | null => (submitted && isValid ? calcDsr(income, existing, newLoan) : null),
    [submitted, income, existing, newLoan]
  );

  const handleCalculate = () => { if (isValid) setSubmitted(true); };
  const handleReset = () => {
    setIncomeInput(""); setExistingInput(""); setNewLoanInput(""); setSubmitted(false);
  };
  const onChange = (setter: (v: string) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => { setter(e.target.value); setSubmitted(false); };

  // Analytics
  const trackedDsr = useRef<number | null>(null);
  useEffect(() => {
    if (result && result.dsr !== trackedDsr.current) {
      trackedDsr.current = result.dsr;
      trackDsrCalculated(result.monthlyIncome, result.dsr);
    }
  }, [result]);

  const catStyle = result ? CAT_STYLES[result.category] : null;
  const catCopy = result ? CAT_COPY[result.category][lang] : null;
  const cfg = catStyle && catCopy ? { ...catStyle, ...catCopy } : null;
  const faqs = FAQS[lang];
  const commitmentExamples = COMMITMENT_EXAMPLES[lang];

  // Gauge bar width capped at 100%
  const gaugeWidth = result ? Math.min(result.dsr, 100) : 0;

  return (
    <>
      {/* ── Calculator ── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* Inputs */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">
            <h2 className="text-lg font-semibold text-gray-800">{t("formTitle")}</h2>

            {/* Monthly income */}
            <div>
              <label htmlFor="income" className="block text-sm font-medium text-gray-700 mb-1.5">
                {t("incomeLabel")}
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">RM</span>
                <input
                  id="income"
                  type="number"
                  min="0"
                  step="100"
                  placeholder="e.g. 6000"
                  value={incomeInput}
                  onChange={onChange(setIncomeInput)}
                  onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-12 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
              <p className="text-xs text-gray-400 mt-1.5">{t("incomeHint")}</p>
            </div>

            {/* Existing commitments */}
            <div>
              <label htmlFor="existing" className="block text-sm font-medium text-gray-700 mb-1.5">
                {t("existingLabel")}
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">RM</span>
                <input
                  id="existing"
                  type="number"
                  min="0"
                  step="50"
                  placeholder="e.g. 2000"
                  value={existingInput}
                  onChange={onChange(setExistingInput)}
                  onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-12 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
              <p className="text-xs text-gray-400 mt-1.5">{t("existingHint")}</p>
            </div>

            {/* New loan repayment */}
            <div>
              <label htmlFor="newloan" className="block text-sm font-medium text-gray-700 mb-1.5">
                {t("newLoanLabel")}
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium pointer-events-none">RM</span>
                <input
                  id="newloan"
                  type="number"
                  min="0"
                  step="50"
                  placeholder="e.g. 800"
                  value={newLoanInput}
                  onChange={onChange(setNewLoanInput)}
                  onKeyDown={(e) => e.key === "Enter" && handleCalculate()}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pl-12 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
              <p className="text-xs text-gray-400 mt-1.5">
                {t("newLoanHint2")}{" "}
                <Link href="/loan-calculator" className="text-blue-500 hover:underline">
                  {t("useLoanCalc")}
                </Link>
              </p>
            </div>

            <div className="flex gap-3 pt-1">
              <button
                onClick={handleCalculate}
                disabled={!isValid}
                className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-200 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                {t("calculate")}
              </button>
              {submitted && (
                <button
                  onClick={handleReset}
                  className="px-5 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium transition-colors text-sm"
                >
                  {t("reset")}
                </button>
              )}
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 flex flex-col justify-center">
            {!result || !cfg ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🏦</div>
                <p className="text-gray-400 text-sm">
                  {t("empty")}
                </p>
                <p className="text-xs text-gray-400 mt-3">
                  {t("notSureHint")}{" "}
                  <Link href="/loan-calculator" className="text-blue-500 hover:underline">
                    {t("useLoanCalc")}
                  </Link>
                </p>
              </div>
            ) : (
              <>
                {/* DSR hero */}
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-500 mb-1">{t("yourDsr")}</p>
                  <p className={`text-6xl font-bold mb-2 ${cfg.color}`}>
                    {result.dsr}%
                  </p>
                  <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold border ${cfg.bg} ${cfg.color} ${cfg.border}`}>
                    {cfg.icon} {cfg.label}
                  </span>
                </div>

                {/* Gauge bar */}
                <div className="mb-6">
                  <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden">
                    {/* Zone markers */}
                    <div className="absolute inset-0 flex">
                      <div className="bg-emerald-100" style={{ width: "40%" }} />
                      <div className="bg-green-100" style={{ width: "20%" }} />
                      <div className="bg-amber-100" style={{ width: "10%" }} />
                      <div className="bg-red-100" style={{ width: "30%" }} />
                    </div>
                    {/* Filled bar */}
                    <div
                      className={`absolute top-0 left-0 h-full rounded-full transition-all duration-700 ${cfg.bar}`}
                      style={{ width: `${gaugeWidth}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-1.5 px-0.5">
                    <span>0%</span>
                    <span className="text-emerald-600">40%</span>
                    <span className="text-green-600">60%</span>
                    <span className="text-amber-500">70%</span>
                    <span className="text-red-500">100%</span>
                  </div>
                </div>

                {/* Category callout */}
                <div className={`rounded-xl border p-4 mb-5 ${cfg.bg} ${cfg.border}`}>
                  <p className={`font-semibold text-sm mb-1 ${cfg.color}`}>{cfg.headline}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{cfg.description}</p>
                </div>

                {/* 3-stat strip */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: t("existingCommit"), value: `RM ${fmt(result.existingCommitments)}`, sub: "/month" },
                    { label: t("newRepayment"), value: `RM ${fmt(result.newRepayment)}`, sub: "/month" },
                    { label: t("totalCommit"), value: `RM ${fmt(result.totalCommitments)}`, sub: "/month" },
                  ].map((s) => (
                    <div key={s.label} className="bg-gray-50 rounded-xl p-3 text-center">
                      <p className="text-xs text-gray-500 mb-0.5">{s.label}</p>
                      <p className="font-bold text-gray-800 text-xs sm:text-sm">{s.value}</p>
                      <p className="text-xs text-gray-400">{s.sub}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-center">
                  <WhatsAppShareButton
                    message={`我的 DSR 是 ${result.dsr.toFixed(1)}%（${cfg.label}），这是银行审批贷款最重要的指标 🏦 算算你的：https://smrtcalc.com/dsr-calculator-malaysia`}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Borrowing capacity & breakdown */}
      {result && cfg && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Income waterfall */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-5">{t("incomeBreakdown")}</h2>
              <div className="space-y-3">
                {/* Income bar */}
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-semibold text-gray-800">{t("grossIncome")}</span>
                    <span className="font-semibold text-gray-800">RM {fmt(result.monthlyIncome)}</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full" />
                </div>

                {/* Existing commitments bar */}
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-gray-600">
                      <span className="text-red-400 mr-1.5">−</span>{t("existingCommit")}
                    </span>
                    <span className="text-red-500 font-medium">RM {fmt(result.existingCommitments)}</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-red-300 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min((result.existingCommitments / result.monthlyIncome) * 100, 100)}%` }}
                    />
                  </div>
                </div>

                {/* New loan bar */}
                {result.newRepayment > 0 && (
                  <div>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-gray-600">
                        <span className="text-orange-400 mr-1.5">−</span>{t("newRepayment")}
                      </span>
                      <span className="text-orange-500 font-medium">RM {fmt(result.newRepayment)}</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-orange-300 rounded-full transition-all duration-500"
                        style={{ width: `${Math.min((result.newRepayment / result.monthlyIncome) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* Remaining */}
                <div className="pt-2 border-t border-gray-100">
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-semibold text-gray-800">{t("remainingIncome")}</span>
                    <span className="font-semibold text-blue-600">RM {fmt(Math.max(0, result.monthlyIncome - result.totalCommitments))}</span>
                  </div>
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-400 rounded-full transition-all duration-500"
                      style={{ width: `${Math.max(0, Math.min(100 - gaugeWidth, 100))}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Borrowing capacity */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <h2 className="text-lg font-bold text-gray-900 mb-5">{t("capacityTitle")}</h2>
              <p className="text-xs text-gray-500 mb-4">{t("capacityHint")}</p>
              <div className="space-y-4">
                {[
                  {
                    threshold: t("at60"),
                    label: t("standardLimit"),
                    maxDebt: result.maxDebtAt60,
                    capacity: result.capacityAt60,
                    color: result.capacityAt60 > 0 ? "text-green-700" : "text-red-600",
                    bg: result.capacityAt60 > 0 ? "bg-green-50 border-green-100" : "bg-red-50 border-red-100",
                  },
                  {
                    threshold: t("at70"),
                    label: t("higherIncomeLimit"),
                    maxDebt: result.maxDebtAt70,
                    capacity: result.capacityAt70,
                    color: result.capacityAt70 > 0 ? "text-amber-700" : "text-red-600",
                    bg: result.capacityAt70 > 0 ? "bg-amber-50 border-amber-100" : "bg-red-50 border-red-100",
                  },
                ].map((row) => (
                  <div key={row.threshold} className={`rounded-xl border p-4 ${row.bg}`}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="text-xs font-semibold text-gray-600">{row.threshold}</p>
                        <p className="text-xs text-gray-400">{row.label}</p>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold text-sm ${row.color}`}>
                          {row.capacity > 0 ? `+RM ${fmt(row.capacity)}/mo` : t("exceeded")}
                        </p>
                        <p className="text-xs text-gray-400">{t("additionalRepayLabel")}</p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      {t("maxTotalDebt")}: <span className="font-medium text-gray-700">RM {fmt(row.maxDebt)}/mo</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4">{t("capacityNote")}</p>
            </div>
          </div>
        </section>
      )}

      {/* How banks use DSR */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">{t("howBanksTitle")}</h2>
            <p className="text-gray-600 leading-relaxed">{t("howBanksDesc")}</p>
          </div>

          {/* DSR threshold table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-gray-100">
                  <th className="pb-3 font-semibold text-gray-700">{t("colDsrRange")}</th>
                  <th className="pb-3 font-semibold text-gray-700 text-center">{t("colCategory")}</th>
                  <th className="pb-3 font-semibold text-gray-700">{t("colBankStance")}</th>
                </tr>
              </thead>
              <tbody>
                {([
                  { range: "≤ 40%", category: { en: "Excellent", bm: "Cemerlang", zh: "优秀" }, stance: { en: "Very likely approved. Strong position for negotiating better rates.", bm: "Sangat berkemungkinan diluluskan. Kedudukan kukuh untuk berunding kadar lebih baik.", zh: "极有可能获批。处于有利位置谈判更低利率。" }, color: "text-emerald-600", bg: "bg-emerald-50" },
                  { range: "41% – 60%", category: { en: "Good", bm: "Baik", zh: "良好" }, stance: { en: "Acceptable to most Malaysian banks for personal, car, and home loans.", bm: "Diterima kebanyakan bank Malaysia untuk pinjaman peribadi, kereta, dan rumah.", zh: "大多数马来西亚银行对个人贷款、车贷和房贷均可接受。" }, color: "text-green-600", bg: "bg-green-50" },
                  { range: "61% – 70%", category: { en: "Moderate", bm: "Sederhana", zh: "中等" }, stance: { en: "Borderline. Some banks allow up to 70% for incomes above RM10,000/month.", bm: "Sempadan. Sesetengah bank membenarkan sehingga 70% untuk pendapatan melebihi RM10,000/bulan.", zh: "边缘状态。部分银行对月收入超过 RM10,000 的申请人可接受至 70%。" }, color: "text-amber-600", bg: "bg-amber-50" },
                  { range: "> 70%", category: { en: "High Risk", bm: "Risiko Tinggi", zh: "高风险" }, stance: { en: "Most banks will decline. Focus on reducing existing commitments first.", bm: "Kebanyakan bank akan menolak. Fokus kurangkan komitmen sedia ada dahulu.", zh: "大多数银行会拒绝。先专注于减少现有债务承诺。" }, color: "text-red-600", bg: "bg-red-50" },
                ] as const).map((row) => (
                  <tr key={row.range} className="border-b border-gray-50 last:border-0">
                    <td className="py-3 font-medium text-gray-800">{row.range}</td>
                    <td className="py-3 text-center">
                      <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${row.bg} ${row.color}`}>
                        {row.category[lang]}
                      </span>
                    </td>
                    <td className="py-3 text-gray-600 text-xs sm:text-sm">{row.stance[lang]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 3-tip cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {([
              { emoji: "💳", title: { en: "Credit Cards Count", bm: "Kad Kredit Dikira", zh: "信用卡计入 DSR" }, body: { en: "Banks count 5% of your total credit limit per card as a monthly commitment — even if you never carry a balance. Cancel cards you don't use before applying.", bm: "Bank mengira 5% daripada had kredit setiap kad sebagai komitmen bulanan — walaupun anda tidak pernah bawa baki. Batalkan kad yang tidak digunakan sebelum memohon.", zh: "银行将每张卡信用额度的 5% 计为每月债务承诺 — 即使你从不持有余额。申请前注销不用的卡。" } },
              { emoji: "📋", title: { en: "PTPTN Included", bm: "PTPTN Termasuk", zh: "PTPTN 计入" }, body: { en: "PTPTN loan repayments are factored into your DSR. If you are still repaying PTPTN, this reduces the new loan you can qualify for.", bm: "Bayaran balik pinjaman PTPTN diambil kira dalam DSR anda. Jika anda masih membayar PTPTN, ini mengurangkan pinjaman baru yang layak anda perolehi.", zh: "PTPTN 贷款还款计入你的 DSR。如果你还在偿还 PTPTN，这会减少你能申请的新贷款额度。" } },
              { emoji: "💑", title: { en: "Joint Applications", bm: "Permohonan Bersama", zh: "联名申请" }, body: { en: "Applying jointly with a spouse or co-borrower combines both incomes, which can significantly lower your combined DSR and improve approval chances.", bm: "Memohon bersama pasangan atau peminjam bersama menggabungkan kedua-dua pendapatan, yang boleh mengurangkan DSR gabungan anda dengan ketara dan meningkatkan peluang kelulusan.", zh: "与配偶或共同借款人联名申请，两人收入合并计算，可显著降低合并 DSR，提高批准机会。" } },
            ] as const).map((c) => (
              <div key={c.title.en} className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <div className="text-2xl mb-2">{c.emoji}</div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1.5">{c.title[lang]}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{c.body[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips to improve DSR */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{t("tipsTitle")}</h2>
          <p className="text-gray-500 text-sm mb-6">{t("tipsSub")}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {([
              { tip: { en: "Settle the smallest loans first", bm: "Selesaikan pinjaman terkecil dahulu", zh: "先还清最小额贷款" }, detail: { en: "Eliminating a small personal loan completely removes its monthly repayment from your DSR, which is more impactful than making partial payments on multiple debts.", bm: "Menghapuskan pinjaman peribadi kecil sepenuhnya membuang bayaran balik bulanannya dari DSR anda, yang lebih berkesan daripada membuat bayaran separa pada beberapa hutang.", zh: "完全还清一笔小额个人贷款，可将其每月还款从 DSR 中移除，比同时偿还多笔债务的部分款项更有效。" } },
              { tip: { en: "Cancel unused credit cards", bm: "Batalkan kad kredit yang tidak digunakan", zh: "注销不用的信用卡" }, detail: { en: "Banks count 5% of your credit limit per card regardless of usage. Cancelling a card with a RM10,000 limit removes RM500 from your monthly commitments in the bank's DSR calculation.", bm: "Bank mengira 5% daripada had kredit setiap kad tanpa mengira penggunaan. Membatalkan kad dengan had RM10,000 mengeluarkan RM500 dari komitmen bulanan anda dalam pengiraan DSR bank.", zh: "银行不论使用情况，将每张卡信用额度的 5% 计入债务。注销一张 RM10,000 额度的卡，可从 DSR 计算中移除 RM500 的月度债务。" } },
              { tip: { en: "Refinance to a longer tenure", bm: "Pembiayaan semula ke tempoh lebih panjang", zh: "再融资延长还款期" }, detail: { en: "Refinancing existing loans to a longer tenure lowers the monthly repayment — reducing your DSR. You will pay more interest overall, but it improves your approval odds for the new loan.", bm: "Membiayai semula pinjaman sedia ada ke tempoh lebih panjang mengurangkan bayaran balik bulanan — mengurangkan DSR anda. Anda akan membayar lebih faedah keseluruhannya, tetapi ia meningkatkan peluang kelulusan untuk pinjaman baru.", zh: "将现有贷款再融资延长还款期，可降低每月还款额，从而降低 DSR。整体利息会增加，但能提高新贷款的批准机会。" } },
              { tip: { en: "Include all income sources", bm: "Sertakan semua sumber pendapatan", zh: "申报所有收入来源" }, detail: { en: "If you have verified rental income, commission, or allowances, ensure your bank receives documentation. A higher verified gross income directly lowers your DSR percentage.", bm: "Jika anda mempunyai pendapatan sewa, komisyen, atau elaun yang disahkan, pastikan bank anda menerima dokumentasi. Pendapatan kasar yang disahkan lebih tinggi secara langsung menurunkan peratusan DSR anda.", zh: "如果你有经过核实的租金收入、佣金或津贴，确保银行收到相关文件。更高的核实税前收入可直接降低 DSR 百分比。" } },
              { tip: { en: "Apply for a smaller loan", bm: "Pohon pinjaman yang lebih kecil", zh: "申请较小金额的贷款" }, detail: { en: "Reducing the loan amount or extending the tenure of the new loan lowers its monthly repayment, bringing your total DSR back into the acceptable range.", bm: "Mengurangkan jumlah pinjaman atau melanjutkan tempoh pinjaman baru mengurangkan bayaran balik bulanannya, membawa jumlah DSR anda kembali ke julat yang diterima.", zh: "减少贷款金额或延长新贷款的还款期，可降低每月还款额，将总 DSR 带回可接受范围。" } },
              { tip: { en: "Consider a joint application", bm: "Pertimbangkan permohonan bersama", zh: "考虑联名申请" }, detail: { en: "Adding a co-borrower with income and low existing commitments combines household income and can substantially reduce the joint DSR, improving approval likelihood.", bm: "Menambah peminjam bersama yang berpendapatan dan mempunyai komitmen sedia ada yang rendah menggabungkan pendapatan isi rumah dan boleh mengurangkan DSR gabungan dengan ketara, meningkatkan kemungkinan kelulusan.", zh: "加入一位有收入且现有债务承诺低的共同借款人，合并家庭收入，可大幅降低合并 DSR，提高批准可能性。" } },
            ] as const).map((row) => (
              <div key={row.tip.en} className="flex gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <svg className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-0.5">{row.tip[lang]}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{row.detail[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What counts as commitments */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{t("whatCountsTitle")}</h2>
          <p className="text-gray-500 text-sm mb-6">{t("whatCountsSub")}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left border-b border-gray-100">
                  <th className="pb-3 font-semibold text-gray-700">{t("colCommitType")}</th>
                  <th className="pb-3 font-semibold text-gray-700">{t("colHowToFind")}</th>
                </tr>
              </thead>
              <tbody>
                {commitmentExamples.map((row) => (
                  <tr key={row.item} className="border-b border-gray-50 last:border-0">
                    <td className="py-3 font-medium text-gray-800">{row.item}</td>
                    <td className="py-3 text-gray-500 text-xs sm:text-sm">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3 text-xs text-blue-700">
            {t("notIncluded")}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">{t("relatedTitle")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {([
              { href: "/loan-calculator", emoji: "🏦", title: { en: "Loan Calculator", bm: "Kalkulator Pinjaman", zh: "贷款计算器" }, desc: { en: "Get your estimated monthly repayment for a new loan — use that figure as your new repayment input above.", bm: "Dapatkan anggaran bayaran balik bulanan untuk pinjaman baru — gunakan angka itu sebagai input bayaran balik baru anda di atas.", zh: "获取新贷款的每月还款估算 — 将该数字填入上方的新贷款还款输入框。" } },
              { href: "/salary-calculator-malaysia", emoji: "💰", title: { en: "Salary Calculator", bm: "Kalkulator Gaji", zh: "薪资计算器" }, desc: { en: "See your gross and net take-home pay including EPF, SOCSO, and PCB deductions.", bm: "Lihat gaji kasar dan bersih anda termasuk potongan EPF, SOCSO, dan PCB.", zh: "查看你的税前和税后实得薪资，包括 EPF、SOCSO 和 PCB 扣款。" } },
              { href: "/income-tax-calculator-malaysia", emoji: "🧾", title: { en: "Income Tax Calculator", bm: "Kalkulator Cukai Pendapatan", zh: "所得税计算器" }, desc: { en: "Calculate your annual income tax payable and effective tax rate for YA 2024.", bm: "Kira cukai pendapatan tahunan anda yang perlu dibayar dan kadar cukai efektif untuk TA 2024.", zh: "计算你 2024 课税年度的应缴年度所得税及有效税率。" } },
            ] as const).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex gap-3 p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-colors group"
              >
                <span className="text-2xl flex-shrink-0">{link.emoji}</span>
                <div>
                  <p className="text-sm font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">{link.title[lang]} →</p>
                  <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{link.desc[lang]}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t("faqTitle")}</h2>
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
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {t("back")}
        </Link>
      </section>
    </>
  );
}
