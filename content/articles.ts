export type Lang = "en" | "bm" | "zh";

export type ArticleCategory = "mindset" | "finance" | "labor-law";

export type LocalizedText = Record<Lang, string>;

export type ComparisonRow = {
  ordinary: LocalizedText;
  successful: LocalizedText;
};

export type Article = {
  slug: string;
  category: ArticleCategory;
  relatedSlugs?: string[];
  title: LocalizedText;
  summary: LocalizedText;
  why: LocalizedText;
  what: LocalizedText;
  comparison: ComparisonRow[];
  action: LocalizedText[];
  story: LocalizedText;
  source: string[];
  disclaimer: boolean;
};

export const categoryConfig: Record<
  ArticleCategory,
  {
    href: string;
    title: LocalizedText;
    eyebrow: LocalizedText;
    description: LocalizedText;
  }
> = {
  mindset: {
    href: "/mindset",
    eyebrow: {
      en: "Mindset Library",
      bm: "Perpustakaan Mindset",
      zh: "成功者思维",
    },
    title: {
      en: "Think better before you earn more",
      bm: "Fikir lebih jelas sebelum tambah pendapatan",
      zh: "先升级思维，再追求收入",
    },
    description: {
      en: "Simple mental models for young Malaysians who want to build assets, habits, and long-term freedom.",
      bm: "Model pemikiran ringkas untuk anak muda Malaysia yang mahu bina aset, tabiat, dan kebebasan jangka panjang.",
      zh: "给想建立资产、习惯和长期自由的马来西亚年轻人的思维模型。",
    },
  },
  finance: {
    href: "/finance",
    eyebrow: {
      en: "Youth Financial Literacy",
      bm: "Ilmu Kewangan Anak Muda",
      zh: "青年财商",
    },
    title: {
      en: "Money rules nobody explained in school",
      bm: "Peraturan wang yang jarang diajar di sekolah",
      zh: "学校没有认真教你的金钱规则",
    },
    description: {
      en: "Understand debt, banks, loans, cash flow, and financial traps before one decision costs years.",
      bm: "Fahami hutang, bank, pinjaman, cash flow, dan perangkap kewangan sebelum satu keputusan makan bertahun-tahun.",
      zh: "在一个决定影响你多年以前，先看懂债务、银行、贷款、现金流和财务陷阱。",
    },
  },
  "labor-law": {
    href: "/labor-law",
    eyebrow: {
      en: "Youth Labor Rights",
      bm: "Hak Pekerja Muda",
      zh: "劳动法保护",
    },
    title: {
      en: "Know your basic rights at work",
      bm: "Fahami hak asas anda di tempat kerja",
      zh: "看懂你在职场里的基本权益",
    },
    description: {
      en: "Plain-language guides for Malaysian workers on probation, overtime, leave, and fair treatment.",
      bm: "Panduan bahasa mudah untuk pekerja Malaysia tentang probation, overtime, cuti, dan layanan adil.",
      zh: "用简单语言说明马来西亚打工族在试用期、加班、假期和公平对待上的重点。",
    },
  },
};

