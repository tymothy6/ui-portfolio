"use client"

import { Hero } from "@/components/landing-hero"

export function HeroWrapper ( { id }: { id: string }) {

      return (
        <div 
        className="flex-grow flex items-center justify-center">
            <Hero id={id} />
        </div>
      )
}