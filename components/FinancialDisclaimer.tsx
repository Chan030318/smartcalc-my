export default function FinancialDisclaimer() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
      <div className="flex gap-3 bg-blue-50 border border-blue-100 rounded-2xl px-5 py-4">
        <svg
          className="flex-shrink-0 w-5 h-5 text-blue-400 mt-0.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className="text-sm text-blue-700 leading-relaxed">
          <span className="font-semibold">Disclaimer:</span> This calculator and article are provided for educational and
          informational purposes only. Results are estimates and should not be considered financial, tax, legal, or
          investment advice. Please consult the relevant authority, financial institution, or qualified professional
          before making financial decisions.
        </p>
      </div>
    </div>
  );
}
