"use client";
import { useState } from "react";
import Link from "next/link";

const PRODUCTS = [
  {
    id: "sevenbites",
    number: "01",
    title: "SevenBites",
    short: "Food delivery platform",
    desc: "A full-featured food delivery platform with a React Native/Expo mobile app and a Next.js web frontend — browse restaurants, place orders, and track deliveries in real time.",
    tags: ["React Native", "Expo", "Next.js"],
    stat: "Mobile + Web",
    accent: "#fb923c",
    glow: "rgba(251,146,60,0.28)",
    glowStrong: "rgba(251,146,60,0.55)",
  },
  {
    id: "subflow",
    number: "02",
    title: "Subflow",
    short: "Shopify subscriptions, for India",
    desc: "A purpose-built Shopify app for Indian D2C merchants — manage recurring subscriptions with automated WhatsApp reminders via Meta Cloud API to cut churn.",
    tags: ["Shopify", "Remix", "WhatsApp API"],
    stat: "Subscription Tracking",
    accent: "#34d399",
    glow: "rgba(52,211,153,0.28)",
    glowStrong: "rgba(52,211,153,0.55)",
  },
  {
    id: "gst-itc",
    number: "03",
    title: "GST ITC Scanner",
    short: "AI/OCR invoice intelligence",
    desc: "Scans GST invoices and automatically extracts, validates, and reconciles Input Tax Credit data — eliminating manual errors and speeding up compliance.",
    tags: ["AI / OCR", "GST Compliance", "Flutter"],
    stat: "Invoice Reconciliation",
    accent: "#38bdf8",
    glow: "rgba(56,189,248,0.28)",
    glowStrong: "rgba(56,189,248,0.55)",
  },
  {
    id: "7days",
    number: "04",
    title: "7 Days",
    short: "Society visitor management",
    desc: "A comprehensive visitor management system for housing societies — photo capture, real-time approvals, and Socket.IO-powered instant alerts for guards and residents.",
    tags: ["React Native", "Node.js", "MongoDB"],
    stat: "Live on Play Store",
    accent: "#a78bfa",
    glow: "rgba(167,139,250,0.28)",
    glowStrong: "rgba(167,139,250,0.55)",
  },
  {
    id: "astrobhavana",
    number: "05",
    title: "AstroBhavana",
    short: "Astrology & intention-setting",
    desc: "Helps users start each day with clarity through personalized astrological guidance, reflective intention-setting, and a calming, culturally connected experience.",
    tags: ["Mobile App", "Astrology", "Wellness"],
    stat: "Daily Rituals",
    accent: "#f472b6",
    glow: "rgba(244,114,182,0.28)",
    glowStrong: "rgba(244,114,182,0.55)",
  },
  {
    id: "matrimony",
    number: "06",
    title: "Bhavana Matrimony",
    short: "Matchmaking, rooted in tradition",
    desc: "A matchmaking platform featuring astrology-based compatibility matching, detailed verified profiles, and a trusted community for serious seekers.",
    tags: ["Matchmaking", "Astrology", "Community"],
    stat: "Community Trust",
    accent: "#facc15",
    glow: "rgba(250,204,21,0.22)",
    glowStrong: "rgba(250,204,21,0.45)",
  },
];

