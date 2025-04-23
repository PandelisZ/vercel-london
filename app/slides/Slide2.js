"use client";
import { motion } from "framer-motion";

export default function Slide2() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  return (
    <motion.div 
      className="flex flex-col items-center justify-center gap-12 min-h-[70vh] py-20 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-10 right-20 w-32 h-32 rounded-full bg-pink-500/5"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 20, 0],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-blue-500/5"
        animate={{ 
          scale: [1, 1.2, 1],
          y: [0, -20, 0],
          opacity: [0.2, 0.4, 0.2] 
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1 
        }}
      />

      <motion.h2
        variants={itemVariants}
        className="text-3xl md:text-5xl font-black mb-5 tracking-tight relative"
      >
        Who is{" "}
        <motion.span 
          className="text-pink-400 relative"
          animate={{ 
            color: ["#f472b6", "#ec4899", "#f472b6"],
            textShadow: [
              "0 0 6px rgba(244, 114, 182, 0.2)",
              "0 0 12px rgba(236, 72, 153, 0.4)",
              "0 0 6px rgba(244, 114, 182, 0.2)"
            ]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        >
          @cosine.sh
          <motion.span 
            className="absolute -bottom-2 left-0 w-full h-[2px] bg-pink-500/60"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{ transformOrigin: "left" }}
          />
        </motion.span>
        ?
      </motion.h2>

      <motion.div
        variants={itemVariants}
        className="flex flex-col gap-5 max-w-2xl"
      >
        <motion.div 
          className="p-6 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm"
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.1)"
          }}
          transition={{ duration: 0.2 }}
        >
          <motion.p className="text-lg md:text-2xl text-center text-white/90 leading-relaxed">
            We build smart developer infrastructure—RAG, LLM pipelines, Dev Automation &amp; AI tools.
          </motion.p>
        </motion.div>

        <motion.div 
          className="mt-2 p-6 bg-gradient-to-br from-pink-500/10 to-transparent rounded-xl border border-pink-500/20"
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 10px 25px -5px rgba(236, 72, 153, 0.1)"
          }}
          transition={{ duration: 0.2 }}
        >
          <motion.p 
            className="text-center text-xl text-pink-400"
            animate={{ 
              opacity: [0.8, 1, 0.8] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity
            }}
          >
            We love solving hard problems for creative developers.
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className="flex gap-4 mt-6"
      >
        {["ML", "RAG", "LLM", "DevTools"].map((tag, i) => (
          <motion.span 
            key={tag} 
            className="inline-block px-3 py-1 bg-white/5 rounded-full text-sm border border-white/10"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            initial={{ 
              opacity: 0, 
              x: -20,
              rotate: -5
            }}
            animate={{ 
              opacity: 1, 
              x: 0,
              rotate: 0
            }}
            transition={{ 
              delay: 1.5 + (i * 0.2),
              type: "spring"
            }}
          >
            #{tag}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}