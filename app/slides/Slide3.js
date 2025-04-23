"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const terminalLines = [
  "$ vercel build .",
  "▶️  Collecting build information...",
  "▶️  Running CI checks...",
  "▶️  Verifying agent code paths...",
  "✔️  All dev agent checks passed!",
  "",
  "CI is the brain and backbone for autonomous code agents.",
];

export default function Slide3() {
  const [lineIdx, setLineIdx] = useState(0);
  const [showInsight, setShowInsight] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (lineIdx < terminalLines.length - 1) {
      const timeout = setTimeout(() => setLineIdx(lineIdx + 1), 750);
      return () => clearTimeout(timeout);
    } else if (lineIdx === terminalLines.length - 1) {
      const timeout = setTimeout(() => setShowInsight(true), 1500);
      return () => clearTimeout(timeout);
    }
  }, [lineIdx]);

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ scale: [1, 1.02, 1], opacity: [0.95, 1, 0.95] });
    };
    sequence();
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  const typingVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "100%",
      transition: { 
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="flex flex-col items-center justify-center min-h-[70vh] py-16 relative max-w-xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[250px] bg-gradient-to-t from-pink-900/10 to-transparent opacity-40"
        animate={{
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Matrix-style background detail */}
      <div className="absolute inset-0 overflow-hidden z-[-1] opacity-[0.15]">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: -500 }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            repeatType: "loop",
            ease: "linear" 
          }}
          className="flex flex-wrap justify-center text-[10px] leading-none opacity-30"
        >
          {Array.from({ length: 600 }, (_, i) => (
            <div key={i} className="mx-3 my-1">
              {Math.random() > 0.5 ? "0" : "1"}
            </div>
          ))}
        </motion.div>
      </div>
      
      <motion.h2
        variants={itemVariants}
        className="text-white/90 text-3xl md:text-5xl font-bold mb-8 text-center leading-tight tracking-tight max-w-xl mx-auto"
      >
        CI powers{" "}
        <motion.span 
          className="relative"
          animate={{ 
            color: ["#f8fafc", "#e2e8f0", "#f8fafc"]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        >
          every dev agent
          <motion.span 
            className="absolute -bottom-1 left-0 w-full h-[2px] bg-white/40"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ transformOrigin: "left" }}
          />
        </motion.span>
      </motion.h2>
      
      <motion.div
        className="w-full max-w-xl mx-auto bg-neutral-900/80 border border-neutral-700 rounded-lg px-8 py-6 shadow-xl font-mono text-green-300 text-lg min-h-[240px] relative overflow-hidden terminal-shadow"
        variants={itemVariants}
        animate={controls}
        transition={{ 
          repeat: Infinity, 
          repeatType: "reverse", 
          duration: 8 
        }}
      >
        <div className="flex items-center mb-4 border-b border-neutral-700 pb-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="ml-4 text-xs text-white/50">vercel-terminal</div>
        </div>
        
        <motion.div className="space-y-2">
          <AnimatePresence>
            {terminalLines.slice(0, lineIdx + 1).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`${i === terminalLines.length - 1 && "mt-4 text-white font-semibold"}`}
              >
                {i === terminalLines.length - 1 ? (
                  <motion.div
                    variants={typingVariants}
                    initial="hidden"
                    animate="visible"
                    className="overflow-hidden whitespace-nowrap"
                  >
                    {line}
                  </motion.div>
                ) : (
                  <>{line}&nbsp;
                    {i === lineIdx && lineIdx < terminalLines.length - 1 && (
                      <motion.span
                        className="inline-block w-3"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                      >
                        █
                      </motion.span>
                    )}
                  </>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Terminal glitch effects */}
        <motion.div
          className="absolute inset-0 bg-green-500/5 pointer-events-none"
          animate={{ 
            opacity: [0, 0.1, 0],
            scaleY: [1, 1.02, 1]
          }}
          transition={{ 
            repeat: Infinity, 
            repeatType: "mirror", 
            duration: 0.2,
            repeatDelay: 5
          }}
        />
      </motion.div>

      <AnimatePresence>
        {showInsight && (
          <motion.div 
            className="mt-10 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.div
              className="p-5 bg-gradient-to-r from-pink-900/20 to-indigo-900/20 rounded-lg border border-white/10"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-lg text-center">
                CI is more than just tests - it's the{" "}
                <span className="text-pink-400 font-semibold">
                  heartbeat and intelligence
                </span>{" "}
                for autonomous dev agents.
              </p>
            </motion.div>
            
            <motion.div
              className="mt-6 flex gap-3 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              {["CI", "DevAgents", "Automation", "Vercel"].map((tag, i) => (
                <motion.span
                  key={tag}
                  className="text-xs px-3 py-1 bg-white/5 rounded-full border border-white/10"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5 + (i * 0.1) }}
                >
                  #{tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
