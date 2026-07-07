import type { Metadata } from "next";
import ArticleListPage from "@/components/ArticleListPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SITE_URL as BASE_URL } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Mindset Library — Think Better Before You Earn More | SmartCalc MY",
  description:
    "Simple mental models for young Malaysians. Active vs passive income, the Rat Race, and habits for long-term financial freedom. 年轻人理财 马来西亚入门。",
  alternates: { canonical: "/mindset" },
  openGraph: {
    title: "Mindset Library — Think Better Before You Earn More | SmartCalc MY",
    description:
      "Simple mental models for young Malaysians who want to build assets, habits, and long-term financial freedom.",
    url: `${BASE_URL}/mindset`,
    type: "website",
    locale: "en_MY",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "SmartCalc MY Mindset Library" }],
  },
};

export default function MindsetPage() {
  return (
    <>
      <Navbar />
      <ArticleListPage category="mindset" />
      <Footer />
    </>
  );
}
