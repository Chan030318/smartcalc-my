"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/components/LangProvider";

type Step = {
  emoji: string;
  label: { en: string; bm: string; zh: string };
  desc:  { en: string; bm: string; zh: string };
  href?: string;
  cta?:  { en: string; bm: string; zh: string };
};

type Journey = {
  id: string;
  emoji: string;
  color: string;
  bg: string;
  border: string;
  accent: string;
  tag:   { en: string; bm: string; zh: string };
  title: { en: string; bm: string; zh: string };
  sub:   { en: string; bm: string; zh: string };
  steps: Step[];
};

const JOURNEYS: Journey[] = [
  // ─── TAX ────────────────────────────────────────────────────────────────────
  {
    id: "tax",
    emoji: "🧾",
    color:  "text-orange-600",
    bg:     "bg-orange-50",
    border: "border-orange-200",
    accent: "bg-orange-500",
    tag:   { en: "For First-Time Taxpayers", bm: "Untuk Pembayar Cukai Pertama Kali", zh: "初次报税者必看" },
    title: { en: "How to File Your Income Tax", bm: "Cara Lapor Cukai Pendapatan", zh: "怎样报税？" },
    sub:   { en: "Earning above RM34,000/year? You must file. Here's the exact steps — no jargon.", bm: "Pendapatan melebihi RM34,000/tahun? Kau wajib lapor. Ini langkah tepat — tiada istilah sukar.", zh: "年收入超过RM34,000？你必须报税。以下是具体步骤，无专业术语。" },
    steps: [
      {
        emoji: "1️⃣",
        label: { en: "Know your gross income",       bm: "Tahu pendapatan kasar kau",             zh: "了解你的总收入" },
        desc:  { en: "Add up salary, bonuses, freelance income — all income before deductions.", bm: "Jumlahkan gaji, bonus, pendapatan bebas — semua pendapatan sebelum potongan.", zh: "将薪资、花红、兼职收入全部加起来 — 所有扣款前的收入。" },
        href:  "/salary-calculator-malaysia",
        cta:   { en: "Check My Salary", bm: "Semak Gaji Saya", zh: "检查我的薪资" },
      },
      {
        emoji: "2️⃣",
        label: { en: "Claim your tax reliefs",       bm: "Tuntut pelepasan cukai kau",             zh: "申请税务减免" },
        desc:  { en: "EPF contribution (up to RM4,000), medical insurance, parents, laptop, books — many reliefs available.", bm: "Caruman EPF (sehingga RM4,000), insurans perubatan, ibu bapa, laptop, buku — banyak pelepasan tersedia.", zh: "EPF供款（最高RM4,000）、医疗保险、父母、笔记本电脑、书籍 — 有很多减免可申请。" },
        href:  "/income-tax-calculator-malaysia",
        cta:   { en: "Calculate Tax with Reliefs", bm: "Kira Cukai dengan Pelepasan", zh: "计算含减免的税额" },
      },
      {
        emoji: "3️⃣",
        label: { en: "Understand PCB vs actual tax", bm: "Faham PCB vs cukai sebenar",              zh: "了解PCB与实际税款的区别" },
        desc:  { en: "PCB is deducted monthly from your salary. If you overpay, LHDN will refund you. If underpaid, you top up.", bm: "PCB dipotong setiap bulan dari gaji kau. Kalau lebih bayar, LHDN akan pulangkan. Kalau kurang, kau tambah.", zh: "PCB每月从薪资中扣除。如果多付了，LHDN会退款。如果少付了，你需要补缴。" },
        href:  "/guides/pcb-vs-income-tax-malaysia",
        cta:   { en: "PCB vs Income Tax Guide", bm: "Panduan PCB vs Cukai", zh: "PCB与所得税指南" },
      },
      {
        emoji: "4️⃣",
        label: { en: "File on MyTax portal (LHDN)", bm: "Lapor di portal MyTax (LHDN)",            zh: "在MyTax门户（LHDN）提交报税" },
        desc:  { en: "Register at mytax.hasil.gov.my → e-Filing → BE form (for employees). Deadline: 30 April.", bm: "Daftar di mytax.hasil.gov.my → e-Filing → Borang BE (untuk pekerja). Tarikh akhir: 30 April.", zh: "在 mytax.hasil.gov.my 注册 → e-Filing → BE表格（适用于打工人）。截止日期：4月30日。" },
        href:  "/guides/how-pcb-tax-works-malaysia",
        cta:   { en: "How PCB Tax Works", bm: "Cara Cukai PCB Berfungsi", zh: "PCB税务运作方式" },
      },
      {
        emoji: "5️⃣",
        label: { en: "Save money: reduce your tax legally", bm: "Jimat wang: kurangkan cukai secara sah", zh: "合法省税的方法" },
        desc:  { en: "Maximize EPF voluntary contribution, buy PRS, pay parents' medical bills — all tax-deductible.", bm: "Maksimumkan caruman sukarela EPF, beli PRS, bayar bil perubatan ibu bapa — semuanya boleh ditolak cukai.", zh: "最大化EPF自愿供款、购买PRS、支付父母医疗费 — 均可抵税。" },
        href:  "/guides/how-to-reduce-income-tax-malaysia",
        cta:   { en: "Reduce My Tax Guide", bm: "Panduan Kurangkan Cukai", zh: "减税指南" },
      },
    ],
  },

  // ─── EPF & SOCSO ────────────────────────────────────────────────────────────
  {
    id: "epf",
    emoji: "🏛️",
    color:  "text-teal-600",
    bg:     "bg-teal-50",
    border: "border-teal-200",
    accent: "bg-teal-500",
    tag:   { en: "Your Retirement Safety Net", bm: "Jaring Keselamatan Persaraan Kau", zh: "你的退休保障" },
    title: { en: "How to Read Your EPF & SOCSO", bm: "Cara Baca EPF & SOCSO Kau", zh: "怎样看EPF与SOCSO？" },
    sub:   { en: "Every working Malaysian contributes monthly. Most people never check their account. Here's what you need to know.", bm: "Setiap pekerja Malaysia menyumbang setiap bulan. Kebanyakan orang tidak pernah semak akaun mereka. Inilah yang kau perlu tahu.", zh: "每位马来西亚打工人每月都在供款。大多数人从不查看账户。以下是你需要了解的。" },
    steps: [
      {
        emoji: "1️⃣",
        label: { en: "How much is deducted from your salary?", bm: "Berapa yang dipotong dari gaji kau?",    zh: "每月从薪资中扣除多少？" },
        desc:  { en: "You contribute 11% of salary. Your employer adds 12-13%. EPF = 23-24% of your gross salary invested monthly.", bm: "Kau caruman 11% dari gaji. Majikan kau tambah 12-13%. EPF = 23-24% dari gaji kasar kau dilabur setiap bulan.", zh: "你供款薪资的11%，雇主再加12-13%。EPF = 每月投资薪资的23-24%。" },
        href:  "/salary-calculator-malaysia",
        cta:   { en: "See My EPF Deduction", bm: "Lihat Potongan EPF Saya", zh: "查看我的EPF扣款" },
      },
      {
        emoji: "2️⃣",
        label: { en: "Check your EPF balance (i-Akaun)", bm: "Semak baki EPF kau (i-Akaun)",             zh: "查看EPF余额（i-Akaun）" },
        desc:  { en: "Download i-Akaun app or visit kwsp.gov.my. Account 1 (70%) = retirement. Account 2 (30%) = flexible withdrawal.", bm: "Muat turun app i-Akaun atau lawati kwsp.gov.my. Akaun 1 (70%) = persaraan. Akaun 2 (30%) = pengeluaran fleksibel.", zh: "下载i-Akaun应用或访问kwsp.gov.my。账户1（70%）= 退休金。账户2（30%）= 灵活提取。" },
        href:  "/guides/epf-contribution-guide-malaysia",
        cta:   { en: "EPF Contribution Guide", bm: "Panduan Caruman EPF", zh: "EPF供款指南" },
      },
      {
        emoji: "3️⃣",
        label: { en: "Will your EPF be enough to retire?", bm: "Adakah EPF kau cukup untuk bersara?",     zh: "你的EPF够退休吗？" },
        desc:  { en: "EPF Basic Savings benchmarks: RM50k at 30, RM120k at 40, RM240k at 50. Project yours with our calculator.", bm: "Penanda aras Simpanan Asas EPF: RM50k pada 30, RM120k pada 40, RM240k pada 50. Unjurkan kau dengan kalkulator kami.", zh: "EPF基本储蓄基准：30岁RM50k，40岁RM120k，50岁RM240k。用我们的计算器预测你的数字。" },
        href:  "/epf-calculator-malaysia",
        cta:   { en: "Project My EPF Savings", bm: "Unjurkan Simpanan EPF Saya", zh: "预测我的EPF储蓄" },
      },
      {
        emoji: "4️⃣",
        label: { en: "What is SOCSO & EIS?",           bm: "Apa itu SOCSO & EIS?",                    zh: "什么是SOCSO和EIS？" },
        desc:  { en: "SOCSO = accident & disability insurance. EIS = job-loss insurance pays you up to 6 months if you're retrenched.", bm: "SOCSO = insurans kemalangan & kecacatan. EIS = insurans kehilangan kerja bayar kau sehingga 6 bulan jika dibuang kerja.", zh: "SOCSO = 意外与残障保险。EIS = 失业保险，裁员时最多支付6个月收入。" },
        href:  "/socso-calculator-malaysia",
        cta:   { en: "Calculate SOCSO & EIS", bm: "Kira SOCSO & EIS", zh: "计算SOCSO和EIS" },
      },
      {
        emoji: "5️⃣",
        label: { en: "EPF alone won't be enough",      bm: "EPF sahaja tidak cukup",                  zh: "光靠EPF是不够的" },
        desc:  { en: "EPF average dividend ~5.5%. Freedom Number requires passive income > expenses. Start investing in ASB, REITs, or stocks too.", bm: "Dividen purata EPF ~5.5%. Freedom Number memerlukan pendapatan pasif > perbelanjaan. Mula labur dalam ASB, REITs, atau saham juga.", zh: "EPF平均股息约5.5%。自由数字要求被动收入>支出。也要开始投资ASB、REITs或股票。" },
        href:  "/financial-freedom-calculator",
        cta:   { en: "Calculate My Freedom Number", bm: "Kira Freedom Number Saya", zh: "计算我的自由数字" },
      },
    ],
  },

  // ─── LOANS ──────────────────────────────────────────────────────────────────
  {
    id: "loan",
    emoji: "🏦",
    color:  "text-blue-600",
    bg:     "bg-blue-50",
    border: "border-blue-200",
    accent: "bg-blue-500",
    tag:   { en: "Before You Sign Anything", bm: "Sebelum Kau Tandatangan Apa-apa", zh: "签字前必须知道" },
    title: { en: "How to Apply for a Loan (the Smart Way)", bm: "Cara Mohon Pinjaman (dengan Bijak)", zh: "怎样贷款才聪明？" },
    sub:   { en: "A bad loan decision can cost you 10+ years. Know your numbers before walking into any bank.", bm: "Keputusan pinjaman yang buruk boleh menelan masa 10+ tahun. Tahu nombor kau sebelum masuk mana-mana bank.", zh: "一个错误的贷款决定可能让你付出10年以上的代价。进银行前先了解你的数字。" },
    steps: [
      {
        emoji: "1️⃣",
        label: { en: "Understand DSR — banks' #1 check", bm: "Faham DSR — semakan utama bank",          zh: "了解DSR — 银行的首要审查" },
        desc:  { en: "Debt Service Ratio = total monthly debt ÷ gross income. Banks approve if DSR < 60–70%. Check yours first.", bm: "Nisbah Khidmat Hutang = jumlah hutang bulanan ÷ pendapatan kasar. Bank lulus jika DSR < 60–70%. Semak kau dahulu.", zh: "债务偿还比率 = 每月总债务 ÷ 总收入。DSR < 60-70%银行才会批准。先检查你的DSR。" },
        href:  "/dsr-calculator-malaysia",
        cta:   { en: "Check My DSR Now", bm: "Semak DSR Saya Sekarang", zh: "立即检查我的DSR" },
      },
      {
        emoji: "2️⃣",
        label: { en: "Check your CCRIS & CTOS score", bm: "Semak skor CCRIS & CTOS kau",              zh: "检查你的CCRIS和CTOS评分" },
        desc:  { en: "CCRIS is Bank Negara's credit record. CTOS is a private credit bureau. Both affect loan approval. Check free at any bank or CTOS website.", bm: "CCRIS adalah rekod kredit Bank Negara. CTOS adalah biro kredit swasta. Kedua-duanya mempengaruhi kelulusan pinjaman.", zh: "CCRIS是国家银行的信贷记录。CTOS是私人信贷机构。两者都影响贷款审批。" },
        href:  "/guides/how-to-check-ccris-malaysia",
        cta:   { en: "CCRIS Check Guide", bm: "Panduan Semak CCRIS", zh: "CCRIS查询指南" },
      },
      {
        emoji: "3️⃣",
        label: { en: "Calculate the true cost of borrowing", bm: "Kira kos sebenar meminjam",            zh: "计算借贷的真实成本" },
        desc:  { en: "A RM200k car loan at 3% for 9 years = RM54,000 in interest alone. Always calculate total repayment first.", bm: "Pinjaman kereta RM200k pada 3% selama 9 tahun = RM54,000 dalam faedah sahaja. Sentiasa kira jumlah bayaran balik dahulu.", zh: "RM200k汽车贷款，3%利率9年 = 仅利息就RM54,000。永远先计算总还款额。" },
        href:  "/loan-calculator",
        cta:   { en: "Calculate Loan Cost", bm: "Kira Kos Pinjaman", zh: "计算贷款成本" },
      },
      {
        emoji: "4️⃣",
        label: { en: "Buying a car? Know the REAL cost",  bm: "Beli kereta? Tahu kos SEBENAR",          zh: "买车？了解真实成本" },
        desc:  { en: "Installment is just part of it. Add fuel, insurance, road tax, service, parking — total can be 2× the installment.", bm: "Ansuran hanya sebahagian daripadanya. Tambah minyak, insurans, cukai jalan, servis, parking — jumlah boleh 2× ansuran.", zh: "分期付款只是其中一部分。加上油费、保险、路税、维修、停车费 — 总费用可能是分期付款的2倍。" },
        href:  "/car-loan-calculator-malaysia",
        cta:   { en: "Can I Afford This Car?", bm: "Boleh Saya Beli Kereta Ini?", zh: "我买得起这辆车吗？" },
      },
      {
        emoji: "5️⃣",
        label: { en: "Buying a house? First-time buyer guide", bm: "Beli rumah? Panduan pembeli kali pertama", zh: "买房？首次置业者指南" },
        desc:  { en: "My First Home Scheme, stamp duty waiver, 10% down payment — there are government benefits for first-time buyers in Malaysia.", bm: "Skim Rumah Pertamaku, pengecualian duti setem, wang pendahuluan 10% — ada faedah kerajaan untuk pembeli pertama kali di Malaysia.", zh: "我的首个家园计划、印花税豁免、10%首付款 — 马来西亚首次置业者有政府福利可享。" },
        href:  "/guides/first-home-buyer-guide-malaysia",
        cta:   { en: "First Home Buyer Guide", bm: "Panduan Pembeli Rumah Pertama", zh: "首次置业者指南" },
      },
    ],
  },
];

