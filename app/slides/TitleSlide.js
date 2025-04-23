"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TitleSlide({ next }) {
  const [crossed, setCrossed] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-full py-24 select-none cursor-pointer" onClick={() => setCrossed(true)}>
      <AnimatePresence>
        {!crossed ? (
          <motion.h1
            key="title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -100, skewY: 5, color: "#ff3232" }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="text-4xl md:text-6xl font-extrabold text-center mb-6 whitespace-pre-line leading-tight relative"
          >
            <span
              className="relative z-10"
              style={{
                textShadow:
                  "0 2px 12px #ff3232, 0 0 80px transparent, 0 0 1em #000",
              }}
            >
              Abusing Vercel&#39;s CI for fun and for profit
            </span>
          </motion.h1>
        ) : (
          <motion.h1
            key="new-title"
            initial={{ opacity: 0, x: 60, color: "#ff3232" }}
            animate={{ opacity: 1, x: 0, color: "#fff" }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ type: "spring", stiffness: 90, damping: 13 }}
            className="text-3xl md:text-5xl font-extrabold text-center mb-6"
          >
            <span aria-hidden className="relative block">
              <motion.span
                style={{
                  color: "#ff3232",
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: "50%",
                  height: "4px",
                  background: "#ff3232",
                  borderRadius: "1.5px",
                  opacity: crossed ? 1 : 0,
                  pointerEvents: "none",
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  delay: 0.15,
                  duration: 0.25,
                  ease: "easeInOut",
                }}
                layoutId="line"
              />
              <span style={{
                textDecoration: "line-through",
                textDecorationColor: "#ff3232",
              }}>
                Abusing Vercel&#39;s CI for fun and for profit
              </span>
            </span>
            <span className="block text-white transition-opacity duration-300" style={{
              opacity: crossed ? 1 : 0,
            }}>How We Built a Smarter Dev Agent<br />Using Vercel CI</span>
          </motion.h1>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-center"
      >
        <span className="text-lg text-accent font-mono tracking-wide">@PandelisZ</span>
      </motion.div>
      <motion.button
        type="button"
        onClick={crossed ? next : () => setCrossed(true)}
        className="mt-14 px-6 py-3 bg-accent/20 border border-accent text-accent font-medium rounded hover:bg-accent hover:text-black transition-colors"
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.18 }}
      >
        {crossed ? "Next" : "Strike Through"}
      </motion.button>
      <div className="text-gray-500 text-sm mt-10 select-none pointer-events-none">Click the title!</div>
    </div>
  );
}
