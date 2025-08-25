"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Coffee } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-6 text-6xl leading-tight font-bold md:text-8xl"
        >
          Moonlit
          <br />
          <span className="text-amber-400">Grounds</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="mb-8 text-xl text-gray-200 md:text-2xl"
        >
          Where every cup tells a story under the gentle glow of artisan
          craftsmanship
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <Button
            onClick={() =>
              document
                .getElementById("menu")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            size="lg"
            className="rounded-2xl bg-amber-600 px-8 py-6 text-lg text-white shadow-2xl transition-all duration-300 hover:bg-amber-700 hover:shadow-amber-500/25"
          >
            Explore Our Menu
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform text-white"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Coffee className="h-8 w-8" />
        </motion.div>
      </motion.div>
    </section>
  )
}
