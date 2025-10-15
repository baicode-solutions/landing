"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Brain,
  Cpu,
  Zap,
  Target,
  TrendingUp,
  Shield,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Bot,
  Users,
  Workflow,
} from "lucide-react";
import Image from "next/image";

export function AISection() {
  const router = useRouter();

  const goToContact = () => {
    if (typeof window !== "undefined") {
      const el = document.getElementById("contacto");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    // If element not found, redirect to homepage contact
    router.push("/#contacto");
  };
  return (
    <section
      id="inteligencia-artificial"
      className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-300 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-300 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-indigo-200 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Inteligencia Artificial
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Potencia tu negocio con IA
          </h2>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
            En Baicode somos especialistas en{" "}
            <strong>
              desarrollo e implementación de inteligencia artificial
            </strong>
            . Transformamos procesos empresariales con soluciones de IA
            personalizadas que impulsan la innovación y el crecimiento.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Benefits */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Machine Learning Personalizado
                  </h3>
                  <p className="text-gray-600">
                    Algoritmos de aprendizaje automático adaptados a las
                    necesidades específicas de tu industria y objetivos de
                    negocio.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Cpu className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Procesamiento de Datos Inteligente
                  </h3>
                  <p className="text-gray-600">
                    Análisis avanzado de big data con IA para extraer insights
                    valiosos y patrones ocultos en tu información.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  <Zap className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Automatización Inteligente
                  </h3>
                  <p className="text-gray-600">
                    Automatiza procesos complejos con IA para reducir costos,
                    eliminar errores y acelerar operaciones.
                  </p>
                </div>
              </div>
            </div>

            <Button
              onClick={goToContact}
              className="h-11 px-8 rounded-md text-base bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg"
            >
              Consulta Gratuita IA
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="backdrop-blur-sm rounded-2xl p-8 border-white/20">
              <Image
                src="/images/AI-image2.svg"
                width="500"
                height="400"
                alt="Inteligencia Artificial Baicode"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Link href="/inteligencia-artificial" className="group">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
              <CardHeader className="text-center pb-4">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900 group-hover:text-purple-600 transition-colors">
                  Computer Vision
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Reconocimiento de imágenes, análisis visual y detección de
                  objetos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Análisis de imágenes médicas
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Control de calidad automatizado
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Reconocimiento facial y OCR
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Link>

          <Link href="/inteligencia-artificial" className="group">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
              <CardHeader className="text-center pb-4">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900 group-hover:text-emerald-600 transition-colors">
                  Agentes de IA
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Sistemas autónomos inteligentes y multi-agentes para
                  automatización avanzada
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Generación de productos de agentes
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Sistemas multi-agentes
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    MCPs e integración con herramientas
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Automatizaciones inteligentes
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Link>

          <Link
            href="/inteligencia-artificial"
            className="group md:col-span-2 lg:col-span-1"
          >
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
              <CardHeader className="text-center pb-4">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900 group-hover:text-indigo-600 transition-colors">
                  NLP & Chatbots
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Procesamiento de lenguaje natural y asistentes
                  conversacionales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Chatbots inteligentes
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Análisis de sentimientos
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Traducción automática
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Stats section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <div className="text-gray-600 text-sm">Proyectos de IA</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                95%
              </div>
              <div className="text-gray-600 text-sm">Precisión promedio</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                60%
              </div>
              <div className="text-gray-600 text-sm">Reducción de costos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-gray-600 text-sm">Soporte técnico</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
