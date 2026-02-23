"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const SERVICES = [
  { label: "Web Development", accent: "#38bdf8" },
  { label: "Mobile Apps", accent: "#a78bfa" },
  { label: "Shopify Development", accent: "#34d399" },
  { label: "Custom Software", accent: "#fb923c" },
  { label: "UI/UX Design", accent: "#f472b6" },
  { label: "AI Integration", accent: "#facc15" },
];

const LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

const SOCIALS = [
  {
    name: "LinkedIn", href: "#", accent: "#38bdf8", label: "Connect",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    name: "Instagram", href: "#", accent: "#f472b6", label: "Follow",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor" stroke="none"/></svg>,
  },
  {
    name: "Twitter", href: "#", accent: "#a78bfa", label: "Follow",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  },
  {
    name: "GitHub", href: "#", accent: "#34d399", label: "Star",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>,
  },
];

const STATS = [
  { num: 150, suffix: "+", label: "Projects", accent: "#38bdf8" },
  { num: 50, suffix: "+", label: "Clients", accent: "#a78bfa" },
  { num: 5, suffix: "★", label: "Rating", accent: "#facc15" },
  { num: 98, suffix: "%", label: "Satisfied", accent: "#34d399" },
];

const MARQUEE = [
  "Web Dev", "Mobile Apps", "Shopify", "Software", "UI/UX", "AI", "React", "Next.js", "Flutter", "Node.js", "TypeScript", "Figma",
  "Web Dev", "Mobile Apps", "Shopify", "Software", "UI/UX", "AI", "React", "Next.js", "Flutter", "Node.js", "TypeScript", "Figma",
];

function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const step = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - t, 3);
          setCount(Math.floor(ease * target));
          if (t < 1) requestAnimationFrame(step);
          else setCount(target);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return { count, ref };
}

