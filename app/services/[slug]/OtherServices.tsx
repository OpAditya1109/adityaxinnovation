"use client";
import Link from "next/link";
import { useState } from "react";

type ServiceLink = { slug: string; label: string; accent: string; number: string };

export default function OtherServices({ others }: { others: ServiceLink[] }) {
  const [hov, setHov] = useState<string | null>(null);

  return (
    <section className="border-t border-white/[0.04] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <div className="mn text-[.54rem] uppercase tracking-[.24em] text-white/18">Keep Exploring</div>
          <h3 className="dn text-[clamp(1.4rem,3vw,2.2rem)] font-black tracking-tight" style={{ color:"rgba(255,255,255,0.55)" }}>
            Other services we&apos;re known for
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {others.map((o) => {
            const isH = hov === o.slug;
            return (
              <Link
                key={o.slug}
                href={`/services/${o.slug}`}
                onMouseEnter={() => setHov(o.slug)}
                onMouseLeave={() => setHov(null)}
                className="relative flex flex-col items-center gap-3.5 p-7 rounded-2xl border text-center overflow-hidden transition-all duration-350"
                style={{
                  background: isH ? `${o.accent}0e` : "rgba(255,255,255,0.02)",
                  borderColor: isH ? `${o.accent}45` : "rgba(255,255,255,0.07)",
                  transform: isH ? "translateY(-7px) scale(1.02)" : "none",
                  boxShadow: isH ? `0 0 40px ${o.accent}18, 0 16px 40px rgba(0,0,0,.5)` : "none",
                }}>
                <div className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                  style={{ background:`radial-gradient(circle at 50% 0%,${o.accent}1a,transparent 70%)`, opacity: isH ? 1 : 0 }} />

                <span className="mn text-[.5rem] uppercase tracking-[.16em] relative z-10 transition-colors duration-200"
                  style={{ color: isH ? o.accent+"80" : "rgba(255,255,255,0.14)" }}>
                  {o.number}
                </span>

                <div className="w-3 h-3 rounded-full transition-all duration-300 relative z-10"
                  style={{ background: o.accent, boxShadow: isH ? `0 0 18px ${o.accent}` : "none", opacity: isH ? 1 : 0.35 }} />

                <p className="dn font-black text-sm leading-tight transition-colors duration-200 relative z-10"
                  style={{ color: isH ? "#fff" : "rgba(255,255,255,0.42)" }}>
                  {o.label}
                </p>

                <svg className="w-3.5 h-3.5 transition-all duration-200 relative z-10"
                  style={{ color: isH ? o.accent : "rgba(255,255,255,0.14)", transform: isH ? "translateX(3px)" : "none" }}
                  viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                <div className="absolute bottom-0 left-0 h-0.5 rounded-b-2xl transition-all duration-500"
                  style={{ width: isH ? "100%" : "0%", background:`linear-gradient(90deg,transparent,${o.accent},transparent)` }} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}