const toSafeNumber = value => {
  const numericValue = Number(value);
  return Number.isFinite(numericValue) ? numericValue : 0;
};

export const utilizationBand = value => {
  const normalizedValue = toSafeNumber(value);

  if (normalizedValue >= 90) return 'critical';
  if (normalizedValue >= 80) return 'high';
  if (normalizedValue >= 65) return 'moderate';

  return 'low';
};

export const patientStatusLabel = status => {
  if (typeof status !== 'string') return 'Unknown';

  const mapping = {
    active: 'Active',
    discharged: 'Discharged',
    scheduled: 'Scheduled',
  };

  return mapping[status.trim().toLowerCase()] || 'Unknown';
};
