"use client"

import { motion } from "motion/react"
import AnimatedSection from "@/components/ui/animated-section"
import { stats } from "@/data/stats"

export default function Stats() {
  return (
    <AnimatedSection className="bg-amber-900 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 text-center md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <stat.icon className="mx-auto h-12 w-12 text-amber-300" />
              <h3 className="text-4xl font-bold">{stat.number}</h3>
              <p className="text-amber-200">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
