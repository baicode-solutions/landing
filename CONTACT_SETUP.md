# 📧 Configuración del Sistema de Contacto

## 🎯 ¿Qué hace este sistema?

El sistema de contacto permite que los visitantes de tu landing page envíen mensajes directamente a tu email. Cuando alguien completa el formulario:

1. **📩 Recibes un email** con toda la información del contacto
2. **✅ El cliente recibe confirmación** de que su mensaje fue recibido
3. **💾 Todo queda registrado** para hacer seguimiento

## ⚙️ Configuración Paso a Paso

### 1. Configurar Zoho Mail (Recomendado Profesional) 🚀

Zoho Mail es una excelente opción profesional con SMTP gratuito y confiable.

#### Paso 1: Configurar tu cuenta de Zoho Mail

1. Ve a https://www.zoho.com/mail/
2. Crea tu cuenta o inicia sesión
3. Si tienes dominio propio, configúralo en Zoho (opcional pero recomendado)

#### Paso 2: Configurar Variables de Entorno para Zoho

1. Abre el archivo `.env.local` en la raíz del proyecto
2. Configura con tus credenciales de Zoho:

```env
EMAIL_USER=tu-email@tudominio.com        # Tu email de Zoho (o @zohomail.com)
EMAIL_PASS=tu-contraseña-zoho           # Tu contraseña de Zoho
CONTACT_EMAIL=contacto@baicode.com.ar   # Email donde quieres recibir mensajes
```

#### Configuración SMTP de Zoho:

- **Servidor**: `smtppro.zoho.com`
- **Puerto**: `587` (STARTTLS) o `465` (SSL)
- **Seguridad**: STARTTLS recomendado
- **Autenticación**: Usuario y contraseña

#### ✅ Ventajas de Zoho Mail:

- 🆓 **Gratuito**: 5GB de almacenamiento por usuario
- 🏢 **Profesional**: Perfecto para empresas
- 📧 **Dominio propio**: Puedes usar tu dominio personalizado
- 🔒 **Seguro**: Excelente reputación de entrega
- 🌍 **Sin límites de región**: Funciona globalmente
- ⚡ **Rápido**: Entrega inmediata de emails

#### Paso 3: Opcional - App Password (Mayor Seguridad)

Para mayor seguridad, puedes generar una App Password:

1. Ve a Zoho Mail → Settings → Security → App Passwords
2. Genera una nueva App Password para "SMTP"
3. Usa esa contraseña en lugar de tu contraseña normal

### 2. Configurar Gmail (Alternativo)

#### Paso 1: Crear App Password en Gmail

1. Ve a tu cuenta de Google: https://myaccount.google.com/
2. Haz clic en "Seguridad" en el panel izquierdo
3. Activa la "Verificación en dos pasos" si no está activada
4. Una vez activada, busca "Contraseñas de aplicaciones"
5. Genera una nueva contraseña para "Correo"
6. **¡GUARDA ESTA CONTRASEÑA!** La necesitarás más adelante

#### Paso 2: Configurar Variables de Entorno

1. Abre el archivo `.env.local` en la raíz del proyecto
2. Reemplaza los valores:

```env
EMAIL_USER=tu-email@gmail.com          # Tu email de Gmail
EMAIL_PASS=abcd-efgh-ijkl-mnop        # La App Password que generaste
CONTACT_EMAIL=contacto@baicode.com.ar     # Email donde quieres recibir los mensajes
```

### 2. Probar la Configuración SMTP

#### Opción A: Script de Prueba Rápida (Recomendado)

```bash
# Instalar dotenv si no lo tienes
npx pnpm add dotenv

# Ejecutar script de prueba
node test-smtp.js
```

Este script verificará tu configuración SMTP y enviará un email de prueba.

#### Opción B: Probar en la Landing Page

1. Inicia el servidor de desarrollo:

```bash
npm run dev
```

2. Ve a http://localhost:3000
3. Llena el formulario de contacto
4. ¡Deberías recibir el email en pocos segundos!

## 🔧 Proveedores Alternativos

### Resend (Recomendado para producción)

Si prefieres usar Resend (más profesional para producción):

1. Crea cuenta en https://resend.com/
2. Obtén tu API key
3. Reemplaza el código en `app/api/contact/route.ts`:

```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// En lugar de nodemailer, usa:
await resend.emails.send({
  from: 'onboarding@resend.dev',
  to: [process.env.CONTACT_EMAIL],
  subject: `[BAICODE LANDING] ${subject}`,
  html: // ... tu HTML
});
```

### Otros proveedores SMTP

Para usar otros proveedores, modifica en `route.ts`:

```typescript
const transporter = nodemailer.createTransporter({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

## 🚀 Para Producción

### Variables de Entorno en Vercel

1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega:
   - `EMAIL_USER`: tu-email@gmail.com
   - `EMAIL_PASS`: tu-app-password
   - `CONTACT_EMAIL`: contacto@baicode.com.ar

### Verificar que funciona

- Haz deploy de tu aplicación
- Prueba el formulario en la URL de producción
- Verifica que lleguen los emails

## 📧 Personalizar Emails

Los emails se pueden personalizar editando el HTML en `app/api/contact/route.ts`:

- **Email que recibes**: Líneas 31-70
- **Email de confirmación**: Líneas 75-140

## 🐛 Solución de Problemas

### "Error 500" al enviar formulario

- ✅ Verifica que las variables de entorno están configuradas
- ✅ Para Zoho: Comprueba usuario y contraseña
- ✅ Para Gmail: Verifica que la App Password es correcta
- ✅ Revisa la consola del navegador para más detalles

### No llegan los emails (Zoho Mail)

- ✅ Verifica tu bandeja de spam
- ✅ Confirma que el EMAIL_USER incluye el dominio completo
- ✅ Prueba con tu contraseña normal primero, luego App Password
- ✅ Verifica que tu dominio esté verificado en Zoho (si usas dominio propio)

### No llegan los emails (Gmail)

- ✅ Verifica tu bandeja de spam
- ✅ Comprueba que el EMAIL_USER es correcto
- ✅ Asegúrate de que tienes la verificación en dos pasos activada en Gmail

### Emails de confirmación no funcionan

- ✅ Verifica que el campo "email" en el formulario es válido
- ✅ Revisa los logs del servidor

## 🎨 Personalización Adicional

### Agregar más campos al formulario:

1. Agrega el campo en el estado `formData`
2. Agrega el input en el JSX
3. Incluye el campo en el email template

### Cambiar diseño del email:

- Los emails usan HTML inline CSS
- Puedes usar herramientas como MJML para emails más complejos

¡Con esta configuración tendrás un sistema de contacto profesional funcionando! 🚀
