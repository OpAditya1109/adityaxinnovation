"use client";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { useState } from "react";

const STATS = [
  { num: "20+", label: "Projects Delivered", accent: "#38bdf8" },
  { num: "15+", label: "Happy Clients", accent: "#a78bfa" },
  { num: "2026", label: "Founded", accent: "#34d399" },
  { num: "24/7", label: "Support", accent: "#f472b6" },
];

const VALUES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Speed & Precision",
    desc: "We deliver lightning-fast solutions without compromising on quality. Every line of code is meticulously crafted.",
    accent: "#38bdf8",
    glow: "rgba(56,189,248,0.12)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Trust & Transparency",
    desc: "Honest communication, realistic timelines, and zero hidden surprises. You know exactly what you're getting.",
    accent: "#a78bfa",
    glow: "rgba(167,139,250,0.12)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Long-Term Partnership",
    desc: "We're invested in your success. Beyond launch, we iterate, optimize, and scale with you for years.",
    accent: "#34d399",
    glow: "rgba(52,211,153,0.12)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707M12 21v-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Innovation First",
    desc: "Always ahead of the curve with AI, modern frameworks, and cutting-edge technologies.",
    accent: "#fb923c",
    glow: "rgba(251,146,60,0.12)",
  },
];

const TEAM = [
  {
    name: "Aditya Yadav",
    role: "Founder & Technical Director",
    bio: "Full-stack architect passionate about building scalable products that solve real problems.",
    skills: ["Full-Stack Dev", "System Design", "Product Strategy"],
    accent: "#38bdf8",
    initials: "AY",
  },
  {
    name: "Madhav Yadav",
    role: "Co-Founder & Director",
    bio: "Strategic thinker focused on business growth, client success, and building lasting relationships.",
    skills: ["Strategy", "Business Dev", "Operations"],
    accent: "#a78bfa",
    initials: "MY",
  },
];

const TIMELINE = [
  { 
    year: "Early 2026", 
    title: "Founded", 
    desc: "AdityaX Innovations launched in Pune with a mission to build world-class digital solutions for ambitious startups and businesses worldwide.",
    accent: "#38bdf8" 
  },
  { 
    year: "Mid 2026", 
    title: "First Clients", 
    desc: "Successfully delivered transformative web and mobile projects. Our clients praised our attention to detail, communication, and technical excellence.",
    accent: "#a78bfa" 
  },
  { 
    year: "Late 2026", 
    title: "Service Expansion", 
    desc: "Expanded into Shopify development, custom software solutions, and AI integration. Grew our team and client base across multiple industries.",
    accent: "#34d399" 
  },
  { 
    year: "Today", 
    title: "Growing Strong", 
    desc: "Serving clients across India and beyond. With every project, we strengthen our craft, expand our expertise, and build our reputation.",
    accent: "#f472b6" 
  },
];

const HIGHLIGHTS = [
  { icon: "⚡", label: "Rapid Prototyping", desc: "From concept to MVP in weeks, not months" },
  { icon: "🎯", label: "Precision Code", desc: "100% custom solutions, never templates" },
  { icon: "🔄", label: "Agile Process", desc: "Regular updates, transparent communication" },
  { icon: "📈", label: "Growth Focused", desc: "Built to scale with your business" },
];

