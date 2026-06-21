import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return new NextResponse("RESEND_API_KEY non configurée", { status: 500 });
  }

  try {
    const body = await req.json();
    const { name, email, message, social } = body;

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "mory.coulibaly@epitech.eu",
      replyTo: email,
      subject: `[Portfolio] Nouveau message de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Nouveau message depuis ton portfolio</h2>
          <hr style="border: 1px solid #eee;" />
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
          ${social ? `<p><strong>Réseau social :</strong> <a href="${social}">${social}</a></p>` : ""}
          <hr style="border: 1px solid #eee;" />
          <h3 style="color: #555;">Message :</h3>
          <p style="background: #f9f9f9; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${message}</p>
          <hr style="border: 1px solid #eee;" />
          <p style="color: #999; font-size: 12px;">
            Envoyé depuis le formulaire de contact de morycoulibaly.dev
          </p>
        </div>
      `,
    });

    return NextResponse.json("Success!");
  } catch (error) {
    console.error("[CONTACT_ERROR]", error);
    return new NextResponse("Erreur interne", { status: 500 });
  }
}