export default function Products() {
  const [active, setActive] = useState(0);
  const p = PRODUCTS[active];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap');

        .px-font { font-family: 'Outfit', sans-serif; }
        .px-mono  { font-family: 'Space Mono', monospace; }

        @keyframes px-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes px-orb-breathe {
          0%, 100% { opacity: .28; transform: scale(1); }
          50%       { opacity: .42; transform: scale(1.06); }
        }

        .px-fade-up { animation: px-fade-up .65s cubic-bezier(.16,1,.3,1) both; }

        .px-featured-orb {
          animation: px-orb-breathe 6s ease-in-out infinite;
        }

        .px-item {
          position: relative;
          cursor: pointer;
          transition: background .25s ease;
          border-bottom: 1px solid rgba(255,255,255,.04);
        }
        .px-item:last-child { border-bottom: none; }
        .px-item:hover { background: rgba(255,255,255,.018); }
        .px-item.px-active { background: rgba(255,255,255,.025); }

        .px-item-bar {
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          border-radius: 0 2px 2px 0;
          transition: opacity .35s ease, background .35s ease;
        }

        .px-item-title {
          font-size: 15px;
          font-weight: 700;
          letter-spacing: -.02em;
          color: rgba(255,255,255,.55);
          margin-bottom: 3px;
          transition: color .25s ease;
        }
        .px-item:hover .px-item-title,
        .px-item.px-active .px-item-title { color: rgba(255,255,255,.95); }

        .px-item-short {
          font-size: 11px;
          color: rgba(255,255,255,.2);
          transition: color .25s ease;
        }
        .px-item:hover .px-item-short,
        .px-item.px-active .px-item-short { color: rgba(255,255,255,.4); }

        .px-item-num {
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: .18em;
          color: rgba(255,255,255,.14);
          margin-bottom: 5px;
          transition: color .25s ease;
        }
        .px-item:hover .px-item-num,
        .px-item.px-active .px-item-num { color: rgba(255,255,255,.3); }

        .px-item-arrow {
          opacity: 0;
          transform: translateX(-6px);
          transition: all .25s ease;
          color: rgba(255,255,255,.3);
          font-size: 16px;
        }
        .px-item:hover .px-item-arrow,
        .px-item.px-active .px-item-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .px-tag {
          display: inline-flex;
          align-items: center;
          padding: 4px 11px;
          border-radius: 4px;
          font-family: 'Space Mono', monospace;
          font-size: 9px;
          letter-spacing: .1em;
          text-transform: uppercase;
          border: 1px solid;
          transition: all .35s ease;
        }

        .px-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 100px;
          font-family: 'Outfit', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: .02em;
          color: #050510;
          background: #fff;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: all .25s ease;
          white-space: nowrap;
        }
        .px-cta-btn:hover {
          background: rgba(255,255,255,.85);
          transform: translateY(-2px);
        }
        .px-cta-btn svg {
          transition: transform .2s ease;
        }
        .px-cta-btn:hover svg {
          transform: translateX(3px);
        }
      `}</style>

      <section
        className="px-font relative overflow-hidden"
        style={{ background: "#050510", padding: "100px 0", borderTop: "1px solid rgba(255,255,255,.04)" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>

          {/* ── HEADER ─────────────────────────── */}
          <div className="px-fade-up" style={{ marginBottom: 72 }}>
            <div
              className="px-mono"
              style={{
                fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase",
                color: "rgba(255,255,255,.28)", display: "flex", alignItems: "center",
                gap: 10, marginBottom: 20,
              }}
            >
              <span style={{ display: "inline-block", width: 28, height: 1, background: "rgba(255,255,255,.22)" }} />
              What we&apos;ve built
            </div>
            <h2
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
                fontWeight: 900, lineHeight: 1.0,
                letterSpacing: "-0.04em", color: "#fff",
              }}
            >
              Products.{" "}
              <span style={{ color: "rgba(255,255,255,.15)", fontWeight: 300, fontStyle: "italic", fontSize: "clamp(1.6rem, 3.5vw, 3rem)" }}>
                Not concepts.
              </span>
            </h2>
          </div>

          {/* ── MAIN GRID ──────────────────────── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 2,
              background: "rgba(255,255,255,.04)",
              borderRadius: 24,
              overflow: "hidden",
            }}
          >

            {/* LEFT — FEATURED PANE */}
            <div
              style={{
                background: "#050510",
                padding: "56px 48px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 560,
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Orb */}
              <div
                className="px-featured-orb"
                style={{
                  position: "absolute",
                  width: 340, height: 340,
                  borderRadius: "50%",
                  top: -80, right: -80,
                  background: p.glowStrong,
                  filter: "blur(60px)",
                  pointerEvents: "none",
                  transition: "background .5s ease",
                }}
              />

              <div style={{ position: "relative", zIndex: 1 }}>
                {/* Num */}
                <div
                  className="px-mono"
                  style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,.18)", marginBottom: 32 }}
                >
                  {p.number} / 06
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: "3.2rem", fontWeight: 900,
                    lineHeight: 1.0, letterSpacing: "-0.04em",
                    color: p.accent, marginBottom: 8,
                    transition: "color .4s ease",
                  }}
                >
                  {p.title}
                </h3>

                {/* Short */}
                <p
                  className="px-mono"
                  style={{
                    fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase",
                    color: p.accent, opacity: 0.7, marginBottom: 28,
                    transition: "color .4s ease",
                  }}
                >
                  {p.short}
                </p>

                {/* Separator */}
                <div style={{
                  height: 1, background: `linear-gradient(90deg, ${p.accent}50, transparent)`,
                  marginBottom: 28, borderRadius: 1,
                  transition: "background .4s ease",
                }} />

                {/* Description */}
                <p
                  style={{
                    fontSize: 14, lineHeight: 1.75,
                    color: "rgba(255,255,255,.42)", maxWidth: 360, marginBottom: 36,
                  }}
                >
                  {p.desc}
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-tag"
                      style={{
                        color: p.accent,
                        borderColor: `${p.accent}35`,
                        background: `${p.accent}12`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stat footer */}
              <div
                style={{
                  display: "flex", alignItems: "center", gap: 8, position: "relative", zIndex: 1,
                  fontFamily: "'Space Mono', monospace", fontSize: 9,
                  letterSpacing: "0.15em", textTransform: "uppercase",
                  color: "rgba(255,255,255,.2)", marginTop: 40,
                }}
              >
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: p.accent, transition: "background .4s ease" }} />
                {p.stat}
              </div>
            </div>

            {/* RIGHT — PRODUCT LIST */}
            <div style={{ background: "#050510", display: "flex", flexDirection: "column" }}>
              {PRODUCTS.map((pr, i) => (
                <div
                  key={pr.id}
                  className={`px-item${i === active ? " px-active" : ""}`}
                  onClick={() => setActive(i)}
                  style={{ padding: "28px 36px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}
                >
                  {/* Active bar */}
                  <div
                    className="px-item-bar"
                    style={{ background: pr.accent, opacity: i === active ? 1 : 0 }}
                  />

                  <div style={{ flex: 1 }}>
                    <div className="px-item-num">{pr.number}</div>
                    <div className="px-item-title">{pr.title}</div>
                    <div className="px-item-short">{pr.short}</div>
                  </div>

                  <div className="px-item-arrow">→</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── BOTTOM ROW ─────────────────────── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 2, marginTop: 2,
              background: "rgba(255,255,255,.04)",
              borderRadius: "0 0 24px 24px",
              overflow: "hidden",
            }}
          >
            {/* Stat */}
            <div style={{ background: "#050510", padding: "32px 40px", display: "flex", alignItems: "center", gap: 20 }}>
              <div
                style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: "rgba(255,255,255,.04)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="2" y="2" width="8" height="8" rx="2" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                  <rect x="12" y="2" width="8" height="8" rx="2" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                  <rect x="2" y="12" width="8" height="8" rx="2" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                  <rect x="12" y="12" width="8" height="8" rx="2" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
                </svg>
              </div>
              <div>
                <div className="px-mono" style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,.2)", marginBottom: 6 }}>
                  Products shipped
                </div>
                <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: "-0.03em", color: "rgba(255,255,255,.85)" }}>
                  6 Live Apps
                </div>
              </div>
            </div>

            {/* CTA */}
            <div style={{ background: "#050510", padding: "32px 40px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
              <div className="px-mono" style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,.2)", maxWidth: 180, lineHeight: 1.6 }}>
                Want something built like this?
              </div>
              <Link href="/contact" className="px-cta-btn">
                Let&apos;s Talk
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}