import { NextRequest, NextResponse } from 'next/server';
import { render } from "@react-email/render";
import MessageTemplate from "../../../email/template";
import { sendEmail } from "../../../lib/email";

export async function POST( req: NextRequest ) {
    try {
        const body = await req.json();
        const { name, email, topic, message } = body;
        console.log('Request body:', body);
        const emailHtml = render(MessageTemplate({ name, email, topic, message }));

        await sendEmail({
            to: "ng.tymothy@gmail.com",
            subject: "New message from your website",
            html: emailHtml,
        });

        return NextResponse.json({ message: "Email sent successfully" });
    } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}