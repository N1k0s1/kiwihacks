import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "KiwiHacks 2025 | Auckland's Premier Hackathon",
  description: "Join us on July 19-20, 2025 for Auckland's premier hackathon for innovation and collaboration.",
    generator: 'v0.dev'
=======
  title: "KiwiHacks 2025 | Auckland's Premier Student Hackathon",
  description: "Join us on July 19-20, 2025 for Auckland's premier hackathon for innovation and collaboration.",
>>>>>>> 4b24abde1606f9ba8d3d2196904befe673cd0ab6
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={`${inter.className} bg-[#0a1f0a]`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'