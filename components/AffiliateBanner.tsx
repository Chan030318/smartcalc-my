"use client";

interface AffiliateLink {
  name: string;
  tag: string;
  tagColor: string;
  desc: string;
  href: string;
  cta: string;
}

const LOAN_PARTNERS: AffiliateLink[] = [
  {
    name: "iMoney",
    tag: "Personal & Home Loans",
    tagColor: "bg-blue-100 text-blue-700",
    desc: "Compare loan rates from 20+ Malaysian banks. Free eligibility check, no impact on your credit score.",
    href: "https://www.imoney.my/personal-loan",
    cta: "Compare Rates →",
  },
  {
    name: "RinggitPlus",
    tag: "Home Loans",
    tagColor: "bg-green-100 text-green-700",
    desc: "Find the best mortgage rate in Malaysia. Instant comparison across all major banks.",
    href: "https://www.ringgitplus.com/en/home-loan/",
    cta: "Find Best Rate →",
  },
];

const CREDIT_CARD_PARTNERS: AffiliateLink[] = [
  {
    name: "iMoney",
    tag: "Credit Cards",
    tagColor: "bg-purple-100 text-purple-700",
    desc: "Compare cashback, miles, and rewards credit cards from all Malaysian banks. Apply online in minutes.",
    href: "https://www.imoney.my/credit-cards",
    cta: "Compare Cards →",
  },
];

interface AffiliateBannerProps {
  type: "loan" | "credit-card";
}

export default function AffiliateBanner({ type }: AffiliateBannerProps) {
  const partners = type === "loan" ? LOAN_PARTNERS : CREDIT_CARD_PARTNERS;

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-4">
        <span className="text-lg">🏦</span>
        <div>
          <p className="text-xs font-medium text-blue-500 uppercase tracking-wide">
            Sponsored — Compare & Apply
          </p>
          <h3 className="text-base font-bold text-gray-900">
            {type === "loan"
              ? "Find the lowest loan rate in Malaysia"
              : "Find the best credit card for you"}
          </h3>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        {partners.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group bg-white rounded-xl p-4 border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <span className="font-bold text-gray-900 text-sm">{p.name}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${p.tagColor}`}>
                {p.tag}
              </span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mb-3">{p.desc}</p>
            <span className="text-xs font-semibold text-blue-600 group-hover:text-blue-800 transition-colors">
              {p.cta}
            </span>
          </a>
        ))}
      </div>

      <p className="text-xs text-gray-400 mt-3">
        SmartCalc MY may earn a referral fee if you apply through these links. This does not affect
        the rates or products shown.
      </p>
    </div>
  );
}
