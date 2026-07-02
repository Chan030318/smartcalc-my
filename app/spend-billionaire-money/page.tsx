import type { Metadata } from "next";
import { SITE_URL } from "@/lib/siteConfig";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpendGame from "./SpendGame";

export const metadata: Metadata = {
  title: "Belanja Duit Orang Kaya | Spend a Billionaire's Money — SmartCalc MY",
  description:
    "Simulasi hiburan — belanja wang 10 orang terkaya di dunia (dalam MYR). Elon Musk, Jeff Bezos, Bill Gates dan lain-lain. Lihat betapa mustahilnya untuk habiskan duit mereka.",
  keywords: [
    "belanja duit orang kaya",
    "spend billionaire money Malaysia",
    "simulasi kekayaan",
    "berapa kaya Elon Musk",
    "spend bill gates money MYR",
    "fun financial simulator Malaysia",
  ],
  alternates: { canonical: `${SITE_URL}/spend-billionaire-money` },
  openGraph: {
    title: "Belanja Duit Orang Kaya 💸 | SmartCalc MY",
    description: "Cuba belanjakan wang Elon Musk, Jeff Bezos, Bill Gates dan lain-lain dalam Ringgit Malaysia. Simulasi hiburan — lihat betapa mustahilnya!",
    url: `${SITE_URL}/spend-billionaire-money`,
    siteName: "SmartCalc MY",
    locale: "ms_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Belanja Duit Orang Kaya 💸",
    description: "Cuba habiskan wang Elon Musk dalam Ringgit Malaysia. Spoiler: hampir mustahil.",
  },
};

const jsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Belanja Duit Orang Kaya — Billionaire Money Simulator",
      url: `${SITE_URL}/spend-billionaire-money`,
      applicationCategory: "EntertainmentApplication",
      operatingSystem: "Web",
      description: "Simulasi hiburan — belanja wang 10 orang terkaya di dunia dalam Ringgit Malaysia.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "MYR" },
      inLanguage: "ms-MY",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Belanja Duit Orang Kaya", item: `${SITE_URL}/spend-billionaire-money` },
      ],
    },
  ],
};

export default function SpendBillionairePage() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <Navbar />

      <div className="bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 border-b border-amber-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <a href="/" className="hover:text-orange-500 transition-colors">Home</a>
            <span>/</span>
            <span className="text-gray-800 font-medium">Belanja Duit Orang Kaya</span>
          </nav>
          <div className="text-5xl mb-4">💸</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Belanja Duit Orang Kaya
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mb-4">
            Pilih salah seorang daripada 10 orang terkaya di dunia — dan cuba habiskan wang mereka dalam Ringgit Malaysia. Spoiler: hampir mustahil. 😅
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full">🎮 Simulasi Hiburan</span>
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">💰 Dalam MYR</span>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">🇲🇾 Harga Malaysia</span>
          </div>
        </div>
      </div>

      <SpendGame />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">💡 Apa yang kita boleh belajar daripada ini?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <p className="font-semibold text-gray-800 mb-1">Kesenjangan kekayaan itu nyata</p>
              <p>Wang yang mustahil dibelanjakan oleh satu orang ini boleh mengubah kehidupan jutaan rakyat Malaysia. Ia perspektif yang penting untuk dimiliki.</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-1">Kekayaan sebenar = aset, bukan tunai</p>
              <p>Kekayaan jutawan ini sebahagian besarnya dalam bentuk saham dan aset — bukan wang tunai. Nilainya boleh naik turun setiap hari.</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-blue-100">
            <p className="text-sm text-gray-500">Walaupun ini permainan, kekayaan sebenar dibina dengan disiplin kewangan. Cuba <a href="/savings-calculator-malaysia" className="text-blue-600 hover:underline font-medium">kalkulator simpanan</a> atau <a href="/epf-calculator-malaysia" className="text-blue-600 hover:underline font-medium">kalkulator EPF</a> untuk mulakan perjalanan kewangan kau sendiri.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
