"use client";
import { motion } from "framer-motion";

export default function Slide3_Pandelis() {
  return (
    <motion.div
      initial={{ scale: 0.96, opacity: 0, y: 18 }}
      animate={{ scale: 1, opacity: 1, y: 0, transition: { duration: 0.54 } }}
      style={{
        maxWidth: 650,
        margin: "0 auto",
        textAlign: "center",
        color: "#fff",
      }}
    >
      <motion.div style={{ fontSize: "2rem", fontWeight: 800, marginBottom: 10, color: "#fff" }}>
        <span style={{ color: "#ee435b" }}>Pandelis Zembashis</span> <span style={{ fontSize: "1.3rem", color: "#aaa" }}>@pandelisz</span>
      </motion.div>
      <div style={{ fontSize: "1.2rem", fontWeight: 500 }}>
        <ul style={{ listStyle: "circle", color: "#fff", margin: "0 auto 0 1em", textAlign: "left", maxWidth: 440 }}>
          <li>
            Lead engineer at <b>cosine.sh</b>, formerly founding ML at <span style={{ color: "#ee435b" }}>Graphcore</span> &amp; <span style={{ color: "#ee435b" }}>Wayve</span>
          </li>
          <li>
            <b>Open-source/code automation enthusiast</b>
          </li>
          <li>
            Researches LLM agents, dev tools, CI abuse (for <i>science</i>), and the weird but useful sides of deployment infra
          </li>
          <li>
            <span style={{ color: "#ee435b" }}>OSINT explorer, speaker, tinkerer</span>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
