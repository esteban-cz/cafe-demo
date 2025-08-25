"use client"

import { motion } from "motion/react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import AnimatedSection from "@/components/ui/animated-section"
import { menuItems } from "@/data/menuItems"

export default function Menu() {
  return (
    <AnimatedSection className="bg-gradient-to-r from-amber-50 to-orange-50 px-6 py-24">
      <div className="mx-auto max-w-7xl scroll-m-30" id="menu">
        <div className="absolute -top-24" />
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-5xl font-bold text-gray-800">Our Menu</h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Discover our carefully curated selection of premium coffees and
            artisan pastries
          </p>
        </div>

        {menuItems.map((category, categoryIndex) => (
          <div key={category.category} className="mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <Badge className="mb-4 rounded-full bg-amber-600 px-6 py-2 text-lg text-white">
                {category.category}
              </Badge>
              <Separator className="mx-auto w-24 bg-amber-300" />
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3">
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: itemIndex * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <Card className="overflow-hidden rounded-2xl border-amber-100 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl">
                    <div
                      className="relative h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.image})` }}
                    >
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-amber-600 text-white">
                          {item.price}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl text-gray-800">
                        {item.name}
                      </CardTitle>
                      <CardDescription className="leading-relaxed text-gray-600">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}
