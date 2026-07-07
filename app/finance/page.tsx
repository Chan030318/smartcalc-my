import type { Metadata } from "next";
import ArticleListPage from "@/components/ArticleListPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Youth Financial Literacy — Money Rules for Young Malaysians | SmartCalc MY",
  description:
    "Understand debt, banks, loans, and cash flow before one decision costs years. Practical finance guides for Malaysian youth and fresh graduates — 大学生理财。",
  alternates: { canonical: "/finance" },
  openGraph: {
    title: "Youth Financial Literacy — Money Rules for Young Malaysians | SmartCalc MY",
    description:
      "Understand debt, banks, loans, cash flow, and financial traps before one decision costs years. Plain-language guides for young Malaysians.",
    url: `${BASE_URL}/finance`,
    type: "website",
    locale: "en_MY",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "SmartCalc MY Finance Library" }],
  },
};

export default function FinancePage() {
  return (
    <>
      <Navbar />
      <ArticleListPage category="finance" />
      <Footer />
    </>
  );
}
