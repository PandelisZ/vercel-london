"use client";
import { useState, Suspense, useCallback } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";

// Dynamically import slides for code splitting
const slides = [
  dynamic(() => import("./slides/Slide1")),
  dynamic(() => import("./slides/Slide2")),
  dynamic(() => import("./slides/Slide3")),
];

export default function SlidesPage() {
  const [cur, setCur] = useState(0);

  // Allow keyboard arrows
  const onKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowRight" || e.key === " ") setCur((c) => Math.min(c+1, slides.length-1));
      if (e.key === "ArrowLeft") setCur((c) => Math.max(c-1, 0));
    },
    []
  );

  // Set up global key handler
  // eslint-disable-next-line
  if (typeof window !== "undefined") {
    window.onkeydown = onKeyDown;
  }

  const goNext = () => setCur((c) => Math.min(c+1, slides.length-1));
  const goPrev = () => setCur((c) => Math.max(c-1, 0));

  const SlideComponent = slides[cur];

  return (
    <main
      style={{
        background: "#111",
        color: "#fff",
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
        overflow: "hidden",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.section
          key={cur}
          initial={{ opacity: 0, y: 60, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -60, scale: 1.02 }}
          transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
          style={{
            width: "100vw",
            maxWidth: 800,
            minHeight: 400,
            padding: 48,
            borderRadius: 16,
            boxShadow: "0px 4px 42px rgba(0,0,0,0.45)",
            background: "#111",
            position: "relative",
          }}
          tabIndex={0}
          onClick={goNext}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <SlideComponent goNext={goNext} goPrev={goPrev} />
          </Suspense>
          <div
            style={{
              position: "absolute",
              bottom: 16,
              right: 32,
              fontSize: 16,
              opacity: 0.85,
              letterSpacing: 1,
            }}
          >
            <span style={{ marginRight: 6 }}>{cur + 1}/{slides.length}</span>
            <span style={{ fontSize: 14, opacity: 0.65 }}>click / ⬅️➡️</span>
          </div>
        </motion.section>
      </AnimatePresence>
    </main>
  );
}
