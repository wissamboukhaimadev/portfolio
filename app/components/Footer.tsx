"use client";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.6rem",
          letterSpacing: "0.12em",
          color: "var(--text-dim)",
          textTransform: "uppercase",
        }}
      >
        © 2026 Wissam Boukhaima
      </span>

      
    </footer>
  );
}
