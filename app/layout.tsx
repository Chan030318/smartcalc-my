import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SmartCalc MY — Free Calculators for Malaysians",
    template: "%s | SmartCalc MY",
  },
  description:
    "Free online calculators for Malaysians. BMI Calculator, Salary Calculator with EPF & PCB deductions, and Loan Calculator. Fast, accurate, and 100% private.",
  keywords: [
    "BMI calculator Malaysia",
    "salary calculator Malaysia",
    "loan calculator Malaysia",
    "EPF calculator",
    "PCB calculator",
    "take home pay Malaysia",
    "body mass index calculator",
  ],
  metadataBase: new URL("https://smartcalc.my"),
  openGraph: {
    type: "website",
    locale: "en_MY",
    siteName: "SmartCalc MY",
    title: "SmartCalc MY — Free Calculators for Malaysians",
    description:
      "Free BMI, Salary, and Loan calculators built for Malaysians. Instant results, no sign-up required.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartCalc MY — Free Calculators for Malaysians",
    description:
      "Free BMI, Salary, and Loan calculators built for Malaysians.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-MY"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
