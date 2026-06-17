import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — SmartCalc MY",
  description:
    "SmartCalc MY privacy policy. Learn how we handle your data, our use of cookies, Google AdSense, and your rights as a user.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = "17 June 2025";
const CONTACT_EMAIL = "hello@smartcalc.my";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-bold text-gray-900 mb-3">{title}</h2>
      <div className="text-gray-600 text-sm leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-gray-50">
        {/* Hero */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Privacy Policy</h1>
            <p className="text-gray-500 text-sm">Effective date: {EFFECTIVE_DATE}</p>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-10 space-y-8">

            <p className="text-gray-600 text-sm leading-relaxed">
              SmartCalc MY (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the website at smartcalc.my (the &quot;Site&quot;). This Privacy Policy explains what information we collect, how we use it, and your rights regarding that information. By using the Site, you agree to the practices described in this policy.
            </p>

            <Section title="1. Information We Collect">
              <p><strong>Calculator inputs:</strong> All calculations (BMI, salary, loan) are performed entirely within your browser. We do <strong>not</strong> receive, store, or transmit any figures you enter into our calculators.</p>
              <p><strong>Usage data:</strong> We may collect non-personally identifiable information automatically when you visit the Site, including your browser type, device type, pages visited, time spent on pages, and referring URLs. This data is collected in aggregate and cannot be used to identify you.</p>
              <p><strong>Cookies:</strong> We use cookies and similar tracking technologies for analytics and advertising purposes, as described below.</p>
            </Section>

            <Section title="2. Google AdSense and Advertising">
              <p>We use Google AdSense to display advertisements on the Site. Google AdSense uses cookies to serve ads based on your prior visits to this and other websites.</p>
              <p>Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on their visit to our Site and/or other sites on the internet. You may opt out of personalised advertising by visiting <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.</p>
              <p>We do not control the cookies placed by Google AdSense. For more information on how Google uses data when you use our Site, please visit <a href="https://policies.google.com/technologies/partner-sites" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google&apos;s Privacy &amp; Terms</a>.</p>
            </Section>

            <Section title="3. Analytics">
              <p>We may use web analytics services (such as Google Analytics) to understand how visitors use the Site. These services collect information such as your IP address (anonymised), browser, pages viewed, and time on site. This data is used solely to improve the Site and is not shared with third parties for marketing purposes.</p>
              <p>You may opt out of Google Analytics tracking by installing the <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</p>
            </Section>

            <Section title="4. Cookies">
              <p>Cookies are small text files stored on your device when you visit a website. We use the following types:</p>
              <ul className="list-disc list-inside space-y-1 pl-2">
                <li><strong>Strictly necessary cookies:</strong> Required for the Site to function correctly.</li>
                <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with the Site (e.g. Google Analytics).</li>
                <li><strong>Advertising cookies:</strong> Used by Google AdSense to serve relevant advertisements.</li>
              </ul>
              <p>You can control or delete cookies through your browser settings. Disabling cookies may affect the functionality of parts of the Site and the relevance of ads shown.</p>
            </Section>

            <Section title="5. Third-Party Links">
              <p>The Site may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to read the privacy policy of any website you visit.</p>
            </Section>

            <Section title="6. Children's Privacy">
              <p>The Site is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will delete it promptly.</p>
            </Section>

            <Section title="7. Data Retention">
              <p>We do not store personal data from calculator usage. Any anonymised analytics data retained by third-party providers (e.g. Google Analytics) is subject to their own retention policies.</p>
            </Section>

            <Section title="8. Your Rights">
              <p>Depending on your jurisdiction, you may have rights to access, correct, or delete personal data we hold about you. As we do not collect personally identifiable information through normal Site usage, these rights are unlikely to be applicable. For any concerns, please contact us at <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 hover:underline">{CONTACT_EMAIL}</a>.</p>
            </Section>

            <Section title="9. Changes to This Policy">
              <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of the Site after changes constitutes your acceptance of the revised policy.</p>
            </Section>

            <Section title="10. Contact">
              <p>If you have any questions about this Privacy Policy, please contact us at: <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 hover:underline">{CONTACT_EMAIL}</a>.</p>
            </Section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
