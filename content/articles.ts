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
];

export function getArticlesByCategory(category: ArticleCategory) {
  return articles.filter((article) => article.category === category);
}

export function getArticle(category: ArticleCategory, slug: string) {
  return articles.find((article) => article.category === category && article.slug === slug);
}
