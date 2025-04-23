import Image from "next/image";
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function TitleSlide({ onNext }) {
  const [crossed, setCrossed] = useState(false);

  return (
    <div
      style={{
        textAlign: "center",
        width: "100%",
        cursor: "pointer",
        userSelect: "none",
        padding: "2rem 0",
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
      }}
      onClick={() => {
        if (!crossed) setCrossed(true);
        else if (onNext) onNext(); // advance if once crossed out
      }}
    >
      <AnimatePresence mode="wait">
        {!crossed ? (
          <motion.h1
            key="main-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -20,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            transition={{ duration: 0.6, type: "spring" }}
            style={{
              fontSize: "2.2rem",
              color: "white",
              fontWeight: 700,
              margin: 0,
              position: "relative",
              display: "inline-block",
              paddingBottom: "0.5rem",
            }}
          >
            Abusing vercel&apos;s CI for fun and for profit
            {/* Cross-out effect, to appear on click */}
            {crossed && (
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  delay: 0.15,
                }}
                style={{
                  position: "absolute",
                  left: 0,
                  top: "53%",
                  width: "100%",
                  height: 5,
                  background: "red",
                  borderRadius: 4,
                  zIndex: 2,
                  transformOrigin: "left center",
                  pointerEvents: "none",
                }}
                layoutId="cross"
              />
            )}
          </motion.h1>
        ) : (
          <motion.h1
            key="subtitle"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, scale: 1.07 }}
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              color: "#fff",
              background:
                "linear-gradient(90deg, #f81ce5 25%, #7928ca 80%, #00cfff 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            How We Built a Smarter Dev Agent Using Vercel CI
          </motion.h1>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: crossed ? 0.5 : 1, y: 0 }}
        exit={{}}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          fontWeight: 500,
          letterSpacing: 0.1,
          color: "#aaa",
          fontSize: "1.1rem",
        }}
      >
        @PandelisZ
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.45 }}
        style={{
          marginTop: "1.6rem",
          color: "#555",
          fontStyle: "italic",
          fontSize: "0.98rem",
        }}
      >
        <span>
          <span style={{ color: "#888" }}>Click the title</span> to cross out!
        </span>
      </motion.div>
    </div>
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
