const priceFormatter = new Intl.NumberFormat("uk-UA", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const formatPrice = (value: number) => `${priceFormatter.format(value)} грн`;

/** "0996883904" або "+380 50 323 65 45" → "tel:+380…" (міжнародний формат) */
export const telHref = (phone: string) => {
  const clean = phone.replace(/[^\d+]/g, "");
  return `tel:${clean.startsWith("0") ? `+38${clean}` : clean}`;
};
