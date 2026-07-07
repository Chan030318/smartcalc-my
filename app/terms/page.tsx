import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TermsPageClient from "@/components/TermsPageClient";

export const metadata: Metadata = {
  title: "Terms of Use - SmartCalc MY",
  description:
    "Terms of use for SmartCalc MY calculators and educational content, including estimate disclaimers and acceptable use conditions.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <TermsPageClient />
      <Footer />
    </>
  );
}
