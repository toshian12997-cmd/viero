import React, { useEffect, useState } from 'react';
import { ArrowRight, Bell, BriefcaseBusiness, CheckCircle2, Eye, EyeOff, FileText, LayoutDashboard, Lock, LogOut, Mail, Menu, Package, Search, Settings, ShoppingCart, Sparkles, Users, WalletCards, X } from 'lucide-react';

const navItems = [['Overview', LayoutDashboard], ['Sales', ShoppingCart], ['Customers', Users], ['Inventory', Package], ['Invoices', FileText], ['Reports', WalletCards], ['Decision Room', BriefcaseBusiness], ['VIERO AI', Sparkles]];
const backgrounds = [
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=90',
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1800&q=90',
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1800&q=90'
];

function Logo({ small = false }) {
  return <div className={`logo ${small ? 'logo-small' : ''}`}><span className="logo-v">V</span><span className="logo-dot"/><strong>IERO</strong></div>;
}

function Intro({ onDone }) {
  const [stage, setStage] = useState(0);
  useEffect(() => {
    const timers = [
      window.setTimeout(() => setStage(1), 700),
      window.setTimeout(() => setStage(2), 4200),
      window.setTimeout(() => setStage(3), 7200),
      window.setTimeout(() => setStage(4), 9300),
      window.setTimeout(onDone, 11500)
    ];
    return () => timers.forEach(window.clearTimeout);
  }, [onDone]);
  return <section className={`intro stage-${stage}`} aria-label="Veyro introduction">
    <div className="intro-glow"/>
    <div className="intro-grid"/>
    <div className="intro-gate"><span/><i/></div>
    <div className="intro-walker"><div className="walker-head"/><div className="walker-body"><b>V</b></div><div className="walker-arm left"/><div className="walker-arm right"/><div className="briefcase"><span/></div></div>
    <div className="intro-center"><Logo/><p>BUSINESS INTELLIGENCE · DECISION · ACTION</p></div>
    <button className="skip-intro" onClick={onDone}>Skip intro <ArrowRight size={14}/></button>
  </section>;
}

function Auth({ onLogin }) {
  const [slide, setSlide] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  useEffect(() => {
    const timer = window.setInterval(() => setSlide(v => (v + 1) % backgrounds.length), 6500);
    return () => window.clearInterval(timer);
  }, []);
  const submit = e => { e.preventDefault(); onLogin(); };
  return <main className="auth-page">
    <section className="auth-panel">
      <Logo/>
      <div className="auth-content">
        <span className="eyebrow">VEYRO BUSINESS INTELLIGENCE</span>
        <h1>Welcome back</h1>
        <p className="auth-copy">Sign in to your Veyro workspace</p>
        <form onSubmit={submit}>
          <label>Email address<div className="field"><Mail size={17}/><input required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@yourbusiness.com" autoComplete="email"/></div></label>
          <label>Password<div className="field"><Lock size={17}/><input required type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="Your password" autoComplete="current-password"/><button type="button" className="field-action" onClick={() => setShowPassword(v => !v)} aria-label={showPassword ? 'Hide password' : 'Show password'}>{showPassword ? <EyeOff size={17}/> : <Eye size={17}/>}</button></div></label>
          <div className="form-row"><label className="remember"><input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)}/> Keep me signed in for 30 days</label><button type="button" className="text-link">Forgot password?</button></div>
          <button className="primary-button" type="submit">Sign in <ArrowRight size={17}/></button>
        </form>
        <div className="divider"><span>OR</span></div>
        <button className="google-button" type="button"><span className="google-g">G</span> Continue with Google</button>
        <p className="legal">By continuing, you agree to Veyro's Terms of Service and Privacy Policy.</p>
      </div>
    </section>
    <section className="auth-visual" aria-label="Business photography">
      {backgrounds.map((url, i) => <div key={url} className={`auth-photo ${i === slide ? 'active' : ''}`} style={{ backgroundImage: `url(${url})` }}/>) }
      <div className="visual-overlay"/>
      <div className="visual-brand"><span>V</span> Veyro</div>
      <div className="visual-copy"><small>BUSINESS INTELLIGENCE</small><h2>Understand your business.<br/>Decide with confidence.</h2><p>Built for the decisions that move a business forward.</p></div>
      <div className="visual-dots">{backgrounds.map((_, i) => <button key={i} className={i === slide ? 'active' : ''} onClick={() => setSlide(i)} aria-label={`Business image ${i + 1}`}/>)}</div>
    </section>
  </main>;
}

