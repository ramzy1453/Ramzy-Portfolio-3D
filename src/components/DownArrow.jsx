import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useState } from "react";

export default function DownArrow() {
  // i want this button appear only when the user scrolls down
  const [show, setShow] = useState(false);
  const { scrollYProgress } = useScroll();
  scrollYProgress.on("change", (latest) => {
    if (latest > 0.05) {
      setShow(true);
    } else {
      setShow(false);
    }
  });
  if (!show) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="right-0 bottom-0 fixed p-2 m-6 bg-blue-500 rounded-full"
      >
        <FaArrowCircleUp size={32} />
      </motion.button>
    </AnimatePresence>
  );
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
