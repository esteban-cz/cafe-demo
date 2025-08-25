"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Coffee, Menu, X } from "lucide-react"
import links from "@/data/links"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToId = (id: string) => {
    const targetId = id.toLowerCase() === "home" ? "hero" : id.toLowerCase()
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false) // close mobile menu after click
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full border-b border-amber-200 bg-white/90 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex cursor-pointer items-center space-x-2"
            onClick={(e) => {
              e.preventDefault()
              scrollToId("hero")
            }}
          >
            <Coffee className="h-8 w-8 text-amber-600" />
            <span className="text-2xl font-bold text-gray-800">
              Moonlit Grounds
            </span>
          </motion.div>

          {/* Desktop links */}
          <div className="hidden items-center space-x-8 md:flex">
            {links.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToId(item)
                }}
                whileHover={{ scale: 1.1, color: "#d97706" }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="cursor-pointer text-gray-700 transition-colors hover:text-amber-600"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile toggle button */}
          <button
            className="rounded-lg p-2 text-gray-700 hover:bg-amber-100 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 flex flex-col space-y-4 md:hidden"
          >
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToId(item)
                }}
                className="block rounded-lg px-4 py-2 text-gray-700 hover:bg-amber-100 hover:text-amber-600"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
