"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"

export function Hero () {
    return (
        <div className="flex-col py-56 my-4 mx-24 max-w-xl md:max-w-5xl">
            <h1 className="text-6xl font-semibold mb-4">👋🏼 I'm Tim, an experience designer with a background in quantitative research</h1>
            <h1 className="text-gray-500 dark:text-gray-300 text-6xl font-semibold mb-8">🤗 I care about making complex ideas accessible to everyone</h1>
            <Button variant="gradient" size="lg"><span className="text-lg">Meet me</span></Button>
        </div>
    )
}