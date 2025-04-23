"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Slide1_Title() {
  const [clicked, setClicked] = useState(false);

  const crossOutVariants = {
    hidden: { width: 0 },
    visible: { width: "100%" },
  };

  return (
    <div style={{ width: "100%", textAlign: "center", cursor: "pointer" }}>
      <div style={{ marginTop: -80 }}>
        <AnimatePresence mode="wait">
          {!clicked && (
            <motion.h1
              key="main-title"
              style={{
                fontSize: "2.7rem",
                fontWeight: 900,
                color: "#fff",
                letterSpacing: "-1px",
                display: "inline-block",
                position: "relative",
                margin: 0,
              }}
              initial={{ scale: 0.93, opacity: 0.7 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 0.57 } }}
              exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.23 } }}
              onClick={() => setClicked(true)}
            >
              Abusing vercel&apos;s CI for fun and for profit
              {/* Animated cross out line */}
              <motion.span
                style={{
                  position: "absolute",
                  left: 0,
                  top: "65%",
                  height: 5,
                  background: "linear-gradient(90deg,#ee435b 65%,#d51832 100%)",
                  borderRadius: "3px",
                  zIndex: 2,
                  width: "100%",
                  pointerEvents: "none",
                }}
                initial="hidden"
                animate={clicked ? "visible" : "hidden"}
                variants={crossOutVariants}
                transition={{ duration: 0.5, delay: 0.1 }}
              />
            </motion.h1>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {clicked && (
            <motion.h1
              key="main-title-alternate"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }}
              exit={{ opacity: 0, scale: 1.03, y: -14, transition: { duration: 0.2 } }}
              style={{
                fontSize: "2.11rem",
                fontWeight: 900,
                color: "#ee435b",
                margin: 0,
                textShadow: "0 2px 10px #111, 0 0px 24px #0008",
              }}
            >
              How We Built a Smarter Dev Agent Using Vercel CI
            </motion.h1>
          )}
        </AnimatePresence>
      </div>
      <motion.div
        style={{ marginTop: 64, color: "#aaa", fontSize: "1.13rem", letterSpacing: 0.2, fontWeight: 400 }}
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.75 } }}
      >
        @PandelisZ
      </motion.div>
      <div style={{ marginTop: 36, color: "#555", fontSize: "1rem" }}>
        <span style={{ color: "#888" }}>Click the title!</span>
      </div>
    </div>
  );
}
