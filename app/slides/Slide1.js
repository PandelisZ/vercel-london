"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Slide1() {
  const [crossed, setCrossed] = useState(false);

  return (
    <div className="flex flex-col gap-10 items-center justify-center min-h-[70vh] py-20">
      <AnimatePresence initial={false}>
        {!crossed && (
          <motion.h1
            key="main"
            onClick={() => setCrossed(true)}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.90, color: "#f87171" }}
            transition={{ duration: 0.5 }}
            className="text-center text-3xl md:text-5xl font-black cursor-pointer relative"
          >
            <span className="relative">
              Abusing vercel&apos;s CI for fun and for profit
              <motion.span
                layoutId="crossout"
                className="absolute left-0 top-1/2 w-full block h-[3px] bg-red-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                style={{
                  transformOrigin: "left",
                  pointerEvents: "none",
                }}
              ></motion.span>
            </span>
          </motion.h1>
        )}
        {crossed && (
          <motion.div
            key="reveal"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-2xl md:text-4xl font-bold mb-3">
              How We Built a{" "}
              <span className="bg-gradient-to-tr from-pink-400 via-red-500 to-amber-500 bg-clip-text text-transparent animate-gradient">
                Smarter Dev Agent
              </span>{" "}
              Using Vercel CI
            </h1>
            <div className="text-xl mt-7 text-gray-400">@PandelisZ</div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="text-md text-gray-500 tracking-wide mt-10 text-center">
        <span className="opacity-70">Click anywhere to continue</span>
      </div>
    </div>
  );
}
