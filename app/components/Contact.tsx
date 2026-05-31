"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const contactLinks = [
  {
    label: "Email",
    value: "boukhaimawissam2004@gmail.com",
    href: "mailto:boukhaimawissam2004@gmail.com",
    icon: "✉",
    color: "var(--accent)",
  },
  {
    label: "Phone",
    value: "+212 06 15 28 74 47",
    href: "tel:+212061528744",
    icon: "☏",
    color: "var(--accent2)",
  },
  {
    label: "GitHub",
    value: "github.com/wissamboukhaimadev",
    href: "https://github.com/wissamboukhaimadev",
    icon: "⌥",
    color: "var(--accent3)",
  },
  {
    label: "LinkedIn",
    value: "wissam boukhaima",
    href: "https://www.linkedin.com/in/wissam-boukhaima-957a9121b/",
    icon: "in",
    color: "#00ff88",
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      style={{
        padding: "8rem 2rem 6rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "5rem", textAlign: "center" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "1.5rem",
            }}
          >
            <div style={{ width: "60px", height: "1px", background: "var(--border)" }} />
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                color: "var(--accent)",
                textTransform: "uppercase",
              }}
            >
              05 / Contact
            </span>
            <div style={{ width: "60px", height: "1px", background: "var(--border)" }} />
          </div>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "var(--text)",
              lineHeight: 1,
              marginBottom: "1.5rem",
            }}
          >
            Let&apos;s Build
            <br />
            <span style={{ color: "var(--accent)" }}>Together</span>
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Open to exciting embedded systems, robotics, and AI projects.
            Whether it&apos;s a collaboration, internship, or full-time opportunity.
          </p>
        </motion.div>

        {/* Contact grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1rem",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {contactLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "1.5rem",
                textDecoration: "none",
                transition: "all 0.3s ease",
                cursor: "none",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = link.color;
                el.style.transform = "translateY(-4px)";
                el.style.boxShadow = `0 20px 40px ${link.color}20`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: `${link.color}12`,
                  border: `1px solid ${link.color}30`,
                  borderRadius: "10px",
                  fontSize: link.label === "LinkedIn" ? "0.8rem" : "1.2rem",
                  color: link.color,
                  fontFamily: link.label === "LinkedIn" ? "'Syne', sans-serif" : "inherit",
                  fontWeight: 800,
                  flexShrink: 0,
                }}
              >
                {link.icon}
              </div>

              {/* Text */}
              <div style={{ minWidth: 0 }}>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.58rem",
                    letterSpacing: "0.15em",
                    color: link.color,
                    textTransform: "uppercase",
                    marginBottom: "4px",
                  }}
                >
                  {link.label}
                </div>
                <div
                  style={{
                    fontSize: "0.82rem",
                    color: "var(--text-muted)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {link.value}
                </div>
              </div>

              {/* Arrow */}
              <div
                style={{
                  marginLeft: "auto",
                  color: "var(--text-dim)",
                  fontSize: "1rem",
                  flexShrink: 0,
                }}
              >
                →
              </div>
            </motion.a>
          ))}
        </div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          style={{
            textAlign: "center",
            marginTop: "4rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <span style={{ color: "var(--accent)", fontSize: "1rem" }}>◎</span>
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              color: "var(--text-dim)",
              textTransform: "uppercase",
            }}
          >
            Based in Agadir, Souss-Massa, Morocco
          </span>
        </motion.div>
      </div>
    </section>
  );
}
