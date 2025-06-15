"use client"

import { useEffect } from "react"

export function SmoothScroll() {
  useEffect(() => {
    // Función para manejar clics en enlaces internos
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest("a")

      if (!link) return

      const href = link.getAttribute("href")

      // Verificar si es un enlace interno (comienza con #)
      if (href && href.startsWith("#")) {
        e.preventDefault()

        const targetElement = document.querySelector(href)
        if (targetElement) {
          // Scroll suave hacia el elemento
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })

          // Actualizar la URL sin recargar la página
          window.history.pushState(null, "", href)
        }
      }
    }

    // Agregar event listener
    document.addEventListener("click", handleLinkClick)

    // Limpiar event listener
    return () => {
      document.removeEventListener("click", handleLinkClick)
    }
  }, [])

  return null
}
