"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 2rem",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "rgba(5,10,14,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(30,52,72,0.5)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        {/* Logo */}
        <a href="#hero" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "1.2rem",
              color: "var(--accent)",
              letterSpacing: "0.05em",
            }}
          >
            WB
          </span>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              color: "var(--text-muted)",
              marginLeft: "8px",
              letterSpacing: "0.15em",
            }}
          >
            .dev
          </span>
        </a>

        {/* Desktop links */}
        <div
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
          className="hidden-mobile"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                color: active === link.href ? "var(--accent)" : "var(--text-muted)",
                textDecoration: "none",
                textTransform: "uppercase",
                transition: "color 0.2s",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              color: "var(--bg)",
              background: "var(--accent)",
              padding: "8px 20px",
              borderRadius: "4px",
              textDecoration: "none",
              textTransform: "uppercase",
              fontWeight: 700,
              transition: "all 0.2s",
            }}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "var(--accent)",
            cursor: "none",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
          className="show-mobile"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: "var(--accent)",
                borderRadius: "2px",
                transition: "all 0.3s",
              }}
            />
          ))}
        </button>
      </motion.nav>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
