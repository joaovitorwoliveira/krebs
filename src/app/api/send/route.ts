import { EmailTemplate } from "@/common/components/EmailTemplate";
import { render } from "@react-email/render";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  return Response.json({ message: "API is working! Use POST to send emails." });
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        {
          error: "RESEND_API_KEY not configured",
        },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        {
          error: "Campos obrigatórios: name, email, message",
        },
        { status: 400 }
      );
    }

    console.log("Sending email from:", email);

    const { data, error } = await resend.emails.send({
      from: "Website <onboarding@resend.dev>",

      to: ["comercial@krebsmais.com"],
      // to: ["joaopedrowo@gmail.com"],
      subject: `Nova mensagem de ${name} - Website`,
      html: await render(EmailTemplate({ name, email, message })),
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ error }, { status: 500 });
    }

    console.log("Email sent successfully:", data);
    return Response.json({ success: true, data });
  } catch (error) {
    console.error("Unexpected error:", error);
    return Response.json(
      {
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
