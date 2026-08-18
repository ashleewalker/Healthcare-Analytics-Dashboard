export const calculateCompletionRate = (completed, total) => total === 0 ? 0 : Number(((completed / total) * 100).toFixed(1));
export const calculateAverage = values => values.length ? values.reduce((sum,value)=>sum+value,0)/values.length : 0;
