"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Slide1({ goNext }) {
  const [clicked, setClicked] = useState(false);

  return (
    <section style={{ width: "100%" }}>
      <div style={{ textAlign: "center", marginBottom: 36 }}>
        <AnimatePresence mode="wait">
          {!clicked ? (
            <motion.h1
              key="title"
              initial={{ opacity: 0, y: 25, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -25, scale: 1.03 }}
              transition={{ duration: 0.4 }}
              style={{
                fontSize: 40,
                cursor: "pointer",
                position: "relative",
                display: "inline-block",
                whiteSpace: "pre-line",
                color: "#fff",
              }}
              onClick={() => setClicked(true)}
            >
              <span>
                Abusing vercel&apos;s CI for fun and for profit
                {/* red hover underline/cross-out */}
                <motion.div
                  layoutId="strike"
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: "38%",
                    height: 3,
                    background: clicked ? "#f33" : "transparent",
                    borderRadius: 2,
                    zIndex: 2,
                    pointerEvents: "none",
                  }}
                  animate={{
                    scaleX: clicked ? 1 : 0,
                    opacity: clicked ? 1 : 0,
                  }}
                  transition={{ duration: 0.25, type: "spring" }}
                />
              </span>
            </motion.h1>
          ) : (
            <motion.h1
              key="slide1t2"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -20 }}
              transition={{ duration: 0.4, delay: 0.09 }}
              style={{
                fontSize: 38,
                color: "#fff",
                minHeight: 120,
                pointerEvents: "none",
              }}
            >
              <span
                style={{
                  textDecoration: "none",
                  color: "#f33",
                  position: "relative",
                  fontWeight: 700,
                  fontSize: 16,
                  top: -8,
                  left: -23,
                  opacity: 0.85,
                }}
              >
                <motion.span
                  initial={{ x: -25, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.34, duration: 0.45 }}
                >
                  How We Built a Smarter Dev Agent 
                </motion.span>
                <br />
                <motion.span
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.54, duration: 0.55 }}
                  style={{
                    color: "#fff",
                    fontWeight: 400,
                    fontSize: 25,
                  }}
                >
                  Using Vercel CI
                </motion.span>
              </span>
            </motion.h1>
          )}
        </AnimatePresence>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.7 }}
        style={{
          textAlign: "center",
          color: "#aaa",
          fontFamily: "monospace",
          letterSpacing: 1.1,
        }}
      >
        <span>@PandelisZ</span>
      </motion.div>
    </section>
  );
}
