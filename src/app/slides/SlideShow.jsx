"use client";
import React, { useState, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Dynamically import slides for code splitting
const slides = [
  React.lazy(() => import("./Slide1_Title")),
  React.lazy(() => import("./Slide2_Cosine")),
  React.lazy(() => import("./Slide3_Pandelis")),
  React.lazy(() => import("./Slide4_Terminal")),
  React.lazy(() => import("./Slide5_Browser")),
];

const SLIDE_BG = "#000";
const SLIDE_COLOR = "#fff";
const slideContainerStyle = {
  background: SLIDE_BG,
  color: SLIDE_COLOR,
  width: "100vw",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  fontFamily: "Inter, sans-serif",
  position: "fixed",
  top: 0,
  left: 0,
};

export default function SlideShow() {
  const [slideIndex, setSlideIndex] = useState(0);
  const next = () => {
    if (slideIndex < slides.length - 1) setSlideIndex(slideIndex + 1);
  };
  const prev = () => {
    if (slideIndex > 0) setSlideIndex(slideIndex - 1);
  };

  // Allow advancing slides via click or right arrow; back via left arrow
  React.useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line
  }, [slideIndex]);

  const Slide = slides[slideIndex];

  return (
    <div style={slideContainerStyle} onClick={next}>
      <AnimatePresence mode="wait">
        <motion.div
          key={slideIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, y: -30, transition: { duration: 0.35 } }}
          style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Slide />
          </Suspense>
        </motion.div>
      </AnimatePresence>
      {/* Progress dots */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 12,
        }}
      >
        {slides.map((_, i) => (
          <div
            key={i}
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: i === slideIndex ? "#ee435b" : "#444",
              border: "2px solid #fff",
              transition: "background 0.2s",
            }}
          />
        ))}
      </div>
    </div>
  );
}
