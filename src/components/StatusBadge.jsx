export function StatusBadge({ status }) { return <span className={`status ${String(status).toLowerCase()}`}>{status}</span>; }
