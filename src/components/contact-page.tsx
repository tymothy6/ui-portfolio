"use client"

import * as React from "react"
import Image from "next/image"
import contactIcon from "../../public/ContactIcon.svg"

export function ContactPage () {
    return(
        <div className="flex py-16 my-16 px-24">
            <div className="flex-col rounded-lg items-center justify-center p-16 border hover:bg-gray-50 hover:border-primary dark:hover:bg-slate-900 bg-card text-card-foreground shadow-sm">
                <h1 className="text-6xl text-center font-semibold text-foreground mb-6">
                Want to work together? Let's chat!
                </h1>
                <p className="text-4xl text-center font-medium text-foreground tracking-wide mb-6">ng.tymothy@gmail.com</p>
                <div className="flex justify-center">
                </div>
            </div>
        </div>
    )
}