"use client"

import { motion } from "motion/react"
import { Card, CardContent } from "@/components/ui/card"
import AnimatedSection from "@/components/ui/animated-section"
import { features } from "@/data/features"

export default function About() {
  return (
    <AnimatedSection className="px-6 py-24">
      <div className="mx-auto max-w-7xl scroll-m-30" id="about">
        <div className="absolute -top-24" />
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-5xl font-bold text-gray-800">Our Story</h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Born from a passion for exceptional coffee and community connection,
            Moonlit Grounds has been serving artisan beverages and creating
            memorable moments since 2018.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full rounded-2xl border-amber-100 bg-white/70 p-8 text-center backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl">
                <CardContent className="space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100">
                    <feature.icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
