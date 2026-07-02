"use client";

import { useState, useMemo, useCallback } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const USD_TO_MYR = 4.72;

interface Billionaire {
  id: string;
  name: string;
  netWorthUSD: number; // billions
  emoji: string;
  title: string;
  company: string;
  funFact: string;
}

const BILLIONAIRES: Billionaire[] = [
  { id: "musk",       name: "Elon Musk",        netWorthUSD: 320,  emoji: "🚀", title: "CEO of Tesla & SpaceX", company: "Tesla / SpaceX / X",  funFact: "Earns roughly RM 14 juta setiap JAM." },
  { id: "bezos",      name: "Jeff Bezos",        netWorthUSD: 215,  emoji: "📦", title: "Founder of Amazon",    company: "Amazon",              funFact: "Amazon mulakan dengan menjual buku dari garaj." },
  { id: "zuck",       name: "Mark Zuckerberg",   netWorthUSD: 190,  emoji: "👓", title: "CEO of Meta",          company: "Meta (FB/IG)",        funFact: "Pakai baju kelabu yang sama setiap hari untuk jimat masa." },
  { id: "ellison",    name: "Larry Ellison",     netWorthUSD: 175,  emoji: "☁️", title: "Co-Founder of Oracle", company: "Oracle",              funFact: "Miliki hampir seluruh Pulau Lanai di Hawaii." },
  { id: "buffett",    name: "Warren Buffett",    netWorthUSD: 145,  emoji: "📈", title: "The Oracle of Omaha",  company: "Berkshire Hathaway",  funFact: "Masih tinggal di rumah yang dia beli RM 140k pada 1958." },
  { id: "gates",      name: "Bill Gates",        netWorthUSD: 135,  emoji: "💻", title: "Co-Founder of Microsoft", company: "Microsoft",        funFact: "Boleh bayar hutang negara Malaysia dengan wang simpanan." },
  { id: "arnault",    name: "Bernard Arnault",   netWorthUSD: 125,  emoji: "👜", title: "Chairman of LVMH",     company: "LVMH (LV/Dior/Moet)", funFact: "Kawalan 75 jenama mewah termasuk Louis Vuitton & Dior." },
  { id: "page",       name: "Larry Page",        netWorthUSD: 135,  emoji: "🔍", title: "Co-Founder of Google", company: "Alphabet/Google",     funFact: "Google bermula sebagai projek PhD di Stanford." },
  { id: "brin",       name: "Sergey Brin",       netWorthUSD: 125,  emoji: "🌐", title: "Co-Founder of Google", company: "Alphabet/Google",     funFact: "Miliki kapal layar setinggi 12 tingkat yang bernilai RM 900 juta." },
  { id: "huang",      name: "Jensen Huang",      netWorthUSD: 105,  emoji: "🎮", title: "CEO of NVIDIA",        company: "NVIDIA",              funFact: "Selalu pakai jaket kulit hitam — sudah jadi trademark dia." },
];

interface ShopItem {
  id: string;
  emoji: string;
  name: string;
  nameMS: string;
  priceRM: number;
  category: string;
}

