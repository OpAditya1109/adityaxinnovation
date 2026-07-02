"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const SERVICES = [
  { label: "Web Development", color: "#60A5FA" },
  { label: "Mobile Applications", color: "#34D399" },
  { label: "Shopify Solutions", color: "#FBBF24" },
  { label: "Custom Software", color: "#A78BFA" },
  { label: "AI Integration", color: "#F472B6" },
  { label: "AR/VR Development", color: "#22D3EE" },
  { label: "Cloud Architecture", color: "#38BDF8" },
];

const STATS = [
  { num: "6+", label: "Projects Delivered" },
  { num: "98%", label: "Client Satisfaction" },
  { num: "5★", label: "Average Rating" },
  { num: "24/7", label: "Support" },
];

const TICKER = [
  "Web Development", "Mobile Apps", "Shopify", "Custom Software",
  "UI/UX Design", "Cloud Solutions", "AI Integration", "AR/VR Development", "API Development",
  "Web Development", "Mobile Apps", "Shopify", "Custom Software",
  "UI/UX Design", "Cloud Solutions", "AI Integration", "AR/VR Development", "API Development",
];

export default function Hero() {
  const [serviceIndex, setServiceIndex] = useState(0);
  const [linesDone, setLinesDone] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => { setMounted(true); }, []);

  // Cycle service highlight every 2.5s
  useEffect(() => {
    const t = setInterval(() => setServiceIndex(i => (i + 1) % SERVICES.length), 2500);
    return () => clearInterval(t);
  }, []);

  // Animate terminal lines appearing
  useEffect(() => {
    if (linesDone >= SERVICES.length) return;
    const t = setTimeout(() => setLinesDone(n => n + 1), 400 + linesDone * 200);
    return () => clearTimeout(t);
  }, [linesDone]);

  // Typewriter for headline word
  const WORDS = ["Scalable.", "Reliable.", "Innovative.", "Future-Ready."];
  useEffect(() => {
    const word = WORDS[wordIndex];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < word.length)
      t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 75);
    else if (!deleting && displayed.length === word.length)
      t = setTimeout(() => setDeleting(true), 2200);
    else if (deleting && displayed.length > 0)
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    else { setDeleting(false); setWordIndex(i => (i + 1) % WORDS.length); }
    return () => clearTimeout(t);
  }, [displayed, deleting, wordIndex]);

  // Subtle dot-grid canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let W = canvas.width = canvas.offsetWidth;
    let H = canvas.height = canvas.offsetHeight;
    let frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      const gap = 36;
      const cols = Math.ceil(W / gap);
      const rows = Math.ceil(H / gap);
      frame += 0.008;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * gap + gap / 2;
          const y = r * gap + gap / 2;
          const wave = Math.sin(frame + c * 0.3 + r * 0.2) * 0.5 + 0.5;
          const alpha = 0.04 + wave * 0.08;
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(96,165,250,${alpha})`;
          ctx.fill();
        }
      }
      rafRef.current = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(rafRef.current); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Space+Mono:wght@400;500;700&display=swap');

        .hero-root * { box-sizing: border-box; }
        .hero-root { font-family: 'Outfit', system-ui, sans-serif; }
        .mono { font-family: 'Space Mono', monospace; }

        @keyframes fadeUp   { from { opacity:0; transform:translateY(24px) } to { opacity:1; transform:translateY(0) } }
        @keyframes fadeIn   { from { opacity:0 } to { opacity:1 } }
        @keyframes blink    { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes ticker   { from { transform:translateX(0) } to { transform:translateX(-50%) } }
        @keyframes pulseRing { 0%{box-shadow:0 0 0 0 rgba(30,111,255,.35)} 70%{box-shadow:0 0 0 10px rgba(30,111,255,0)} 100%{box-shadow:0 0 0 0 rgba(30,111,255,0)} }
        @keyframes lineIn   { from { opacity:0; transform:translateX(-8px) } to { opacity:1; transform:translateX(0) } }
        @keyframes subtleFloat { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-6px)} }
        @keyframes scanline { 0%{top:-10%} 100%{top:110%} }
        @keyframes borderGlow { 0%,100%{opacity:.5} 50%{opacity:1} }

        .fu1 { animation: fadeUp .7s cubic-bezier(.16,1,.3,1) .1s both }
        .fu2 { animation: fadeUp .7s cubic-bezier(.16,1,.3,1) .22s both }
        .fu3 { animation: fadeUp .7s cubic-bezier(.16,1,.3,1) .34s both }
        .fu4 { animation: fadeUp .7s cubic-bezier(.16,1,.3,1) .46s both }
        .fu5 { animation: fadeUp .7s cubic-bezier(.16,1,.3,1) .58s both }
        .fu6 { animation: fadeUp .7s cubic-bezier(.16,1,.3,1) .7s both }

        .cursor-blink { animation: blink .9s ease-in-out infinite }
        .ticker-track { animation: ticker 28s linear infinite }
        .pulse-ring { animation: pulseRing 2.2s ease-out infinite }
        .terminal-line { animation: lineIn .35s ease-out both }
        .window-float { animation: subtleFloat 6s ease-in-out infinite }
        .border-glow { animation: borderGlow 3s ease-in-out infinite }

        .scanline-wrap { position:relative; overflow:hidden }
        .scanline-wrap::after {
          content:'';
          position:absolute;
          left:0; right:0;
          height:2px;
          background: linear-gradient(transparent, rgba(96,165,250,.08), transparent);
          animation: scanline 5s linear infinite;
          pointer-events:none;
        }

        .btn-primary {
          position:relative; overflow:hidden;
          background: linear-gradient(135deg, #1E6FFF 0%, #0A4FBD 100%);
          color:#fff; font-weight:700; font-size:.875rem; letter-spacing:.02em;
          padding:.875rem 2rem; border-radius:8px; display:inline-flex;
          align-items:center; gap:.625rem; border:none; cursor:pointer;
          transition: transform .18s, box-shadow .18s;
          box-shadow: 0 4px 24px rgba(30,111,255,.35), 0 1px 0 rgba(255,255,255,.1) inset;
          text-decoration:none;
        }
        .btn-primary:hover { transform:translateY(-2px); box-shadow:0 8px 32px rgba(30,111,255,.45), 0 1px 0 rgba(255,255,255,.1) inset; }
        .btn-primary:active { transform:translateY(0); }
        .btn-primary::before {
          content:'';
          position:absolute; top:0; left:-100%; width:100%; height:100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.08), transparent);
          transition: left .5s ease;
        }
        .btn-primary:hover::before { left:100%; }

        .btn-secondary {
          background:transparent;
          color:rgba(255,255,255,.7); font-weight:500; font-size:.875rem;
          padding:.875rem 1.75rem; border-radius:8px; display:inline-flex;
          align-items:center; gap:.5rem; cursor:pointer;
          border: 1px solid rgba(255,255,255,.12);
          transition: color .18s, border-color .18s, background .18s;
          text-decoration:none;
        }
        .btn-secondary:hover { color:#fff; border-color:rgba(255,255,255,.28); background:rgba(255,255,255,.04); }

        .stat-card {
          padding:1.25rem 1.5rem;
          border-right: 1px solid rgba(255,255,255,.06);
          transition: background .2s;
        }
        .stat-card:last-child { border-right:none; }
        .stat-card:hover { background:rgba(30,111,255,.06); }

        .window-chrome {
          background: #0D1627;
          border: 1px solid rgba(255,255,255,.08);
          border-radius:12px;
          overflow:hidden;
          box-shadow: 0 32px 80px rgba(0,0,0,.6), 0 0 0 1px rgba(255,255,255,.04) inset;
        }
        .window-titlebar {
          display:flex; align-items:center; gap:.5rem;
          padding:.75rem 1rem;
          border-bottom: 1px solid rgba(255,255,255,.06);
          background: rgba(255,255,255,.02);
        }
        .dot { width:10px; height:10px; border-radius:50%; }

        .service-row {
          display:flex; align-items:center; gap:.75rem;
          padding:.5rem .75rem; border-radius:6px;
          transition: background .2s;
        }
        .service-row.active { background:rgba(30,111,255,.08); }

        @media (prefers-reduced-motion: reduce) {
          * { animation:none !important; transition:none !important; }
        }
      `}</style>

      <section
        className="hero-root"
        style={{
          position: "relative",
          minHeight: "100vh",
          background: "#050B18",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Animated dot-grid canvas */}
        <canvas
          ref={canvasRef}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
        />

        {/* Gradient radial accents */}
        <div style={{
          position: "absolute", top: "-10%", left: "5%",
          width: "600px", height: "600px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(30,111,255,.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", bottom: "0", right: "5%",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(96,165,250,.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        {/* Thin horizontal line accent */}
        <div style={{
          position: "absolute", top: "0", left: "0", right: "0",
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(30,111,255,.5), transparent)",
          pointerEvents: "none",
        }} />

        {/* Main content */}
        <div style={{
          position: "relative", zIndex: 10,
          width: "100%", maxWidth: "1200px",
          margin: "0 auto",
          padding: "100px 24px 80px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "64px",
          alignItems: "center",
        }}>

          {/* ── LEFT COLUMN ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>

            {/* Eyebrow badge */}
            <div className="fu1" style={{ display: "inline-flex", alignItems: "center", gap: "10px", width: "fit-content" }}>
              <span
                className="pulse-ring"
                style={{
                  width: "8px", height: "8px", borderRadius: "50%",
                  background: "#22C55E", flexShrink: 0,
                  display: "inline-block",
                }}
              />
              <span
                className="mono"
                style={{
                  fontSize: ".68rem", letterSpacing: ".18em",
                  textTransform: "uppercase", color: "rgba(255,255,255,.45)",
                }}
              >
                Pune-Based · Est. 2026 · Accepting Projects
              </span>
            </div>

            {/* Headline */}
            <div className="fu2">
              <h1 style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: "-.03em",
                margin: 0,
                color: "#fff",
              }}>
                Software Built to Be{" "}
                <br />
                <span style={{
                  background: "linear-gradient(135deg, #60A5FA 0%, #3B82F6 50%, #1E6FFF 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  display: "inline-block",
                  minWidth: "260px",
                }}>
                  {displayed}
                  {mounted && (
                    <span
                      className="cursor-blink"
                      style={{
                        display: "inline-block",
                        width: "3px", height: "0.88em",
                        background: "#60A5FA",
                        borderRadius: "2px",
                        marginLeft: "4px",
                        verticalAlign: "middle",
                      }}
                    />
                  )}
                </span>
              </h1>
            </div>

            {/* Sub-copy */}
            <p className="fu3" style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "rgba(255,255,255,.45)",
              margin: 0,
              maxWidth: "420px",
            }}>
              AdityaX Innovations crafts high-performance{" "}
              <span style={{ color: "rgba(255,255,255,.75)" }}>web apps, mobile apps, Shopify stores,</span>{" "}
              and custom software — engineered for speed, scale, and lasting impact.
            </p>

            {/* CTA Row */}
            <div className="fu4" style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/contact" className="btn-primary">
                Get a Free Consultation
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Services
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Stats row */}
            <div className="fu6" style={{
              display: "flex",
              border: "1px solid rgba(255,255,255,.06)",
              borderRadius: "10px",
              overflow: "hidden",
              background: "rgba(255,255,255,.01)",
              marginTop: "4px",
            }}>
              {STATS.map((s) => (
                <div key={s.label} className="stat-card" style={{ flex: 1, textAlign: "center" }}>
                  <div style={{ fontWeight: 800, fontSize: "1.4rem", letterSpacing: "-.02em", color: "#fff" }}>
                    {s.num}
                  </div>
                  <div className="mono" style={{ fontSize: ".6rem", letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.28)", marginTop: "4px" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* ── RIGHT COLUMN — Terminal window ── */}
          <div
            className="window-float"
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {/* Main terminal window */}
            <div className="window-chrome scanline-wrap">
              {/* Titlebar */}
              <div className="window-titlebar">
                <div className="dot" style={{ background: "#FF5F57" }} />
                <div className="dot" style={{ background: "#FFBD2E" }} />
                <div className="dot" style={{ background: "#28C840" }} />
                <span className="mono" style={{
                  fontSize: ".65rem", color: "rgba(255,255,255,.28)",
                  marginLeft: "8px", letterSpacing: ".05em",
                }}>
                  adityax@innovations ~ services.sh
                </span>
              </div>

              {/* Terminal body */}
              <div style={{ padding: "20px 20px 24px" }}>
                {/* Prompt line */}
                <div className="mono" style={{ fontSize: ".75rem", color: "rgba(255,255,255,.3)", marginBottom: "16px" }}>
                  <span style={{ color: "#34D399" }}>➜</span>
                  <span style={{ color: "#60A5FA", marginLeft: "8px" }}>~/adityax</span>
                  <span style={{ color: "rgba(255,255,255,.4)", marginLeft: "8px" }}>node services.js</span>
                </div>

                {/* Service list */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {SERVICES.map((svc, i) => (
                    <div
                      key={svc.label}
                      className={`service-row terminal-line ${i === serviceIndex ? "active" : ""}`}
                      style={{
                        opacity: mounted && i < linesDone ? 1 : 0,
                        animationDelay: `${i * 0.18}s`,
                      }}
                    >
                      <span className="mono" style={{ color: "rgba(255,255,255,.2)", fontSize: ".7rem", minWidth: "20px" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: svc.color, flexShrink: 0 }} />
                      <span
                        className="mono"
                        style={{
                          fontSize: ".82rem",
                          color: i === serviceIndex ? "#fff" : "rgba(255,255,255,.5)",
                          fontWeight: i === serviceIndex ? 500 : 400,
                          transition: "color .3s",
                          flex: 1,
                        }}
                      >
                        {svc.label}
                      </span>
                      {i === serviceIndex && (
                        <span
                          className="mono"
                          style={{
                            fontSize: ".65rem",
                            padding: "2px 8px",
                            borderRadius: "4px",
                            background: "rgba(30,111,255,.15)",
                            color: "#60A5FA",
                            border: "1px solid rgba(30,111,255,.25)",
                          }}
                        >
                          active
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Bottom status */}
                <div style={{
                  marginTop: "20px",
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(255,255,255,.05)",
                  display: "flex", alignItems: "center", gap: "8px",
                }}>
                  <span className="mono" style={{ fontSize: ".7rem", color: "rgba(255,255,255,.25)" }}>
                    Output:
                  </span>
                  <span className="mono" style={{ fontSize: ".7rem", color: "#34D399" }}>
                    ✓ All systems operational
                  </span>
                  <span
                    className="cursor-blink mono"
                    style={{
                      display: "inline-block", width: "6px", height: "13px",
                      background: "#60A5FA", borderRadius: "1px",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Two mini-cards below the terminal */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {/* Card 1 */}
              <div style={{
                padding: "16px",
                background: "#0D1627",
                border: "1px solid rgba(255,255,255,.07)",
                borderRadius: "10px",
                display: "flex", flexDirection: "column", gap: "8px",
              }}>
                <div style={{
                  width: "36px", height: "36px", borderRadius: "8px",
                  background: "rgba(30,111,255,.12)",
                  border: "1px solid rgba(30,111,255,.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#60A5FA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div style={{ fontWeight: 700, fontSize: ".85rem", color: "#fff" }}>Full-Stack</div>
                <div style={{ fontSize: ".75rem", color: "rgba(255,255,255,.38)", lineHeight: 1.5 }}>
                  Next.js · React Native · Node.js
                </div>
              </div>

              {/* Card 2 */}
              <div style={{
                padding: "16px",
                background: "#0D1627",
                border: "1px solid rgba(255,255,255,.07)",
                borderRadius: "10px",
                display: "flex", flexDirection: "column", gap: "8px",
              }}>
                <div style={{
                  width: "36px", height: "36px", borderRadius: "8px",
                  background: "rgba(52,211,153,.08)",
                  border: "1px solid rgba(52,211,153,.18)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#34D399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div style={{ fontWeight: 700, fontSize: ".85rem", color: "#fff" }}>Fast Delivery</div>
                <div style={{ fontSize: ".75rem", color: "rgba(255,255,255,.38)", lineHeight: 1.5 }}>
                  Agile sprints · On-time, every time
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ── Bottom Ticker ── */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          borderTop: "1px solid rgba(255,255,255,.04)",
          background: "rgba(255,255,255,.01)",
          padding: "12px 0",
          overflow: "hidden",
        }}>
          <div className="ticker-track mono" style={{ display: "flex", width: "max-content" }}>
            {TICKER.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex", alignItems: "center", gap: "12px",
                  padding: "0 28px",
                  fontSize: ".6rem", letterSpacing: ".16em",
                  textTransform: "uppercase", color: "rgba(255,255,255,.3)",
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#1E6FFF", flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Mobile responsive override */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-right { display: none !important; }
        }
      `}</style>
    </>
  );
}