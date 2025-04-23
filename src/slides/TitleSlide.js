import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function TitleSlide({ onAdvance }) {
  const [crossed, setCrossed] = useState(false);
  const handleClickTitle = (e) => {
    e.stopPropagation();
    if (!crossed) setCrossed(true);
    else if (onAdvance) onAdvance();
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <div style={{ marginBottom: 60, textAlign: "center" }}>
        <AnimatePresence initial={false} mode="wait">
          {crossed ? (
            <motion.div
              key="smart-agent"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 14,
              }}
            >
              <span
                style={{
                  fontSize: "clamp(2rem,7vw,5.5rem)",
                  fontWeight: 800,
                  color: "#fff",
                  display: "inline-block",
                  marginBottom: 8,
                  lineHeight: 1.12,
                  textShadow: "0 2px 16px rgba(255,0,60,0.32)",
                }}
              >
                How We Built a <span style={{ color: "#13f0ce" }}>Smarter Dev Agent</span> <br />
                Using <span style={{ color: "#50e3c2" }}>Vercel CI</span>
              </span>
            </motion.div>
          ) : (
            <motion.div
              key="title"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 14,
              }}
            >
              <span
                style={{
                  fontSize: "clamp(2rem,7vw,5.5rem)",
                  fontWeight: 800,
                  color: "#fff",
                  display: "inline-block",
                  marginBottom: 8,
                  lineHeight: 1.1,
                  position: "relative",
                }}
                onClick={handleClickTitle}
                tabIndex={0}
                role="button"
                aria-pressed={crossed ? "true" : "false"}
                title="Click me!"
              >
                Abusing Vercel&apos;s CI for fun and for profit
                {!crossed && (
                  <motion.div
                    layoutId="cross"
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "42%",
                      width: "102%",
                      height: "14px",
                      pointerEvents: "none",
                      overflow: "visible",
                    }}
                  >
                    <motion.svg width="100%" height="14" style={{ display: "block" }}>
                      <motion.line
                        x1="0"
                        y1="7"
                        x2="100%"
                        y2="7"
                        stroke="#f01847"
                        strokeWidth="6"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.8, delay: 0.12, ease: "easeInOut" }}
                      />
                    </motion.svg>
                  </motion.div>
                )}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{
            marginTop: 24,
            fontSize: "clamp(1.2rem,2vw,2rem)",
            fontWeight: 400,
            color: "#E4E4E4",
            textAlign: "center",
            lineHeight: 1.2,
            opacity: 0.9,
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.33 }}
        >
          <span>@PandelisZ</span>
        </motion.div>
      </div>
      <motion.div
        style={{
          fontSize: 22,
          color: "#ccc",
          opacity: 0.42,
          fontWeight: 300,
          marginTop: 16,
          userSelect: "none",
        }}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.69 }}
      >
        <span>
          <kbd style={{
            background: "#232323",
            color: "#fff",
            borderRadius: 6,
            padding: "2px 12px",
            border: "1px solid #333",
            marginRight: 4
          }}>
            Click
          </kbd>
          to reveal
        </span>
      </motion.div>
    </div>
  );
}