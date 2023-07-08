export type CurrencyRateResponse = {
  date: string;
  base: string;
  rates: Record<string, string>;
};
