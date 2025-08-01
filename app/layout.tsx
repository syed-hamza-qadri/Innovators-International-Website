import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Innovators International",
  description: "Empowering Global Transformation through technology and consulting",
  icons: {
    icon: "https://rynjq19w9hrzwz6f.public.blob.vercel-storage.com/favicon-245GjYxouR9nL85X61Gap0elSGqCj9.png",
    apple: "https://rynjq19w9hrzwz6f.public.blob.vercel-storage.com/favicon-245GjYxouR9nL85X61Gap0elSGqCj9.png",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://rynjq19w9hrzwz6f.public.blob.vercel-storage.com" />
        <link rel="dns-prefetch" href="https://rynjq19w9hrzwz6f.public.blob.vercel-storage.com" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
