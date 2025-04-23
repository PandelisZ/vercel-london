import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function TitleSlide({ onAdvance }) {
  const [crossedOut, setCrossedOut] = useState(false);
  return (
    <div
      style={{
        height: "100vh",
        background: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <AnimatePresence mode="wait">
        {!crossedOut ? (
          <motion.div
            key="title"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0, transition: { duration: 0.45 } }}
            transition={{ type: "spring", stiffness: 120, damping: 17, duration: 0.75 }}
            style={{
              fontSize: "2.7rem",
              fontWeight: 700,
              textAlign: "center",
              position: "relative",
              cursor: "pointer",
              minHeight: 120
            }}
            onClick={() => setCrossedOut(true)}
          >
            <span style={{ position: "relative", zIndex: 1 }}>
              Abusing vercel&apos;s CI for fun and for profit
            </span>
            {crossedOut ? (
              <motion.div
                key="strike"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                style={{
                  position: "absolute",
                  left: 0,
                  top: "45%",
                  height: 8,
                  width: "100%",
                  background: "red",
                  borderRadius: 4,
                  zIndex: 2,
                  transformOrigin: "left center",
                  opacity: 0.8,
                  pointerEvents: "none"
                }}
                transition={{ duration: 0.38 }}
              />
            ) : null}
          </motion.div>
        ) : (
          <motion.div
            key="retitle"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: "spring", stiffness: 90, damping: 13, duration: 0.5 }}
            style={{
              fontSize: "2.7rem",
              fontWeight: 700,
              textAlign: "center",
              color: "white",
              minHeight: 120
            }}
            onClick={onAdvance}
          >
            <span
              style={{
                color: "#ff0044"
              }}
            >
              How We Built a Smarter Dev Agent
            </span>
            <br />
            <span
              style={{
                color: "white",
                fontWeight: 400,
                fontSize: "1.4rem"
              }}
            >
              Using Vercel CI
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{
          position: "absolute",
          bottom: 40,
          right: 40,
          color: "#fff",
          fontSize: 22,
          opacity: 0.65
        }}
      >
        @PandelisZ
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: crossedOut ? 1 : 0 }}
        transition={{ delay: crossedOut ? 0.4 : 0, duration: 0.4 }}
        style={{
          position: "absolute",
          bottom: 40,
          left: 40,
          color: "#fff",
          fontSize: 16,
          opacity: crossedOut ? 0.52 : 0,
          pointerEvents: "none"
        }}
      >
        (Click to continue)
      </motion.div>
    </div>
  );
}