function Modal({ title, onClose, children }) {
  return <div className="modal-backdrop" onMouseDown={e => e.target === e.currentTarget && onClose()}><div className="modal-card"><button className="modal-close" onClick={onClose} aria-label="Close"><X size={18}/></button><span className="eyebrow">GET STARTED</span><h2>{title}</h2>{children}<button className="modal-button" onClick={onClose}>Close</button></div></div>;
}

function Dashboard({ onLogout }) {
  const [modal, setModal] = useState(false);
  const [menu, setMenu] = useState(false);
  return <main className="dashboard">
    <aside className={`sidebar ${menu ? 'open' : ''}`}><Logo small/><nav>{navItems.map(([name, Icon], i) => <a href={`#${name.toLowerCase().replaceAll(' ', '-')}`} className={i === 0 ? 'active' : ''} key={name}><Icon size={16}/><span>{name}</span></a>)}</nav><div className="sidebar-bottom"><a href="#settings"><Settings size={16}/><span>Settings</span></a><button onClick={onLogout}><LogOut size={16}/><span>Sign out</span></button></div></aside>
    <section className="dashboard-content">
      <header className="topbar"><button className="mobile-menu" onClick={() => setMenu(v => !v)} aria-label="Open menu"><Menu size={20}/></button><div><span className="eyebrow">BUSINESS PULSE</span><h2>Good morning.</h2><p>Your workspace is ready for real business data.</p></div><div className="top-actions"><button className="circle-button"><Search size={18}/></button><button className="circle-button"><Bell size={18}/></button><button className="avatar">V</button></div></header>
      <div className="empty-banner"><div><b>Start with your real business.</b><span>Veyro does not invent activity. Add your first records to unlock intelligence.</span></div><button onClick={() => setModal(true)}>Add your first data <ArrowRight size={15}/></button></div>
      <div className="dashboard-grid"><article className="panel large-panel"><div className="panel-head"><div><span className="eyebrow">BUSINESS MOMENTUM</span><h3>Build your picture</h3></div><select><option>30 days</option><option>90 days</option><option>1 year</option></select></div><div className="empty-chart"><div className="chart-lines"/><div className="chart-message"><CheckCircle2 size={22}/><b>No business data yet</b><span>Your real sales and records will appear here.</span></div></div></article><article className="panel"><span className="eyebrow">DECISION ROOM</span><h3>Ready when you are</h3><p className="muted">Veyro will surface risks, opportunities and useful decisions after you add real records.</p><div className="status-row"><span className="status-dot"/>Intelligence engine ready</div></article></div>
      <div className="dashboard-grid lower"><article className="panel"><span className="eyebrow">RECENT ACTIVITY</span><h3>Nothing recorded yet</h3><p className="muted">Your first sale, customer, product or invoice will start the business timeline.</p></article><article className="panel"><span className="eyebrow">VEYRO AI</span><h3>Business assistant</h3><p className="muted">Ask questions about your own business data when your workspace has records.</p><button className="outline-button">Explore VIERO AI <Sparkles size={14}/></button></article></div>
    </section>
    {modal && <Modal title="Bring your business into Veyro" onClose={() => setModal(false)}><p className="modal-copy">Start with real records. Veyro will not manufacture numbers or insights for an empty business.</p><div className="modal-options"><div><strong>Record a sale</strong><span>Capture your first transaction.</span></div><div><strong>Create a customer</strong><span>Build your customer record.</span></div><div><strong>Add a product</strong><span>Define products for inventory analysis.</span></div><div><strong>Import data</strong><span>Bring existing records into Veyro.</span></div></div></Modal>}
  </main>;
}

export default function App() {
  const [intro, setIntro] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  if (intro) return <Intro onDone={() => setIntro(false)}/>;
  if (loggedIn) return <Dashboard onLogout={() => setLoggedIn(false)}/>;
  return <Auth onLogin={() => setLoggedIn(true)}/>;
}
