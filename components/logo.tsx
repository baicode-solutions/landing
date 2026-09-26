"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  variant?: "logo" | "iso-logo";
  /** Use the light (white) artwork for placement on dark backgrounds, e.g. the footer. */
  onDark?: boolean;
  width?: number;
  height?: number;
}

// Full lockup (icon + wordmark + tagline), natural size 2400x750
const LOGO_ASPECT = 2400 / 750;

const HEIGHT_PX: Record<NonNullable<LogoProps["size"]>, number> = {
  sm: 24,
  md: 32,
  lg: 48,
  xl: 64,
};

export function Logo({
  size = "md",
  className = "",
  variant = "logo",
  onDark = false,
  width,
  height,
}: LogoProps) {
  const isFullLogo = variant === "logo";
  const sizeClasses = isFullLogo
    ? {
        sm: "h-6 w-auto",
        md: "h-8 w-auto",
        lg: "h-12 w-auto",
        xl: "h-16 w-auto",
      }
    : {
        sm: "h-6 w-6",
        md: "h-8 w-8",
        lg: "h-12 w-12",
        xl: "h-16 w-16",
      };

  const finalHeight = height || HEIGHT_PX[size];
  const finalWidth =
    width || (isFullLogo ? Math.round(finalHeight * LOGO_ASPECT) : finalHeight);

  const theme = onDark ? "oscuro" : "claro";
  const src = isFullLogo
    ? `/images/brand/png/baicode-logo-completo-${theme}.png`
    : `/images/brand/png/baicode-isotipo-${theme}.png`;

  return (
    <Link href="/" className={`flex items-center justify-center ${className}`}>
      <Image
        src={src}
        alt="Baicode"
        width={finalWidth}
        height={finalHeight}
        className={`${sizeClasses[size]} object-contain`}
        priority
      />
    </Link>
  );
}
