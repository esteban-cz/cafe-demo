"use client"

import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Menu from "@/components/sections/menu"
import Stats from "@/components/sections/stats"
import Contact from "@/components/sections/contact"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Stats />
      <Contact />
      <Footer />
    </>
  )
}
