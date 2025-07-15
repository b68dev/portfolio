'use server'

import type { NextRequest } from 'next/server'
import { SendSmtpEmail, TransactionalEmailsApi, TransactionalEmailsApiApiKeys } from '@getbrevo/brevo'

import { NextResponse } from 'next/server'

// eslint-disable-next-line node/prefer-global/process
const APIKEY = process.env.BREVO_API_KEY ?? ''
const emailAPI = new TransactionalEmailsApi()

export async function POST(req: NextRequest) {
  try {
    const { data }: { data: { message: string; name: string; email: string } } = await req.json()

    // transfrom to a professional email format
    const mail = `
    Hey Jyotirmoy,
    
    You have received a new message from ${data.name} (${data.email}).

    Here is the message:
    ${data.message}

    Please reply to them at ${data.email}.
    
    Cheers,
    Vector from b68.dev
    `

    const message = new SendSmtpEmail()

    message.subject = `${data.name} sent a message via Portfolio`
    message.textContent = mail
    message.sender = { name: 'Vector from b68.dev', email: 'vector@itsmebravo.dev' }
    message.replyTo = { email: data.email, name: data.name }
    message.to = [{ email: 'hi@b68.dev', name: 'Jyotirmoy Bandyopadhayaya' }]

    await emailAPI.setApiKey(TransactionalEmailsApiApiKeys.apiKey, APIKEY)

    await emailAPI.sendTransacEmail(message).catch((_err) => {
      console.error('Error sending email:', _err.body)
      return NextResponse.error()
    })

    return NextResponse.json({
      message: 'success',
    })
    // eslint-disable-next-line unused-imports/no-unused-vars
  } catch (_) {
    return NextResponse.error()
  }
}