export const articles: Article[] = [
  {
    slug: "active-vs-passive-income",
    relatedSlugs: ["what-is-rat-race", "how-to-escape-rat-race"],
    category: "mindset",
    title: {
      en: "Active income vs passive income",
      bm: "Pendapatan aktif vs pendapatan pasif",
      zh: "主动收入 vs 被动收入",
    },
    summary: {
      en: "Active income depends on your time. Passive income comes from assets, systems, or rights that can keep producing when you are not actively working.",
      bm: "Pendapatan aktif bergantung pada masa anda. Pendapatan pasif datang daripada aset, sistem, atau hak yang terus menghasilkan walaupun anda tidak sedang bekerja.",
      zh: "主动收入依赖你的时间；被动收入来自资产、系统或权益，即使你没有持续上班，也可能继续产生现金流。",
    },
    why: {
      en: "Most young people start with active income, and that is normal. The problem begins when every bill, dream, and emergency depends only on next month’s salary. Understanding the difference helps you stop seeing money as only a paycheck and start seeing it as something that can be built into a machine.",
      bm: "Kebanyakan anak muda bermula dengan pendapatan aktif, dan itu normal. Masalah bermula apabila semua bil, impian, dan kecemasan hanya bergantung pada gaji bulan depan. Memahami bezanya membantu anda melihat wang bukan sekadar slip gaji, tetapi sesuatu yang boleh dibina menjadi mesin.",
      zh: "大多数年轻人都是从主动收入开始，这很正常。真正危险的是：账单、梦想和突发状况全部只靠下一份薪水。理解两者差别，能让你不再只把钱看成工资，而开始把钱看成可以被设计出来的现金流机器。",
    },
    what: {
      en: "Active income is money earned by directly trading time, effort, or skill: salary, commission, freelance work, or overtime. Passive income is not magic money; it usually needs upfront learning, capital, systems, or risk management before it becomes steady.",
      bm: "Pendapatan aktif ialah wang yang datang apabila anda menukar masa, tenaga, atau kemahiran: gaji, komisen, kerja bebas, atau overtime. Pendapatan pasif bukan wang ajaib; ia biasanya perlukan ilmu, modal, sistem, dan kawalan risiko sebelum menjadi stabil.",
      zh: "主动收入是你用时间、体力或技能直接换来的钱，例如薪水、佣金、自由接案、加班费。被动收入不是魔法钱，它通常需要前期学习、资本、系统和风险控制，之后才可能慢慢稳定。",
    },
    comparison: [
      {
        ordinary: {
          en: "I need to work more hours to earn more.",
          bm: "Saya perlu kerja lebih lama untuk dapat lebih wang.",
          zh: "我要赚更多，就只能做更多小时。",
        },
        successful: {
          en: "I need to improve skill, build assets, and create income that is not tied to every hour.",
          bm: "Saya perlu tingkatkan kemahiran, bina aset, dan cipta pendapatan yang tidak terikat pada setiap jam.",
          zh: "我要提升技能、建立资产，并创造不完全绑死在时间上的收入。",
        },
      },
      {
        ordinary: {
          en: "Passive income means easy money.",
          bm: "Pendapatan pasif maksudnya wang mudah.",
          zh: "被动收入就是轻松赚钱。",
        },
        successful: {
          en: "Passive income means delayed effort, better systems, and responsibility for risk.",
          bm: "Pendapatan pasif bermaksud usaha awal, sistem lebih baik, dan tanggungjawab terhadap risiko.",
          zh: "被动收入是前期投入、系统设计和风险责任，不是不用付出。",
        },
      },
    ],
    action: [
      {
        en: "List your current income sources and mark each one as active or passive.",
        bm: "Senaraikan semua sumber pendapatan anda dan tandakan sama ada aktif atau pasif.",
        zh: "列出你现在所有收入来源，并标记它是主动收入还是被动收入。",
      },
      {
        en: "Choose one small asset-building habit: saving monthly, learning investing basics, or building a side skill.",
        bm: "Pilih satu tabiat membina aset: simpan bulanan, belajar asas pelaburan, atau bina kemahiran sampingan.",
        zh: "选择一个小的资产习惯：每月储蓄、学习投资基础，或培养一个可变现的副业技能。",
      },
      {
        en: "Use a retirement or financial freedom calculator to see how much passive cash flow you eventually need.",
        bm: "Guna kalkulator persaraan atau kebebasan kewangan untuk anggar cash flow pasif yang anda perlukan nanti.",
        zh: "用退休或财务自由计算机，看清楚你未来到底需要多少被动现金流。",
      },
    ],
    story: {
      en: "Two graduates both earn RM3,000. One spends the leftover money randomly. The other saves RM300 monthly, learns basic investing, and builds a small weekend skill. After one year, their salaries may look similar, but their direction is different: one only has income, the other is learning how to build a system.",
      bm: "Dua graduan sama-sama bergaji RM3,000. Seorang membelanjakan baki wang tanpa rancangan. Seorang lagi simpan RM300 sebulan, belajar asas pelaburan, dan bina kemahiran hujung minggu. Selepas setahun, gaji mereka mungkin hampir sama, tetapi arah mereka berbeza: seorang hanya ada pendapatan, seorang lagi sedang belajar membina sistem.",
      zh: "两个毕业生都赚 RM3,000。一个把剩下的钱随意花掉；另一个每月存 RM300，学习基础投资，也培养周末技能。一年后，两个人薪水可能差不多，但方向已经不同：一个只有收入，另一个开始学习建立系统。",
    },
    source: [
      "Robert Kiyosaki, Rich Dad Poor Dad (income quadrant and asset thinking, paraphrased)",
      "General personal finance education on cash flow and asset-building habits",
    ],
    disclaimer: false,
  },
  {
    slug: "what-is-rat-race",
    relatedSlugs: ["how-to-escape-rat-race", "rich-dad-poor-dad-lessons"],
    category: "mindset",
    title: {
      en: "What is the Rat Race?",
      bm: "Apa itu Rat Race?",
      zh: "老鼠圈是什么？",
    },
    summary: {
      en: "The Rat Race is a cycle where income rises, lifestyle rises faster, and freedom does not improve. Escaping it starts with awareness, not a bigger salary alone.",
      bm: "Rat Race ialah kitaran apabila pendapatan naik, gaya hidup naik lebih cepat, tetapi kebebasan tidak bertambah. Jalan keluar bermula dengan kesedaran, bukan gaji lebih tinggi semata-mata.",
      zh: "老鼠圈是一种循环：收入变高，生活开销更快变高，自由却没有增加。跳出来的第一步不是单纯加薪，而是先看见循环。",
    },
    why: {
      en: "Many young adults think financial pressure will disappear once salary grows. Sometimes it does not, because spending, debt, and expectations grow together. The Rat Race idea helps you notice whether your work is building freedom or only funding a more expensive cage.",
      bm: "Ramai anak muda fikir tekanan kewangan akan hilang apabila gaji naik. Kadang-kadang tidak, kerana perbelanjaan, hutang, dan jangkaan naik bersama. Idea Rat Race membantu anda sedar sama ada kerja anda membina kebebasan atau hanya membiayai sangkar yang lebih mahal.",
      zh: "很多年轻人以为薪水变高，财务压力就会消失。但有时收入上涨的同时，消费、债务和别人对你的期待也一起上涨。老鼠圈这个概念，是让你看清楚：你的工作是在建立自由，还是只是在供养一个更贵的笼子。",
    },
    what: {
      en: "Rat Race means repeating work, spend, borrow, upgrade, and work harder without building lasting assets. It does not mean work is bad. It means work should become a bridge toward better skills, savings, assets, and choices.",
      bm: "Rat Race bermaksud kitaran kerja, belanja, pinjam, naik taraf hidup, dan kerja lebih kuat tanpa membina aset tahan lama. Ia bukan bermaksud kerja itu buruk. Maksudnya kerja patut menjadi jambatan kepada kemahiran, simpanan, aset, dan pilihan yang lebih baik.",
      zh: "老鼠圈不是说工作不好，而是指你不断工作、消费、借贷、升级生活，再更努力工作，却没有建立长期资产。工作应该成为通往技能、储蓄、资产和选择权的桥，而不是永远跑不完的圈。",
    },
    comparison: [
      {
        ordinary: {
          en: "If I earn more, I can finally spend more.",
          bm: "Kalau gaji naik, akhirnya saya boleh belanja lebih.",
          zh: "赚更多，我就终于可以花更多。",
        },
        successful: {
          en: "If I earn more, I can first increase my margin of safety and asset base.",
          bm: "Kalau pendapatan naik, saya naikkan dulu ruang selamat dan asas aset.",
          zh: "赚更多时，我先增加安全边际和资产基础。",
        },
      },
      {
        ordinary: {
          en: "Debt is normal because everyone has it.",
          bm: "Hutang itu normal sebab semua orang ada.",
          zh: "大家都有债，所以债务很正常。",
        },
        successful: {
          en: "Debt must have a purpose, repayment plan, and clear upside.",
          bm: "Hutang mesti ada tujuan, rancangan bayaran, dan manfaat yang jelas.",
          zh: "债务必须有目的、还款计划和清楚的回报。",
        },
      },
    ],
    action: [
      {
        en: "Track one month of spending and highlight expenses that only exist because income increased.",
        bm: "Jejak perbelanjaan satu bulan dan tandakan belanja yang muncul hanya kerana pendapatan naik.",
        zh: "记录一个月开销，把那些只是因为收入提高而出现的消费标出来。",
      },
      {
        en: "Set one automatic transfer for savings or debt reduction on payday.",
        bm: "Tetapkan satu pindahan automatik untuk simpanan atau kurangkan hutang pada hari gaji.",
        zh: "在发薪日设一个自动转账，用来储蓄或减少债务。",
      },
      {
        en: "Define your first freedom number: how much monthly cash flow would cover basic living costs?",
        bm: "Tetapkan nombor kebebasan pertama: berapa cash flow bulanan yang cukup untuk kos hidup asas?",
        zh: "定义你的第一个自由数字：每月多少现金流可以覆盖基本生活费？",
      },
    ],
    story: {
      en: "A young executive upgrades phone, car, and apartment after every promotion. Another keeps life steady for two years and uses the gap to clear debt and build savings. The second person may look less impressive on social media, but has more choices when opportunity or crisis appears.",
      bm: "Seorang eksekutif muda menukar telefon, kereta, dan rumah sewa setiap kali naik pangkat. Seorang lagi mengekalkan gaya hidup selama dua tahun dan guna lebihan untuk selesaikan hutang serta bina simpanan. Orang kedua mungkin kurang nampak hebat di media sosial, tetapi ada lebih banyak pilihan apabila peluang atau krisis datang.",
      zh: "一个年轻主管每次升职就换手机、换车、换更贵的住处。另一个人两年内保持生活水平，把差额拿去还债和储蓄。第二个人在社交媒体上可能不那么亮眼，但当机会或危机出现时，他有更多选择。",
    },
    source: [
      "Robert Kiyosaki, Rich Dad Poor Dad (Rat Race concept, paraphrased)",
      "General behavioral finance concepts on lifestyle inflation and cash flow",
    ],
    disclaimer: false,
  },
  {
    slug: "good-debt-vs-bad-debt",
    relatedSlugs: ["banks-loans-tool-or-trap", "how-to-start-investing-malaysia"],
    category: "finance",
    title: {
      en: "Good debt vs bad debt",
      bm: "Hutang baik vs hutang buruk",
      zh: "好债务 vs 坏债务",
    },
    summary: {
      en: "Debt is not automatically good or bad. The difference is whether it improves future cash flow, protects value, and stays within repayment ability.",
      bm: "Hutang bukan semestinya baik atau buruk. Bezanya ialah sama ada ia menambah cash flow masa depan, melindungi nilai, dan masih mampu dibayar.",
      zh: "债务本身不一定好或坏，关键是它有没有提升未来现金流、保护价值，并且在你可承受的还款能力内。",
    },
    why: {
      en: "Young people often hear two extreme messages: never borrow, or borrow because everyone does. Both are incomplete. Debt can accelerate progress when used carefully, but it can also steal future income before you have even earned it.",
      bm: "Anak muda sering dengar dua mesej ekstrem: jangan berhutang langsung, atau berhutang sebab semua orang buat. Kedua-duanya tidak lengkap. Hutang boleh mempercepat kemajuan jika digunakan dengan berhati-hati, tetapi juga boleh mencuri pendapatan masa depan sebelum anda dapat menikmatinya.",
      zh: "年轻人常听到两个极端：完全不要借钱，或者大家都借所以没关系。两者都不完整。债务用得好可以加速成长，用得坏会提前拿走你未来还没赚到的钱。",
    },
    what: {
      en: "Good debt usually funds something that can raise income, reduce future cost, or hold long-term value. Bad debt usually funds short-lived wants, charges high interest, and creates monthly pressure without improving your future position.",
      bm: "Hutang baik biasanya membiayai sesuatu yang boleh menaikkan pendapatan, mengurangkan kos masa depan, atau menyimpan nilai jangka panjang. Hutang buruk biasanya membiayai kehendak sementara, faedah tinggi, dan tekanan bulanan tanpa memperbaiki kedudukan masa depan.",
      zh: "好债务通常用于提高收入、降低未来成本，或购买有长期价值的东西。坏债务通常用于短期欲望、利息高、每月造成压力，却没有改善你的未来位置。",
    },
    comparison: [
      {
        ordinary: {
          en: "If the bank approves me, I can afford it.",
          bm: "Kalau bank luluskan, maksudnya saya mampu.",
          zh: "银行批了，就代表我负担得起。",
        },
        successful: {
          en: "Approval is not affordability; I must test cash flow after emergencies.",
          bm: "Kelulusan bukan maksudnya mampu; saya perlu uji cash flow selepas kecemasan.",
          zh: "批准不等于负担得起，我要测试突发状况后的现金流。",
        },
      },
      {
        ordinary: {
          en: "Monthly installment is the only number that matters.",
          bm: "Ansuran bulanan saja yang penting.",
          zh: "只要月供能还就可以。",
        },
        successful: {
          en: "Total interest, duration, purpose, and opportunity cost all matter.",
          bm: "Jumlah faedah, tempoh, tujuan, dan kos peluang semuanya penting.",
          zh: "总利息、期限、用途和机会成本都要看。",
        },
      },
    ],
    action: [
      {
        en: "Before borrowing, write the purpose, total interest, repayment period, and worst-case repayment plan.",
        bm: "Sebelum meminjam, tulis tujuan, jumlah faedah, tempoh bayaran, dan pelan bayaran jika keadaan buruk berlaku.",
        zh: "借钱前写下用途、总利息、还款期限，以及最坏情况下的还款计划。",
      },
      {
        en: "Avoid using high-interest debt for lifestyle upgrades that lose value quickly.",
        bm: "Elakkan hutang faedah tinggi untuk naik taraf gaya hidup yang cepat hilang nilai.",
        zh: "避免用高利息债务去买很快贬值的生活享受。",
      },
      {
        en: "Keep an emergency fund before taking on commitments that lock your salary for years.",
        bm: "Sediakan dana kecemasan sebelum ambil komitmen yang mengikat gaji bertahun-tahun.",
        zh: "在承担多年锁住薪水的债务前，先准备紧急基金。",
      },
    ],
    story: {
      en: "A student loan for a skill that increases earning power can be very different from a personal loan for a holiday. Both create repayment, but only one has a clear path to improving future income. The question is not whether debt feels normal; the question is what it does to your next five years.",
      bm: "Pinjaman pendidikan untuk kemahiran yang menaikkan pendapatan berbeza daripada pinjaman peribadi untuk bercuti. Kedua-duanya perlu dibayar balik, tetapi hanya satu ada jalan jelas untuk memperbaiki pendapatan masa depan. Soalannya bukan sama ada hutang itu normal; soalannya apa kesannya pada lima tahun akan datang.",
      zh: "为了提升赚钱能力而借的教育贷款，和为了旅行而借的个人贷款很不一样。两者都要还，但只有前者有清楚机会改善未来收入。问题不是债务常不常见，而是它会怎样影响你未来五年。",
    },
    source: [
      "General financial literacy concepts on cash flow, interest cost, and debt service ability",
      "Bank Negara Malaysia consumer education materials on borrowing and financial capability",
    ],
    disclaimer: true,
  },
  {
    slug: "banks-loans-tool-or-trap",
    relatedSlugs: ["good-debt-vs-bad-debt", "fixed-deposit-vs-unit-trust-malaysia"],
    category: "finance",
    title: {
      en: "Banks and loans: tool or trap?",
      bm: "Bank dan pinjaman: alat atau perangkap?",
      zh: "银行和贷款的本质：工具还是陷阱？",
    },
    summary: {
      en: "A bank loan is rented money with rules. It becomes a tool when the purpose, cost, and repayment plan are clear; it becomes a trap when it funds pressure, status, or confusion.",
      bm: "Pinjaman bank ialah wang yang disewa dengan peraturan. Ia jadi alat apabila tujuan, kos, dan pelan bayaran jelas; ia jadi perangkap apabila membiayai tekanan, status, atau kekeliruan.",
      zh: "银行贷款本质上是有规则的“租钱”。用途、成本和还款计划清楚时，它是工具；用来满足压力、面子或冲动时，它就会变成陷阱。",
    },
    why: {
      en: "Banks are not enemies, but they are not parents either. Their job is to price risk, lend money, collect repayment, and manage profit. Young borrowers need to understand the game before signing a contract that affects years of cash flow.",
      bm: "Bank bukan musuh, tetapi bank juga bukan penjaga anda. Tugas bank ialah menilai risiko, memberi pinjaman, mengutip bayaran, dan mengurus keuntungan. Peminjam muda perlu faham permainan ini sebelum menandatangani kontrak yang mengikat cash flow bertahun-tahun.",
      zh: "银行不是敌人，但也不是你的家长。银行的工作是评估风险、借出资金、收回款项并管理利润。年轻人在签下影响多年现金流的合约前，需要先看懂这场游戏。",
    },
    what: {
      en: "A loan converts future income into today’s purchasing power. That can help with education, business assets, or housing when planned carefully. It becomes dangerous when the borrower only sees the monthly installment and ignores interest, fees, penalties, and income uncertainty.",
      bm: "Pinjaman menukar pendapatan masa depan menjadi kuasa beli hari ini. Ia boleh membantu pendidikan, aset bisnes, atau rumah jika dirancang dengan teliti. Ia menjadi bahaya apabila peminjam hanya melihat ansuran bulanan dan mengabaikan faedah, caj, penalti, serta ketidakpastian pendapatan.",
      zh: "贷款是把未来收入换成今天的购买力。用在教育、事业资产或房屋上，并且规划清楚时，它可能有帮助。但如果只看月供，不看利息、费用、罚款和收入不确定性，就会很危险。",
    },
    comparison: [
      {
        ordinary: {
          en: "The bank offered me a bigger limit, so I should use it.",
          bm: "Bank bagi limit lebih besar, jadi saya patut guna.",
          zh: "银行给我更高额度，我就应该用。",
        },
        successful: {
          en: "A higher limit is capacity, not instruction.",
          bm: "Limit lebih tinggi ialah kapasiti, bukan arahan.",
          zh: "更高额度只是能力范围，不是使用指令。",
        },
      },
      {
        ordinary: {
          en: "Low monthly payment means cheap.",
          bm: "Ansuran rendah bermaksud murah.",
          zh: "月供低就代表便宜。",
        },
        successful: {
          en: "A low payment can hide a longer term and higher total cost.",
          bm: "Ansuran rendah boleh menyembunyikan tempoh lebih panjang dan jumlah kos lebih tinggi.",
          zh: "低月供可能隐藏更长期限和更高总成本。",
        },
      },
    ],
    action: [
      {
        en: "Ask for the total repayment amount, not only the monthly installment.",
        bm: "Tanya jumlah bayaran keseluruhan, bukan ansuran bulanan sahaja.",
        zh: "询问总还款金额，不要只看月供。",
      },
      {
        en: "Read key terms: rate type, fees, late charges, lock-in period, and early settlement rules.",
        bm: "Baca terma utama: jenis kadar, caj, caj lewat, tempoh ikatan, dan peraturan penyelesaian awal.",
        zh: "看清关键条款：利率类型、费用、迟还罚款、锁定期和提前还清规则。",
      },
      {
        en: "If the loan does not improve income, reduce cost, or protect value, pause before signing.",
        bm: "Jika pinjaman tidak menaikkan pendapatan, mengurangkan kos, atau melindungi nilai, berhenti sekejap sebelum tandatangan.",
        zh: "如果这笔贷款没有提高收入、降低成本或保护价值，签名前先停一下。",
      },
    ],
    story: {
      en: "A first jobber buys a car because the monthly payment looks manageable. After petrol, insurance, maintenance, parking, and tolls, the car quietly controls every career choice. Another person buys a cheaper car and keeps cash flow flexible. The vehicle is not the whole issue; the structure of the commitment is.",
      bm: "Seorang pekerja baru membeli kereta kerana ansuran nampak mampu. Selepas petrol, insurans, servis, parking, dan tol, kereta itu diam-diam mengawal setiap pilihan kerjaya. Seorang lagi membeli kereta lebih murah dan mengekalkan cash flow fleksibel. Isunya bukan kereta semata-mata; isunya struktur komitmen.",
      zh: "一个刚工作的年轻人因为月供看起来能负担，就买了一辆车。加上油费、保险、维修、停车和过路费后，这辆车悄悄限制了他的职业选择。另一个人买更便宜的车，保留现金流弹性。问题不只是车，而是这份长期承诺的结构。",
    },
    source: [
      "General banking and consumer credit education",
      "Bank Negara Malaysia financial consumer education materials",
    ],
    disclaimer: true,
  },
  {
    slug: "probation-rights-malaysia",
    relatedSlugs: ["overtime-pay-rights-malaysia", "annual-leave-entitlement-malaysia"],
    category: "labor-law",
    title: {
      en: "Probation rights Malaysian workers should know",
      bm: "Hak semasa probation yang pekerja Malaysia patut tahu",
      zh: "试用期你要知道的权益",
    },
    summary: {
      en: "Probation is not a rights-free period. In general, employment terms, fair treatment, and proper process still matter even when a worker is new.",
      bm: "Probation bukan tempoh tanpa hak. Secara umum, terma kerja, layanan adil, dan proses yang betul tetap penting walaupun pekerja masih baru.",
      zh: "试用期不是没有权益的时期。一般来说，即使员工刚入职，雇佣条款、公平对待和合理程序仍然很重要。",
    },
    why: {
      en: "Many young workers stay silent during probation because they fear losing the job. That fear is understandable, but it can make people accept unclear pay, excessive hours, or sudden termination without asking questions.",
      bm: "Ramai pekerja muda diam semasa probation kerana takut hilang kerja. Ketakutan itu boleh difahami, tetapi ia boleh menyebabkan orang menerima gaji tidak jelas, waktu kerja berlebihan, atau penamatan mengejut tanpa bertanya.",
      zh: "很多年轻人在试用期不敢出声，因为怕失去工作。这个担心可以理解，但也可能让人接受不清楚的薪水、过长工时，或突然被终止而不敢询问。",
    },
    what: {
      en: "Probation is usually a period for employer and employee to test fit. It should be written clearly in the offer letter or contract, including duration, salary, benefits, notice period, and confirmation process. It does not automatically remove basic employment protections.",
      bm: "Probation biasanya tempoh untuk majikan dan pekerja menilai kesesuaian. Ia patut ditulis jelas dalam surat tawaran atau kontrak, termasuk tempoh, gaji, manfaat, notis, dan proses pengesahan. Ia tidak secara automatik membuang perlindungan asas pekerjaan.",
      zh: "试用期通常是雇主和员工互相评估是否适合的阶段。录取信或合约里应该清楚写明期限、薪水、福利、通知期和转正流程。试用期并不自动取消基本雇佣保护。",
    },
    comparison: [
      {
        ordinary: {
          en: "During probation, I cannot ask about my rights.",
          bm: "Semasa probation, saya tidak boleh tanya hak saya.",
          zh: "试用期我不能问自己的权益。",
        },
        successful: {
          en: "I can ask politely for written terms and clear expectations.",
          bm: "Saya boleh tanya secara sopan tentang terma bertulis dan jangkaan kerja.",
          zh: "我可以礼貌地要求书面条款和清楚的工作期待。",
        },
      },
      {
        ordinary: {
          en: "If I am not confirmed, nothing can be questioned.",
          bm: "Kalau tidak disahkan, apa-apa pun tidak boleh dipersoalkan.",
          zh: "没被转正就什么都不能问。",
        },
        successful: {
          en: "I should understand the reason, notice requirement, and any final pay owed.",
          bm: "Saya patut faham sebab, keperluan notis, dan baki bayaran yang perlu diterima.",
          zh: "我应该了解原因、通知期要求，以及是否还有应付薪水。",
        },
      },
    ],
    action: [
      {
        en: "Keep your offer letter, contract, payslips, messages, and attendance records.",
        bm: "Simpan surat tawaran, kontrak, slip gaji, mesej, dan rekod kehadiran.",
        zh: "保存录取信、合约、薪资单、讯息和出勤记录。",
      },
      {
        en: "Ask your supervisor what confirmation criteria will be used before the probation ends.",
        bm: "Tanya penyelia kriteria pengesahan sebelum probation tamat.",
        zh: "在试用期结束前，询问主管转正会依据哪些标准。",
      },
      {
        en: "If something feels unfair, get advice early from HR, JTK, or a qualified lawyer.",
        bm: "Jika ada perkara yang terasa tidak adil, dapatkan nasihat awal daripada HR, JTK, atau peguam bertauliah.",
        zh: "如果觉得不公平，尽早向 HR、劳工部或合格律师咨询。",
      },
    ],
    story: {
      en: "A new employee works late every night because he thinks probation means saying yes to everything. After three months, he has no clear feedback and no written record of extra hours. Another employee asks for priorities, keeps records, and requests feedback monthly. The second person is not being difficult; she is creating clarity.",
      bm: "Seorang pekerja baru bekerja lewat setiap malam kerana menyangka probation bermaksud perlu setuju dengan semua perkara. Selepas tiga bulan, dia tiada maklum balas jelas dan tiada rekod waktu tambahan. Seorang lagi pekerja meminta keutamaan kerja, menyimpan rekod, dan meminta maklum balas bulanan. Orang kedua bukan menyusahkan; dia mencipta kejelasan.",
      zh: "一个新员工每天加班到很晚，因为他以为试用期就是所有事情都要答应。三个月后，他没有清楚反馈，也没有额外工时记录。另一个员工会询问工作优先级、保存记录，并每月要求反馈。第二个人不是麻烦，而是在建立清晰度。",
    },
    source: [
      "Malaysia Employment Act 1955 (Act 265), general employment protection reference",
      "Jabatan Tenaga Kerja Semenanjung Malaysia (JTKSM), general worker guidance",
    ],
    disclaimer: true,
  },
  {
    slug: "overtime-pay-rights-malaysia",
    relatedSlugs: ["probation-rights-malaysia", "minimum-wage-malaysia"],
    category: "labor-law",
    title: {
      en: "Overtime pay: how it works and what to check",
      bm: "Bayaran overtime: cara asas dan apa perlu disemak",
      zh: "加班费怎么算，你的权益是什么",
    },
    summary: {
      en: "Overtime pay depends on working hours, employment terms, and the type of day worked. Keep records and check the applicable law or advice before assuming the calculation.",
      bm: "Bayaran overtime bergantung pada waktu kerja, terma pekerjaan, dan jenis hari bekerja. Simpan rekod dan semak undang-undang atau nasihat sebelum membuat andaian.",
      zh: "加班费会受工时、雇佣条款和加班日期类型影响。不要只凭口头说法，应该保存记录，并按适用法律或专业意见确认计算方式。",
    },
    why: {
      en: "Overtime is one of the most common areas where young workers feel unsure. Some do not know whether extra hours should be paid, replaced with time off, or included in salary. Knowing the basics helps you ask better questions and keep useful evidence.",
      bm: "Overtime ialah antara perkara paling biasa yang mengelirukan pekerja muda. Ada yang tidak tahu sama ada jam tambahan perlu dibayar, diganti cuti, atau sudah termasuk dalam gaji. Faham asas membantu anda bertanya soalan yang lebih baik dan menyimpan bukti berguna.",
      zh: "加班是年轻打工族最容易不确定的地方。有些人不知道额外工时应该给钱、补假，还是已经包含在薪水里。了解基础，能帮助你问对问题，也保存有用证据。",
    },
    what: {
      en: "In broad terms, overtime means work beyond normal agreed hours. Under Malaysia’s employment framework, overtime rules can depend on coverage, wage level, role, rest days, holidays, and contract terms. For many covered employees, normal-day overtime is commonly calculated at a higher hourly rate, but exact entitlement should be checked against the current law and your facts.",
      bm: "Secara umum, overtime ialah kerja melebihi waktu biasa yang dipersetujui. Di bawah rangka kerja pekerjaan Malaysia, peraturan overtime boleh bergantung pada liputan undang-undang, tahap gaji, peranan, hari rehat, cuti umum, dan terma kontrak. Untuk ramai pekerja yang diliputi, overtime hari biasa biasanya dikira pada kadar sejam yang lebih tinggi, tetapi hak sebenar perlu disemak mengikut undang-undang semasa dan fakta kerja anda.",
      zh: "一般来说，加班是超过约定正常工时的工作。在马来西亚雇佣框架下，加班规则可能取决于法律覆盖范围、薪资水平、职位、休息日、公共假期和合约条款。很多受覆盖员工的普通工作日加班通常按更高小时率计算，但具体权益必须按现行法律和你的实际情况确认。",
    },
    comparison: [
      {
        ordinary: {
          en: "My manager said overtime is part of the job, so I cannot ask.",
          bm: "Manager kata overtime memang sebahagian kerja, jadi saya tidak boleh tanya.",
          zh: "经理说加班是工作的一部分，所以我不能问。",
        },
        successful: {
          en: "I can ask how overtime is recorded, approved, and compensated.",
          bm: "Saya boleh tanya bagaimana overtime direkod, diluluskan, dan dibayar atau diganti.",
          zh: "我可以询问加班如何记录、批准和补偿。",
        },
      },
      {
        ordinary: {
          en: "If it is not written, it did not happen.",
          bm: "Kalau tidak bertulis, susah hendak buktikan.",
          zh: "没有记录就很难证明。",
        },
        successful: {
          en: "I keep timesheets, messages, task records, and payslips together.",
          bm: "Saya simpan timesheet, mesej, rekod tugasan, dan slip gaji bersama.",
          zh: "我把工时表、讯息、工作记录和薪资单一起保存。",
        },
      },
    ],
    action: [
      {
        en: "Check your contract for normal hours, overtime approval, and compensation method.",
        bm: "Semak kontrak untuk waktu biasa, kelulusan overtime, dan cara pampasan.",
        zh: "检查合约里的正常工时、加班批准和补偿方式。",
      },
      {
        en: "Record start time, end time, date, reason for overtime, and who approved it.",
        bm: "Rekod masa mula, masa tamat, tarikh, sebab overtime, dan siapa yang meluluskannya.",
        zh: "记录开始时间、结束时间、日期、加班原因和批准人。",
      },
      {
        en: "If the amount looks wrong, compare payslip records and seek advice from JTK or a qualified lawyer.",
        bm: "Jika jumlah nampak salah, bandingkan dengan slip gaji dan dapatkan nasihat daripada JTK atau peguam bertauliah.",
        zh: "如果金额看起来不对，对照薪资单记录，并向劳工部或合格律师咨询。",
      },
    ],
    story: {
      en: "A retail worker often stays one extra hour to close the shop but never records it. Months later, the unpaid time is hard to prove. Her friend writes down the dates, keeps roster screenshots, and checks payslips monthly. The record does not create conflict; it creates clarity.",
      bm: "Seorang pekerja runcit selalu tinggal satu jam tambahan untuk tutup kedai tetapi tidak merekodkannya. Beberapa bulan kemudian, masa yang belum dibayar sukar dibuktikan. Rakannya menulis tarikh, menyimpan screenshot jadual, dan menyemak slip gaji setiap bulan. Rekod bukan mencipta konflik; rekod mencipta kejelasan.",
      zh: "一个零售员工经常多留一小时关店，却从不记录。几个月后，未支付的时间很难证明。她的朋友会写下日期、保存排班截图，并每月检查薪资单。记录不是制造冲突，而是制造清楚。",
    },
    source: [
      "Malaysia Employment Act 1955 (Act 265), working hours and overtime reference",
      "Jabatan Tenaga Kerja Semenanjung Malaysia (JTKSM), general worker guidance",
    ],
    disclaimer: true,
  },
  {
    slug: "annual-leave-entitlement-malaysia",
    relatedSlugs: ["probation-rights-malaysia", "retrenchment-compensation-malaysia"],
    category: "labor-law",
    title: {
      en: "Annual leave entitlement in Malaysia",
      bm: "Kelayakan cuti tahunan di Malaysia",
      zh: "马来西亚年假几天",
    },
    summary: {
      en: "Your annual leave entitlement in Malaysia depends on how long you have worked. Under the Employment Act 1955, employees get 8, 12, or 16 days per year based on years of service.",
      bm: "Kelayakan cuti tahunan anda di Malaysia bergantung pada tempoh perkhidmatan. Di bawah Akta Pekerjaan 1955, pekerja mendapat 8, 12, atau 16 hari setahun.",
      zh: "马来西亚的年假天数取决于你的服务年限。根据 1955 年雇佣法令，员工可获得 8 天、12 天或 16 天年假。",
    },
    why: {
      en: "Many Malaysian employees take less leave than they are entitled to — either because they do not know the law, or because workplace culture discourages it. Knowing your exact entitlement means you can plan rest, protect your wellbeing, and exercise a legal right without guilt.",
      bm: "Ramai pekerja Malaysia mengambil cuti kurang daripada hak mereka — sama ada kerana tidak tahu undang-undang, atau kerana budaya tempat kerja tidak menggalakkannya. Mengetahui hak anda bermaksud anda boleh merancang rehat dan menggunakan hak undang-undang tanpa rasa bersalah.",
      zh: "很多马来西亚员工用的假期比法律规定的少——原因是不了解法令，或者职场文化让他们不敢请假。知道自己确切的年假权利，才能放心规划休息，无愧地行使法定权益。",
    },
    what: {
      en: "Under the Employment Act 1955 (EA), employees covered by the Act — those earning RM4,000 or below per month, or manual workers regardless of salary — are entitled to: 8 days per year for service under 2 years; 12 days per year for service of 2 to 5 years; 16 days per year for service exceeding 5 years. Leave must be taken in the year it is earned. Unused leave can only be carried forward if the employer agrees. If employment ends, unused leave is paid out as salary.",
      bm: "Di bawah Akta Pekerjaan 1955, pekerja yang dilindungi Akta — mereka yang berpendapatan RM4,000 atau ke bawah sebulan, atau pekerja manual tanpa mengira gaji — berhak kepada: 8 hari setahun untuk perkhidmatan bawah 2 tahun; 12 hari setahun untuk perkhidmatan 2 hingga 5 tahun; 16 hari setahun untuk perkhidmatan melebihi 5 tahun. Cuti mesti diambil dalam tahun ia diperoleh. Cuti yang tidak digunakan hanya boleh dibawa ke tahun berikutnya jika majikan bersetuju. Jika pekerjaan tamat, cuti yang tidak digunakan dibayar sebagai gaji.",
      zh: "根据 1955 年雇佣法令（EA），受法令保护的员工（月薪 RM4,000 及以下，或无论薪水多少的体力劳动者）享有：服务不足 2 年：8 天年假；服务 2 至 5 年：12 天年假；服务超过 5 年：16 天年假。年假必须在当年使用，未用假期只有在雇主同意的情况下才能结转。若雇用关系终止，未用假期须以薪资形式支付。",
    },
    comparison: [
      {
        ordinary: {
          en: "I am afraid to use all my leave in case the boss thinks I am not committed.",
          bm: "Saya takut guna semua cuti takut bos ingat saya tidak berdedikasi.",
          zh: "我不敢把假请完，怕老板觉得我不敬业。",
        },
        successful: {
          en: "Annual leave is a legal entitlement, not a favour. I plan my rest and use it fully.",
          bm: "Cuti tahunan adalah hak undang-undang, bukan kemurahan hati. Saya rancang rehat saya dan gunakannya sepenuhnya.",
          zh: "年假是法定权利，不是老板的施舍。我会规划好休息，把年假用完。",
        },
      },
      {
        ordinary: {
          en: "I have been here 3 years and I only get 8 days.",
          bm: "Saya dah 3 tahun di sini dan saya hanya dapat 8 hari.",
          zh: "我做了 3 年，老板只给我 8 天假。",
        },
        successful: {
          en: "After 2 years of service, the law entitles me to 12 days. I will check my contract and raise this with HR.",
          bm: "Selepas 2 tahun berkhidmat, undang-undang memberi saya hak 12 hari. Saya akan semak kontrak dan bincang dengan HR.",
          zh: "服务满 2 年后，法令规定我有权享有 12 天年假。我会查合同，然后和人力资源部反映。",
        },
      },
    ],
    action: [
      {
        en: "Check your contract: find the annual leave clause and compare it against the EA table.",
        bm: "Semak kontrak anda: cari klausa cuti tahunan dan bandingkan dengan jadual EA.",
        zh: "查看你的合同：找到年假条款，与法令的规定对照。",
      },
      {
        en: "Track your service date: your entitlement upgrades on your 2nd and 5th work anniversary.",
        bm: "Pantau tarikh perkhidmatan anda: kelayakan anda meningkat pada ulang tahun kerja ke-2 dan ke-5.",
        zh: "记住你的入职日期：在满 2 年和满 5 年时，你的年假天数会自动升级。",
      },
      {
        en: "Use your leave: unused leave that your employer refuses to carry forward and refuses to pay out is a violation of the EA. You can file a complaint with the Labour Department (JTK).",
        bm: "Gunakan cuti anda: cuti yang tidak digunakan yang majikan enggan bawa ke hadapan dan enggan bayar adalah pelanggaran EA. Anda boleh failkan aduan kepada Jabatan Tenaga Kerja (JTK).",
        zh: "把假请出来：如果雇主既不允许结转、又拒绝支付未用年假，这是违反法令的行为，你可以向劳工局（JTK）投诉。",
      },
    ],
    story: {
      en: "Amirah worked at a logistics company for 3 years. Her contract said 8 days leave per year. When she asked HR about an increase, she was told the company policy was fixed. She checked the Employment Act, confirmed she was covered, and raised it formally. HR corrected the record and backdated 4 extra days she had been shorted the previous year.",
      bm: "Amirah bekerja di syarikat logistik selama 3 tahun. Kontraknya menyatakan 8 hari cuti setahun. Apabila dia bertanya kepada HR tentang peningkatan, dia diberitahu polisi syarikat adalah tetap. Dia semak Akta Pekerjaan, sahkan dia dilindungi, dan bangkitkan secara formal. HR betulkan rekod dan backdated 4 hari tambahan yang dia kehilangan tahun sebelumnya.",
      zh: "Amirah 在一家物流公司做了 3 年。合同写的是每年 8 天假。她问 HR 能不能调整，HR 说公司政策固定不变。她查了雇佣法令，确认自己受法令保护，正式提出要求。HR 最终更正了记录，并补回了她前一年少给的 4 天假期。",
    },
    source: [
      "Employment Act 1955, Section 60E",
      "Labour Department Malaysia (JTK) — jabatan.jtk.gov.my",
    ],
    disclaimer: true,
  },
  {
    slug: "retrenchment-compensation-malaysia",
    relatedSlugs: ["annual-leave-entitlement-malaysia", "minimum-wage-malaysia"],
    category: "labor-law",
    title: {
      en: "Retrenchment compensation in Malaysia",
      bm: "Pampasan redundansi di Malaysia",
      zh: "马来西亚被炒鱿鱼有什么赔偿",
    },
    summary: {
      en: "If you are retrenched in Malaysia, you are entitled to termination benefits based on your years of service — unless you are still on probation or your contract has expired.",
      bm: "Jika anda diberhentikan di Malaysia, anda berhak mendapat faedah penamatan berdasarkan tahun perkhidmatan — melainkan anda masih dalam tempoh percubaan atau kontrak anda telah tamat.",
      zh: "在马来西亚被裁员，你有权根据服务年限获得遣散费——除非你仍在试用期或合同已到期。",
    },
    why: {
      en: "Losing a job is stressful. Not knowing what you are owed makes it worse. Many Malaysian workers accept lower payouts or nothing at all because they do not know the law. Understanding your retrenchment rights before it happens means you can negotiate from a position of knowledge, not panic.",
      bm: "Kehilangan pekerjaan adalah tekanan. Tidak tahu apa yang anda berhak terima menjadikannya lebih teruk. Ramai pekerja Malaysia menerima bayaran yang lebih rendah atau tiada sama sekali kerana mereka tidak tahu undang-undang. Memahami hak penamatan anda sebelum ia berlaku bermaksud anda boleh berunding dari posisi ilmu, bukan panik.",
      zh: "失业本来已经很难受，不知道自己该拿多少赔偿只会更糟。很多马来西亚员工因为不了解法律，接受了低于应得的赔偿，甚至什么都没拿到。提前了解自己的裁员权益，才能在谈判时有底气，而不是慌乱中签字。",
    },
    what: {
      en: "Under the Employment (Termination and Lay-Off Benefits) Regulations 1980, employees covered by the Employment Act who are retrenched are entitled to: 10 days wages per year of service for the first 2 years; 15 days wages per year for years 3 to 5; 20 days wages per year for each year beyond 5 years. Part years are calculated pro-rata. You must have worked for the employer for at least 12 months to qualify. Employees earning above RM4,000 per month may also have contractual entitlements — check your employment contract.",
      bm: "Di bawah Peraturan Pekerjaan (Faedah Penamatan dan Renti Kerja) 1980, pekerja yang dilindungi Akta Pekerjaan yang diberhentikan berhak kepada: 10 hari gaji bagi setiap tahun perkhidmatan untuk 2 tahun pertama; 15 hari gaji bagi setiap tahun untuk tahun 3 hingga 5; 20 hari gaji bagi setiap tahun melebihi 5 tahun. Tahun separa dikira secara pro-rata. Anda mesti bekerja untuk majikan sekurang-kurangnya 12 bulan untuk layak. Pekerja yang memperoleh lebih daripada RM4,000 sebulan mungkin juga mempunyai hak kontrak — semak kontrak pekerjaan anda.",
      zh: "根据《1980 年雇佣（终止及临时解雇福利）条例》，受雇佣法令保护的员工在被裁员时有权获得：头 2 年每年服务 10 天薪资；第 3 至 5 年每年 15 天薪资；超过 5 年每年 20 天薪资。不足一年按比例计算。须为该雇主服务至少 12 个月才符合资格。月薪超过 RM4,000 的员工可能还有合同上的额外权益——请查阅你的雇佣合同。",
    },
    comparison: [
      {
        ordinary: {
          en: "My company said they only need to give me one month notice and nothing else.",
          bm: "Syarikat saya kata mereka hanya perlu bagi satu bulan notis dan tiada lagi.",
          zh: "公司说只需要给我一个月通知期，其他什么都不用给。",
        },
        successful: {
          en: "Notice and retrenchment benefits are separate. I am entitled to both under the law if I qualify.",
          bm: "Notis dan faedah penamatan adalah berbeza. Saya berhak kepada kedua-duanya di bawah undang-undang jika saya layak.",
          zh: "通知期和遣散费是两回事。只要我符合条件，法律规定两样我都有权拿到。",
        },
      },
      {
        ordinary: {
          en: "I was on probation so I have no rights.",
          bm: "Saya dalam tempoh percubaan jadi saya tiada hak.",
          zh: "我还在试用期，所以什么权益都没有。",
        },
        successful: {
          en: "Probation employees still have rights under the EA — unpaid wages, notice period, and rest day pay still apply. Only retrenchment benefits require 12 months of service.",
          bm: "Pekerja dalam percubaan masih mempunyai hak di bawah EA — gaji yang belum dibayar, tempoh notis, dan bayaran hari rehat masih terpakai. Hanya faedah penamatan memerlukan 12 bulan perkhidmatan.",
          zh: "试用期员工在雇佣法令下仍有基本权益——欠薪、通知期和休息日薪酬仍然适用。只有遣散费需要服务满 12 个月才能申领。",
        },
      },
    ],
    action: [
      {
        en: "Calculate what you are owed: multiply your daily wage by the applicable days per year, then by your years of service.",
        bm: "Kira apa yang anda berhak terima: darab gaji harian anda dengan bilangan hari yang berkenaan setiap tahun, kemudian dengan tahun perkhidmatan anda.",
        zh: "自己算清楚应得的赔偿：日薪 × 对应年限的天数 × 服务年数。",
      },
      {
        en: "Get everything in writing: ask your employer for a formal retrenchment letter and a breakdown of the termination payment.",
        bm: "Dapatkan semua secara bertulis: minta majikan anda surat pemberhentian rasmi dan pecahan bayaran penamatan.",
        zh: "要求书面文件：向雇主索取正式的裁员通知书和遣散费明细。",
      },
      {
        en: "If you are underpaid or denied benefits: file a complaint at the nearest Labour Department (Jabatan Tenaga Kerja) office within 60 days of termination.",
        bm: "Jika anda dibayar kurang atau dinafikan faedah: failkan aduan di pejabat Jabatan Tenaga Kerja terdekat dalam masa 60 hari selepas penamatan.",
        zh: "如果赔偿不足或被拒绝：在终止雇佣后 60 天内向最近的劳工局（Jabatan Tenaga Kerja）投诉。",
      },
    ],
    story: {
      en: "Daniel worked at a retail company for 4 years before the company downsized. HR offered him two months salary as a full settlement. He checked the regulations, calculated his entitlement at 15 days per year for years 3 and 4, and presented the figure to HR. The final payout was 40% higher than the initial offer.",
      bm: "Daniel bekerja di syarikat runcit selama 4 tahun sebelum syarikat mengurangkan kakitangan. HR menawarkan dua bulan gaji sebagai penyelesaian penuh. Dia semak peraturan, kira kelayakannya pada 15 hari setahun untuk tahun 3 dan 4, dan kemukakan angka itu kepada HR. Bayaran akhir adalah 40% lebih tinggi daripada tawaran awal.",
      zh: "Daniel 在一家零售公司做了 4 年后遭遇裁员。HR 提出以两个月薪资作为全额结算。他查了法规，按照第 3 和第 4 年各 15 天的标准计算出应得金额，并向 HR 提出。最终拿到的赔偿比最初的出价高出 40%。",
    },
    source: [
      "Employment (Termination and Lay-Off Benefits) Regulations 1980",
      "Employment Act 1955, Section 12–14",
      "Labour Department Malaysia (JTK) — jabatan.jtk.gov.my",
    ],
    disclaimer: true,
  },
  {
    slug: "minimum-wage-malaysia",
    relatedSlugs: ["retrenchment-compensation-malaysia", "overtime-pay-rights-malaysia"],
    category: "labor-law",
    title: {
      en: "Minimum wage in Malaysia — what every worker needs to know",
      bm: "Gaji minimum di Malaysia — apa yang setiap pekerja perlu tahu",
      zh: "马来西亚最低薪资——每个打工族必须知道的事",
    },
    summary: {
      en: "Malaysia's minimum wage is RM1,700 per month as of February 2025 for employers with 5 or more employees. Workers earning below this rate can file a complaint with the Labour Department.",
      bm: "Gaji minimum Malaysia ialah RM1,700 sebulan mulai Februari 2025 untuk majikan dengan 5 pekerja atau lebih. Pekerja yang mendapat gaji di bawah kadar ini boleh failkan aduan kepada Jabatan Tenaga Kerja.",
      zh: "马来西亚最低薪资自 2025 年 2 月起为每月 RM1,700，适用于雇用 5 名或以上员工的雇主。薪资低于此标准的员工可向劳工局投诉。",
    },
    why: {
      en: "Minimum wage is the legal floor for any job in Malaysia. Knowing the current rate protects you from being underpaid, helps you evaluate job offers, and tells you when an employer is breaking the law. It also tells you whether your salary is above or below the starting baseline — and how far you have grown.",
      bm: "Gaji minimum adalah lantai undang-undang untuk mana-mana pekerjaan di Malaysia. Mengetahui kadar semasa melindungi anda daripada dibayar terlalu rendah, membantu anda menilai tawaran kerja, dan memberitahu anda bila majikan melanggar undang-undang. Ia juga memberitahu anda sama ada gaji anda berada di atas atau di bawah garis asas permulaan.",
      zh: "最低薪资是马来西亚任何工作的法律底线。了解最新标准能保护你不被低薪剥削，帮助你判断工作邀约是否合理，也让你知道雇主是否违法。同时也能让你看清自己的薪资水平距离起点有多远。",
    },
    what: {
      en: "Effective 1 February 2025, the national minimum wage is RM1,700 per month (or RM8.17 per hour based on 26 working days). This applies to all private sector employees regardless of nationality. Employers with fewer than 5 employees are exempted until a separate implementation date. Domestic workers (maids) are not covered under this order. The minimum wage is reviewed periodically by the National Wages Consultative Council. Previous rates: RM1,500 (May 2022), RM1,200 (February 2020).",
      bm: "Berkuat kuasa 1 Februari 2025, gaji minimum nasional ialah RM1,700 sebulan (atau RM8.17 sejam berdasarkan 26 hari bekerja). Ini terpakai kepada semua pekerja sektor swasta tanpa mengira kewarganegaraan. Majikan dengan kurang daripada 5 pekerja dikecualikan sehingga tarikh pelaksanaan berasingan. Pekerja rumah (pembantu rumah) tidak diliputi di bawah perintah ini. Gaji minimum disemak secara berkala oleh Majlis Perundingan Gaji Negara.",
      zh: "自 2025 年 2 月 1 日起，全国最低薪资为每月 RM1,700（以 26 个工作日计算，时薪约 RM8.17）。适用于私人领域所有员工，无论国籍。雇用少于 5 名员工的雇主有另行豁免期。家庭佣工（女佣）不在此令涵盖范围内。最低薪资由全国薪资咨询理事会定期检讨。历史记录：RM1,500（2022 年 5 月）、RM1,200（2020 年 2 月）。",
    },
    comparison: [
      {
        ordinary: {
          en: "My employer pays me RM1,500. I do not know if I can ask for more.",
          bm: "Majikan saya membayar RM1,500. Saya tidak tahu sama ada saya boleh minta lebih.",
          zh: "老板给我 RM1,500，我不知道能不能要求更多。",
        },
        successful: {
          en: "RM1,500 is below the 2025 minimum wage. I have a legal right to RM1,700. I will raise this with my employer and file a complaint if they refuse.",
          bm: "RM1,500 adalah di bawah gaji minimum 2025. Saya mempunyai hak undang-undang untuk mendapat RM1,700. Saya akan bincangkan dengan majikan dan failkan aduan jika mereka enggan.",
          zh: "RM1,500 低于 2025 年的最低薪资标准。我有法律权利要求 RM1,700。我会和雇主提出，若被拒绝则向劳工局投诉。",
        },
      },
      {
        ordinary: {
          en: "Minimum wage only applies to Malaysian workers.",
          bm: "Gaji minimum hanya terpakai untuk pekerja Malaysia.",
          zh: "最低薪资只适用于马来西亚人。",
        },
        successful: {
          en: "Minimum wage applies to all private sector employees in Malaysia, regardless of nationality — including foreign workers with valid work permits.",
          bm: "Gaji minimum terpakai kepada semua pekerja sektor swasta di Malaysia, tanpa mengira kewarganegaraan — termasuk pekerja asing dengan permit kerja yang sah.",
          zh: "最低薪资适用于马来西亚私人领域所有员工，无论国籍，包括持有合法工作许可证的外籍劳工。",
        },
      },
    ],
    action: [
      {
        en: "Check your payslip: confirm your monthly gross salary meets RM1,700. If you work part-time, confirm your hourly rate meets RM8.17.",
        bm: "Semak slip gaji anda: sahkan gaji kasar bulanan anda mencapai RM1,700. Jika anda bekerja separuh masa, sahkan kadar jam anda mencapai RM8.17.",
        zh: "查看你的薪资单：确认月薪毛额达到 RM1,700。若是兼职，确认时薪不低于 RM8.17。",
      },
      {
        en: "If you are underpaid: raise it with your employer in writing first. If unresolved within 7 days, file a complaint at the Labour Department (JTK).",
        bm: "Jika anda dibayar terlalu rendah: bangkitkan secara bertulis dengan majikan anda terlebih dahulu. Jika tidak diselesaikan dalam 7 hari, failkan aduan di Jabatan Tenaga Kerja (JTK).",
        zh: "如果薪资不达标：先以书面方式向雇主提出。若 7 天内未解决，向劳工局（JTK）投诉。",
      },
      {
        en: "Stay updated: the minimum wage is reviewed periodically. Follow the Human Resources Ministry (KSM) announcements for any future increases.",
        bm: "Kekal dikemaskini: gaji minimum disemak secara berkala. Ikuti pengumuman Kementerian Sumber Manusia (KSM) untuk sebarang kenaikan akan datang.",
        zh: "保持关注：最低薪资会定期检讨。关注人力资源部（KSM）的公告，了解未来的调涨情况。",
      },
    ],
    story: {
      en: "Rajan started a new job in March 2025 at RM1,500 per month. A colleague mentioned the minimum wage had just been raised to RM1,700. Rajan checked the official gazette, confirmed the rate applied to his employer, and sent a formal email to HR. His salary was corrected to RM1,700 from the following month, with two months of back pay.",
      bm: "Rajan memulakan kerja baru pada Mac 2025 dengan gaji RM1,500 sebulan. Seorang rakan sekerja menyebut gaji minimum baru sahaja dinaikkan kepada RM1,700. Rajan semak warta kerajaan rasmi, sahkan kadar itu terpakai kepada majikannya, dan hantar e-mel rasmi kepada HR. Gajinya dibetulkan kepada RM1,700 dari bulan berikutnya, dengan dua bulan gaji tunggakan.",
      zh: "Rajan 在 2025 年 3 月以每月 RM1,500 开始一份新工作。同事提到最低薪资刚调升到 RM1,700。Rajan 查阅了官方宪报，确认新标准适用于他的雇主，并向 HR 发送了正式邮件。他的薪资从下个月起更正为 RM1,700，并补发了两个月的差额。",
    },
    source: [
      "Minimum Wages Order 2022 (as amended 2024)",
      "National Wages Consultative Council Act 2011",
      "Human Resources Ministry Malaysia (KSM) — ksm.gov.my",
    ],
    disclaimer: true,
  },
  {
    slug: "how-to-escape-rat-race",
    relatedSlugs: ["what-is-compound-interest", "50-30-20-budgeting-rule"],
    category: "mindset",
    title: {
      en: "How to escape the rat race",
      bm: "Bagaimana untuk keluar dari perangkap tikus",
      zh: "怎样脱离老鼠圈",
    },
    summary: {
      en: "Escaping the rat race is not about earning more — it is about building assets that generate income without your constant time. The exit requires a plan, not luck.",
      bm: "Keluar dari perangkap tikus bukan tentang memperoleh lebih banyak — ia tentang membina aset yang menjana pendapatan tanpa masa anda yang berterusan. Jalan keluar memerlukan rancangan, bukan nasib.",
      zh: "脱离老鼠圈不是靠赚更多——而是建立能在你不持续付出时间的情况下产生收入的资产。出口需要计划，不是运气。",
    },
    why: {
      en: "Most people know they are in the rat race but feel stuck because they do not know the exit. The exit is not a lottery win or a viral business. It is a gradual shift in where your money comes from — less from your time, more from assets you have built. Understanding the steps makes the goal feel achievable instead of abstract.",
      bm: "Kebanyakan orang tahu mereka berada dalam perangkap tikus tetapi berasa terperangkap kerana tidak tahu jalan keluarnya. Jalan keluar bukan kemenangan loteri atau perniagaan viral. Ia adalah peralihan beransur-ansur dalam sumber wang anda — kurang dari masa anda, lebih dari aset yang anda bina. Memahami langkah-langkahnya menjadikan matlamat itu terasa boleh dicapai dan bukannya abstrak.",
      zh: "大多数人知道自己在老鼠圈里，却感到动弹不得，因为不知道出口在哪。出口不是中彩票，也不是一夜爆红的生意。它是一个渐进的转变：你的钱越来越少来自你的时间，越来越多来自你建立的资产。理解这些步骤，才能让目标从抽象变成可执行的事。",
    },
    what: {
      en: "The rat race exit has four stages. Stage one: stop the bleed — spend less than you earn and eliminate high-interest debt. Stage two: build a buffer — accumulate 3 to 6 months of expenses in emergency savings before investing. Stage three: build income-generating assets — EPF, unit trusts, REITs, dividend stocks, rental property, or a side business with systems. Stage four: reach the crossover point — when your passive income covers your monthly expenses, you are out. Most Malaysians can reach Stage two within one year and Stage three within three to five years if they start with intention.",
      bm: "Jalan keluar dari perangkap tikus mempunyai empat peringkat. Peringkat satu: hentikan pendarahan — belanja kurang daripada pendapatan dan hapuskan hutang faedah tinggi. Peringkat dua: bina penampan — kumpul 3 hingga 6 bulan perbelanjaan dalam simpanan kecemasan sebelum melabur. Peringkat tiga: bina aset penjana pendapatan — EPF, amanah saham, REITs, saham dividen, hartanah sewa, atau perniagaan sampingan dengan sistem. Peringkat empat: capai titik persilangan — apabila pendapatan pasif anda menampung perbelanjaan bulanan anda, anda telah keluar. Kebanyakan rakyat Malaysia boleh mencapai Peringkat dua dalam setahun dan Peringkat tiga dalam tiga hingga lima tahun jika bermula dengan niat.",
      zh: "脱离老鼠圈有四个阶段。第一阶段：止血——支出少于收入，消除高息债务。第二阶段：建立缓冲——在投资前先积累 3 至 6 个月的紧急备用金。第三阶段：建立产生收入的资产——EPF、单位信托、REITs、股息股票、出租房产，或有系统的副业。第四阶段：到达交叉点——当你的被动收入能够覆盖月支出时，你就出圈了。大多数马来西亚人如果认真开始，一年内可以完成第二阶段，三至五年内可以进入第三阶段。",
    },
    comparison: [
      {
        ordinary: {
          en: "I will start saving and investing when I earn more.",
          bm: "Saya akan mula menabung dan melabur apabila saya menjana lebih banyak.",
          zh: "等我赚多一点再开始储蓄和投资。",
        },
        successful: {
          en: "I start with whatever I earn now. The habit and the asset both grow with time.",
          bm: "Saya mulakan dengan apa yang saya peroleh sekarang. Tabiat dan aset kedua-duanya berkembang dengan masa.",
          zh: "我从现在的收入开始。习惯和资产都会随着时间成长。",
        },
      },
      {
        ordinary: {
          en: "Escaping the rat race means I need to quit my job and start a business.",
          bm: "Keluar dari perangkap tikus bermaksud saya perlu berhenti kerja dan mulakan perniagaan.",
          zh: "脱离老鼠圈就是辞职创业。",
        },
        successful: {
          en: "I can keep my job and build assets on the side. The goal is income sources, not a dramatic exit.",
          bm: "Saya boleh kekal dalam pekerjaan saya dan bina aset di sampingan. Matlamatnya adalah sumber pendapatan, bukan keluar secara dramatik.",
          zh: "我可以保留工作，同时在旁边建立资产。目标是多元收入来源，不是戏剧性地辞职。",
        },
      },
    ],
    action: [
      {
        en: "Calculate your crossover number: what is your total monthly expense? That is the passive income target you are working toward.",
        bm: "Kira nombor persilangan anda: berapakah jumlah perbelanjaan bulanan anda? Itulah sasaran pendapatan pasif yang anda usahakan.",
        zh: "计算你的交叉点目标：你每月总支出是多少？那就是你的被动收入目标数字。",
      },
      {
        en: "List your current assets and their monthly income: EPF balance, savings, any side income. That is your starting point.",
        bm: "Senaraikan aset semasa anda dan pendapatan bulanan mereka: baki EPF, simpanan, sebarang pendapatan sampingan. Itulah titik permulaan anda.",
        zh: "列出你现有的资产和每月收入：EPF 余额、储蓄、任何副业收入。那就是你的起点。",
      },
      {
        en: "Pick one asset to build this year: it does not need to be big. One unit trust account, one dividend stock, one skill that earns freelance income.",
        bm: "Pilih satu aset untuk dibina tahun ini: ia tidak perlu besar. Satu akaun amanah saham, satu saham dividen, satu kemahiran yang menjana pendapatan bebas.",
        zh: "今年选一个资产开始建立：不需要很大。一个单位信托账户、一只股息股票，或一项能接案赚钱的技能。",
      },
    ],
    story: {
      en: "Hafiz earned RM3,200 a month and felt stuck in the same cycle for three years. He started by tracking every expense and cutting RM400 a month in subscriptions and dining. He put RM300 a month into a unit trust and RM100 into EPF top-up. Three years later, his investments generated RM280 a month in returns — not enough to quit, but enough to prove the system worked. He kept building.",
      bm: "Hafiz memperoleh RM3,200 sebulan dan berasa terperangkap dalam kitaran yang sama selama tiga tahun. Dia mula dengan menjejak setiap perbelanjaan dan memotong RM400 sebulan dalam langganan dan makan. Dia meletakkan RM300 sebulan ke dalam amanah saham dan RM100 ke dalam tambahan EPF. Tiga tahun kemudian, pelaburannya menjana RM280 sebulan dalam pulangan — tidak cukup untuk berhenti kerja, tetapi cukup untuk membuktikan sistem itu berjaya. Dia terus membina.",
      zh: "Hafiz 每月收入 RM3,200，在同样的循环里困了三年。他从追踪每一笔开销开始，每月削减了 RM400 的订阅和餐饮费用。每月拿 RM300 投入单位信托，RM100 追加 EPF。三年后，他的投资每月产生 RM280 的回报——还不够辞职，但足以证明这个系统有效。他继续建立。",
    },
    source: [
      "Robert Kiyosaki, Rich Dad Poor Dad (1997)",
      "Securities Commission Malaysia — sc.com.my",
      "Employees Provident Fund Malaysia — kwsp.gov.my",
    ],
    disclaimer: false,
  },
  {
    slug: "what-is-compound-interest",
    relatedSlugs: ["50-30-20-budgeting-rule", "how-to-escape-rat-race"],
    category: "mindset",
    title: {
      en: "What is compound interest — and why it matters more than your salary",
      bm: "Apa itu faedah kompaun — dan mengapa ia lebih penting daripada gaji anda",
      zh: "复利是什么——为什么它比你的薪水更重要",
    },
    summary: {
      en: "Compound interest is earning returns on your returns. Over time, it turns small consistent contributions into large amounts — and it works against you just as powerfully in debt.",
      bm: "Faedah kompaun ialah memperoleh pulangan atas pulangan anda. Dari masa ke masa, ia mengubah sumbangan kecil yang konsisten menjadi jumlah yang besar — dan ia bekerja menentang anda dengan sama kuatnya dalam hutang.",
      zh: "复利是在你的回报上再产生回报。随着时间推移，它能把小额稳定的投入变成大笔财富——而在债务中，它同样强力地对你不利。",
    },
    why: {
      en: "Most people understand saving but underestimate time. Compound interest is the reason why starting at 22 is dramatically better than starting at 32, even if you invest less total. It is also why credit card debt and high-interest loans are so destructive — the same compounding that builds wealth destroys it when the rate works against you.",
      bm: "Kebanyakan orang faham tentang menabung tetapi meremehkan masa. Faedah kompaun adalah sebab mengapa bermula pada usia 22 adalah jauh lebih baik daripada bermula pada usia 32, walaupun anda melabur lebih sedikit secara keseluruhan. Ia juga sebab hutang kad kredit dan pinjaman faedah tinggi sangat merosakkan — pengkompaunan yang sama yang membina kekayaan menghancurkannya apabila kadar itu bekerja menentang anda.",
      zh: "大多数人理解储蓄，却低估了时间的力量。复利是为什么 22 岁开始投资比 32 岁开始好得多的原因，即使你总共投入的金额更少。这也是为什么信用卡债务和高息贷款如此危险——同样的复利效应，当利率对你不利时，它会以同等的力量摧毁财富。",
    },
    what: {
      en: "Compound interest means your investment earns returns, and those returns are added to your principal, so future returns are calculated on a larger base. The formula is: A = P × (1 + r)^n, where P is principal, r is the annual rate, and n is years. Example: RM10,000 invested at 6% per year — after 10 years: RM17,908; after 20 years: RM32,071; after 30 years: RM57,435. EPF has paid between 5.2% and 6.9% annual dividend for the past decade, making it one of the most reliable compound growth tools available to Malaysians.",
      bm: "Faedah kompaun bermaksud pelaburan anda memperoleh pulangan, dan pulangan tersebut ditambah kepada prinsipal anda, jadi pulangan masa depan dikira berdasarkan asas yang lebih besar. Formulanya ialah: A = P × (1 + r)^n, di mana P ialah prinsipal, r ialah kadar tahunan, dan n ialah tahun. Contoh: RM10,000 dilaburkan pada 6% setahun — selepas 10 tahun: RM17,908; selepas 20 tahun: RM32,071; selepas 30 tahun: RM57,435. EPF telah membayar dividen tahunan antara 5.2% hingga 6.9% dalam dekad lalu, menjadikannya salah satu alat pertumbuhan kompaun yang paling boleh dipercayai untuk rakyat Malaysia.",
      zh: "复利意味着你的投资产生回报，这些回报再加入本金，未来的回报就在更大的基础上计算。公式为：A = P × (1 + r)^n，其中 P 是本金，r 是年利率，n 是年数。例子：RM10,000 以年利率 6% 投资——10 年后：RM17,908；20 年后：RM32,071；30 年后：RM57,435。EPF 过去十年派发的年度股息介于 5.2% 至 6.9%，是马来西亚人可使用的最可靠复利增长工具之一。",
    },
    comparison: [
      {
        ordinary: {
          en: "I will invest a large amount later when I have more money.",
          bm: "Saya akan melabur jumlah yang besar kemudian apabila saya ada lebih banyak wang.",
          zh: "我等有更多钱的时候再一次性大笔投入。",
        },
        successful: {
          en: "Small amounts invested consistently for longer produce more than large amounts invested late. Time is the main ingredient.",
          bm: "Jumlah kecil yang dilaburkan secara konsisten untuk tempoh yang lebih lama menghasilkan lebih daripada jumlah besar yang dilaburkan lewat. Masa adalah bahan utama.",
          zh: "长期持续投入小额，比晚期一次性大额投入产生更多。时间才是最关键的原料。",
        },
      },
      {
        ordinary: {
          en: "My savings account at 2% is basically the same as investing.",
          bm: "Akaun simpanan saya pada 2% pada dasarnya sama dengan melabur.",
          zh: "我的储蓄账户有 2% 利息，跟投资差不多。",
        },
        successful: {
          en: "At 2%, RM10,000 becomes RM14,869 in 20 years. At 6%, it becomes RM32,071. The rate difference compounds into a massive gap over time.",
          bm: "Pada 2%, RM10,000 menjadi RM14,869 dalam 20 tahun. Pada 6%, ia menjadi RM32,071. Perbezaan kadar bergabung menjadi jurang yang besar dari masa ke masa.",
          zh: "2% 利率下，RM10,000 在 20 年后变成 RM14,869。6% 利率下变成 RM32,071。利率差距会随时间复利成巨大的差异。",
        },
      },
    ],
    action: [
      {
        en: "Use the compound interest calculator on this site to see what your current savings will grow to at different rates and time horizons.",
        bm: "Gunakan kalkulator faedah kompaun di laman ini untuk melihat pertumbuhan simpanan semasa anda pada kadar dan tempoh masa yang berbeza.",
        zh: "使用本站的复利计算器，看看你现有的储蓄在不同利率和时间下能增长多少。",
      },
      {
        en: "Check your EPF balance and projected amount at retirement age. EPF is compound growth that is already happening for you — most Malaysians do not realise how large the number can get.",
        bm: "Semak baki EPF anda dan jumlah unjuran pada usia persaraan. EPF adalah pertumbuhan kompaun yang sudah berlaku untuk anda — kebanyakan rakyat Malaysia tidak sedar betapa besarnya jumlah itu boleh jadi.",
        zh: "查看你的 EPF 余额和退休时的预计金额。EPF 已经在为你复利增长——大多数马来西亚人不知道这个数字可以有多大。",
      },
      {
        en: "Eliminate high-interest debt first: any debt above 6% per year is compounding against you faster than most investments can grow. Pay it off before investing outside of EPF.",
        bm: "Hapuskan hutang faedah tinggi dahulu: mana-mana hutang melebihi 6% setahun sedang bergabung menentang anda lebih cepat daripada kebanyakan pelaburan boleh berkembang. Bayar ia sebelum melabur di luar EPF.",
        zh: "优先清除高息债务：任何超过 6% 年利率的债务正在以快于大多数投资增长的速度对你复利。在 EPF 以外投资之前，先把这些债务还清。",
      },
    ],
    story: {
      en: "Two cousins, both 25. Mei invested RM200 per month for 10 years then stopped — total invested: RM24,000. Jess waited 10 years then invested RM200 per month for 30 years — total invested: RM72,000. At age 65 with 6% annual return: Mei had RM130,000. Jess had RM200,000. Mei invested one third the amount and still came close — because she started earlier.",
      bm: "Dua sepupu, kedua-duanya berumur 25 tahun. Mei melabur RM200 sebulan selama 10 tahun kemudian berhenti — jumlah dilaburkan: RM24,000. Jess menunggu 10 tahun kemudian melabur RM200 sebulan selama 30 tahun — jumlah dilaburkan: RM72,000. Pada usia 65 dengan pulangan 6% setahun: Mei mempunyai RM130,000. Jess mempunyai RM200,000. Mei melabur satu pertiga jumlah dan masih hampir sama — kerana dia bermula lebih awal.",
      zh: "两个表姐妹，都是 25 岁。Mei 每月投入 RM200，投了 10 年后停止——共投入 RM24,000。Jess 等了 10 年再开始，每月 RM200 投了 30 年——共投入 RM72,000。在年利率 6% 的情况下，到 65 岁时：Mei 有 RM130,000，Jess 有 RM200,000。Mei 投入了三分之一的金额，结果却相差不远——因为她更早开始。",
    },
    source: [
      "Employees Provident Fund Malaysia — EPF Annual Report 2023",
      "Securities Commission Malaysia — sc.com.my",
    ],
    disclaimer: false,
  },
  {
    slug: "50-30-20-budgeting-rule",
    relatedSlugs: ["what-is-compound-interest", "atomic-habits-lessons-malaysia"],
    category: "mindset",
    title: {
      en: "The 50/30/20 budgeting rule — a simple system for Malaysians",
      bm: "Peraturan belanjawan 50/30/20 — sistem mudah untuk rakyat Malaysia",
      zh: "50/30/20 预算法——马来西亚打工族的简单理财系统",
    },
    summary: {
      en: "The 50/30/20 rule splits your take-home pay into three buckets: 50% for needs, 30% for wants, and 20% for savings and debt repayment. It is the simplest budgeting system that actually works long-term.",
      bm: "Peraturan 50/30/20 membahagikan gaji bersih anda kepada tiga bahagian: 50% untuk keperluan, 30% untuk kehendak, dan 20% untuk simpanan dan pembayaran hutang. Ia adalah sistem belanjawan paling mudah yang benar-benar berfungsi jangka panjang.",
      zh: "50/30/20 法则将你的实收薪资分成三个部分：50% 用于必需品，30% 用于想要的东西，20% 用于储蓄和还债。这是最简单且真正能长期执行的预算系统。",
    },
    why: {
      en: "Most Malaysians either have no budget at all, or create a very detailed one that they abandon within a month. The 50/30/20 rule works because it is simple enough to remember, flexible enough to adapt to any income level, and structured enough to ensure savings happen automatically before discretionary spending.",
      bm: "Kebanyakan rakyat Malaysia sama ada tidak mempunyai belanjawan langsung, atau mencipta belanjawan yang sangat terperinci yang mereka tinggalkan dalam sebulan. Peraturan 50/30/20 berfungsi kerana ia cukup mudah untuk diingati, cukup fleksibel untuk disesuaikan dengan mana-mana tahap pendapatan, dan cukup berstruktur untuk memastikan simpanan berlaku secara automatik sebelum perbelanjaan mengikut budi bicara.",
      zh: "大多数马来西亚人要么根本没有预算，要么制定了一个非常详细的预算，却在一个月内放弃。50/30/20 法则之所以有效，是因为它简单到能记住，灵活到能适应任何收入水平，同时又足够有结构，确保储蓄在可支配消费之前自动发生。",
    },
    what: {
      en: "Apply the rule to your take-home pay — the amount after EPF, SOCSO, EIS, and PCB deductions. Needs (50%): rent or mortgage, groceries, utilities, transport, minimum debt repayments, insurance premiums. Wants (30%): dining out, entertainment, shopping, travel, subscriptions, hobbies. Savings and debt (20%): emergency fund, EPF voluntary top-up, investments, extra loan repayments. For a take-home salary of RM2,500: RM1,250 for needs, RM750 for wants, RM500 for savings. If your needs exceed 50%, adjust by reducing wants first — not savings.",
      bm: "Gunakan peraturan ini pada gaji bersih anda — jumlah selepas potongan EPF, SOCSO, EIS, dan PCB. Keperluan (50%): sewa atau gadai janji, bahan makanan, utiliti, pengangkutan, pembayaran hutang minimum, premium insurans. Kehendak (30%): makan di luar, hiburan, membeli-belah, pelancongan, langganan, hobi. Simpanan dan hutang (20%): tabung kecemasan, tambahan sukarela EPF, pelaburan, pembayaran pinjaman tambahan. Untuk gaji bersih RM2,500: RM1,250 untuk keperluan, RM750 untuk kehendak, RM500 untuk simpanan. Jika keperluan anda melebihi 50%, laraskan dengan mengurangkan kehendak dahulu — bukan simpanan.",
      zh: "将此法则应用于你的实收薪资——即扣除 EPF、SOCSO、EIS 和 PCB 后的金额。必需品（50%）：租金或房贷、食品杂货、水电费、交通、最低还款额、保险费。想要的（30%）：外食、娱乐、购物、旅游、订阅服务、兴趣爱好。储蓄和还债（20%）：紧急备用金、EPF 自愿追缴、投资、额外还贷。以实收薪资 RM2,500 为例：必需品 RM1,250，想要的 RM750，储蓄 RM500。如果必需品超过 50%，先从「想要的」那部分削减——不要动储蓄。",
    },
    comparison: [
      {
        ordinary: {
          en: "I save whatever is left at the end of the month.",
          bm: "Saya simpan apa yang berbaki pada akhir bulan.",
          zh: "我每个月剩下多少就存多少。",
        },
        successful: {
          en: "I save and invest first, then spend what remains. The 20% moves out before I see it.",
          bm: "Saya simpan dan labur dahulu, kemudian belanjakan apa yang tinggal. 20% itu bergerak keluar sebelum saya melihatnya.",
          zh: "我先储蓄和投资，再花剩下的。那 20% 在我看到它之前就已经转出去了。",
        },
      },
      {
        ordinary: {
          en: "I cannot do 50/30/20 because my rent alone takes up 60% of my income.",
          bm: "Saya tidak boleh buat 50/30/20 kerana sewa saya sahaja mengambil 60% pendapatan saya.",
          zh: "我做不到 50/30/20，因为光是租金就占了我收入的 60%。",
        },
        successful: {
          en: "The rule is a guide, not a law. If needs are 60%, I adjust wants to 20% and protect the 20% savings. Or I find ways to reduce needs — housemates, transport choices, cooking at home.",
          bm: "Peraturan itu adalah panduan, bukan undang-undang. Jika keperluan adalah 60%, saya laraskan kehendak kepada 20% dan lindungi simpanan 20%. Atau saya cari cara untuk mengurangkan keperluan — rakan sebilik, pilihan pengangkutan, memasak di rumah.",
          zh: "这个法则是指引，不是铁律。如果必需品占 60%，我就把「想要的」压到 20%，同时保住 20% 的储蓄。或者想办法压低必需品——找室友、换交通方式、自己煮饭。",
        },
      },
    ],
    action: [
      {
        en: "Find your take-home pay: use the Salary Calculator on this site to get your exact net pay after all deductions.",
        bm: "Cari gaji bersih anda: gunakan Kalkulator Gaji di laman ini untuk mendapatkan gaji bersih tepat anda selepas semua potongan.",
        zh: "找出你的实收薪资：使用本站的薪资计算器，算出扣除所有款项后的准确净薪。",
      },
      {
        en: "Categorise last month's spending: go through your bank statement and label each transaction as Need, Want, or Saving. See where you actually stand.",
        bm: "Kategorikan perbelanjaan bulan lalu: semak penyata bank anda dan label setiap transaksi sebagai Keperluan, Kehendak, atau Simpanan. Lihat di mana anda sebenarnya berada.",
        zh: "对上个月的消费进行分类：查看你的银行对账单，把每笔消费标记为「必需」「想要」或「储蓄」。看看你真实的状况。",
      },
      {
        en: "Automate the 20%: set up a standing instruction to transfer your savings amount on payday — before you spend anything. Treat it like a fixed bill.",
        bm: "Automatikkan 20%: sediakan arahan tetap untuk memindahkan jumlah simpanan anda pada hari gaji — sebelum anda membelanjakan apa-apa. Anggapnya seperti bil tetap.",
        zh: "自动化那 20%：在发薪日设置自动转账，在你花任何钱之前先把储蓄金额转出去。把它当作一笔固定账单来对待。",
      },
    ],
    story: {
      en: "Syazwan earned RM2,800 take-home and had no idea where his money went each month. He did one exercise: categorised three months of bank statements. Result: needs were at 48%, wants at 44%, savings at 8%. He moved three subscriptions and weekly tapau orders to the wants column and set a wants budget of RM700. The remaining RM560 went into a separate savings account automatically on the 1st of every month. Six months later he had RM3,360 saved — more than he had saved in the previous two years combined.",
      bm: "Syazwan memperoleh RM2,800 gaji bersih dan tidak tahu ke mana wang dia pergi setiap bulan. Dia melakukan satu latihan: mengkategorikan tiga bulan penyata bank. Hasilnya: keperluan pada 48%, kehendak pada 44%, simpanan pada 8%. Dia memindahkan tiga langganan dan pesanan tapau mingguan ke kolum kehendak dan menetapkan belanjawan kehendak RM700. Baki RM560 masuk ke akaun simpanan berasingan secara automatik pada 1hb setiap bulan. Enam bulan kemudian dia telah menyimpan RM3,360 — lebih daripada yang dia simpan dalam dua tahun sebelumnya.",
      zh: "Syazwan 实收 RM2,800，每个月不知道钱去哪了。他做了一个练习：把三个月的银行对账单逐笔分类。结果：必需品占 48%，想要的占 44%，储蓄只有 8%。他把三个订阅服务和每周打包餐归入「想要的」类别，给这部分设定了 RM700 的上限。剩余的 RM560 每月 1 号自动转入另一个储蓄账户。六个月后他存了 RM3,360——比他过去两年加起来存的还要多。",
    },
    source: [
      "Elizabeth Warren & Amelia Warren Tyagi, All Your Worth (2005)",
      "Bank Negara Malaysia — Financial Education Network (FEN)",
    ],
    disclaimer: false,
  },
  {
    slug: "fixed-deposit-vs-unit-trust-malaysia",
    relatedSlugs: ["how-to-start-investing-malaysia", "banks-loans-tool-or-trap"],
    category: "finance",
    title: {
      en: "Fixed deposit vs unit trust in Malaysia — which is right for you",
      bm: "Deposit tetap vs amanah saham di Malaysia — mana yang sesuai untuk anda",
      zh: "定期存款 vs 投资基金——哪个更适合你",
    },
    summary: {
      en: "Fixed deposits offer guaranteed returns with zero risk to your principal. Unit trusts offer higher potential returns but your capital can go up or down. The right choice depends on your time horizon and risk tolerance.",
      bm: "Deposit tetap menawarkan pulangan terjamin dengan sifar risiko kepada prinsipal anda. Amanah saham menawarkan potensi pulangan yang lebih tinggi tetapi modal anda boleh naik atau turun. Pilihan yang betul bergantung pada tempoh masa dan toleransi risiko anda.",
      zh: "定期存款提供有保证的回报，本金零风险。投资基金提供更高的潜在回报，但你的本金可能上涨也可能下跌。正确的选择取决于你的时间跨度和风险承受能力。",
    },
    why: {
      en: "Many Malaysians park all their savings in fixed deposits because it feels safe — and it is safe, but safety has a cost. At 3% to 4% per year, a fixed deposit barely keeps pace with inflation. Understanding the trade-off helps you decide how much to keep safe and how much to put to work for higher growth.",
      bm: "Ramai rakyat Malaysia meletakkan semua simpanan mereka dalam deposit tetap kerana ia terasa selamat — dan ia memang selamat, tetapi keselamatan ada kosnya. Pada 3% hingga 4% setahun, deposit tetap hampir tidak mengikut kadar inflasi. Memahami pertukaran ini membantu anda memutuskan berapa banyak yang perlu disimpan dengan selamat dan berapa banyak yang perlu diletakkan untuk pertumbuhan yang lebih tinggi.",
      zh: "很多马来西亚人把所有积蓄放在定期存款里，因为感觉安全——它确实安全，但安全是有代价的。年利率 3% 至 4%，定期存款几乎只能跟上通货膨胀。理解这个权衡，才能决定多少钱该放在安全处，多少钱该用来争取更高增长。",
    },
    what: {
      en: "Fixed deposit (FD): you deposit a lump sum with a bank for a fixed period (1 to 60 months). The rate is guaranteed — typically 3% to 4% per annum in Malaysia. Your principal is protected. Withdrawing early usually means forfeiting interest. Unit trust (amanah saham): a fund manager pools money from many investors and invests in a diversified portfolio of stocks, bonds, or other assets. Returns are not guaranteed. Historical average for equity funds in Malaysia: 6% to 9% per year over a 10-year horizon. Capital can fall below what you invested. Amanah Saham Bumiputera (ASB) is a special government-backed unit trust for Bumiputera investors with historically higher and more stable returns.",
      bm: "Deposit tetap (FD): anda mendepositkan jumlah sekaligus dengan bank untuk tempoh tetap (1 hingga 60 bulan). Kadarnya terjamin — biasanya 3% hingga 4% setahun di Malaysia. Prinsipal anda dilindungi. Pengeluaran awal biasanya bermakna kehilangan faedah. Amanah saham: pengurus dana mengumpulkan wang daripada ramai pelabur dan melabur dalam portfolio diversifikasi saham, bon, atau aset lain. Pulangan tidak terjamin. Purata sejarah untuk dana ekuiti di Malaysia: 6% hingga 9% setahun dalam tempoh 10 tahun. Modal boleh jatuh di bawah apa yang anda laburkan. Amanah Saham Bumiputera (ASB) adalah amanah saham sokongan kerajaan khas untuk pelabur Bumiputera dengan pulangan yang lebih tinggi dan lebih stabil secara sejarah.",
      zh: "定期存款（FD）：你把一笔钱存入银行，存放固定期限（1 至 60 个月）。利率有保证——马来西亚通常为年利率 3% 至 4%。本金受保护。提前提取通常意味着损失利息。投资基金（单位信托）：基金经理汇集众多投资者的资金，投资于股票、债券或其他资产的多元化组合。回报无保证。马来西亚股票基金的历史平均年回报：10 年跨度约 6% 至 9%。本金可能跌破投资金额。阿马纳·萨汉·布米布特拉（ASB）是专为土著投资者设立的政府支持单位信托，历史回报更高且更稳定。",
    },
    comparison: [
      {
        ordinary: { en: "I only use fixed deposits because investing is too risky.", bm: "Saya hanya guna deposit tetap kerana melabur terlalu berisiko.", zh: "我只用定期存款，因为投资风险太高。" },
        successful: { en: "I keep 3 to 6 months of expenses in FD as emergency buffer, and invest the rest for long-term growth. Risk is managed by time, not avoided.", bm: "Saya simpan 3 hingga 6 bulan perbelanjaan dalam FD sebagai penampan kecemasan, dan laburkan bakinya untuk pertumbuhan jangka panjang. Risiko diurus oleh masa, bukan dielakkan.", zh: "我把 3 至 6 个月的支出放在定期存款作为紧急缓冲，其余的用于长期增长投资。风险靠时间来管理，而不是回避。" },
      },
      {
        ordinary: { en: "Unit trusts always lose money — my friend lost 20% last year.", bm: "Amanah saham selalu rugi — kawan saya rugi 20% tahun lepas.", zh: "投资基金一定会亏——我朋友去年亏了 20%。" },
        successful: { en: "Short-term losses are normal. Over 10 or more years, diversified equity funds historically recover and grow. The mistake is investing money you need in the next 1 to 2 years.", bm: "Kerugian jangka pendek adalah normal. Lebih daripada 10 tahun atau lebih, dana ekuiti pelbagai secara sejarah pulih dan berkembang. Kesilapannya adalah melabur wang yang anda perlukan dalam 1 hingga 2 tahun akan datang.", zh: "短期亏损是正常的。从历史上看，多元化股票基金在 10 年或以上的时间里会恢复并增长。错误在于把 1 至 2 年内需要用到的钱拿去投资。" },
      },
    ],
    action: [
      { en: "Separate your money into two buckets: money you might need in the next 2 years goes into FD or savings. Money you will not touch for 5 or more years can go into unit trusts.", bm: "Asingkan wang anda kepada dua bahagian: wang yang mungkin anda perlukan dalam 2 tahun akan datang masuk ke dalam FD atau simpanan. Wang yang tidak akan anda sentuh selama 5 tahun atau lebih boleh masuk ke dalam amanah saham.", zh: "把你的钱分成两个部分：2 年内可能需要用的钱放定期存款或储蓄账户；5 年或以上不会动用的钱可以放入单位信托。" },
      { en: "Open a unit trust account: Maybank, CIMB, Public Mutual, and Fundsupermart all allow you to start with RM100 or less. You do not need a large lump sum.", bm: "Buka akaun amanah saham: Maybank, CIMB, Public Mutual, dan Fundsupermart semuanya membenarkan anda bermula dengan RM100 atau kurang. Anda tidak memerlukan jumlah besar.", zh: "开设单位信托账户：Maybank、CIMB、Public Mutual 和 Fundsupermart 都允许你从 RM100 或更少开始。不需要一大笔钱。" },
      { en: "Compare FD rates: Malaysian banks update their FD rates regularly. Check iMoney or RinggitPlus to find the current highest rate before placing a deposit.", bm: "Bandingkan kadar FD: bank-bank Malaysia mengemas kini kadar FD mereka secara berkala. Semak iMoney atau RinggitPlus untuk mencari kadar tertinggi semasa sebelum membuat deposit.", zh: "比较定期存款利率：马来西亚各银行定期更新利率。在存入之前，先到 iMoney 或 RinggitPlus 查找当前最高利率。" },
    ],
    story: {
      en: "Nurul had RM15,000 saved and kept all of it in a savings account earning 0.5%. A colleague suggested she split it: RM6,000 in a 12-month FD at 3.8% for her emergency fund, and RM9,000 into a balanced unit trust. Three years later the FD had been renewed twice and she had earned RM684 in guaranteed interest. The unit trust had grown to RM11,200. Total growth on RM15,000: RM2,884 — compared to RM225 if it had all stayed in the savings account.",
      bm: "Nurul mempunyai RM15,000 simpanan dan menyimpan semuanya dalam akaun simpanan yang mendapat 0.5%. Seorang rakan sekerja mencadangkan dia membahagikannya: RM6,000 dalam FD 12 bulan pada 3.8% untuk tabung kecemasan, dan RM9,000 ke dalam amanah saham seimbang. Tiga tahun kemudian FD telah diperbaharui dua kali dan dia telah memperoleh RM684 dalam faedah terjamin. Amanah saham telah berkembang kepada RM11,200. Jumlah pertumbuhan pada RM15,000: RM2,884 — berbanding RM225 jika semuanya kekal dalam akaun simpanan.",
      zh: "Nurul 存了 RM15,000，全部放在年利率 0.5% 的储蓄账户里。一个同事建议她把钱分开：RM6,000 存入 12 个月定期，利率 3.8%，作为紧急备用金；RM9,000 投入平衡型单位信托。三年后，定期存款已经续期两次，她获得了 RM684 的有保证利息。单位信托增长到了 RM11,200。RM15,000 的总增长：RM2,884——而如果全部留在储蓄账户里只有 RM225。",
    },
    source: ["Bank Negara Malaysia — bnm.gov.my", "Securities Commission Malaysia — sc.com.my", "Perbadanan Insurans Deposit Malaysia (PIDM) — pidm.gov.my"],
    disclaimer: true,
  },
  {
    slug: "how-to-start-investing-malaysia",
    relatedSlugs: ["fixed-deposit-vs-unit-trust-malaysia", "good-debt-vs-bad-debt"],
    category: "finance",
    title: { en: "How to start investing in Malaysia — a beginner's guide", bm: "Cara memulakan pelaburan di Malaysia — panduan pemula", zh: "怎样开始投资马来西亚——新手完整指南" },
    summary: { en: "Starting to invest in Malaysia does not require a large sum or financial expertise. The key is choosing the right account for your situation and starting small and consistently.", bm: "Memulakan pelaburan di Malaysia tidak memerlukan jumlah yang besar atau kepakaran kewangan. Kuncinya adalah memilih akaun yang betul untuk situasi anda dan bermula dengan kecil secara konsisten.", zh: "在马来西亚开始投资不需要大笔资金或专业知识。关键是选择适合自己情况的账户，然后小额持续投入。" },
    why: { en: "The biggest investing mistake Malaysians make is waiting — waiting until they earn more, know more, or have more time. Meanwhile, inflation erodes the value of their savings. Every year of delay costs more than most people realise, because of how compound growth works over time. You do not need to be ready. You need to start.", bm: "Kesilapan pelaburan terbesar yang dilakukan oleh rakyat Malaysia adalah menunggu — menunggu sehingga mereka menjana lebih banyak, tahu lebih banyak, atau mempunyai lebih banyak masa. Sementara itu, inflasi menghakis nilai simpanan mereka. Setiap tahun kelewatan menelan belanja lebih daripada yang disedari oleh kebanyakan orang, kerana bagaimana pertumbuhan kompaun berfungsi dari masa ke masa. Anda tidak perlu bersedia. Anda perlu bermula.", zh: "马来西亚人最大的投资错误是等待——等到赚更多、懂更多、有更多时间。与此同时，通货膨胀在侵蚀他们的储蓄价值。每一年的拖延代价都比大多数人意识到的更大，因为复利的时间效应。你不需要准备好才开始。你需要先开始。" },
    what: { en: "There are four main starting points for Malaysian investors. First, EPF voluntary contribution (i-Saraan or i-Suri): if you are self-employed or want to top up beyond the mandatory 11%, this is the safest and most tax-efficient first step. Second, Amanah Saham Nasional (ASN) or ASB: government-backed unit trusts with stable historical returns of 5% to 7%. ASB is only for Bumiputera; ASN is open to all Malaysians. Third, unit trusts via bank or platform: Maybank2u, CIMB Clicks, or Fundsupermart allow you to invest from RM100 in diversified funds. Fourth, direct stock investment: via a CDS account and brokerage (Rakuten Trade, Mplus, Kenanga). Higher potential return, higher risk, requires more knowledge. Start with options one or two, then build knowledge before moving to three or four.", bm: "Terdapat empat titik permulaan utama untuk pelabur Malaysia. Pertama, sumbangan sukarela EPF (i-Saraan atau i-Suri): jika anda bekerja sendiri atau ingin menambah melebihi 11% mandatori, ini adalah langkah pertama yang paling selamat dan cekap cukai. Kedua, Amanah Saham Nasional (ASN) atau ASB: amanah saham sokongan kerajaan dengan pulangan sejarah yang stabil 5% hingga 7%. ASB hanya untuk Bumiputera; ASN terbuka kepada semua rakyat Malaysia. Ketiga, amanah saham melalui bank atau platform: Maybank2u, CIMB Clicks, atau Fundsupermart membolehkan anda melabur dari RM100 dalam dana pelbagai. Keempat, pelaburan saham langsung: melalui akaun CDS dan broker (Rakuten Trade, Mplus, Kenanga). Potensi pulangan lebih tinggi, risiko lebih tinggi, memerlukan lebih banyak pengetahuan. Mulakan dengan pilihan satu atau dua, kemudian bina pengetahuan sebelum beralih ke tiga atau empat.", zh: "马来西亚投资者有四个主要起点。第一，EPF 自愿追缴（i-Saraan 或 i-Suri）：如果你是自雇人士，或想在强制 11% 以上追加，这是最安全、税务效益最高的第一步。第二，Amanah Saham Nasional（ASN）或 ASB：政府支持的单位信托，历史年回报稳定在 5% 至 7%。ASB 仅限土著；ASN 对所有马来西亚人开放。第三，通过银行或平台投资单位信托：Maybank2u、CIMB Clicks 或 Fundsupermart 允许从 RM100 开始投资多元化基金。第四，直接股票投资：通过 CDS 账户和经纪公司（Rakuten Trade、Mplus、Kenanga）。潜在回报更高，风险更高，需要更多知识。先从一或二开始，积累知识后再考虑三或四。" },
    comparison: [
      { ordinary: { en: "I want to invest but I do not know enough yet. I will learn more first.", bm: "Saya ingin melabur tetapi saya belum tahu cukup lagi. Saya akan belajar lebih dahulu.", zh: "我想投资，但还不够了解。我先多学学再说。" }, successful: { en: "I start with the safest and simplest option — EPF top-up or ASN — while I learn. Real learning happens by doing, not by reading indefinitely.", bm: "Saya bermula dengan pilihan paling selamat dan paling mudah — tambahan EPF atau ASN — sambil saya belajar. Pembelajaran sebenar berlaku dengan melakukan, bukan dengan membaca tanpa had.", zh: "我先从最安全简单的选项开始——追加 EPF 或买 ASN——同时继续学习。真正的学习是在实践中发生的，不是无限期地阅读。" } },
      { ordinary: { en: "Investing is only for people with a lot of money.", bm: "Pelaburan hanya untuk orang yang mempunyai banyak wang.", zh: "投资是有很多钱的人才做的事。" }, successful: { en: "Most Malaysian investment platforms allow you to start with RM100 or less. The amount matters less than the habit of starting.", bm: "Kebanyakan platform pelaburan Malaysia membenarkan anda bermula dengan RM100 atau kurang. Jumlahnya kurang penting berbanding tabiat untuk bermula.", zh: "大多数马来西亚投资平台允许你从 RM100 或更少开始。金额没有开始这个习惯更重要。" } },
    ],
    action: [
      { en: "Open an ASN account today if you do not have one: go to any Maybank branch or the ASNB website. It takes 30 minutes and you can start with RM10.", bm: "Buka akaun ASN hari ini jika anda belum ada: pergi ke mana-mana cawangan Maybank atau laman web ASNB. Ia mengambil masa 30 minit dan anda boleh bermula dengan RM10.", zh: "如果还没有 ASN 账户，今天就去开：前往任何一家 Maybank 分行或 ASNB 网站。只需 30 分钟，最低 RM10 即可开始。" },
      { en: "Set a monthly auto-invest: even RM50 per month into a unit trust or ASN builds the habit and the compound effect starts immediately.", bm: "Tetapkan pelaburan automatik bulanan: walaupun RM50 sebulan ke dalam amanah saham atau ASN membina tabiat dan kesan kompaun bermula dengan serta-merta.", zh: "设置每月自动投资：哪怕每月只有 RM50 投入单位信托或 ASN，也能建立习惯，复利效应立即开始。" },
      { en: "Do not invest your emergency fund: keep 3 to 6 months of expenses in a savings account or FD before you invest anything beyond EPF.", bm: "Jangan laburkan tabung kecemasan anda: simpan 3 hingga 6 bulan perbelanjaan dalam akaun simpanan atau FD sebelum anda melabur apa-apa di luar EPF.", zh: "不要把紧急备用金拿去投资：在 EPF 以外投资之前，先在储蓄账户或定期存款里保留 3 至 6 个月的支出。" },
    ],
    story: { en: "Izzatul graduated at 23 and started her first job at RM2,400 per month. She felt investing was for people who earned more. A friend showed her how to open an ASN account. She put in RM100 the first month, then set up RM150 per month auto-debit. By 27, she had invested RM7,200 total. Her ASN balance was RM8,650 — a gain of RM1,450 without doing anything after the setup. She then opened a unit trust account for longer-term growth.", bm: "Izzatul menamatkan pengajian pada usia 23 tahun dan memulakan pekerjaan pertamanya pada gaji RM2,400 sebulan. Dia merasakan pelaburan adalah untuk orang yang berpendapatan lebih. Seorang kawan menunjukkan kepadanya cara membuka akaun ASN. Dia masukkan RM100 pada bulan pertama, kemudian sediakan autodebit RM150 sebulan. Pada usia 27, dia telah melabur RM7,200 jumlah. Baki ASN beliau ialah RM8,650 — keuntungan RM1,450 tanpa membuat apa-apa selepas persediaan. Dia kemudian membuka akaun amanah saham untuk pertumbuhan jangka panjang.", zh: "Izzatul 23 岁毕业，第一份工作月薪 RM2,400。她觉得投资是收入更高的人才做的事。一个朋友教她开了 ASN 账户。第一个月存入 RM100，然后设置每月自动扣款 RM150。到 27 岁时，她共投入了 RM7,200。ASN 余额为 RM8,650——在设置完成后什么都没做，多了 RM1,450。之后她又开设了单位信托账户用于更长期的增长。" },
    source: ["Amanah Saham Nasional Berhad (ASNB) — asnb.com.my", "Securities Commission Malaysia — sc.com.my", "Employees Provident Fund Malaysia — kwsp.gov.my"],
    disclaimer: true,
  },
  {
    slug: "how-to-use-credit-card-wisely-malaysia",
    relatedSlugs: ["good-debt-vs-bad-debt", "how-to-start-investing-malaysia"],
    category: "finance",
    title: { en: "How to use a credit card wisely in Malaysia", bm: "Cara menggunakan kad kredit dengan bijak di Malaysia", zh: "信用卡怎么用才不亏——马来西亚打工族实用指南" },
    summary: { en: "A credit card is a free short-term loan and a rewards tool if you pay the full balance every month. It becomes a debt trap the moment you pay only the minimum — at 18% annual interest, balances grow faster than most people realise.", bm: "Kad kredit adalah pinjaman jangka pendek percuma dan alat ganjaran jika anda membayar baki penuh setiap bulan. Ia menjadi perangkap hutang apabila anda hanya membayar minimum — pada faedah tahunan 18%, baki berkembang lebih cepat daripada yang disedari oleh kebanyakan orang.", zh: "如果你每月全额还款，信用卡是一个免费的短期贷款工具和奖励系统。但一旦你只还最低还款额，它就变成了债务陷阱——以年利率 18% 复利，余额增长速度比大多数人意识到的快得多。" },
    why: { en: "Credit card debt is one of the most common financial traps for young Malaysians. The minimum payment feels manageable, but it is designed to keep you paying interest for years. On the other hand, people who pay in full every month effectively get a free 20 to 50 day loan, cashback, and points — without paying a cent in interest. The difference between these two groups is one habit: full payment every month.", bm: "Hutang kad kredit adalah salah satu perangkap kewangan yang paling biasa bagi anak muda Malaysia. Bayaran minimum terasa boleh diurus, tetapi ia direka untuk memastikan anda membayar faedah selama bertahun-tahun. Sebaliknya, orang yang membayar penuh setiap bulan secara berkesan mendapat pinjaman percuma 20 hingga 50 hari, cashback, dan mata — tanpa membayar satu sen pun dalam faedah. Perbezaan antara dua kumpulan ini adalah satu tabiat: bayaran penuh setiap bulan.", zh: "信用卡债务是马来西亚年轻人最常见的财务陷阱之一。最低还款额看起来负担得起，但它的设计就是让你持续支付多年的利息。另一方面，每月全额还款的人实际上获得了 20 至 50 天的免费贷款、现金回扣和积分——一分利息都不用付。这两类人的区别只有一个习惯：每月全额还款。" },
    what: { en: "Malaysian credit cards charge up to 18% per annum on outstanding balances, compounded daily. The minimum payment is typically 5% of the outstanding balance or RM50, whichever is higher. Paying only the minimum on a RM3,000 balance at 18% annual interest will take over 8 years to clear and cost more than RM2,000 in interest. Used correctly, credit cards offer: cashback of 0.2% to 5% on spending categories; rewards points redeemable for air miles, vouchers, or merchandise; purchase protection and extended warranty; free travel insurance on certain cards. The golden rule: never charge more than you can pay in full at the end of the month.", bm: "Kad kredit Malaysia mengenakan sehingga 18% setahun atas baki yang belum dijelaskan, dikompaun harian. Bayaran minimum biasanya 5% daripada baki belum dijelaskan atau RM50, yang mana lebih tinggi. Membayar hanya minimum atas baki RM3,000 pada faedah tahunan 18% akan mengambil masa lebih 8 tahun untuk diselesaikan dan kos lebih daripada RM2,000 dalam faedah. Digunakan dengan betul, kad kredit menawarkan: cashback 0.2% hingga 5% pada kategori perbelanjaan; mata ganjaran yang boleh ditebus untuk batu penerbangan, baucar, atau barangan; perlindungan pembelian dan waranti lanjutan; insurans perjalanan percuma pada kad tertentu. Peraturan emas: jangan cas lebih daripada yang anda boleh bayar penuh pada akhir bulan.", zh: "马来西亚信用卡对未偿余额收取最高 18% 的年利率，按日复利计算。最低还款额通常是未偿余额的 5% 或 RM50，以较高者为准。以 18% 年利率对 RM3,000 余额只还最低还款额，需要超过 8 年才能还清，利息超过 RM2,000。正确使用时，信用卡提供：消费类别 0.2% 至 5% 的现金回扣；可兑换里程、代金券或商品的奖励积分；购物保障和延长保修；某些卡提供免费旅游保险。黄金法则：绝对不要刷超过月底能全额还款的金额。" },
    comparison: [
      { ordinary: { en: "I pay the minimum every month. At least I am not missing the payment.", bm: "Saya bayar minimum setiap bulan. Sekurang-kurangnya saya tidak terlepas bayaran.", zh: "我每月还最低还款额，至少没有漏还。" }, successful: { en: "Minimum payment means I am renting my own debt at 18% per year. I pay the full statement balance every month without exception.", bm: "Bayaran minimum bermaksud saya menyewa hutang saya sendiri pada 18% setahun. Saya membayar baki penyata penuh setiap bulan tanpa pengecualian.", zh: "只还最低还款额意味着我在以 18% 的年利率租用自己的债务。我每月毫无例外地全额还清账单余额。" } },
      { ordinary: { en: "I do not use a credit card because I am afraid of going into debt.", bm: "Saya tidak guna kad kredit kerana saya takut terjebak dalam hutang.", zh: "我不用信用卡，因为害怕负债。" }, successful: { en: "A credit card used within my means builds credit history and earns me cashback on spending I would do anyway. The risk is in the behaviour, not the card.", bm: "Kad kredit yang digunakan dalam kemampuan saya membina sejarah kredit dan membolehkan saya mendapat cashback pada perbelanjaan yang akan saya lakukan juga. Risikonya adalah dalam tingkah laku, bukan kad.", zh: "在能力范围内使用信用卡能建立信用记录，并在我本来就会花的消费上获得现金回扣。风险在于行为，不在于卡本身。" } },
    ],
    action: [
      { en: "Set up auto full payment: link your credit card to your bank account and set up automatic full statement balance payment every month. You will never pay interest if the money is there.", bm: "Sediakan bayaran penuh automatik: hubungkan kad kredit anda dengan akaun bank anda dan sediakan bayaran automatik baki penyata penuh setiap bulan. Anda tidak akan pernah membayar faedah jika wangnya ada.", zh: "设置自动全额还款：将信用卡与银行账户关联，设置每月自动全额还款。只要钱在那里，你就永远不会付利息。" },
      { en: "Pick a card that matches your spending: if you spend most on groceries and petrol, a cashback card beats a travel miles card for your lifestyle.", bm: "Pilih kad yang sepadan dengan perbelanjaan anda: jika anda membelanjakan paling banyak untuk bahan makanan dan petrol, kad cashback mengalahkan kad batu penerbangan untuk gaya hidup anda.", zh: "选择符合你消费习惯的卡：如果你主要花在杂货和汽油上，现金回扣卡比里程卡更适合你的生活方式。" },
      { en: "If you already have credit card debt: stop using the card for new spending. Pay as much above the minimum as you can. A RM3,000 balance cleared in 6 months saves you over RM1,500 in interest compared to minimum payments.", bm: "Jika anda sudah mempunyai hutang kad kredit: berhenti menggunakan kad untuk perbelanjaan baru. Bayar sebanyak mungkin melebihi minimum yang anda mampu. Baki RM3,000 yang diselesaikan dalam 6 bulan menjimatkan anda lebih daripada RM1,500 dalam faedah berbanding bayaran minimum.", zh: "如果你已经有信用卡债务：停止用这张卡进行新消费。尽可能多还超过最低还款额的部分。6 个月内还清 RM3,000 余额，比只还最低还款额节省超过 RM1,500 的利息。" },
    ],
    story: { en: "Kevin had three credit cards and RM8,500 in total outstanding balance, paying minimum on all three. He calculated the total interest he would pay over five years: RM6,200. He cut two cards, kept the one with the best cashback, and channelled every spare ringgit into paying down the balance. It took 14 months to clear. He now uses the remaining card for all daily spending, pays in full every month, and earns roughly RM400 per year in cashback.", bm: "Kevin mempunyai tiga kad kredit dan RM8,500 dalam jumlah baki belum dijelaskan, membayar minimum pada ketiga-tiganya. Dia mengira jumlah faedah yang akan dia bayar selama lima tahun: RM6,200. Dia potong dua kad, simpan yang mempunyai cashback terbaik, dan alihkan setiap ringgit lebihan untuk membayar baki. Ia mengambil masa 14 bulan untuk diselesaikan. Dia kini menggunakan kad yang tinggal untuk semua perbelanjaan harian, membayar penuh setiap bulan, dan memperoleh kira-kira RM400 setahun dalam cashback.", zh: "Kevin 持有三张信用卡，总未偿余额 RM8,500，三张都只还最低还款额。他算了一下五年内会付的总利息：RM6,200。他注销了两张卡，留下现金回扣最好的那张，把每一分多余的钱都用来还款。花了 14 个月全部还清。现在他用剩下那张卡支付所有日常消费，每月全额还款，每年赚到约 RM400 的现金回扣。" },
    source: ["Bank Negara Malaysia — bnm.gov.my/credit-cards", "Credit Counselling and Debt Management Agency Malaysia (AKPK) — akpk.org.my"],
    disclaimer: true,
  },
  {
    slug: "7-habits-highly-effective-people",
    relatedSlugs: ["atomic-habits-lessons-malaysia", "almanack-naval-ravikant"],
    category: "mindset",
    title: { en: "The 7 Habits of Highly Effective People — key lessons for Malaysians", bm: "7 Tabiat Orang Yang Sangat Berkesan — pengajaran utama untuk rakyat Malaysia", zh: "高效人士的7个习惯——对马来西亚人最有用的核心启示" },
    summary: { en: "Stephen Covey's 7 Habits teaches that effectiveness starts from character, not technique. The habits move from personal independence to productive interdependence — a shift most people never make.", bm: "7 Tabiat Stephen Covey mengajar bahawa keberkesanan bermula dari karakter, bukan teknik. Tabiat-tabiat ini bergerak dari kebebasan peribadi kepada saling kebergantungan yang produktif — peralihan yang kebanyakan orang tidak pernah buat.", zh: "史蒂芬·柯维的《7个习惯》教导我们：高效能来自品格，不是技巧。这7个习惯从个人独立走向高效协作——这是大多数人从未完成的转变。" },
    why: { en: "Most productivity advice tells you what to do. Covey asks who you are becoming. A person with strong character and clear principles makes better decisions, builds better relationships, and recovers faster from setbacks. For Malaysians navigating career pressure, family expectations, and financial stress, these habits offer a framework that works across all three.", bm: "Kebanyakan nasihat produktiviti memberitahu anda apa yang perlu dilakukan. Covey bertanya siapa yang anda sedang jadi. Seseorang dengan karakter yang kuat dan prinsip yang jelas membuat keputusan yang lebih baik, membina hubungan yang lebih baik, dan pulih lebih cepat daripada kemunduran. Bagi rakyat Malaysia yang mengharungi tekanan kerjaya, jangkaan keluarga, dan tekanan kewangan, tabiat ini menawarkan rangka kerja yang berfungsi untuk ketiga-tiganya.", zh: "大多数效率建议告诉你该做什么。柯维问的是你正在成为什么样的人。一个品格坚强、原则清晰的人做出更好的决定，建立更好的关系，并从挫折中更快恢复。对于应对职场压力、家庭期望和财务压力的马来西亚人来说，这7个习惯提供了一个在三个方面都有效的框架。" },
    what: { en: "The 7 habits are: 1. Be Proactive — take responsibility for your responses. 2. Begin with the End in Mind — define success before starting. 3. Put First Things First — prioritise important, non-urgent work. 4. Think Win-Win. 5. Seek First to Understand, Then to Be Understood. 6. Synergize. 7. Sharpen the Saw — renew physical, mental, social, and spiritual health. Habits 1–3 are private victories, 4–6 are public victories, and 7 is ongoing renewal.", bm: "7 tabiat tersebut ialah: 1. Bersikap Proaktif — bertanggungjawab atas tindak balas anda. 2. Mulakan Dengan Matlamat Akhir — tentukan kejayaan sebelum bermula. 3. Dahulukan Yang Utama — utamakan kerja penting tetapi tidak mendesak. 4. Fikir Menang-Menang. 5. Fahami Dahulu Baru Difahami. 6. Sinergi. 7. Asah Gergaji — perbaharui kesihatan fizikal, mental, sosial, dan rohani. Tabiat 1–3 ialah kemenangan peribadi, 4–6 kemenangan awam, dan 7 pembaharuan berterusan.", zh: "7个习惯是：1. 积极主动——为自己的回应负责。2. 以终为始——在开始前定义成功。3. 要事第一——优先处理重要但不紧急的事情。4. 双赢思维。5. 先理解后被理解。6. 统合综效。7. 不断更新——更新身体、心智、社交和精神健康。习惯1–3是个人成功，4–6是公众成功，7是持续更新。" },
    comparison: [
      { ordinary: { en: "My boss is the reason I cannot grow in this job.", bm: "Bos saya adalah sebab saya tidak boleh berkembang dalam kerja ini.", zh: "我在这份工作里无法成长，都是老板的问题。" }, successful: { en: "I control my response to every situation. I focus on what I can influence, not what I cannot.", bm: "Saya mengawal tindak balas saya terhadap setiap situasi. Saya fokus pada apa yang boleh saya pengaruhi, bukan yang tidak boleh.", zh: "我能控制的是我对每种情况的回应方式。我专注于能影响的事，而不是不能改变的事。" } },
      { ordinary: { en: "I am always busy but never feel like I am making progress.", bm: "Saya sentiasa sibuk tetapi tidak pernah rasa seperti sedang membuat kemajuan.", zh: "我一直很忙，但从不觉得自己在进步。" }, successful: { en: "Busy is not productive. I schedule time for important work before urgent tasks crowd it out.", bm: "Sibuk bukan bermakna produktif. Saya jadualkan masa untuk kerja penting sebelum tugas mendesak menggantikannya.", zh: "忙碌不等于高效。我在紧急任务挤掉之前，先为重要的工作安排时间。" } },
    ],
    action: [
      { en: "Identify your Circle of Influence: list the top three problems in your life, mark the ones you can affect, and focus your energy there.", bm: "Kenal pasti Lingkaran Pengaruh anda: senaraikan tiga masalah utama dalam hidup anda, tandakan yang boleh anda pengaruhi, dan fokuskan tenaga di situ.", zh: "找出你的影响圈：列出生活中三个主要问题，标记你能影响的，并把精力集中在那里。" },
      { en: "Write a one-paragraph personal mission statement and review it monthly.", bm: "Tulis pernyataan misi peribadi satu perenggan dan semak setiap bulan.", zh: "写下一段个人使命宣言，并每月回顾。" },
      { en: "In your next three conversations, listen until the other person feels understood before sharing your own view.", bm: "Dalam tiga perbualan seterusnya, dengar sehingga orang lain rasa difahami sebelum berkongsi pandangan anda.", zh: "在接下来的三次对话中，先倾听到对方感到被理解，再分享你的看法。" },
    ],
    story: { en: "Faridah was a team lead who kept losing her best people. After learning Habit 5, she realised she was preparing answers rather than listening in one-on-ones. She changed her approach. Within three months, two team members who had planned to resign said they were staying.", bm: "Faridah ialah ketua pasukan yang terus kehilangan orang terbaiknya. Selepas belajar Tabiat 5, dia sedar dia menyediakan jawapan dan bukan mendengar dalam sesi satu dengan satu. Dia mengubah pendekatannya. Dalam tiga bulan, dua ahli pasukan yang merancang untuk berhenti berkata mereka akan kekal.", zh: "Faridah 是一位一直失去优秀员工的团队负责人。学习习惯5后，她发现自己在一对一会面中是在准备回答，而非倾听。她改变了方式。三个月内，两位原本打算辞职的团队成员说他们会留下。" },
    source: ["Stephen R. Covey, The 7 Habits of Highly Effective People (1989)"],
    disclaimer: false,
  },
  {
    slug: "rich-dad-poor-dad-lessons",
    relatedSlugs: ["how-to-escape-rat-race", "what-is-compound-interest"],
    category: "mindset",
    title: { en: "Rich Dad Poor Dad — the core lessons and what they mean for Malaysians", bm: "Ayah Kaya Ayah Miskin — pengajaran teras dan maknanya untuk rakyat Malaysia", zh: "穷爸爸富爸爸——核心启示与对马来西亚人的意义" },
    summary: { en: "Robert Kiyosaki's Rich Dad Poor Dad teaches one central idea: the rich buy assets, while the poor and middle class often buy liabilities they think are assets.", bm: "Rich Dad Poor Dad Robert Kiyosaki mengajar satu idea utama: orang kaya membeli aset, manakala orang miskin dan kelas pertengahan sering membeli liabiliti yang mereka sangka aset.", zh: "罗伯特·清崎的《穷爸爸富爸爸》教导一个核心理念：富人购买资产，穷人和中产阶级常购买他们以为是资产的负债。" },
    why: { en: "Many Malaysians were taught to study hard, get a good job, buy a house, and save. Kiyosaki challenges that formula: working for money alone can keep people in the rat race. Even if you do not agree with every investment view in the book, its asset-versus-liability framework changes how you see financial decisions.", bm: "Ramai rakyat Malaysia diajar untuk belajar bersungguh-sungguh, dapat kerja yang baik, beli rumah, dan simpan wang. Kiyosaki mencabar formula itu: bekerja untuk wang sahaja boleh mengekalkan orang dalam perangkap tikus. Walaupun anda tidak bersetuju dengan setiap pandangan pelaburan buku ini, rangka kerja aset berbanding liabiliti mengubah cara anda melihat keputusan kewangan.", zh: "许多马来西亚人被教导努力学习、找好工作、买房和存钱。清崎挑战这个公式：单靠为钱工作会让人留在老鼠圈。即使你不同意书中每一个投资观点，资产与负债的框架也会改变你看待财务决策的方式。" },
    what: { en: "An asset puts money into your pocket: rental income, dividends, business profits, or royalties. A liability takes money out: mortgage payments, car loans, and credit-card interest. A home is not automatically an asset in cash-flow terms if it costs you money without generating income. The goal is to build assets until passive income exceeds expenses. In Malaysia, EPF, ASB, unit trusts, REITs, and income-producing businesses can be part of an asset-building plan.", bm: "Aset memasukkan wang ke dalam poket anda: pendapatan sewa, dividen, keuntungan perniagaan, atau royalti. Liabiliti mengeluarkan wang: bayaran gadai janji, pinjaman kereta, dan faedah kad kredit. Rumah tidak automatik menjadi aset dari segi aliran tunai jika ia menelan belanja tanpa menjana pendapatan. Matlamatnya ialah membina aset sehingga pendapatan pasif melebihi perbelanjaan. Di Malaysia, EPF, ASB, amanah saham, REIT, dan perniagaan yang menjana pendapatan boleh menjadi sebahagian pelan aset.", zh: "资产把钱放进你的口袋：租金收入、股息、商业利润或版税。负债把钱拿走：房贷、车贷和信用卡利息。如果房子不产生收入却持续花钱，从现金流角度它并不自动是资产。目标是建立资产，直到被动收入超过支出。在马来西亚，EPF、ASB、单位信托、REIT 和创收生意都可以成为资产建设计划的一部分。" },
    comparison: [
      { ordinary: { en: "My house is my biggest asset.", bm: "Rumah saya adalah aset terbesar saya.", zh: "我的房子是我最大的资产。" }, successful: { en: "My home is where I live and costs money each month. My assets are investments, rental income, and business equity that pay me.", bm: "Rumah saya tempat tinggal dan menelan belanja setiap bulan. Aset saya ialah pelaburan, pendapatan sewa, dan ekuiti perniagaan yang membayar saya.", zh: "我的房子是住的地方，每月花钱。我的资产是能给我带来收入的投资、租金和商业权益。" } },
      { ordinary: { en: "I work hard and save salary. That is how I build wealth.", bm: "Saya bekerja keras dan simpan gaji. Itulah cara saya membina kekayaan.", zh: "我努力工作、存下薪水，这样就能建立财富。" }, successful: { en: "Saving grows linearly. I save in order to invest in assets that can compound.", bm: "Simpanan berkembang secara linear. Saya menyimpan untuk melabur dalam aset yang boleh bergabung.", zh: "储蓄是线性增长。我存钱是为了投资能复利的资产。" } },
    ],
    action: [
      { en: "List everything you own: does it put money in your pocket each month or take it out? Be honest about your car, home, and savings.", bm: "Senaraikan semua yang anda miliki: adakah ia memasukkan wang ke poket setiap bulan atau mengeluarkannya? Jujurlah tentang kereta, rumah, dan simpanan anda.", zh: "列出你拥有的一切：它每月把钱放进口袋还是拿走？诚实评估你的车、房子和储蓄。" },
      { en: "Set one asset-acquisition goal this year, such as an ASB top-up, unit trust account, or a skill that generates freelance income.", bm: "Tetapkan satu matlamat pemerolehan aset tahun ini, seperti tambahan ASB, akaun amanah saham, atau kemahiran yang menjana pendapatan bebas.", zh: "为今年设一个资产获取目标，例如追加 ASB、开单位信托账户，或学习能创造自由职业收入的技能。" },
      { en: "Read critically: take the asset/liability framework, but apply your own judgment to Kiyosaki's investment tactics.", bm: "Baca secara kritis: ambil rangka kerja aset/liabiliti, tetapi gunakan pertimbangan sendiri untuk taktik pelaburan Kiyosaki.", zh: "批判性地阅读：取其资产/负债框架，但对清崎的投资策略运用自己的判断。" },
    ],
    story: { en: "Wen Jie read the book at 24 and bought a car on loan, thinking it was an asset. At 26, he saw it was costing RM650 monthly in loan, insurance, and petrol with no income return. He kept the car but redirected RM300 monthly into a unit trust. By 30, the fund was worth more than the car's remaining loan balance.", bm: "Wen Jie membaca buku itu pada 24 dan membeli kereta dengan pinjaman, menyangka ia aset. Pada 26, dia nampak ia menelan RM650 sebulan dalam pinjaman, insurans, dan petrol tanpa pulangan pendapatan. Dia kekalkan kereta tetapi mengalihkan RM300 sebulan ke amanah saham. Menjelang 30, dana itu bernilai lebih daripada baki pinjaman kereta.", zh: "文杰24岁读完这本书后贷款买车，以为那是资产。26岁时他发现车贷、保险和汽油每月花 RM650，没有收入回报。他保留车，却每月把 RM300 转入单位信托。30岁时，基金价值已超过车贷剩余余额。" },
    source: ["Robert T. Kiyosaki, Rich Dad Poor Dad (1997)"],
    disclaimer: false,
  },
  {
    slug: "atomic-habits-lessons-malaysia",
    relatedSlugs: ["7-habits-highly-effective-people", "50-30-20-budgeting-rule"],
    category: "mindset",
    title: { en: "Atomic Habits — how tiny changes produce remarkable results", bm: "Tabiat Atom — bagaimana perubahan kecil menghasilkan keputusan yang luar biasa", zh: "原子习惯——微小改变如何产生非凡结果" },
    summary: { en: "James Clear's Atomic Habits argues that lasting change comes from designing your environment and identity, not relying on motivation or willpower.", bm: "Atomic Habits James Clear berhujah bahawa perubahan kekal datang daripada mereka bentuk persekitaran dan identiti, bukan bergantung pada motivasi atau kehendak.", zh: "詹姆斯·克利尔的《原子习惯》认为，持久改变来自设计环境和身份认同，而不是依赖动力或意志力。" },
    why: { en: "Most people set big goals, feel motivated for a week, then return to old patterns. Clear shows that behaviour is shaped by environment and identity. This matters for saving, investing, and avoiding impulse spending: repeated small decisions compound into large outcomes.", bm: "Kebanyakan orang menetapkan matlamat besar, berasa bermotivasi selama seminggu, kemudian kembali kepada corak lama. Clear menunjukkan tingkah laku dibentuk oleh persekitaran dan identiti. Ini penting untuk menyimpan, melabur, dan mengelakkan belanja impulsif: keputusan kecil yang berulang bergabung menjadi hasil besar.", zh: "大多数人设下宏大目标，保持一周动力后回到旧模式。克利尔指出，行为受环境和身份认同塑造。这对储蓄、投资和避免冲动消费很重要：重复的小决定会复利成大结果。" },
    what: { en: "The four laws are: make it obvious, attractive, easy, and satisfying. To break a bad habit, invert them: invisible, unattractive, difficult, and unsatisfying. The 1% rule shows small daily gains compound. Identity-based habits change 'I want to save money' into 'I am someone who pays myself first.' Every action is a vote for the identity you want.", bm: "Empat undang-undang ialah: jadikan jelas, menarik, mudah, dan memuaskan. Untuk memecahkan tabiat buruk, terbalikkannya: tidak kelihatan, tidak menarik, sukar, dan tidak memuaskan. Peraturan 1% menunjukkan keuntungan kecil harian bergabung. Tabiat berasaskan identiti menukar 'Saya mahu simpan wang' kepada 'Saya seorang yang bayar diri sendiri dahulu.' Setiap tindakan ialah undi untuk identiti yang anda mahu.", zh: "四个定律是：让它显而易见、有吸引力、简单易行、令人满足。要戒除坏习惯就反转它们：不易察觉、缺乏吸引力、难以执行、令人不满意。1%法则说明每日微小进步会复利。基于身份的习惯把「我想存钱」变成「我是先给自己付薪的人」。每个行动都在为你想成为的身份投票。" },
    comparison: [
      { ordinary: { en: "I start new habits but never stick to them past two weeks.", bm: "Saya memulakan tabiat baru tetapi tidak pernah kekal lebih daripada dua minggu.", zh: "我开始新习惯，但从来坚持不过两周。" }, successful: { en: "I design my environment first. When a habit is automatic, I do not need willpower to maintain it.", bm: "Saya reka bentuk persekitaran dahulu. Apabila tabiat automatik, saya tidak perlukan kehendak untuk mengekalkannya.", zh: "我先设计环境。习惯自动化后，就不需要意志力维持。" } },
      { ordinary: { en: "I set a goal to save RM500 a month but fail by week three.", bm: "Saya menetapkan matlamat simpan RM500 sebulan tetapi gagal pada minggu ketiga.", zh: "我设定每月存 RM500，但总在第三周失败。" }, successful: { en: "RM500 auto-transfers on payday before I see it. The habit needs no repeated decision.", bm: "RM500 dipindahkan secara automatik pada hari gaji sebelum saya melihatnya. Tabiat itu tidak memerlukan keputusan berulang.", zh: "发薪日 RM500 在我看到前就自动转走。这个习惯不需要反复做决定。" } },
    ],
    action: [
      { en: "Habit-stack a financial action: after receiving your payslip, immediately transfer RM200 to savings.", bm: "Susun tabiat kewangan: selepas menerima slip gaji, terus pindahkan RM200 ke simpanan.", zh: "叠加一个财务习惯：收到工资单后，立即转 RM200 到储蓄。" },
      { en: "Reduce friction: keep your investment app on the home screen and your credit card in a drawer, not your wallet.", bm: "Kurangkan geseran: letakkan apl pelaburan di skrin utama dan kad kredit dalam laci, bukan dompet.", zh: "减少阻力：把投资应用放主屏幕，信用卡放抽屉而非钱包。" },
      { en: "Never miss twice. One missed day is a mistake; two can become a new pattern.", bm: "Jangan terlepas dua kali. Satu hari terlepas ialah kesilapan; dua hari boleh menjadi corak baharu.", zh: "永远不要错过两次。错过一天是失误，两天可能变成新模式。" },
    ],
    story: { en: "Hazwan wanted to exercise every morning but kept failing. He slept in workout clothes, put shoes by the door, and allowed a favourite breakfast only after running. By month three he had not missed a week. He used the same system for investing: auto-debit on payday and a monthly portfolio check.", bm: "Hazwan mahu bersenam setiap pagi tetapi terus gagal. Dia tidur dengan pakaian senaman, meletakkan kasut di pintu, dan membenarkan sarapan kegemaran hanya selepas berlari. Menjelang bulan ketiga dia tidak terlepas seminggu. Dia menggunakan sistem sama untuk pelaburan: autodebit hari gaji dan semakan portfolio bulanan.", zh: "Hazwan 想每天晨练却总是失败。他穿着运动服睡觉，把跑鞋放门口，只在跑完后吃喜欢的早餐。第三个月他没有错过一周。他把同样系统用于投资：发薪日自动扣款，每月查看投资组合。" },
    source: ["James Clear, Atomic Habits (2018)", "jamesclear.com"],
    disclaimer: false,
  },
  {
    slug: "almanack-naval-ravikant",
    relatedSlugs: ["poor-charlies-almanack-lessons", "rich-dad-poor-dad-lessons"],
    category: "mindset",
    title: { en: "The Almanack of Naval Ravikant — wealth, happiness, and specific knowledge", bm: "Almanac Naval Ravikant — kekayaan, kebahagiaan, dan pengetahuan spesifik", zh: "纳瓦尔宝典——财富、幸福与专属知识" },
    summary: { en: "Naval Ravikant's collected wisdom teaches that wealth comes from specific knowledge, accountability, and leverage — not simply trading time for money.", bm: "Kebijaksanaan terkumpul Naval Ravikant mengajar bahawa kekayaan datang daripada pengetahuan spesifik, akauntabiliti, dan leverage — bukan sekadar menukar masa dengan wang.", zh: "纳瓦尔·拉维坎特的智慧集锦教导：财富来自专属知识、承担责任和杠杆，而不是单纯用时间换钱。" },
    why: { en: "Naval's framework cuts through noise about wealth. It is about building rare, valuable knowledge, taking accountability under your own name, and using labour, capital, code, or media to multiply output. For young Malaysians entering an AI-shaped market, building specific knowledge may matter more than choosing the perfect degree.", bm: "Rangka kerja Naval menembusi bunyi bising tentang kekayaan. Ia tentang membina pengetahuan yang jarang dan berharga, mengambil akauntabiliti atas nama sendiri, dan menggunakan tenaga kerja, modal, kod, atau media untuk melipatgandakan output. Bagi anak muda Malaysia dalam pasaran yang dibentuk AI, membina pengetahuan spesifik mungkin lebih penting daripada memilih ijazah sempurna.", zh: "纳瓦尔的框架穿透了财富噪音：建立稀缺且有价值的知识，以自己名义承担责任，并利用劳力、资本、代码或媒体放大产出。对进入 AI 重塑市场的马来西亚年轻人，建立专属知识可能比选到完美学位更重要。" },
    what: { en: "Specific knowledge combines genuine curiosity, unique experience, and natural talent; it feels like play to you and work to others. Accountability means taking risks under your own name. Leverage has three forms: labour, capital, and permissionless leverage such as code and media. Wealth is assets that generate income while you sleep; status is a zero-sum game. Pursue wealth, not status.", bm: "Pengetahuan spesifik menggabungkan rasa ingin tahu tulen, pengalaman unik, dan bakat semula jadi; ia terasa seperti permainan untuk anda dan kerja untuk orang lain. Akauntabiliti bermaksud mengambil risiko atas nama sendiri. Leverage ada tiga bentuk: tenaga kerja, modal, dan leverage tanpa kebenaran seperti kod dan media. Kekayaan ialah aset yang menjana pendapatan semasa anda tidur; status ialah permainan sifar jumlah. Kejarlah kekayaan, bukan status.", zh: "专属知识结合真正的好奇心、独特经历和天赋；对你像游戏，对他人像工作。承担责任是以自己的名义冒险。杠杆有三种：劳动力、资本和无需许可的杠杆，如代码与媒体。财富是在睡觉时创收的资产；地位是零和游戏。追求财富，而非地位。" },
    comparison: [
      { ordinary: { en: "I need a high-paying job to become wealthy.", bm: "Saya perlu kerja bergaji tinggi untuk menjadi kaya.", zh: "我需要一份高薪工作才能富有。" }, successful: { en: "A high salary rents my time at a premium. Wealth comes from owning equity in something that creates value without my constant time.", bm: "Gaji tinggi menyewa masa saya pada kadar premium. Kekayaan datang daripada memiliki ekuiti dalam sesuatu yang mencipta nilai tanpa masa berterusan saya.", zh: "高薪只是高价出租时间。财富来自拥有某样能在不持续投入时间下创造价值的权益。" } },
      { ordinary: { en: "I am average and have no special skills.", bm: "Saya biasa sahaja dan tiada kemahiran khas.", zh: "我很普通，没有特别技能。" }, successful: { en: "Specific knowledge sits where my curiosity, ability, and market value meet. I build at that intersection.", bm: "Pengetahuan spesifik berada di tempat rasa ingin tahu, kebolehan, dan nilai pasaran saya bertemu. Saya membina di persimpangan itu.", zh: "专属知识在好奇心、能力和市场价值的交汇处。我在那个交汇处建立优势。" } },
    ],
    action: [
      { en: "Identify what you know that people around you do not, or what feels obvious to you but confuses others.", bm: "Kenal pasti apa yang anda tahu tetapi orang sekeliling tidak tahu, atau yang terasa jelas untuk anda tetapi mengelirukan orang lain.", zh: "找出你知道而身边人不知道的事，或对你显而易见却让别人困惑的事。" },
      { en: "Build permissionless leverage: write an article, record a video, or make a tool based on that knowledge.", bm: "Bina leverage tanpa kebenaran: tulis artikel, rakam video, atau bina alat berdasarkan pengetahuan itu.", zh: "建立无需许可的杠杆：基于该知识写文章、录视频或做工具。" },
      { en: "Read the free full almanack at navalmanack.com and decide which idea you can practise this month.", bm: "Baca almanac penuh percuma di navalmanack.com dan tentukan idea yang boleh anda amalkan bulan ini.", zh: "在 navalmanack.com 阅读免费完整版，并选一个本月实践的想法。" },
    ],
    story: { en: "Kai Xiang worked in HR and spent three years learning employment law because he found it fascinating. He started a Telegram channel explaining Malaysian labour law in plain language. Within a year it had 8,000 subscribers, and companies hired him for HR consulting at RM250 an hour.", bm: "Kai Xiang bekerja dalam HR dan menghabiskan tiga tahun mempelajari undang-undang pekerjaan kerana dia mendapati ia menarik. Dia memulakan saluran Telegram menerangkan undang-undang buruh Malaysia dengan bahasa mudah. Dalam setahun ia mempunyai 8,000 pelanggan, dan syarikat mengupahnya untuk perundingan HR pada RM250 sejam.", zh: "Kai Xiang 从事人力资源工作，因兴趣花了三年学习劳动法。他开了一个用通俗语言解释马来西亚劳动法的 Telegram 频道。一年内有8000名订阅者，公司开始以每小时 RM250 聘请他做人力资源顾问。" },
    source: ["Eric Jorgenson, The Almanack of Naval Ravikant (2020)", "navalmanack.com (free)"],
    disclaimer: false,
  },
  {
    slug: "poor-charlies-almanack-lessons",
    relatedSlugs: ["almanack-naval-ravikant", "7-habits-highly-effective-people"],
    category: "mindset",
    title: { en: "Poor Charlie's Almanack — mental models for better decisions", bm: "Almanac Charlie yang Miskin — model mental untuk keputusan yang lebih baik", zh: "穷查理宝典——做出更好决策的心智模型" },
    summary: { en: "Charlie Munger's wisdom teaches that better decisions come from multiple mental models, inversion, and avoiding the biases behind many financial and life mistakes.", bm: "Kebijaksanaan Charlie Munger mengajar bahawa keputusan lebih baik datang daripada pelbagai model mental, penyongsangan, dan mengelakkan berat sebelah di sebalik banyak kesilapan kewangan dan hidup.", zh: "查理·芒格的智慧教导：更好的决策来自多种心智模型、逆向思考，以及避免造成众多财务与生活错误的偏见。" },
    why: { en: "Munger's core insight is that one-tool thinking creates expensive blind spots. He learned major ideas from psychology, economics, mathematics, biology, and physics, then combined them into a latticework of mental models. For Malaysians deciding about property, insurance, investments, or careers, more than one model prevents tunnel vision.", bm: "Wawasan utama Munger ialah pemikiran satu alat mencipta titik buta yang mahal. Dia mempelajari idea besar daripada psikologi, ekonomi, matematik, biologi, dan fizik, lalu menggabungkannya menjadi jaringan model mental. Bagi rakyat Malaysia yang membuat keputusan tentang hartanah, insurans, pelaburan, atau kerjaya, lebih daripada satu model mengelakkan penglihatan terowong.", zh: "芒格的核心洞见是单一工具思维会造成昂贵盲点。他从心理学、经济学、数学、生物学和物理学学习重要思想，并组合成心智模型网格。对决定房产、保险、投资或职业的马来西亚人，多个模型能避免管中窥豹。" },
    what: { en: "Three useful models: inversion asks what would guarantee failure, then avoids it; circle of competence means knowing what you know and do not know; availability bias is our tendency to overweight vivid, recent information. Recognising these models creates a pause before an expensive decision.", bm: "Tiga model berguna: penyongsangan bertanya apa yang menjamin kegagalan lalu mengelakkannya; bulatan kecekapan bermaksud mengetahui apa yang anda tahu dan tidak tahu; berat sebelah ketersediaan ialah kecenderungan memberi terlalu banyak berat kepada maklumat jelas dan terkini. Mengenali model ini mencipta jeda sebelum keputusan mahal.", zh: "三个实用模型：逆向思考问什么会保证失败，然后避开；能力圈是知道自己懂什么、不懂什么；可得性偏差是过度重视生动且近期信息。认识这些模型会在昂贵决策前创造停顿。" },
    comparison: [
      { ordinary: { en: "Everyone is buying property now, so it must be a good investment.", bm: "Semua orang membeli hartanah sekarang, jadi mesti pelaburan yang baik.", zh: "现在大家都在买房，所以一定是好投资。" }, successful: { en: "I invert: what would make this terrible? High DSR, overleverage, illiquidity, or reliance on price growth. I check each one first.", bm: "Saya menyongsang: apa yang menjadikan ini teruk? DSR tinggi, leveraj berlebihan, tidak cair, atau bergantung pada kenaikan harga. Saya semak setiap satu dahulu.", zh: "我逆向思考：什么会让它很糟？高DSR、过度杠杆、流动性低或依赖价格上涨。先逐一检查。" } },
      { ordinary: { en: "I do not understand this investment, but my friend made a lot from it.", bm: "Saya tidak faham pelaburan ini, tetapi kawan saya mendapat banyak daripadanya.", zh: "我不懂这个投资，但朋友从中赚了很多。" }, successful: { en: "My friend's vivid result can trigger FOMO. I check my circle of competence first; FOMO is not a thesis.", bm: "Hasil jelas rakan saya boleh mencetus FOMO. Saya semak bulatan kecekapan dahulu; FOMO bukan tesis.", zh: "朋友生动的结果会引起 FOMO。我先检查能力圈；FOMO 不是论点。" } },
    ],
    action: [
      { en: "Use inversion for your next major loan, investment, or job decision: list failure modes before deciding.", bm: "Gunakan penyongsangan untuk keputusan pinjaman, pelaburan, atau kerja besar seterusnya: senaraikan mod kegagalan dahulu.", zh: "将逆向思考用于下一项贷款、投资或换工作决定：先列出失败模式。" },
      { en: "Write three domains where you have genuine knowledge. Learn first or seek expert advice outside them.", bm: "Tulis tiga domain di mana anda mempunyai pengetahuan tulen. Belajar dahulu atau dapatkan nasihat pakar di luar domain itu.", zh: "写下你真正懂的三个领域。超出这些领域先学习或寻求专家意见。" },
      { en: "Start with Poor Charlie's Almanack's chapter on human misjudgement for the most practical everyday lessons.", bm: "Mulakan dengan bab salah penilaian manusia dalam Poor Charlie's Almanack untuk pelajaran harian paling praktikal.", zh: "从《穷查理宝典》的人类误判章节开始，获得最实用的日常启示。" },
    ],
    story: { en: "Siti considered investing RM20,000 in a friend's F&B business. Using inversion, she found three failure modes in the proposal: high rent, limited operations experience, and reliance on one location. She passed; the business closed in eight months. She invested in a diversified unit trust she understood instead.", bm: "Siti mempertimbangkan melabur RM20,000 dalam perniagaan F&B rakan. Dengan penyongsangan, dia menemui tiga mod kegagalan: sewaan tinggi, pengalaman operasi terhad, dan bergantung pada satu lokasi. Dia tidak meneruskan; perniagaan ditutup dalam lapan bulan. Dia melabur dalam amanah saham pelbagai yang difahaminya.", zh: "Siti 考虑投资 RM20,000 给朋友的餐饮生意。用逆向思考，她发现提案有三个失败模式：租金高、运营经验有限、依赖单一地点。她没有投资；生意八个月后关闭。她转而投资自己理解的多元化单位信托。" },
    source: ["Peter Kaufman (ed.), Poor Charlie's Almanack (2005)", "Berkshire Hathaway Annual Letters — berkshirehathaway.com"],
    disclaimer: false,
  },
];

export function getArticlesByCategory(category: ArticleCategory) {
  return articles.filter((article) => article.category === category);
}

export function getArticle(category: ArticleCategory, slug: string) {
  return articles.find((article) => article.category === category && article.slug === slug);
}
