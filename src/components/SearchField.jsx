import { Search } from 'lucide-react';
export function SearchField({ value, onChange }) { return <label className="top-search"><Search size={17}/><input aria-label="Search" value={value} onChange={onChange} placeholder="Search patients, departments..."/></label>; }
