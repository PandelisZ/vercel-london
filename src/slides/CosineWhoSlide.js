import React from "react";
import { motion } from "framer-motion";
export default function CosineWhoSlide() {
  return (
    <motion.div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        padding: 32,
        textAlign: "center",
        pointerEvents: "none",
      }}
      initial={{ scale: 0.95, opacity: 0, y: 40 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 16 }}
    >
      <motion.h1
        style={{
          fontSize: "clamp(2rem,6vw,4.5rem)",
          fontWeight: 700,
          color: "#fff",
          letterSpacing: 0.01,
          marginBottom: 30,
          userSelect: "text",
        }}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.16 }}
      >
        Who (the heck) is{" "}
        <span style={{
          color: "#13f0ce",
          textShadow: "0 2px 24px #096b5f30",
        }}>cosine.sh?</span>
      </motion.h1>
      <motion.p
        style={{
          maxWidth: 700,
          fontSize: "1.7rem",
          lineHeight: 1.32,
          color: "#e7e7e7",
          marginBottom: 0,
          fontWeight: 400,
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.38 }}
      >
        We build superpowers for devs and teams. <br />
        <span style={{ color: "#50e3c2" }}>AI agents, code automation, next-gen CI/CD</span><br />
        <span style={{ fontSize: "1.21rem", color: "#d7d7d7", fontWeight: 300 }}>
          (tools to make you work <b>less</b> and ship <b>more</b>)
        </span>
        <br /><br />
        Trusted by engineering orgs doing AI-native workflows, pushing the limits of developer productivity.
      </motion.p>
    </motion.div>
  );
}