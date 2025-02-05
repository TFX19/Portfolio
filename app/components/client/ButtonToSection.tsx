"use client";

import { animate } from "framer-motion";

interface ButtonToSectionProps {
    targetId: string; 
    label: string;

  }
  
  export default function ButtonToSection({ targetId, label }: ButtonToSectionProps) {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          const topPosition = targetSection.offsetTop;
          const duration = 0.8;
  
          animate(window.scrollY, topPosition, {
            duration,
            ease: "easeInOut",
            onUpdate: (value) => window.scrollTo(0, value),
          });
        } else {
          console.warn(`Section with id "${targetId}" not found!`);
        }
      }
    };
  
    return (
      <button className="btn btn-primary"  onClick={handleScroll}>
        {label}
      </button>
    );
  }
  