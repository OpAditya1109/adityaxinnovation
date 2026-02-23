"use client";
import { useState } from "react";

type Step = { step: string; title: string; desc: string };
type S = { accent: string; glow: string; glowDim: string; accent2: string; process: Step[] };

export default function ServiceProcess({ s }: { s: S }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative py-24 px-6 border-t border-white/[0.04] overflow-hidden">
      <div className="blob absolute -left-24 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
        style={{ background: `radial-gradient(circle,${s.glowDim} 0%,transparent 65%)`, animationDelay:"2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 gap-5">
          <div className="mn text-[.54rem] uppercase tracking-[.24em] flex items-center gap-3 text-white/20">
            <span className="w-8 h-px" style={{ background:`linear-gradient(to right,${s.accent2},transparent)` }} />
            How We Work
            <span className="w-8 h-px" style={{ background:`linear-gradient(to left,${s.accent2},transparent)` }} />
          </div>
          <h2 className="dn text-[clamp(2rem,4.5vw,3.5rem)] font-black tracking-tight">
            <span style={{ color:"rgba(255,255,255,.18)" }}>Our </span>
            <span className="text-white">battle-tested</span>
            <br />
            <span style={{ color:"rgba(255,255,255,.18)" }}>process.</span>
          </h2>
        </div>

        {/* Desktop horizontal */}
        <div className="hidden md:block relative">
          {/* Connecting line */}
          <div className="absolute top-[52px] left-[72px] right-[72px] h-px"
            style={{ background:`linear-gradient(90deg,${s.accent}50,${s.accent2}50,${s.accent}50)` }} />

          <div className="flex items-stretch gap-0">
            {s.process.map((p, i) => {
              const isA = active === i;
              return (
                <div key={p.step}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  className="flex-1 flex flex-col items-center gap-5 cursor-default relative z-10">

                  {/* Step circle */}
                  <div className="w-[52px] h-[52px] rounded-full flex items-center justify-center mn font-bold text-sm border-2 flex-shrink-0 transition-all duration-400"
                    style={{
                      background: isA ? s.accent : "#04040c",
                      borderColor: isA ? s.accent : `${s.accent}45`,
                      color: isA ? "#04040c" : s.accent,
                      boxShadow: isA ? `0 0 28px ${s.glow},0 0 60px ${s.glowDim}` : `0 0 0 5px ${s.glowDim}`,
                      transform: isA ? "scale(1.2)" : "none",
                    }}>
                    {p.step}
                  </div>

                  {/* Card */}
                  <div className="w-full mx-1 rounded-2xl p-5 border text-center transition-all duration-300"
                    style={{
                      background: isA ? s.glow : "rgba(255,255,255,0.02)",
                      borderColor: isA ? `${s.accent}40` : "rgba(255,255,255,0.06)",
                      transform: isA ? "translateY(-5px)" : "none",
                      boxShadow: isA ? `0 10px 35px ${s.glowDim}` : "none",
                    }}>
                    <p className="dn font-bold text-sm mb-2 transition-colors duration-200"
                      style={{ color: isA ? "#fff" : "rgba(255,255,255,0.65)" }}>
                      {p.title}
                    </p>
                    <p className="text-xs leading-relaxed text-white/25">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden flex flex-col gap-4 relative">
          <div className="absolute left-[26px] top-4 bottom-4 w-px"
            style={{ background:`linear-gradient(to bottom,${s.accent}40,${s.accent2}40,transparent)` }} />
          {s.process.map((p, i) => {
            const isA = active === i;
            return (
              <div key={p.step}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="flex gap-5 items-start relative z-10 cursor-default">
                <div className="w-[52px] h-[52px] rounded-full flex items-center justify-center mn font-bold text-xs border-2 flex-shrink-0 transition-all duration-300"
                  style={{ background: isA ? s.accent : "#04040c", borderColor: isA ? s.accent : `${s.accent}45`, color: isA ? "#04040c" : s.accent, boxShadow: isA ? `0 0 22px ${s.glow}` : `0 0 0 4px ${s.glowDim}` }}>
                  {p.step}
                </div>
                <div className="flex-1 rounded-2xl p-5 border transition-all duration-300"
                  style={{ background: isA ? s.glow : "rgba(255,255,255,0.02)", borderColor: isA ? `${s.accent}40` : "rgba(255,255,255,0.06)" }}>
                  <p className="dn font-bold text-sm mb-1.5 transition-colors duration-200"
                    style={{ color: isA ? "#fff" : "rgba(255,255,255,0.65)" }}>{p.title}</p>
                  <p className="text-xs leading-relaxed text-white/25">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}