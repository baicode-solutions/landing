import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json()

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: email,
      to: 'info@baicode.com.ar',
      subject: subject ? `[Contacto Web] ${subject}` : 'Contacto desde la web',
      text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
    })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Email error', error)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
