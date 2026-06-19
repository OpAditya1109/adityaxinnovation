"use client";
import { useState } from "react";

type Feature = { title: string; desc: string; icon: string; tag: string };
type S = { accent: string; glow: string; glowDim: string; accent2: string; features: Feature[] };

export default function ServiceFeatures({ s }: { s: S }) {
  const [hov, setHov] = useState<number | null>(null);

  return (
    <section className="relative py-28 px-6 overflow-hidden border-t border-white/[0.04]">
      {/* Atmosphere */}
      <div className="blob absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full"
        style={{ background: `radial-gradient(circle,${s.glowDim} 0%,transparent 65%)` }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div className="flex flex-col gap-4">
            <div className="mn text-[.54rem] uppercase tracking-[.24em] flex items-center gap-3 text-white/20">
              <span className="w-8 h-px" style={{ background: `linear-gradient(to right,${s.accent},transparent)` }} />
              What You Get
            </div>
            <h2 className="dn text-[clamp(2.2rem,5vw,4rem)] font-black tracking-tight leading-tight">
              <span className="text-white">Everything to</span><br />
              <span style={{ background:`linear-gradient(135deg,${s.accent},${s.accent2})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>
                ship &amp; win.
              </span>
            </h2>
          </div>
          <p className="text-white/22 text-sm leading-relaxed max-w-xs lg:text-right">
            Every engagement includes all of the below — no hidden extras, no surprises.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {s.features.map((f, i) => {
            const isH = hov === i;
            return (
              <div key={f.title}
                onMouseEnter={() => setHov(i)}
                onMouseLeave={() => setHov(null)}
                className="relative rounded-2xl p-7 overflow-hidden cursor-default transition-all duration-300 border"
                style={{
                  background: isH ? s.glow : "rgba(255,255,255,0.02)",
                  borderColor: isH ? `${s.accent}45` : "rgba(255,255,255,0.06)",
                  transform: isH ? "translateY(-7px) scale(1.01)" : "none",
                  boxShadow: isH ? `0 0 50px ${s.glowDim}, 0 20px 50px rgba(0,0,0,0.55)` : "none",
                }}>

                {/* Top border glow */}
                <div className="absolute top-0 left-0 right-0 h-px transition-opacity duration-300"
                  style={{ background:`linear-gradient(90deg,transparent,${s.accent}70,transparent)`, opacity: isH ? 1 : 0 }} />

                {/* Radial glow bloom */}
                <div className="absolute top-0 left-0 w-40 h-40 rounded-full pointer-events-none transition-opacity duration-300"
                  style={{ background:`radial-gradient(circle,${s.glow} 0%,transparent 70%)`, filter:"blur(10px)", opacity: isH ? 1 : 0 }} />

                {/* Corner index */}
                <div className="absolute top-4 right-5 mn text-[.5rem] tracking-[.1em] transition-colors duration-300"
                  style={{ color: isH ? s.accent+"50" : "rgba(255,255,255,0.06)" }}>
                  0{i+1}
                </div>

                {/* Icon row */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border transition-all duration-300"
                    style={{ background: isH ? s.glow : "rgba(255,255,255,0.04)", borderColor: isH ? `${s.accent}45` : "rgba(255,255,255,0.07)", boxShadow: isH ? `0 0 24px ${s.glowDim}` : "none" }}>
                    {f.icon}
                  </div>
                  <span className="mn text-[.48rem] uppercase tracking-[.12em] px-2.5 py-1 rounded-full border mt-1 transition-all duration-300"
                    style={{ borderColor: isH ? `${s.accent}40` : "rgba(255,255,255,0.06)", color: isH ? s.accent : "rgba(255,255,255,0.2)", background: isH ? s.glowDim : "transparent" }}>
                    {f.tag}
                  </span>
                </div>

                <h3 className="dn font-black text-lg mb-2 transition-colors duration-200"
                  style={{ color: isH ? "#fff" : "rgba(255,255,255,0.78)" }}>
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/28">{f.desc}</p>

                {/* Bottom slide line */}
                <div className="absolute bottom-0 left-0 h-0.5 rounded-b-2xl transition-all duration-500"
                  style={{ width: isH ? "100%" : "0%", background:`linear-gradient(90deg,transparent,${s.accent},transparent)` }} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}