export default function About() {
  const [hoveredValue, setHoveredValue] = useState<string | null>(null);
  const [hoveredTeam, setHoveredTeam] = useState<string | null>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');
        .pg-font  { font-family:'Outfit',sans-serif; }
        .mono-font{ font-family:'Space Mono',monospace; }

        @keyframes fade-up   { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes breathe   { 0%,100%{opacity:.35;transform:scale(1)} 50%{opacity:.7;transform:scale(1.1)} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes spin-rev  { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
        @keyframes marquee   { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes shimmer   { 0%{background-position:-300% center} 100%{background-position:300% center} }
        @keyframes float-y   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes pulse-dot { 0%,100%{box-shadow:0 0 0 0 rgba(74,222,128,.5)} 50%{box-shadow:0 0 0 6px rgba(74,222,128,0)} }
        @keyframes line-grow { from{width:0} to{width:100%} }
        @keyframes counter-in{ from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }

        .a1{animation:fade-up .8s cubic-bezier(.16,1,.3,1) .05s both}
        .a2{animation:fade-up .8s cubic-bezier(.16,1,.3,1) .15s both}
        .a3{animation:fade-up .8s cubic-bezier(.16,1,.3,1) .25s both}
        .a4{animation:fade-up .8s cubic-bezier(.16,1,.3,1) .35s both}
        .a5{animation:fade-up .8s cubic-bezier(.16,1,.3,1) .45s both}

        .glow-blob  { animation:breathe 6s ease-in-out infinite; filter:blur(30px); }
        .float-badge{ animation:float-y 4s ease-in-out infinite; }
        .spin-r1    { animation:spin-slow 22s linear infinite; }
        .spin-r2    { animation:spin-rev  32s linear infinite; }
        .pulse-dot  { animation:pulse-dot 2s ease-in-out infinite; }
        .marquee-t  { animation:marquee 28s linear infinite; }

        .about-link {
          position:relative;
          color:rgba(255,255,255,.35);
          font-size:.875rem;
          transition:color .2s;
        }
        .about-link::after{
          content:'';position:absolute;bottom:-2px;left:0;
          width:0;height:1px;
          background:linear-gradient(90deg,#38bdf8,#818cf8);
          border-radius:99px;
          transition:width .25s cubic-bezier(.16,1,.3,1);
        }
        .about-link:hover{color:rgba(255,255,255,.85);}
        .about-link:hover::after{width:100%;}

        .cta-shimmer:hover{animation:shimmer 1.5s linear infinite;}
        .spinning{animation:spin-slow 14s linear infinite;}

        .timeline-line{
          background:linear-gradient(to bottom,rgba(56,189,248,.5),rgba(167,139,250,.5),rgba(244,114,182,.3),transparent);
        }
      `}</style>

      <div className="pg-font min-h-screen bg-[#04040c]">
        <Navbar />

        {/* ── Hero Section ── */}
        <section className="relative overflow-hidden flex flex-col items-center justify-center min-h-[70vh] px-6 py-28 text-center">

          {/* Glow blobs */}
          <div className="glow-blob absolute -top-20 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(56,189,248,.09) 0%,transparent 65%)" }} />
          <div className="glow-blob absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(167,139,250,.08) 0%,transparent 65%)", animationDelay: "3s" }} />

          {/* Grid texture */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.018]"
            style={{
              backgroundImage: "linear-gradient(0deg,transparent 24%,rgba(255,255,255,.05) 25%,rgba(255,255,255,.05) 26%,transparent 27%,transparent 74%,rgba(255,255,255,.05) 75%,rgba(255,255,255,.05) 76%,transparent 77%,transparent),linear-gradient(90deg,transparent 24%,rgba(255,255,255,.05) 25%,rgba(255,255,255,.05) 26%,transparent 27%,transparent 74%,rgba(255,255,255,.05) 75%,rgba(255,255,255,.05) 76%,transparent 77%,transparent)",
              backgroundSize: "40px 40px"
            }} />

          <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl">
            <div className="a1 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mono-font text-[.6rem] tracking-[.18em] uppercase text-white/28">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400/70" />
              Building the Future
            </div>

            <h1 className="a2 text-[clamp(2.2rem,7vw,4.5rem)] font-black leading-[1.1] tracking-tight">
              <span className="text-white">We're </span>
              <span style={{
                background: "linear-gradient(135deg,#38bdf8,#818cf8,#a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>AdityaX Innovations</span>
            </h1>

            <p className="a3 text-white/35 text-lg leading-relaxed max-w-2xl">
              Founded in 2026, we're a passionate team of developers, designers, and strategists building transformative digital products for ambitious businesses. We combine technical excellence with strategic thinking to create solutions that matter.
            </p>

            <div className="a4 flex flex-wrap gap-3 justify-center">
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 transition-opacity">
                Let's Work Together
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/services"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm text-white/70 border border-white/10 hover:border-white/30 hover:text-white transition-all">
                Explore Our Services
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="a5 absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 px-6">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-2 py-4 px-3 rounded-lg border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-white/[0.12] transition-all">
                <span className="font-black text-xl md:text-2xl" style={{ color: s.accent }}>
                  {s.num}
                </span>
                <span className="text-xs md:text-sm text-white/35 text-center leading-snug">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Highlights Section ── */}
        <section className="relative py-24 px-6 border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-tight mb-4">
                <span className="text-white">Why Clients Choose </span>
                <span className="text-white/25">Us</span>
              </h2>
              <p className="text-white/40 max-w-2xl mx-auto">We combine technical expertise with a commitment to your success</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {HIGHLIGHTS.map((h) => (
                <div key={h.label} className="relative p-6 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] hover:bg-white/[0.04] transition-all group">
                  <div className="text-4xl mb-4">{h.icon}</div>
                  <h3 className="font-bold text-white mb-2 group-hover:text-white transition-colors">{h.label}</h3>
                  <p className="text-sm text-white/30">{h.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Values Section ── */}
        <section className="relative py-24 px-6 border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-16 gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mono-font text-[.6rem] tracking-[.18em] uppercase text-white/28">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400/70" />
                Core Values
              </div>
              <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-tight">
                <span className="text-white">How We </span>
                <span className="text-white/25">Operate</span>
              </h2>
              <p className="text-white/40 max-w-2xl">These principles guide every decision and project</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {VALUES.map((v) => {
                const isH = hoveredValue === v.title;
                return (
                  <div
                    key={v.title}
                    onMouseEnter={() => setHoveredValue(v.title)}
                    onMouseLeave={() => setHoveredValue(null)}
                    className="relative p-7 rounded-2xl border transition-all duration-300 cursor-default group overflow-hidden"
                    style={{
                      background: isH ? `${v.accent}08` : "rgba(255,255,255,0.02)",
                      borderColor: isH ? `${v.accent}30` : "rgba(255,255,255,0.06)",
                      transform: isH ? "translateY(-6px)" : "none",
                      boxShadow: isH ? `0 20px 40px ${v.accent}10` : "none",
                    }}>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: `radial-gradient(circle at top right, ${v.accent}15, transparent 70%)` }} />

                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 flex-shrink-0"
                        style={{
                          background: `${v.accent}15`,
                          borderColor: `${v.accent}40`,
                          color: v.accent,
                        }}>
                        {v.icon}
                      </div>

                      <h3 className="font-bold text-white text-lg mb-2 transition-colors">{v.title}</h3>
                      <p className="text-white/40 leading-relaxed text-sm transition-colors">{v.desc}</p>

                      <div className="mt-5 h-0.5 rounded-full w-0 group-hover:w-full transition-all duration-500"
                        style={{ background: `linear-gradient(90deg,${v.accent},transparent)` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Timeline Section ── */}
        <section className="relative py-24 px-6 border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-16 gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mono-font text-[.6rem] tracking-[.18em] uppercase text-white/28">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400/70" />
                Our Journey
              </div>
              <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-tight">
                <span className="text-white">From Day One to </span>
                <span className="text-white/25">Now</span>
              </h2>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 timeline-line md:block hidden" />

              <div className="space-y-12 md:space-y-16">
                {TIMELINE.map((t, i) => (
                  <div key={t.year} className="relative">
                    {/* Dot */}
                    <div className="relative z-10 flex-shrink-0 w-14 h-14 md:absolute md:left-1/2 md:-translate-x-1/2 rounded-full flex items-center justify-center border transition-all"
                      style={{
                        background: `${t.accent}15`,
                        borderColor: `${t.accent}40`,
                        boxShadow: `0 0 20px ${t.accent}25`,
                      }}>
                      <span className="mono-font font-bold text-[.65rem] tracking-tight text-center" style={{ color: t.accent }}>
                        {t.year.split(" ").join("\n")}
                      </span>
                    </div>

                    {/* Card */}
                    <div className={`md:w-[calc(50%-48px)] ${i % 2 === 0 ? "md:ml-auto md:pr-12" : "md:ml-0 md:pl-12"} pl-20 md:pl-0`}>
                      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6 hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-200 group">
                        <h3 className="font-bold text-white text-lg mb-2 group-hover:text-white transition-colors">
                          {t.title}
                        </h3>
                        <p className="text-sm text-white/40 leading-relaxed">{t.desc}</p>
                        <div className="mt-4 h-0.5 rounded-full w-0 group-hover:w-full transition-all duration-500"
                          style={{ background: `linear-gradient(90deg,${t.accent},transparent)` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Team Section ── */}
        <section className="relative py-24 px-6 border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-16 gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mono-font text-[.6rem] tracking-[.18em] uppercase text-white/28">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400/70" />
                The People
              </div>
              <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-tight">
                <span className="text-white">Meet the </span>
                <span className="text-white/25">Founders</span>
              </h2>
              <p className="text-white/40 max-w-2xl">Experienced builders with a passion for crafting exceptional digital solutions</p>
            </div>

            <div className="grid sm:grid-cols-2 max-w-3xl mx-auto gap-6">
              {TEAM.map((m) => {
                const isH = hoveredTeam === m.name;
                return (
                  <div key={m.name}
                    onMouseEnter={() => setHoveredTeam(m.name)}
                    onMouseLeave={() => setHoveredTeam(null)}
                    className="relative rounded-2xl border p-8 flex flex-col items-center text-center gap-4 overflow-hidden transition-all duration-300 cursor-default group"
                    style={{
                      background: isH ? `${m.accent}08` : "rgba(255,255,255,0.02)",
                      borderColor: isH ? `${m.accent}30` : "rgba(255,255,255,0.06)",
                      transform: isH ? "translateY(-6px)" : "none",
                      boxShadow: isH ? `0 20px 40px ${m.accent}15` : "none",
                    }}>

                    {/* Avatar */}
                    <div className="relative w-20 h-20 rounded-2xl flex items-center justify-center font-black text-2xl border-2 transition-all duration-300"
                      style={{
                        background: `${m.accent}15`,
                        borderColor: `${m.accent}${isH ? "60" : "30"}`,
                        color: m.accent,
                        boxShadow: isH ? `0 0 25px ${m.accent}35` : "none",
                      }}>
                      {m.initials}
                      {isH && (
                        <div className="absolute -inset-1.5 rounded-2xl border border-dashed transition-all"
                          style={{ borderColor: `${m.accent}40`, animation: "spin-slow 8s linear infinite" }} />
                      )}
                    </div>

                    <div>
                      <p className="font-bold text-white text-lg">{m.name}</p>
                      <p className="mono-font text-[.65rem] uppercase tracking-[.12em] mt-1 transition-colors duration-200"
                        style={{ color: isH ? m.accent : "rgba(255,255,255,0.35)" }}>
                        {m.role}
                      </p>
                    </div>

                    <p className="text-sm text-white/30 leading-relaxed h-0 opacity-0 transition-all duration-300 group-hover:h-auto group-hover:opacity-100">
                      {m.bio}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {m.skills.map((sk) => (
                        <span key={sk}
                          className="mono-font text-[.55rem] uppercase tracking-[.08em] px-3 py-1.5 rounded-full border transition-all duration-200"
                          style={{
                            borderColor: isH ? `${m.accent}40` : "rgba(255,255,255,0.1)",
                            color: isH ? m.accent : "rgba(255,255,255,0.35)",
                            background: isH ? `${m.accent}0d` : "transparent",
                          }}>
                          {sk}
                        </span>
                      ))}
                    </div>

                    {/* Bottom line */}
                    <div className="absolute bottom-0 left-0 h-0.5 rounded-b-2xl transition-all duration-500"
                      style={{
                        width: isH ? "100%" : "0%",
                        background: `linear-gradient(90deg,transparent,${m.accent},transparent)`,
                      }} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="relative py-32 px-6 border-t border-white/[0.04] overflow-hidden">
          <div className="glow-blob absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse,rgba(56,189,248,.08) 0%,transparent 65%)" }} />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
            <div className="mono-font text-[.65rem] uppercase tracking-[.2em] text-white/25">
              Ready to start your next project?
            </div>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-black leading-tight tracking-tight">
              <span className="text-white">Let&apos;s create something</span>
              <br />
              <span style={{
                background: "linear-gradient(135deg,#38bdf8,#818cf8,#f472b6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>extraordinary together.</span>
            </h2>
            <p className="text-white/40 text-base leading-relaxed max-w-md">
              Share your vision with us. We'll collaborate to design, build, launch, and scale your product to success.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact"
                className="cta-shimmer relative inline-flex items-center gap-2.5 px-12 py-4 rounded-full font-bold text-sm text-[#04040c] tracking-wide overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg,#38bdf8,#818cf8,#38bdf8)",
                  backgroundSize: "300% auto",
                  boxShadow: "0 0 30px rgba(56,189,248,.35), 0 8px 30px rgba(0,0,0,.5)",
                }}>
                <span className="spinning absolute inset-[-6px] rounded-full border border-dashed border-sky-300/25 pointer-events-none" />
                Start a Conversation
                <svg className="w-4 h-4 relative z-10" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm text-white/50 border border-white/15 bg-white/[0.03] hover:text-white hover:border-white/30 hover:bg-white/[0.06] transition-all duration-200">
                Explore Services
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}