const ITEMS: ShopItem[] = [
  // Everyday Malaysia
  { id: "teh",       emoji: "🍵",  name: "Teh Tarik",             nameMS: "Teh Tarik Satu",        priceRM: 2,              category: "Makanan" },
  { id: "nasi",      emoji: "🍛",  name: "Nasi Lemak Bungkus",    nameMS: "Nasi Lemak Bungkus",    priceRM: 3,              category: "Makanan" },
  { id: "mamak",     emoji: "🧇",  name: "Roti Canai Mamak",      nameMS: "Roti Canai + Teh",      priceRM: 5,              category: "Makanan" },
  { id: "grab",      emoji: "🛵",  name: "GrabFood Order",        nameMS: "Grab Food (sekali)",    priceRM: 30,             category: "Makanan" },
  { id: "movie",     emoji: "🎬",  name: "Cinema GSC Ticket",     nameMS: "Tiket Wayang GSC",      priceRM: 18,             category: "Hiburan" },
  { id: "koncert",   emoji: "🎤",  name: "Taylor Swift Concert",  nameMS: "Tiket Konsert TS",      priceRM: 1_500,          category: "Hiburan" },
  { id: "grab_car",  emoji: "🚖",  name: "GrabCar to KLIA",       nameMS: "GrabCar ke KLIA",       priceRM: 85,             category: "Transport" },
  { id: "airpods",   emoji: "🎧",  name: "AirPods Pro",           nameMS: "AirPods Pro",           priceRM: 1_099,          category: "Gadget" },
  { id: "iphone",    emoji: "📱",  name: "iPhone 16 Pro Max",     nameMS: "iPhone 16 Pro Max",     priceRM: 5_999,          category: "Gadget" },
  { id: "macbook",   emoji: "💻",  name: "MacBook Pro M4",        nameMS: "MacBook Pro M4",        priceRM: 12_499,         category: "Gadget" },
  // Cars
  { id: "myvi",      emoji: "🚗",  name: "Perodua Myvi",          nameMS: "Perodua Myvi 1.5L",     priceRM: 52_000,         category: "Kereta" },
  { id: "x70",       emoji: "🚙",  name: "Proton X70",            nameMS: "Proton X70 2.0T",       priceRM: 118_800,        category: "Kereta" },
  { id: "camry",     emoji: "🚘",  name: "Toyota Camry",          nameMS: "Toyota Camry 2.5V",     priceRM: 199_900,        category: "Kereta" },
  { id: "bmw",       emoji: "🏎️",  name: "BMW M4 Competition",    nameMS: "BMW M4 Competition",    priceRM: 998_000,        category: "Kereta" },
  { id: "lamborghini", emoji: "🦊", name: "Lamborghini Urus S",   nameMS: "Lamborghini Urus S",    priceRM: 2_800_000,      category: "Kereta" },
  { id: "bugatti",   emoji: "⚡",  name: "Bugatti Chiron",        nameMS: "Bugatti Chiron",        priceRM: 14_000_000,     category: "Kereta" },
  // Property
  { id: "studio",    emoji: "🏠",  name: "Studio Apartment PJ",   nameMS: "Studio Apartment PJ",   priceRM: 350_000,        category: "Hartanah" },
  { id: "condo",     emoji: "🏢",  name: "KLCC Condo (1BR)",      nameMS: "Kondominium KLCC 1BR",  priceRM: 1_500_000,      category: "Hartanah" },
  { id: "bungalow",  emoji: "🏡",  name: "Damansara Bungalow",    nameMS: "Banglo Damansara",      priceRM: 8_000_000,      category: "Hartanah" },
  { id: "penthouse", emoji: "🌆",  name: "KLCC Penthouse",        nameMS: "Penthouse KLCC",        priceRM: 35_000_000,     category: "Hartanah" },
  { id: "island_my", emoji: "🏝️",  name: "Private Island (MY)",   nameMS: "Pulau Persendirian MY", priceRM: 150_000_000,    category: "Hartanah" },
  // Luxury & Experiences
  { id: "rolex",     emoji: "⌚",  name: "Rolex Submariner",      nameMS: "Rolex Submariner",      priceRM: 55_000,         category: "Mewah" },
  { id: "lv_bag",    emoji: "👜",  name: "Louis Vuitton Bag",     nameMS: "Beg Louis Vuitton",     priceRM: 18_000,         category: "Mewah" },
  { id: "jet_private", emoji: "✈️", name: "Private Jet (Gulfstream G650)", nameMS: "Jet Persendirian", priceRM: 330_000_000, category: "Mewah" },
  { id: "yacht",     emoji: "🛥️",  name: "Superyacht (60m)",      nameMS: "Superyacht 60 meter",   priceRM: 700_000_000,    category: "Mewah" },
  { id: "rocket",    emoji: "🚀",  name: "SpaceX Rocket Launch",  nameMS: "Pelancaran Roket SpaceX", priceRM: 450_000_000,  category: "Mewah" },
  // Big Ticket
  { id: "hospital",  emoji: "🏥",  name: "Private Hospital",      nameMS: "Hospital Swasta",       priceRM: 500_000_000,    category: "Mega" },
  { id: "football",  emoji: "⚽",  name: "EPL Football Club",     nameMS: "Kelab Bola Sepak EPL",  priceRM: 5_000_000_000,  category: "Mega" },
  { id: "carrier",   emoji: "🛳️",  name: "Aircraft Carrier",      nameMS: "Kapal Perang Pengangkut", priceRM: 28_000_000_000, category: "Mega" },
  { id: "moon",      emoji: "🌕",  name: "Moon Mission",          nameMS: "Misi ke Bulan",         priceRM: 9_500_000_000,  category: "Mega" },
];

