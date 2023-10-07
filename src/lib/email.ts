import nodemailer from "nodemailer"

type EmailPayload = {
  to: string
  subject: string
  html: string
}

// Replace with your SMTP credentials
const smtpOptions = {
  host: process.env.NODEMAILER_HOST,
  port: parseInt(process.env.NODEMAILER_PORT || "587"),
  secure: false,
  auth: {
    user: process.env.NODEMAILER_USER || "user",
    pass: process.env.NODEMAILER_PW || "password",
  },
}

export const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  })

  return await transporter.sendMail({
    from: process.env.NODEMAILER_FROM_EMAIL,
    ...data,
  })
}