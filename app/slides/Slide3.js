"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const terminalLines = [
  "$ vercel build .",
  "▶️  Collecting build information...",
  "▶️  Running CI checks...",
  "✔️  All dev agent checks passed!",
  "",
  "CI is the brain and backbone for autonomous code agents.",
];

export default function Slide3() {
  const [lineIdx, setLineIdx] = useState(0);

  useEffect(() => {
    if (lineIdx < terminalLines.length - 1) {
      const timeout = setTimeout(() => setLineIdx(lineIdx + 1), 750);
      return () => clearTimeout(timeout);
    }
  }, [lineIdx]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-white/90 text-2xl md:text-4xl font-bold mb-8 text-center"
      >
        CI powers every dev agent.
      </motion.h2>
      <motion.div
        className="w-full max-w-lg md:max-w-xl bg-neutral-900 border border-neutral-700 rounded-lg px-8 py-6 shadow-xl font-mono text-green-300 text-lg min-h-[160px]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.6 }}
      >
        <AnimatePresence>
          {terminalLines.slice(0, lineIdx + 1).map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              transition={{ duration: 0.25 }}
              className=""
            >
              {line}&nbsp;
              {i === lineIdx && lineIdx < terminalLines.length - 1 && (
                <motion.span
                  className="inline-block w-3 animate-pulse"
                  initial={{ opacity: 0.7 }}
                  animate={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ repeat: Infinity, duration: 0.7 }}
                >
                  █
                </motion.span>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      <div className="mt-6 text-white/40 text-sm">
        CI is the heartbeat for all our automation.
      </div>
    </div>
  );
}
