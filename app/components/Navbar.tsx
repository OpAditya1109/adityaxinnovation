"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [hoverPos, setHoverPos] = useState<{ left: number; width: number } | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const parent = navRef.current;
    if (!parent) return;
    const elRect = el.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();
    setHoverPos({ left: elRect.left - parentRect.left, width: elRect.width });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap');

        * { box-sizing: border-box; }

        @keyframes float-in {
          from { opacity: 0; transform: translateY(-16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.08); }
        }
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }

        .navbar-font { font-family: 'Outfit', sans-serif; }
        .mono-font   { font-family: 'Space Mono', monospace; }

        .navbar-animate { animation: float-in 0.6s cubic-bezier(0.16,1,0.3,1) forwards; }

        /* Floating pill container */
        .navbar-pill {
          background: rgba(8, 8, 14, 0.88);
          backdrop-filter: blur(28px);
          -webkit-backdrop-filter: blur(28px);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 9999px;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .navbar-pill.scrolled {
          box-shadow:
            0 0 0 1px rgba(99,179,237,0.12),
            0 8px 40px rgba(0,0,0,0.55),
            0 0 60px rgba(56,189,248,0.06);
        }

        /* Glow orb behind navbar */
        .glow-orb {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          width: 500px;
          height: 80px;
          background: radial-gradient(ellipse at center, rgba(56,189,248,0.18) 0%, transparent 70%);
          animation: glow-pulse 4s ease-in-out infinite;
          pointer-events: none;
          filter: blur(8px);
        }

        /* Hover highlight sliding pill */
        .hover-pill {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          height: 34px;
          background: rgba(255,255,255,0.06);
          border-radius: 9999px;
          transition: left 0.25s cubic-bezier(0.16,1,0.3,1), width 0.25s cubic-bezier(0.16,1,0.3,1), opacity 0.2s;
          pointer-events: none;
          border: 1px solid rgba(255,255,255,0.07);
        }

        /* Nav link text */
        .nav-item {
          position: relative;
          font-size: 0.875rem;
          font-weight: 500;
          color: rgba(255,255,255,0.55);
          padding: 8px 16px;
          border-radius: 9999px;
          transition: color 0.25s ease;
          letter-spacing: 0.01em;
          white-space: nowrap;
        }
        .nav-item:hover, .nav-item.active { color: rgba(255,255,255,0.95); }

        /* Active dot */
        .active-dot {
          position: absolute;
          bottom: 3px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          background: #38bdf8;
          border-radius: 9999px;
          box-shadow: 0 0 6px #38bdf8;
        }

        /* CTA button */
        .cta-button {
          position: relative;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 22px;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.875rem;
          color: #0a0a12;
          letter-spacing: 0.02em;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
          background: linear-gradient(135deg, #38bdf8, #818cf8, #38bdf8);
          background-size: 200% auto;
          box-shadow: 0 0 20px rgba(56,189,248,0.35), 0 4px 15px rgba(0,0,0,0.3);
        }
        .cta-button:hover {
          animation: shimmer 1.5s linear infinite;
          box-shadow: 0 0 30px rgba(56,189,248,0.55), 0 6px 25px rgba(0,0,0,0.4);
          transform: translateY(-1px) scale(1.02);
        }
        .cta-button:active { transform: scale(0.98); }

        /* Spinning ring on CTA */
        .cta-ring {
          position: absolute;
          inset: -3px;
          border-radius: 9999px;
          border: 1.5px dashed rgba(56,189,248,0.35);
          animation: spin-slow 8s linear infinite;
          pointer-events: none;
        }

        /* Logo */
        .logo-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .logo-icon-wrap {
          position: relative;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(56,189,248,0.15), rgba(129,140,248,0.15));
          border: 1px solid rgba(56,189,248,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .logo-badge:hover .logo-icon-wrap {
          border-color: rgba(56,189,248,0.5);
          box-shadow: 0 0 18px rgba(56,189,248,0.2);
        }
        .logo-name {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 1rem;
          letter-spacing: -0.02em;
          color: #fff;
        }
        .logo-name em {
          font-style: normal;
          background: linear-gradient(90deg, #38bdf8, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .logo-tag {
          font-family: 'Space Mono', monospace;
          font-size: 0.5rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(56,189,248,0.7);
          line-height: 1;
          margin-top: 2px;
        }

        /* Status dot */
        .status-dot {
          width: 7px;
          height: 7px;
          border-radius: 9999px;
          background: #4ade80;
          box-shadow: 0 0 8px #4ade80;
          animation: blink 2.5s ease-in-out infinite;
          flex-shrink: 0;
        }

        /* Mobile menu */
        .mobile-drawer {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 40;
          background: rgba(5,5,10,0.97);
          backdrop-filter: blur(32px);
          -webkit-backdrop-filter: blur(32px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
          padding: 2rem;
        }
        .mobile-drawer.open  { opacity: 1; transform: translateY(0);    pointer-events: all; }
        .mobile-drawer.closed { opacity: 0; transform: translateY(-100%); pointer-events: none; }

        .mobile-link {
          font-family: 'Outfit', sans-serif;
          font-size: clamp(2rem, 8vw, 3.5rem);
          font-weight: 800;
          color: rgba(255,255,255,0.15);
          text-decoration: none;
          letter-spacing: -0.03em;
          transition: all 0.25s ease;
          line-height: 1.15;
          display: block;
          text-align: center;
        }
        .mobile-link:hover {
          color: #fff;
          text-shadow: 0 0 40px rgba(56,189,248,0.5);
          transform: translateX(8px);
        }

        /* Hamburger */
        .hamburger-btn {
          position: relative;
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .hamburger-btn:hover {
          background: rgba(255,255,255,0.09);
          border-color: rgba(56,189,248,0.25);
        }
        .hamburger-line {
          display: block;
          width: 18px;
          height: 1.5px;
          background: rgba(255,255,255,0.7);
          border-radius: 9999px;
          transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
          transform-origin: center;
        }
      `}</style>

      {/* Wrapper — full width, not sticky yet, just positions the floating pill */}
      <div className="navbar-font sticky top-0 z-50 flex justify-center pt-5 px-4 pb-2 pointer-events-none">
        {/* Glow orb */}
        <div className="glow-orb" />

        {/* Floating Pill */}
        <div
          className={`navbar-pill navbar-animate pointer-events-auto w-full max-w-4xl ${scrolled ? "scrolled" : ""}`}
        >
          <div className="flex items-center justify-between px-4 py-2.5">

            {/* ── Logo ── */}
            <Link href="/" className="logo-badge">
              <div className="logo-icon-wrap">
                <Image
                  src="/logo.png"
                  alt="Adityaxinnovation"
                  width={22}
                  height={22}
                  priority
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="logo-name">
                  Aditya<em>X</em>
                </span>
                <span className="logo-tag">Innovation</span>
              </div>
            </Link>

            {/* ── Desktop Nav ── */}
            <div
              ref={navRef}
              className="hidden md:flex items-center relative"
              onMouseLeave={() => setHoverPos(null)}
            >
              {/* Sliding hover background */}
              {hoverPos && (
                <div
                  className="hover-pill"
                  style={{ left: hoverPos.left, width: hoverPos.width }}
                />
              )}
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onMouseEnter={handleLinkHover}
                  onClick={() => setActiveLink(link.href)}
                  className={`nav-item ${activeLink === link.href ? "active" : ""}`}
                >
                  {link.label}
                  {activeLink === link.href && <span className="active-dot" />}
                </Link>
              ))}
            </div>

            {/* ── Right Side ── */}
            <div className="flex items-center gap-3">
              {/* Live status — hidden on very small screens */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.06]">
                <span className="status-dot" />
                <span className="mono-font text-[0.6rem] text-green-400/80 tracking-widest uppercase">
                  Live
                </span>
              </div>

              {/* CTA */}
              <Link href="/contact" className="cta-button">
                <span className="cta-ring" />
                <span className="relative z-10 flex items-center gap-2">
                  Get Quote
                  <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M1 7h12M8 2l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                className="hamburger-btn md:hidden"
              >
                <span
                  className="hamburger-line"
                  style={{
                    transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : undefined,
                  }}
                />
                <span
                  className="hamburger-line"
                  style={{
                    opacity: menuOpen ? 0 : 1,
                    transform: menuOpen ? "scaleX(0)" : undefined,
                  }}
                />
                <span
                  className="hamburger-line"
                  style={{
                    transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : undefined,
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Full-screen Mobile Drawer ── */}
      <div className={`mobile-drawer ${menuOpen ? "open" : "closed"}`}>
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-7 right-6 w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all"
          aria-label="Close menu"
        >
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Big links */}
        <nav className="flex flex-col items-center gap-3 mb-10">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => { setMenuOpen(false); setActiveLink(link.href); }}
              className="mobile-link"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Bottom CTA */}
        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className="cta-button"
          style={{ padding: "14px 40px", fontSize: "1rem" }}
        >
          <span className="cta-ring" />
          <span className="relative z-10">Get a Free Quote →</span>
        </Link>

        {/* Decorative grid lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>
    </>
  );
}