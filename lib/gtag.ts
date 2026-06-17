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

export function trackBmiCalculated(bmi: number) {
  event("bmi_calculated", { bmi_value: bmi });
}

export function trackSalaryCalculated(grossSalary: number) {
  event("salary_calculated", { gross_salary: grossSalary });
}

export function trackLoanCalculated(loanAmount: number, loanYears: number) {
  event("loan_calculated", { loan_amount: loanAmount, loan_years: loanYears });
}

export function trackIncomeTaxCalculated(annualIncome: number, taxPayable: number) {
  event("income_tax_calculated", { annual_income: annualIncome, tax_payable: taxPayable });
}
