import dynamic from "next/dynamic";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const slidesList = [
  dynamic(() => import("../slides/TitleSlide")),
  dynamic(() => import("../slides/WhoCosineSlide")),
  dynamic(() => import("../slides/CISlide")),
];
export default function Home() {
  const [slide, setSlide] = useState(0);
  const handleNext = () => {
    if (slide < slidesList.length - 1) setSlide((s) => s + 1);
  };
  const handleRestart = () => setSlide(0);
  const SlideComponent = slidesList[slide];
  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "black" }}>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={slide}
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -80, opacity: 0, transition: { duration: 0.36 } }}
          transition={{ type: "spring", duration: 0.7 }}
          style={{
            position: "absolute",
            width: "100vw",
            height: "100vh",
            top: 0,
            left: 0,
            zIndex: 2
          }}
        >
          <SlideComponent
            onAdvance={slide === slidesList.length - 1 ? handleRestart : handleNext}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}