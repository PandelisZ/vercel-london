"use client";
import { motion } from "framer-motion";

export default function Slide2() {
  return (
    <section style={{ width: "100%" }}>
      <motion.h2
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ textAlign: "center", fontSize: 36, marginBottom: 22 }}
      >
        Who is <span style={{ color: "#fff", fontWeight: 900 }}>cosine.sh</span>?
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        style={{
          textAlign: "center",
          fontSize: 22,
          color: "#ddd",
          maxWidth: 600,
          margin: "0 auto",
          lineHeight: 1.6,
        }}
      >
        <p>
          We&apos;re a team obsessed with automating dev workflows and building AI-powered tools.<br/>
          <span style={{ color: "#fb3" }}>cosine.sh</span> is on a mission to make shipping code easier, faster, and smarter 
          – with the latest in cloud, AI, and automation.
        </p>
        <p>
          From custom dev agents to seamless CI magic,<br />
          we help engineers ship <span style={{ color: "#0ff" }}>great features</span> faster.
        </p>
      </motion.div>
    </section>
  );
}
