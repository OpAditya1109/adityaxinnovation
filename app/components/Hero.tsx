"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const WORDS = ["Web Apps", "Mobile Apps", "Shopify", "AI Software", "The Future"];

const STATS = [
  { num: "150+", label: "Projects" },
  { num: "98%", label: "Satisfaction" },
  { num: "5★", label: "Rating" },
  { num: "24/7", label: "Support" },
];

const MARQUEE_ITEMS = [
  "Web Development", "Mobile Apps", "Shopify", "Custom Software",
  "UI/UX Design", "Cloud Solutions", "AI Integration", "API Development",
  "Web Development", "Mobile Apps", "Shopify", "Custom Software",
  "UI/UX Design", "Cloud Solutions", "AI Integration", "API Development",
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  // Typewriter
  useEffect(() => {
    const word = WORDS[wordIndex];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < word.length)
      t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    else if (!deleting && displayed.length === word.length)
      t = setTimeout(() => setDeleting(true), 2000);
    else if (deleting && displayed.length > 0)
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    else { setDeleting(false); setWordIndex((i) => (i + 1) % WORDS.length); }
    return () => clearTimeout(t);
  }, [displayed, deleting, wordIndex]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let W = (canvas.width = canvas.offsetWidth);
    let H = (canvas.height = canvas.offsetHeight);

    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number; hue: number };
    const ps: P[] = Array.from({ length: 80 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.4,
      a: Math.random() * 0.4 + 0.1,
      hue: Math.random() > 0.5 ? 200 : 260,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const dx = ps[i].x - ps[j].x, dy = ps[i].y - ps[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(56,189,248,${0.07 * (1 - d / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(ps[i].x, ps[i].y);
            ctx.lineTo(ps[j].x, ps[j].y);
            ctx.stroke();
          }
        }
      }
      ps.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue},90%,70%,${p.a})`;
        ctx.fill();
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      });
      rafRef.current = requestAnimationFrame(draw);
    };
    draw();

    const resize = () => { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(rafRef.current); window.removeEventListener("resize", resize); };
  }, []);

  const px = mounted ? (mousePos.x - 0.5) * 40 : 0;
  const py = mounted ? (mousePos.y - 0.5) * 25 : 0;

  return (
    <>
      {/* ── Keyframes ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');
        .hero-font { font-family:'Outfit',sans-serif; }
        .mono-font { font-family:'Space Mono',monospace; }

        @keyframes fade-up   { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes float-y   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes spin-rev  { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
        @keyframes breathe   { 0%,100%{opacity:.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.1)} }
        @keyframes shimmer   { 0%{background-position:-300% center} 100%{background-position:300% center} }
        @keyframes blink     { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes pulse-dot { 0%,100%{box-shadow:0 0 0 0 rgba(74,222,128,.5)} 50%{box-shadow:0 0 0 6px rgba(74,222,128,0)} }
        @keyframes marquee   { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes glitch    {
          0%,94%,100%{clip-path:none;transform:none}
          95%{clip-path:polygon(0 15%,100% 15%,100% 40%,0 40%);transform:translateX(-5px)}
          96%{clip-path:polygon(0 55%,100% 55%,100% 75%,0 75%);transform:translateX(5px)}
          97%{clip-path:polygon(0 5%,100% 5%,100% 20%,0 20%);transform:translateX(-3px)}
        }
        @keyframes border-run {
          0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%}
        }

        .anim-fade-up-1 { animation: fade-up .8s cubic-bezier(.16,1,.3,1) .1s both }
        .anim-fade-up-2 { animation: fade-up .8s cubic-bezier(.16,1,.3,1) .25s both }
        .anim-fade-up-3 { animation: fade-up .8s cubic-bezier(.16,1,.3,1) .4s both }
        .anim-fade-up-4 { animation: fade-up .8s cubic-bezier(.16,1,.3,1) .55s both }
        .anim-fade-up-5 { animation: fade-up .8s cubic-bezier(.16,1,.3,1) .7s both }

        .glitch-text { animation: glitch 9s ease-in-out infinite }
        .float-badge { animation: float-y 4s ease-in-out infinite }
        .ring-1 { animation: spin-slow 18s linear infinite }
        .ring-2 { animation: spin-rev  26s linear infinite }
        .ring-3 { animation: spin-slow 38s linear infinite }
        .breathe { animation: breathe 5s ease-in-out infinite }
        .cursor-blink { animation: blink 1s ease-in-out infinite }
        .pulse-dot { animation: pulse-dot 2s ease-in-out infinite }
        .marquee-track { animation: marquee 22s linear infinite }

        .cta-shimmer:hover { animation: shimmer 1.5s linear infinite }

        .gradient-border {
          position: relative;
        }
        .gradient-border::before {
          content:'';
          position:absolute;
          inset:-1px;
          border-radius:9999px;
          padding:1px;
          background: linear-gradient(135deg,#38bdf8,#818cf8,#f472b6,#38bdf8);
          background-size:300% 300%;
          animation: border-run 4s linear infinite;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
      `}</style>

      <section className="hero-font relative min-h-screen bg-[#04040c] flex flex-col items-center justify-center overflow-hidden">

        {/* ── Canvas particles ── */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

        {/* ── Glow blobs ── */}
        <div className="breathe absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(56,189,248,.1) 0%,transparent 65%)", filter: "blur(24px)" }} />
        <div className="breathe absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(129,140,248,.09) 0%,transparent 65%)", filter: "blur(24px)", animationDelay: "2s" }} />

        {/* ── Orbital rings (desktop only) ── */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ transform: `translate(calc(-50% + ${px * 0.3}px), calc(-50% + ${py * 0.3}px))` }}>
          {/* Ring 1 */}
          <div className="ring-1 absolute w-[420px] h-[420px] rounded-full border border-white/[0.04]"
            style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-sky-400/80"
              style={{ boxShadow: "0 0 10px #38bdf8" }} />
          </div>
          {/* Ring 2 */}
          <div className="ring-2 absolute w-[580px] h-[580px] rounded-full border border-indigo-400/[0.06]"
            style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
            <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 rounded-full bg-violet-400/70"
              style={{ boxShadow: "0 0 12px #818cf8" }} />
          </div>
          {/* Ring 3 */}
          <div className="ring-3 absolute w-[740px] h-[740px] rounded-full border border-white/[0.03]"
            style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-pink-400/80"
              style={{ boxShadow: "0 0 8px #f472b6" }} />
          </div>
        </div>

        {/* ── Grid overlay ── */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)",
            backgroundSize: "70px 70px",
          }} />

        {/* ── Main content ── */}
        <div className="relative z-10 flex flex-col items-center gap-8 px-6 py-24 w-full max-w-5xl mx-auto text-center">

          {/* Badge */}
          <div className="anim-fade-up-1 float-badge inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-sky-400/20 bg-sky-400/[0.06] mono-font text-[0.65rem] tracking-[0.15em] uppercase text-sky-300/80">
            <span className="pulse-dot w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
            Now accepting new projects · 2025
          </div>

          {/* H1 */}
          <h1 className="anim-fade-up-2 text-[clamp(2.4rem,6.5vw,5.2rem)] font-black leading-[1.04] tracking-tight"
            style={{ transform: `translate(${px * 0.15}px, ${py * 0.1}px)`, transition: "transform .1s ease-out" }}>
            <span className="text-white/20">Build Your</span>
            <br />
            <span className="glitch-text inline-block"
              style={{
                background: "linear-gradient(135deg,#38bdf8,#818cf8,#f472b6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
              AI Digital Future
            </span>
            <br />
            <span className="text-white">With Us.</span>
          </h1>

          {/* Typewriter chip */}
          <div className="anim-fade-up-2 gradient-border inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03]">
            <span className="mono-font text-[0.6rem] uppercase tracking-[0.15em] text-sky-400/60 border-r border-white/10 pr-3">
              We build
            </span>
            <span className="font-bold text-base min-w-[160px] text-left"
              style={{
                background: "linear-gradient(90deg,#38bdf8,#818cf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
              {displayed}
              <span className="cursor-blink inline-block w-0.5 h-5 bg-sky-400 ml-0.5 align-middle rounded-sm"
                style={{ boxShadow: "0 0 6px #38bdf8" }} />
            </span>
          </div>

          {/* Sub text */}
          <p className="anim-fade-up-3 text-white/35 text-[clamp(.9rem,2vw,1.1rem)] leading-relaxed max-w-xl"
            style={{ transform: `translate(${px * 0.08}px, ${py * 0.06}px)`, transition: "transform .1s ease-out" }}>
            We power startups &amp; enterprises with world-class{" "}
            <span className="text-white/60">web dev, mobile apps, Shopify &amp; custom software</span>{" "}
            — shipped fast, built to last.
          </p>

          {/* CTAs */}
          <div className="anim-fade-up-4 flex flex-wrap items-center justify-center gap-4">
            {/* Primary */}
            <Link
              href="/contact"
              className="cta-shimmer relative overflow-hidden inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm text-[#04040c] tracking-wide transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] active:scale-[.97]"
              style={{
                background: "linear-gradient(135deg,#38bdf8,#818cf8,#38bdf8)",
                backgroundSize: "300% auto",
                boxShadow: "0 0 30px rgba(56,189,248,.4), 0 8px 30px rgba(0,0,0,.5)",
              }}
            >
              {/* spinning dashed ring */}
              <span className="ring-1 absolute inset-[-6px] rounded-full border border-dashed border-sky-300/30 pointer-events-none" />
              <span className="relative z-10 flex items-center gap-2.5">
                Get Free Consultation
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>

            {/* Secondary */}
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-sm text-white/55 border border-white/10 bg-white/[0.03] hover:text-white hover:border-white/25 hover:bg-white/[0.06] transition-all duration-200"
            >
              View Our Work
              <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Stats */}
          <div className="anim-fade-up-5 flex items-center justify-center">
            <div className="flex items-center divide-x divide-white/[0.06] rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center px-6 py-4 hover:bg-sky-400/[0.05] transition-colors duration-200 group"
                >
                  <span className="font-black text-2xl tracking-tight text-white group-hover:text-sky-300 transition-colors duration-200">
                    {s.num}
                  </span>
                  <span className="mono-font text-[0.55rem] uppercase tracking-[0.13em] text-white/25 mt-0.5">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Trust avatars */}
          <div className="anim-fade-up-5 flex items-center gap-3">
            <div className="flex -space-x-2.5">
              {["#38bdf8","#818cf8","#f472b6","#4ade80","#fb923c"].map((c, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-[#04040c] flex items-center justify-center text-[0.6rem] font-bold text-[#04040c]"
                  style={{ background: c, zIndex: 5 - i }}
                >
                  {["A","B","C","D","E"][i]}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="text-white/70 text-xs font-semibold">Trusted by 150+ clients</div>
              <div className="flex items-center gap-1 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="mono-font text-[0.6rem] text-white/30 ml-1">5.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom marquee — FIXED: text-white/15 → text-white/55, dot bg-sky-400/40 → bg-sky-400 ── */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.04] bg-white/[0.01] overflow-hidden py-3.5">
          <div className="marquee-track flex w-max">
            {MARQUEE_ITEMS.map((item, i) => (
              <div key={i} className="mono-font flex items-center gap-3 px-8 text-[0.6rem] uppercase tracking-[0.18em] text-white/55 whitespace-nowrap">
                <span className="w-1 h-1 rounded-full bg-sky-400 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

      </section>
    </>
  );
}