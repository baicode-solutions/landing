// Scri  console.log('🧪 Probando configuración SMTP de Gmail...\n');t de prueba para verificar la configuración SMTP de Zoho
// Ejecutar con: node test-smtp.js

const nodemailer = require("nodemailer");
require("dotenv").config({ path: ".env.local" });

async function testSMTP() {
  console.log("🧪 Probando configuración SMTP de Zoho Mail...\n");

  // Verificar variables de entorno
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("❌ Error: Variables de entorno no configuradas");
    console.log("Asegúrate de tener EMAIL_USER y EMAIL_PASS en .env.local");
    return;
  }

  console.log(`📧 Usuario de email: ${process.env.EMAIL_USER}`);
  console.log(
    `📧 Email de contacto: ${process.env.CONTACT_EMAIL || "No configurado"}\n`
  );

  // Configurar transporter para Gmail
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Verificar conexión
    console.log("🔍 Verificando conexión SMTP...");
    await transporter.verify();
    console.log("✅ Conexión SMTP exitosa!\n");

    // Enviar email de prueba
    console.log("📤 Enviando email de prueba...");
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER,
      subject: "🧪 Prueba SMTP - Baicode Landing",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); padding: 30px; color: white; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">🎉 ¡Configuración Exitosa!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Gmail SMTP está funcionando correctamente</p>
          </div>
          
          <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e2e8f0;">
            <h2 style="color: #1e293b; margin-top: 0;">✅ Prueba SMTP Exitosa</h2>
            <p style="color: #475569; line-height: 1.6;">
              Este email confirma que tu configuración SMTP de Gmail está funcionando correctamente.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #22c55e;">
              <h3 style="color: #1e293b; margin-top: 0;">Configuración verificada:</h3>
              <ul style="color: #475569; margin: 10px 0;">
                <li><strong>Servidor:</strong> Gmail SMTP</li>
                <li><strong>Puerto:</strong> 587 (STARTTLS)</li>
                <li><strong>Usuario:</strong> ${process.env.EMAIL_USER}</li>
                <li><strong>Estado:</strong> ✅ Conectado</li>
              </ul>
            </div>
            
            <p style="color: #475569; line-height: 1.6;">
              <strong>🚀 ¡Todo listo!</strong> El formulario de contacto de tu landing page ya puede enviar emails.
            </p>
          </div>
        </div>
      `,
    });

    console.log("✅ Email de prueba enviado exitosamente!");
    console.log(`📬 Message ID: ${info.messageId}\n`);

    console.log("🎉 ¡Configuración completa y funcionando!");
    console.log(
      "Puedes proceder a probar el formulario de contacto en tu landing page."
    );
  } catch (error) {
    console.error("❌ Error en la configuración SMTP:");
    console.error(error.message);

    // Sugerencias de solución
    console.log("\n🔧 Posibles soluciones:");
    console.log("1. Verifica que EMAIL_USER y EMAIL_PASS estén correctos");
    console.log("2. Asegúrate de usar tu email completo (usuario@dominio.com)");
    console.log(
      "3. Si usas dominio propio, verifica que esté configurado en Zoho"
    );
    console.log(
      "4. Intenta generar una App Password en Zoho para mayor seguridad"
    );
    console.log("5. Verifica que no tengas restricciones de firewall");
  }
}

// Ejecutar prueba
testSMTP()
  .then(() => {
    console.log("\n✨ Prueba completada");
    process.exit(0);
  })
  .catch((error) => {
    console.error("\n💥 Error inesperado:", error);
    process.exit(1);
  });
