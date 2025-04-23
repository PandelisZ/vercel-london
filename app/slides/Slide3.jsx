"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const terminalLines = [
  { text: "$ run-dev-agent --ci-vercel", delay: 500 },
  { text: "[CI] Connecting to Vercel...", delay: 800 },
  { text: "[CI] Running quality checks (lint, test, typecheck)...", delay: 1200 },
  { text: "[AI] Reviewing all code diffs...", delay: 1200 },
  { text: "[AI] Generating code suggestions...", delay: 1100 },
  { text: "[CI] Deploying preview (now.sh)...", delay: 1000 },
  { text: "[OK] 🎉 CI checks passed, PR auto-merged!", delay: 1300 },
];

export default function Slide3() {
  const [shown, setShown] = useState([]);
  const [playing, setPlaying] = useState(false);
  const curIdx = useRef(0);

  useEffect(() => {
    setShown([]);
    curIdx.current = 0;
    setPlaying(true);
    const animate = () => {
      if (curIdx.current < terminalLines.length) {
        setTimeout(() => {
          setShown((shown) => [
            ...shown,
            terminalLines[curIdx.current].text,
          ]);
          curIdx.current += 1;
          animate();
        }, terminalLines[curIdx.current].delay);
      } else {
        setPlaying(false);
      }
    };
    animate();
    // eslint-disable-next-line
  }, []);

  return (
    <section style={{ width: "100%", }}>
      <motion.h2
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{ textAlign: "center", fontSize: 32, marginBottom: 32 }}
      >
        Why is <span style={{ color: "#0af" }}>CI</span> Critical for Dev Agents?
      </motion.h2>
      <div
        style={{
          background: "#15171a",
          color: "#0f0",
          borderRadius: 10,
          maxWidth: 690,
          margin: "18px auto",
          fontFamily: "Menlo, monospace",
          fontSize: 19,
          boxShadow: "0px 2px 32px rgba(0,0,0,0.22)",
          padding: 28,
          minHeight: 270,
          lineHeight: 1.55,
        }}
      >
        <motion.div
          initial={false}
          animate={{ opacity: 1 }}
        >
          {shown.map((line, i) => (
            <motion.div
              key={line}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.05 * i,
                duration: 0.21,
                type: "tween",
              }}
              style={{
                marginBottom: 7
              }}
            >
              {line}
              {i === shown.length - 1 && playing && (
                <motion.span
                  animate={{
                    opacity: [0, 1, 0.4, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.8,
                  }}
                  style={{
                    display: "inline-block",
                    background: "#0f0",
                    width: 8, height: 21,
                    marginLeft: 3,
                    borderRadius: 2,
                  }}
                ></motion.span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 0.76, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        style={{ textAlign: "center", color: "#bbb", maxWidth: 650, margin: "auto" }}
      >
        <span>
          CI is the brain and nervous system for AI dev agents.<br />
          Without great CI pipelines and automation: Dev Agents are <b style={{ color: "#f33" }}>blind</b>!
        </span>
      </motion.div>
    </section>
  );
}
