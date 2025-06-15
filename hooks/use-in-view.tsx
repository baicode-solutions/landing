"use client"

import { useInView as useFramerInView } from "framer-motion"
import { useRef } from "react"

export function useInView(options = { once: true, amount: 0.3 }) {
  const ref = useRef(null)
  const isInView = useFramerInView(ref, options)

  return { ref, isInView }
}
