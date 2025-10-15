import Link from "next/link";
import { Metadata } from "next";
import { services } from "@/lib/services";
import { CTAContact } from "@/components/cta-contact";
import { Globe, Smartphone, Settings, Brain } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SmoothScroll } from "@/components/smooth-scroll";

export const metadata: Metadata = {
  title: "Servicios | Baicode",
  description:
    "Explora nuestros servicios de desarrollo web, apps móviles, consultoría tecnológica e inteligencia artificial.",
};

const iconMap: Record<string, any> = { Globe, Smartphone, Settings, Brain };

export default function ServiciosIndex() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SmoothScroll />
      <SiteHeader />
      <main className="flex-1 py-20 container mx-auto px-4 md:px-6">
        <header className="text-center mb-16 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Servicios
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones end-to-end: desde la ideación y arquitectura hasta el
            despliegue y evolución continua.
          </p>
        </header>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mb-24">
          {services.map((s) => {
            const Icon = iconMap[s.icon] ?? Globe;
            return (
              <Link
                key={s.slug}
                href={`/servicios/${s.slug}`}
                className="group rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-sm p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600">
                  {s.shortTitle || s.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {s.summary}
                </p>
                <span className="mt-6 inline-flex items-center text-sm font-medium text-blue-600 group-hover:gap-2 transition-all">
                  Ver más →
                </span>
              </Link>
            );
          })}
        </div>
        <CTAContact
          title="¿Listo para impulsar tu próximo proyecto?"
          subtitle="Te ayudamos a definir alcance, arquitectura y roadmap en una sesión estratégica inicial sin costo."
          primaryLabel="Hablar con un experto"
          secondaryLabel="Agendar evaluación"
        />
      </main>
      <SiteFooter />
    </div>
  );
}
