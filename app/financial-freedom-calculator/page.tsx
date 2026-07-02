import type { Metadata } from "next";
import { SITE_URL } from "@/lib/siteConfig";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FreedomCalculator from "./FreedomCalculator";

export const metadata: Metadata = {
  title: "Freedom Number Calculator Malaysia — Berapa Lagi Kau Perlu Sebelum Boleh Berhenti Kerja?",
  description:
    "Kira Freedom Number kau — jumlah aset yang kau perlukan untuk pendapatan pasif melebihi perbelanjaan hidup. Bebaskan diri daripada Rat Race dengan panduan kewangan Malaysia.",
  keywords: [
    "freedom number calculator Malaysia",
    "financial freedom calculator Malaysia",
    "passive income calculator Malaysia",
    "berapa nak pencen awal Malaysia",
    "FIRE calculator Malaysia",
    "kebebasan kewangan Malaysia",
    "rat race calculator",
    "bila boleh berhenti kerja Malaysia",
    "EPF financial freedom",
    "Rich Dad Poor Dad Malaysia",
  ],
  alternates: { canonical: `${SITE_URL}/financial-freedom-calculator` },
  openGraph: {
    title: "Freedom Number Calculator — Berapa Lagi Kau Perlu Sebelum Bebas?",
    description: "Kira berapa modal yang kau perlukan untuk pendapatan pasif melebihi perbelanjaan hidup — dan bila kau akan bebas daripada Rat Race.",
    url: `${SITE_URL}/financial-freedom-calculator`,
    siteName: "SmartCalc MY",
    locale: "ms_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freedom Number Calculator Malaysia 🏆",
    description: "Kira Freedom Number kau dan lihat bila kau boleh bebas daripada Rat Race.",
  },
};

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Freedom Number Calculator Malaysia",
      url: `${SITE_URL}/financial-freedom-calculator`,
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web",
      description: "Kalkulator kebebasan kewangan Malaysia — kira Freedom Number, masa untuk bebas, dan pelan pelaburan berdasarkan prinsip Rich Dad Poor Dad.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "MYR" },
      inLanguage: "ms-MY",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Apa itu Freedom Number?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Freedom Number adalah jumlah aset pelaburan yang kau perlukan supaya pendapatan pasif tahunan (aset × kadar pulangan) melebihi perbelanjaan hidup tahunan kau. Formula: Freedom Number = Perbelanjaan Tahunan ÷ Kadar Pulangan. Contoh: RM 3,000/bulan × 12 ÷ 6% = RM 600,000.",
          },
        },
        {
          "@type": "Question",
          name: "Berapa kadar pulangan yang realistic di Malaysia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kadar pulangan realistic di Malaysia: EPF (KWSP) ~5.5% p.a., ASB/ASNB ~4.75% p.a., Fixed Deposit ~3.25% p.a., REITs ~6.5% p.a., Saham KLSE ~9% p.a. jangka panjang. Diversifikasi antara beberapa kenderaan pelaburan adalah strategi terbaik.",
          },
        },
        {
          "@type": "Question",
          name: "Apa itu Rat Race?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Rat Race adalah situasi di mana kau terpaksa terus bekerja untuk membayar bil — sebaik sahaja kau berhenti kerja, pendapatan kau berhenti. Konsep daripada buku Rich Dad Poor Dad oleh Robert Kiyosaki. Kau keluar dari Rat Race bila pendapatan pasif daripada aset melebihi perbelanjaan hidup kau.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Freedom Number Calculator", item: `${SITE_URL}/financial-freedom-calculator` },
      ],
    },
  ],
};

