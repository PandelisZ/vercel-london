"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Slide1() {
  const [crossed, setCrossed] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="flex flex-col gap-10 items-center justify-center min-h-[70vh] py-20 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Floating decorative elements */}
      <motion.div
        className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-pink-500/5"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-indigo-500/5"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1 
        }}
      />

      {/* Vercel logo */}
      <motion.div
        variants={itemVariants}
        className="mb-6"
      >
        <svg width="70" height="70" viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="white"/>
        </svg>
      </motion.div>

      <AnimatePresence initial={false}>
        {!crossed && (
          <motion.div
            key="original-title"
            className="text-center relative"
            onClick={() => setCrossed(true)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.h1
              variants={itemVariants}
              className="text-center text-4xl md:text-6xl font-black cursor-pointer relative tracking-tight"
            >
              <span className="relative inline-block">
                Abusing vercel&apos;s CI 
                <motion.span
                  className="absolute left-0 top-1/2 w-0 block h-[4px] bg-red-500"
                  animate={{ width: crossed ? "100%" : "0%" }}
                  transition={{ duration: 0.5 }}
                  style={{ transformOrigin: "left" }}
                ></motion.span>
              </span>
              <br />
              <span className="relative inline-block mt-2">
                for fun and for profit
                <motion.span
                  className="absolute left-0 top-1/2 w-0 block h-[4px] bg-red-500"
                  animate={{ width: crossed ? "100%" : "0%" }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  style={{ transformOrigin: "left" }}
                ></motion.span>
              </span>
            </motion.h1>
            <motion.div 
              variants={itemVariants}
              className="text-2xl mt-8 text-gray-400 font-semibold"
            >
              @PandelisZ
            </motion.div>
            <motion.div
              className="absolute inset-0 w-full h-full flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.05, 0, 0.07, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                repeatDelay: 5 
              }}
            >
              <div className="text-white text-opacity-80 text-sm">Click to reveal</div>
            </motion.div>
          </motion.div>
        )}

        {crossed && (
          <motion.div
            key="reveal-title"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ 
              type: "spring",
              stiffness: 300, 
              damping: 20 
            }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
              How We Built a{" "}
              <motion.span 
                className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-gradient inline-block"
                animate={{ 
                  y: [0, -5, 0],
                  textShadow: [
                    "0 0 8px rgba(236, 72, 153, 0.3)",
                    "0 0 16px rgba(236, 72, 153, 0.5)",
                    "0 0 8px rgba(236, 72, 153, 0.3)"
                  ]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              >
                Smarter Dev Agent
              </motion.span>
              <br />Using Vercel CI
            </h1>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl mt-8 text-gray-300 font-semibold"
            >
              @PandelisZ
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        variants={itemVariants}
        className="text-md text-gray-500 tracking-wide mt-10 text-center absolute bottom-8"
      >
        <span className="opacity-70 flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12L12 16L16 12M12 8L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Tap to advance
        </span>
      </motion.div>
    </motion.div>
  );
}