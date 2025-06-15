# landing

Landing page desarrollada con Next.js y Tailwind CSS.

## Recomendaciones SEO

- Definir metadatos de `title` y `description` claros en `app/layout.tsx`.
- Usar etiquetas `alt` descriptivas en todas las imágenes.
- Añadir palabras clave en encabezados y enlaces.

## Recomendaciones de Diseño

- Mejorar el contraste entre texto y fondo para accesibilidad.
- Incluir testimonios o casos de éxito para generar confianza.
- Optimizar las imágenes para reducir tiempos de carga.

## Configuración de Email

Para que el formulario de contacto envíe correos se debe crear un archivo `.env`
con las siguientes variables (ver `.env.example`):

```
SMTP_HOST=smtp.ejemplo.com
SMTP_PORT=465
SMTP_USER=usuario
SMTP_PASS=contraseña
```
