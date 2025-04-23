"use client";
import { motion } from "framer-motion";

export default function PandelisSlide({ next }) {
  return (
    <div className="h-full flex flex-col items-center justify-center px-4 py-10">
      <motion.h2
        className="text-3xl font-extrabold text-accent mb-5"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
      >
        Who is Pandelis Zembashis?
      </motion.h2>
      <motion.p
        className="text-center text-lg max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.16, duration: 0.38 }}
      >
        <span className="font-semibold text-accent">@pandelisz</span> is the co-founder of <span className="font-semibold">cosine.sh</span>.
        <br />
        <span className="text-accent">Builder. Hacker. AI enthusiast.</span>
        <br />
        Former <span className="font-bold">Citadel</span> quant.<br />
        Loves using <span className="text-accent">code automation</span> to solve developer pain, build <span className="text-accent">AI-powered</span> workflows, and enable <span className="text-accent">radical shipping speed</span>.
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
