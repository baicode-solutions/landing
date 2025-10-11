import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    try {
        const { name, email, subject, message } = await request.json();

        // Validar datos requeridos
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "Todos los campos son requeridos" },
                { status: 400 }
            );
        }

        // Validar formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Formato de email inválido" },
                { status: 400 }
            );
        }

        // Configuración del transporter de nodemailer para Gmail
        const transporter = nodemailer.createTransport({
            service: "gmail", // Usar el servicio predefinido de Gmail
            auth: {
                user: process.env.EMAIL_USER, // Tu email de Gmail
                pass: process.env.EMAIL_PASS, // Tu App Password de Gmail
            },
        });

        // Configurar el contenido del email
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.CONTACT_EMAIL || "contacto@baicode.com.ar",
            subject: `[BAICODE LANDING] ${subject}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); padding: 20px; color: white; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Nuevo mensaje de contacto</h1>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Landing Page Baicode</p>
          </div>
          
          <div style="background: #f8fafc; padding: 30px; border-left: 4px solid #3b82f6;">
            <h2 style="color: #1e293b; margin-top: 0;">Información del contacto:</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 15px 0;">
              <p style="margin: 8px 0; color: #475569;"><strong style="color: #1e293b;">Nombre:</strong> ${name}</p>
              <p style="margin: 8px 0; color: #475569;"><strong style="color: #1e293b;">Email:</strong> ${email}</p>
              <p style="margin: 8px 0; color: #475569;"><strong style="color: #1e293b;">Asunto:</strong> ${subject}</p>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px;">
              <h3 style="color: #1e293b; margin-top: 0;">Mensaje:</h3>
              <div style="background: #f1f5f9; padding: 15px; border-radius: 6px; border-left: 3px solid #3b82f6;">
                <p style="margin: 0; color: #475569; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
              </div>
            </div>
          </div>
          
          <div style="background: #1e293b; padding: 20px; text-align: center; color: #94a3b8;">
            <p style="margin: 0; font-size: 14px;">Este mensaje fue enviado desde el formulario de contacto de baicode.com | Buenos Aires, Argentina</p>
            <p style="margin: 5px 0 0 0; font-size: 12px;">Responde directamente a este email para contactar al cliente</p>
          </div>
        </div>
      `,
            // También enviar una copia de confirmación al cliente
            replyTo: email,
        };

        // Email de confirmación para el cliente
        const confirmationMailOptions = {
            from: process.env.CONTACT_EMAIL,
            to: email,
            subject: "✅ Mensaje recibido - Baicode",
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); padding: 30px; color: white; text-align: center;">
            <h1 style="margin: 0; font-size: 28px;">¡Gracias por contactarnos!</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9; font-size: 16px;">Hemos recibido tu mensaje</p>
          </div>
          
          <div style="background: #f8fafc; padding: 30px;">
            <h2 style="color: #1e293b;">Hola ${name},</h2>
            <p style="color: #475569; line-height: 1.6; font-size: 16px;">
              Gracias por tu interés en <strong>Baicode</strong>. Hemos recibido tu mensaje y nuestro equipo lo revisará pronto.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #22c55e;">
              <h3 style="color: #1e293b; margin-top: 0;">Resumen de tu consulta:</h3>
              <p style="margin: 5px 0; color: #475569;"><strong>Asunto:</strong> ${subject}</p>
              <p style="margin: 5px 0; color: #475569;"><strong>Mensaje:</strong></p>
              <div style="background: #f1f5f9; padding: 15px; border-radius: 6px; margin-top: 10px;">
                <p style="margin: 0; color: #475569;">${message.replace(/\n/g, '<br>')}</p>
              </div>
            </div>
            
            <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #1e293b; margin-top: 0;">🚀 ¿Qué sigue?</h3>
              <ul style="color: #475569; line-height: 1.6; padding-left: 20px;">
                <li>Nuestro equipo revisará tu consulta en las próximas <strong>24 horas</strong></li>
                <li>Te contactaremos para programar una <strong>consulta gratuita</strong></li>
                <li>Analizaremos tus necesidades y te propondremos la mejor solución</li>
              </ul>
            </div>
            
            <p style="color: #475569; line-height: 1.6;">
              Mientras tanto, puedes seguirnos en nuestras redes sociales o explorar más sobre nuestros servicios en 
              <a href="https://baicode.com" style="color: #3b82f6; text-decoration: none;">nuestra web</a>.
            </p>
          </div>
          
          <div style="background: #1e293b; padding: 20px; text-align: center; color: white;">
            <p style="margin: 0; font-size: 18px; font-weight: bold;">¡Estamos emocionados de trabajar contigo! 🎉</p>
            <p style="margin: 10px 0 0 0; color: #94a3b8;">El equipo de Baicode</p>
          </div>
        </div>
      `,
        };

        // Enviar ambos emails
        await transporter.sendMail(mailOptions);
        await transporter.sendMail(confirmationMailOptions);

        return NextResponse.json(
            {
                message: "Mensaje enviado exitosamente",
                success: true
            },
            { status: 200 }
        );

    } catch (error) {
        console.error("Error enviando email:", error);

        return NextResponse.json(
            {
                error: "Error interno del servidor. Por favor intenta más tarde.",
                success: false
            },
            { status: 500 }
        );
    }
}