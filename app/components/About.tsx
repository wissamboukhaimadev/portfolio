"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "3+", label: "Years of Building" },
  { value: "9+", label: "Major Projects" },
  { value: "6+", label: "Tech Stacks" },
  { value: "3", label: "Languages" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "10rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* Left: Portrait area */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "relative" }}
        >
          {/* Decorative frame */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "420px",
              aspectRatio: "4/5",
              margin: "0 auto",
            }}
          >
            {/* Corner accents */}
            {[
              { top: -8, left: -8 },
              { top: -8, right: -8 },
              { bottom: -8, left: -8 },
              { bottom: -8, right: -8 },
            ].map((pos, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: "24px",
                  height: "24px",
                  borderTop: (pos as any).top !== undefined ? "2px solid var(--accent)" : "none",
                  borderBottom: (pos as any).bottom !== undefined ? "2px solid var(--accent)" : "none",
                  borderLeft: (pos as any).left !== undefined ? "2px solid var(--accent)" : "none",
                  borderRight: (pos as any).right !== undefined ? "2px solid var(--accent)" : "none",
                  ...pos,
                }}
              />
            ))}

            {/* Main box */}
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1.5rem",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Circuit pattern bg */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `
                    linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)
                  `,
                  backgroundSize: "30px 30px",
                }}
              />
              {/* Initials */}
              <div style={{ position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--accent), var(--accent2))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2.5rem",
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    color: "var(--bg)",
                    boxShadow: "0 0 40px rgba(0,212,255,0.4)",
                    marginBottom: "1.5rem",
                  }}
                >
                  WB
                </div>
                <p
                  style={{
                    textAlign: "center",
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    color: "var(--accent)",
                    textTransform: "uppercase",
                  }}
                >
                  Agadir, Morocco
                </p>
              </div>

              {/* Status badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(0,212,255,0.08)",
                  border: "1px solid rgba(0,212,255,0.2)",
                  padding: "8px 16px",
                  borderRadius: "100px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "#00ff88",
                    borderRadius: "50%",
                    boxShadow: "0 0 8px #00ff88",
                  }}
                  className="animate-pulse-glow"
                />
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.6rem",
                    letterSpacing: "0.12em",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                  }}
                >
                  Available for projects
                </span>
              </div>
            </div>

            {/* Floating stats */}
            <div
              style={{
                position: "absolute",
                bottom: "-30px",
                right: "-30px",
                background: "var(--surface2)",
                border: "1px solid var(--border)",
                padding: "16px 20px",
                borderRadius: "8px",
                backdropFilter: "blur(10px)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
              }}
            >
              <p
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "2rem",
                  fontWeight: 800,
                  color: "var(--accent)",
                  lineHeight: 1,
                }}
              >
                ENSA
              </p>
              <p
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.55rem",
                  letterSpacing: "0.12em",
                  color: "var(--text-muted)",
                  marginTop: "4px",
                }}
              >
                Engineering Student
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.25em",
                color: "var(--accent)",
                textTransform: "uppercase",
              }}
            >
              01 / About
            </span>
            <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
          </div>

          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              color: "var(--text)",
            }}
          >
            Building at the Edge
            <br />
            <span style={{ color: "var(--accent)" }}>of Hardware</span>
          </h2>

          <p
            style={{
              color: "var(--text-muted)",
              lineHeight: 1.8,
              fontSize: "1rem",
              marginBottom: "1rem",
            }}
          >
            I'm an electrical and embedded systems engineering student at ENSA Agadir,
            passionate about designing intelligent hardware systems that bridge the physical
            and digital worlds.
          </p>
          <p
            style={{
              color: "var(--text-muted)",
              lineHeight: 1.8,
              fontSize: "1rem",
              marginBottom: "2.5rem",
            }}
          >
            From designing secure RISC-V processor cores in Verilog to building autonomous
            quadruped robots with inverse kinematics, I thrive on complexity — combining
            low-level hardware control with high-level intelligence.
          </p>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1rem",
              marginBottom: "2.5rem",
            }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                style={{
                  textAlign: "center",
                  padding: "16px 8px",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.6rem",
                    color: "var(--accent)",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.5rem",
                    fontWeight:"bold",
                    letterSpacing: "0.1em",
                    color: "var(--text-muted)",
                    marginTop: "6px",
                    textTransform: "uppercase",
                  }}
                >
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Languages */}
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            {[
              { lang: "Arabic", level: "Native" },
              { lang: "English", level: "C1" },
              { lang: "French", level: "B2" },
            ].map((l) => (
              <div
                key={l.lang}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 14px",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  background: "var(--surface)",
                }}
              >
                <span style={{ color: "var(--text)", fontSize: "0.85rem" }}>{l.lang}</span>
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.6rem",
                    color: "var(--accent)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {l.level}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </section>
  );
}
