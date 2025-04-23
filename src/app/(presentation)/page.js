"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

// Dynamically import slides for code splitting and quick transitions
const slides = [
  dynamic(() => import("./slides/TitleSlide"), { ssr: false }),
  dynamic(() => import("./slides/CosineSlide"), { ssr: false }),
  dynamic(() => import("./slides/CISlide"), { ssr: false }),
];

export default function Presentation() {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    if (slide < slides.length - 1) setSlide((s) => s + 1);
  };

  const CurrentSlide = slides[slide];

  return (
    <main className="min-h-screen flex items-center justify-center bg-black transition-colors duration-700">
      <style>{`
        html, body, main {
          background: #000 !important;
          color: #fff !important;
        }
      `}</style>
      {/* AnimatePresence enables exit/enter transitions for slides */}
      <AnimatePresence mode="wait" initial={false}>
        <CurrentSlide key={slide} onDone={nextSlide} />
      </AnimatePresence>
      <div className="fixed top-6 left-0 w-full flex justify-center pointer-events-none select-none z-50">
        <div className="bg-black/55 text-white px-5 py-2 rounded-xl text-base font-mono border border-neutral-800 shadow">
          Vercel London ⚡️
        </div>
      </div>
    </main>
  );
}
