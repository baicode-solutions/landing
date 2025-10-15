"use client";
import Link from "next/link";
import { Brain } from "lucide-react";
import { AnimatedHeader } from "./animated-header";
import { ReactNode } from "react";

interface SiteHeaderProps {
  extraNav?: ReactNode;
  home?: boolean;
}

export function SiteHeader({ extraNav, home }: SiteHeaderProps) {
  const serviciosHref = home ? "#servicios" : "/servicios";
  const iaHref = home ? "#inteligencia-artificial" : "/inteligencia-artificial";
  const contactoHref = home ? "#contacto" : "/#contacto";
  return (
    <AnimatedHeader>
      <div className="ml-auto flex gap-4 sm:gap-6 md:flex-row flex-col md:items-center">
        <Link
          href={serviciosHref}
          className="text-sm font-medium hover:text-blue-600 transition-colors py-2 md:py-0"
        >
          Servicios
        </Link>
        <Link
          href={iaHref}
          className="text-sm font-medium hover:text-purple-600 transition-colors flex items-center gap-1 py-2 md:py-0"
        >
          <Brain className="h-4 w-4" />
          <span>Inteligencia Artificial</span>
        </Link>
        <Link
          href="/sobre-nosotros"
          className="text-sm font-medium hover:text-blue-600 transition-colors py-2 md:py-0"
        >
          Sobre Nosotros
        </Link>
        <Link
          href={contactoHref}
          className="text-sm font-medium hover:text-blue-600 transition-colors py-2 md:py-0"
        >
          Contacto
        </Link>
        {extraNav}
      </div>
    </AnimatedHeader>
  );
}
