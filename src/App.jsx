import React, { useEffect, useState } from 'react';
import { ArrowRight, Bell, BriefcaseBusiness, Check, ChevronRight, Database, Eye, EyeOff, FileText, LayoutDashboard, Lock, LogOut, Mail, Menu, Package, Search, Settings, ShoppingCart, Sparkles, Users, WalletCards, X } from 'lucide-react';

const navItems = [['Overview', LayoutDashboard], ['Sales', ShoppingCart], ['Customers', Users], ['Inventory', Package], ['Invoices', FileText], ['Reports', WalletCards], ['Decision Room', BriefcaseBusiness], ['VIERO AI', Sparkles]];
function Logo({ small = false }) { return <div className={`logo ${small ? 'small' : ''}`}><span className="logo-v">V</span><span className="logo-dot"/><b>IERO</b></div>; }
function Modal({ modal, close }) { if (!modal) return null; return <div className="modal" onMouseDown={e => e.target === e.currentTarget && close()}><div className="modal-card"><button className="modal-close" onClick={close}><X size={18}/></button><span className="eyebrow">{modal.label}</span><h2>{modal.title}</h2><div className="modal-body">{modal.body}</div><button className="modal-action" onClick={close}>Close</button></div></div>; }
function Intro({ onDone }) {
  const [stage, setStage] = useState(0);
  useEffect(() => { const timers = [setTimeout(() => setStage(1), 900), setTimeout(() => setStage(2), 7800), setTimeout(() => setStage(3), 9400), setTimeout(() => setStage(4), 10800), setTimeout(onDone, 17000)]; return () => timers.forEach(clearTimeout); }, [onDone]);
  return <section className={`intro stage-${stage}`}><div className="intro-scene"><div className="scene-light"/><div className="floor"/><div className="gate"><span/><i/></div><div className="walker"><div className="head"/><div className="neck"/><div className="torso"><em>V</em></div><div className="arm left"/><div className="arm right"/><div className="leg left"/><div className="leg right"/><div className="case"><i/></div></div><div className="case-glow"/></div><div className="intro-brand"><Logo/><span>BUSINESS INTELLIGENCE • DECISION • ACTION</span></div><button className="skip" onClick={onDone}>Skip intro</button></section>;
}
function Auth({ onLogin }) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [slide, setSlide] = useState(0);
  const backgrounds = [
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=90',
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1800&q=90',
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1800&q=90'
  ];
  useEffect(() => { const timer = setInterval(() => setSlide(v => (v + 1) % backgrounds.length), 6500); return () => clearInterval(timer); }, []);
  return <main className="auth rocket-login">
    <style>{`
      .rocket-login{min-height:100vh;display:grid;grid-template-columns:minmax(390px,38%) minmax(0,62%);background:#fff;color:#182033;overflow:hidden}
      .rocket-login .auth-panel{order:1;width:auto;max-width:none;padding:42px clamp(42px,6vw,92px);display:flex;flex-direction:column;justify-content:center;background:#fff;overflow:auto}
      .rocket-login .auth-panel>.logo{margin-bottom:74px;color:#172033;letter-spacing:.01em}
      .rocket-login .logo-v{color:#e9368f;font-size:34px;transform:rotate(-3deg)}
      .rocket-login .logo-dot{background:#e9368f;width:6px;height:6px;margin-top:10px;margin-left:2px;margin-right:8px}
      .rocket-login .auth-panel>.eyebrow{display:none}
      .rocket-login .auth-panel h1{font-family:'DM Sans',Arial,sans-serif;font-size:clamp(34px,3.2vw,48px);line-height:1.05;letter-spacing:-.04em;color:#172033;margin:0 0 10px;font-weight:700}
      .rocket-login .auth-panel h1 strong{display:none}
      .rocket-login .auth-copy{font-size:14px;line-height:1.5;color:#8b94a5;margin:0 0 38px}
      .rocket-login form{display:grid;gap:22px;max-width:480px}
      .rocket-login .auth-panel label{display:grid;gap:8px;color:#303949;font-size:13px;font-weight:500}
      .rocket-login .auth-panel input[type=text],.rocket-login .auth-panel input[type=password]{width:100%;height:44px;padding:0 42px 0 39px;border:1px solid #dfe4ec;background:#f8f9fb;color:#172033;border-radius:10px;outline:none;transition:border-color .2s,box-shadow .2s,background .2s}
      .rocket-login .auth-panel input[type=text]:focus,.rocket-login .auth-panel input[type=password]:focus{background:#fff;border-color:#e9368f;box-shadow:0 0 0 3px rgba(233,54,143,.09)}
      .rocket-login .auth-panel input::placeholder{color:#a6aebb}
      .rocket-login .field-wrap{position:relative}
      .rocket-login .field-wrap>svg{position:absolute;left:13px;top:13px;color:#8993a4;pointer-events:none}
      .rocket-login .password button{position:absolute;right:7px;top:5px;background:transparent;border:0;color:#7c8698;padding:7px;display:grid;place-items:center}
      .rocket-login .form-row{display:flex;justify-content:space-between;align-items:center;margin-top:-4px}
      .rocket-login .remember{display:flex!important;grid-template-columns:none!important;align-items:center;gap:8px!important;font-size:12px!important;color:#687386!important}
      .rocket-login .remember input{width:16px;height:16px;margin:0;accent-color:#e9368f}
      .rocket-login .link{border:0;background:transparent;color:#e9368f;font-size:12px;padding:0;font-weight:500}
      .rocket-login .primary{height:45px;border:0;background:#e9368f;color:#fff;border-radius:10px;padding:0 17px;font-weight:700;display:flex;justify-content:center;align-items:center;gap:10px;box-shadow:0 8px 20px rgba(233,54,143,.18);transition:transform .2s,box-shadow .2s,filter .2s}
      .rocket-login .primary:hover{transform:translateY(-1px);box-shadow:0 11px 26px rgba(233,54,143,.24);filter:saturate(1.04)}
      .rocket-login .primary:active{transform:translateY(0)}
      .rocket-login .divider{max-width:480px;text-align:center;color:#a0a8b5;font-size:11px;border-top:1px solid #e8ebf0;margin:31px 0 18px;padding-top:0;position:relative}
      .rocket-login .divider:after{content:'OR';position:absolute;left:50%;top:0;transform:translate(-50%,-50%);background:#fff;padding:0 12px;color:#a2aab6}
      .rocket-login .secondary{max-width:480px;height:45px;border:1px solid #dfe4ec;background:#fff;color:#293244;border-radius:10px;padding:0 17px;font-weight:600;transition:border-color .2s,background .2s}
      .rocket-login .secondary:hover{border-color:#c9d0db;background:#fafbfc}
      .rocket-login .legal{max-width:480px;text-align:center;color:#a0a8b5;font-size:10px;line-height:1.5;margin-top:17px}
      .rocket-login .auth-image{order:2;position:relative;min-height:100vh;background:#e9e0d6;overflow:hidden}
      .rocket-login .auth-photo{position:absolute;inset:0;background-position:center;background-size:cover;opacity:0;transition:opacity 1.25s ease;transform:scale(1.02)}
      .rocket-login .auth-photo.active{opacity:1}
      .rocket-login .image-shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(8,13,24,.06),rgba(8,13,24,.15)),linear-gradient(180deg,rgba(8,13,24,.04),rgba(8,13,24,.28));z-index:2}
      .rocket-login .image-brand{position:absolute;right:34px;top:32px;z-index:3;display:flex;align-items:center;gap:10px;color:#fff;font-weight:600;font-size:13px;text-shadow:0 1px 8px rgba(0,0,0,.18)}
      .rocket-login .image-brand .mark{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.22);border:1px solid rgba(255,255,255,.34);backdrop-filter:blur(10px);font-family:'Space Grotesk',sans-serif;font-weight:700}
      .rocket-login .image-caption{position:absolute;left:42px;bottom:38px;max-width:410px;z-index:3;color:#fff;text-shadow:0 2px 15px rgba(0,0,0,.28)}
      .rocket-login .image-caption span{color:#fff;font-size:10px;letter-spacing:.2em;font-weight:700}
      .rocket-login .image-caption h2{font-family:'Space Grotesk',sans-serif;font-size:30px;line-height:1.08;margin:10px 0 7px;font-weight:600}
      .rocket-login .image-caption p{font-size:12px;color:rgba(255,255,255,.84);margin:0;line-height:1.5}
      .rocket-login .image-dots{position:absolute;left:42px;bottom:20px;z-index:4;display:flex;gap:5px}
      .rocket-login .image-dots button{width:5px;height:5px;padding:0;border:0;border-radius:50%;background:rgba(255,255,255,.45);transition:all .25s}
      .rocket-login .image-dots button.active{width:17px;border-radius:5px;background:#fff}
      @media(max-width:850px){.rocket-login{grid-template-columns:1fr}.rocket-login .auth-image{display:none}.rocket-login .auth-panel{padding:34px 24px;justify-content:flex-start}.rocket-login .auth-panel>.logo{margin-bottom:70px}.rocket-login form,.rocket-login .divider,.rocket-login .secondary,.rocket-login .legal{max-width:none}.rocket-login .auth-panel h1{font-size:38px}}
      @media(min-width:851px) and (max-height:760px){.rocket-login .auth-panel{padding-top:28px;padding-bottom:28px}.rocket-login .auth-panel>.logo{margin-bottom:35px}.rocket-login .auth-copy{margin-bottom:24px}.rocket-login form{gap:15px}.rocket-login .divider{margin:22px 0 14px}.rocket-login .legal{margin-top:12px}}
    `}</style>
    <section className="auth-panel">
      <Logo/>
      <span className="eyebrow">Veyro business intelligence</span>
      <h1>Welcome back</h1>
      <p className="auth-copy">Sign in to your Veyro workspace</p>
      <form onSubmit={e => { e.preventDefault(); onLogin(); }}>
        <label>Email address<div className="field-wrap"><Mail size={17}/><input required type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@yourbusiness.com" autoComplete="email"/></div></label>
        <label>Password<div className="password field-wrap"><Lock size={17}/><input required type={passwordVisible ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="Your password" autoComplete="current-password"/><button type="button" aria-label={passwordVisible ? 'Hide password' : 'Show password'} onClick={() => setPasswordVisible(v => !v)}>{passwordVisible ? <EyeOff size={17}/> : <Eye size={17}/>}</button></div></label>
        <div className="form-row"><label className="remember"><input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)}/> Keep me signed in for 30 days</label><button type="button" className="link">Forgot password?</button></div>
        <button className="primary">Sign in <ArrowRight size={17}/></button>
      </form>
      <div className="divider">OR</div>
      <button className="secondary" type="button">Continue with Google</button>
      <p className="legal">By continuing, you agree to Veyro's Terms of Service and Privacy Policy.</p>
    </section>
    <section className="auth-image">
      {backgrounds.map((url, i) => <div key={url} className={`auth-photo ${i === slide ? 'active' : ''}`} style={{ backgroundImage: `url(${url})` }}/>) }
      <div className="image-shade"/>
      <div className="image-brand"><span className="mark">V</span><span>Veyro</span></div>
      <div className="image-caption"><span>BUSINESS INTELLIGENCE</span><h2>Understand your business.<br/>Decide with confidence.</h2><p>Built for the decisions that move a business forward.</p></div>
      <div className="image-dots">{backgrounds.map((_, i) => <button key={i} className={i === slide ? 'active' : ''} aria-label={`Show business image ${i + 1}`} onClick={() => setSlide(i)}/>)}</div>
    </section>
  </main>;
}
function Dashboard({ logout }) {
  const [modal, setModal] = useState(null); const [menuOpen, setMenuOpen] = useState(false); const open = (label, title, body) => setModal({ label, title, body });
  return <section className="app"><aside className={menuOpen ? 'sidebar open' : 'sidebar'}><Logo small/><nav>{navItems.map(([name, Icon], i) => <a className={i === 0 ? 'active' : ''} href={`#${name.toLowerCase().replaceAll(' ','-')}`} key={name}><Icon size={16}/>{name}</a>)}</nav><div className="side-bottom"><a href="#settings"><Settings size={16}/>Settings</a><button onClick={logout}><LogOut size={16}/>Sign out</button></div></aside><div className="content"><header className="topbar"><button className="mobile-menu" onClick={() => setMenuOpen(v => !v)}><Menu size={20}/></button><div><span className="eyebrow">BUSINESS PULSE</span><h2>Good morning.</h2><p>Your workspace is ready for real business data.</p></div><div className="top-actions"><button className="icon-btn"><Search size={18}/></button><button className="icon-btn"><Bell size={18}/></button><button className="avatar">V</button></div></header><div className="empty-banner"><div><b>Start with your real business.</b><span>VIERO does not invent activity. Add your first records to unlock intelligence.</span></div><button onClick={() => open('GET STARTED','Bring your business into VIERO',<><p>Start with real records. VIERO will not manufacture numbers or insights for an empty business.</p><div className="modal-grid"><Info title="Record a sale" text="Capture your first transaction and begin the business history."/><Info title="Create a customer" text="Build the customer record used by sales, invoices and receivables."/><Info title="Add a product" text="Define products before inventory and profitability analysis."/><Info title="Import data" text="Bring existing records into VIERO and validate them before import."/></div></>)}>Add your first data <ArrowRight size={15}/></button></div><div className="hero-grid"><article className="panel momentum"><div className="panel-head"><div><span className="eyebrow">BUSINESS MOMENTUM</span><h3>Build your picture</h3></div><select><option>30 days</option><option>90 days</option><option>1 year</option></select></div><div className="chart-empty"><div className="chart-lines"/><svg viewBox="0 0 700 180" preserveAspectRatio="none"><path d="M0 135 C80 130 105 150 170 125 S250 80 315 110 S405 145 475 95 S590 55 700 80"/></svg><div className="chart-dots"><i/><i/><i/><i/><i/></div><b>No trend yet</b><span>Record sales and expenses to unlock momentum.</span></div></article><article className="panel watch"><div className="panel-head"><div><span className="eyebrow">VIERO WATCH</span><h3>Nothing to flag</h3></div><span className="status-dot"/></div><p>VIERO will monitor meaningful changes once your business data is connected.</p><div className="watch-rule"><span>WATCH</span><ChevronRight/><span>EXPLAIN</span><ChevronRight/><span>ACT</span></div><button className="text-btn" onClick={() => open('VIERO WATCH','Watch → Explain → Act',<p>VIERO Watch is designed to surface meaningful changes, not flood the owner with notifications.</p>)}>How VIERO Watch works <ArrowRight size={14}/></button></article></div><div className="intel-grid"><Feature icon={<span>!</span>} label="FIND THE BOTTLENECK" title="Discover what is holding the business back." text="VIERO ranks constraints by business impact instead of overwhelming you with unrelated warnings." action="Analyze bottlenecks" onClick={() => open('FIND THE BOTTLENECK','No bottleneck yet',<><p>A bottleneck should only be identified when VIERO has enough real business evidence to support the conclusion.</p><ul><li>Sales performance</li><li>Inventory availability</li><li>Customer payment behaviour</li><li>Operating expenses</li><li>Supplier and purchasing patterns</li></ul></>)}/><Feature icon={<Check size={17}/>} label="CONFIDENCE CALIBRATION" title="Know how much to trust an insight." text="Facts, analysis, estimates and forecasts stay clearly separated. Confidence rises with stronger evidence." meter action="See confidence rules" onClick={() => open('CONFIDENCE CALIBRATION','How VIERO earns confidence',<div className="modal-grid"><Info title="FACT" text="Directly supported by recorded business data."/><Info title="ANALYSIS" text="A conclusion derived from available evidence."/><Info title="FORECAST" text="A prediction about a future outcome; never presented as certain."/><Info title="RECOMMENDATION" text="A suggested action based on the available evidence."/></div>)}/><Feature icon={<Database size={17}/>} label="MISSING INFORMATION" title="Find gaps before they become bad decisions." text="VIERO detects incomplete or outdated information and tells you exactly why it matters." action="Check information" onClick={() => open('MISSING INFORMATION','Check before you decide',<><p>There are currently no business records to compare. Once data is entered, VIERO can identify missing, incomplete, inconsistent or outdated information.</p><div className="modal-grid"><Info title="Critical" text="Information that could materially change a decision."/><Info title="Important" text="Information that affects analysis but does not necessarily block it."/></div></>)}/></div><div className="lower-grid"><article className="panel review"><span className="eyebrow">WHAT CHANGED</span><h3>Nothing to explain yet.</h3><p>Once real activity is recorded, VIERO will explain meaningful changes instead of simply showing numbers.</p><div className="flow"><span>DATA</span><b>→</b><span>UNDERSTAND</span><b>→</b><span>DECIDE</span><b>→</b><span>ACT</span></div></article><article className="panel quick"><span className="eyebrow">QUICK ACTIONS</span>{['Record sale','Create invoice','Add customer','Add product'].map(x => <button key={x}>＋ {x}</button>)}</article></div><div className="command-grid"><Command label="DECISION ROOM" title="Turn evidence into a decision." text="Compare options, test scenarios, record assumptions and later measure whether the decision worked." button="Enter Decision Room" onClick={() => open('DECISION ROOM','Make a decision with evidence',<p>Structure a real business decision around evidence, options, risks, assumptions and expected outcomes.</p>)}/><Command label="VIERO AI" title="Ask the business, not a generic chatbot." text="Ask why something changed, what deserves attention, or what evidence supports an insight." button="Ask VIERO" pink onClick={() => open('VIERO AI','Ask the business',<p>VIERO AI should answer using authorized business information and clearly distinguish facts, analysis, forecasts and recommendations.</p>)}/></div></div><Modal modal={modal} close={() => setModal(null)}/></section>;
}
function Info({title,text}) { return <div className="info"><b>{title}</b><span>{text}</span></div>; }
function Feature({icon,label,title,text,action,onClick,meter}) { return <article className="intel"><div className="feature-icon">{icon}</div><span className="eyebrow">{label}</span><h3>{title}</h3><p>{text}</p>{meter && <><div className="confidence-meter"><span/></div><small>Insufficient data</small></>}<button className="outline" onClick={onClick}>{action} <ArrowRight size={14}/></button></article>; }
function Command({label,title,text,button,onClick,pink}) { return <article className="command panel"><div><span className="eyebrow">{label}</span><h3>{title}</h3><p>{text}</p></div><button className={pink ? 'pink-action' : 'dark-action'} onClick={onClick}>{button} <ArrowRight size={15}/></button></article>; }
export default function App() { const [view,setView]=useState('intro'); useEffect(()=>{if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)setView('auth')},[]); return <>{view==='intro'&&<Intro onDone={()=>setView('auth')}/>} {view==='auth'&&<Auth onLogin={()=>setView('app')}/>} {view==='app'&&<Dashboard logout={()=>setView('auth')}/>}</>; }
