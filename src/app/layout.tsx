import * as React from 'react'
import './globals.css'

import type { Metadata, Viewport } from 'next'
import { inter, source_serif } from './fonts'
import localFont from 'next/font/local'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { ScrollProviderWrapper } from '@/lib/scroll-wrapper'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import algoliasearch from "algoliasearch"
import { InstantSearch } from "react-instantsearch"

import { PageHeader } from '@/components/patterns/page-header'
import { SearchWrapper } from '@/components/patterns/search-wrapper'
import { PageFooter2 } from '@/components/patterns/footer-2'

export const metadata: Metadata = {
  metadataBase: new URL('https://tim-ng.me'),
  title: {
    template: '%s | Tim Ng · Design Portfolio',
    default: 'Tim Ng · Design Portfolio',
  },
  description: 'Tim Ng is an experience designer and scientist based in Toronto, Canada.',
  openGraph: {
    title: 'Tim Ng · Design Portfolio',
    description: 'Tim Ng is an experience designer and scientist based in Toronto, Canada.',
    url: 'https://tim-ng.me',
    siteName: 'Tim Ng · Design Portfolio',
    locale: 'en_US',
    type: 'website',
  }
}

const monaSans = localFont({
  src: './Mona-Sans.woff2',
  display: 'swap',
  variable: '--font-mona-sans',
})

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
    <html lang="en" className={`${monaSans.variable} ${GeistSans.variable} ${GeistMono.variable} ${source_serif.variable} font-serif`} suppressHydrationWarning>
      <head />
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          >
            <ScrollProviderWrapper>
            <PageHeader>
              <SearchWrapper />
            </PageHeader>
                {children}
            <PageFooter2 />
              <Analytics />
              <SpeedInsights />
            </ScrollProviderWrapper>
            <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
