import { describe, expect, it } from 'vitest';
import { departments, monthlyTrend, patients } from './healthcareData';

describe('sample healthcare dataset',()=>{
  it('contains a complete monthly trend',()=>expect(monthlyTrend).toHaveLength(6));
  it('keeps department utilization in percentage bounds',()=>expect(departments.every(d=>d.utilization>=0&&d.utilization<=100)).toBe(true));
  it('uses unique patient identifiers',()=>expect(new Set(patients.map(p=>p.id)).size).toBe(patients.length));
});
