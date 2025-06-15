"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Logo } from "./logo"
import type { ReactNode } from "react"

interface AnimatedHeaderProps {
  children: ReactNode
}

export function AnimatedHeader({ children }: AnimatedHeaderProps) {
  const { scrollY } = useScroll()

  // Usar useTransform para transformar el valor de scrollY
  const boxShadow = useTransform(scrollY, [0, 50], ["0 0 0 rgba(0,0,0,0)", "0 1px 10px rgba(0,0,0,0.1)"])

  return (
    <motion.header
      className="px-4 lg:px-6 h-16 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50"
      style={{
        boxShadow,
      }}
    >
      <Logo animated />
      {children}
    </motion.header>
  )
}
