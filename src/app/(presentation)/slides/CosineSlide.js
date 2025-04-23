"use client";
import { motion } from "framer-motion";

export default function CosineSlide({ onDone }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-full min-h-[70vh] text-white text-center"
      initial={{ opacity: 0, scale: 0.98, y: 70 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98, y: -70 }}
      transition={{ duration: 0.7 }}
      onClick={onDone}
      style={{ cursor: "pointer" }}
    >
      <h1 className="text-3xl md:text-5xl font-bold">Who is <span className="text-blue-600">cosine.sh</span>?</h1>
      <p className="mt-8 text-xl md:text-2xl max-w-2xl">
        We’re a research and engineering startup <br /> working on <span className="text-green-400">AI agents</span> and developer productivity.<br /><br />
        <span className="text-orange-400">We build smart dev tools, infra, and autonomous workflows.</span>
      </p>
      <div className="mt-8 text-neutral-500 text-sm italic">Click anywhere to continue</div>
    </motion.div>
  );
}
