"use client";
import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";

const slides = [
  Slide1,
  Slide2,
  Slide3,
];

export default function Slides() {
  const [idx, setIdx] = useState(0);
  const nextSlide = useCallback(() => {
    setIdx((i) => Math.min(i + 1, slides.length - 1));
  }, []);
  const prevSlide = useCallback(() => {
    setIdx((i) => Math.max(i - 1, 0));
  }, []);

  // Keyboard navigation
  useCallback(() => {
    const handler = (e) => {
      if (e.key === " " || e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [nextSlide, prevSlide]);

  const Current = slides[idx];

  return (
    <div className="flex items-center justify-center min-h-screen transition-colors duration-500 bg-black text-white select-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: 90 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -90 }}
          transition={{ type: "spring", duration: 0.6 }}
          className="w-full max-w-2xl md:max-w-3xl px-6"
          onClick={nextSlide}
        >
          <Current />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
