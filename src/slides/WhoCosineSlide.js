import { motion } from "framer-motion";
export default function WhoCosineSlide({ onAdvance }) {
  return (
    <div
      style={{
        height: "100vh",
        background: "black",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
      onClick={onAdvance}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 25 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.65, delay: 0.1 }}
        style={{
          textAlign: "center",
          padding: "0 32px",
          maxWidth: 700
        }}
      >
        <motion.h1
          initial={{ letterSpacing: "-0.18em" }}
          animate={{ letterSpacing: "0em" }}
          transition={{ duration: 0.85 }}
          style={{
            fontSize: "2.1rem",
            fontWeight: "700",
            color: "#fff",
            marginBottom: 14
          }}
        >
          Who is cosine.sh?
        </motion.h1>
        <motion.div
          style={{
            fontSize: "1.35rem",
            color: "#bbb",
            fontWeight: 400
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.17, duration: 0.8 }}
        >
          We're a research and engineering company designing cutting-edge dev agent platforms,
          with a focus on applied LLMs, code automation, and AI-native software delivery.<br /><br />
          Our mission: Augment human developers, ship code faster and smarter, and put AI in the critical path.
        </motion.div>
      </motion.div>
      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: 40,
          color: "#fff",
          fontSize: 18,
          opacity: 0.52
        }}
      >
        (Click to continue)
      </div>
    </div>
  );
}