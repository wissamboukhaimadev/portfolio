"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const TITLE_WORDS = ["HARDWARE", "ROBOTICS", "EMBEDDED", "AI/ML"];

function AnimatedTitle() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let i = 0;
    let charIdx = 0;
    let erasing = false;
    let timeout: ReturnType<typeof setTimeout>;

    const tick = () => {
      const word = TITLE_WORDS[i % TITLE_WORDS.length];
      if (!erasing) {
        el.textContent = word.slice(0, ++charIdx);
        if (charIdx === word.length) {
          erasing = true;
          timeout = setTimeout(tick, 1800);
          return;
        }
      } else {
        el.textContent = word.slice(0, --charIdx);
        if (charIdx === 0) {
          erasing = false;
          i++;
        }
      }
      timeout = setTimeout(tick, erasing ? 60 : 100);
    };
    tick();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <span ref={ref} style={{ color: "var(--accent)" }} />
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "72px",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 80% 80% at center, black 40%, transparent 100%)",
        }}
      />

      {/* Radial glow center */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      {/* Accent orb top right */}
      <div
        className="animate-float"
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, rgba(123,97,255,0.12) 0%, transparent 70%)",
          top: "10%",
          right: "5%",
          pointerEvents: "none",
          animationDelay: "1s",
        }}
      />

      {/* Circuit decorations */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="circuit-line"
          style={{ top: `${25 + i * 25}%`, width: "40%", animationDelay: `${i * 1.3}s` }}
        />
      ))}

      {/* Floating tags */}
      {[
        { text: "ESP32", top: "20%", left: "8%", delay: "0s" },
        { text: "FPGA", top: "70%", left: "6%", delay: "0.8s" },
        { text: "RV32I", top: "80%", right: "8%", delay: "1.2s" },
        { text: "CNN-LSTM", top: "15%", right: "6%", delay: "0.4s" },
        { text: "VHDL", top: "45%", left: "4%", delay: "2s" },
        { text: "PCA9685", top: "50%", right: "4%", delay: "1.6s" },
      ].map((tag) => (
        <motion.div
          key={tag.text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: parseFloat(tag.delay) + 1.5, duration: 0.6 }}
          className="animate-float"
          style={{
            position: "absolute",
            top: tag.top,
            left: (tag as any).left,
            right: (tag as any).right,
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.6rem",
            color: "var(--text-dim)",
            letterSpacing: "0.15em",
            padding: "4px 10px",
            border: "1px solid var(--border)",
            borderRadius: "3px",
            background: "rgba(13,24,33,0.6)",
            animationDelay: tag.delay,
            backdropFilter: "blur(4px)",
          }}
        >
          {tag.text}
        </motion.div>
      ))}

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "900px",
          padding: "0 2rem",
        }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "2rem",
          }}
        >
          <div style={{ width: "40px", height: "1px", background: "var(--accent)", opacity: 0.6 }} />
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.25em",
              color: "var(--accent)",
              textTransform: "uppercase",
            }}
          >
            Wissam Boukhaima
          </span>
          <div style={{ width: "40px", height: "1px", background: "var(--accent)", opacity: 0.6 }} />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(3rem, 8vw, 7rem)",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            color: "var(--text)",
            marginBottom: "0.3em",
          }}
        >
          ENGINEER
          <br />
          <span
            style={{
              display: "inline-block",
              minWidth: "6ch",
              textAlign: "left",
            }}
          >
            <AnimatedTitle />
            <span
              className="animate-blink"
              style={{ color: "var(--accent)", marginLeft: "2px" }}
            >
              _
            </span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            fontWeight: 300,
            color: "var(--text-muted)",
            maxWidth: "580px",
            margin: "1.5rem auto 3rem",
            lineHeight: 1.7,
          }}
        >
          Building intelligent systems at the intersection of{" "}
          <span style={{ color: "var(--text)", fontWeight: 500 }}>hardware</span> and{" "}
          <span style={{ color: "var(--text)", fontWeight: 500 }}>software</span> —
          from autonomous robots to AI-powered embedded pipelines.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
        >
          <a
            href="#projects"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--bg)",
              background: "var(--accent)",
              padding: "14px 32px",
              borderRadius: "4px",
              textDecoration: "none",
              fontWeight: 700,
              transition: "all 0.2s",
              boxShadow: "0 0 30px rgba(0,212,255,0.3)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(0,212,255,0.5)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(0,212,255,0.3)";
            }}
          >
            View Projects
          </a>
          <a
            href="#contact"
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent)",
              background: "transparent",
              padding: "14px 32px",
              borderRadius: "4px",
              textDecoration: "none",
              fontWeight: 700,
              border: "1px solid var(--accent)",
              transition: "all 0.2s",
              opacity: 0.8,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.08)";
              (e.currentTarget as HTMLElement).style.opacity = "1";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.opacity = "0.8";
            }}
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          style={{
            marginTop: "5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.55rem",
              letterSpacing: "0.2em",
              color: "var(--text-dim)",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "60px",
              background: "linear-gradient(to bottom, var(--accent), transparent)",
              animation: "scan 2s ease-in-out infinite",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
