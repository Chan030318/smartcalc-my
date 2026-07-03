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
];

export function getArticlesByCategory(category: ArticleCategory) {
  return articles.filter((article) => article.category === category);
}

export function getArticle(category: ArticleCategory, slug: string) {
  return articles.find((article) => article.category === category && article.slug === slug);
}
