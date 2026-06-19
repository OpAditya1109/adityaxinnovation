"use client";
import { useState } from "react";
import Link from "next/link";

const SERVICES = [
  {
    id: "web",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    number: "01",
    title: "Web Development",
    slug: "web-development",
    short: "Blazing-fast web experiences",
    desc: "Modern websites using React, Next.js, Shopify & MERN stack — optimized for speed, SEO, and conversion.",
    tags: ["React", "Next.js", "MERN", "Shopify"],
    accent: "#38bdf8",
    glow: "rgba(56,189,248,0.15)",
    border: "rgba(56,189,248,0.2)",
    gradient: "from-sky-500/10 to-sky-500/0",
    stat: "150+ Sites",
  },
  {
    id: "mobile",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 18h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 6h6M9 9h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    number: "02",
    title: "Mobile Apps",
        slug: "mobile-app-development",

    short: "Native & cross-platform apps",
    desc: "Android & iOS applications built with Flutter and modern tech — smooth, scalable, and production-ready.",
    tags: ["Flutter", "Android", "iOS", "Dart"],
    accent: "#a78bfa",
    glow: "rgba(167,139,250,0.15)",
    border: "rgba(167,139,250,0.2)",
    gradient: "from-violet-500/10 to-violet-500/0",
    stat: "80+ Apps",
  },
  {
    id: "shopify",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 6h18" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    number: "03",
    title: "Shopify Solutions",
        slug: "shopify-development",

    short: "E-commerce that converts",
    desc: "Custom Shopify stores, themes & automation — built to maximize revenue, retain customers, and scale fast.",
    tags: ["Shopify", "Liquid", "Automation", "CRO"],
    accent: "#34d399",
    glow: "rgba(52,211,153,0.15)",
    border: "rgba(52,211,153,0.2)",
    gradient: "from-emerald-500/10 to-emerald-500/0",
    stat: "60+ Stores",
  },
  {
    id: "software",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    number: "04",
    title: "Custom Software",
    short: "Tailored digital products",
        slug: "custom-software-development",

    desc: "Bespoke software solutions for startups and enterprises — APIs, dashboards, SaaS platforms & more.",
    tags: ["Node.js", "Python", "APIs", "SaaS"],
    accent: "#fb923c",
    glow: "rgba(251,146,60,0.15)",
    border: "rgba(251,146,60,0.2)",
    gradient: "from-orange-500/10 to-orange-500/0",
    stat: "40+ Products",
  },
  {
    id: "design",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    number: "05",
    title: "UI/UX Design",
    short: "Interfaces people love",
        slug: "ui-ux-design",

    desc: "Research-driven design systems, Figma prototypes & pixel-perfect implementations that delight users.",
    tags: ["Figma", "Design Systems", "Prototyping"],
    accent: "#f472b6",
    glow: "rgba(244,114,182,0.15)",
    border: "rgba(244,114,182,0.2)",
    gradient: "from-pink-500/10 to-pink-500/0",
    stat: "200+ Screens",
  },
  {
    id: "ai",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
        <path d="M12 2a4 4 0 014 4v1h1a3 3 0 010 6h-1v1a4 4 0 01-8 0v-1H7a3 3 0 010-6h1V6a4 4 0 014-4z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 12h6M12 9v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    number: "06",
    title: "AI Integration",
    short: "Smarter products with AI",
        slug: "ai-integration",

    desc: "LLM integrations, AI-powered features, chatbots & automation to make your product genuinely intelligent.",
    tags: ["OpenAI", "LLMs", "Automation", "RAG"],
    accent: "#facc15",
    glow: "rgba(250,204,21,0.12)",
    border: "rgba(250,204,21,0.18)",
    gradient: "from-yellow-500/10 to-yellow-500/0",
    stat: "30+ AI Apps",
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');
        .srv-font  { font-family:'Outfit',sans-serif; }
        .mono-font { font-family:'Space Mono',monospace; }

        @keyframes fade-up  { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes spin-slow{ from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes breathe  { 0%,100%{opacity:.4;transform:scale(1)} 50%{opacity:.8;transform:scale(1.08)} }
        @keyframes float-tag{ 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
        @keyframes line-grow{ from{width:0;opacity:0} to{width:100%;opacity:1} }
        @keyframes counter  { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        @keyframes border-run{
          0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%}
        }
        @keyframes shimmer-x {
          0%{transform:translateX(-100%)} 100%{transform:translateX(200%)}
        }

        .anim-1{animation:fade-up .7s cubic-bezier(.16,1,.3,1) .05s both}
        .anim-2{animation:fade-up .7s cubic-bezier(.16,1,.3,1) .15s both}

        .card-shimmer::after{
          content:'';
          position:absolute;
          inset:0;
          background:linear-gradient(105deg,transparent 40%,rgba(255,255,255,.04) 50%,transparent 60%);
          transform:translateX(-100%);
          transition:none;
          pointer-events:none;
          border-radius:inherit;
        }
        .card-shimmer:hover::after{
          animation:shimmer-x .6s ease forwards;
        }

        .tag-pill{
          display:inline-flex;
          align-items:center;
          padding:3px 10px;
          border-radius:9999px;
          font-size:.6rem;
          font-family:'Space Mono',monospace;
          letter-spacing:.08em;
          text-transform:uppercase;
          border:1px solid;
          transition:all .2s ease;
          white-space:nowrap;
        }

        .number-label{
          font-family:'Space Mono',monospace;
          font-size:.6rem;
          letter-spacing:.18em;
          text-transform:uppercase;
        }

        .spinning-ring{
          animation:spin-slow 12s linear infinite;
        }

        @keyframes grid-fade {
          from{opacity:0} to{opacity:1}
        }
        .section-breathe{
          animation:breathe 7s ease-in-out infinite;
        }
      `}</style>

      <section className="srv-font relative bg-[#04040c] py-32 overflow-hidden">

        {/* ── Background glows ── */}
        <div className="section-breathe absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(56,189,248,.07) 0%,transparent 65%)", filter: "blur(30px)" }} />
        <div className="section-breathe absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(167,139,250,.07) 0%,transparent 65%)", filter: "blur(30px)", animationDelay: "3s" }} />

        {/* ── Grid texture ── */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.018]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,.7) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.7) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          {/* ── Section header ── */}
          <div className="anim-1 flex flex-col items-center text-center mb-20 gap-5">
            {/* Label chip */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mono-font text-[.6rem] tracking-[.18em] uppercase text-white/30">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400/70" />
              What We Do
            </div>

            <h2 className="text-[clamp(2rem,5vw,4rem)] font-black leading-tight tracking-tight">
              <span className="text-white/20">Everything you need</span>
              <br />
              <span className="text-white">to ship &amp; scale.</span>
            </h2>

            <p className="text-white/35 text-base max-w-md leading-relaxed">
              End-to-end digital services — from idea to launch to growth.
              We don&apos;t just build, we partner.
            </p>

            {/* Animated line */}
            <div className="w-24 h-px rounded-full"
              style={{ background: "linear-gradient(90deg,transparent,rgba(56,189,248,.6),transparent)" }} />
          </div>

          {/* ── Cards grid ── */}
          <div className="anim-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s, i) => {
              const isHovered = hovered === s.id;
              return (
               <Link
  key={s.id}
  href={`/services/${s.slug}`}
  onMouseEnter={() => setHovered(s.id)}
  onMouseLeave={() => setHovered(null)}
  className="card-shimmer relative group rounded-2xl p-6 border cursor-pointer overflow-hidden transition-all duration-500 block"
  style={{
    background: isHovered
      ? `linear-gradient(135deg, ${s.glow}, rgba(255,255,255,0.02))`
      : "rgba(255,255,255,0.02)",
    borderColor: isHovered ? s.border : "rgba(255,255,255,0.06)",
    boxShadow: isHovered
      ? `0 0 40px ${s.glow}, 0 8px 30px rgba(0,0,0,0.4)`
      : "none",
    transform: isHovered ? "translateY(-4px)" : "translateY(0)",
    animationDelay: `${i * 0.07}s`,
  }}
>
                  {/* Corner number */}
                  <div className="absolute top-5 right-5 number-label text-white/[0.07] text-xl font-black tracking-tighter transition-all duration-300"
                    style={{ color: isHovered ? s.accent : undefined, opacity: isHovered ? .25 : .07 }}>
                    {s.number}
                  </div>

                  {/* Glow dot top-left */}
                  <div className="absolute top-0 left-0 w-24 h-24 rounded-full pointer-events-none transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle, ${s.glow} 0%, transparent 70%)`,
                      opacity: isHovered ? 1 : 0,
                    }} />

                  {/* Icon */}
                  <div className="relative mb-5 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
                    style={{
                      background: isHovered ? `${s.glow}` : "rgba(255,255,255,0.05)",
                      border: `1px solid ${isHovered ? s.border : "rgba(255,255,255,0.07)"}`,
                      color: isHovered ? s.accent : "rgba(255,255,255,0.4)",
                      boxShadow: isHovered ? `0 0 20px ${s.glow}` : "none",
                    }}>
                    {s.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-1 tracking-tight transition-colors duration-200"
                    style={{ color: isHovered ? "#fff" : "rgba(255,255,255,0.85)" }}>
                    {s.title}
                  </h3>

                  {/* Short tagline */}
                  <p className="mono-font text-[.6rem] uppercase tracking-[.12em] mb-3 transition-colors duration-200"
                    style={{ color: isHovered ? s.accent : "rgba(255,255,255,0.25)" }}>
                    {s.short}
                  </p>

                  {/* Separator line */}
                  <div className="mb-3 h-px rounded-full transition-all duration-500"
                    style={{
                      background: isHovered
                        ? `linear-gradient(90deg, ${s.accent}60, transparent)`
                        : "rgba(255,255,255,0.05)",
                    }} />

                  {/* Description */}
                  <p className="text-white/35 text-sm leading-relaxed mb-5">
                    {s.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {s.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tag-pill"
                        style={{
                          color: isHovered ? s.accent : "rgba(255,255,255,0.3)",
                          borderColor: isHovered ? s.border : "rgba(255,255,255,0.07)",
                          background: isHovered ? `${s.glow}` : "transparent",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer row */}
                  <div className="flex items-center justify-between">
                    <span className="mono-font text-[.62rem] font-bold tracking-[.08em] transition-colors duration-200"
                      style={{ color: isHovered ? s.accent : "rgba(255,255,255,0.2)" }}>
                      {s.stat}
                    </span>

                    <div className="flex items-center gap-1.5 text-xs font-semibold transition-all duration-200"
                      style={{ color: isHovered ? s.accent : "rgba(255,255,255,0.2)" }}>
                      Learn more
                      <svg className="w-3.5 h-3.5 transition-transform duration-200"
                        style={{ transform: isHovered ? "translateX(3px)" : "translateX(0)" }}
                        viewBox="0 0 14 14" fill="none">
                        <path d="M1 7h12M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Bottom glow line */}
                  <div className="absolute bottom-0 left-0 h-0.5 rounded-b-2xl transition-all duration-500"
                    style={{
                      width: isHovered ? "100%" : "0%",
                      background: `linear-gradient(90deg, transparent, ${s.accent}, transparent)`,
                    }} />
              
                </Link>
              );
            })}
          </div>

          {/* ── Bottom CTA ── */}
          <div className="mt-20 flex flex-col items-center gap-6">
            <p className="mono-font text-[.65rem] uppercase tracking-[.2em] text-white/20">
              Don&apos;t see what you need?
            </p>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-sm tracking-wide overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg,#38bdf8,#818cf8,#38bdf8)",
                backgroundSize: "300% auto",
                color: "#04040c",
                boxShadow: "0 0 30px rgba(56,189,248,.35), 0 8px 30px rgba(0,0,0,.4)",
              }}
            >
              <span className="spinning-ring absolute inset-[-6px] rounded-full border border-dashed border-sky-300/25 pointer-events-none" />
              Let&apos;s Talk About Your Project
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                viewBox="0 0 16 16" fill="none">
                <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}