import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Baicode - Desarrollo de Software y Consultoría IT',
  description:
    'Servicios profesionales de desarrollo web, apps móviles, backend, consultoría IT y productos de inteligencia artificial.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
