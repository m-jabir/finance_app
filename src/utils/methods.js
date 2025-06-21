export const formatCurrency = number => {
  const abs = Math.abs(number).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const sign = number < 0 ? '-' : '';
  return `${sign}$${abs}`;
};
