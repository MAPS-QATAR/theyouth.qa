import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import CustomCursor from "@/components/custom-cursor"
import GlobalLoader from "@/components/global-loader"

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
})

const siteUrl = "https://youth.qa"
const siteName = "The Y.O.U.T.H Project"
const siteDescription = "A transformative cultural festival celebrating creativity, education, and expression for youth aged 13-21. Join us October 23-25, 2025 at Katara Cultural Village, Qatar."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Y.O.U.T.H Project - Embrace Your Youth, Create Your Legacy",
    template: "%s | The Y.O.U.T.H Project",
  },
  description: siteDescription,
  keywords: [
    "youth empowerment",
    "Qatar events",
    "Katara Cultural Village",
    "youth innovation",
    "startups",
    "art and culture",
    "fashion design",
    "AI technology",
    "youth festival",
    "creative expression",
    "youth leadership",
    "educational workshops",
    "MAPS International",
    "October 2025",
    "Doha events"
  ],
  authors: [{ name: "MAPS International W.L.L" }],
  creator: "MAPS International W.L.L",
  publisher: "MAPS International W.L.L",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: siteName,
    description: siteDescription,
    siteName: siteName,
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "The Y.O.U.T.H Project - Embrace Your Youth, Create Your Legacy",
      },
      {
        url: `${siteUrl}/arab-lady-1.jpg`,
        width: 800,
        height: 600,
        alt: "Youth Creativity and Innovation",
      },
    ],
    videos: [
      {
        url: `${siteUrl}/ai-tech.mp4`,
        width: 1920,
        height: 1080,
        type: "video/mp4",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [`${siteUrl}/og-image.jpg`],
    creator: "@youth_qatar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteUrl,
  },
  category: "Education & Events",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for analytics and CDN */}
        <link rel="dns-prefetch" href="https://vercel.live" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "The Y.O.U.T.H Project",
              "description": "A transformative cultural festival celebrating creativity, education, and expression for youth aged 13-21",
              "startDate": "2025-10-23",
              "endDate": "2025-10-25",
              "eventStatus": "https://schema.org/EventScheduled",
              "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
              "location": {
                "@type": "Place",
                "name": "Katara Cultural Village",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Doha",
                  "addressCountry": "QA"
                }
              },
              "image": "https://youth.qa/og-image.jpg",
              "organizer": {
                "@type": "Organization",
                "name": "MAPS International W.L.L",
                "url": "https://youth.qa"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://youth.qa",
                "availability": "https://schema.org/InStock"
              },
              "performer": {
                "@type": "PerformingGroup",
                "name": "Youth Artists and Innovators"
              }
            })
          }}
        />
        
        {/* Additional meta tags */}
        <meta name="theme-color" content="#4a5a52" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`font-sans ${dmSans.variable} antialiased`}>
        <GlobalLoader />
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
