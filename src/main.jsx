import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Activity, BedDouble, CalendarDays, ChevronDown, CircleDollarSign, FileText, HeartPulse, LayoutDashboard, Menu, Moon, Search, Settings, Sun, Users, X } from 'lucide-react';
import { departments, monthlyTrend, patients } from './data/healthcareData';
import { formatNumber, formatCurrency } from './utils/formatters';
import './styles.css';

const navItems = [
  ['Overview', LayoutDashboard], ['Patients', Users], ['Appointments', CalendarDays], ['Analytics', Activity], ['Reports', FileText],
];

function App() {
  const [period, setPeriod] = useState('Last 30 days');
  const [query, setQuery] = useState('');
  const [dark, setDark] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [active, setActive] = useState('Overview');
  const filteredPatients = useMemo(() => patients.filter(p => `${p.name} ${p.department}`.toLowerCase().includes(query.toLowerCase())), [query]);
  const maxAdmissions = Math.max(...monthlyTrend.map(x => x.admissions));

  return <div className={`shell ${dark ? 'dark' : ''}`}>
    <aside className={mobile ? 'sidebar open' : 'sidebar'}>
      <div className="brand"><div className="brand-mark"><HeartPulse size={19}/></div><span>CareSight</span><button className="mobile-close" onClick={()=>setMobile(false)}><X/></button></div>
      <p className="section-label">Workspace</p>
      <nav>{navItems.map(([label, Icon]) => <button key={label} className={active===label?'nav active':'nav'} onClick={()=>{setActive(label);setMobile(false)}}><Icon size={18}/>{label}</button>)}</nav>
      <div className="sidebar-bottom"><button className="nav"><Settings size={18}/> Settings</button><div className="facility"><div className="facility-icon"><BedDouble size={17}/></div><div><b>Northstar Medical</b><small>Central Campus</small></div></div></div>
    </aside>
    <main className="content">
      <header className="topbar"><button className="menu" onClick={()=>setMobile(true)}><Menu/></button><div className="top-search"><Search size={17}/><input aria-label="Search patients" placeholder="Search patients, departments..." value={query} onChange={e=>setQuery(e.target.value)}/></div><div className="top-actions"><button className="theme" onClick={()=>setDark(!dark)}>{dark?<Sun/>:<Moon/>}</button><div className="avatar">AN</div></div></header>
      <section className="page-head"><div><span className="kicker">Hospital performance</span><h1>Healthcare overview</h1><p>Monitor patient activity and operational performance across the hospital.</p></div><button className="period"><CalendarDays size={16}/>{period}<ChevronDown size={15}/></button></section>
      <section className="kpis"><Kpi icon={Users} label="Total patients" value={formatNumber(12842)} change="8.2%" tone="up"/><Kpi icon={HeartPulse} label="Readmission rate" value="6.8%" change="1.4%" tone="down"/><Kpi icon={BedDouble} label="Bed utilization" value="82.4%" change="4.6%" tone="up"/><Kpi icon={CircleDollarSign} label="Net revenue" value={formatCurrency(2840000)} change="12.7%" tone="up"/></section>
      <section className="grid-two"><div className="card chart-card"><div className="card-head"><div><h2>Patient admissions</h2><p>Monthly admissions and discharges</p></div><span className="legend"><i/>Admissions <i className="second"/>Discharges</span></div><div className="chart">{monthlyTrend.map(item=><div className="bar-group" key={item.month}><div className="bars"><span className="bar admission" style={{height:`${item.admissions/maxAdmissions*100}%`}} title={`${item.admissions} admissions`}/><span className="bar discharge" style={{height:`${item.discharges/maxAdmissions*100}%`}} title={`${item.discharges} discharges`}/></div><small>{item.month}</small></div>)}</div></div><div className="card"><div className="card-head"><div><h2>Department performance</h2><p>Current utilization</p></div></div><div className="dept-list">{departments.map(d=><div className="dept" key={d.name}><div className="dept-row"><b>{d.name}</b><span>{d.utilization}%</span></div><div className="track"><i style={{width:`${d.utilization}%`}}/></div><small>{d.patients} active patients</small></div>)}</div></div></section>
      <section className="card patients-card"><div className="card-head"><div><h2>Recent patients</h2><p>{filteredPatients.length} patients matching your view</p></div><button className="outline">View all</button></div><div className="table-wrap"><table><thead><tr><th>Patient</th><th>Department</th><th>Visit</th><th>Status</th></tr></thead><tbody>{filteredPatients.map(p=><tr key={p.id}><td><div className="patient"><span>{p.initials}</span><b>{p.name}</b></div></td><td>{p.department}</td><td>{p.visit}</td><td><em className={`status ${p.status.toLowerCase()}`}>{p.status}</em></td></tr>)}</tbody></table></div></section>
    </main>
  </div>
}
function Kpi({icon:Icon,label,value,change,tone}){return <div className="kpi"><div className="kpi-icon"><Icon size={18}/></div><div className="kpi-label">{label}</div><strong>{value}</strong><span className={tone}>{tone==='up'?'↑':'↓'} {change} <small>vs prior period</small></span></div>}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
