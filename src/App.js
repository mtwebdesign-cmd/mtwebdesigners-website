import React, { useState, useEffect } from 'react';

const C = {
  bg: '#0a0a0a',
  bgCard: '#111111',
  bgSection: '#0d0d0d',
  white: '#ffffff',
  gray: '#888888',
  lightGray: '#1a1a1a',
  border: '#222222',
  blue: '#2563eb',
  blueDark: '#1d4ed8',
  blueGlow: 'rgba(37,99,235,0.15)',
};

const LOGO_SVG = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect width="36" height="36" rx="8" fill={C.blue}/>
    <path d="M8 26L14 10L18 20L22 14L28 26" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function useScrollTop() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
}

// ── NAV ──────────────────────────────────────────────────────────
function Nav({ page, setPage }) {
  const [open, setOpen] = useState(false);
  const links = ['Home','Services','About','Contact'];
  return (
    <nav style={{ position:'fixed', top:0, left:0, right:0, zIndex:999, background:'rgba(10,10,10,0.96)', backdropFilter:'blur(20px)', borderBottom:`1px solid ${C.border}` }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 32px', display:'flex', alignItems:'center', justifyContent:'space-between', height:68 }}>
        <div style={{ display:'flex', alignItems:'center', gap:12, cursor:'pointer' }} onClick={() => { setPage('Home'); setOpen(false); window.scrollTo(0,0); }}>
          {LOGO_SVG}
          <span style={{ color:C.white, fontWeight:800, fontSize:18, letterSpacing:'-0.5px', fontFamily:'Inter,sans-serif' }}>MTWebDesign</span>
        </div>
        <div style={{ display:'flex', gap:4, alignItems:'center' }} className="mwd-desktop">
          {links.map(l => (
            <button key={l} onClick={() => { setPage(l); window.scrollTo(0,0); }}
              style={{ background:'none', border:'none', color: page===l ? C.blue : C.gray, fontWeight: page===l ? 700 : 500, fontSize:14, cursor:'pointer', padding:'8px 18px', borderRadius:6, fontFamily:'Inter,sans-serif', transition:'color 0.2s' }}>
              {l}
            </button>
          ))}
          <button onClick={() => { setPage('Contact'); window.scrollTo(0,0); }}
            style={{ background:C.blue, color:'#fff', border:'none', borderRadius:8, padding:'10px 24px', fontWeight:700, fontSize:14, cursor:'pointer', marginLeft:8, fontFamily:'Inter,sans-serif' }}>
            Get Started
          </button>
        </div>
        <button onClick={() => setOpen(!open)} className="mwd-mobile"
          style={{ display:'none', background:'none', border:`1px solid ${C.border}`, color:C.white, width:40, height:40, borderRadius:8, cursor:'pointer', fontSize:20, alignItems:'center', justifyContent:'center' }}>
          {open ? '✕' : '☰'}
        </button>
      </div>
      {open && (
        <div style={{ background:C.bgCard, borderTop:`1px solid ${C.border}`, padding:'16px 24px' }}>
          {links.map(l => (
            <button key={l} onClick={() => { setPage(l); setOpen(false); window.scrollTo(0,0); }}
              style={{ display:'block', width:'100%', background:'none', border:'none', color: page===l ? C.blue : C.gray, fontWeight:600, fontSize:15, cursor:'pointer', padding:'13px 0', textAlign:'left', borderBottom:`1px solid ${C.border}`, fontFamily:'Inter,sans-serif' }}>
              {l}
            </button>
          ))}
          <button onClick={() => { setPage('Contact'); setOpen(false); window.scrollTo(0,0); }}
            style={{ width:'100%', background:C.blue, color:'#fff', border:'none', borderRadius:8, padding:'13px', fontWeight:700, fontSize:15, cursor:'pointer', marginTop:16, fontFamily:'Inter,sans-serif' }}>
            Get Started
          </button>
        </div>
      )}
      <style>{`
        @media(max-width:768px){
          .mwd-desktop{display:none!important;}
          .mwd-mobile{display:flex!important;}
        }
      `}</style>
    </nav>
  );
}

// ── FOOTER ───────────────────────────────────────────────────────
function Footer({ setPage }) {
  return (
    <footer style={{ background:'#060606', borderTop:`1px solid ${C.border}`, padding:'60px 32px 32px', fontFamily:'Inter,sans-serif' }}>
      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr', gap:48, marginBottom:48 }} className="footer-grid">
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:16 }}>
              {LOGO_SVG}
              <span style={{ color:C.white, fontWeight:800, fontSize:17 }}>MTWebDesign</span>
            </div>
            <p style={{ color:C.gray, fontSize:14, lineHeight:1.7, maxWidth:320 }}>
              Professional web design for local businesses. We build sites that generate real leads and help you grow.
            </p>
            <p style={{ color:'#555', fontSize:13, marginTop:16 }}>mtwebdesign@mtwebdesigners.com</p>
          </div>
          <div>
            <div style={{ color:C.white, fontWeight:700, fontSize:14, marginBottom:16 }}>Pages</div>
            {['Home','Services','About','Contact'].map(l => (
              <button key={l} onClick={() => { setPage(l); window.scrollTo(0,0); }}
                style={{ display:'block', background:'none', border:'none', color:C.gray, fontSize:13, cursor:'pointer', padding:'5px 0', fontFamily:'Inter,sans-serif' }}>
                {l}
              </button>
            ))}
          </div>
          <div>
            <div style={{ color:C.white, fontWeight:700, fontSize:14, marginBottom:16 }}>Services</div>
            {['Web Design','Lead Tracking','SEO Setup','Monthly Maintenance'].map(s => (
              <div key={s} style={{ color:C.gray, fontSize:13, padding:'5px 0' }}>{s}</div>
            ))}
          </div>
        </div>
        <div style={{ borderTop:`1px solid ${C.border}`, paddingTop:24, display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12 }}>
          <span style={{ color:'#444', fontSize:12 }}>© 2026 MTWebDesign. All rights reserved.</span>
          <button onClick={() => setPage('Admin')}
            style={{ background:'none', border:'none', color:'#333', fontSize:11, cursor:'pointer', fontFamily:'Inter,sans-serif' }}>
            Admin
          </button>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){
          .footer-grid{grid-template-columns:1fr!important;}
        }
      `}</style>
    </footer>
  );
}

// ── HOME PAGE ────────────────────────────────────────────────────
function HomePage({ setPage }) {
  useScrollTop();
  const services = [
    { icon:'🌐', title:'Custom Website', desc:'5-page professional site built for your business. Mobile-first, fast, and ready to convert visitors.' },
    { icon:'📩', title:'Lead Tracking', desc:'Every inquiry submitted through your site lands in your private dashboard — organized and ready to call back.' },
    { icon:'🔍', title:'SEO Setup', desc:'Google Business Profile, meta tags, and local SEO configured so customers can actually find you.' },
    { icon:'🔧', title:'Monthly Support', desc:'We own the hosting so you never have to worry. Updates, fixes, and changes handled for you.' },
  ];
  const stats = [
    { val:'35+', label:'Sites Launched' },
    { val:'$0', label:'Upfront Cost Option' },
    { val:'1-3', label:'Day Turnaround' },
    { val:'100%', label:'Retention Rate' },
  ];
  return (
    <div style={{ fontFamily:'Inter,sans-serif' }}>
      {/* Hero */}
      <div style={{ minHeight:'100vh', background:`linear-gradient(160deg, #0a0a0a 0%, #0d1117 50%, #0a0a0a 100%)`, display:'flex', alignItems:'center', padding:'120px 32px 80px', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:'20%', right:'10%', width:600, height:600, background:`radial-gradient(circle, ${C.blueGlow}, transparent 70%)`, pointerEvents:'none' }}/>
        <div style={{ maxWidth:1200, margin:'0 auto', width:'100%' }}>
          <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(37,99,235,0.1)', border:'1px solid rgba(37,99,235,0.3)', borderRadius:20, padding:'6px 16px', marginBottom:32 }}>
            <div style={{ width:6, height:6, borderRadius:'50%', background:C.blue }}/>
            <span style={{ color:C.blue, fontSize:12, fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase' }}>Web Design for Local Businesses</span>
          </div>
          <h1 style={{ fontSize:'clamp(42px,6vw,80px)', fontWeight:900, color:C.white, lineHeight:1.0, marginBottom:24, letterSpacing:'-2px' }}>
            Your Business<br/><span style={{ color:C.blue }}>Deserves a</span><br/>Real Website.
          </h1>
          <p style={{ color:C.gray, fontSize:18, lineHeight:1.7, maxWidth:560, marginBottom:40 }}>
            We build clean, professional websites for local tradespeople and service businesses. Starting at $100/mo with no technical headaches — ever.
          </p>
          <div style={{ display:'flex', gap:16, flexWrap:'wrap' }}>
            <button onClick={() => { setPage('Contact'); window.scrollTo(0,0); }}
              style={{ background:C.blue, color:'#fff', border:'none', borderRadius:10, padding:'16px 36px', fontWeight:700, fontSize:16, cursor:'pointer', fontFamily:'Inter,sans-serif' }}>
              Get a Free Quote
            </button>
            <button onClick={() => { setPage('Services'); window.scrollTo(0,0); }}
              style={{ background:'transparent', color:C.white, border:`1px solid ${C.border}`, borderRadius:10, padding:'16px 36px', fontWeight:600, fontSize:16, cursor:'pointer', fontFamily:'Inter,sans-serif' }}>
              See Our Work
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ background:C.bgCard, borderTop:`1px solid ${C.border}`, borderBottom:`1px solid ${C.border}`, padding:'48px 32px' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:32 }} className="stats-grid">
          {stats.map(s => (
            <div key={s.val} style={{ textAlign:'center' }}>
              <div style={{ fontSize:40, fontWeight:900, color:C.white, letterSpacing:'-1px' }}>{s.val}</div>
              <div style={{ color:C.gray, fontSize:13, fontWeight:500, marginTop:4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services preview */}
      <div style={{ padding:'100px 32px', background:C.bg }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:64 }}>
            <div style={{ color:C.blue, fontSize:12, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:12 }}>What We Do</div>
            <h2 style={{ fontSize:'clamp(32px,4vw,52px)', fontWeight:800, color:C.white, letterSpacing:'-1px' }}>Everything you need.<br/>Nothing you don't.</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(2,1fr)', gap:24 }} className="services-grid">
            {services.map(s => (
              <div key={s.title} style={{ background:C.bgCard, border:`1px solid ${C.border}`, borderRadius:16, padding:'32px', transition:'border-color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.borderColor=C.blue}
                onMouseLeave={e => e.currentTarget.style.borderColor=C.border}>
                <div style={{ fontSize:32, marginBottom:16 }}>{s.icon}</div>
                <div style={{ color:C.white, fontWeight:700, fontSize:18, marginBottom:8 }}>{s.title}</div>
                <div style={{ color:C.gray, fontSize:14, lineHeight:1.7 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div style={{ padding:'100px 32px', background:C.bgSection }}>
        <div style={{ maxWidth:800, margin:'0 auto', textAlign:'center' }}>
          <div style={{ color:C.blue, fontSize:12, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:12 }}>Pricing</div>
          <h2 style={{ fontSize:'clamp(28px,4vw,48px)', fontWeight:800, color:C.white, letterSpacing:'-1px', marginBottom:16 }}>Simple. Transparent. No surprises.</h2>
          <p style={{ color:C.gray, fontSize:16, marginBottom:56 }}>One flat monthly rate covers everything — design, hosting, support, and updates.</p>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:24 }} className="pricing-grid">
            {[
              { name:'Standard', setup:'$300', mo:'$100/mo', features:['5-Page Website','Contact Form','Mobile Responsive','Google Business Setup','Private Lead Dashboard','Monthly Support'] },
              { name:'Custom Build', setup:'Quote', mo:'Custom', features:['Everything in Standard','Custom Functionality','E-commerce / Booking','Advanced Integrations','Priority Support','Custom Design'], highlight:true },
            ].map(p => (
              <div key={p.name} style={{ background: p.highlight ? C.blue : C.bgCard, border:`1px solid ${p.highlight ? C.blue : C.border}`, borderRadius:20, padding:'40px 32px', textAlign:'left' }}>
                <div style={{ color: p.highlight ? 'rgba(255,255,255,0.8)' : C.gray, fontSize:12, fontWeight:700, textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:8 }}>{p.name}</div>
                <div style={{ color:C.white, fontSize:40, fontWeight:900, letterSpacing:'-1px', marginBottom:4 }}>{p.mo}</div>
                <div style={{ color: p.highlight ? 'rgba(255,255,255,0.7)' : '#555', fontSize:13, marginBottom:32 }}>+{p.setup} setup</div>
                {p.features.map(f => (
                  <div key={f} style={{ display:'flex', alignItems:'center', gap:10, marginBottom:12 }}>
                    <span style={{ color: p.highlight ? 'rgba(255,255,255,0.9)' : C.blue, fontSize:16 }}>✓</span>
                    <span style={{ color: p.highlight ? 'rgba(255,255,255,0.9)' : C.gray, fontSize:14 }}>{f}</span>
                  </div>
                ))}
                <button onClick={() => { setPage('Contact'); window.scrollTo(0,0); }}
                  style={{ width:'100%', background: p.highlight ? 'rgba(255,255,255,0.15)' : C.blue, color:'#fff', border: p.highlight ? '1px solid rgba(255,255,255,0.3)' : 'none', borderRadius:10, padding:'14px', fontWeight:700, fontSize:14, cursor:'pointer', fontFamily:'Inter,sans-serif', marginTop:24 }}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ padding:'100px 32px', background:C.bg, textAlign:'center' }}>
        <div style={{ maxWidth:600, margin:'0 auto' }}>
          <h2 style={{ fontSize:'clamp(28px,4vw,48px)', fontWeight:800, color:C.white, letterSpacing:'-1px', marginBottom:16 }}>Ready to get started?</h2>
          <p style={{ color:C.gray, fontSize:16, marginBottom:40 }}>Tell us about your business. We'll have a site ready in 1-3 days.</p>
          <button onClick={() => { setPage('Contact'); window.scrollTo(0,0); }}
            style={{ background:C.blue, color:'#fff', border:'none', borderRadius:10, padding:'16px 48px', fontWeight:700, fontSize:16, cursor:'pointer', fontFamily:'Inter,sans-serif' }}>
            Request a Free Quote
          </button>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){
          .stats-grid{grid-template-columns:repeat(2,1fr)!important;}
          .services-grid{grid-template-columns:1fr!important;}
          .pricing-grid{grid-template-columns:1fr!important;}
        }
      `}</style>
    </div>
  );
}

// ── SERVICES PAGE ─────────────────────────────────────────────────
function ServicesPage({ setPage }) {
  useScrollTop();
  const items = [
    { icon:'🌐', title:'Custom Web Design', desc:'We design every site from scratch around your business — your brand, your services, your city. No templates, no generic layouts.' },
    { icon:'📱', title:'Mobile-First Build', desc:'Over 70% of your customers search on their phone. Every site we build looks perfect on all screen sizes.' },
    { icon:'📩', title:'Lead Dashboard', desc:'Every contact form submission goes to a private password-protected dashboard — see name, phone, email, and message at a glance.' },
    { icon:'🔍', title:'Local SEO Setup', desc:'We configure your Google Business Profile, meta descriptions, and local keywords so people in your area can find you.' },
    { icon:'⚡', title:'Fast Hosting', desc:'Your site is hosted on enterprise-grade infrastructure with 99.9% uptime. No slowdowns, no crashes.' },
    { icon:'🔧', title:'Ongoing Support', desc:'We retain ownership of your domain and hosting — which means we handle all updates, fixes, and changes for free as long as you are on retainer.' },
  ];
  return (
    <div style={{ fontFamily:'Inter,sans-serif', paddingTop:68 }}>
      <div style={{ background:C.bgSection, padding:'80px 32px 60px', borderBottom:`1px solid ${C.border}` }}>
        <div style={{ maxWidth:700, margin:'0 auto', textAlign:'center' }}>
          <div style={{ color:C.blue, fontSize:12, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:12 }}>Our Services</div>
          <h1 style={{ fontSize:'clamp(36px,5vw,60px)', fontWeight:900, color:C.white, letterSpacing:'-1.5px', marginBottom:16 }}>Built to convert.<br/>Priced to grow.</h1>
          <p style={{ color:C.gray, fontSize:16, lineHeight:1.7 }}>Everything your business needs online — handled by us, owned by us, so you never have to think about it.</p>
        </div>
      </div>
      <div style={{ padding:'80px 32px', background:C.bg }}>
        <div style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }} className="srv-grid">
          {items.map(s => (
            <div key={s.title} style={{ background:C.bgCard, border:`1px solid ${C.border}`, borderRadius:16, padding:'32px' }}
              onMouseEnter={e => e.currentTarget.style.borderColor=C.blue}
              onMouseLeave={e => e.currentTarget.style.borderColor=C.border}>
              <div style={{ fontSize:36, marginBottom:20 }}>{s.icon}</div>
              <div style={{ color:C.white, fontWeight:700, fontSize:17, marginBottom:10 }}>{s.title}</div>
              <div style={{ color:C.gray, fontSize:14, lineHeight:1.7 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding:'60px 32px 100px', background:C.bgSection, textAlign:'center' }}>
        <h2 style={{ color:C.white, fontSize:32, fontWeight:800, marginBottom:16 }}>Want to see what we can build for you?</h2>
        <button onClick={() => { setPage('Contact'); window.scrollTo(0,0); }}
          style={{ background:C.blue, color:'#fff', border:'none', borderRadius:10, padding:'15px 40px', fontWeight:700, fontSize:15, cursor:'pointer', fontFamily:'Inter,sans-serif' }}>
          Request a Free Quote
        </button>
      </div>
      <style>{`.srv-grid{@media(max-width:900px){grid-template-columns:1fr!important;}}`}</style>
    </div>
  );
}

// ── ABOUT PAGE ────────────────────────────────────────────────────
function AboutPage({ setPage }) {
  useScrollTop();
  return (
    <div style={{ fontFamily:'Inter,sans-serif', paddingTop:68 }}>
      <div style={{ background:C.bgSection, padding:'80px 32px 60px', borderBottom:`1px solid ${C.border}` }}>
        <div style={{ maxWidth:700, margin:'0 auto', textAlign:'center' }}>
          <div style={{ color:C.blue, fontSize:12, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:12 }}>About Us</div>
          <h1 style={{ fontSize:'clamp(36px,5vw,60px)', fontWeight:900, color:C.white, letterSpacing:'-1.5px', marginBottom:16 }}>We build websites<br/>that work for you.</h1>
          <p style={{ color:C.gray, fontSize:16, lineHeight:1.7 }}>MTWebDesign was built by two people who were tired of seeing local businesses lose customers because they had no online presence.</p>
        </div>
      </div>
      <div style={{ padding:'80px 32px', background:C.bg }}>
        <div style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center' }} className="about-grid">
          <div>
            <h2 style={{ color:C.white, fontSize:32, fontWeight:800, letterSpacing:'-0.5px', marginBottom:20 }}>Our Story</h2>
            <p style={{ color:C.gray, fontSize:15, lineHeight:1.8, marginBottom:16 }}>
              We noticed that some of the best tradespeople in the area — plumbers, electricians, roofers, HVAC techs — had no website at all. They were losing jobs to bigger companies simply because they weren't showing up online.
            </p>
            <p style={{ color:C.gray, fontSize:15, lineHeight:1.8, marginBottom:16 }}>
              We started MTWebDesign to fix that. We build clean, fast, professional websites and give local businesses a real shot at competing online — at a price that actually makes sense.
            </p>
            <p style={{ color:C.gray, fontSize:15, lineHeight:1.8 }}>
              Every site comes with a lead dashboard, local SEO setup, and full monthly support. You focus on your work — we handle your web presence.
            </p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
            {[
              { name:'Thomas Farrelly', role:'CEO & Co-Founder', detail:'Full-stack development & client builds' },
              { name:'Max Eddolls', role:'COO & Co-Founder', detail:'Operations & delivery' },
            ].map(p => (
              <div key={p.name} style={{ background:C.bgCard, border:`1px solid ${C.border}`, borderRadius:16, padding:'28px 24px' }}>
                <div style={{ width:48, height:48, background:C.blue, borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', fontSize:20, marginBottom:16 }}>👤</div>
                <div style={{ color:C.white, fontWeight:700, fontSize:15, marginBottom:4 }}>{p.name}</div>
                <div style={{ color:C.blue, fontSize:12, fontWeight:600, marginBottom:8 }}>{p.role}</div>
                <div style={{ color:C.gray, fontSize:13 }}>{p.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ padding:'60px 32px 100px', background:C.bgSection, textAlign:'center' }}>
        <h2 style={{ color:C.white, fontSize:32, fontWeight:800, marginBottom:16 }}>Ready to work with us?</h2>
        <button onClick={() => { setPage('Contact'); window.scrollTo(0,0); }}
          style={{ background:C.blue, color:'#fff', border:'none', borderRadius:10, padding:'15px 40px', fontWeight:700, fontSize:15, cursor:'pointer', fontFamily:'Inter,sans-serif' }}>
          Get in Touch
        </button>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;}}`}</style>
    </div>
  );
}

// ── CONTACT PAGE ──────────────────────────────────────────────────
function ContactPage() {
  useScrollTop();
  const [form, setForm] = useState({ name:'', business:'', phone:'', email:'', service:'', message:'' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch('https://app.base44.com/api/apps/69bdffad4f4bd277de793521/functions/submitContact', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ name: form.name, business_name: form.business, phone: form.phone, email: form.email, service: form.service, message: form.message }),
      });
      setSent(true);
    } catch(err) { setSent(true); }
    setSending(false);
  };

  if (sent) return (
    <div style={{ fontFamily:'Inter,sans-serif', paddingTop:68, minHeight:'80vh', display:'flex', alignItems:'center', justifyContent:'center', background:C.bg }}>
      <div style={{ textAlign:'center', padding:40 }}>
        <div style={{ fontSize:56, marginBottom:24 }}>✅</div>
        <h2 style={{ color:C.white, fontSize:28, fontWeight:800, marginBottom:12 }}>Message Received!</h2>
        <p style={{ color:C.gray, fontSize:16 }}>We'll be in touch within 1 business day.</p>
      </div>
    </div>
  );

  return (
    <div style={{ fontFamily:'Inter,sans-serif', paddingTop:68 }}>
      <div style={{ background:C.bgSection, padding:'80px 32px 60px', borderBottom:`1px solid ${C.border}` }}>
        <div style={{ maxWidth:600, margin:'0 auto', textAlign:'center' }}>
          <div style={{ color:C.blue, fontSize:12, fontWeight:700, letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:12 }}>Contact Us</div>
          <h1 style={{ fontSize:'clamp(32px,5vw,52px)', fontWeight:900, color:C.white, letterSpacing:'-1px', marginBottom:16 }}>Let's build something.</h1>
          <p style={{ color:C.gray, fontSize:16 }}>Fill out the form below and we'll get back to you within 24 hours with a free quote.</p>
        </div>
      </div>
      <div style={{ padding:'80px 32px 100px', background:C.bg }}>
        <form onSubmit={submit} style={{ maxWidth:640, margin:'0 auto', background:C.bgCard, border:`1px solid ${C.border}`, borderRadius:20, padding:'48px' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20, marginBottom:20 }} className="form-grid">
            {[
              { key:'name', label:'Your Name', placeholder:'John Smith', required:true },
              { key:'business', label:'Business Name', placeholder:"Smith's Plumbing", required:true },
              { key:'phone', label:'Phone Number', placeholder:'(518) 555-1234', required:true },
              { key:'email', label:'Email Address', placeholder:'john@example.com', required:true },
            ].map(f => (
              <div key={f.key}>
                <label style={{ display:'block', color:C.gray, fontSize:12, fontWeight:600, marginBottom:8, textTransform:'uppercase', letterSpacing:'0.05em' }}>{f.label}</label>
                <input value={form[f.key]} onChange={e => setForm({...form, [f.key]:e.target.value})}
                  placeholder={f.placeholder} required={f.required}
                  style={{ width:'100%', background:'#0a0a0a', border:`1px solid ${C.border}`, borderRadius:8, padding:'12px 16px', color:C.white, fontSize:14, fontFamily:'Inter,sans-serif', outline:'none', boxSizing:'border-box' }}
                  onFocus={e => e.target.style.borderColor=C.blue}
                  onBlur={e => e.target.style.borderColor=C.border}/>
              </div>
            ))}
          </div>
          <div style={{ marginBottom:20 }}>
            <label style={{ display:'block', color:C.gray, fontSize:12, fontWeight:600, marginBottom:8, textTransform:'uppercase', letterSpacing:'0.05em' }}>Type of Business</label>
            <select value={form.service} onChange={e => setForm({...form, service:e.target.value})} required
              style={{ width:'100%', background:'#0a0a0a', border:`1px solid ${C.border}`, borderRadius:8, padding:'12px 16px', color: form.service ? C.white : C.gray, fontSize:14, fontFamily:'Inter,sans-serif', outline:'none' }}>
              <option value="">Select your industry...</option>
              {['Plumbing','HVAC','Electrician','Roofing','Landscaping','Auto Repair','General Contractor','Junk Removal','Pressure Washing','Painter','Handyman','Other'].map(o => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
          <div style={{ marginBottom:32 }}>
            <label style={{ display:'block', color:C.gray, fontSize:12, fontWeight:600, marginBottom:8, textTransform:'uppercase', letterSpacing:'0.05em' }}>Tell Us About Your Business</label>
            <textarea value={form.message} onChange={e => setForm({...form, message:e.target.value})}
              placeholder="Where are you located? What do you need?" rows={4}
              style={{ width:'100%', background:'#0a0a0a', border:`1px solid ${C.border}`, borderRadius:8, padding:'12px 16px', color:C.white, fontSize:14, fontFamily:'Inter,sans-serif', outline:'none', resize:'vertical', boxSizing:'border-box' }}
              onFocus={e => e.target.style.borderColor=C.blue}
              onBlur={e => e.target.style.borderColor=C.border}/>
          </div>
          <button type="submit" disabled={sending}
            style={{ width:'100%', background:C.blue, color:'#fff', border:'none', borderRadius:10, padding:'16px', fontWeight:700, fontSize:16, cursor:'pointer', fontFamily:'Inter,sans-serif', opacity: sending ? 0.7 : 1 }}>
            {sending ? 'Sending...' : 'Send My Request'}
          </button>
        </form>
      </div>
      <style>{`@media(max-width:600px){.form-grid{grid-template-columns:1fr!important;}}`}</style>
    </div>
  );
}

// ── ADMIN GATE ────────────────────────────────────────────────────
function AdminPage() {
  useScrollTop();
  const [pw, setPw] = useState('');
  const [auth, setAuth] = useState(false);
  const [err, setErr] = useState(false);

  if (!auth) return (
    <div style={{ fontFamily:'Inter,sans-serif', minHeight:'100vh', background:C.bg, display:'flex', alignItems:'center', justifyContent:'center' }}>
      <div style={{ background:C.bgCard, border:`1px solid ${C.border}`, borderRadius:20, padding:'48px 40px', width:'100%', maxWidth:400, textAlign:'center' }}>
        <div style={{ fontSize:40, marginBottom:20 }}>🔒</div>
        <h2 style={{ color:C.white, fontWeight:800, fontSize:22, marginBottom:8 }}>Admin Access</h2>
        <p style={{ color:C.gray, fontSize:13, marginBottom:28 }}>MTWebDesign Internal Dashboard</p>
        <input type="password" value={pw} onChange={e => setPw(e.target.value)} placeholder="Enter password"
          onKeyDown={e => { if(e.key==='Enter'){ if(pw==='MTWebDesign') setAuth(true); else setErr(true); }}}
          style={{ width:'100%', background:'#0a0a0a', border:`1px solid ${err ? '#ef4444' : C.border}`, borderRadius:8, padding:'12px 16px', color:C.white, fontSize:14, fontFamily:'Inter,sans-serif', outline:'none', marginBottom:16, boxSizing:'border-box' }}/>
        {err && <div style={{ color:'#ef4444', fontSize:13, marginBottom:12 }}>Incorrect password</div>}
        <button onClick={() => { if(pw==='MTWebDesign') setAuth(true); else setErr(true); }}
          style={{ width:'100%', background:C.blue, color:'#fff', border:'none', borderRadius:8, padding:'13px', fontWeight:700, fontSize:14, cursor:'pointer', fontFamily:'Inter,sans-serif' }}>
          Enter
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ fontFamily:'Inter,sans-serif', paddingTop:68, minHeight:'80vh', background:C.bg }}>
      <div style={{ padding:'60px 32px' }}>
        <div style={{ maxWidth:900, margin:'0 auto' }}>
          <h1 style={{ color:C.white, fontSize:32, fontWeight:800, marginBottom:8 }}>Operations Dashboard</h1>
          <p style={{ color:C.gray, marginBottom:40 }}>MTWebDesign internal reference</p>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:20 }} className="admin-grid">
            {[
              { label:'Agency CRM', url:'https://agency-crm-pi-eight.vercel.app', pw:'max2025', desc:"Max's prospect pipeline" },
              { label:"Tom's Plumbing Demo", url:'https://toms-plumbing.vercel.app', pw:'TomsPlumbing2026', desc:'Demo site for sales calls' },
              { label:'Junk Bros 518', url:'https://junkbros518.vercel.app', pw:'Junkbros2026', desc:'Client site' },
              { label:'Contact Email', url:'mailto:mtwebdesign@mtwebdesigners.com', pw:'-', desc:'Primary contact inbox' },
            ].map(item => (
              <div key={item.label} style={{ background:C.bgCard, border:`1px solid ${C.border}`, borderRadius:14, padding:'24px' }}>
                <div style={{ color:C.white, fontWeight:700, fontSize:15, marginBottom:4 }}>{item.label}</div>
                <div style={{ color:C.gray, fontSize:12, marginBottom:12 }}>{item.desc}</div>
                {item.pw !== '-' && <div style={{ color:'#555', fontSize:12, marginBottom:12 }}>PW: <span style={{ color:C.blue, fontFamily:'monospace' }}>{item.pw}</span></div>}
                <a href={item.url} target="_blank" rel="noreferrer"
                  style={{ display:'inline-block', background:C.blue, color:'#fff', borderRadius:7, padding:'7px 16px', fontSize:12, fontWeight:700, textDecoration:'none' }}>
                  Open
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:600px){.admin-grid{grid-template-columns:1fr!important;}}`}</style>
    </div>
  );
}

// ── ROOT ──────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState('Home');
  const pages = { Home: <HomePage setPage={setPage}/>, Services: <ServicesPage setPage={setPage}/>, About: <AboutPage setPage={setPage}/>, Contact: <ContactPage/>, Admin: <AdminPage/> };
  return (
    <div style={{ background:C.bg, minHeight:'100vh' }}>
      <Nav page={page} setPage={setPage}/>
      {pages[page] || <HomePage setPage={setPage}/>}
      {page !== 'Admin' && <Footer setPage={setPage}/>}
    </div>
  );
}
