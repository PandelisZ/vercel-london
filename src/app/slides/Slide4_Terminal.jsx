"use client";
import { motion } from "framer-motion";

const terminalLines = [
  { text: "vercel ci --agent-genius", color: "#fff" },
  { text: "🛠️  Running checks ...", color: "#ee435b" },
  { text: "🤖 Smart agent: Waiting for CI trigger...", color: "#59e3ba" },
  { text: "✔️  Code analysis complete.", color: "#fff" },
  { text: "🚀 Building agent deploy jobs ...", color: "#fff" },
  { text: "🏁 Done in 2.9s", color: "#ffc34d" },
];

export default function Slide4_Terminal() {
  return (
    <div
      style={{
        width: 520,
        maxWidth: "95vw",
        margin: "0 auto",
        padding: "32px 28px",
        background: "linear-gradient(120deg, #17181c 60%, #1b101b 100%)",
        borderRadius: 16,
        boxShadow: "0 2px 26px #000a, 0 1px 2px #2226",
        minHeight: 240,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.48 } }}
        style={{
          fontFamily: "Menlo, monospace",
          fontSize: "1.08rem",
          minHeight: 130,
          color: "#fff",
        }}
      >
        <div style={{ marginBottom: 12 }}>
          <span style={{ color: "#69a3ff" }}>Why is CI important to dev agents?</span>
        </div>
        <AnimateTerminal />
      </motion.div>
    </div>
  );
}

// Animate the terminal lines in sequence
function AnimateTerminal() {
  return (
    <div>
      {terminalLines.map((l, idx) => (
        <motion.div
          key={l.text}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.6 + 0.3, type: "spring", damping: 22, stiffness: 80 }}
          style={{ color: l.color, marginBottom: 3 }}
        >
          {l.text}
        </motion.div>
      ))}
    </div>
  );
}
