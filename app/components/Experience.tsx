"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    role: "Automation Engineer",
    company: "Zenith Pharma",
    period: "2025.07",
    type: "Internship",
    color: "var(--accent)",
    description:
      "Optimised a Prisma 01W3 checkweigher using a Siemens PLC to improve accuracy, reliability, and automation in the pharmaceutical production line.",
    tags: ["Siemens PLC", "Automation", "Industrial"],
  },
  {
    role: "IoT Developer",
    company: "P PRIME",
    period: "2024.06",
    type: "Internship",
    color: "var(--accent2)",
    description:
      "Final Year Project — Energy Monitoring System at EST Agadir. Implemented a comprehensive energy monitoring system by integrating scientific measurement equipment to capture high-fidelity data.",
    tags: ["IoT", "Energy Monitoring", "Data Analysis", "Sensors"],
  },
  {
    role: "AutoCAD Designer",
    company: "Erger Sarl",
    period: "2023.07",
    type: "Internship",
    color: "var(--accent3)",
    description:
      "Engineered electrical distribution systems for an industrial fertilizer production facility using AutoCAD and Caneco BT, ensuring international safety standards compliance.",
    tags: ["AutoCAD", "Caneco BT", "Electrical Design", "Industrial"],
  },
];

const education = [
  {
    degree: "Engineering Diploma",
    field: "Electrical & Embedded Systems",
    school: "ENSA Agadir",
    period: "2024 – Present",
    color: "var(--accent)",
    highlights: ["Raspberry Pi", "ARM Cortex", "RISC-V", "DSP", "FPGA"],
  },
  {
    degree: "DUT",
    field: "Electrical & Electronics Engineering",
    school: "EST Agadir",
    period: "2022 – 2024",
    color: "var(--accent2)",
    highlights: ["Electrical Systems", "PIC Microcontroller", "Circuit Design"],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      style={{
        padding: "8rem 2rem",
        background: "var(--surface)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }} ref={ref}>
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
              04 / Experience
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
            Journey & Education
          </h2>
        </motion.div>

        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem" }}
          className="exp-grid"
        >
          {/* Experience Column */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                color: "var(--accent)",
                textTransform: "uppercase",
                marginBottom: "2rem",
              }}
            >
              Work Experience
            </motion.h3>

            <div style={{ position: "relative" }}>
              {/* Timeline line */}
              <div
                style={{
                  position: "absolute",
                  left: "15px",
                  top: 0,
                  bottom: 0,
                  width: "1px",
                  background: "var(--border)",
                }}
              />

              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                  style={{
                    paddingLeft: "48px",
                    marginBottom: "3rem",
                    position: "relative",
                  }}
                >
                  {/* Timeline dot */}
                  <div
                    style={{
                      position: "absolute",
                      left: "9px",
                      top: "4px",
                      width: "13px",
                      height: "13px",
                      borderRadius: "50%",
                      background: exp.color,
                      boxShadow: `0 0 12px ${exp.color}`,
                      border: "2px solid var(--bg)",
                    }}
                  />

                  {/* Period */}
                  <div
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.58rem",
                      letterSpacing: "0.12em",
                      color: exp.color,
                      marginBottom: "6px",
                      textTransform: "uppercase",
                    }}
                  >
                    {exp.period} · {exp.type}
                  </div>

                  {/* Role */}
                  <h4
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: "var(--text)",
                      marginBottom: "2px",
                    }}
                  >
                    {exp.role}
                  </h4>
                  <p
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.08em",
                      color: "var(--text-muted)",
                      marginBottom: "10px",
                    }}
                  >
                    @ {exp.company}
                  </p>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.7,
                      marginBottom: "12px",
                    }}
                  >
                    {exp.description}
                  </p>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: "0.58rem",
                          color: "var(--text-dim)",
                          padding: "3px 10px",
                          border: "1px solid var(--border)",
                          borderRadius: "3px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                color: "var(--accent2)",
                textTransform: "uppercase",
                marginBottom: "2rem",
              }}
            >
              Education
            </motion.h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {education.map((edu, i) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "1.8rem",
                    position: "relative",
                    overflow: "hidden",
                    transition: "border-color 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = edu.color;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: `linear-gradient(90deg, ${edu.color}, transparent)`,
                    }}
                  />

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: "12px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: "0.6rem",
                          color: edu.color,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          marginBottom: "4px",
                        }}
                      >
                        {edu.degree}
                      </div>
                      <h4
                        style={{
                          fontFamily: "'Syne', sans-serif",
                          fontWeight: 700,
                          fontSize: "1rem",
                          color: "var(--text)",
                        }}
                      >
                        {edu.field}
                      </h4>
                    </div>
                    <span
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.58rem",
                        color: "var(--text-dim)",
                        letterSpacing: "0.08em",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {edu.period}
                    </span>
                  </div>

                  <p
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.65rem",
                      color: "var(--text-muted)",
                      marginBottom: "1rem",
                    }}
                  >
                    {edu.school}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {edu.highlights.map((h) => (
                      <span
                        key={h}
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: "0.58rem",
                          color: "var(--text-dim)",
                          padding: "3px 10px",
                          border: "1px solid var(--border)",
                          borderRadius: "3px",
                        }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Certifications note */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                style={{
                  background: "rgba(0,212,255,0.04)",
                  border: "1px solid rgba(0,212,255,0.12)",
                  borderRadius: "12px",
                  padding: "1.5rem",
                  display: "flex",
                  gap: "12px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    fontSize: "1.2rem",
                    lineHeight: 1,
                    marginTop: "2px",
                  }}
                >
                  🏆
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      color: "var(--text)",
                      marginBottom: "4px",
                    }}
                  >
                    SRG 3rd Edition — Robotics Competition
                  </p>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                      lineHeight: 1.6,
                    }}
                  >
                    Participated with full wiring and firmware for an 8-legged autonomous robot with
                    color detection navigation.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .exp-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
