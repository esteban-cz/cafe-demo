"use client"

import { motion } from "motion/react"
import { Coffee } from "lucide-react"
import Link from "next/link"

export default function NotFoundScreen() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center space-y-6"
      >
        <Coffee className="h-16 w-16 text-amber-600" />
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="max-w-md text-lg text-gray-600">
          Oops! The page you’re looking for doesn’t exist. Maybe grab a coffee
          and head back to the homepage ☕
        </p>

        <Link
          href="/"
          className="rounded-2xl bg-amber-600 px-6 py-2 text-lg text-white shadow-2xl transition-all duration-300 hover:bg-amber-700 hover:shadow-amber-500/25"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  )
}
