"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/patterns/landing-hero";
import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamic import for 3D grid with loading fallback
const GridPattern = dynamic(() => import("@/components/canvas/grid"), {
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-gray-100/80 dark:from-transparent dark:via-gray-900/50 dark:to-gray-950/80" />
  ),
  ssr: false
});

interface HeroWrapperProps {
  id: string;
  children?: React.ReactNode;
}

export function HeroWrapper({ id, children }: HeroWrapperProps) {
  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      transition={{ duration: 1, ease: "easeInOut" }}
      variants={{
        pageInitial: {
          clipPath: "inset(0 100% 0 0)",
          opacity: 0,
        },
        pageAnimate: {
          clipPath: "inset(0 0 0 0)",
          opacity: 1,
        },
      }}
    >
      <div className="relative flex grow items-center justify-center min-h-[100vh] py-32 w-full">
        {/* Background Grid - Only load when component is visible */}
        <Suspense fallback={
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 to-gray-100/80 dark:from-transparent dark:via-gray-900/50 dark:to-gray-950/80" />
        }>
          <GridPattern />
        </Suspense>
        <Hero id={id} />
      </div>
    </motion.div>
  );
}
