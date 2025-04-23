"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  dynamic(() => import("./slides/TitleSlide")),
  dynamic(() => import("./slides/CosineSlide")),
  dynamic(() => import("./slides/PandelisSlide")),
  dynamic(() => import("./slides/CISlide")),
  dynamic(() => import("./slides/BrowserSlide")),
];

export default function SlideDeck() {
  const [slideIdx, setSlideIdx] = useState(0);
  const [dir, setDir] = useState(1);

  const Slide = slides[slideIdx];

  function nextSlide() {
    setDir(1);
    setSlideIdx((i) => Math.min(i + 1, slides.length - 1));
  }
  function prevSlide() {
    setDir(-1);
    setSlideIdx((i) => Math.max(i - 1, 0));
  }

  return (
    <div className="relative w-full max-w-3xl min-h-[70vh] mx-auto flex items-center justify-center overflow-hidden">
      <AnimatePresence initial={false} custom={dir} mode="wait">
        <motion.div
          key={slideIdx}
          custom={dir}
          initial={{ opacity: 0, x: dir > 0 ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: dir > 0 ? -100 : 100 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="absolute inset-0 flex flex-col w-full"
        >
          <Slide next={nextSlide} prev={prevSlide} />
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-6 left-0 right-0 flex justify-between px-8">
        <button
          onClick={prevSlide}
          disabled={slideIdx === 0}
          className="text-muted hover:text-accent transition"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          disabled={slideIdx === slides.length - 1}
          className="text-muted hover:text-accent transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}
