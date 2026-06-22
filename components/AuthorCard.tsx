import Link from "next/link";

export default function AuthorCard() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
      <div className="flex items-start gap-4 bg-gray-50 border border-gray-100 rounded-2xl px-5 py-5">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
          A
        </div>
        <div>
          <p className="text-xs text-gray-400 mb-0.5 uppercase tracking-wide font-medium">Written by</p>
          <Link
            href="/author/alvin-chan"
            className="font-semibold text-gray-900 hover:text-blue-600 transition-colors"
          >
            Alvin Chan Wun Long
          </Link>
          <p className="text-sm text-gray-500 mt-0.5">
            Creator of SmartCalc MY · Software Engineer based in Malaysia
          </p>
        </div>
      </div>
    </div>
  );
}
