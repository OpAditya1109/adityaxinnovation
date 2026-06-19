"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type S = {
  title: string; fullTitle: string; tagline: string; description: string;
  accent: string; glow: string; glowDim: string; accent2: string; accentRgb: string;
  icon: string; number: string; cta: string;
};

const ICONS: Record<string, React.ReactNode> = {
  web:    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" stroke="currentColor" strokeWidth="1.3"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="currentColor" strokeWidth="1.3"/></svg>,
  mobile: <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10"><rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth="1.3"/><path d="M10 18h4M9 6h6M9 9.5h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
  shopify:<svg viewBox="0 0 24 24" fill="none" className="w-10 h-10"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" strokeWidth="1.3"/><path d="M3 6h18M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1.3"/></svg>,
  code:   <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10"><path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  design: <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
  ai:     <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10"><path d="M12 2a4 4 0 014 4v1h1a3 3 0 010 6h-1v1a4 4 0 01-8 0v-1H7a3 3 0 010-6h1V6a4 4 0 014-4z" stroke="currentColor" strokeWidth="1.3"/><path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>,
};

export default function ServiceHero({ s, slug }: { s: S; slug: string }) {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const [mounted, setMounted] = useState(false);
  const rafRef = useRef<number>(0);
  const target = useRef({ x: 0.5, y: 0.5 });
  const current = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    setMounted(true);
    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight };
    };
    const lerp = () => {
      current.current.x += (target.current.x - current.current.x) * 0.06;
      current.current.y += (target.current.y - current.current.y) * 0.06;
      setMouse({ x: current.current.x, y: current.current.y });
      rafRef.current = requestAnimationFrame(lerp);
    };
    window.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(lerp);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(rafRef.current); };
  }, []);

  const px = mounted ? (mouse.x - 0.5) * 45 : 0;
  const py = mounted ? (mouse.y - 0.5) * 25 : 0;

  return (
    <section className="relative overflow-hidden flex items-center px-6 py-28" style={{ minHeight: "92vh" }}>
      {/* Atmosphere blobs */}
      <div className="blob absolute -top-48 -left-24 w-[800px] h-[800px] rounded-full"
        style={{ background: `radial-gradient(circle,${s.glowDim} 0%,transparent 65%)` }} />
      <div className="blob absolute -bottom-24 right-0 w-[600px] h-[600px] rounded-full"
        style={{ background: `radial-gradient(circle,${s.glowDim} 0%,transparent 65%)`, animationDelay: "3.5s" }} />

      {/* Grid texture */}
      <div className="absolute inset-0 line-grid pointer-events-none" />

      {/* Diagonal accent line */}
      <div className="absolute top-0 bottom-0 right-[40%] w-px pointer-events-none hidden xl:block"
        style={{ background: `linear-gradient(to bottom,transparent,${s.accent}18,transparent)` }} />

      {/* ── Orbital system (right side, parallax) ── */}
      <div className="hidden xl:block absolute right-16 top-1/2 pointer-events-none"
        style={{ transform: `translate(${-px * 0.5}px, calc(-50% + ${py * 0.35}px))` }}>

        {/* Ring 1 — innermost */}
        <div className="r1 absolute w-[300px] h-[300px] rounded-full border border-dashed"
          style={{ borderColor: s.accent+"25", top:"50%", left:"50%", transform:"translate(-50%,-50%)" }}>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full"
            style={{ background: s.accent, boxShadow:`0 0 22px ${s.accent}, 0 0 50px ${s.accent}60` }} />
          <div className="absolute -bottom-1.5 right-1/4 w-3 h-3 rounded-full opacity-60"
            style={{ background: s.accent2 }} />
        </div>

        {/* Ring 2 */}
        <div className="r2 absolute w-[480px] h-[480px] rounded-full border"
          style={{ borderColor: s.accent2+"15", top:"50%", left:"50%", transform:"translate(-50%,-50%)" }}>
          <div className="absolute top-1/2 -right-3 -translate-y-1/2 w-5 h-5 rounded-full"
            style={{ background: s.accent2, boxShadow:`0 0 16px ${s.accent2}` }} />
          <div className="absolute top-1/4 -left-1.5 w-2.5 h-2.5 rounded-full opacity-40"
            style={{ background: s.accent }} />
        </div>

        {/* Ring 3 — outermost */}
        <div className="r3 absolute w-[660px] h-[660px] rounded-full border border-white/[0.04]"
          style={{ top:"50%", left:"50%", transform:"translate(-50%,-50%)" }}>
          <div className="absolute top-3/4 -right-1.5 w-2 h-2 rounded-full opacity-30"
            style={{ background: s.accent2 }} />
        </div>

        {/* Center icon */}
        <div className="flt scan-host absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-[32px] flex items-center justify-center border"
          style={{ background:`linear-gradient(135deg,${s.glow},transparent)`, borderColor: s.accent+"40", color: s.accent, boxShadow:`0 0 60px ${s.glow},0 0 120px ${s.glowDim},inset 0 1px 0 rgba(255,255,255,.12)` }}>
          <div className="scanner" style={{ background:`linear-gradient(90deg,transparent,${s.accent},transparent)` }} />
          {ICONS[s.icon]}
          {/* Corner brackets */}
          {[["top-2 left-2","to bottom","to right"],["top-2 right-2","to bottom","to left"],["bottom-2 left-2","to top","to right"],["bottom-2 right-2","to top","to left"]].map(([pos,,],i)=>(
            <div key={i} className={`absolute ${pos} w-3 h-3 pointer-events-none`}>
              <div className="absolute top-0 left-0 w-full h-px" style={{ background:`linear-gradient(to right,${s.accent}60,transparent)` }} />
              <div className="absolute top-0 left-0 h-full w-px" style={{ background:`linear-gradient(to bottom,${s.accent}60,transparent)` }} />
            </div>
          ))}
        </div>

        {/* Floating label chip */}
        <div className="absolute mn text-[.5rem] uppercase tracking-[.14em] px-3 py-1.5 rounded-full border whitespace-nowrap"
          style={{ top:"50%", left:"50%", transform:`translate(calc(-50% + 190px),calc(-50% - 80px))`, borderColor: s.accent+"30", background: s.glowDim, color: s.accent+"90" }}>
          {s.number} · {s.tagline.split(".")[0]}
        </div>
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full"
        style={{ transform: mounted ? `translate(${px*0.04}px,${py*0.025}px)` : "none", transition:"transform .15s ease-out" }}>

        {/* Breadcrumb */}
        <nav className="a1 flex items-center gap-2 mb-10">
          <Link href="/services"
            className="flex items-center gap-2 mn text-[.56rem] uppercase tracking-[.15em] text-white/22 hover:text-white/65 transition-colors duration-200">
            <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
              <path d="M11 6H1M5 1L1 6l4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Services
          </Link>
          <span className="text-white/10 text-xs">/</span>
          <span className="mn text-[.56rem] uppercase tracking-[.15em]" style={{ color: s.accent+"65" }}>{s.number} · {s.fullTitle}</span>
        </nav>

        {/* Status badge */}
        <div className="a1 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border mb-8"
          style={{ borderColor: s.accent+"30", background: s.glow }}>
          <span className="pg-dot w-2 h-2 rounded-full bg-green-400" />
          <span className="mn text-[.58rem] uppercase tracking-[.14em]" style={{ color: s.accent }}>Available Now · Free Consultation</span>
        </div>

        {/* Giant number watermark */}
        <div className="a1 dn select-none leading-none tracking-tighter mb-1 -ml-1"
          style={{ fontSize:"clamp(5rem,14vw,11rem)", fontWeight:900, color: s.accent+"07", WebkitTextStroke:`1px ${s.accent}06`, letterSpacing:"-0.05em" }}>
          {s.number}
        </div>

        {/* Main heading */}
        <h1 className="a2 dn font-black leading-[1.0] tracking-tight -mt-8 mb-5"
          style={{ fontSize:"clamp(3rem,9vw,7.5rem)" }}>
          <span style={{ color:"rgba(255,255,255,0.14)" }}>We master</span>
          <br />
          <span className="glitch inline-block" style={{ background:`linear-gradient(135deg,${s.accent} 0%,${s.accent2} 60%,${s.accent} 100%)`,backgroundSize:"200% auto",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>
            {s.fullTitle}
          </span>
          <span style={{ color:"#fff" }}>.</span>
        </h1>

        {/* Tagline bar */}
        <div className="a2 flex items-center gap-3 mb-8">
          <div className="w-1 h-8 rounded-full flex-shrink-0"
            style={{ background:`linear-gradient(to bottom,${s.accent},${s.accent2})` }} />
          <p className="mn text-[.7rem] uppercase tracking-[.14em]" style={{ color: s.accent+"75" }}>{s.tagline}</p>
        </div>

        {/* Description */}
        <p className="a3 text-white/32 leading-relaxed mb-12 max-w-lg" style={{ fontSize:"clamp(.95rem,1.8vw,1.15rem)" }}>
          {s.description}
        </p>

        {/* CTA row */}
        <div className="a4 flex flex-wrap gap-3 items-center">
          <Link href="/contact"
            className="sh relative inline-flex items-center gap-3 rounded-full font-black tracking-wide overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:scale-[1.04]"
            style={{ background:`linear-gradient(135deg,${s.accent},${s.accent2},${s.accent})`,backgroundSize:"300% auto",boxShadow:`0 0 35px ${s.glow},0 12px 40px rgba(0,0,0,.6)`,padding:"17px 38px",fontSize:"0.9rem",color:"#04040c" }}>
            <span className="spin absolute inset-[-9px] rounded-full border border-dashed pointer-events-none"
              style={{ borderColor: s.accent+"20" }} />
            <span className="relative z-10 flex items-center gap-3">
              {s.cta}
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>

          <Link href="/about"
            className="inline-flex items-center gap-2 rounded-full font-semibold text-white/38 border border-white/[0.09] bg-white/[0.03] hover:text-white hover:border-white/22 hover:bg-white/[0.07] transition-all duration-200"
            style={{ padding:"17px 30px",fontSize:"0.875rem" }}>
            Our Work →
          </Link>

          <div className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/[0.06] bg-white/[0.02]">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: s.accent, boxShadow:`0 0 6px ${s.accent}` }} />
            <span className="mn text-[.55rem] uppercase tracking-[.1em] text-white/25">24hr response guaranteed</span>
          </div>
        </div>
      </div>
    </section>
  );
}