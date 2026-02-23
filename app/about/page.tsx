"use client";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { useState } from "react";

const STATS = [
  { num: "150+", label: "Projects Delivered", accent: "#38bdf8" },
  { num: "50+", label: "Happy Clients", accent: "#a78bfa" },
  { num: "5+", label: "Years Experience", accent: "#34d399" },
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
    desc: "We ship fast without cutting corners — every line of code is intentional.",
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
    desc: "Clear communication, honest timelines, and zero hidden costs. Always.",
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
    desc: "We don't just build and leave. We stay, iterate, and grow with you.",
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
    desc: "We embrace new tech early — AI, edge computing, modern frameworks.",
    accent: "#fb923c",
    glow: "rgba(251,146,60,0.12)",
  },
];

const TEAM = [
  {
    name: "Aditya",
    role: "Founder & CEO",
    skills: ["Strategy", "Full-Stack", "Vision"],
    accent: "#38bdf8",
    initials: "AD",
  },
  {
    name: "Riya Sharma",
    role: "Lead Designer",
    skills: ["UI/UX", "Figma", "Brand"],
    accent: "#f472b6",
    initials: "RS",
  },
  {
    name: "Karan Mehta",
    role: "Backend Engineer",
    skills: ["Node.js", "APIs", "Cloud"],
    accent: "#a78bfa",
    initials: "KM",
  },
  {
    name: "Priya Patel",
    role: "Mobile Developer",
    skills: ["Flutter", "iOS", "Android"],
    accent: "#34d399",
    initials: "PP",
  },
];

