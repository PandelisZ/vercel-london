"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ciLines = [
  "[10:42:15] 🚀 Running Vercel CI for Pull Request #148",
  "[10:42:16] 📝 Checking code style...",
  "[10:42:17] ✅ Lint passed",
  "[10:42:19] 🔎 Running tests...",
  "[10:42:23] ✅ All tests passed (142 tests, 0 failures)",
  "[10:42:25] 📦 Bundling app with TurboPack...",
  "[10:42:28] 📦 Build complete!",
  "[10:42:30] 🔒 Deploy preview ready: https://ci-demo-p148.vercel.app",
  "[10:42:40] 🤖 Dev Agent patching sudden bug...",
  "[10:42:45] ✅ Autonomous fix deployed!",
];

export default function CISlide({ next }) {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible < ciLines.length) {
      const timeout = setTimeout(() => setVisible(visible + 1), 500);
      return () => clearTimeout(timeout);
    }
  }, [visible]);

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <motion.h2
        className="text-3xl font-bold mb-8 text-accent"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 70, damping: 14 }}
      >
        Why is CI crucial for Dev Agents?
      </motion.h2>
      <div className="max-w-2xl min-h-[280px] w-full flex items-center justify-center">
        <div className="bg-black border border-gray-700 rounded-md w-full text-md font-mono text-left overflow-hidden shadow-lg px-6 py-7">
          {ciLines.slice(0, visible).map((line, idx) => (
            <motion.div
              key={line}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.29, type: "spring" }}
              className="leading-snug"
            >
              <span
                className={
                  line.startsWith("[") && line.includes("✅")
                    ? "text-green-400"
                    : line.includes("bug") || line.includes("fix")
                    ? "text-accent"
                    : "text-gray-50"
                }
              >
                {line}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.button
        className="mt-10 px-6 py-3 bg-accent/20 border border-accent text-accent rounded hover:bg-accent hover:text-black font-medium transition"
        whileTap={{ scale: 0.95 }}
        onClick={next}
        transition={{ duration: 0.16 }}
        disabled={visible < ciLines.length}
      >
        {visible < ciLines.length ? "Please wait..." : "Next"}
      </motion.button>
    </div>
  );
}
