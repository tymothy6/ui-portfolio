"use client"

import { motion } from "framer-motion"
import { Hero } from "@/components/landing-hero"
import GridPattern from "@/components/canvas/grid"

export function HeroWrapper ( { id }: { id: string }) {

      return (
        <motion.div
        initial="pageInitial"
        animate="pageAnimate" 
        transition={{ duration: 1, ease: "easeInOut" }}
        variants={{
          pageInitial: {
            clipPath: 'inset(0 100% 0 0)',
            opacity: 0
          },
          pageAnimate: {
            clipPath: 'inset(0 0 0 0)',
            opacity: 1
          },
        }}>
        <div 
        className="relative flex grow items-center justify-center min-h-[100vh] py-32 w-full">
            <GridPattern />
            <Hero id={id} />
        </div>
        </motion.div>
      )
}