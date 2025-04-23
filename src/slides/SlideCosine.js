import { motion } from "framer-motion";
export default function SlideCosine({ onNext }) {
  return (
    <div className="max-w-2xl mx-auto flex flex-col items-center justify-center text-center">
      <motion.h2
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Who is <span style={{ color: "#F43F5E" }}>cosine.sh</span>?
      </motion.h2>
      <motion.ul
        className="text-2xl md:text-3xl leading-relaxed text-white/90 mb-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.22, delayChildren: 0.25 } }
        }}
      >
        <motion.li
          variants={{
            hidden: { opacity: 0, x: 60 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          🚀 AI + developer tools startup
        </motion.li>
        <motion.li
          variants={{
            hidden: { opacity: 0, x: 60 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          🤝 Building dev agents to automate code work
        </motion.li>
        <motion.li
          variants={{
            hidden: { opacity: 0, x: 60 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          💡 Used by fast-moving teams to ship code <span className="opacity-50">(~10x faster)</span>
        </motion.li>
      </motion.ul>
      <motion.button
        className="mt-10 px-10 py-4 text-lg rounded-full font-semibold bg-white text-black hover:bg-red-600 hover:text-white transition"
        whileTap={{ scale: 0.96 }}
        onClick={onNext}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
      >
        Next &rarr;
      </motion.button>
    </div>
  );
}