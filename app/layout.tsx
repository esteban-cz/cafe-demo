import "./globals.css"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Moonlit Grounds - Premium Artisan Coffee Experience",
  description:
    "Discover exceptional coffee and artisan pastries at Moonlit Grounds. Where every cup tells a story under the gentle glow of craftsmanship.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Moonlit Grounds" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <main className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
          {children}
        </main>
      </body>
    </html>
  )
}
