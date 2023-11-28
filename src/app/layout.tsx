import * as React from 'react'
import './globals.css'
import type { Metadata, Viewport } from 'next'
import { inter, source_serif } from './fonts'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { ScrollProviderWrapper } from '@/lib/scroll-wrapper'
import { Analytics } from "@vercel/analytics/react"

import { PageHeader } from '@/components/page-header'
import { SearchWrapper } from '@/components/search-wrapper'
import { PageFooter } from '@/components/page-footer'
import { PageFooter2 } from '@/components/footer-2'

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
            <PageHeader>
              <SearchWrapper />
            </PageHeader>
                {children}
            <PageFooter2 />
              <Analytics />
            </ScrollProviderWrapper>
            <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
