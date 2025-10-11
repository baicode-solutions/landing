import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros - Baicode | Equipo de Expertos en Desarrollo y IA",
  description:
    "Conoce al equipo de Baicode: Solution Architects, desarrolladores e investigadores en IA comprometidos con la innovación tecnológica y el crecimiento de tu negocio.",
  keywords:
    "equipo baicode, solution architect, desarrolladores, inteligencia artificial, experiencia, liderazgo tecnológico",
  openGraph: {
    title: "Sobre Nosotros - Equipo Baicode",
    description: "Conoce a los expertos que impulsan la innovación en Baicode",
    type: "website",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
