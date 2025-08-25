"use client"

import { motion } from "motion/react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import AnimatedSection from "@/components/ui/animated-section"

export default function Contact() {
  return (
    <AnimatedSection className="px-6 py-24">
      <div className="mx-auto max-w-7xl scroll-m-30" id="contact">
        <div className="absolute -top-24" />
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-5xl font-bold text-gray-800">Visit Us</h2>
          <p className="text-xl text-gray-600">
            We'd love to welcome you to our cozy corner of the world
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="rounded-2xl border-amber-100 bg-white/70 p-8 backdrop-blur-sm transition-shadow hover:shadow-xl">
              <CardHeader>
                <CardTitle className="mb-6 text-3xl text-gray-800">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-amber-600" />
                  <span className="text-gray-700">
                    123 Artisan Avenue, Coffee District, CD 12345
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-amber-600" />
                  <span className="text-gray-700">(555) 123-BREW</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-amber-600" />
                  <span className="text-gray-700">
                    hello@moonlitgrounds.com
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-amber-600" />
                  <span className="text-gray-700">
                    Mon-Sun: 6:00 AM - 9:00 PM
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 md:h-auto"
          >
            <div
              className="h-full w-full rounded-2xl bg-cover bg-center shadow-2xl"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800')",
              }}
            >
              <div className="absolute inset-0 rounded-2xl bg-black/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}
