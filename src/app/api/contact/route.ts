import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 });
    }

    // EXEMPLE D'INTÉGRATION BACKEND (Resend / Formspree / SendGrid)
    // Insérez ici votre clé API et l'envoi réel du mail.
    // ex: await resend.emails.send({ from: 'Dorknika <contact@dorknika.com>', to: '...', subject: '...', text: message });

    return NextResponse.json({ 
      success: true, 
      message: "Message reçu par le serveur. Connectez votre service d'envoi mail dans src/app/api/contact/route.ts." 
    });

  } catch (error) {
    return NextResponse.json({ error: "Erreur serveur lors du traitement." }, { status: 500 });
  }
}