const HEADING = {
  en: { badge: "For Young Malaysians",   title: "Your Financial Starter Pack",      sub: "Everything you actually need to know — taxes, EPF, loans — explained simply." },
  bm: { badge: "Untuk Anak Muda Malaysia", title: "Starter Pack Kewangan Kau",     sub: "Semua yang kau perlu tahu — cukai, EPF, pinjaman — dijelaskan dengan mudah." },
  zh: { badge: "给年轻马来西亚人",          title: "你的财务入门包",                 sub: "你真正需要知道的一切 — 报税、EPF、贷款 — 简单易懂。" },
};

export default function BeginnerGuide() {
  const { lang } = useLang();
  const [active, setActive] = useState<string | null>(null);
  const h = HEADING[lang];

  return (
    <section className="py-16 bg-white border-t border-gray-100" id="starter-pack">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4 border border-yellow-200">
            🎓 {h.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">{h.title}</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">{h.sub}</p>
        </div>

        {/* Journey cards */}
        <div className="space-y-4">
          {JOURNEYS.map((j) => {
            const isOpen = active === j.id;
            return (
              <div key={j.id} className={`rounded-2xl border-2 transition-all duration-200 overflow-hidden ${isOpen ? j.border : "border-gray-100"}`}>

                {/* Card header (always visible) */}
                <button
                  className={`w-full flex items-center justify-between p-5 sm:p-6 text-left transition-colors ${isOpen ? j.bg : "hover:bg-gray-50"}`}
                  onClick={() => setActive(isOpen ? null : j.id)}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-4xl flex-shrink-0">{j.emoji}</span>
                    <div>
                      <span className={`text-xs font-bold ${j.color} uppercase tracking-wide block mb-0.5`}>{j.tag[lang]}</span>
                      <h3 className="text-lg sm:text-xl font-black text-gray-900">{j.title[lang]}</h3>
                      <p className="text-sm text-gray-500 mt-0.5 hidden sm:block max-w-lg">{j.sub[lang]}</p>
                    </div>
                  </div>
                  <div className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all ${isOpen ? j.accent + " text-white" : "bg-gray-100 text-gray-500"}`}>
                    <svg className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {/* Sub label (mobile) */}
                {!isOpen && (
                  <p className="sm:hidden px-5 pb-4 text-sm text-gray-400">{j.sub[lang]}</p>
                )}

                {/* Steps (expanded) */}
                {isOpen && (
                  <div className={`${j.bg} border-t ${j.border} px-5 sm:px-6 pb-6`}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 mt-5">
                      {j.steps.map((s, i) => (
                        <div key={i} className="bg-white rounded-2xl border border-gray-100 p-4 flex flex-col shadow-sm">
                          <div className="text-xl mb-2">{s.emoji}</div>
                          <p className="font-bold text-gray-900 text-sm mb-1.5 leading-snug">{s.label[lang]}</p>
                          <p className="text-xs text-gray-500 leading-relaxed flex-1">{s.desc[lang]}</p>
                          {s.href && s.cta && (
                            <Link href={s.href}
                              className={`mt-3 text-xs font-bold ${j.color} hover:underline flex items-center gap-1`}>
                              {s.cta[lang]} →
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom nudge */}
        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm">
            {lang === "zh"
              ? "这些知识越早学越好。今天开始，未来的你会感谢现在的你。"
              : lang === "en"
              ? "The earlier you learn this, the better. Start today — your future self will thank you."
              : "Semakin awal kau belajar ini, semakin baik. Mulakan hari ini — diri kau masa depan akan berterima kasih."}
          </p>
        </div>
      </div>
    </section>
  );
}
