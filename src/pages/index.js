import { useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
// Lazy load slides for code splitting
const slides = [
  dynamic(() => import("../slides/SlideTitle")),
  dynamic(() => import("../slides/SlideCosine")),
  dynamic(() => import("../slides/SlideCI")),
];
export default function Home() {
  const [idx, setIdx] = useState(0);
  // AnimatePresence will handle enter/exit animations
  const CurrentSlide = slides[idx];
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white select-none"
      style={{ minHeight: "100vh", fontFamily: "Inter, sans-serif" }}
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === "ArrowRight" || e.key === " ") setIdx(i => Math.min(i + 1, slides.length - 1));
        if (e.key === "ArrowLeft") setIdx(i => Math.max(i - 1, 0));
      }}
    >
      <div className="absolute top-4 right-6 text-lg text-white/60">@PandelisZ</div>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          className="w-full flex items-center justify-center"
          key={idx}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -80 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          style={{ width: "100%" }}
        >
          <CurrentSlide
            onNext={() => setIdx(i => Math.min(i + 1, slides.length - 1))}
            onPrev={() => setIdx(i => Math.max(i - 1, 0))}
            isLast={idx === slides.length - 1}
          />
        </motion.div>
      </AnimatePresence>
      <div className="mt-10 flex gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-10 rounded-full cursor-pointer transition-colors ${
              idx === i ? "bg-red-600" : "bg-white/20"
            }`}
            onClick={() => setIdx(i)}
            title={`Go to Slide ${i + 1}`}
          />
        ))}
      </div>
      <div className="absolute bottom-4 text-xs text-white/40">
        {idx + 1} / {slides.length}
      </div>
    </div>
  );
}