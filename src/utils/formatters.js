const toSafeNumber = value => {
  const numericValue = Number(value);
  return Number.isFinite(numericValue) ? numericValue : 0;
};

export const formatNumber = value => new Intl.NumberFormat('en-US').format(toSafeNumber(value));
export const formatCurrency = value => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(toSafeNumber(value));
