"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const terminalLines = [
  "$ git push origin main",
  "remote: Starting deployment to Vercel...",
  "remote: Running lint & tests...",
  "✔️  Build succeeded",
  "🚀 Deploy preview available at https://devagent.vercel.app",
  "",
  "# Dev agents depend on every CI signal.",
  "# It's how they stay smart and safe.",
];

export default function CISlide({ onDone }) {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < terminalLines.length) {
      const timeout = setTimeout(() => setVisibleLines((l) => l + 1), 500);
      return () => clearTimeout(timeout);
    }
  }, [visibleLines]);

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full min-h-[70vh] text-white"
      initial={{ opacity: 0, scale: 0.98, y: 70 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98, y: -70 }}
      transition={{ duration: 0.7 }}
      onClick={onDone}
      style={{ width: "100%", cursor: "pointer" }}
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-green-400 text-center">
        CI is the <span className="text-white">lifeblood</span> of dev agents
      </h2>
      <div
        className="bg-neutral-950 border border-neutral-800 rounded-xl p-6 font-mono text-lg md:text-xl w-full max-w-2xl shadow-lg"
        style={{
          minHeight: 280,
          boxShadow: "0 8px 48px -8px black",
        }}
      >
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.36, delay: i * 0.15 }}
            style={{
              whiteSpace: "pre-wrap",
              color: line.startsWith("$") || line.includes("remote:") ? "#57f287" : "#fff",
            }}
          >
            {line}
          </motion.div>
        ))}
        {visibleLines >= terminalLines.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 text-neutral-500 text-base italic"
          >
            Click anywhere to continue
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
