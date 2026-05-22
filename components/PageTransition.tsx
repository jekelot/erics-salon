"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Page entrance curtain effect */}
        <motion.div
          className="fixed inset-0 z-[200] pointer-events-none bg-navy"
          initial={{ scaleY: 1, transformOrigin: "top" }}
          animate={{ scaleY: 0, transformOrigin: "top" }}
          exit={{ scaleY: 1, transformOrigin: "bottom" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        />
        <motion.div
          className="fixed inset-0 z-[199] pointer-events-none bg-gold"
          initial={{ scaleY: 1, transformOrigin: "top" }}
          animate={{ scaleY: 0, transformOrigin: "top" }}
          exit={{ scaleY: 1, transformOrigin: "bottom" }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.76, 0, 0.24, 1] }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
