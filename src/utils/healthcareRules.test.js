import { describe, expect, it } from 'vitest';
import { patientStatusLabel, utilizationBand } from './healthcareRules';

describe('healthcare rules',()=>{
  it('flags utilization above 90 as critical',()=>expect(utilizationBand(91)).toBe('critical'));
  it('classifies normal utilization',()=>expect(utilizationBand(74)).toBe('moderate'));
  it('preserves supported patient statuses',()=>expect(patientStatusLabel('Active')).toBe('Active'));
  it('guards unknown statuses',()=>expect(patientStatusLabel('Other')).toBe('Unknown'));
  it('normalizes string and casing inputs',()=>{
    expect(utilizationBand('88')).toBe('high');
    expect(patientStatusLabel(' active ')).toBe('Active');
    expect(patientStatusLabel('discharged')).toBe('Discharged');
  });
});