const CATEGORIES = ["Semua", "Makanan", "Hiburan", "Transport", "Gadget", "Kereta", "Hartanah", "Mewah", "Mega"];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmtRM(n: number): string {
  if (n >= 1_000_000_000) return `RM ${(n / 1_000_000_000).toFixed(2)} B`;
  if (n >= 1_000_000)     return `RM ${(n / 1_000_000).toFixed(2)} juta`;
  if (n >= 1_000)         return `RM ${(n / 1_000).toFixed(1)}k`;
  return `RM ${n.toLocaleString("en-MY")}`;
}

function fmtRMFull(n: number): string {
  return `RM ${n.toLocaleString("en-MY", { maximumFractionDigits: 0 })}`;
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function SpendGame() {
  const [selectedBillionaire, setSelectedBillionaire] = useState<Billionaire | null>(null);
  const [cart, setCart]       = useState<Record<string, number>>({});
  const [category, setCategory] = useState("Semua");
  const [showConfetti, setShowConfetti] = useState(false);

  const budget = useMemo(
    () => (selectedBillionaire ? Math.round(selectedBillionaire.netWorthUSD * 1_000_000_000 * USD_TO_MYR) : 0),
    [selectedBillionaire]
  );

  const spent = useMemo(
    () => ITEMS.reduce((acc, item) => acc + (cart[item.id] ?? 0) * item.priceRM, 0),
    [cart]
  );

  const remaining = budget - spent;
  const pctSpent  = budget > 0 ? Math.min(100, (spent / budget) * 100) : 0;

  const filteredItems = useMemo(
    () => category === "Semua" ? ITEMS : ITEMS.filter((i) => i.category === category),
    [category]
  );

  const add = useCallback((id: string, price: number) => {
    if (remaining < price) return;
    setCart((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    if (remaining - price <= 0) setShowConfetti(true);
  }, [remaining]);

  const remove = useCallback((id: string, price: number) => {
    setCart((prev) => {
      const cur = prev[id] ?? 0;
      if (cur <= 0) return prev;
      const next = { ...prev, [id]: cur - 1 };
      if (next[id] === 0) delete next[id];
      return next;
    });
    setShowConfetti(false);
  }, []);

  const reset = () => { setCart({}); setShowConfetti(false); };

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);

  // ── Billionaire Selection Screen ───────────────────────────────────────────
  if (!selectedBillionaire) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center mb-10">
          <p className="text-5xl mb-4">💸</p>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Pilih Orang Kaya Kau Nak Jadi</h2>
          <p className="text-gray-500">Pilih salah seorang daripada 10 orang terkaya di dunia — dan belanja duit mereka.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {BILLIONAIRES.map((b) => {
            const budgetMYR = b.netWorthUSD * 1_000_000_000 * USD_TO_MYR;
            return (
              <button key={b.id} onClick={() => setSelectedBillionaire(b)}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 text-left hover:border-orange-300 hover:shadow-md transition-all group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-105 transition-transform">
                    {b.emoji}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-base">{b.name}</p>
                    <p className="text-xs text-gray-500">{b.title}</p>
                    <p className="text-xs text-orange-500 font-medium">{b.company}</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl px-4 py-3 mb-2">
                  <p className="text-xs text-gray-400 mb-0.5">Jumlah Kekayaan (anggaran 2025)</p>
                  <p className="text-xl font-black text-green-700">USD {b.netWorthUSD}B</p>
                  <p className="text-sm font-semibold text-green-600">≈ RM {(budgetMYR / 1_000_000_000).toFixed(1)} Bilion</p>
                </div>
                <p className="text-xs text-gray-400 italic">💡 {b.funFact}</p>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // ── Main Game Screen ───────────────────────────────────────────────────────
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

      {/* ── Confetti Banner ─────────────────────────────────────────────────── */}
      {showConfetti && (
        <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-10 text-center pointer-events-auto mx-4">
              <p className="text-6xl mb-4">🎉</p>
              <p className="text-3xl font-black text-gray-900 mb-2">Habis Duit!</p>
              <p className="text-gray-500 mb-2">Tahniah — kau berjaya belanjakan semua duit {selectedBillionaire.name}!</p>
              <p className="text-sm text-gray-400 mb-6">Kalau dia betul-betul mati esok, ni lah warisan kau 🤷</p>
              <button onClick={reset}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl mr-3 transition-colors">
                Cuba Lagi
              </button>
              <button onClick={() => { reset(); setSelectedBillionaire(null); }}
                className="border border-gray-200 text-gray-600 font-medium px-8 py-3 rounded-xl hover:bg-gray-50 transition-colors">
                Tukar Orang
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => { setSelectedBillionaire(null); reset(); }}
          className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors flex-shrink-0">
          ←
        </button>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-2xl">{selectedBillionaire.emoji}</span>
            <h2 className="font-black text-gray-900 text-lg truncate">Belanja duit {selectedBillionaire.name}</h2>
          </div>
          <p className="text-xs text-gray-400">{selectedBillionaire.funFact}</p>
        </div>
        <button onClick={reset}
          className="text-xs text-gray-400 hover:text-red-500 transition-colors flex-shrink-0 px-3 py-1.5 border border-gray-200 rounded-lg hover:border-red-300">
          Reset
        </button>
      </div>

      {/* ── Budget Bar ──────────────────────────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mb-6">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-1">Jumlah Kekayaan</p>
            <p className="font-black text-green-700 text-lg sm:text-xl leading-tight">{fmtRM(budget)}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-1">Dah Belanja</p>
            <p className={`font-black text-lg sm:text-xl leading-tight ${spent > 0 ? "text-orange-500" : "text-gray-300"}`}>{fmtRM(spent)}</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-1">Baki</p>
            <p className={`font-black text-lg sm:text-xl leading-tight ${remaining < budget * 0.1 ? "text-red-500" : "text-blue-600"}`}>{fmtRM(remaining)}</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden mb-2">
          <div
            className={`h-4 rounded-full transition-all duration-500 ${pctSpent > 90 ? "bg-red-500" : pctSpent > 50 ? "bg-orange-500" : "bg-green-500"}`}
            style={{ width: `${pctSpent}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-400">
          <span>{pctSpent.toFixed(4)}% dah habis</span>
          <span>{totalItems} item dibeli</span>
        </div>

        {remaining === budget && (
          <p className="text-xs text-gray-400 text-center mt-2 italic">
            Duit ni cukup untuk bagi SETIAP rakyat Malaysia RM {Math.round(budget / 33_000_000).toLocaleString("en-MY")} setiap seorang. 🇲🇾
          </p>
        )}
      </div>

      {/* ── Category Filter ──────────────────────────────────────────────────── */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-5 scrollbar-hide">
        {CATEGORIES.map((cat) => (
          <button key={cat} onClick={() => setCategory(cat)}
            className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              category === cat ? "bg-orange-500 text-white" : "bg-white border border-gray-200 text-gray-600 hover:border-orange-300 hover:text-orange-600"
            }`}>
            {cat}
          </button>
        ))}
      </div>

      {/* ── Items Grid ──────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
        {filteredItems.map((item) => {
          const qty      = cart[item.id] ?? 0;
          const canAfford = remaining >= item.priceRM;
          const totalCost = qty * item.priceRM;

          return (
            <div key={item.id}
              className={`bg-white rounded-2xl border shadow-sm p-4 flex flex-col transition-all ${
                !canAfford && qty === 0 ? "opacity-40 border-gray-100" : "border-gray-100 hover:border-orange-200 hover:shadow-md"
              }`}>
              <div className="text-3xl text-center mb-2">{item.emoji}</div>
              <p className="text-xs font-semibold text-gray-800 text-center mb-0.5 leading-tight">{item.nameMS}</p>
              <p className="text-xs text-orange-600 font-bold text-center mb-3">{fmtRM(item.priceRM)}</p>

              {qty > 0 && (
                <p className="text-xs text-gray-400 text-center mb-2">
                  × {qty.toLocaleString()} = <span className="text-orange-500 font-semibold">{fmtRM(totalCost)}</span>
                </p>
              )}

              <div className="flex items-center justify-center gap-2 mt-auto">
                <button
                  onClick={() => remove(item.id, item.priceRM)}
                  disabled={qty === 0}
                  className={`w-8 h-8 rounded-lg font-bold text-lg flex items-center justify-center transition-colors ${
                    qty > 0 ? "bg-gray-100 hover:bg-red-100 hover:text-red-600 text-gray-600" : "bg-gray-50 text-gray-200 cursor-not-allowed"
                  }`}>
                  −
                </button>
                <span className={`text-base font-black w-8 text-center ${qty > 0 ? "text-gray-900" : "text-gray-300"}`}>
                  {qty > 999 ? "999+" : qty}
                </span>
                <button
                  onClick={() => add(item.id, item.priceRM)}
                  disabled={!canAfford}
                  className={`w-8 h-8 rounded-lg font-bold text-lg flex items-center justify-center transition-colors ${
                    canAfford ? "bg-orange-500 hover:bg-orange-600 text-white" : "bg-gray-100 text-gray-300 cursor-not-allowed"
                  }`}>
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Receipt / Cart Summary ───────────────────────────────────────────── */}
      {totalItems > 0 && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span>🧾</span> Resit Belanja Kau
          </h3>
          <div className="space-y-2">
            {ITEMS.filter((i) => (cart[i.id] ?? 0) > 0).map((item) => {
              const qty = cart[item.id]!;
              return (
                <div key={item.id} className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">{item.emoji} {item.nameMS} × {qty.toLocaleString()}</span>
                  <span className="font-semibold text-gray-900">{fmtRM(qty * item.priceRM)}</span>
                </div>
              );
            })}
            <div className="border-t border-gray-100 pt-3 flex items-center justify-between font-bold">
              <span className="text-gray-900">Jumlah Dibelanjakan</span>
              <span className="text-orange-600 text-lg">{fmtRM(spent)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Baki dalam akaun virtual</span>
              <span className="text-gray-500">{fmtRM(remaining)}</span>
            </div>
          </div>
          <div className="mt-4 p-3 bg-amber-50 rounded-xl">
            <p className="text-xs text-amber-700 text-center">
              Kalau kau betul-betul jadi {selectedBillionaire.name}, baki duit kau masih <strong>{fmtRM(remaining)}</strong> — dan dia akan earn balik dalam masa
              <strong> {(remaining / (selectedBillionaire.netWorthUSD * 1_000_000_000 * USD_TO_MYR / 365 / 24)).toFixed(1)} jam</strong>. 😬
            </p>
          </div>
        </div>
      )}

      {/* ── Fun Facts ───────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { emoji: "🧮", title: "Dalam sehari", body: `${selectedBillionaire.name} boleh earn lebih kurang ${fmtRM(Math.round(selectedBillionaire.netWorthUSD * 1_000_000_000 * USD_TO_MYR / 365))} sehari (anggaran).` },
          { emoji: "🇲🇾", title: "Vs Malaysia GDP", body: `Kekayaan ${selectedBillionaire.name} bersamaan ${((selectedBillionaire.netWorthUSD * 1e9 * USD_TO_MYR) / 1_700_000_000_000 * 100).toFixed(0)}% daripada KDNK Malaysia 2024.` },
          { emoji: "🏠", title: "Boleh beli berapa Myvi?", body: `Dengan duit ni, boleh beli ${Math.floor(selectedBillionaire.netWorthUSD * 1e9 * USD_TO_MYR / 52_000).toLocaleString("en-MY")} buah Perodua Myvi.` },
        ].map((f) => (
          <div key={f.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
            <div className="text-2xl mb-2">{f.emoji}</div>
            <p className="font-semibold text-gray-800 text-sm mb-1">{f.title}</p>
            <p className="text-gray-500 text-xs leading-relaxed">{f.body}</p>
          </div>
        ))}
      </div>

      {/* ── Disclaimer ──────────────────────────────────────────────────────── */}
      <p className="text-xs text-gray-300 text-center mt-8">
        Ini adalah simulasi hiburan semata-mata. Angka kekayaan adalah anggaran berdasarkan laporan awam 2024–2025. Harga item adalah anggaran dalam MYR. Tiada nilai kewangan sebenar terlibat.
      </p>
    </div>
  );
}
