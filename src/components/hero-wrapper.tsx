"use client"

import { useTheme } from "next-themes"

import { Hero } from "@/components/landing-hero"

export function HeroWrapper ( { id }: { id: string }) {

const { resolvedTheme } = useTheme();

    const bgFillStart = resolvedTheme === 'dark' ? '#0f172a50' : '#f8fafc50'
    const bgFillEnd = resolvedTheme === 'dark' ? '#0f172a' : '#f8fafc'
    const dotGridStyle = {
        background: `
          radial-gradient(circle, ${bgFillStart}, ${bgFillEnd}),
          radial-gradient(circle, gray 1px, transparent 1px)
        `,
        backgroundSize: "cover, 32px 32px",
        backgroundPosition: "center, 0 0"
      };

      return (
        <div 
        className="flex-grow flex items-center justify-center">
            <Hero id={id} />
        </div>
      )
}