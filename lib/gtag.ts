type GtagArgs =
  | ["config", string, Record<string, unknown>?]
  | ["event", string, Record<string, unknown>?]
  | ["js", Date];

declare global {
  interface Window {
    gtag: (...args: GtagArgs) => void;
    dataLayer: unknown[];
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export function pageview(url: string) {
  if (!GA_ID || typeof window === "undefined") return;
  window.gtag("config", GA_ID, { page_path: url });
}

export function event(action: string, params?: Record<string, unknown>) {
  if (!GA_ID || typeof window === "undefined") return;
  window.gtag("event", action, params);
}

export function trackCalculatorUse(
  calculator: "bmi" | "salary" | "loan",
  params?: Record<string, string | number>
) {
  event("calculator_use", { event_category: calculator, ...params });
}
