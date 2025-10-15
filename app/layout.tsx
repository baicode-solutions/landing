import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
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
    "Argentina",
    "Buenos Aires",
    "consulting IT",
    "Azure",
    "microservices",
    "React Native",
    "OpenAI",
    "Claude AI",
    "automatización",
    "transformación digital",
  ],
  category: "technology",
  classification: "Business",
  referrer: "origin-when-cross-origin",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      // We also expose the main brand PNG as a fallback favicon (browsers will pick the first they support)
      { url: "/images/baicode-logo.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [
      { rel: "manifest", url: "/manifest.json" },
      { rel: "author", url: "/humans.txt" },
      { rel: "sitemap", url: "/sitemap.xml" },
    ],
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
        {/* favicon & manifest links now handled by metadata.icons */}
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
                telephone: "+54 11 3403-2295",
                contactType: "customer service",
                email: "contacto@baicode.com.ar",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "AR",
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
      <body className="antialiased">
        {children}
        <GoogleTagManager gtmId="G-ZGX77GC710" />
      </body>
    </html>
  );
}
