"use client"

import Image from "next/image"

export function HeroLogo() {
  return (
    <div className="flex items-center justify-center mb-8">
      <Image
        src="/images/baicode-logo.png"
        alt="Baicode Logo"
        width={120}
        height={120}
        className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 object-contain"
        priority
      />
    </div>
  )
}
