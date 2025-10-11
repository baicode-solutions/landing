import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Baicode - Desarrollo de Software e IA",
    default:
      "Baicode - Desarrollo de Software e Inteligencia Artificial | Soluciones Tecnológicas Profesionales",
  },
  description:
    "Baicode es una empresa líder en desarrollo de software e implementación de inteligencia artificial. Ofrecemos soluciones tecnológicas innovadoras: desarrollo web, apps móviles, APIs, y servicios de IA para impulsar tu negocio.",
  keywords: [
    "desarrollo software",
    "inteligencia artificial",
    "IA",
    "desarrollo web",
    "aplicaciones móviles",
    "APIs",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "machine learning",
    "AI implementation",
    "Baicode",
    "soluciones tecnológicas",
  ],
  authors: [{ name: "Baicode Team" }],
  creator: "Baicode",
  publisher: "Baicode",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://baicode.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Baicode - Desarrollo de Software e Inteligencia Artificial",
    description:
      "Transformamos ideas en soluciones tecnológicas innovadoras. Especialistas en desarrollo de software e implementación de IA para impulsar tu negocio.",
    url: "https://baicode.com",
    siteName: "Baicode",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Baicode - Desarrollo de Software e IA",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baicode - Desarrollo de Software e Inteligencia Artificial",
    description:
      "Especialistas en desarrollo de software e implementación de IA. Soluciones tecnológicas innovadoras.",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Baicode",
              url: "https://baicode.com",
              logo: "https://baicode.com/images/baicode-logo.png",
              description:
                "Empresa líder en desarrollo de software e implementación de inteligencia artificial",
              foundingDate: "2020",
              sameAs: [
                "https://linkedin.com/company/baicode",
                "https://github.com/baicode-solutions",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "customer service",
                email: "contacto@baicode.com.ar",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "ES",
              },
              serviceArea: {
                "@type": "Place",
                name: "Global",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de Desarrollo",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Desarrollo de Software",
                      description: "Desarrollo de aplicaciones web y móviles",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Inteligencia Artificial",
                      description:
                        "Implementación de soluciones de IA y machine learning",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
