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

        /* ── Whole bar is white now ── */
        .navbar-bar {
          background: #ffffff;
          border: 1px solid rgba(10,10,10,0.06);
          border-radius: 20px;
          box-shadow:
            0 1px 0 rgba(255,255,255,0.6) inset,
            0 20px 50px rgba(0,0,0,0.18),
            0 8px 24px rgba(0,0,0,0.10);
          transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .navbar-bar.scrolled {
          background: #ffffff;
          box-shadow:
            0 1px 0 rgba(255,255,255,0.6) inset,
            0 24px 60px rgba(0,0,0,0.22),
            0 0 0 1px rgba(30,111,255,0.08);
        }

        /* Logo */
        .logo-badge {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .logo-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
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
          font-size: 1.05rem;
          letter-spacing: -0.01em;
          color: #0a0a0a;
          white-space: nowrap;
        }
        .logo-name em {
          font-style: normal;
          background: linear-gradient(90deg, #1E6FFF, #38bdf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Nav link text */
        .nav-item {
          font-size: 0.85rem;
          font-weight: 500;
          color: rgba(10,10,10,0.55);
          text-decoration: none;
          transition: color 0.2s ease;
          white-space: nowrap;
        }
        .nav-item:hover { color: rgba(10,10,10,0.95); }

        /* CTA — dark pill button, since bar is now white */
        .cta-button {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 20px;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.82rem;
          color: #ffffff;
          background: #0a0a0a;
          transition: all 0.2s ease;
          white-space: nowrap;
          text-decoration: none;
        }
        .cta-button:hover {
          background: #1a1a1a;
          transform: translateY(-1px);
        }
        .cta-button:active { transform: scale(0.97); }

        /* Mobile menu */
        .mobile-drawer {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          z-index: 40;
          background: rgba(255,255,255,0.98);
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
          color: rgba(10,10,10,0.15);
          text-decoration: none;
          letter-spacing: -0.03em;
          transition: all 0.25s ease;
          line-height: 1.15;
          display: block;
          text-align: center;
        }
        .mobile-link:hover {
          color: #0a0a0a;
          text-shadow: 0 0 30px rgba(30,111,255,0.15);
          transform: translateX(8px);
        }

        /* Hamburger */
        .hamburger-btn {
          width: 30px;
          height: 30px;
          border-radius: 9999px;
          background: rgba(10,10,10,0.04);
          border: 1px solid rgba(10,10,10,0.08);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .hamburger-btn:hover { background: rgba(30,111,255,0.06); }
        .hamburger-line {
          display: block;
          width: 13px;
          height: 1.5px;
          background: rgba(10,10,10,0.8);
          border-radius: 9999px;
          transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
          transform-origin: center;
        }
      `}</style>

      {/* ── Floating rounded white bar ── */}
      <div className="navbar-font navbar-wrap">
        <div className={`navbar-bar ${scrolled ? "scrolled" : ""}`}>
          <div className="flex items-center gap-7 pl-3 pr-2 py-2">

            {/* ── Logo ── */}
            <Link href="/" className="logo-badge">
              <div className="logo-icon-wrap">
                <Image
                  src="/logo.png"
                  alt="AdityaX Innovation"
                  width={40}
                  height={40}
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

            {/* ── CTA ── */}
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
          className="absolute top-7 right-6 w-10 h-10 flex items-center justify-center rounded-full border border-black/10 text-black/40 hover:text-black hover:border-black/30 transition-all"
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
              "linear-gradient(rgba(10,10,10,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(10,10,10,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>
    </>
  );
}