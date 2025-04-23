"use client";
import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";

const slides = [
  Slide1,
  Slide2,
  Slide3,
];

// Navigation arrows component
const NavArrow = ({ direction, onClick }) => (
  <motion.div 
    className={`slide-nav ${direction === 'left' ? 'prev' : 'next'}`}
    onClick={onClick}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: direction === 'left' ? 'rotate(180deg)' : 'none' }}
    >
      <path 
        d="M9 6L15 12L9 18" 
        stroke="white" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  </motion.div>
);

// Progress dots component
const ProgressDots = ({ total, current, onDotClick }) => (
  <div className="slide-dots">
    {Array.from({ length: total }, (_, i) => (
      <motion.div
        key={i}
        className={`slide-dot ${i === current ? 'active' : ''}`}
        onClick={() => onDotClick(i)}
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          scale: i === current ? 1.2 : 1,
          backgroundColor: i === current ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.3)'
        }}
        transition={{ duration: 0.2 }}
      />
    ))}
  </div>
);

export default function Slides() {
  const [idx, setIdx] = useState(0);
  const [exitDirection, setExitDirection] = useState("left");
  const [enterDirection, setEnterDirection] = useState("right");

  const nextSlide = useCallback(() => {
    if (idx < slides.length - 1) {
      setExitDirection("left");
      setEnterDirection("right");
      setIdx(idx + 1);
    }
  }, [idx]);

  const prevSlide = useCallback(() => {
    if (idx > 0) {
      setExitDirection("right");
      setEnterDirection("left");
      setIdx(idx - 1);
    }
  }, [idx]);
  
  const goToSlide = useCallback((slideIndex) => {
    if (slideIndex === idx) return;
    setExitDirection(slideIndex > idx ? "left" : "right");
    setEnterDirection(slideIndex > idx ? "right" : "left");
    setIdx(slideIndex);
  }, [idx]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === " " || e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [nextSlide, prevSlide]);

  const Current = slides[idx];

  const slideVariants = {
    enter: (direction) => ({
      x: direction === "right" ? 70 : -70,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        bounce: 0.2,
      },
    },
    exit: (direction) => ({
      x: direction === "left" ? -70 : 70,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.4,
      },
    }),
  };

  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden bg-black text-white select-none">
      {idx > 0 && <NavArrow direction="left" onClick={prevSlide} />}
      {idx < slides.length - 1 && <NavArrow direction="right" onClick={nextSlide} />}
      
      <ProgressDots
        total={slides.length}
        current={idx}
        onDotClick={goToSlide}
      />
      
      <AnimatePresence initial={false} custom={exitDirection} mode="wait">
        <motion.div
          key={idx}
          custom={enterDirection}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="w-full max-w-3xl md:max-w-4xl px-6 py-12"
        >
          <Current />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}