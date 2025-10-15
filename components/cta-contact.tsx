"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

interface CTAContactProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  anchorId?: string;
}

export function CTAContact({
  title = "¿Listo para empezar?",
  subtitle = "Hablemos sobre tu proyecto y encontremos la mejor solución.",
  primaryLabel = "Solicitar Cotización",
  secondaryLabel = "Agendar Llamada",
  anchorId = "contacto",
}: CTAContactProps) {
  const router = useRouter();
  const goToContact = () => {
    if (typeof window !== "undefined") {
      const el = document.getElementById(anchorId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    // If anchorId is "home-contacto" or element not found, redirect to homepage contact
    const targetAnchor = anchorId === "home-contacto" ? "contacto" : anchorId;
    router.push(`/#${targetAnchor}`);
  };
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-10 text-center text-white shadow-xl">
      <div className="absolute -top-16 -left-16 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-10 w-60 h-60 bg-white/5 rounded-full blur-2xl" />
      <div className="relative space-y-6">
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
          {title}
        </h3>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={goToContact}
            className="h-11 px-8 rounded-md bg-yellow-300 text-indigo-900 hover:bg-yellow-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-indigo-700 font-semibold shadow-md"
          >
            {primaryLabel}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            onClick={goToContact}
            className="h-11 px-8 rounded-md bg-white/15 backdrop-blur border border-white/40 text-white font-semibold hover:bg-white/25 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-indigo-700"
          >
            {secondaryLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
