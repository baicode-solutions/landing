"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  variant?: "logo" | "iso-logo";
  width?: number;
  height?: number;
}

export function Logo({
  size = "md",
  className = "",
  variant = "logo",
  width,
  height,
}: LogoProps) {
  const sizeClasses = {
    sm: "h-6 w-6",
    md: "h-8 w-8",
    lg: "h-12 w-12",
    xl: variant === "iso-logo" ? "h-16 w-auto" : "h-16 w-16",
  };

  // Determinar dimensiones finales
  const finalWidth =
    width ||
    (variant === "logo"
      ? 48
      : variant === "iso-logo" && size === "xl"
      ? 120
      : 100);
  const finalHeight =
    height ||
    (variant === "logo"
      ? 48
      : variant === "iso-logo" && size === "xl"
      ? 64
      : 100);

  return (
    <Link href="/" className={`flex items-center justify-center ${className}`}>
      <Image
        src={
          variant === "logo"
            ? "/images/baicode-logo.png"
            : "/images/baicode-iso-logo.png"
        }
        alt="Baicode Logo"
        width={finalWidth}
        height={finalHeight}
        className={`${sizeClasses[size]} object-contain`}
        priority
      />
      {variant === "logo" && (
        <span className="ml-2 text-2xl font-bold text-blue-900">Baicode</span>
      )}
    </Link>
  );
}
