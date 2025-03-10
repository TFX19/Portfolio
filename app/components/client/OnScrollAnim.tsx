"use client";
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
}

export default function ScrollAnimation({ children, className = "" }: ScrollAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
