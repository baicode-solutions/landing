"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  User,
  GraduationCap,
  Code,
  Brain,
  Users,
  Award,
  Target,
  Lightbulb,
  Linkedin,
  Mail,
  Github,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedHeader } from "@/components/animated-header";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <AnimatedHeader>
        <div className="ml-auto flex gap-4 sm:gap-6 md:flex-row flex-col md:items-center">
          <Link
            href="/#servicios"
            className="text-sm md:text-sm font-medium hover:text-blue-600 transition-colors focus-visible:focus-visible py-2 md:py-0"
          >
            Servicios
          </Link>
          <Link
            href="/#inteligencia-artificial"
            className="text-sm md:text-sm font-medium hover:text-purple-600 transition-colors focus-visible:focus-visible flex items-center gap-1 py-2 md:py-0"
          >
            <Brain className="h-4 w-4" />
            <span>Inteligencia Artificial</span>
          </Link>
          <Link
            href="/sobre-nosotros"
            className="text-sm md:text-sm font-medium text-blue-600 transition-colors focus-visible:focus-visible py-2 md:py-0"
          >
            Sobre Nosotros
          </Link>
          <Link
            href="/#contacto"
            className="text-sm md:text-sm font-medium hover:text-blue-600 transition-colors focus-visible:focus-visible py-2 md:py-0"
          >
            Contacto
          </Link>
        </div>
      </AnimatedHeader>

      {/* Hero Section */}
      <section className="w-full pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                <Users className="h-4 w-4" />
                Nuestro Equipo
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                Sobre
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Nosotros
                </span>
              </h1>
              <p className="max-w-3xl text-lg md:text-xl text-gray-600 leading-relaxed">
                Conoce al equipo de expertos que hace posible la innovación
                tecnológica en Baicode. Profesionales comprometidos con la
                excelencia y el desarrollo de soluciones que transforman
                negocios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
              Nuestros Colaboradores
            </h2>

            {/* Solution Architect Profile */}
            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm mb-12">
              <CardContent className="p-8 md:p-12">
                <div className="grid gap-8 lg:grid-cols-3 items-start">
                  {/* Profile Image and Basic Info */}
                  <div className="lg:col-span-1 text-center lg:text-left">
                    <div className="relative mx-auto lg:mx-0 w-48 h-48 mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                      <div className="relative bg-gray-200 rounded-2xl w-full h-full flex items-center justify-center overflow-hidden">
                        <User className="h-24 w-24 text-gray-400" />
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">
                        [Nombre del Solution Architect]
                      </h3>
                      <p className="text-blue-600 font-semibold">
                        Solution Architect & Project Lead
                      </p>
                      <p className="text-gray-600">
                        Ingeniero Informático | Docente e Investigador en IA
                      </p>
                    </div>

                    {/* Contact Links */}
                    <div className="flex justify-center lg:justify-start gap-4">
                      <Button
                        size="sm"
                        variant="outline"
                        className="p-2 h-10 w-10"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="p-2 h-10 w-10"
                      >
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="p-2 h-10 w-10"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div className="lg:col-span-2 space-y-8">
                    {/* Experience Summary */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <Award className="h-5 w-5 text-blue-600" />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900">
                          Experiencia Profesional
                        </h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        Ingeniero Informático con más de 5 años de experiencia
                        en arquitectura y desarrollo de productos tecnológicos.
                        Actualmente me desempeño como Solution Architect y
                        Project Lead, liderando equipos multidisciplinarios y
                        diseñando soluciones escalables orientadas a la
                        eficiencia, calidad y sostenibilidad tecnológica.
                      </p>
                    </div>

                    {/* Academic & Research */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-indigo-100 p-2 rounded-lg">
                          <GraduationCap className="h-5 w-5 text-indigo-600" />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900">
                          Ámbito Académico e Investigación
                        </h4>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        Docente universitario e investigador, enfocado en la
                        aplicación de Inteligencia Artificial al desarrollo de
                        sistemas inteligentes y a la optimización de procesos.
                        Mi propósito es integrar la innovación tecnológica con
                        una visión estratégica que potencie el valor de las
                        organizaciones y el desarrollo de talento en el ámbito
                        académico y profesional.
                      </p>
                    </div>

                    {/* Key Skills */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-emerald-100 p-2 rounded-lg">
                          <Target className="h-5 w-5 text-emerald-600" />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900">
                          Especialidades Clave
                        </h4>
                      </div>
                      <div className="grid gap-3 md:grid-cols-2">
                        <div className="flex items-center gap-3">
                          <Code className="h-5 w-5 text-blue-600" />
                          <span className="text-gray-700 font-medium">
                            Arquitectura de Software
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Brain className="h-5 w-5 text-purple-600" />
                          <span className="text-gray-700 font-medium">
                            Inteligencia Artificial
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Users className="h-5 w-5 text-green-600" />
                          <span className="text-gray-700 font-medium">
                            Liderazgo de Equipos
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Lightbulb className="h-5 w-5 text-orange-600" />
                          <span className="text-gray-700 font-medium">
                            Innovación Tecnológica
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Future Team Members Placeholder */}
            <div className="text-center py-12">
              <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-full text-sm font-medium">
                <Users className="h-4 w-4" />
                Próximamente más miembros del equipo...
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Nuestros Valores
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Lightbulb className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    Innovación
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Buscamos constantemente nuevas formas de resolver problemas
                    y crear valor a través de la tecnología.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="bg-indigo-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Award className="h-8 w-8 text-indigo-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    Excelencia
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Nos comprometemos con los más altos estándares de calidad en
                    cada proyecto que emprendemos.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    Colaboración
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Creemos en el poder del trabajo en equipo y la colaboración
                    para lograr resultados excepcionales.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              ¿Quieres formar parte de nuestro equipo?
            </h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Si compartes nuestra pasión por la innovación tecnológica y buscas
              desarrollar tu carrera en un ambiente desafiante, nos encantaría
              conocerte.
            </p>
            <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 hover:text-blue-800 hover:scale-105 transition-all duration-300 text-lg px-8 py-4 shadow-2xl font-semibold"
              >
                Únete al Equipo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-700 hover:scale-105 transition-all duration-300 text-lg px-8 py-4 font-semibold shadow-lg"
                asChild
              >
                <Link href="/#contacto">Contáctanos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
