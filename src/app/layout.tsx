import * as React from 'react'
import './globals.css'
import type { Metadata, Viewport } from 'next'
import { inter, source_serif } from './fonts'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { ScrollProviderWrapper } from '@/lib/scroll-wrapper'
import FramerClient from '@/components/framer-client'
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: {
    template: '%s | Tim Ng · Design Portfolio',
    default: 'Tim Ng · Design Portfolio',
  },
  description: 'Tim Ng is a product designer and scientist based in Toronto, Canada.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${source_serif.variable} font-serif`} suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          >
            <ScrollProviderWrapper>
                {children}
              <Analytics />
            </ScrollProviderWrapper>
            <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
