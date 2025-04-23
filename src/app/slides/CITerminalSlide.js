import Image from "next/image";
"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Some terminal prompt lines for animation
const terminalScript = [
  "$ git push origin main",
  "🚀 Vercel CI detected. Starting build...",
  "🔍 Checking environment and secrets...",
  "🧠 Loading dev agent...",
  "🤖 Agent: Running tests...",
  "✔️ 12 tests passed",
  "✨ Deploy complete! Powered by AI Agents.",
  "",
  "Ready for your next commit...",
];

export default function CITerminalSlide({ onNext }) {
  const [linesShown, setLinesShown] = useState(0);
  const timerRef = useRef();

  useEffect(() => {
    if (linesShown < terminalScript.length) {
      timerRef.current = setTimeout(() => setLinesShown(s => s + 1), 850 - 40*linesShown);
    }
    return () => clearTimeout(timerRef.current);
  }, [linesShown]);

  return (
    <div
      tabIndex={0}
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 400,
        cursor: linesShown === terminalScript.length ? "pointer" : "default",
        userSelect: "none",
      }}
      onClick={() => {
        if (linesShown === terminalScript.length && onNext) onNext();
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 35, scale: 0.93 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        style={{
          color: "#fff",
          fontWeight: 700,
          fontSize: "1.62rem",
          marginBottom: "1.4rem",
        }}
      >
        CI is the Heart of Developer Agents
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.95, delay: 0.25 }}
        style={{
          background: "linear-gradient(145deg, #070707 70%, #24182e 100%)",
          borderRadius: "14px",
          border: "1.2px solid #272727",
          boxShadow: "0 4px 40px #1a1a3344",
          color: "#d6ffe6",
          padding: "1.34rem 2.2rem 1.5rem 2.2rem",
          fontFamily: "Menlo, Monaco, 'Cascadia Mono', 'Consolas', monospace",
          fontSize: "1.11rem",
          minWidth: 320,
          maxWidth: 610,
          whiteSpace: "pre-wrap",
          minHeight: 270,
        }}
      >
        {terminalScript.slice(0, linesShown).map((line, idx) => (
          <motion.div
            key={line + idx}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.04 * idx }}
            style={{
              minHeight: 20,
              color:
                idx === 0
                  ? "#50fa7b"
                  : line.startsWith("$") || line.startsWith("Ready")
                  ? "#fff"
                  : line.includes("Agent")
                  ? "#00cfff"
                  : line.includes("passed")
                  ? "#50fa7b"
                  : line.includes("error")
                  ? "#ff5555"
                  : "#aab",
            }}
          >
            {line}
            {idx === linesShown - 1 && linesShown !== terminalScript.length && (
              <Cursor />
            )}
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{
          opacity: linesShown === terminalScript.length ? 0.7 : 0.15,
          y: 0,
        }}
        transition={{ duration: 0.7, delay: 1.25 }}
        style={{
          color: "#b6b6b6",
          fontSize: "0.95rem",
          marginTop: "1.6rem",
        }}
      >
        {linesShown === terminalScript.length ? "(Click anywhere to continue)" : "Running..."}
      </motion.div>
    </div>
  );
}

// Animated blinking terminal cursor
function Cursor() {
  return (
    <motion.span
      style={{
        display: "inline-block",
        background: "#fff",
        marginLeft: 2,
        width: 10,
        height: "1.15em",
        borderRadius: 2,
        verticalAlign: "middle",
        animation: "blink 1s step-end infinite",
      }}
      animate={{
        opacity: [1, 0.33, 1],
        transition: { repeat: Infinity, duration: 1.0, ease: "easeInOut" },
      }}
    ></motion.span>
  );
}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              src/app/page.js
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