export default function FinancialFreedomPage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />

      {/* ── Page Header ──────────────────────────────────────────────────── */}
      <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-emerald-950 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-0">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <a href="/" className="hover:text-emerald-400 transition-colors">Home</a>
            <span>/</span>
            <span className="text-gray-300 font-medium">Freedom Number Calculator</span>
          </nav>
          <div className="text-5xl mb-4">🏆</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Berapa Lagi Kau Perlu Sebelum Boleh Berhenti Kerja?
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mb-6">
            Kira <strong className="text-emerald-400">Freedom Number</strong> kau — jumlah aset yang diperlukan supaya wang bekerja untuk kau, bukan kau bekerja untuk wang.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="bg-emerald-900/50 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-800">💡 Prinsip Rich Dad Poor Dad</span>
            <span className="bg-gray-800 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full border border-gray-700">🇲🇾 EPF • ASB • REITs • Saham</span>
            <span className="bg-blue-900/50 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full border border-blue-800">🐀 Rat Race Meter</span>
          </div>
        </div>
      </div>

      <FreedomCalculator />

      {/* ── Educational SEO Section ──────────────────────────────────────── */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Panduan: Kebebasan Kewangan di Malaysia</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-600">
          <div>
            <h3 className="font-bold text-gray-800 mb-2">Apa itu Freedom Number?</h3>
            <p className="leading-relaxed mb-3">
              Freedom Number adalah konsep dari buku <em>Rich Dad Poor Dad</em> oleh Robert Kiyosaki. Ia adalah jumlah aset pelaburan yang kau perlukan supaya pendapatan pasif tahunan melebihi perbelanjaan hidup kau.
            </p>
            <p className="bg-gray-50 rounded-lg px-4 py-3 font-mono text-xs border border-gray-100">
              Freedom Number = Perbelanjaan Tahunan ÷ Kadar Pulangan<br />
              <span className="text-gray-400">Contoh: RM36,000 ÷ 6% = RM600,000</span>
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-2">Keluar dari Rat Race</h3>
            <p className="leading-relaxed">
              Rat Race berlaku apabila kau terpaksa bekerja semata-mata untuk membayar bil. Bila pendapatan pasif dari aset (EPF, saham, REITs, hartanah) melebihi perbelanjaan kau — kau bebas dari Rat Race. Kerja jadi pilihan, bukan paksaan.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-2">Pelaburan di Malaysia untuk Mencapai Freedom</h3>
            <ul className="space-y-1.5 leading-relaxed">
              <li><strong>EPF (KWSP)</strong> — ~5.5% p.a., dijamin kerajaan, ideal untuk jangka panjang</li>
              <li><strong>ASB / ASNB</strong> — ~4.75% p.a., untuk Bumiputera, stabil dan boleh dipercayai</li>
              <li><strong>REITs Malaysia</strong> — ~6.5% p.a., pendapatan dividen tetap, mudah dijual</li>
              <li><strong>Saham KLSE / ETF</strong> — ~9% p.a. jangka panjang, risiko lebih tinggi</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 mb-2">Strategi FIRE di Malaysia</h3>
            <p className="leading-relaxed">
              FIRE (Financial Independence, Retire Early) semakin popular di Malaysia. Strategi asas: simpan 50-70% pendapatan, labur secara konsisten, kurangkan hutang berkadar tinggi, dan biarkan faedah kompaun bekerja untuk kau selama 15-25 tahun.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { href: "/compound-interest-calculator",        label: "Kalkulator Faedah Kompaun", emoji: "📈" },
            { href: "/savings-calculator-malaysia",         label: "Kalkulator Simpanan",        emoji: "💰" },
            { href: "/mortgage-calculator-malaysia",        label: "Kalkulator Mortgage",        emoji: "🏠" },
            { href: "/car-loan-calculator-malaysia",        label: "Boleh Beli Kereta?",          emoji: "🚗" },
          ].map((link) => (
            <a key={link.href} href={link.href}
              className="flex flex-col items-center gap-1 bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 rounded-xl p-4 text-center transition-colors">
              <span className="text-2xl">{link.emoji}</span>
              <span className="text-xs font-medium text-gray-600 hover:text-emerald-700">{link.label}</span>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
