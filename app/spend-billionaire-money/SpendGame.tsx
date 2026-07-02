"use client";

import { useState, useMemo, useCallback, useEffect } from "react";

// ─── Constants ────────────────────────────────────────────────────────────────

const USD_TO_MYR = 4.72;

// ─── Types ────────────────────────────────────────────────────────────────────

interface Billionaire {
  id: string;
  name: string;
  netWorthUSD: number;
  emoji: string;
  title: string;
  company: string;
  funFact: string;
  color: string;
}

interface ShopItem {
  id: string;
  emoji: string;
  name: string;
  desc: string;
  priceRM: number;
  category: string;
  dreamMessage: string;
  lifeImpact: string;
}

interface Achievement {
  id: string;
  emoji: string;
  title: string;
  desc: string;
  condition: (spent: number, cart: Record<string, number>) => boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const BILLIONAIRES: Billionaire[] = [
  { id: "musk",    name: "Elon Musk",       netWorthUSD: 320, emoji: "🚀", title: "CEO Tesla & SpaceX",    company: "Tesla / SpaceX / X",   color: "from-slate-800 to-slate-600",  funFact: "Earn lebih kurang RM 14 juta setiap JAM." },
  { id: "bezos",   name: "Jeff Bezos",      netWorthUSD: 215, emoji: "📦", title: "Founder Amazon",        company: "Amazon / Blue Origin",  color: "from-blue-800 to-blue-600",    funFact: "Amazon bermula menjual buku dari garaj." },
  { id: "zuck",    name: "Mark Zuckerberg", netWorthUSD: 190, emoji: "👓", title: "CEO Meta",              company: "Facebook / IG / WhatsApp", color: "from-blue-600 to-indigo-600", funFact: "Pakai baju kelabu sama setiap hari." },
  { id: "ellison", name: "Larry Ellison",   netWorthUSD: 175, emoji: "☁️", title: "Co-Founder Oracle",     company: "Oracle / Tesla Board",  color: "from-red-700 to-rose-600",     funFact: "Miliki hampir seluruh Pulau Lanai, Hawaii." },
  { id: "buffett", name: "Warren Buffett",  netWorthUSD: 145, emoji: "📈", title: "Oracle of Omaha",       company: "Berkshire Hathaway",    color: "from-emerald-800 to-green-600", funFact: "Masih tinggal di rumah beli RM 140k tahun 1958." },
  { id: "gates",   name: "Bill Gates",      netWorthUSD: 135, emoji: "💻", title: "Co-Founder Microsoft",  company: "Microsoft / Gates Foundation", color: "from-cyan-700 to-blue-600", funFact: "Boleh bayar hutang negara Malaysia." },
  { id: "arnault", name: "Bernard Arnault", netWorthUSD: 125, emoji: "👜", title: "Chairman LVMH",         company: "LV / Dior / Moet & Chandon", color: "from-purple-800 to-violet-600", funFact: "Kawal 75 jenama mewah sedunia." },
  { id: "page",    name: "Larry Page",      netWorthUSD: 135, emoji: "🔍", title: "Co-Founder Google",     company: "Alphabet / Google",     color: "from-yellow-600 to-amber-500", funFact: "Google bermula sebagai projek PhD di Stanford." },
  { id: "brin",    name: "Sergey Brin",     netWorthUSD: 125, emoji: "🌐", title: "Co-Founder Google",     company: "Alphabet / Google",     color: "from-green-700 to-teal-600",   funFact: "Miliki superyacht 12 tingkat bernilai RM 900 juta." },
  { id: "huang",   name: "Jensen Huang",    netWorthUSD: 105, emoji: "🎮", title: "CEO NVIDIA",            company: "NVIDIA",                color: "from-green-600 to-emerald-500", funFact: "Jaket kulit hitam sudah jadi trademark dia." },
];

const ITEMS: ShopItem[] = [
  // Impian Harian
  { id: "teh",        emoji: "🍵",  name: "Teh Tarik Seumur Hidup",  desc: "Setiap pagi, teh tarik terbaik menunggu kau",        priceRM: 5_000,          category: "Kehidupan",   dreamMessage: "Teh tarik premium setiap pagi sampai mati!", lifeImpact: "Kau dah tak payah buat teh sendiri lagi." },
  { id: "food",       emoji: "🍽️",  name: "Makan Best Setiap Hari",  desc: "Restoran fine dining atau hawker kegemaran, pilih je",priceRM: 50_000,         category: "Kehidupan",   dreamMessage: "Setiap makan adalah pengalaman!", lifeImpact: "Budget makan dah takde dalam kamus kau." },
  { id: "travel_1st", emoji: "✈️",  name: "First Class Seumur Hidup",desc: "Tak pernah lagi duduk economy untuk selama-lamanya",  priceRM: 500_000,        category: "Travel",      dreamMessage: "Welcome to First Class — permanently.", lifeImpact: "Kahwin pun honeymoon first class." },
  { id: "wardrobe",   emoji: "👔",  name: "Wardrobe Designer",       desc: "Gucci, LV, Hermes — setiap hari baju baru",          priceRM: 1_000_000,      category: "Kehidupan",   dreamMessage: "Walk-in wardrobe lebih besar dari rumah lama kau!", lifeImpact: "Sales assistant dah hafal nama kau." },
  // Rumah & Hartanah
  { id: "condo_kl",   emoji: "🏢",  name: "Kondominium KLCC (1BR)",  desc: "Bangun pagi tengok Twin Towers dari bilik tidur",     priceRM: 1_800_000,      category: "Rumah",       dreamMessage: "View KLCC setiap pagi — bukan screensaver lagi!", lifeImpact: "Adik beradik semua tanya bila nak housewarming." },
  { id: "bungalow",   emoji: "🏡",  name: "Banglo Damansara",        desc: "Pool, garden, 6 bilik tidur — untuk kau sorang",     priceRM: 8_000_000,      category: "Rumah",       dreamMessage: "Pool party setiap Sabtu di rumah SENDIRI!", lifeImpact: "Jiran-jiran mula buat muka manis." },
  { id: "penthouse",  emoji: "🌆",  name: "Penthouse KLCC",          desc: "Lantai 50-an, pemandangan 360 darjah Kuala Lumpur",  priceRM: 35_000_000,     category: "Rumah",       dreamMessage: "Kau tinggal DI ATAS bandar raya. Literally.", lifeImpact: "Instagram kau dah rasa macam hotel brochure." },
  { id: "villa_bali",  emoji: "🌴", name: "Villa Bali",              desc: "Private villa dengan kolam infinity, butler 24 jam",  priceRM: 15_000_000,     category: "Rumah",       dreamMessage: "Bali trip? Kau tak stay hotel — kau ada villa sendiri!", lifeImpact: "Cuti hujung tahun dah ada tempat tetap." },
  { id: "island",     emoji: "🏝️",  name: "Pulau Persendirian MY",   desc: "Pulau kau sendiri di Sabah atau Pahang",             priceRM: 150_000_000,    category: "Rumah",       dreamMessage: "TANAH BESAR KITA — err, pulau kecil tapi milik sendiri!", lifeImpact: "Kau boleh tukar nama pulau tu ikut nama kau." },
  { id: "mansion_us",  emoji: "🏰", name: "Mansion Beverly Hills",   desc: "8 bilik tidur, cinema hall, helipad",                priceRM: 120_000_000,    category: "Rumah",       dreamMessage: "Semua orang kenal alamat Beverly Hills.", lifeImpact: "Hollywood star jadi jiran kau." },
  // Kereta
  { id: "myvi",       emoji: "🚗",  name: "Perodua Myvi",            desc: "Beli untuk parents atau adik kau",                   priceRM: 52_000,         category: "Kereta",      dreamMessage: "Hadiahkan Myvi untuk orang tersayang!", lifeImpact: "Parents tak payah naik bas lagi." },
  { id: "x70",        emoji: "🚙",  name: "Proton X70 Fleet (10)",   desc: "Beli 10 biji, sorang satu dalam keluarga",           priceRM: 1_188_000,      category: "Kereta",      dreamMessage: "Seluruh family road trip dalam konvoi X70!", lifeImpact: "Sepupu sepapat semua teruja." },
  { id: "tesla",      emoji: "⚡",  name: "Tesla Model S Plaid",     desc: "0-100 dalam 2.1 saat. Cas free. Forever.",           priceRM: 650_000,        category: "Kereta",      dreamMessage: "Laju gila, senyap gila, cool gila.", lifeImpact: "Orang kat trafik light suka tengok kau." },
  { id: "ferrari",    emoji: "🏎️",  name: "Ferrari SF90 Stradale",  desc: "1,000hp hybrid supercar — menjerit halus",           priceRM: 3_500_000,      category: "Kereta",      dreamMessage: "Bunyi enjin Ferrari waktu pagi = alarm terbaik dunia.", lifeImpact: "Valet parking orang lain mula selfie dengan kereta kau." },
  { id: "rolls",      emoji: "👑",  name: "Rolls-Royce Ghost",       desc: "Kereta rasmi raja-raja dan CEO dunia",               priceRM: 2_800_000,      category: "Kereta",      dreamMessage: "Pintu tutup sendiri. Kau layak untuk ini.", lifeImpact: "Orang ingat kau Tan Sri bila kau turun kereta." },
  { id: "garage",     emoji: "🏗️",  name: "Dream Garage (10 kereta)",desc: "Ferrari, Lambo, Rolls, McLaren, Bentley...",         priceRM: 25_000_000,     category: "Kereta",      dreamMessage: "Garage kau lebih value dari banglo orang lain!", lifeImpact: "YouTuber kereta nak feature kau." },
  // Travel & Experiences
  { id: "vacation",   emoji: "🌍",  name: "Vacation Dunia Setahun",  desc: "Paris, Tokyo, New York, Dubai — all-in",             priceRM: 500_000,        category: "Travel",      dreamMessage: "Passport kau dah penuh dalam masa 12 bulan!", lifeImpact: "Kau cerita pasal Tokyo macam cerita pasal Subang." },
  { id: "superyacht", emoji: "🛥️",  name: "Superyacht 60 meter",     desc: "Cruise Mediterranean, crew 15 orang, helipad",       priceRM: 700_000_000,    category: "Travel",      dreamMessage: "Kau tak duduk hotel. Hotel kau bergerak di laut.", lifeImpact: "Monaco Grand Prix dari dek kapal kau sendiri." },
  { id: "jet",        emoji: "🛩️",  name: "Jet Persendirian (G650)", desc: "KLIA ke London dalam 12 jam, tiada kesesakan",       priceRM: 330_000_000,    category: "Travel",      dreamMessage: "Departure lounge kau adalah tarmac peribadi kau!", lifeImpact: "Flight delay adalah masalah orang lain." },
  { id: "space",      emoji: "🌕",  name: "Tiket ke Angkasa",        desc: "Lihat Bumi dari luar angkasa — bukan gambar Google",  priceRM: 22_000_000,     category: "Travel",      dreamMessage: "Kau antara segelintir manusia pernah lihat bumi dari luar!", lifeImpact: "Bio Instagram: 🌍 Earth Alum." },
  { id: "island_trip",emoji: "🏖️",  name: "Resort Maldives Beli",   desc: "Beli resort sendiri, percutian percuma selama-lama", priceRM: 85_000_000,     category: "Travel",      dreamMessage: "Kau tak check-in. Kau YANG decide siapa boleh check-in.", lifeImpact: "Family reunion tahunan di resort SENDIRI." },
  // Keluarga & Kasih
  { id: "parents",    emoji: "❤️",  name: "Pencen Parents Seumur Hidup", desc: "Bayar semua bil parents, bagi elaun bulanan RM 10k", priceRM: 3_000_000, category: "Keluarga",    dreamMessage: "Parents kau tak payah kerja sehari lagi. Kau jaga mereka.", lifeImpact: "Ini yang paling bernilai dalam senarai ini." },
  { id: "edu_kids",   emoji: "🎓",  name: "Pendidikan Anak-Cucu",    desc: "Oxford, Harvard, MIT — semuanya covered",            priceRM: 5_000_000,      category: "Keluarga",    dreamMessage: "Anak kau boleh pilih universiti terbaik dunia tanpa bimbang duit!", lifeImpact: "Generasi akan datang dah ada kepala permulaan." },
  { id: "wedding",    emoji: "💍",  name: "Wedding of the Century",  desc: "Majlis 500 tetamu, bunga hiasan, photog terbaik",    priceRM: 500_000,        category: "Keluarga",    dreamMessage: "Hari paling bahagia dalam hidup — tanpa had bajet!", lifeImpact: "Semua orang sebut majlis kau bertahun-tahun." },
  { id: "hospital_parents", emoji: "🏥", name: "Penjagaan Perubatan Premium", desc: "Private hospital terbaik, check-up setiap bulan", priceRM: 2_000_000, category: "Keluarga", dreamMessage: "Kesihatan family kau dijaga sepenuhnya, selamanya.", lifeImpact: "Kau tidur lena tahu semua orang tersayang dalam jagaan terbaik." },
  // Impian & Pencapaian
  { id: "concert",    emoji: "🎤",  name: "Konsert Peribadi Artis",  desc: "Book Taylor Swift atau BTS untuk birthday party kau", priceRM: 25_000_000,   category: "Impian",      dreamMessage: "Happy Birthday to you… dimainkan secara live oleh artis paling famous dunia.", lifeImpact: "Kawan-kawan kau takkan lupa birthday kau sampai bila-bila." },
  { id: "studio",     emoji: "🎵",  name: "Rakam Album Sendiri",     desc: "Studio rekod premium, produser Grammy Award",        priceRM: 2_000_000,      category: "Impian",      dreamMessage: "Artis kau dah, bro. Album kau atas Spotify!", lifeImpact: "Mak kau bangga. Betul-betul bangga." },
  { id: "game_team",  emoji: "🎮",  name: "Esports Team Sendiri",    desc: "Bina team MLBB atau Valorant ke peringkat dunia",    priceRM: 15_000_000,     category: "Impian",      dreamMessage: "Kau bukan lagi pemain — kau OWNER!", lifeImpact: "Pro player yang kau tengok stream sekarang kerja untuk kau." },
  { id: "book",       emoji: "📚",  name: "Tulis & Terbit Buku",     desc: "Cerita hidup kau jadi bestseller, dengan ghostwriter", priceRM: 500_000,       category: "Impian",      dreamMessage: "Nama kau atas cover buku, kat kedai buku seluruh Malaysia!", lifeImpact: "Orang minta tandatangan kau di mana-mana." },
  { id: "football_club", emoji: "⚽", name: "Kelab Bola Sepak EPL", desc: "Beli Man United atau Chelsea — KAMU bos besar",      priceRM: 5_000_000_000,  category: "Impian",      dreamMessage: "KAU yang sign Mbappe. KAU yang lantik pengurus baru.", lifeImpact: "50,000 peminat jerit nama kau setiap hujung minggu." },
  // Berbuat Baik
  { id: "sekolah",    emoji: "🏫",  name: "Bina 100 Sekolah",        desc: "Pendidikan percuma untuk kanak-kanak B40",           priceRM: 50_000_000,     category: "Berbuat Baik", dreamMessage: "Ribuan kanak-kanak dapat pendidikan kerana kau.", lifeImpact: "Nama kau dikenang generasi akan datang." },
  { id: "hospital_free", emoji: "💊", name: "Hospital Percuma B40",  desc: "Rawatan percuma untuk golongan memerlukan",          priceRM: 200_000_000,    category: "Berbuat Baik", dreamMessage: "Berapa ramai nyawa diselamatkan kerana kau?", lifeImpact: "Ini warisan kau yang paling bermakna." },
  { id: "scholarship",emoji: "🎖️",  name: "1,000 Biasiswa Setiap Tahun", desc: "Pelajar cemerlang B40 ke universiti terbaik",  priceRM: 10_000_000,     category: "Berbuat Baik", dreamMessage: "Kau buka pintu yang tertutup untuk ribuan anak muda.", lifeImpact: "Mereka akan ingat nama kau seumur hidup." },
  { id: "masjid",     emoji: "🕌",  name: "Bina Masjid & Surau",    desc: "Infaq jariah yang mengalir sampai akhirat",           priceRM: 5_000_000,      category: "Berbuat Baik", dreamMessage: "Sedekah jariah terbaik — pahala mengalir selama-lamanya.", lifeImpact: "Doa ribuan jemaah menyertai kau." },
  // Mega
  { id: "rocket_launch", emoji: "🚀", name: "Lancar Roket Sendiri", desc: "Satellite kau sendiri mengorbit bumi",               priceRM: 450_000_000,    category: "Mega",        dreamMessage: "ADA NAMA KAU DI ANGKASA. Literally.", lifeImpact: "Kau salah seorang pemilik satellite persendirian." },
  { id: "city",       emoji: "🌇",  name: "Beli Kawasan Bandar",     desc: "Develop kota impian kau sendiri dari kosong",        priceRM: 10_000_000_000, category: "Mega",        dreamMessage: "Kau bukan lagi beli hartanah. Kau buat bandar baru.", lifeImpact: "Nama jalan dinamakan sempena kau." },
];

const CATEGORIES = ["Semua", "Kehidupan", "Rumah", "Kereta", "Travel", "Keluarga", "Impian", "Berbuat Baik", "Mega"];

// ─── Life Levels ──────────────────────────────────────────────────────────────

const LIFE_LEVELS = [
  { min: 0,              label: "Orang Biasa",      emoji: "😐", color: "text-gray-500",   bg: "bg-gray-100" },
  { min: 100_000,        label: "Orang Senang",     emoji: "😊", color: "text-blue-600",   bg: "bg-blue-50" },
  { min: 5_000_000,      label: "Hartawan",         emoji: "😎", color: "text-purple-600", bg: "bg-purple-50" },
  { min: 50_000_000,     label: "Jutawan Besar",    emoji: "🤩", color: "text-orange-600", bg: "bg-orange-50" },
  { min: 500_000_000,    label: "Bilionair Muda",   emoji: "🏆", color: "text-amber-600",  bg: "bg-amber-50" },
  { min: 5_000_000_000,  label: "Raja Dunia",       emoji: "👑", color: "text-yellow-600", bg: "bg-yellow-50" },
];

// ─── Achievements ─────────────────────────────────────────────────────────────

const ACHIEVEMENTS: Achievement[] = [
  { id: "first", emoji: "🛍️",  title: "Permulaan Baru",       desc: "Belanja pertama kali — perjalanan bermula!", condition: (s) => s > 0 },
  { id: "mil",   emoji: "💎",  title: "Masuk Kelab Jutawan",  desc: "Dah belanja lebih RM 1 juta!", condition: (s) => s >= 1_000_000 },
  { id: "bil",   emoji: "🏆",  title: "Liga Bilionair",       desc: "RM 1 Bilion dibelanjakan. Tahniah!", condition: (s) => s >= 1_000_000_000 },
  { id: "parents", emoji: "❤️", title: "Anak Soleh/Solehah",  desc: "Kau jaga parents kau. Ini lebih berharga dari semua.", condition: (_, c) => (c["parents"] ?? 0) > 0 },
  { id: "charity", emoji: "🤲", title: "Hati Pemurah",        desc: "Berbuat baik dengan kekayaan — inilah manusia sejati.", condition: (_, c) => ["sekolah","hospital_free","scholarship","masjid"].some(i => (c[i] ?? 0) > 0) },
  { id: "island", emoji: "🏝️",  title: "Tuan Pulau",          desc: "Kau ada pulau sendiri sekarang. Betul-betul.", condition: (_, c) => (c["island"] ?? 0) > 0 },
  { id: "garage", emoji: "🚗",  title: "Koleksi Kereta Gila", desc: "Dream garage terlengkap Malaysia!", condition: (_, c) => (c["garage"] ?? 0) > 0 },
  { id: "space",  emoji: "🌕",  title: "Anak Bintang",        desc: "Kau dah pergi angkasa. Kau antara yang terpilih.", condition: (_, c) => (c["space"] ?? 0) > 0 },
  { id: "club",   emoji: "⚽",  title: "Bos Bola Sepak",      desc: "Owner kelab EPL. Kau putuskan siapa main.", condition: (_, c) => (c["football_club"] ?? 0) > 0 },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmtRM(n: number): string {
  if (n >= 1_000_000_000) return `RM ${(n / 1_000_000_000).toFixed(2)}B`;
  if (n >= 1_000_000)     return `RM ${(n / 1_000_000).toFixed(1)}j`;
  if (n >= 1_000)         return `RM ${(n / 1_000).toFixed(0)}k`;
  return `RM ${n.toLocaleString("en-MY")}`;
}

function fmtRMFull(n: number): string {
  return `RM ${n.toLocaleString("en-MY", { maximumFractionDigits: 0 })}`;
}

function getLifeLevel(spent: number) {
  return [...LIFE_LEVELS].reverse().find((l) => spent >= l.min) ?? LIFE_LEVELS[0];
}

// ─── Toast Component ──────────────────────────────────────────────────────────

function Toast({ msg, onDone }: { msg: { emoji: string; title: string; body: string } | null; onDone: () => void }) {
  useEffect(() => {
    if (!msg) return;
    const t = setTimeout(onDone, 3500);
    return () => clearTimeout(t);
  }, [msg, onDone]);
  if (!msg) return null;
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
      <div className="bg-gray-900 text-white rounded-2xl shadow-2xl px-6 py-4 max-w-sm mx-4 animate-bounce-once">
        <div className="flex items-center gap-3">
          <span className="text-3xl flex-shrink-0">{msg.emoji}</span>
          <div>
            <p className="font-bold text-sm">{msg.title}</p>
            <p className="text-xs text-gray-300 leading-relaxed">{msg.body}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Billionaire Selection ────────────────────────────────────────────────────

function BillionaireSelect({ onSelect }: { onSelect: (b: Billionaire) => void }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl text-4xl mb-4 shadow-lg">💸</div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Pilih Siapa Punya Duit Kau Nak Belanja</h2>
        <p className="text-gray-500 max-w-lg mx-auto">10 orang terkaya dunia. Duit mereka dalam Ringgit Malaysia. Satu soalan: boleh ke kau habiskan semuanya?</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {BILLIONAIRES.map((b) => {
          const budgetMYR = b.netWorthUSD * 1_000_000_000 * USD_TO_MYR;
          return (
            <button key={b.id} onClick={() => onSelect(b)}
              className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden text-left hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
              <div className={`h-2 bg-gradient-to-r ${b.color}`} />
              <div className="p-5">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${b.color} rounded-2xl flex items-center justify-center text-3xl shadow-md`}>
                    {b.emoji}
                  </div>
                  <div>
                    <p className="font-black text-gray-900 text-lg leading-tight">{b.name}</p>
                    <p className="text-xs text-gray-500">{b.title}</p>
                    <p className="text-xs text-orange-500 font-semibold">{b.company}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs text-gray-400 mb-0.5">Net Worth</p>
                    <p className="font-black text-green-700 text-lg">USD {b.netWorthUSD}B</p>
                  </div>
                  <div className="bg-amber-50 rounded-xl p-3">
                    <p className="text-xs text-gray-400 mb-0.5">Dalam MYR</p>
                    <p className="font-black text-amber-700 text-lg">RM {(budgetMYR / 1_000_000_000).toFixed(0)}B</p>
                  </div>
                </div>
                <p className="text-xs text-gray-400 italic">💡 {b.funFact}</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Main Game ────────────────────────────────────────────────────────────────

export default function SpendGame() {
  const [billionaire, setBillionaire] = useState<Billionaire | null>(null);
  const [cart,        setCart]        = useState<Record<string, number>>({});
  const [category,    setCategory]    = useState("Semua");
  const [toast,       setToast]       = useState<{ emoji: string; title: string; body: string } | null>(null);
  const [showLife,    setShowLife]    = useState(false);
  const [confetti,    setConfetti]    = useState(false);

  const budget    = useMemo(() => billionaire ? Math.round(billionaire.netWorthUSD * 1e9 * USD_TO_MYR) : 0, [billionaire]);
  const spent     = useMemo(() => ITEMS.reduce((a, i) => a + (cart[i.id] ?? 0) * i.priceRM, 0), [cart]);
  const remaining = budget - spent;
  const pctSpent  = budget > 0 ? Math.min(100, (spent / budget) * 100) : 0;
  const lifeLevel = getLifeLevel(spent);
  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);

  const earnedAchievements = useMemo(
    () => ACHIEVEMENTS.filter((a) => a.condition(spent, cart)),
    [spent, cart]
  );

  const filteredItems = useMemo(
    () => category === "Semua" ? ITEMS : ITEMS.filter((i) => i.category === category),
    [category]
  );

  const dreamLifeItems = useMemo(
    () => ITEMS.filter((i) => (cart[i.id] ?? 0) > 0),
    [cart]
  );

  const add = useCallback((item: ShopItem) => {
    if (remaining < item.priceRM) return;
    setCart((prev) => ({ ...prev, [item.id]: (prev[item.id] ?? 0) + 1 }));
    setToast({ emoji: item.emoji, title: item.name, body: item.dreamMessage });
    if (remaining - item.priceRM <= 0) setConfetti(true);
  }, [remaining]);

  const remove = useCallback((item: ShopItem) => {
    setCart((prev) => {
      const cur = prev[item.id] ?? 0;
      if (cur <= 0) return prev;
      const next = { ...prev, [item.id]: cur - 1 };
      if (next[item.id] === 0) delete next[item.id];
      return next;
    });
    setConfetti(false);
  }, []);

  const reset = () => { setCart({}); setConfetti(false); setToast(null); };

  if (!billionaire) return <BillionaireSelect onSelect={(b) => { setBillionaire(b); reset(); }} />;

  const barColor = pctSpent > 90 ? "bg-red-500" : pctSpent > 50 ? "bg-orange-500" : pctSpent > 10 ? "bg-amber-500" : "bg-green-500";

  return (
    <>
      <Toast msg={toast} onDone={() => setToast(null)} />

      {/* ── Win Screen ──────────────────────────────────────────────────────── */}
      {confetti && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 text-center max-w-md w-full">
            <div className="text-6xl mb-4">🏆</div>
            <h2 className="text-3xl font-black text-gray-900 mb-2">TAHNIAH!</h2>
            <p className="text-lg text-gray-600 mb-1">Kau berjaya HABISKAN duit {billionaire.name}!</p>
            <p className="text-sm text-gray-400 mb-6">Kau dah jadi <strong className="text-orange-500">{lifeLevel.emoji} {lifeLevel.label}</strong> — hidup kau tak akan sama lagi.</p>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-4 mb-6 text-sm text-gray-600">
              <p className="font-semibold text-gray-800 mb-2">Impian Kau Yang Dah Jadi Kenyataan:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {dreamLifeItems.slice(0, 5).map((i) => (
                  <span key={i.id} className="bg-white rounded-lg px-2 py-1 text-xs shadow-sm">{i.emoji} {i.name}</span>
                ))}
                {dreamLifeItems.length > 5 && <span className="bg-white rounded-lg px-2 py-1 text-xs shadow-sm">+{dreamLifeItems.length - 5} lagi</span>}
              </div>
            </div>
            <div className="flex gap-3">
              <button onClick={reset} className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors">Cuba Lagi</button>
              <button onClick={() => { reset(); setBillionaire(null); }} className="flex-1 border border-gray-200 text-gray-600 font-medium py-3 rounded-xl hover:bg-gray-50 transition-colors">Tukar Orang</button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

        {/* ── Top Bar ───────────────────────────────────────────────────────── */}
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => { reset(); setBillionaire(null); }}
            className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors flex-shrink-0 text-lg">
            ←
          </button>
          <div className={`w-10 h-10 bg-gradient-to-br ${billionaire.color} rounded-xl flex items-center justify-center text-xl flex-shrink-0`}>
            {billionaire.emoji}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-black text-gray-900 text-sm sm:text-base truncate">Belanja duit {billionaire.name}</p>
            <p className="text-xs text-gray-400 truncate">{billionaire.funFact}</p>
          </div>
          <div className={`flex-shrink-0 ${lifeLevel.bg} ${lifeLevel.color} text-xs font-bold px-3 py-1.5 rounded-full`}>
            {lifeLevel.emoji} {lifeLevel.label}
          </div>
        </div>

        {/* ── Budget Hero ───────────────────────────────────────────────────── */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5 sm:p-6 mb-5 text-white">
          <div className="grid grid-cols-3 gap-3 mb-5">
            <div className="text-center">
              <p className="text-xs text-gray-400 mb-1">Jumlah Kekayaan</p>
              <p className="font-black text-green-400 text-base sm:text-xl leading-tight">{fmtRM(budget)}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-400 mb-1">Dah Dibelanja</p>
              <p className={`font-black text-base sm:text-xl leading-tight ${spent > 0 ? "text-amber-400" : "text-gray-600"}`}>{fmtRM(spent)}</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-400 mb-1">Baki</p>
              <p className={`font-black text-base sm:text-xl leading-tight ${remaining < budget * 0.05 ? "text-red-400" : "text-blue-400"}`}>{fmtRM(remaining)}</p>
            </div>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden mb-2">
            <div className={`h-3 rounded-full transition-all duration-700 ${barColor}`} style={{ width: `${Math.max(pctSpent, pctSpent > 0 ? 0.5 : 0)}%` }} />
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>{pctSpent.toFixed(pctSpent < 0.01 ? 6 : 2)}% dibelanja</span>
            <span>{totalItems} item · {earnedAchievements.length} pencapaian</span>
          </div>
          {spent === 0 && (
            <p className="text-xs text-gray-500 text-center mt-3 italic">
              Duit ini cukup untuk bagi setiap rakyat Malaysia <strong className="text-gray-400">RM {Math.round(budget / 33_000_000).toLocaleString("en-MY")}</strong> setiap seorang 🇲🇾
            </p>
          )}
        </div>

        {/* ── Achievements ─────────────────────────────────────────────────── */}
        {earnedAchievements.length > 0 && (
          <div className="mb-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Pencapaian Kau</p>
            <div className="flex flex-wrap gap-2">
              {earnedAchievements.map((a) => (
                <div key={a.id} className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold px-3 py-1.5 rounded-full">
                  <span>{a.emoji}</span><span>{a.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Dream Life Toggle ─────────────────────────────────────────────── */}
        {totalItems > 0 && (
          <button onClick={() => setShowLife(!showLife)}
            className="w-full mb-5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white rounded-2xl p-4 text-left transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-sm">✨ Hidup Kau Sekarang</p>
                <p className="text-xs text-purple-200 mt-0.5">{dreamLifeItems.length} impian dah jadi kenyataan — {showLife ? "sembunyikan" : "lihat semua"}</p>
              </div>
              <span className="text-2xl">{showLife ? "▲" : "▼"}</span>
            </div>
            {showLife && (
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {dreamLifeItems.map((item) => (
                  <div key={item.id} className="bg-white/10 rounded-xl p-3">
                    <div className="flex items-start gap-2">
                      <span className="text-xl flex-shrink-0">{item.emoji}</span>
                      <div>
                        <p className="text-xs font-semibold text-white">{item.name} {(cart[item.id] ?? 0) > 1 && <span className="text-purple-300">×{cart[item.id]}</span>}</p>
                        <p className="text-xs text-purple-200 leading-relaxed">{item.lifeImpact}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </button>
        )}

        {/* ── Category Filter ───────────────────────────────────────────────── */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-5 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setCategory(cat)}
              className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                category === cat
                  ? "bg-gray-900 text-white"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-gray-900 hover:text-gray-900"
              }`}>
              {cat}
            </button>
          ))}
        </div>

        {/* ── Shop Grid ─────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
          {filteredItems.map((item) => {
            const qty       = cart[item.id] ?? 0;
            const canAfford = remaining >= item.priceRM;
            const totalCost = qty * item.priceRM;

            return (
              <div key={item.id}
                className={`bg-white rounded-2xl border shadow-sm flex flex-col transition-all duration-200 ${
                  !canAfford && qty === 0
                    ? "opacity-35 border-gray-100"
                    : qty > 0
                    ? "border-amber-300 shadow-amber-100 shadow-md"
                    : "border-gray-100 hover:border-gray-300 hover:shadow-md"
                }`}>
                <div className="p-4 flex flex-col flex-1">
                  <div className={`text-3xl text-center mb-2 transition-transform ${qty > 0 ? "scale-110" : ""}`}>{item.emoji}</div>
                  <p className="text-xs font-bold text-gray-800 text-center mb-0.5 leading-tight">{item.name}</p>
                  <p className="text-xs text-gray-400 text-center mb-2 leading-tight line-clamp-2">{item.desc}</p>
                  <p className="text-sm font-black text-orange-600 text-center mb-3">{fmtRM(item.priceRM)}</p>

                  {qty > 0 && (
                    <div className="bg-amber-50 rounded-lg px-2 py-1 mb-2 text-center">
                      <p className="text-xs text-amber-700 font-semibold">
                        × {qty.toLocaleString()} = {fmtRM(totalCost)}
                      </p>
                    </div>
                  )}

                  <div className="flex items-center justify-center gap-2 mt-auto">
                    <button onClick={() => remove(item)} disabled={qty === 0}
                      className={`w-9 h-9 rounded-xl font-bold text-lg flex items-center justify-center transition-all ${
                        qty > 0
                          ? "bg-gray-100 hover:bg-red-100 hover:text-red-600 text-gray-600 active:scale-95"
                          : "bg-gray-50 text-gray-200 cursor-not-allowed"
                      }`}>
                      −
                    </button>
                    <span className={`text-sm font-black w-8 text-center ${qty > 0 ? "text-gray-900" : "text-gray-300"}`}>
                      {qty > 999 ? "999+" : qty}
                    </span>
                    <button onClick={() => add(item)} disabled={!canAfford}
                      className={`w-9 h-9 rounded-xl font-bold text-lg flex items-center justify-center transition-all ${
                        canAfford
                          ? "bg-gray-900 hover:bg-gray-700 text-white active:scale-95"
                          : "bg-gray-100 text-gray-300 cursor-not-allowed"
                      }`}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Receipt ───────────────────────────────────────────────────────── */}
        {totalItems > 0 && (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
            <h3 className="font-bold text-gray-900 mb-1 flex items-center gap-2"><span>🧾</span> Resit Impian Kau</h3>
            <p className="text-xs text-gray-400 mb-4">Ini hidup kau yang baru. Semua dah kau bayar.</p>
            <div className="space-y-2">
              {dreamLifeItems.map((item) => {
                const qty = cart[item.id]!;
                return (
                  <div key={item.id} className="flex items-center justify-between text-sm">
                    <span className="text-gray-700 flex items-center gap-2">
                      <span>{item.emoji}</span>
                      <span>{item.name} {qty > 1 && <span className="text-gray-400">× {qty.toLocaleString()}</span>}</span>
                    </span>
                    <span className="font-semibold text-gray-900 flex-shrink-0 ml-2">{fmtRM(qty * item.priceRM)}</span>
                  </div>
                );
              })}
            </div>
            <div className="border-t border-gray-100 mt-4 pt-4 space-y-1">
              <div className="flex items-center justify-between font-black text-base">
                <span className="text-gray-900">Jumlah Dibelanja</span>
                <span className="text-orange-500">{fmtRMFull(spent)}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span>Baki dalam akaun virtual</span>
                <span>{fmtRMFull(remaining)}</span>
              </div>
            </div>
            <div className="mt-4 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 rounded-xl p-4">
              <p className="text-xs text-amber-800 text-center leading-relaxed">
                Kalau kau betul-betul jadi {billionaire.name}, baki RM {fmtRM(remaining)} kau akan earned balik dalam masa <strong>{(remaining / (billionaire.netWorthUSD * 1e9 * USD_TO_MYR / 365 / 24)).toFixed(1)} jam</strong>. 😅
              </p>
            </div>
          </div>
        )}

        {/* ── Fun Stats ─────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            { emoji: "⏱️", title: "Dia earn dalam sehari",    body: `Dalam satu hari, ${billionaire.name} menjana lebih kurang ${fmtRM(Math.round(billionaire.netWorthUSD * 1e9 * USD_TO_MYR / 365))} (anggaran berdasarkan pertumbuhan kekayaan tahunan).` },
            { emoji: "🇲🇾", title: "Berbanding KDNK Malaysia",  body: `Kekayaan ${billionaire.name} bersamaan ${((billionaire.netWorthUSD * 1e9 * USD_TO_MYR) / 1_700_000_000_000 * 100).toFixed(0)}% daripada KDNK Malaysia 2024 (anggaran RM 1.7 trilion).` },
            { emoji: "🚗", title: "Boleh beli berapa Myvi?",  body: `Dengan duit ${billionaire.name}, boleh beli ${Math.floor(billionaire.netWorthUSD * 1e9 * USD_TO_MYR / 52_000).toLocaleString("en-MY")} buah Perodua Myvi — satu untuk setiap keluarga di Malaysia.` },
          ].map((f) => (
            <div key={f.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="text-2xl mb-2">{f.emoji}</div>
              <p className="font-bold text-gray-800 text-sm mb-1">{f.title}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>

        {/* ── Reset & Change ─────────────────────────────────────────────────── */}
        <div className="flex gap-3">
          <button onClick={reset} className="flex-1 border border-gray-200 text-gray-600 font-medium py-3 rounded-xl hover:bg-gray-50 transition-colors text-sm">
            🔄 Reset Semua
          </button>
          <button onClick={() => { reset(); setBillionaire(null); }} className="flex-1 border border-gray-200 text-gray-600 font-medium py-3 rounded-xl hover:bg-gray-50 transition-colors text-sm">
            👤 Tukar Orang Kaya
          </button>
        </div>

        <p className="text-xs text-gray-300 text-center mt-8">
          Ini simulasi hiburan semata-mata. Angka kekayaan adalah anggaran berdasarkan laporan awam 2024–2025. Harga item adalah anggaran dalam MYR. Tiada nilai kewangan sebenar terlibat.
        </p>
      </div>
    </>
  );
}
