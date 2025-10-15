"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Smartphone,
  Globe,
  Database,
  Shield,
  Zap,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Brain,
  Settings,
  Linkedin,
  GitBranch,
  Cloud,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SmoothScroll } from "@/components/smooth-scroll";
import { AISection } from "@/components/ai-section";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function BaicodeLanding() {
  // Estado del formulario de contacto
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Manejar cambios en los campos del formulario
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Enviar formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "¡Mensaje enviado exitosamente! Te contactaremos pronto.",
        });
        // Limpiar el formulario
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(result.error || "Error al enviar el mensaje");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Error inesperado. Por favor intenta más tarde.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SmoothScroll />

      <SiteHeader home />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 relative overflow-hidden">
          {/* Background animations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
            <div
              className="absolute top-40 right-20 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute bottom-20 left-1/3 w-36 h-36 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
              style={{ animationDelay: "4s" }}
            ></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-6 animate-fade-in">
                <div className="flex items-center justify-center mb-8 lg:justify-start">
                  <div className="relative">
                    <Image
                      src="/images/baicode-logo.png"
                      alt="Baicode Logo"
                      width={80}
                      height={80}
                      className="h-16 w-16 md:h-20 md:w-20 object-contain"
                      priority
                    />
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/tight">
                    <span className="block text-gray-900">
                      Desarrollo de Software
                    </span>
                    <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      e Inteligencia Artificial
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-lg md:text-xl text-gray-600 leading-relaxed">
                    En Baicode transformamos tus ideas en soluciones
                    tecnológicas innovadoras. Especialistas en
                    <strong className="text-gray-800">
                      {" "}
                      desarrollo de software e implementación de IA
                    </strong>{" "}
                    para impulsar tu negocio hacia el futuro.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="btn-gradient text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Comenzar Proyecto
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Ver Portafolio
                  </Button>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-medium">Consulta gratuita</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="font-medium">Soporte 24/7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-purple-500" />
                    <span className="font-medium">Expertos en IA</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center animate-slide-up">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-2xl blur-2xl opacity-50"></div>
                  <Image
                    src="/images/city.svg"
                    width="600"
                    height="500"
                    alt="Desarrollo de Software e IA - Baicode"
                    className="relative aspect-video overflow-hidden rounded-2xl object-cover shadow-2xl backdrop-blur-glass"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="servicios"
          className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Zap className="h-4 w-4" />
                  Nuestros Servicios
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                  Soluciones Tecnológicas
                  <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Completas
                  </span>
                </h2>
                <p className="max-w-3xl text-lg md:text-xl text-gray-600 leading-relaxed">
                  Ofrecemos desarrollo de software de última generación para
                  impulsar tu negocio hacia el éxito digital
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
              <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Globe className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-blue-600 transition-colors">
                    <a
                      href="/servicios/desarrollo-web"
                      className="hover:underline"
                    >
                      Desarrollo Web
                    </a>
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    Desarrollamos plataformas web completas que hacen crecer tu
                    negocio y conectan con tus clientes
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        E-commerce y tiendas online
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        Plataformas SaaS y portales
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        Optimización para buscadores
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        Sistemas de gestión empresarial
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Smartphone className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-indigo-600 transition-colors">
                    <a
                      href="/servicios/apps-moviles"
                      className="hover:underline"
                    >
                      Apps Móviles
                    </a>
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    Creamos aplicaciones móviles completas que tus usuarios
                    amarán usar todos los días
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        Apps de servicios y delivery
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        Plataformas de contenido móvil
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        Apps corporativas internas
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        Lanzamiento en tiendas oficiales
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-6 rounded-2xl w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Settings className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900 group-hover:text-emerald-600 transition-colors">
                    <a
                      href="/servicios/consulting-it"
                      className="hover:underline"
                    >
                      Consulting IT
                    </a>
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    Optimizamos tus procesos de desarrollo para crear productos
                    digitales más rápido y mejor
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        Evaluación de procesos actuales
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        Arquitecturas escalables
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        Optimización de equipos
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        Mejores prácticas de desarrollo
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* AI Section */}
        <AISection />

        {/* About Section */}
        <section
          id="nosotros"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                    ¿Por qué elegir Baicode?
                  </h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Somos un equipo de desarrolladores apasionados por crear
                    soluciones tecnológicas que impulsen el crecimiento de tu
                    negocio.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <Zap className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Desarrollo Ágil
                      </h3>
                      <p className="text-gray-600">
                        Metodologías ágiles para entregas rápidas y eficientes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Código Seguro
                      </h3>
                      <p className="text-gray-600">
                        Implementamos las mejores prácticas de seguridad
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Soporte Continuo
                      </h3>
                      <p className="text-gray-600">
                        Mantenimiento y soporte técnico post-lanzamiento
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/AI-image3.svg"
                  width="500"
                  height="400"
                  alt="Equipo Baicode"
                  className="aspect-square overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-6 max-w-4xl">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                  ¿Listo para transformar tu
                  <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    negocio con IA?
                  </span>
                </h2>
                <p className="mx-auto max-w-3xl text-xl md:text-2xl text-blue-100 leading-relaxed">
                  Contáctanos hoy y descubre cómo nuestras soluciones de
                  desarrollo de software e inteligencia artificial pueden
                  impulsar tu empresa hacia el futuro
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button
                  className="bg-white text-blue-700 hover:bg-blue-50 hover:text-blue-800 hover:scale-105 transition-all duration-300 text-lg px-8 py-4 shadow-2xl font-semibold"
                  asChild
                >
                  <Link href="/inteligencia-artificial">
                    Ver Servicios de IA
                  </Link>
                </Button>
                <Button
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-700 hover:scale-105 transition-all duration-300 text-lg px-8 py-4 font-semibold shadow-lg"
                  asChild
                >
                  <Link href="#contacto">Solicitar Cotización</Link>
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white/80">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    50+
                  </div>
                  <div className="text-sm">Proyectos completados</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    95%
                  </div>
                  <div className="text-sm">Satisfacción del cliente</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    24/7
                  </div>
                  <div className="text-sm">Soporte técnico</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    5+
                  </div>
                  <div className="text-sm">Años de experiencia</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                    Contáctanos
                  </h2>
                  <p className="text-gray-600 md:text-xl/relaxed">
                    Estamos aquí para ayudarte a hacer realidad tu proyecto
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-600">
                      contacto@baicode.com.ar
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-600">+54 11 3403-2295</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-600">
                      Buenos Aires, Argentina
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-blue-600" />
                    <a
                      href="https://linkedin.com/company/baicode"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      /company/baicode
                    </a>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Envíanos un mensaje</CardTitle>
                  <CardDescription>
                    Cuéntanos sobre tu proyecto y te contactaremos pronto
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Mostrar estado de envío */}
                    {submitStatus.type && (
                      <div
                        className={`p-4 rounded-lg text-sm ${
                          submitStatus.type === "success"
                            ? "bg-green-50 text-green-700 border border-green-200"
                            : "bg-red-50 text-red-700 border border-red-200"
                        }`}
                      >
                        {submitStatus.message}
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Nombre *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Tu nombre"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="tu@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Asunto *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="¿En qué podemos ayudarte?"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Mensaje *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Cuéntanos sobre tu proyecto..."
                        className="min-h-[100px]"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
