"use client";
import { motion } from "framer-motion";

export default function Slide2_Cosine() {
  return (
    <motion.div
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.56 } }}
      style={{
        width: "100%",
        maxWidth: 640,
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <motion.h1
        style={{
          fontSize: "2.1rem",
          fontWeight: 800,
          marginBottom: 14,
          background: "linear-gradient(90deg, #fff 70%, #aaa 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "-1px",
        }}
      >
        cosine.sh
      </motion.h1>
      <motion.div
        style={{
          color: "#fff",
          fontSize: "1.25rem",
          fontWeight: 500,
          lineHeight: 1.55,
          margin: "0 auto",
        }}
      >
        We&apos;re a small, sharp, <b>engineering-first</b> research team.<br />
        We develop smarter code automation and dev infra.
        <br />
        <span style={{ color: "#ee435b", fontWeight: 700 }}>
          Making LLM dev agents&nbsp;real.
        </span>
        <br />
        <span style={{ fontSize: ".96em", color: "#eee" }}>
          (R&amp;D, open tools, agent research, and experiment with the wild edge of developer experience.)
        </span>
      </motion.div>
    </motion.div>
  );
}
