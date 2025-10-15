import { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { CTAContact } from "@/components/cta-contact";
import {
  Brain,
  Sparkles,
  Target,
  Bot,
  Shield,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Inteligencia Artificial | Baicode",
  description:
    "Soluciones de Inteligencia Artificial: Computer Vision, Agentes y LLMs, NLP & Chatbots, automatización y MLOps para tu negocio.",
  keywords: [
    "inteligencia artificial",
    "computer vision",
    "agentes IA",
    "LLM",
    "chatbots",
    "mlops",
    "baicode",
  ],
};

export default function InteligenciaArtificialPage() {
  const capabilities = [
    {
      icon: Target,
      title: "Computer Vision",
      color: "purple",
      desc: "Detección de objetos, OCR, control de calidad visual y análisis de imágenes.",
    },
    {
      icon: Bot,
      title: "Agentes & LLMs",
      color: "emerald",
      desc: "Agentes autónomos, orquestación multi-agente, retrieval y reasoning optimizado.",
    },
    {
      icon: Shield,
      title: "NLP & Chatbots",
      color: "indigo",
      desc: "Clasificación semántica, extracción de entidades, asistentes y búsqueda contextual.",
    },
  ];

  const useCases = [
    "Chatbots internos especializados",
    "Búsqueda semántica contextual",
    "Detección de fraude / anomalías",
    "Asistentes de soporte 24/7",
    "Generación de resúmenes ejecutivos",
    "Control de calidad visual",
    "Indexación documental inteligente",
    "Orquestación multi-agente",
  ];

  const differentiators = [
    "Arquitectura MLOps con monitoreo de drift y performance",
    "Evaluaciones sistemáticas de prompts y grounding",
    "Seguridad y compliance: control de datos y trazabilidad",
    "Fine-tuning responsable y optimización de costos de inferencia",
  ];

  const process = [
    {
      step: "Discovery & Value Mapping",
      desc: "Identificamos quick wins y métricas de éxito alineadas al negocio.",
    },
    {
      step: "Arquitectura & Data Readiness",
      desc: "Definimos pipelines, fuentes, calidad y gobernanza de datos.",
    },
    {
      step: "Prototipo Iterativo",
      desc: "Ciclos cortos medibles con feedback real y experimentación controlada.",
    },
    {
      step: "Hardening & MLOps",
      desc: "Monitoreo, escalado, versionado de modelos y observabilidad.",
    },
    {
      step: "Adopción & Capacitaciones",
      desc: "Enablement del equipo y transferencia de conocimiento documentada.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SmoothScroll />
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-purple-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-5 py-2 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4" /> Inteligencia Artificial
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                Impulsa tu negocio con IA aplicada, escalable y segura
              </h1>
              <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                Diseñamos e implementamos soluciones de IA que generan impacto
                real: eficiencia operativa, automatización inteligente y nuevas
                capacidades analíticas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/#contacto"
                  className="px-8 py-4 rounded-xl bg-white text-purple-700 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  Evaluar Caso IA
                </a>
                <a
                  href="#capas"
                  className="px-8 py-4 rounded-xl border border-white/30 text-white font-semibold hover:bg-white/10 backdrop-blur-sm transition-colors"
                >
                  Ver Capacidades
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities & Use Cases */}
        <section
          id="capas"
          className="py-20 md:py-28 container mx-auto px-4 md:px-6"
        >
          <div className="max-w-6xl mx-auto space-y-20">
            <div className="grid md:grid-cols-2 gap-14">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                  <Brain className="h-7 w-7 text-purple-600" /> Capacidades
                  Clave
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Agrupamos los pilares tecnológicos esenciales para acelerar la
                  adopción de IA dentro de tu organización con enfoque en
                  resultados y gobernanza.
                </p>
                <div className="space-y-6">
                  {capabilities.map((c) => (
                    <div
                      key={c.title}
                      className={`p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition-all border-${c.color}-100`}
                    >
                      <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <c.icon className={`h-5 w-5 text-${c.color}-500`} />{" "}
                        {c.title}
                      </h3>
                      <p className="text-sm text-gray-600">{c.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                  <Brain className="h-7 w-7 text-purple-600" /> Casos de Uso
                </h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {useCases.map((u) => (
                    <div
                      key={u}
                      className="rounded-lg bg-white/80 border border-gray-200 p-4 text-sm text-gray-700 flex gap-2 hover:shadow-sm"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>{u}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Differentiators & Process */}
            <div className="grid md:grid-cols-2 gap-14">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Diferenciadores
                </h2>
                <ul className="space-y-5">
                  {differentiators.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Cómo Trabajamos
                </h2>
                <ol className="space-y-5 list-decimal list-inside text-gray-700">
                  {process.map((p) => (
                    <li key={p.step}>
                      <strong>{p.step}:</strong> {p.desc}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Visual */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-10 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex flex-col justify-center space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    IA escalable y gobernada
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Implementamos prácticas de MLOps: versionado, monitoreo de
                    drift, seguridad y control de costos de inferencia para
                    garantizar sostenibilidad y confianza en producción.
                  </p>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />{" "}
                      Pipelines reproducibles
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />{" "}
                      Evaluación sistemática de prompts
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />{" "}
                      Observabilidad y métricas vivas
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />{" "}
                      Privacy & compliance desde el diseño
                    </li>
                  </ul>
                </div>
                <div className="relative min-h-[340px] bg-white/60 backdrop-blur-sm flex items-center justify-center border-l border-gray-200">
                  <Image
                    src="/images/AI-image2.svg"
                    alt="Arquitectura de IA"
                    width={600}
                    height={480}
                    className="relative w-full h-full object-contain p-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-24">
          <div className="container mx-auto px-4 md:px-6">
            <CTAContact
              title="¿Listo para impulsar un caso de IA?"
              subtitle="Agenda una exploración gratuita: evaluamos viabilidad, datos disponibles y quick wins en menos de 30 minutos."
              primaryLabel="Evaluar Caso IA"
              secondaryLabel="Solicitar Demo"
              anchorId="home-contacto"
            />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
