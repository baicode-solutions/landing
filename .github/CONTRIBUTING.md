# Guía de Contribución - Baicode Landing

¡Gracias por tu interés en contribuir al landing page de Baicode! Esta guía te ayudará a entender cómo colaborar de manera efectiva.

## 📋 Tabla de Contenidos

- [Configuración Inicial](#configuración-inicial)
- [Flujo de Trabajo](#flujo-de-trabajo)
- [Estándares de Código](#estándares-de-código)
- [Pull Requests](#pull-requests)
- [Reportar Bugs](#reportar-bugs)
- [Contacto](#contacto)

## ⚙️ Configuración Inicial

### Prerrequisitos

- Node.js 18+
- pnpm (recomendado) o npm
- Git

### Setup del Proyecto

1. **Fork del repositorio** (para colaboradores externos)
2. **Clonar el repositorio**

   ```bash
   git clone https://github.com/baicode-solutions/landing.git
   cd landing
   ```

3. **Instalar dependencias**

   ```bash
   pnpm install
   ```

4. **Ejecutar en desarrollo**
   ```bash
   pnpm dev
   ```

## 🔄 Flujo de Trabajo

### Ramas

- **`main`**: Rama principal de producción
- **`feature/nombre`**: Ramas para nuevas funcionalidades
- **`hotfix/nombre`**: Ramas para correcciones urgentes

### Proceso de Contribución

1. **Crear issue** (recomendado)

   - Describe el problema o funcionalidad
   - Usa las plantillas proporcionadas

2. **Crear rama desde main**

   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/descripcion-breve
   ```

3. **Desarrollar y hacer commits**
   - Sigue las convenciones de commits
   - Commits pequeños y atómicos
4. **Push y Pull Request**
   ```bash
   git push origin feature/descripcion-breve
   ```

## 📐 Estándares de Código

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

**Ejemplos:**

```bash
git commit -m "feat: agregar sección de testimonios"
git commit -m "fix: corregir responsive en móviles"
git commit -m "docs: actualizar README"
```

### TypeScript

- Usar tipos explícitos
- Evitar `any`
- Usar interfaces para objetos complejos
- Props interfaces para componentes

### React

- Componentes funcionales
- Props con TypeScript interfaces
- Hooks apropiados (useState, useEffect, etc.)
- PascalCase para componentes

### Estilos

- Tailwind CSS classes
- Consistencia con design system
- Variables CSS para colores personalizados
- Mobile-first responsive design

### Estructura de Archivos

- Un componente por archivo
- Nombres en kebab-case
- Export default para componente principal
- Tipos/interfaces en el mismo archivo

## 📝 Pull Requests

### Antes de Crear un PR

- [ ] Código funciona localmente
- [ ] Tests pasan (si aplica)
- [ ] Linting sin errores
- [ ] Build exitoso
- [ ] Cambios documentados

### Plantilla de PR

```markdown
## Descripción

Breve descripción de los cambios

## Tipo de Cambio

- [ ] Bug fix
- [ ] Nueva funcionalidad
- [ ] Breaking change
- [ ] Documentación

## Checklist

- [ ] Mi código sigue los estándares del proyecto
- [ ] He realizado una auto-review de mi código
- [ ] He agregado comentarios en código complejo
- [ ] Mis cambios no generan warnings
- [ ] He probado en diferentes tamaños de pantalla

## Screenshots (si aplica)

Agregar capturas de pantalla de cambios visuales
```

### Review Process

- Al menos 1 approval requerido
- Verificar build exitoso
- Probar cambios localmente
- Verificar responsive design
- Código limpio y documentado

## 🐛 Reportar Bugs

### Antes de Reportar

1. Buscar en issues existentes
2. Verificar con la última versión
3. Reproducir el problema

### Template de Bug Report

```markdown
## Descripción del Bug

Descripción clara y concisa del bug

## Pasos para Reproducir

1. Ir a '...'
2. Hacer click en '....'
3. Scroll hasta '....'
4. Ver error

## Comportamiento Esperado

Descripción de lo que esperabas que pasara

## Screenshots

Si aplica, agregar screenshots del problema

## Información del Sistema

- OS: [ej. Windows 11]
- Browser: [ej. Chrome 118]
- Versión: [ej. 22]
```

## 🚀 Desarrollo

### Comandos Útiles

```bash
pnpm dev          # Servidor desarrollo
pnpm build        # Build producción
pnpm start        # Servidor producción
pnpm lint         # Linter
pnpm type-check   # Verificar tipos TS
```

### Estructura del Proyecto

```
landing/
├── .github/           # Configuración GitHub
├── app/              # App Router Next.js 15
├── components/       # Componentes reutilizables
├── hooks/           # Custom hooks
├── lib/             # Utilidades
├── public/          # Assets estáticos
└── styles/          # Estilos globales
```

## 🔧 Solución de Problemas

### Errores Comunes

**Dependencias:**

```bash
pnpm store prune
rm -rf node_modules
pnpm install
```

**TypeScript:**

```bash
npx tsc --noEmit
```

**Build:**

```bash
pnpm lint
pnpm build
```

## 📞 Contacto

- **Issues**: Para bugs y feature requests
- **Discussions**: Para preguntas generales
- **Email**: Para contacto directo con el equipo

---

¡Gracias por contribuir a Baicode! 🎉
