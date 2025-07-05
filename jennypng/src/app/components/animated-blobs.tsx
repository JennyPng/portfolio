"use client";

import { motion } from "framer-motion";

export default function AnimatedBlobsBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <motion.div
        className="absolute w-96 h-80 bg-[radial-gradient(circle_at_60%_40%,var(--color-teal)_40%,var(--color-primary-pink)_10%)] rounded-full blur-3xl"
        animate={{
          x: [0, -120, 80, -100, 0],
          y: [0, 120, -80, 100, 0],
          scale: [1, 0.8, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 5,
        }}
        style={{ top: "50%", right: "10%" }}
      />
      <motion.div
        className="absolute w-96 h-80 bg-[radial-gradient(circle_at_60%_40%,var(--color-teal)_60%,var(--color-primary-pink)_10%)] rounded-full blur-3xl"
        animate={{
          x: [0, 80, -120, 60, 0],
          y: [0, -80, 120, -60, 0],
          scale: [1, 1.1, 0.7, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 10,
        }}
        style={{ bottom: "20%", left: "20%" }}
      />
    </div>
  );
}

