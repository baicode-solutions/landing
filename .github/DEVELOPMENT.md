# Documentación Técnica - Baicode Landing

## 📋 Tabla de Contenidos

- [Descripción del Proyecto](#descripción-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Configuración Inicial](#configuración-inicial)
- [Desarrollo](#desarrollo)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Flujo de Trabajo con Git](#flujo-de-trabajo-con-git)
- [Estándares de Código](#estándares-de-código)
- [Despliegue](#despliegue)
- [Solución de Problemas](#solución-de-problemas)

## 📖 Descripción del Proyecto

Landing page oficial de Baicode, construida con Next.js 15, React 19, TypeScript y Tailwind CSS. Incluye componentes modernos de UI con animaciones suaves y un diseño responsive.

## 🛠️ Tecnologías Utilizadas

- **Framework**: Next.js 15.2.4
- **Runtime**: React 19
- **Lenguaje**: TypeScript 5
- **Estilos**: Tailwind CSS 3.4.17
- **UI Components**: Radix UI + shadcn/ui
- **Animaciones**: Framer Motion
- **Gestión de Paquetes**: pnpm
- **Temas**: next-themes

## ⚙️ Configuración Inicial

### Prerrequisitos

- Node.js 18+
- pnpm (recomendado) o npm
- Git

### Instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/baicode-solutions/landing.git
   cd landing
   ```

2. **Instalar dependencias**

   ```bash
   pnpm install
   # o
   npm install
   ```

3. **Configurar variables de entorno** (si es necesario)

   ```bash
   cp .env.example .env.local
   # Editar .env.local con tus configuraciones
   ```

4. **Ejecutar en modo desarrollo**

   ```bash
   pnpm dev
   # o
   npm run dev
   ```

5. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 🚀 Desarrollo

### Comandos Disponibles

```bash
# Desarrollo
pnpm dev          # Inicia servidor de desarrollo
pnpm build        # Construye para producción
pnpm start        # Inicia servidor de producción
pnpm lint         # Ejecuta el linter
```

### Comandos de Git Recomendados

```bash
# Crear una nueva rama para feature
git checkout -b feature/nueva-funcionalidad

# Commit con mensaje descriptivo
git commit -m "feat: agregar nueva sección de servicios"

# Push de la rama
git push origin feature/nueva-funcionalidad
```

## 📁 Estructura del Proyecto

```
landing/
├── .github/               # Configuración de GitHub
│   ├── ISSUE_TEMPLATE/   # Plantillas de issues
│   ├── workflows/        # GitHub Actions
│   ├── CONTRIBUTING.md   # Guía de contribución
│   └── pull_request_template.md
├── app/                  # App Router de Next.js 15
│   ├── globals.css      # Estilos globales
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Página principal
├── components/          # Componentes reutilizables
│   ├── ui/             # Componentes base de shadcn/ui
│   ├── animated-header.tsx
│   ├── animated-section.tsx
│   ├── hero-logo.tsx
│   ├── logo.tsx
│   ├── smooth-scroll.tsx
│   └── theme-provider.tsx
├── hooks/              # Hooks personalizados
├── lib/                # Utilidades y configuraciones
├── public/             # Recursos estáticos
│   └── images/         # Imágenes y logos
├── styles/             # Estilos adicionales
├── components.json     # Configuración de shadcn/ui
├── tailwind.config.ts  # Configuración de Tailwind
└── tsconfig.json      # Configuración de TypeScript
```

## 🔄 Flujo de Trabajo con Git

### Ramas

- **`main`**: Rama principal de producción
- **`develop`**: Rama de desarrollo (si se usa)
- **`feature/nombre`**: Ramas para nuevas funcionalidades
- **`hotfix/nombre`**: Ramas para correcciones urgentes
- **`release/version`**: Ramas para preparar releases

### Proceso de Contribución

Ver [CONTRIBUTING.md](./CONTRIBUTING.md) para el proceso completo.

### Convenciones de Commits

Usar formato conventional commits:

```
tipo(ámbito): descripción

feat: nueva funcionalidad
fix: corrección de bug
docs: documentación
style: cambios de formato/estilo
refactor: refactorización de código
test: agregar o modificar tests
chore: tareas de mantenimiento
```

Ejemplos:

```bash
git commit -m "feat: agregar sección de testimonios"
git commit -m "fix: corregir responsive en móviles"
git commit -m "docs: actualizar README"
git commit -m "style: mejorar espaciado en header"
```

## 📐 Estándares de Código

### TypeScript

- Usar tipos explícitos
- Evitar `any`
- Usar interfaces para objetos complejos
- Implementar props interfaces para componentes

### Componentes React

- Usar componentes funcionales
- Implementar props con TypeScript interfaces
- Usar hooks apropiados (useState, useEffect, etc.)
- Componentes en PascalCase

### Estilos

- Usar Tailwind CSS classes
- Mantener consistencia con el design system
- Usar variables CSS para colores personalizados
- Responsive design (mobile-first)

### Estructura de Archivos

- Un componente por archivo
- Nombres de archivo en kebab-case
- Exportar como default el componente principal
- Colocar tipos/interfaces en el mismo archivo del componente

## 🚀 Despliegue

### Vercel (Recomendado)

1. **Conectar repositorio a Vercel**
2. **Configuración automática** (Vercel detecta Next.js)
3. **Variables de entorno** en dashboard de Vercel
4. **Deploy automático** en push a main

### GitHub Actions

El proyecto incluye workflows automatizados:

- **Deploy**: Despliega automáticamente a producción
- **Quality Check**: Verifica calidad del código en PRs
- **Lighthouse**: Auditoría de performance

### Otros Proveedores

- **Netlify**: Configurar build command: `pnpm build`
- **AWS Amplify**: Usar configuración de Next.js
- **Railway**: Deploy directo desde GitHub

### Build Local para Producción

```bash
pnpm build
pnpm start
```

## 🔧 Solución de Problemas

### Problemas Comunes

#### Error de instalación de dependencias

```bash
# Limpiar cache
pnpm store prune
rm -rf node_modules
pnpm install
```

#### Errores de TypeScript

```bash
# Verificar configuración
npx tsc --noEmit
```

#### Problemas de estilos

```bash
# Recompilar Tailwind
pnpm dev
```

#### Build failures

```bash
# Verificar errores de linting
pnpm lint
pnpm build
```

### Recursos de Ayuda

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI Components](https://www.radix-ui.com/)
- [shadcn/ui Components](https://ui.shadcn.com/)

### Contacto del Equipo

Para preguntas específicas del proyecto:

- Crear issue en GitHub usando las plantillas
- Contactar al equipo de desarrollo
- Revisar documentación existente

---

## 📝 Notas Adicionales

- Mantener este documento actualizado con cambios significativos
- Documentar nuevas funcionalidades importantes
- Agregar ejemplos de uso para componentes complejos
- Mantener screenshots actualizados en PRs

**Última actualización**: Octubre 2025
