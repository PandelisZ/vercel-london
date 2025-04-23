import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function SlideTitle({ onNext }) {
  const [crossed, setCrossed] = useState(false);
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="mt-2" />
      <AnimatePresence mode="wait">
        {!crossed ? (
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white cursor-pointer select-none"
            style={{ lineHeight: 1.1, letterSpacing: -2 }}
            key="init-title"
            onClick={() => setCrossed(true)}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.06, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <span
              style={{
                display: "inline-block",
                position: "relative",
              }}
            >
              Abusing vercel&apos;s CI for fun and for profit
              {/* Red strike-through on hover/click */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={crossed ? { scaleX: 1 } : {}}
                transition={{
                  duration: 0.38,
                  delay: 0.13,
                }}
                style={{
                  height: 4,
                  background: "#F43F5E",
                  position: "absolute",
                  left: 0,
                  top: "57%",
                  width: "100%",
                  transformOrigin: "left",
                  borderRadius: 2,
                  pointerEvents: "none",
                  zIndex: 2,
                }}
              />
            </span>
          </motion.h1>
        ) : (
          <motion.h1
            key="next-title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 24 }}
            className="text-4xl md:text-5xl font-bold text-white text-center"
            style={{ color: "white", background: "transparent" }}
          >
            <span style={{ color: "#F43F5E", textDecoration: "line-through", paddingRight: 12 }}>
              Abusing vercel&apos;s CI for fun and for profit
            </span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.57, duration: 0.56 }}
              className="block"
              style={{
                color: "white",
                fontWeight: 700,
                letterSpacing: -0.5,
                marginTop: 18
              }}
            >
              How We Built a Smarter Dev Agent <br /> Using Vercel CI
            </motion.span>
          </motion.h1>
        )}
      </AnimatePresence>
      <motion.p
        className="text-lg mt-10 md:mt-16 text-white/80 tracking-wide"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        (click the title!)
      </motion.p>
      {crossed && (
        <button
          className="mt-14 px-10 py-4 text-lg rounded-full font-semibold bg-white text-black hover:bg-red-600 hover:text-white transition"
          onClick={onNext}
        >
          Next &rarr;
        </button>
      )}
    </div>
  );
}