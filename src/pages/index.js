import React, { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
const slideComponents = [
  dynamic(() => import("../slides/TitleSlide")),
  dynamic(() => import("../slides/CosineWhoSlide")),
  dynamic(() => import("../slides/CISlide")),
];
const slideCount = slideComponents.length;
const SLIDES_BG = "#000";
const SLIDES_FG = "#fff";
export default function SlideDeck() {
  const [slide, setSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const nextSlide = useCallback(() => {
    if (slide < slideCount - 1) {
      setDirection(1);
      setSlide(s => s + 1);
    }
  }, [slide]);
  const prevSlide = useCallback(() => {
    if (slide > 0) {
      setDirection(-1);
      setSlide(s => s - 1);
    }
  }, [slide]);
  // Keyboard navigation
  React.useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [nextSlide, prevSlide]);
  // Touch navigation (for mobile)
  React.useEffect(() => {
    let startX = null;
    const handleTouchStart = e => {
      startX = e.touches[0].clientX;
    };
    const handleTouchEnd = e => {
      if (startX != null) {
        const dx = e.changedTouches[0].clientX - startX;
        if (dx < -60) nextSlide();
        if (dx > 60) prevSlide();
        startX = null;
      }
    };
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [nextSlide, prevSlide]);
  const SlideComp = slideComponents[slide];
  return (
    <div
      style={{
        background: SLIDES_BG,
        color: SLIDES_FG,
        minHeight: "100vh",
        minWidth: "100vw",
        overflow: "hidden",
        position: "relative",
        fontFamily: "Inter, Arial, sans-serif",
        letterSpacing: "0.01em",
        transition: "background 0.3s",
      }}
      onClick={nextSlide}
    >
      <AnimatePresence
        initial={false}
        mode="wait"
      >
        <motion.div
          key={slide}
          initial={{ x: direction > 0 ? 1000 : -1000, opacity: 0, scale: 0.97 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{
            x: direction > 0 ? -1000 : 1000,
            opacity: 0,
            scale: 0.97,
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 25,
            mass: 0.6,
          }}
          style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            top: 0, left: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <React.Suspense fallback={null}>
            <SlideComp
              onAdvance={nextSlide}
            />
          </React.Suspense>
        </motion.div>
      </AnimatePresence>
      <div
        style={{
          position: "absolute",
          bottom: 16,
          right: 32,
          fontSize: 16,
          opacity: 0.5,
          letterSpacing: "0.07em",
          userSelect: "none",
        }}
      >
        {slide + 1} / {slideCount}
      </div>
    </div>
  );
}