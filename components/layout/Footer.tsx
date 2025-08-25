"use client"

import { motion } from "motion/react"
import { Coffee } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-6 flex items-center justify-center space-x-2">
            <Coffee className="h-8 w-8 text-amber-500" />
            <span className="text-3xl font-bold">Moonlit Grounds</span>
          </div>
          <p className="mx-auto mb-8 max-w-2xl text-gray-400">
            Thank you for being part of our coffee journey. Every cup shared is
            a moment treasured.
          </p>
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-500">
              © 2024 Moonlit Grounds. Crafted with ❤️ and lots of coffee.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
