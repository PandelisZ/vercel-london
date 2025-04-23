"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TitleSlide({ onDone }) {
  const [struck, setStruck] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[70vh] select-none cursor-pointer" onClick={() => { if (!struck) setStruck(true); else if (onDone) onDone(); }}>
      <AnimatePresence>
        {!struck && (
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white text-center"
            style={{ lineHeight: 1.2, position: "relative" }}
          >
            <span style={{ position: "relative", display: "inline-block" }}>
              <span>Abusing vercel's CI for fun and for profit</span>
              {/* Animated strike through */}
              <motion.div
                layoutId="strike"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: "60%",
                  height: 4,
                  background: "red",
                  transformOrigin: "left center",
                  borderRadius: 2,
                  zIndex: 5,
                }}
                transition={{ duration: 0.44, delay: 0.1 }}
              />
            </span>
          </motion.h1>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {struck && (
          <motion.div
            key="title2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.7 }}
            style={{ marginTop: 16 }}
            className="flex flex-col items-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center" style={{ lineHeight: 1.2 }}>
              How We Built a <span className="text-green-400">Smarter Dev Agent</span> <br />
              Using Vercel CI
            </h1>
            <p className="mt-6 text-lg text-neutral-300 font-mono select-text text-center">@PandelisZ</p>
            <p className="mt-1 text-md text-neutral-600 font-mono select-text text-center">Click anywhere to continue</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
