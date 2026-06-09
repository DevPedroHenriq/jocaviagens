import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    if (!scriptUrl) {
      return Response.json(
        { error: "Google Script URL não configurada." },
        { status: 500 }
      );
    }

    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Erro ao enviar para o Google Script:", text);
      return Response.json(
        { error: "Falha ao registrar na planilha." },
        { status: 502 }
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("Erro na rota /api/submit-form:", err);
    return Response.json({ error: "Erro interno do servidor." }, { status: 500 });
  }
}
