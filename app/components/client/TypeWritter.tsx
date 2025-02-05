"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  delay?: number;
  cursorBlinkSpeed?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, delay = 0.2, cursorBlinkSpeed = 1.1 }) => {
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowCursor(true), text.length * delay * 1100);
    return () => clearTimeout(timer);
  }, [text, delay]);

  return (
    <motion.span>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * delay }}
        >
          {char}
        </motion.span>
      ))}
      {showCursor && (
        <motion.span
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ repeat: Infinity, duration: cursorBlinkSpeed, ease: "easeInOut" }}
        >
          |
        </motion.span>
      )}
    </motion.span>
  );
};

export default Typewriter;
