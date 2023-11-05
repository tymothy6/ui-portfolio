"use client"

import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function FramerClient({children}: { children: React.ReactNode}) {
  const pathname = usePathname() // use the path as the unique key for AnimatePresence
  return <AnimatePresence mode='wait' initial={true} onExitComplete={() => window.scrollTo(0,0)}>
     <motion.div key={pathname}
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1}}
          exit={{ x: 200, opacity: 0}}
          transition= {{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
      >
        {children}
     </motion.div>
   </AnimatePresence>
}