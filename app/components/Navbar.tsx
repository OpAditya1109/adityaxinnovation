"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&display=swap');

        * { box-sizing: border-box; }

        @keyframes float-in {
          from { opacity: 0; transform: translate(-50%, -14px); }
          to   { opacity: 1; transform: translate(-50%, 0); }
        }

        .navbar-font { font-family: 'Outfit', sans-serif; }

        /* ── Floating dark rounded bar ── */
        .navbar-wrap {
          position: fixed;
          top: 18px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 50;
          animation: float-in 0.5s cubic-bezier(0.16,1,0.3,1) forwards;
          width: max-content;
          max-width: calc(100vw - 24px);
        }

        .navbar-bar {
          background: #0a0a0a;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          box-shadow:
            0 1px 0 rgba(255,255,255,0.06) inset,
            0 20px 50px rgba(0,0,0,0.5),
            0 8px 24px rgba(0,0,0,0.35);
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .navbar-bar.scrolled {
          background: #050505;
          box-shadow:
            0 1px 0 rgba(255,255,255,0.08) inset,
            0 24px 60px rgba(0,0,0,0.6),
            0 0 0 1px rgba(56,189,248,0.08);
        }

        /* Logo */
        .logo-badge {
          display: flex;
          align-items: center;
          gap: 9px;
          text-decoration: none;
        }
        .logo-icon-wrap {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 3px;
          flex-shrink: 0;
        }
        .logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .logo-name {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: -0.01em;
          color: #ffffff;
          white-space: nowrap;
        }
        .logo-name em {
          font-style: normal;
          background: linear-gradient(90deg, #38bdf8, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Nav link text */
        .nav-item {
          font-size: 0.85rem;
          font-weight: 500;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          transition: color 0.2s ease;
          white-space: nowrap;
        }
        .nav-item:hover { color: rgba(255,255,255,0.95); }

        /* CTA — solid white pill button */
        .cta-button {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 20px;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.82rem;
          color: #0a0a0a;
          letter-spacing: 0;
          background: #ffffff;
          transition: all 0.2s ease;
          white-space: nowrap;
          text-decoration: none;
        }
        .cta-button:hover {
          background: #f2f2f2;
          transform: translateY(-1px);
        }
        .cta-button:active { transform: scale(0.97); }

        /* Mobile menu */
        .mobile-drawer {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 40;
          background: rgba(5,5,5,0.98);
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
          width: 30px;
          height: 30px;
          border-radius: 9999px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .hamburger-btn:hover { background: rgba(255,255,255,0.1); }
        .hamburger-line {
          display: block;
          width: 13px;
          height: 1.5px;
          background: rgba(255,255,255,0.8);
          border-radius: 9999px;
          transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
          transform-origin: center;
        }
      `}</style>

      {/* ── Floating rounded dark bar ── */}
      <div className="navbar-font navbar-wrap">
        <div className={`navbar-bar ${scrolled ? "scrolled" : ""}`}>
          <div className="flex items-center gap-7 pl-4 pr-2 py-2.5">

            {/* ── Logo (your actual logo.png) ── */}
            <Link href="/" className="logo-badge">
              <div className="logo-icon-wrap">
                <Image
                  src="/logo.png"
                  alt="AdityaX Innovation"
                  width={22}
                  height={22}
                  priority
                  className="logo-img"
                />
              </div>
              <span className="logo-name">
                Aditya<em>X</em>
              </span>
            </Link>

            {/* ── Desktop Nav ── */}
            <div className="hidden md:flex items-center gap-6">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="nav-item">
                  {link.label}
                </Link>
              ))}
            </div>

            {/* ── CTA — white pill button, no icon ── */}
            <Link href="/contact" className="cta-button">
              Get Quote
            </Link>

            {/* ── Hamburger ── */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="hamburger-btn md:hidden"
            >
              <span className="hamburger-line" style={{ transform: menuOpen ? "translateY(5.5px) rotate(45deg)" : undefined }} />
              <span className="hamburger-line" style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? "scaleX(0)" : undefined }} />
              <span className="hamburger-line" style={{ transform: menuOpen ? "translateY(-5.5px) rotate(-45deg)" : undefined }} />
            </button>
          </div>
        </div>
      </div>

      {/* ── Full-screen Mobile Drawer ── */}
      <div className={`mobile-drawer ${menuOpen ? "open" : "closed"}`}>
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-7 right-6 w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-all"
          aria-label="Close menu"
        >
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <nav className="flex flex-col items-center gap-3 mb-10">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="mobile-link"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          onClick={() => setMenuOpen(false)}
          className="cta-button"
          style={{ padding: "14px 40px", fontSize: "1rem" }}
        >
          Get a Free Quote →
        </Link>

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