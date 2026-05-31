"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "niosv-sobel-fpga",
    num: "01",
    title: "Nios V Sobel FPGA ",
    subtitle: "Hardware/Software Co-design @ DE1-SoC",
    description: "Real-time image processing system using Nios V softcore. Compares software-based Sobel edge detection with a custom Verilog hardware accelerator via Avalon-MM, displaying results on an MTL2 LCD.",
    tags: [
      "FPGA",
      "Nios V",
      "Verilog",
      "Avalon-MM",
      "Image Processing",
      "Embedded C"
    ],
    color: "#00bcd4",
    icon: "▣",
    highlights: [
      "Custom Verilog Accelerator",
      "Nios V Co-design",
      "SDRAM Framebuffer",
      "Real-time Edge Detection"
    ],
  },

  {
    id: "nios2-sobel-fpga",
    num: "02",
    title: "Nios Ⅱ Sobel FPGA",
    subtitle: "Nios II + Qsys Performance Optimization",
    description: "High-performance edge detection on DE1-SoC. Features a custom Verilog Sobel IP with line buffers and direct SDRAM access (DMA) to achieve significant hardware acceleration over software implementations.",
    tags: [
      "FPGA",
      "Verilog",
      "Nios II",
      "DMA",
      "Sobel Filter",
      "SDRAM",
      "Embedded C"
    ],
    color: "#00bcd4",
    icon: "▧",
    highlights: [
      "Line Buffer Optimization",
      "Direct Memory Access (DMA)",
      "Nios II Integration",
      "Hardware vs Software Speedup"
    ],
  },
  {
    id: "hps-niosv-sobel-fpga",
    num: "03",
    title: "FPGA Image Pipeline",
    subtitle: "HPS + Nios V Hybrid System @ DE1-SoC",
    description: "Integrated vision system leveraging the Cyclone V HPS (Hard Processor System). Uses a custom Sobel IP within a Nios V environment to accelerate edge detection on an embedded memory-mapped framebuffer shared with the HPS.",
    tags: [
      "FPGA",
      "HPS",
      "Nios V",
      "Verilog",
      "Qsys",
      "Hardware Acceleration"
    ],
    color: "#00bcd4",
    icon: "▣",
    highlights: [
      "HPS-FPGA Integration",
      "Memory-mapped Framebuffer",
      "Custom Sobel IP",
      "Hybrid System Architecture"
    ],
  },
  {
    id: "gatekeepe",
    num: "01",
    title: "GateKeepe-32",
    subtitle: "Secure RISC-V Processor Core",
    description:
      "A fully custom 32-bit RISC-V (RV32I) processor core built in Verilog with hardware-level security mitigations. Features a BRAM-based Shadow Stack for ROP-chain prevention, a custom 16-entry MMU with per-page V/R/W/X/U protection flags ",
    tags: ["Verilog", "RISC-V", "FPGA", "Security", "MMU", "Icarus"],
    color: "var(--accent)",
    icon: "⬡",
    highlights: ["RV32I ISA", "BRAM Shadow Stack", "Non-Executable Memory", "ROP Prevention"],
  },
  {
    id: "spider",
    num: "02",
    title: "Spider Robot",
    subtitle: "8-DOF Autonomous Quadruped",
    description:
      "A full autonomous quadruped robot with 3-DOF inverse kinematics (law of cosines), WebSocket-controlled trot gait, and FreeRTOS tasks across both ESP32 cores. Features real-time ArUco marker pose estimation via ESP32-CAM, PS5 D-pad control, PCA9685 servo coordination, and a Python Flask server with OpenCV for QR/color-based autonomous navigation.",
    tags: ["ESP32", "IK/FK", "PCA9685", "OpenCV", "FreeRTOS", "ArUco"],
    color: "var(--accent2)",
    icon: "◈",
    highlights: ["Inverse Kinematics", "3-DOF per leg", "Real-time Vision", "Autonomous Nav"],
  },
  {
    id: "energy",
    num: "03",
    title: "Smart Energy System",
    subtitle: "PPO-Based Peak Shaving Agent",
    description:
      "A PPO reinforcement learning agent for ONEE time-of-use tariff optimization, featuring normalized reward signals, curriculum learning with threshold annealing (50%→100% over 500k steps), and inaction pressure. Integrated with a CNN-LSTM forecaster via Flask (port 4000) through an observation patcher. Achieves intelligent load shifting to minimize electricity costs.",
    tags: ["PPO", "CNN-LSTM", "Flask", "RL", "Python", "TensorFlow"],
    color: "var(--accent3)",
    icon: "◉",
    highlights: ["PPO Agent v3", "CNN-LSTM Forecast", "ONEE Tariffs", "Curriculum Learning"],
  },
  {
    id: "sobel",
    num: "04",
    title: "Edge Detection Pipeline",
    subtitle: "Sobel on Rock Pi (RK3399)",
    description:
      "Real-time Sobel edge detection applied to live video on a Rock Pi (RK3399) board, leveraging the big.LITTLE CPU architecture via pthreads. Uses FFmpeg for video capture/decode and implements heterogeneous CPU scheduling modes to maximize throughput, demonstrating advanced embedded Linux video processing.",
    tags: ["C", "pthreads", "FFmpeg", "RK3399", "big.LITTLE", "Linux"],
    color: "#00ff88",
    icon: "⊞",
    highlights: ["big.LITTLE Scheduling", "Live Video Processing", "Multi-threaded", "HPC Embedded"],
  },
  {
    id: "road",
    num: "05",
    title: "Road Sign Detection",
    subtitle: "Autonomous Vehicle Control",
    description:
      "An autonomous vehicular control system using real-time road sign detection and recognition in Python with OpenCV. Interfaces with LabVIEW to execute dynamic steering and speed adjustments based on detected environmental constraints. Complete closed-loop autonomous pipeline from vision to actuation.",
    tags: ["Python", "OpenCV", "LabVIEW", "CV", "Autonomous"],
    color: "#ffb627",
    icon: "⬟",
    highlights: ["Real-time Detection", "LabVIEW Bridge", "Closed-loop Control", "Computer Vision"],
  },
  {
    id: "energy-monitor",
    num: "06",
    title: "Energy Monitor",
    subtitle: "IoT Monitoring @ EST Agadir",
    description:
      "A comprehensive energy monitoring and analysis system deployed at EST Agadir. Integrates scientific measurement equipment to capture high-fidelity energy data, enabling enhanced operational efficiency and data-driven decision-making. Built during IoT Developer internship at P PRIME.",
    tags: ["IoT", "Sensors", "PLC", "Data Analysis", "Automation"],
    color: "#e040fb",
    icon: "⬢",
    highlights: ["High-fidelity Data", "Real-time Monitoring", "Deployed at EST Agadir", "IoT Stack"],
  },



];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      id="projects"
      style={{
        padding: "8rem 2rem",
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
              03 / Projects
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
            What I&apos;ve Built
          </h2>
        </motion.div>

        {/* Projects grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: "var(--surface)",
                border: `1px solid var(--border)`,
                borderRadius: "12px",
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = project.color;
                el.style.transform = "translateY(-6px)";
                el.style.boxShadow = `0 20px 60px ${project.color}20`;
                setActive(project.id);
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                setActive(null);
              }}
            >
              {/* Gradient top bar */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: `linear-gradient(90deg, ${project.color}, transparent)`,
                  opacity: active === project.id ? 1 : 0.4,
                  transition: "opacity 0.3s",
                }}
              />

              {/* Background glow */}
              <div
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "-40px",
                  width: "150px",
                  height: "150px",
                  background: `radial-gradient(circle, ${project.color}10, transparent 70%)`,
                  transition: "opacity 0.3s",
                  opacity: active === project.id ? 1 : 0,
                }}
              />

              {/* Header row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `${project.color}12`,
                    border: `1px solid ${project.color}30`,
                    borderRadius: "10px",
                    fontSize: "1.3rem",
                    color: project.color,
                  }}
                >
                  {project.icon}
                </div>
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.6rem",
                    color: "var(--text-dim)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {project.num}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.3rem",
                  color: "var(--text)",
                  marginBottom: "4px",
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.08em",
                  color: project.color,
                  marginBottom: "1rem",
                  textTransform: "uppercase",
                }}
              >
                {project.subtitle}
              </p>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.88rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                }}
              >
                {project.description}
              </p>

              {/* Highlights */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "6px",
                  marginBottom: "1.5rem",
                }}
              >
                {project.highlights.map((h) => (
                  <div
                    key={h}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                    }}
                  >
                    <div
                      style={{
                        width: "4px",
                        height: "4px",
                        borderRadius: "50%",
                        background: project.color,
                        flexShrink: 0,
                      }}
                    />
                    {h}
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "0.58rem",
                      letterSpacing: "0.08em",
                      fontWeight: "bold",
                      color: "var(--text-muted)",
                      padding: "4px 10px",
                      border: "1px solid var(--border)",
                      borderRadius: "3px",
                      background: "var(--bg)",
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
    </section>
  );
}
