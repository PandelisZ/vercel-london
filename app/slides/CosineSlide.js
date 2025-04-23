"use client";
import { motion } from "framer-motion";

export default function CosineSlide({ next }) {
  return (
    <div className="flex flex-col justify-center items-center h-full text-2xl gap-8 px-4 py-12">
      <motion.h2
        className="font-extrabold text-3xl text-accent mb-6"
        initial={{ opacity: 0, scale: 0.9, y: 65 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 60, damping: 13 }}
      >
        cosine.sh
      </motion.h2>
      <motion.p
        className="max-w-xl text-lg leading-relaxed text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.45 }}
      >
        We build composable <span className="text-accent">AI devtools</span> for next-gen software workflows. <br />
        <span className="bg-accent/10 px-2 rounded text-accent font-bold">Open-source</span>, <span className="text-accent">cloud-native</span>, <span className="bg-accent/10 px-2 rounded text-accent font-bold">developer-first</span>.<br />
        <br />
        {"⚡️"} Our mission: Ship smarter, <span className="text-accent">automated developer agents</span> that help humans build at the speed of thought!
      </motion.p>
      <motion.button
        className="mt-10 px-6 py-3 bg-accent/20 border border-accent text-accent rounded hover:bg-accent hover:text-black font-medium transition"
        whileTap={{ scale: 0.95 }}
        onClick={next}
        transition={{ duration: 0.16 }}
      >
        Next
      </motion.button>
    </div>
  );
}
