const toFiniteNumber = (value, fallback = 0) => {
  const numericValue = Number(value);
  return Number.isFinite(numericValue) ? numericValue : fallback;
};

export const calculateCompletionRate = (completed, total) => {
  const safeCompleted = toFiniteNumber(completed, 0);
  const safeTotal = toFiniteNumber(total, 0);

  if (safeTotal <= 0) return 0;

  return Number(Math.min(Math.max((safeCompleted / safeTotal) * 100, 0), 100).toFixed(1));
};

export const calculateAverage = values => {
  if (!Array.isArray(values)) return 0;

  const numericValues = values.reduce((result, value) => {
    if (value === null || value === undefined || (typeof value === 'string' && value.trim() === '')) {
      return result;
    }

    const numericValue = Number(value);

    if (Number.isFinite(numericValue)) {
      result.push(numericValue);
    }

    return result;
  }, []);

  if (!numericValues.length) return 0;

  return numericValues.reduce((sum, value) => sum + value, 0) / numericValues.length;
};
