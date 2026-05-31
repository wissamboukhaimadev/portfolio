"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    icon: "{ }",
    color: " #00d4ff",
    skills: [
      { name: "C/C++ (Embedded)", level: 92 },
      { name: "Python / Flask", level: 88 },
      { name: "Verilog / HLS", level: 85 },
      { name: "JavaScript / TS", level: 72 },
    ],
  },
  {
    title: "Embedded Systems",
    icon: "⬡",
    color: "#7b61ff",
    skills: [
      { name: "ESP32 / FreeRTOS", level: 95 },
      { name: "Cyclone V HPS", level: 82 },
      { name: "ARM Cortex / Nios V", level: 85 },
      { name: "DSP / TMS320", level: 78 },
    ],
  },
  {
    title: "AI & ML",
    icon: "◈",
    color: "#ff6b35",
    skills: [
      { name: "TinyML / TFLite", level: 80 },
      { name: "PPO / RL Agents", level: 82 },
      { name: "CNN-LSTM Forecasters", level: 78 },
      { name: "OpenCV / Vision", level: 88 },
    ],
  },
  {
    title: "Hardware Design",
    icon: "⬣",
    color: "#00ff88",
    skills: [
      { name: "FPGA / Avalon-MM", level: 88 },
      { name: "RV32I Architecture", level: 85 },
      { name: "Shadow Stack / MMU", level: 80 },
      { name: "CATIA / AutoCAD", level: 70 },
    ],
  },
];

function SkillBar({
  name,
  level,
  color,
  delay,
  inView,
}: {
  name: string;
  level: number;
  color: string;
  delay: number;
  inView: boolean;
}) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "6px",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: "0.85rem",
            color: "var(--text-muted)",
            fontWeight: 400,
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.6rem",
            color: color.startsWith("var") ? "var(--text)" : color,
            letterSpacing: "0.1em",
          }}
        >
          {level}%
        </span>
      </div>
      <div
        style={{
          height: "3px",
          background: "var(--border)",
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
          style={{
            height: "100%",
            background: color.startsWith("var") 
              ? color 
              : `linear-gradient(90deg, ${color}, ${color}aa)`,
            borderRadius: "2px",
            boxShadow: color.startsWith("var")
              ? `0 0 8px ${color}`
              : `0 0 8px ${color}60`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      style={{
        padding: "8rem 2rem",
        background: "var(--surface)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(123,97,255,0.06) 0%, transparent 70%)",
          top: "50%",
          right: "-100px",
          transform: "translateY(-50%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }} ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "5rem" }}
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
              02 / Skills
            </span>
            <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
          </div>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: "var(--text)",
            }}
          >
            Technical Arsenal
          </h2>
        </motion.div>

        {/* Skill cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: catIdx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
                transition: "border-color 0.3s, transform 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = cat.color;
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Top accent line */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: `linear-gradient(90deg, ${cat.color}, transparent)`,
                }}
              />

              {/* Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "1.8rem",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `${cat.color}15`,
                    border: `1px solid ${cat.color}40`,
                    borderRadius: "8px",
                    fontSize: "1.1rem",
                    color: cat.color,
                    fontFamily: "'Space Mono', monospace",
                  }}
                >
                  {cat.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "var(--text)",
                  }}
                >
                  {cat.title}
                </h3>
              </div>

              {/* Skill bars */}
              {cat.skills.map((skill, skillIdx) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={cat.color}
                  delay={catIdx * 0.12 + skillIdx * 0.1 + 0.3}
                  inView={inView}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tools row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <p
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.2em",
              color: "var(--text-dim)",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Also familiar with
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {[
              "MATLAB",
              "AUTOCAD",
              "C/C++",
              "FreeRTOS",
              "DSP",
              "Flask",
              "Next.js",
              "pthreads",
              "CCS 12",
              "Icarus Verilog",
              "LabVIEW",
              "QUARTUS",
              "VIVADO",
              "NIOS V",
              "NIOS 2",
              "Caneco BT",
            ].map((tool) => (
              <span
                key={tool}
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.08em",
                  color: "var(--text-muted)",
                  padding: "6px 14px",
                  border: "1px solid var(--border)",
                  borderRadius: "100px",
                  background: "var(--surface)",
                  transition: "all 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                  (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
