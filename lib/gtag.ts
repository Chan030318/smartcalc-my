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

export function trackEpfCalculated(monthlySalary: number, projectedBalance: number) {
  event("epf_calculated", { monthly_salary: monthlySalary, projected_balance: projectedBalance });
}

export function trackPcbCalculated(monthlySalary: number, monthlyPcb: number) {
  event("pcb_calculated", { monthly_salary: monthlySalary, monthly_pcb: monthlyPcb });
}

export function trackDsrCalculated(monthlyIncome: number, dsr: number) {
  event("dsr_calculated", { monthly_income: monthlyIncome, dsr_percent: dsr });
}

export function trackSocsoCalculated(monthlySalary: number, employeeSocso: number, employerSocso: number) {
  event("socso_calculated", { monthly_salary: monthlySalary, employee_socso: employeeSocso, employer_socso: employerSocso });
}

export function trackEisCalculated(monthlySalary: number, employeeEis: number, employerEis: number) {
  event("eis_calculated", { monthly_salary: monthlySalary, employee_eis: employeeEis, employer_eis: employerEis });
}

export function trackCarLoanCalculated(loanAmount: number, years: number) {
  event("car_loan_calculated", { loan_amount: loanAmount, loan_years: years });
}

export function trackMortgageCalculated(loanAmount: number, years: number) {
  event("mortgage_calculated", { loan_amount: loanAmount, loan_years: years });
}

export function trackCompoundInterestCalculated(principal: number, finalBalance: number) {
  event("compound_interest_calculated", { principal, final_balance: finalBalance });
}

export function trackSavingsCalculated(monthlyAmount: number, finalBalance: number) {
  event("savings_calculated", { monthly_amount: monthlyAmount, final_balance: finalBalance });
}

export function trackCurrencyConverted(fromCurrency: string, toCurrency: string, amount: number) {
  event("currency_converted", { from_currency: fromCurrency, to_currency: toCurrency, amount });
}
