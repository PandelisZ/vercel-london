import React, { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
const lines = [
  "Why is CI so important for Dev Agents?",
  "",
  "$ agent run test",
  "→ fetching code from Git...",
  "→ running on Vercel CI...",
  "✔ tests passed in 8s",
  "",
  "CI is the backbone of self-improving, self-operating Dev bots.",
  "Without it, agents are flying blind.",
];
function AnimatedTerminal() {
  const [showLines, setShowLines] = useState([]);
  const controls = useAnimationControls();
  useEffect(() => {
    let active = true;
    setShowLines([]);
    let i = 0;
    function showNext() {
      if (!active || i >= lines.length) return;
      setShowLines(ls => [...ls, lines[i++]]);
      setTimeout(showNext, lines[i - 1].startsWith("→") || lines[i - 1].startsWith("✔") ? 430 : 650);
    }
    showNext();
    return () => { active = false; };
  }, []);
  return (
    <div
      style={{
        background: "#101217",
        borderRadius: "18px",
        boxShadow: "0 4px 48px #13131369",
        padding: "32px 38px",
        maxWidth: 700,
        margin: "0 auto",
        fontFamily: "Menlo, Monospace, SFMono-Regular",
        color: "#eaeaea",
        fontSize: "1.34rem",
        minHeight: 250,
      }}
      role="region"
      aria-label="Animated terminal demonstrating CI importance"
    >
      <motion.div style={{ display: "flex", flexDirection: "column" }}>
        {showLines.map((line, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0, duration: 0.44, type: "tween", ease: "easeOut" }}
            style={{
              whiteSpace: "pre-wrap",
              color:
                line.startsWith("$")
                  ? "#50e3c2"
                  : line.startsWith("→")
                  ? "#13f0ce"
                  : line.startsWith("✔")
                  ? "#47ff47"
                  : line.trim() === "" ? "#fff0" : "#fafafaea",
              fontWeight: line.startsWith("$") ? 600 : 400,
              letterSpacing: line.startsWith("$") ? 0.03 : 0.0,
              marginBottom: 2,
            }}
          >
            {line}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
export default function CISlide() {
  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.h1
        style={{
          fontSize: "clamp(2rem,5vw,3.5rem)",
          fontWeight: 800,
          color: "#fff",
          marginBottom: 32,
        }}
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.18 }}
      >
        Why is CI so important for Dev Agents?
      </motion.h1>
      <AnimatedTerminal />
    </div>
  );
}