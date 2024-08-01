"use client";

import * as React from "react";
import { SVGMotionProps, motion } from "framer-motion";
import { useTheme } from "next-themes";

function Path(
  props: React.JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    React.RefAttributes<SVGPathElement>,
) {
  const { resolvedTheme } = useTheme();

  return (
    <motion.path
      fill="transparent"
      strokeWidth="2"
      stroke={
        resolvedTheme === "light" ? "hsl(0, 0%, 18%)" : "hsl(210, 40%, 98%)"
      }
      strokeLinecap="round"
      {...props}
    />
  );
}

export function MenuToggle({ isMenuOpen }: { isMenuOpen: boolean }) {
  return (
    <svg width="16" height="16" viewBox="1 0 18 18">
      <Path
        variants={{
          open: { d: "M 3 16.5 L 17 2.5" },
          closed: { d: "M 2 2.5 L 20 2.5" },
        }}
        animate={isMenuOpen ? "open" : "closed"}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
        animate={isMenuOpen ? "open" : "closed"}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
        animate={isMenuOpen ? "open" : "closed"}
      />
    </svg>
  );
}
