"use client"

import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function Logo({ size = "md", className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  }

  return (
    <Link href="/" className={`flex items-center justify-center ${className}`}>
      <Image
        src="/images/baicode-logo.png"
        alt="Baicode Logo"
        width={48}
        height={48}
        className={`${sizeClasses[size]} object-contain`}
        priority
      />
      <span className="ml-2 text-2xl font-bold text-blue-600">Baicode</span>
    </Link>
  )
}
