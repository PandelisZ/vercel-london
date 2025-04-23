"use client";
import { motion } from "framer-motion";

export default function Slide2() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 min-h-[70vh] py-20">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-3xl md:text-5xl font-black mb-5"
      >
        Who <span className="text-pink-400">@cosine.sh</span>?
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-lg md:text-2xl max-w-xl text-center text-white/90"
      >
        We&apos;re builders of smart developer infrastructure—RAG, LLM pipelines, Dev Automation &amp; AI tools.
        <span className="block mt-4 text-pink-400">We love solving hard problems for creative developers.</span>
      </motion.div>
    </div>
  );
}