function StatCard({ stat }: { stat: typeof STATS[0] }) {
  const { count, ref } = useCounter(stat.num);
  const [hov, setHov] = useState(false);
  return (
    <div ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="relative flex flex-col items-center justify-center p-6 rounded-2xl border overflow-hidden cursor-default transition-all duration-300"
      style={{
        background: hov ? `${stat.accent}10` : "rgba(255,255,255,0.02)",
        borderColor: hov ? `${stat.accent}40` : "rgba(255,255,255,0.07)",
        transform: hov ? "translateY(-4px)" : "none",
        boxShadow: hov ? `0 0 30px ${stat.accent}20, 0 10px 30px rgba(0,0,0,0.4)` : "none",
      }}>
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{ opacity: hov ? 1 : 0, background: `radial-gradient(circle at 50% 0%, ${stat.accent}15, transparent 70%)` }} />
      <span className="font-black text-3xl tracking-tight relative z-10 transition-colors duration-200"
        style={{ color: hov ? stat.accent : "#fff" }}>
        {count}{stat.suffix}
      </span>
      <span className="mono-font text-[.58rem] uppercase tracking-[.15em] text-white/25 mt-1 relative z-10">{stat.label}</span>
      <div className="absolute bottom-0 left-0 h-0.5 rounded-b-2xl transition-all duration-500"
        style={{ width: hov ? "100%" : "0%", background: `linear-gradient(90deg,transparent,${stat.accent},transparent)` }} />
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [hovSocial, setHovSocial] = useState<string | null>(null);
  const [hovService, setHovService] = useState<string | null>(null);

  const handleSub = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(""); }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');
        .ft-font   { font-family:'Outfit',sans-serif; }
        .mono-font { font-family:'Space Mono',monospace; }

        @keyframes marquee-l { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes marquee-r { from{transform:translateX(-50%)} to{transform:translateX(0)} }
        @keyframes breathe   { 0%,100%{opacity:.3;transform:scale(1)} 50%{opacity:.65;transform:scale(1.08)} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes spin-rev  { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
        @keyframes float-y   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes shimmer   { 0%{background-position:-300% center} 100%{background-position:300% center} }
        @keyframes pop-in    { from{opacity:0;transform:scale(.85)} to{opacity:1;transform:scale(1)} }
        @keyframes border-run{ 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes pulse-dot { 0%,100%{box-shadow:0 0 0 0 rgba(74,222,128,.5)} 50%{box-shadow:0 0 0 7px rgba(74,222,128,0)} }
        @keyframes flicker   { 0%,100%{opacity:1} 92%{opacity:1} 93%{opacity:.6} 94%{opacity:1} 96%{opacity:.8} 97%{opacity:1} }

        .marquee-l  { animation:marquee-l 28s linear infinite; }
        .marquee-r  { animation:marquee-r 22s linear infinite; }
        .breathe    { animation:breathe 6s ease-in-out infinite; filter:blur(28px); }
        .spinning   { animation:spin-slow 18s linear infinite; }
        .spin-rev   { animation:spin-rev 26s linear infinite; }
        .float-logo { animation:float-y 5s ease-in-out infinite; }
        .pulse-dot  { animation:pulse-dot 2s ease-in-out infinite; }
        .flicker    { animation:flicker 5s ease-in-out infinite; }

        .cta-shimmer:hover { animation:shimmer 1.5s linear infinite; }

        /* Gradient border effect */
        .grad-border {
          position:relative;
        }
        .grad-border::before {
          content:'';
          position:absolute;
          inset:-1px;
          border-radius:inherit;
          padding:1px;
          background:linear-gradient(135deg,#38bdf8,#818cf8,#f472b6,#38bdf8);
          background-size:300% 300%;
          animation:border-run 4s linear infinite;
          -webkit-mask:linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
          -webkit-mask-composite:xor;
          mask-composite:exclude;
          pointer-events:none;
        }

        .sub-success { animation:pop-in .45s cubic-bezier(.16,1,.3,1) both; }

        /* Scanline flicker overlay */
        .scanlines {
          background:repeating-linear-gradient(0deg,rgba(0,0,0,.04) 0px,rgba(0,0,0,.04) 1px,transparent 1px,transparent 4px);
          pointer-events:none;
        }

        /* Service link */
        .srv-link {
          display:flex;
          align-items:center;
          gap:8px;
          font-size:.85rem;
          color:rgba(255,255,255,.3);
          transition:all .25s cubic-bezier(.16,1,.3,1);
          padding:6px 0;
          border-bottom:1px solid rgba(255,255,255,.04);
        }
        .srv-link:last-child { border-bottom:none; }
        .srv-link:hover { padding-left:8px; }

        .nav-link {
          display:block;
          font-size:.85rem;
          color:rgba(255,255,255,.3);
          transition:all .2s ease;
          padding:5px 0;
        }
        .nav-link:hover { color:rgba(255,255,255,.85); }
      `}</style>

      <footer className="ft-font relative bg-[#04040c] overflow-hidden">

        {/* ── Background atmosphere ── */}
        <div className="breathe absolute -top-40 left-1/4 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(56,189,248,.08) 0%,transparent 65%)" }} />
        <div className="breathe absolute bottom-20 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(167,139,250,.07) 0%,transparent 65%)", animationDelay: "3s" }} />
        <div className="breathe absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(244,114,182,.05) 0%,transparent 65%)", animationDelay: "5s" }} />

        {/* Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02] scanlines" />
        <div className="absolute inset-0 pointer-events-none opacity-[0.015]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }} />

        {/* ── Dual marquee ── */}
        <div className="border-b border-white/[0.04] py-3 overflow-hidden bg-white/[0.01]">
          <div className="marquee-l flex w-max">
            {MARQUEE.map((t, i) => (
              <div key={i} className="mono-font flex items-center gap-3 px-7 text-[.58rem] uppercase tracking-[.2em] text-white/12 whitespace-nowrap">
                <span className="w-1 h-1 rounded-full" style={{ background: ["#38bdf8","#a78bfa","#34d399","#f472b6"][i%4] + "60" }} />
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* ── HERO CTA BAND ── */}
        <div className="relative border-b border-white/[0.05]">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="relative rounded-3xl border border-white/[0.07] bg-white/[0.015] overflow-hidden p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10"
              style={{ boxShadow: "0 0 80px rgba(56,189,248,.06), inset 0 1px 0 rgba(255,255,255,.05)" }}>

              {/* Inner glow */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(56,189,248,.05), transparent 70%)" }} />

              {/* Spinning rings decoration */}
              <div className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 pointer-events-none">
                <div className="spinning absolute w-40 h-40 rounded-full border border-dashed border-sky-400/10"
                  style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
                <div className="spin-rev absolute w-56 h-56 rounded-full border border-violet-400/[0.07]"
                  style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
                <div className="spinning absolute w-72 h-72 rounded-full border border-white/[0.03]"
                  style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", animationDuration: "35s" }} />
                {/* Center dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-sky-400"
                  style={{ boxShadow: "0 0 16px #38bdf8" }} />
              </div>

              <div className="relative z-10 flex flex-col gap-5 max-w-xl">
                <div className="flex items-center gap-2 mono-font text-[.6rem] uppercase tracking-[.2em] text-sky-400/70">
                  <span className="pulse-dot w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                  Accepting new projects · 2025
                </div>
                <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] font-black leading-[1.06] tracking-tight">
                  <span className="text-white/20">Your idea deserves</span>
                  <br />
                  <span className="flicker" style={{
                    background: "linear-gradient(135deg,#38bdf8,#818cf8,#f472b6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>world-class execution.</span>
                </h2>
                <p className="text-white/30 text-sm leading-relaxed max-w-sm">
                  From MVP to enterprise scale — we bring the talent, tech, and tenacity to ship products that matter.
                </p>
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
                <Link href="/contact"
                  className="cta-shimmer grad-border relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm text-[#04040c] tracking-wide overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:scale-[1.04]"
                  style={{
                    background: "linear-gradient(135deg,#38bdf8,#818cf8,#38bdf8)",
                    backgroundSize: "300% auto",
                    boxShadow: "0 0 30px rgba(56,189,248,.4), 0 10px 30px rgba(0,0,0,.5)",
                  }}>
                  <span className="spinning absolute inset-[-8px] rounded-full border border-dashed border-sky-300/20 pointer-events-none" />
                  Start a Project
                  <svg className="w-4 h-4 relative z-10" viewBox="0 0 16 16" fill="none">
                    <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link href="/about"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-sm text-white/40 border border-white/[0.08] bg-white/[0.03] hover:text-white hover:border-white/25 hover:bg-white/[0.07] transition-all duration-200">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── BENTO GRID ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">

            {/* ── BRAND CARD (large) ── */}
            <div className="lg:col-span-4 rounded-3xl border border-white/[0.07] bg-white/[0.02] p-8 flex flex-col gap-6 relative overflow-hidden"
              style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,.04)" }}>
              <div className="absolute top-0 left-0 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle,rgba(56,189,248,.07) 0%,transparent 65%)", filter: "blur(16px)" }} />

              {/* Logo */}
              <div className="float-logo flex items-center gap-3 w-fit">
                <div className="relative w-12 h-12 rounded-2xl flex items-center justify-center border border-sky-400/25 bg-sky-400/[0.08]"
                  style={{ boxShadow: "0 0 20px rgba(56,189,248,.15)" }}>
                  <Image src="/logo.png" alt="AdityaX" width={28} height={28} className="object-contain" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="font-black text-lg tracking-tight text-white">
                    AdityaX<span style={{ background: "linear-gradient(90deg,#38bdf8,#818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Innovation</span>
                  </span>
                  <span className="mono-font text-[.5rem] tracking-[.18em] uppercase text-white/20 mt-0.5">Digital Studio · Pune, IN</span>
                </div>
              </div>

              <p className="text-sm text-white/28 leading-relaxed">
                We craft blazing-fast web apps, mobile products, Shopify stores & AI-powered software — from idea to launch to scale.
              </p>

              {/* Contact rows */}
              <div className="flex flex-col gap-2 mt-auto">
                {[
                  { icon: "✉", text: "contact@adityaxinnovation.com", color: "#38bdf8" },
                  { icon: "📞", text: "+91 98765 43210", color: "#a78bfa" },
                  { icon: "📍", text: "Pune, Maharashtra, India", color: "#34d399" },
                ].map((c) => (
                  <div key={c.text} className="flex items-center gap-2.5 text-xs text-white/25 hover:text-white/65 transition-colors duration-200 group cursor-default">
                    <span className="text-sm transition-colors duration-200" style={{ color: "rgba(255,255,255,0.2)" }}>{c.icon}</span>
                    <span>{c.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── STATS GRID (2x2) ── */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
              {STATS.map((s) => <StatCard key={s.label} stat={s} />)}
            </div>

            {/* ── SOCIAL CARDS ── */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
              {SOCIALS.map((s) => {
                const isH = hovSocial === s.name;
                return (
                  <a key={s.name} href={s.href}
                    onMouseEnter={() => setHovSocial(s.name)}
                    onMouseLeave={() => setHovSocial(null)}
                    className="relative rounded-2xl border flex flex-col items-center justify-center gap-3 p-5 overflow-hidden transition-all duration-300"
                    style={{
                      background: isH ? `${s.accent}0f` : "rgba(255,255,255,0.02)",
                      borderColor: isH ? `${s.accent}45` : "rgba(255,255,255,0.07)",
                      transform: isH ? "translateY(-4px) scale(1.02)" : "none",
                      boxShadow: isH ? `0 0 30px ${s.accent}20, 0 10px 30px rgba(0,0,0,.4)` : "none",
                    }}>
                    <div className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                      style={{ opacity: isH ? 1 : 0, background: `radial-gradient(circle at 50% 0%,${s.accent}18,transparent 70%)` }} />

                    <div className="relative z-10 w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300"
                      style={{
                        background: isH ? `${s.accent}18` : "rgba(255,255,255,0.05)",
                        borderColor: isH ? `${s.accent}50` : "rgba(255,255,255,0.08)",
                        color: isH ? s.accent : "rgba(255,255,255,0.35)",
                        boxShadow: isH ? `0 0 18px ${s.accent}35` : "none",
                      }}>
                      {s.icon}
                    </div>
                    <div className="relative z-10 text-center">
                      <p className="text-xs font-semibold transition-colors duration-200"
                        style={{ color: isH ? "#fff" : "rgba(255,255,255,0.5)" }}>
                        {s.name}
                      </p>
                      <p className="mono-font text-[.55rem] uppercase tracking-[.1em] mt-0.5 transition-colors duration-200"
                        style={{ color: isH ? s.accent : "rgba(255,255,255,0.2)" }}>
                        {s.label} →
                      </p>
                    </div>

                    <div className="absolute bottom-0 left-0 h-0.5 rounded-b-2xl transition-all duration-500"
                      style={{ width: isH ? "100%" : "0%", background: `linear-gradient(90deg,transparent,${s.accent},transparent)` }} />
                  </a>
                );
              })}
            </div>

            {/* ── SERVICES ── */}
            <div className="lg:col-span-4 rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7 flex flex-col gap-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle,rgba(56,189,248,.06) 0%,transparent 65%)", filter: "blur(12px)" }} />
              <h3 className="mono-font text-[.6rem] uppercase tracking-[.2em] text-white/22 flex items-center gap-2">
                <span className="w-4 h-px bg-sky-400/50 rounded-full" />
                Services
              </h3>
              <div className="flex flex-col">
                {SERVICES.map((s) => {
                  const isH = hovService === s.label;
                  return (
                    <Link key={s.label} href="/services"
                      onMouseEnter={() => setHovService(s.label)}
                      onMouseLeave={() => setHovService(null)}
                      className="srv-link"
                      style={{ color: isH ? s.accent : "rgba(255,255,255,0.3)" }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-200"
                        style={{ background: isH ? s.accent : "rgba(255,255,255,0.12)", boxShadow: isH ? `0 0 6px ${s.accent}` : "none" }} />
                      {s.label}
                      {isH && (
                        <svg className="w-3 h-3 ml-auto opacity-70" viewBox="0 0 12 12" fill="none">
                          <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* ── NEWSLETTER ── */}
            <div className="lg:col-span-4 rounded-3xl border border-white/[0.07] bg-white/[0.02] p-7 flex flex-col gap-5 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle,rgba(167,139,250,.07) 0%,transparent 65%)", filter: "blur(14px)" }} />
              <div>
                <h3 className="mono-font text-[.6rem] uppercase tracking-[.2em] text-white/22 flex items-center gap-2 mb-3">
                  <span className="w-4 h-px bg-violet-400/50 rounded-full" />
                  Stay in the loop
                </h3>
                <p className="text-sm text-white/28 leading-relaxed">
                  Product updates, tech deep-dives & behind-the-scenes — straight to your inbox.
                </p>
              </div>

              {subscribed ? (
                <div className="sub-success flex items-center gap-3 px-4 py-4 rounded-2xl border border-emerald-400/25 bg-emerald-400/[0.07]">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-emerald-400/[0.15] border border-emerald-400/30">
                    <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 16 16" fill="none">
                      <path d="M2 8l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-emerald-400">You&apos;re in!</p>
                    <p className="mono-font text-[.55rem] uppercase tracking-[.1em] text-white/25 mt-0.5">Check your inbox to confirm</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSub} className="flex flex-col gap-2.5">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="yourname@email.com"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white/70 placeholder:text-white/18 bg-white/[0.04] border border-white/[0.08] focus:outline-none focus:border-violet-400/40 focus:bg-white/[0.06] transition-all duration-200" />
                  <button type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-sm text-[#04040c] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                    style={{ background: "linear-gradient(135deg,#a78bfa,#818cf8)", boxShadow: "0 4px 16px rgba(167,139,250,.28)" }}>
                    Subscribe →
                  </button>
                  <div className="flex gap-2">
                    {["No spam ever", "Cancel anytime"].map((t) => (
                      <span key={t} className="mono-font text-[.52rem] uppercase tracking-[.09em] text-white/16 px-2.5 py-1 rounded-full border border-white/[0.05]">{t}</span>
                    ))}
                  </div>
                </form>
              )}
            </div>

            {/* ── QUICK LINKS ── */}
            <div className="lg:col-span-2 rounded-3xl border border-white/[0.07] bg-white/[0.02] p-6 flex flex-col gap-4">
              <h3 className="mono-font text-[.6rem] uppercase tracking-[.2em] text-white/22 flex items-center gap-2">
                <span className="w-4 h-px bg-pink-400/50 rounded-full" />
                Pages
              </h3>
              <nav className="flex flex-col gap-0.5">
                {LINKS.map((l) => (
                  <Link key={l.label} href={l.href} className="nav-link">{l.label}</Link>
                ))}
              </nav>
            </div>

            {/* ── LOCATION CARD ── */}
            <div className="lg:col-span-2 rounded-3xl border border-white/[0.07] bg-white/[0.02] p-6 flex flex-col gap-4 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
                style={{
                  backgroundImage: "radial-gradient(circle, rgba(255,255,255,.8) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }} />
              <h3 className="mono-font text-[.6rem] uppercase tracking-[.2em] text-white/22 flex items-center gap-2 relative z-10">
                <span className="w-4 h-px bg-emerald-400/50 rounded-full" />
                Location
              </h3>
              <div className="relative z-10 flex flex-col gap-2 mt-auto">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center border border-emerald-400/25 bg-emerald-400/[0.08]"
                  style={{ boxShadow: "0 0 12px rgba(52,211,153,.15)" }}>
                  <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 text-emerald-400">
                    <path d="M10 2a6 6 0 00-6 6c0 4 6 10 6 10s6-6 6-10a6 6 0 00-6-6z" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <p className="text-sm font-semibold text-white/70">Pune, MH</p>
                <p className="mono-font text-[.55rem] uppercase tracking-[.1em] text-white/22">India · Global</p>
              </div>
            </div>

          </div>
        </div>

        {/* ── Bottom marquee ── */}
        <div className="border-t border-white/[0.04] overflow-hidden py-3 bg-white/[0.01]">
          <div className="marquee-r flex w-max">
            {MARQUEE.map((t, i) => (
              <div key={i} className="mono-font flex items-center gap-3 px-7 text-[.55rem] uppercase tracking-[.2em] text-white/10 whitespace-nowrap">
                <span className="w-1 h-1 rounded-full bg-white/15" />
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="mono-font text-[.58rem] uppercase tracking-[.12em] text-white/15">
              © {new Date().getFullYear()} Adityaxinnovation · All rights reserved
            </p>
            <div className="flex items-center gap-1.5">
              <span className="mono-font text-[.58rem] uppercase tracking-[.1em] text-white/15">Crafted with</span>
              <span className="text-pink-400 text-xs">♥</span>
              <span className="mono-font text-[.58rem] uppercase tracking-[.1em] text-white/15">in Pune, India</span>
            </div>
            <div className="flex items-center gap-5">
              {["Privacy", "Terms"].map((t) => (
                <Link key={t} href="#"
                  className="mono-font text-[.58rem] uppercase tracking-[.12em] text-white/15 hover:text-white/45 transition-colors duration-200">
                  {t}
                </Link>
              ))}
            </div>
          </div>
        </div>

      </footer>
    </>
  );
}