"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Smartphone, Globe, Database, Shield, Zap, CheckCircle, Mail, Phone, MapPin, Laptop, BrainCog, UserSearch } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AnimatedHeader } from "@/components/animated-header"
import { SmoothScroll } from "@/components/smooth-scroll"
import { Logo } from "@/components/logo"

export default function BaicodeLanding() {
  let content_1 = "/images/content_4.png"
  let content_2 = "/images/content_2.png"

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SmoothScroll />

      {/* Header */}
      <AnimatedHeader>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#servicios" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Servicios
          </Link>
          <Link href="#nosotros" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Nosotros
          </Link>
          <Link href="#proyectos" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Proyectos
          </Link>
          <Link href="#contacto" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Contacto
          </Link>
        </nav>
      </AnimatedHeader>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center justify-center mb-8 lg:justify-start">
                  <Image
                    src="/images/baicode-logo.png"
                    alt="Baicode Logo"
                    width={80}
                    height={80}
                    className="h-16 w-16 md:h-20 md:w-20 object-contain"
                    priority
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                    Desarrollo de Software
                    <span className="text-blue-600"> Profesional</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    En Baicode transformamos tus ideas en soluciones tecnológicas innovadoras. Especialistas en
                    desarrollo e implementación de software a medida.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Comenzar Proyecto
                  </Button>
                  <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    Ver Portafolio
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Consulta gratuita</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Soporte 24/7</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={content_1}
                  width="800"
                  height="800"
                  alt="Desarrollo de Software"
                  className="aspect-video rounded-xl object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicios" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">Nuestros Servicios</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofrecemos soluciones tecnológicas completas para impulsar tu negocio
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <Card className="border-blue-100 hover:border-blue-300 transition-colors">
                <CardHeader className="text-center">
                  <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-blue-900">Desarrollo Web</CardTitle>
                  <CardDescription>Aplicaciones web modernas y responsivas con las últimas tecnologías</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      React, Next.js
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Diseño responsivo
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      SEO optimizado
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-100 hover:border-blue-300 transition-colors">
                <CardHeader className="text-center">
                  <Smartphone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-blue-900">Apps Móviles</CardTitle>
                  <CardDescription>Aplicaciones nativas y multiplataforma para iOS y Android</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      React Native
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      UI/UX intuitivo
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Integración con APIs
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-100 hover:border-blue-300 transition-colors">
                <CardHeader className="text-center">
                  <Database className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-blue-900">Backend & APIs</CardTitle>
                  <CardDescription>Arquitecturas robustas y escalables para tus aplicaciones</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      .NET, Node.js, Python, Golang
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      APIs RESTful y GraphQL
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Bases de datos optimizadas
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-100 hover:border-blue-300 transition-colors">
                <CardHeader className="text-center">
                  <Laptop className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-blue-900">Consultoría IT</CardTitle>
                  <CardDescription>Asesoría experta para optimizar tu infraestructura y procesos tecnológicos</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Estrategia tecnológica
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Migración a la nube
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Seguridad y buenas prácticas
                    </li>
                  </ul>
                </CardContent>
              </Card>

                <Card className="border-blue-100 hover:border-blue-300 transition-colors">
                  <CardHeader className="text-center">
                    <BrainCog className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle className="text-blue-900">Productos de IA</CardTitle>
                    <CardDescription>Desarrollo de soluciones inteligentes adaptadas a tu negocio</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Modelos de machine learning
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Integración con tus sistemas
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Análisis de datos avanzado
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-blue-100 hover:border-blue-300 transition-colors">
                  <CardHeader className="text-center">
                    <UserSearch className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle className="text-blue-900">Recruiting IT</CardTitle>
                    <CardDescription>Búsqueda y selección de talento tecnológico</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Perfiles a medida
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Evaluación técnica
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Integración rápida
                      </li>
                    </ul>
                  </CardContent>
                </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="nosotros" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                    ¿Por qué elegir Baicode?
                  </h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Somos un equipo de desarrolladores apasionados por crear soluciones tecnológicas que impulsen el
                    crecimiento de tu negocio.
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-start gap-3">
                    <Zap className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Desarrollo Ágil</h3>
                      <p className="text-gray-600">Metodologías ágiles para entregas rápidas y eficientes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Código Seguro</h3>
                      <p className="text-gray-600">Implementamos las mejores prácticas de seguridad</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Soporte Continuo</h3>
                      <p className="text-gray-600">Mantenimiento y soporte técnico post-lanzamiento</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={content_2}
                  width="500"
                  height="400"
                  alt="Equipo Baicode"
                  className="aspect-square rounded-xl object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  ¿Listo para comenzar tu proyecto?
                </h2>
                <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contáctanos hoy y descubre cómo podemos transformar tu idea en realidad
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  Solicitar Cotización
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Agendar Consulta
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">Contáctanos</h2>
                  <p className="text-gray-600 md:text-xl/relaxed">
                    Estamos aquí para ayudarte a hacer realidad tu proyecto
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-600">contacto@baicode.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-600">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-600">Ciudad, País</span>
                  </div>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Envíanos un mensaje</CardTitle>
                  <CardDescription>Cuéntanos sobre tu proyecto y te contactaremos pronto</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Nombre</label>
                      <Input placeholder="Tu nombre" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input type="email" placeholder="tu@email.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Asunto</label>
                    <Input placeholder="¿En qué podemos ayudarte?" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Mensaje</label>
                    <Textarea placeholder="Cuéntanos sobre tu proyecto..." className="min-h-[100px]" />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Enviar Mensaje</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
        <Logo size="sm" />
        <p className="text-xs text-gray-500 sm:ml-4">© 2024 Baicode. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            Términos de Servicio
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500">
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  )
}
