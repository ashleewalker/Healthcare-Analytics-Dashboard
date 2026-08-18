export const utilizationBand = value => value >= 90 ? 'critical' : value >= 80 ? 'high' : value >= 65 ? 'moderate' : 'low';
export const patientStatusLabel = status => ({Active:'Active',Discharged:'Discharged',Scheduled:'Scheduled'})[status] || 'Unknown';
