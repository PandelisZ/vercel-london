import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// Simple animated terminal text
const terminalLines = [
  { t: 0, txt: "agent@cosine $ ", cmd: "run start-ci" },
  { t: 1000, txt: "Detecting changes..." },
  { t: 2200, txt: "Found 4 new PRs to review." },
  { t: 3300, txt: "Scheduling builds on Vercel CI..." },
  { t: 4300, txt: "[✓] Build #184YZ1 started" },
  { t: 5000, txt: "[✓] Tests running (agent coverage mode)" },
  { t: 6100, txt: "[✓] Lint checks passed" },
  { t: 7100, txt: "[✓] Agent Suggestions Generated" },
  { t: 8100, txt: "$ All tasks complete, see dev_agent_report.md" },
];
function AnimatedTerminal({ onDone }) {
  const [visible, setVisible] = useState(0);
  useEffect(() => {
    if (visible < terminalLines.length) {
      const nextTime =
        terminalLines[visible + 1]?.t - terminalLines[visible]?.t || 800;
      const timeout = setTimeout(() => setVisible(v => v + 1), nextTime);
      return () => clearTimeout(timeout);
    } else if (onDone) {
      setTimeout(onDone, 800);
    }
  }, [visible, onDone]);
  return (
    <div
      className="bg-black text-green-400 font-mono rounded-lg border border-green-700 shadow-lg p-7 min-w-[340px] max-w-[520px] w-full mx-auto mt-8"
      style={{
        fontSize: "1.22rem",
        transition: "box-shadow 0.3s",
        boxShadow: "0 6px 44px 0 rgba(26,255,122,0.06)"
      }}
    >
      {terminalLines.slice(0, visible + 1).map((line, i) =>
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.43 }}
          style={{ whiteSpace: "pre" }}
        >
          {line.txt}
          {line.cmd && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.28 }}
              className="text-white"
            >
              {line.cmd}
            </motion.span>
          )}
        </motion.div>
      )}
      <div>
        {visible < terminalLines.length - 1 && (
          <motion.span
            key={visible}
            animate={{ opacity: [0.9, 0.1, 0.9] }}
            transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
            className="inline-block ml-1 w-3 h-5 bg-green-500"
            style={{ borderRadius: 1 }}
          >
            &nbsp;
          </motion.span>
        )}
      </div>
    </div>
  );
}
export default function SlideCI({ onNext }) {
  const [done, setDone] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <motion.h2
        className="text-4xl font-bold mb-7 text-center"
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.86 }}
      >
        Why <span className="text-green-400">CI</span> matters for Dev Agents
      </motion.h2>
      <motion.div
        className="text-lg text-white/80 max-w-2xl text-center mb-2"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.23, duration: 0.6 }}
      >
        Dev agents <span className="text-green-400">live &amp; die</span> by the feedback <br />from your <b>CI system</b>.<br />
        <span className="text-white/60">If your CI is slow, agents are slow.<br/>If your CI is clever, agents are clever!</span>
      </motion.div>
      <AnimatedTerminal onDone={() => setDone(true)} />
      {done && (
        <motion.button
          className="mt-14 px-10 py-4 text-lg rounded-full font-semibold bg-white text-black hover:bg-green-500 hover:text-black transition"
          whileTap={{ scale: 0.97 }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.36 }}
          onClick={onNext}
        >
          Next &rarr;
        </motion.button>
      )}
    </div>
  );
}