"use client";
import { motion } from "framer-motion";

export default function BrowserSlide() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-10 px-4 py-10">
      <motion.div
        className="w-[700px] max-w-full bg-[#18181b] rounded-2xl shadow-2xl border-2 border-accent/30"
        initial={{ scale: 0.89, y: 80, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 17 }}
      >
        <div className="flex items-center gap-2 bg-[#1e1e22] rounded-t-2xl px-6 py-2 border-b border-accent/10">
          <span className="w-3 h-3 bg-red-400 rounded-full inline-block"></span>
          <span className="w-3 h-3 bg-yellow-300 rounded-full inline-block"></span>
          <span className="w-3 h-3 bg-green-400 rounded-full inline-block"></span>
          <span className="ml-4 text-xs text-gray-400">localhost:3000/demo</span>
        </div>
        <div className="flex justify-center items-center h-[300px] md:h-[360px]">
          <motion.span
            className="block text-[42px] md:text-6xl font-black text-center text-white tracking-tight"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1.02 }}
            transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
          >
            {"→"} Vercel Automated <br /> <span className="text-accent">Demo</span> 🎉
          </motion.span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 0.6, y: 0 }}
        className="text-center text-sm text-accent mt-2"
      >
        Oh look, a browser! (Everything automated by CI ❤️)
      </motion.div>
    </div>
  );
}
