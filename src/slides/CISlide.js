import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const terminalLines = [
  "💡 Why is CI crucial for dev agents?",
  "",
  "1. Code Quality & Trust",
  "2. Incremental Iteration",
  "3. Feedback Loops",
  "4. Fast Rollbacks",
  "",
  "Let's see it in action:",
  "",
  "Running: pnpm test",
  "✓ Lint passed",
  "✓ 134 tests passed",
  "✓ Build succeeded",
  "",
  "Deploy preview created at https://vercel.app/cosine-dev-agent"
];
export default function CISlide({ onAdvance }) {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (shown < terminalLines.length) {
      const t = setTimeout(() => setShown((v) => v + 1), shown === 0 ? 1000 : 250 + Math.random() * 150);
      return () => clearTimeout(t);
    }
  }, [shown]);
  return (
    <div
      style={{
        height: "100vh",
        background: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
      onClick={onAdvance}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 35 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.75 }}
        style={{
          textAlign: "center",
          marginBottom: 24,
          fontSize: "2.2rem",
          fontWeight: 700,
          color: "#ff0044"
        }}
      >
        CI: The Heartbeat of Developer Agents
      </motion.div>
      <motion.div
        style={{
          background: "#111",
          padding: "30px 38px",
          borderRadius: 18,
          boxShadow: "0 10px 48px #000a",
          minHeight: 330,
          minWidth: 470,
          fontFamily: "monospace",
          fontSize: "1.15rem",
          color: "#5ef7c0",
          letterSpacing: "0.01em",
          lineHeight: 1.78,
          outline: "1.5px solid #363636",
          userSelect: "none"
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.23, duration: 0.7 }}
      >
        {terminalLines.slice(0, shown).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.037 + 0.08, duration: 0.28 }}
            style={{
              color: line.includes("✓") ? "#7dffa9" : line.startsWith("💡") ? "#ff0044" : undefined,
              fontWeight: line.includes("💡") ? 600 : 400
            }}
          >
            {line}
          </motion.div>
        ))}
        {shown >= terminalLines.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              color: "#aaa",
              fontSize: 17,
              marginTop: 18,
              textAlign: "center",
              opacity: 0.6
            }}
          >
            (Click to restart or continue)
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}