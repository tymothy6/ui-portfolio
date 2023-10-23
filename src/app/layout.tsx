import * as React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { inter } from './fonts'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { ScrollProviderWrapper } from '@/lib/scroll-wrapper'

export const metadata: Metadata = {
  title: {
    template: '%s | Tim Ng · Design Portfolio',
    default: 'Tim Ng · Design Portfolio',
  },
  description: 'Tim Ng is a product designer and scientist based in Toronto, Canada.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
            </ScrollProviderWrapper>
            <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
