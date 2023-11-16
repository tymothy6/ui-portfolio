"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { 
    Alert,
    AlertTitle,
    AlertDescription
 } from "@/components/ui/alert"


 export function RichEmbedBlock ({ title, description }: { title: string, description: string }) {
    return(
        <div className="px-8 md:max-w-3xl mx-auto">
            <Alert className="mb-8">
                <AlertTitle className="font-semibold font-sans">{title}</AlertTitle>
                <AlertDescription className="text-base font-sans">{description}</AlertDescription>
                <Button variant="default">
                    View post
                </Button>
            </Alert>
        </div>
    )
 }
