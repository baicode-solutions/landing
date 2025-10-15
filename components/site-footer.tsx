import Link from "next/link";
import { Logo } from "./logo";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white mt-24">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Logo />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Especialistas en desarrollo de software e implementación de
              inteligencia artificial. Transformamos ideas en soluciones
              tecnológicas innovadoras.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <span>contacto@baicode.com.ar</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <span>+54 11 3403-2295</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Servicios</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/servicios/desarrollo-web"
                  className="hover:text-white transition-colors"
                >
                  Desarrollo Web
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/apps-moviles"
                  className="hover:text-white transition-colors"
                >
                  Apps Móviles
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios/consulting-it"
                  className="hover:text-white transition-colors"
                >
                  Consulting IT
                </Link>
              </li>
              <li>
                <Link
                  href="/inteligencia-artificial"
                  className="hover:text-purple-300 transition-colors"
                >
                  Inteligencia Artificial
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Empresa</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/sobre-nosotros"
                  className="hover:text-white transition-colors"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/#contacto"
                  className="hover:text-white transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Baicode. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">Síguenos:</span>
            <Link
              href="https://linkedin.com/company/baicode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
