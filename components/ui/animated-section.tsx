"use client"

import { motion, useAnimation, useInView } from "motion/react"
import { useEffect, useRef } from "react"

export default function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (inView) {
      controls.start("visible").catch(console.error)
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
        hidden: { opacity: 0, y: 60 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
