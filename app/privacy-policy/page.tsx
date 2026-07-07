import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrivacyPolicyClient from "@/components/PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy - SmartCalc MY",
  description:
    "SmartCalc MY privacy policy. Learn how we handle calculator inputs, analytics, cookies, advertising, and privacy contact requests.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <PrivacyPolicyClient />
      <Footer />
    </>
  );
}
