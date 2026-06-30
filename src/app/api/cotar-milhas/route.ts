import { NextRequest } from "next/server";

const PRICES: Record<string, number> = {
  smiles: 16.5,
  azul: 15,
  latam: 26,
};

const PROGRAM_NAMES: Record<string, string> = {
  smiles: "Smiles",
  azul: "TudoAzul",
  latam: "LATAM Pass",
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, programa, quantidade } = body;

    if (!email || !programa || !quantidade) {
      return Response.json({ error: "Dados incompletos." }, { status: 400 });
    }

    const precoMilheiro = PRICES[programa as string];
    if (!precoMilheiro) {
      return Response.json({ error: "Programa inválido." }, { status: 400 });
    }

    const qtd = Number(quantidade);
    const valorTotal = (qtd / 1000) * precoMilheiro;
    const programaNome = PROGRAM_NAMES[programa as string];

    const valorFormatado = valorTotal.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    const qtdFormatada = qtd.toLocaleString("pt-BR");

    // Build email HTML
    const emailHtml = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sua Cotação de Milhas - Joca Viagens</title>
</head>
<body style="margin:0;padding:0;background-color:#F0EBE3;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F0EBE3;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(28,28,46,0.12);">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1C1C2E 0%,#2D2D44 100%);padding:40px 32px;text-align:center;">
              <p style="color:#C9914A;font-size:14px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 8px;">Joca Viagens</p>
              <h1 style="color:#ffffff;font-size:28px;font-weight:900;margin:0 0 8px;line-height:1.2;">Sua Cotação de Milhas</h1>
              <p style="color:rgba(255,255,255,0.65);font-size:15px;margin:0;">Resultado gerado com sucesso ✅</p>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:36px 32px;">
              <p style="color:#1C1C2E;font-size:16px;line-height:1.7;margin:0 0 24px;">Olá! Tudo bem?</p>
              <p style="color:#1C1C2E;font-size:16px;line-height:1.7;margin:0 0 24px;">Aqui é a equipe da <strong>Joca Viagens</strong>. Muito obrigado por realizar a sua cotação em nosso site!</p>
              <p style="color:#1C1C2E;font-size:16px;line-height:1.7;margin:0 0 24px;">Aqui estão os detalhes que o nosso sistema gerou para você:</p>

              <!-- Result Card -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#1C1C2E 0%,#2D2D44 100%);border-radius:12px;overflow:hidden;margin-bottom:28px;">
                <tr>
                  <td style="padding:28px 24px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.1);">
                          <span style="color:rgba(255,255,255,0.6);font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;">Programa de Fidelidade</span><br>
                          <span style="color:#ffffff;font-size:18px;font-weight:700;">${programaNome}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.1);">
                          <span style="color:rgba(255,255,255,0.6);font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;">Quantidade Cotada</span><br>
                          <span style="color:#ffffff;font-size:18px;font-weight:700;">${qtdFormatada} milhas</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;">
                          <span style="color:rgba(255,255,255,0.6);font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;">Valor Estimado</span><br>
                          <span style="color:#C9914A;font-size:28px;font-weight:900;">${valorFormatado}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="color:#6B6B7B;font-size:13px;line-height:1.6;margin:0 0 24px;padding:12px 16px;background:#F8F5F1;border-radius:8px;border-left:3px solid #C9914A;">
                ⚠️ Lembrando que o mercado de milhas é dinâmico e os valores podem sofrer atualizações ao longo do dia.
              </p>

              <p style="color:#1C1C2E;font-size:16px;line-height:1.7;margin:0 0 16px;">Para garantirmos que você faça o melhor negócio e consiga a condição ideal, responda este e-mail (ou nos chame no link abaixo) e me conta: <strong>qual é o seu principal objetivo com essas milhas hoje?</strong></p>

              <p style="color:#1C1C2E;font-size:16px;line-height:1.7;margin:0 0 28px;">Vamos bater um papo rápido e fechar a melhor proposta para você. Ficamos no aguardo!</p>

              <!-- CTA Button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding-bottom:28px;">
                    <a href="https://wa.me/5561998079272?text=${encodeURIComponent("Olá! Realizei minha cotação de milhas no site e gostaria de mais informações!")}" style="display:inline-block;background:#A0703A;color:#ffffff;text-decoration:none;font-weight:700;font-size:15px;padding:14px 32px;border-radius:9999px;">
                      💬 Falar pelo WhatsApp
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background:#F0EBE3;padding:24px 32px;text-align:center;border-top:1px solid rgba(160,112,58,0.15);">
              <p style="color:#1C1C2E;font-size:15px;font-weight:700;margin:0 0 4px;">Um abraço,</p>
              <p style="color:#A0703A;font-size:15px;font-weight:700;margin:0 0 12px;">Equipe Joca Viagens</p>
              <p style="color:#6B6B7B;font-size:13px;margin:0 0 4px;">📞 WhatsApp: +55 61 99807-9272</p>
              <p style="margin:0;"><a href="https://www.jocaviagens.com/" style="color:#A0703A;font-size:13px;text-decoration:none;">🌐 www.jocaviagens.com</a></p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

    // Send via Google Apps Script (which handles email sending)
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    if (scriptUrl) {
      try {
        await fetch(scriptUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            tipo: "cotacao_milhas",
            email,
            programaNome,
            quantidade: qtdFormatada,
            valor: valorFormatado,
            precoMilheiro: `R$ ${precoMilheiro.toFixed(2).replace(".", ",")}`,
            emailHtml,
            emailSubject: `Sua cotação de milhas ${programaNome} - Joca Viagens`,
          }),
        });
      } catch (e) {
        // Non-blocking: log but don't fail the request
        console.error("Erro ao enviar para Google Script:", e);
      }
    }

    return Response.json({
      success: true,
      programa: programaNome,
      quantidade: qtdFormatada,
      valorTotal: valorFormatado,
      precoMilheiro: precoMilheiro,
    });
  } catch (err) {
    console.error("Erro na rota /api/cotar-milhas:", err);
    return Response.json({ error: "Erro interno do servidor." }, { status: 500 });
  }
}
