"use client";
import { motion } from "framer-motion";

export default function Slide5_Browser() {
  return (
    <div
      style={{
        width: 560,
        minHeight: 320,
        maxWidth: "96vw",
        margin: "0 auto",
        background: "#18181b",
        borderRadius: 18,
        boxShadow: "0 2px 26px #0007, 0 2px 14px #ff003333",
        border: "2.3px solid #222",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: 22,
      }}
    >
      {/* Fake browser chrome */}
      <div
        style={{
          height: 35,
          width: "100%",
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          background: "#29292b",
          display: "flex",
          alignItems: "center",
          paddingLeft: 16,
          gap: 9,
          marginBottom: 23,
          borderBottom: "1px solid #222",
        }}
      >
        <div style={{ width: 13, height: 13, borderRadius: "50%", background: "#f44" }} />
        <div style={{ width: 13, height: 13, borderRadius: "50%", background: "#fd4" }} />
        <div style={{ width: 13, height: 13, borderRadius: "50%", background: "#4e4" }} />
        <div style={{ color: "#888", marginLeft: 20, fontWeight: 500 }}>vercel-demo.cosine.sh</div>
      </div>
      <motion.div
        initial={{ scale: 0.89, opacity: 0.7, y: 38 }}
        animate={{
          scale: 1,
          opacity: 1,
          y: 0,
          transition: { duration: 0.74, type: "spring", bounce: 0.19 },
        }}
        style={{
          color: "#fff",
          fontSize: "2.7rem",
          fontWeight: 800,
          textAlign: "center",
          lineHeight: 1.06,
          textShadow: "0 2px 10px #2a2",
          letterSpacing: "-2px",
          marginTop: 36,
        }}
      >
        The Demo
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.74, duration: 0.42 } }}
          style={{ fontSize: "1.1rem", color: "#eee", marginTop: 28, fontWeight: 500, textShadow: "none" }}
        >
          CI can <span style={{ color: "#ee435b" }}>drive interactive code agents</span>.
        </motion.div>
      </motion.div>
    </div>
  );
}
