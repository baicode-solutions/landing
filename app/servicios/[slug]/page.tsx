import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getServiceBySlug, services } from "@/lib/services";
import { CTAContact } from "@/components/cta-contact";
import { Globe, Smartphone, Settings, Brain, CheckCircle } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SmoothScroll } from "@/components/smooth-scroll";

const iconMap: Record<string, any> = { Globe, Smartphone, Settings, Brain };

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Servicio no encontrado | Baicode" };
  return {
    title: `${service.shortTitle || service.title} | Baicode`,
    description: service.summary,
    keywords: service.seo?.keywords,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) return notFound();
  const Icon = iconMap[service.icon] ?? Globe;
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SmoothScroll />
      <SiteHeader />
      <main className="flex-1 py-16 md:py-24 container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <header className="mb-14 space-y-6 text-center">
            <div className="mx-auto w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
              <Icon className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {service.summary}
            </p>
          </header>

          <section className="space-y-10 mb-20">
            {service.description.map((p, i) => (
              <p key={i} className="text-gray-700 text-lg leading-relaxed">
                {p}
              </p>
            ))}
          </section>
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                ¿Qué hacemos?
              </h2>
              <ul className="space-y-3">
                {service.whatWeDo.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                Beneficios
              </h2>
              <ul className="space-y-3">
                {service.benefits.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                Diferenciales
              </h2>
              <ul className="space-y-3">
                {service.differentiators.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {service.useCases && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                  Casos de Uso
                </h2>
                <ul className="space-y-3">
                  {service.useCases.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <section className="mb-20">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">
              Tecnologías
            </h2>
            <div className="flex flex-wrap gap-3">
              {service.technologies.map((t) => (
                <span
                  key={t}
                  className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium border border-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </section>
          <div className="mb-24">
            <CTAContact
              title={service.cta?.label || "¿Listo para empezar?"}
              subtitle={
                service.cta?.secondary ||
                "Conversemos sobre tu caso y define el siguiente paso con un experto."
              }
              primaryLabel={service.cta?.label || "Contactar"}
              secondaryLabel={service.cta?.secondary || "Hablar con un experto"}
            />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