const TIMELINE = [
  { year: "2019", title: "Founded", desc: "Started as a solo freelance venture from a hostel room in Pune.", accent: "#38bdf8" },
  { year: "2020", title: "First 10 Clients", desc: "Delivered 15 projects across web and mobile. Team grew to 3.", accent: "#a78bfa" },
  { year: "2021", title: "Shopify Specialization", desc: "Became a recognized Shopify partner. 30+ stores launched.", accent: "#34d399" },
  { year: "2022", title: "Enterprise Clients", desc: "Onboarded first enterprise clients. Team crossed 8 people.", accent: "#fb923c" },
  { year: "2023", title: "AI Integration", desc: "Launched AI-powered product offerings. 100+ projects milestone.", accent: "#f472b6" },
  { year: "2024", title: "Global Reach", desc: "Clients across India, UAE, UK & USA. 150+ projects delivered.", accent: "#facc15" },
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
              backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }} />

          {/* Orbital rings */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="spin-r1 absolute w-[440px] h-[440px] rounded-full border border-white/[0.04]"
              style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-sky-400/80"
                style={{ boxShadow: "0 0 10px #38bdf8" }} />
            </div>
            <div className="spin-r2 absolute w-[620px] h-[620px] rounded-full border border-violet-400/[0.05]"
              style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
              <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-3 h-3 rounded-full bg-violet-400/70"
                style={{ boxShadow: "0 0 10px #818cf8" }} />
            </div>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-7 max-w-4xl mx-auto">
            {/* Badge */}
            <div className="a1 float-badge inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-sky-400/20 bg-sky-400/[0.06] mono-font text-[.65rem] tracking-[.15em] uppercase text-sky-300/80">
              <span className="pulse-dot w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
              Our Story · Since 2019
            </div>

            {/* Headline */}
            <h1 className="a2 text-[clamp(2.4rem,6vw,5rem)] font-black leading-[1.05] tracking-tight">
              <span className="text-white/20">We are</span>
              <br />
              <span style={{
                background: "linear-gradient(135deg,#38bdf8,#818cf8,#f472b6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Adityax
              </span>
              <span className="text-white">Innovation.</span>
            </h1>

            <p className="a3 text-white/35 text-[clamp(.9rem,2vw,1.15rem)] leading-relaxed max-w-2xl">
              A Pune-born digital studio obsessed with building{" "}
              <span className="text-white/65">fast, beautiful, and scalable</span> digital products.
              We partner with startups and enterprises to turn bold ideas into real products — shipped on time, built to last.
            </p>

            {/* CTAs */}
            <div className="a4 flex flex-wrap gap-3 justify-center">
              <Link href="/contact"
                className="cta-shimmer relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-sm text-[#04040c] tracking-wide overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]"
                style={{
                  background: "linear-gradient(135deg,#38bdf8,#818cf8,#38bdf8)",
                  backgroundSize: "300% auto",
                  boxShadow: "0 0 28px rgba(56,189,248,.35), 0 8px 28px rgba(0,0,0,.5)",
                }}>
                <span className="spinning absolute inset-[-6px] rounded-full border border-dashed border-sky-300/25 pointer-events-none" />
                Work With Us
                <svg className="w-4 h-4 relative z-10" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/services"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-sm text-white/45 border border-white/10 bg-white/[0.03] hover:text-white hover:border-white/25 hover:bg-white/[0.06] transition-all duration-200">
                Our Services →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Stats Bar ── */}
        <section className="relative z-10 border-y border-white/[0.05] bg-white/[0.01]">
          <div className="max-w-5xl mx-auto px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-white/[0.06]">
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col items-center py-6 px-4 group hover:bg-white/[0.02] transition-colors duration-200">
                  <span className="font-black text-3xl tracking-tight transition-colors duration-200"
                    style={{ color: s.accent }}>
                    {s.num}
                  </span>
                  <span className="mono-font text-[.58rem] uppercase tracking-[.14em] text-white/25 mt-1.5 text-center">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mission Section ── */}
        <section className="relative overflow-hidden py-28 px-6">
          <div className="glow-blob absolute top-1/2 -right-20 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(52,211,153,.07) 0%,transparent 65%)" }} />

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div className="flex flex-col gap-7">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mono-font text-[.6rem] tracking-[.18em] uppercase text-white/28 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/70" />
                Our Mission
              </div>
              <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-black leading-tight tracking-tight text-white">
                We don&apos;t just build products.
                <br />
                <span className="text-white/30">We build futures.</span>
              </h2>
              <p className="text-white/35 text-base leading-relaxed max-w-lg">
                Our mission is simple: make world-class digital products accessible to every business — from solo founders to enterprises.
                We combine deep technical skill with genuine care for the humans behind each project.
              </p>
              <p className="text-white/25 text-sm leading-relaxed max-w-lg">
                Based in Pune, working globally. We&apos;ve shipped products for clients across India, UAE, UK, and the USA — and we&apos;re just getting started.
              </p>

              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Flutter", "Node.js", "Shopify", "Python", "AWS", "Figma"].map((t) => (
                  <span key={t}
                    className="mono-font text-[.58rem] uppercase tracking-[.1em] px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] text-white/30 hover:border-sky-400/30 hover:text-sky-400/70 hover:bg-sky-400/[0.06] transition-all duration-200 cursor-default">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Visual card */}
            <div className="relative flex items-center justify-center">
              {/* Outer glow ring */}
              <div className="spin-r1 absolute w-72 h-72 rounded-full border border-dashed border-sky-400/10" />
              <div className="spin-r2 absolute w-96 h-96 rounded-full border border-violet-400/[0.07]" />

              {/* Center card */}
              <div className="relative z-10 w-64 rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-8 flex flex-col items-center gap-5 text-center"
                style={{ boxShadow: "0 0 60px rgba(56,189,248,.08), 0 20px 40px rgba(0,0,0,.4)" }}>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center border border-sky-400/20 bg-sky-400/[0.08]"
                  style={{ boxShadow: "0 0 20px rgba(56,189,248,.15)" }}>
                  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-sky-400">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="font-black text-white text-xl">5+ Years</p>
                  <p className="mono-font text-[.58rem] uppercase tracking-[.15em] text-white/30 mt-1">Building digital products</p>
                </div>
                <div className="w-full h-px bg-white/[0.06]" />
                <div className="flex justify-between w-full">
                  <div className="text-center">
                    <p className="font-bold text-sky-400 text-lg">150+</p>
                    <p className="mono-font text-[.52rem] uppercase tracking-[.1em] text-white/25">Projects</p>
                  </div>
                  <div className="w-px bg-white/[0.06]" />
                  <div className="text-center">
                    <p className="font-bold text-violet-400 text-lg">50+</p>
                    <p className="mono-font text-[.52rem] uppercase tracking-[.1em] text-white/25">Clients</p>
                  </div>
                  <div className="w-px bg-white/[0.06]" />
                  <div className="text-center">
                    <p className="font-bold text-emerald-400 text-lg">8+</p>
                    <p className="mono-font text-[.52rem] uppercase tracking-[.1em] text-white/25">Team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="relative py-24 px-6 border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-16 gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mono-font text-[.6rem] tracking-[.18em] uppercase text-white/28">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400/70" />
                What We Stand For
              </div>
              <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-tight">
                <span className="text-white">Our core </span>
                <span className="text-white/25">values.</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {VALUES.map((v) => {
                const isH = hoveredValue === v.title;
                return (
                  <div key={v.title}
                    onMouseEnter={() => setHoveredValue(v.title)}
                    onMouseLeave={() => setHoveredValue(null)}
                    className="relative rounded-2xl p-6 border cursor-default overflow-hidden transition-all duration-400"
                    style={{
                      background: isH ? v.glow : "rgba(255,255,255,0.02)",
                      borderColor: isH ? v.accent + "40" : "rgba(255,255,255,0.06)",
                      boxShadow: isH ? `0 0 36px ${v.glow}` : "none",
                      transform: isH ? "translateY(-4px)" : "none",
                    }}>
                    {/* Icon */}
                    <div className="mb-4 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300"
                      style={{
                        background: isH ? v.glow : "rgba(255,255,255,0.05)",
                        border: `1px solid ${isH ? v.accent + "50" : "rgba(255,255,255,0.07)"}`,
                        color: isH ? v.accent : "rgba(255,255,255,0.35)",
                      }}>
                      {v.icon}
                    </div>
                    <h3 className="font-bold text-base mb-2 transition-colors duration-200"
                      style={{ color: isH ? "#fff" : "rgba(255,255,255,0.75)" }}>
                      {v.title}
                    </h3>
                    <p className="text-sm text-white/30 leading-relaxed">{v.desc}</p>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 h-0.5 rounded-b-2xl transition-all duration-500"
                      style={{
                        width: isH ? "100%" : "0%",
                        background: `linear-gradient(90deg,transparent,${v.accent},transparent)`,
                      }} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="relative py-24 px-6 border-t border-white/[0.04] overflow-hidden">
          <div className="glow-blob absolute -left-20 top-1/2 w-[350px] h-[350px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(251,146,60,.06) 0%,transparent 65%)" }} />

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center text-center mb-16 gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mono-font text-[.6rem] tracking-[.18em] uppercase text-white/28">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400/70" />
                Our Journey
              </div>
              <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-tight">
                <span className="text-white/25">From zero to </span>
                <span className="text-white">150+ projects.</span>
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="timeline-line absolute left-[28px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px" />

              <div className="flex flex-col gap-10">
                {TIMELINE.map((t, i) => (
                  <div key={t.year}
                    className={`relative flex gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start md:items-center`}>

                    {/* Dot */}
                    <div className="relative z-10 flex-shrink-0 w-14 h-14 md:absolute md:left-1/2 md:-translate-x-1/2 rounded-full flex items-center justify-center border"
                      style={{
                        background: `${t.accent}15`,
                        borderColor: `${t.accent}40`,
                        boxShadow: `0 0 16px ${t.accent}25`,
                      }}>
                      <span className="mono-font font-bold text-[.62rem] tracking-tight" style={{ color: t.accent }}>
                        {t.year}
                      </span>
                    </div>

                    {/* Card */}
                    <div className={`md:w-[calc(50%-48px)] ${i % 2 === 0 ? "md:ml-auto md:pr-0" : "md:mr-auto"} pl-0 md:pl-0`}>
                      <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-white/[0.12] hover:bg-white/[0.04] transition-all duration-200 group">
                        <h3 className="font-bold text-white text-base mb-1 group-hover:text-white transition-colors">
                          {t.title}
                        </h3>
                        <p className="text-sm text-white/30 leading-relaxed">{t.desc}</p>
                        <div className="mt-3 h-0.5 rounded-full w-0 group-hover:w-full transition-all duration-500"
                          style={{ background: `linear-gradient(90deg,${t.accent},transparent)` }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Team ── */}
        <section className="relative py-24 px-6 border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center mb-16 gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] mono-font text-[.6rem] tracking-[.18em] uppercase text-white/28">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400/70" />
                The People
              </div>
              <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-black tracking-tight">
                <span className="text-white">Meet the </span>
                <span className="text-white/25">builders.</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {TEAM.map((m) => {
                const isH = hoveredTeam === m.name;
                return (
                  <div key={m.name}
                    onMouseEnter={() => setHoveredTeam(m.name)}
                    onMouseLeave={() => setHoveredTeam(null)}
                    className="relative rounded-2xl border p-6 flex flex-col items-center text-center gap-4 overflow-hidden transition-all duration-300 cursor-default"
                    style={{
                      background: isH ? `${m.accent}10` : "rgba(255,255,255,0.02)",
                      borderColor: isH ? `${m.accent}40` : "rgba(255,255,255,0.06)",
                      transform: isH ? "translateY(-5px)" : "none",
                      boxShadow: isH ? `0 0 40px ${m.accent}18` : "none",
                    }}>

                    {/* Avatar */}
                    <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center font-black text-xl border-2 transition-all duration-300"
                      style={{
                        background: `${m.accent}18`,
                        borderColor: `${m.accent}${isH ? "60" : "30"}`,
                        color: m.accent,
                        boxShadow: isH ? `0 0 20px ${m.accent}30` : "none",
                      }}>
                      {m.initials}
                      {isH && (
                        <div className="absolute -inset-1 rounded-2xl border border-dashed transition-all"
                          style={{ borderColor: `${m.accent}30`, animation: "spin-slow 8s linear infinite" }} />
                      )}
                    </div>

                    <div>
                      <p className="font-bold text-white text-base">{m.name}</p>
                      <p className="mono-font text-[.6rem] uppercase tracking-[.12em] mt-0.5 transition-colors duration-200"
                        style={{ color: isH ? m.accent : "rgba(255,255,255,0.25)" }}>
                        {m.role}
                      </p>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1.5 justify-center">
                      {m.skills.map((sk) => (
                        <span key={sk}
                          className="mono-font text-[.55rem] uppercase tracking-[.08em] px-2.5 py-1 rounded-full border transition-all duration-200"
                          style={{
                            borderColor: isH ? `${m.accent}40` : "rgba(255,255,255,0.07)",
                            color: isH ? m.accent : "rgba(255,255,255,0.25)",
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
        <section className="relative py-28 px-6 border-t border-white/[0.04] overflow-hidden">
          <div className="glow-blob absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
            style={{ background: "radial-gradient(ellipse,rgba(56,189,248,.08) 0%,transparent 65%)" }} />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center gap-8">
            <div className="mono-font text-[.6rem] uppercase tracking-[.2em] text-white/20">
              Ready to build?
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
            <p className="text-white/30 text-base leading-relaxed max-w-md">
              Tell us your idea. We&apos;ll take it from there — design, build, launch, and grow.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/contact"
                className="cta-shimmer relative inline-flex items-center gap-2.5 px-10 py-4 rounded-full font-bold text-sm text-[#04040c] tracking-wide overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03]"
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
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-sm text-white/45 border border-white/10 bg-white/[0.03] hover:text-white hover:border-white/25 hover:bg-white/[0.06] transition-all duration-200">
                Explore Services →
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}