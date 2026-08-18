export function KpiCard({ label, value, change, direction='up' }) {
  return <article className="kpi" aria-label={label}><div className="kpi-label">{label}</div><strong>{value}</strong><span className={direction}>{direction==='up'?'↑':'↓'} {change}</span></article>;
}
