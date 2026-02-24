"use client";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { useState } from "react";

const SERVICES = [
  "Web Development",
  "Mobile App Development",
  "Shopify Development",
  "Custom Software",
  "UI/UX Design",
  "AI Integration",
];

const BUDGETS = ["< ₹50K", "₹50K–2L", "₹2L–5L", "₹5L+"];

const CONTACT_INFO = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    label: "Email Us",
    value: "info@adityaxinnovation.com",
    sub: "We reply within 24 hours",
    accent: "#38bdf8",
    href: "mailto:info@adityaxinnovation.com",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.5 1.18 2 2 0 012.5 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    label: "Call Us",
    value: "+91 98344 14186",
    sub: "Mon–Sat, 10am–7pm IST",
    accent: "#a78bfa",
    href: "tel:+919834414186",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    label: "Visit Us",
    value: "Pune, Maharashtra",
    sub: "India · Working globally",
    accent: "#34d399",
    href: "https://maps.google.com",
  },
];

const SOCIALS = [
  {
    name: "LinkedIn",
    href: "#",
    accent: "#38bdf8",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    accent: "#f472b6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    accent: "#a78bfa",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "#",
    accent: "#34d399",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    ),
  },
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  services: string[];
  budget: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "", email: "", phone: "", services: [], budget: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hoveredInfo, setHoveredInfo] = useState<string | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const [focused, setFocused] = useState<string | null>(null);

  const toggleService = (s: string) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(s) ? f.services.filter((x) => x !== s) : [...f.services, s],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1800);
  };

  const inputBase =
    "w-full px-4 py-3.5 rounded-xl text-sm text-white/75 placeholder:text-white/18 bg-white/[0.04] border transition-all duration-200 outline-none";

  const inputStyle = (field: string) => ({
    borderColor: focused === field ? "rgba(56,189,248,0.4)" : "rgba(255,255,255,0.07)",
    boxShadow: focused === field ? "0 0 0 3px rgba(56,189,248,0.08)" : "none",
    background: focused === field ? "rgba(56,189,248,0.04)" : "rgba(255,255,255,0.03)",
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');
        .ct-font  { font-family:'Outfit',sans-serif; }
        .mono-font{ font-family:'Space Mono',monospace; }

        @keyframes fade-up   { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes breathe   { 0%,100%{opacity:.35;transform:scale(1)} 50%{opacity:.7;transform:scale(1.1)} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes spin-rev  { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
        @keyframes shimmer   { 0%{background-position:-300% center} 100%{background-position:300% center} }
        @keyframes float-y   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes pulse-dot { 0%,100%{box-shadow:0 0 0 0 rgba(74,222,128,.5)} 50%{box-shadow:0 0 0 6px rgba(74,222,128,0)} }
        @keyframes pop-in    { from{opacity:0;transform:scale(.85) translateY(16px)} to{opacity:1;transform:scale(1) translateY(0)} }
        @keyframes spin-loader{ from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes check-draw{ from{stroke-dashoffset:30} to{stroke-dashoffset:0} }

        .a1{animation:fade-up .8s cubic-bezier(.16,1,.3,1) .05s both}
        .a2{animation:fade-up .8s cubic-bezier(.16,1,.3,1) .15s both}
        .a3{animation:fade-up .8s cubic-bezier(.16,1,.3,1) .25s both}
        .a4{animation:fade-up .8s cubic-bezier(.16,1,.3,1) .35s both}

        .glow-blob  { animation:breathe 6s ease-in-out infinite; filter:blur(30px); }
        .float-badge{ animation:float-y 4s ease-in-out infinite; }
        .spin-r1    { animation:spin-slow 20s linear infinite; }
        .spin-r2    { animation:spin-rev  30s linear infinite; }
        .pulse-dot  { animation:pulse-dot 2s ease-in-out infinite; }
        .spinning   { animation:spin-slow 14s linear infinite; }
        .cta-shimmer:hover { animation:shimmer 1.5s linear infinite; }

        .success-card { animation:pop-in .5s cubic-bezier(.16,1,.3,1) both; }

        .loader {
          width:20px; height:20px;
          border:2px solid rgba(0,0,0,.2);
          border-top-color:#04040c;
          border-radius:9999px;
          animation:spin-loader .7s linear infinite;
        }

        .check-path {
          stroke-dasharray: 30;
          stroke-dashoffset: 0;
          animation: check-draw .4s ease .2s both;
        }

        .service-pill {
          transition: all .2s cubic-bezier(.16,1,.3,1);
          cursor:pointer;
          user-select:none;
        }
        .service-pill:hover { transform:translateY(-2px); }
      `}</style>

      <div className="ct-font min-h-screen bg-[#04040c]">
        <Navbar />

        {/* ── Hero ── */}
        <section className="relative overflow-hidden flex flex-col items-center justify-center py-24 px-6 text-center">

          {/* Glows */}
          <div className="glow-blob absolute -top-20 left-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(56,189,248,.09) 0%,transparent 65%)" }} />
          <div className="glow-blob absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(167,139,250,.08) 0%,transparent 65%)", animationDelay: "3s" }} />

          {/* Grid */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.018]"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }} />

          {/* Orbital rings */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="spin-r1 absolute w-[380px] h-[380px] rounded-full border border-white/[0.04]"
              style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-sky-400"
                style={{ boxShadow: "0 0 10px #38bdf8" }} />
            </div>
            <div className="spin-r2 absolute w-[540px] h-[540px] rounded-full border border-violet-400/[0.06]"
              style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
              <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 rounded-full bg-violet-400"
                style={{ boxShadow: "0 0 10px #818cf8" }} />
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl mx-auto">
            <div className="a1 float-badge inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-sky-400/20 bg-sky-400/[0.06] mono-font text-[.65rem] tracking-[.15em] uppercase text-sky-300/80">
              <span className="pulse-dot w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
              Available for new projects
            </div>

            <h1 className="a2 text-[clamp(2.4rem,6vw,5rem)] font-black leading-[1.05] tracking-tight">
              <span className="text-white/20">Let&apos;s build</span>
              <br />
              <span style={{
                background: "linear-gradient(135deg,#38bdf8,#818cf8,#f472b6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>something great</span>
              <br />
              <span className="text-white">together.</span>
            </h1>

            <p className="a3 text-white/35 text-[clamp(.9rem,2vw,1.1rem)] leading-relaxed max-w-xl">
              Tell us about your project and we&apos;ll get back to you within{" "}
              <span className="text-white/65">24 hours</span> with a free consultation.
            </p>
          </div>
        </section>

        {/* ── Main Section ── */}
        <section className="relative z-10 py-8 px-6 pb-32">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-10 items-start">

            {/* ── Left: Contact Info ── */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              {/* Info cards */}
              <div className="flex flex-col gap-3">
                {CONTACT_INFO.map((c) => {
                  const isH = hoveredInfo === c.label;
                  return (
                    <a key={c.label} href={c.href}
                      onMouseEnter={() => setHoveredInfo(c.label)}
                      onMouseLeave={() => setHoveredInfo(null)}
                      className="flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300"
                      style={{
                        background: isH ? `${c.accent}0e` : "rgba(255,255,255,0.02)",
                        borderColor: isH ? `${c.accent}40` : "rgba(255,255,255,0.07)",
                        boxShadow: isH ? `0 0 30px ${c.accent}18` : "none",
                        transform: isH ? "translateX(4px)" : "none",
                      }}>
                      <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                        style={{
                          background: isH ? `${c.accent}18` : "rgba(255,255,255,0.05)",
                          border: `1px solid ${isH ? c.accent + "50" : "rgba(255,255,255,0.07)"}`,
                          color: isH ? c.accent : "rgba(255,255,255,0.35)",
                          boxShadow: isH ? `0 0 16px ${c.accent}30` : "none",
                        }}>
                        {c.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="mono-font text-[.58rem] uppercase tracking-[.14em] mb-0.5 transition-colors duration-200"
                          style={{ color: isH ? c.accent : "rgba(255,255,255,0.25)" }}>
                          {c.label}
                        </p>
                        <p className="text-sm font-semibold text-white/80 truncate">{c.value}</p>
                        <p className="text-xs text-white/25 mt-0.5">{c.sub}</p>
                      </div>
                      <svg className="w-4 h-4 ml-auto flex-shrink-0 transition-all duration-200"
                        style={{ color: isH ? c.accent : "rgba(255,255,255,0.12)", transform: isH ? "translateX(3px)" : "none" }}
                        viewBox="0 0 14 14" fill="none">
                        <path d="M1 7h12M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  );
                })}
              </div>

              {/* Divider */}
              <div className="h-px bg-white/[0.05]" />

              {/* Socials */}
              <div className="flex flex-col gap-3">
                <p className="mono-font text-[.6rem] uppercase tracking-[.18em] text-white/20">Follow Us</p>
                <div className="flex gap-2">
                  {SOCIALS.map((s) => (
                    <a key={s.name} href={s.href} aria-label={s.name}
                      onMouseEnter={() => setHoveredSocial(s.name)}
                      onMouseLeave={() => setHoveredSocial(null)}
                      className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300"
                      style={{
                        borderColor: hoveredSocial === s.name ? s.accent + "50" : "rgba(255,255,255,0.07)",
                        background: hoveredSocial === s.name ? s.accent + "12" : "rgba(255,255,255,0.03)",
                        color: hoveredSocial === s.name ? s.accent : "rgba(255,255,255,0.3)",
                        transform: hoveredSocial === s.name ? "translateY(-3px)" : "none",
                        boxShadow: hoveredSocial === s.name ? `0 6px 20px ${s.accent}25` : "none",
                      }}>
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/[0.05]" />

              {/* Response time badge */}
              <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="pulse-dot w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                  <span className="mono-font text-[.6rem] uppercase tracking-[.15em] text-green-400/80">Team Online</span>
                </div>
                <p className="text-white/30 text-sm leading-relaxed">
                  Average response time: <span className="text-white/65 font-semibold">&lt; 2 hours</span> during business hours.
                </p>
                <div className="flex gap-1.5 flex-wrap">
                  {["Mon–Fri", "Sat", "10am–7pm IST"].map((t) => (
                    <span key={t} className="mono-font text-[.55rem] uppercase tracking-[.1em] text-white/20 px-2.5 py-1 rounded-full border border-white/[0.06]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right: Form ── */}
            <div className="lg:col-span-3">
              <div className="relative rounded-3xl border border-white/[0.07] bg-white/[0.02] p-8 overflow-hidden"
                style={{ boxShadow: "0 0 60px rgba(56,189,248,.05), 0 24px 48px rgba(0,0,0,.4)" }}>

                {/* Glow corner */}
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle,rgba(56,189,248,.07) 0%,transparent 65%)", filter: "blur(20px)" }} />

                {submitted ? (
                  /* ── Success State ── */
                  <div className="success-card flex flex-col items-center text-center gap-6 py-12">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center border-2 border-emerald-400/40 bg-emerald-400/[0.08]"
                      style={{ boxShadow: "0 0 40px rgba(52,211,153,.2)" }}>
                      <svg viewBox="0 0 24 24" fill="none" className="w-9 h-9">
                        <path className="check-path" d="M5 13l4 4L19 7" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-black text-2xl text-white mb-2 tracking-tight">Message Sent! 🎉</h3>
                      <p className="text-white/35 text-sm leading-relaxed max-w-sm">
                        Thanks for reaching out! We&apos;ve received your message and will get back to you within 24 hours.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3 justify-center">
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name:"", email:"", phone:"", services:[], budget:"", message:"" }); }}
                        className="px-6 py-3 rounded-full text-sm font-semibold text-white/50 border border-white/10 hover:text-white hover:border-white/25 transition-all duration-200">
                        Send Another
                      </button>
                      <Link href="/"
                        className="px-6 py-3 rounded-full text-sm font-bold text-[#04040c] transition-all duration-200 hover:-translate-y-0.5"
                        style={{ background: "linear-gradient(135deg,#38bdf8,#818cf8)", boxShadow: "0 4px 16px rgba(56,189,248,.3)" }}>
                        Back to Home
                      </Link>
                    </div>
                  </div>
                ) : (
                  /* ── Form ── */
                  <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">

                    {/* Header */}
                    <div className="mb-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.07] bg-white/[0.03] mono-font text-[.58rem] tracking-[.15em] uppercase text-white/25 mb-4">
                        <span className="w-1 h-1 rounded-full bg-sky-400/60" />
                        Project Inquiry
                      </div>
                      <h2 className="text-2xl font-black text-white tracking-tight">Tell us about your project</h2>
                      <p className="text-white/30 text-sm mt-1">Fill in the details below and we&apos;ll craft a custom proposal for you.</p>
                    </div>

                    {/* Name + Email row */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="mono-font text-[.58rem] uppercase tracking-[.13em] text-white/30">
                          Your Name <span className="text-sky-400">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Aditya Kumar"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused(null)}
                          className={inputBase}
                          style={inputStyle("name")}
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="mono-font text-[.58rem] uppercase tracking-[.13em] text-white/30">
                          Email Address <span className="text-sky-400">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="hello@company.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused(null)}
                          className={inputBase}
                          style={inputStyle("email")}
                          required
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label className="mono-font text-[.58rem] uppercase tracking-[.13em] text-white/30">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        onFocus={() => setFocused("phone")}
                        onBlur={() => setFocused(null)}
                        className={inputBase}
                        style={inputStyle("phone")}
                      />
                    </div>

                    {/* Services */}
                    <div className="flex flex-col gap-2.5">
                      <label className="mono-font text-[.58rem] uppercase tracking-[.13em] text-white/30">
                        Services Needed <span className="text-white/15">(select all that apply)</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {SERVICES.map((s) => {
                          const selected = form.services.includes(s);
                          return (
                            <button
                              type="button"
                              key={s}
                              onClick={() => toggleService(s)}
                              className="service-pill px-3.5 py-2 rounded-xl text-xs font-medium border"
                              style={{
                                background: selected ? "rgba(56,189,248,0.12)" : "rgba(255,255,255,0.03)",
                                borderColor: selected ? "rgba(56,189,248,0.45)" : "rgba(255,255,255,0.08)",
                                color: selected ? "#38bdf8" : "rgba(255,255,255,0.4)",
                                boxShadow: selected ? "0 0 16px rgba(56,189,248,0.15)" : "none",
                              }}
                            >
                              {selected && <span className="mr-1.5">✓</span>}
                              {s}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Budget */}
                    <div className="flex flex-col gap-2.5">
                      <label className="mono-font text-[.58rem] uppercase tracking-[.13em] text-white/30">Estimated Budget</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {BUDGETS.map((b) => {
                          const selected = form.budget === b;
                          return (
                            <button
                              type="button"
                              key={b}
                              onClick={() => setForm({ ...form, budget: b })}
                              className="service-pill py-2.5 rounded-xl text-xs font-semibold border text-center"
                              style={{
                                background: selected ? "rgba(167,139,250,0.12)" : "rgba(255,255,255,0.03)",
                                borderColor: selected ? "rgba(167,139,250,0.45)" : "rgba(255,255,255,0.08)",
                                color: selected ? "#a78bfa" : "rgba(255,255,255,0.4)",
                                boxShadow: selected ? "0 0 16px rgba(167,139,250,0.15)" : "none",
                              }}
                            >
                              {b}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label className="mono-font text-[.58rem] uppercase tracking-[.13em] text-white/30">
                        Project Details <span className="text-sky-400">*</span>
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Tell us about your project — what you're building, your goals, timeline, and any other details that would help us understand your vision..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        className={`${inputBase} resize-none`}
                        style={inputStyle("message")}
                        required
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="cta-shimmer relative w-full inline-flex items-center justify-center gap-3 py-4 rounded-full font-bold text-sm text-[#04040c] tracking-wide overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.01] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                      style={{
                        background: "linear-gradient(135deg,#38bdf8,#818cf8,#38bdf8)",
                        backgroundSize: "300% auto",
                        boxShadow: "0 0 28px rgba(56,189,248,.35), 0 8px 28px rgba(0,0,0,.5)",
                      }}
                    >
                      <span className="spinning absolute inset-[-6px] rounded-full border border-dashed border-sky-300/20 pointer-events-none" />
                      {loading ? (
                        <span className="relative z-10 flex items-center gap-2.5">
                          <span className="loader" />
                          Sending your message...
                        </span>
                      ) : (
                        <span className="relative z-10 flex items-center gap-2.5">
                          Send Message
                          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                            <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      )}
                    </button>

                    <p className="text-center mono-font text-[.58rem] uppercase tracking-[.1em] text-white/18">
                      No spam · Free consultation · Reply within 24hrs
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}