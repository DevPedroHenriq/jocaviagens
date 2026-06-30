"use client";

import { useState } from "react";
import Link from "next/link";

const PROGRAMS = [
  { id: "smiles", name: "Smiles", preco: 16.5, emoji: "🟠" },
  { id: "azul", name: "TudoAzul", preco: 15, emoji: "🔵" },
  { id: "latam", name: "LATAM Pass", preco: 26, emoji: "🔴" },
];

type QuoteResult = {
  programa: string;
  quantidade: string;
  valorTotal: string;
  precoMilheiro: number;
};

export default function VenderMilhasPage() {
  const [email, setEmail] = useState("");
  const [programa, setPrograma] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<QuoteResult | null>(null);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState("");

  const handleCotar = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);
    setEmailSent(false);

    if (!email || !programa || !quantidade) {
      setError("Preencha todos os campos para realizar a cotação.");
      return;
    }
    const qtd = Number(quantidade);
    if (qtd < 10000) {
      setError("A quantidade mínima para cotação é de 10.000 milhas.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/cotar-milhas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, programa, quantidade: qtd }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erro ao processar cotação.");
      setResult(data);
      setEmailSent(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Erro ao processar cotação.");
    } finally {
      setLoading(false);
    }
  };

  const waLink = result
    ? `https://wa.me/5561998079272?text=${encodeURIComponent(`Olá! Fiz a cotação de ${result.quantidade} milhas do programa ${result.programa} e gostaria de vender. Podem me ajudar?`)}`
    : "https://wa.me/5561998079272";

  return (
    <>
      <style>{`
        .vm-page { min-height: 100vh; background: #1C1C2E; font-family: var(--font-inter, Inter, system-ui, sans-serif); }
        .vm-header { background: rgba(28,28,46,0.98); border-bottom: 1px solid rgba(255,255,255,0.08); padding: 0 1.5rem; height: 64px; display: flex; align-items: center; justify-content: space-between; position: sticky; top: 0; z-index: 50; }
        .vm-logo { color: #C9914A; font-weight: 800; font-size: 1.1rem; text-decoration: none; }
        .vm-back { color: rgba(255,255,255,0.6); font-size: 0.875rem; font-weight: 600; text-decoration: none; display: flex; align-items: center; gap: 0.35rem; transition: color 0.2s; }
        .vm-back:hover { color: #C9914A; }
        .vm-hero { padding: 2.5rem 1.5rem 1.5rem; text-align: center; max-width: 600px; margin: 0 auto; }
        .vm-badge { display: inline-block; background: rgba(160,112,58,0.15); border: 1px solid rgba(160,112,58,0.35); color: #C9914A; padding: 0.35rem 1rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 1rem; }
        .vm-h1 { font-size: clamp(1.75rem, 5vw, 2.75rem); font-weight: 900; color: #fff; line-height: 1.15; margin-bottom: 0.75rem; }
        .vm-h1 span { color: #C9914A; }
        .vm-sub { color: rgba(255,255,255,0.6); font-size: 0.9375rem; line-height: 1.65; margin-bottom: 1.25rem; }
        .vm-stars { display: inline-flex; align-items: center; gap: 0.375rem; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); padding: 0.375rem 0.875rem; border-radius: 9999px; color: rgba(255,255,255,0.7); font-size: 0.8125rem; font-weight: 600; }
        .vm-card { background: #fff; border-radius: 1.25rem; padding: clamp(1.25rem, 4vw, 2rem); box-shadow: 0 8px 40px rgba(0,0,0,0.3); max-width: 820px; margin: 1.5rem auto 0; }
        .vm-card-title { font-size: 1rem; font-weight: 800; color: #1C1C2E; margin-bottom: 0.25rem; }
        .vm-card-sub { color: #6B6B7B; font-size: 0.8125rem; margin-bottom: 1.25rem; }
        .vm-form-grid { display: grid; grid-template-columns: 1fr; gap: 0.875rem; }
        @media(min-width: 640px) { .vm-form-grid { grid-template-columns: 1fr 1fr; } }
        @media(min-width: 900px) { .vm-form-grid { grid-template-columns: 1fr 1fr 1fr auto; align-items: end; } }
        .vm-label { display: block; font-size: 0.7rem; font-weight: 700; color: #6B6B7B; text-transform: uppercase; letter-spacing: 0.07em; margin-bottom: 0.35rem; }
        .vm-input, .vm-select { width: 100%; padding: 0.75rem 0.875rem; border: 1.5px solid #E8E0D4; border-radius: 0.625rem; font-size: 0.875rem; color: #1C1C2E; outline: none; transition: border-color 0.2s; font-family: inherit; background: #fff; box-sizing: border-box; }
        .vm-input:focus, .vm-select:focus { border-color: #A0703A; }
        .vm-btn { width: 100%; padding: 0.875rem 1.25rem; background: #1C1C2E; color: #fff; border: none; border-radius: 0.625rem; font-weight: 700; font-size: 0.9rem; cursor: pointer; transition: background 0.2s; white-space: nowrap; font-family: inherit; }
        .vm-btn:hover:not(:disabled) { background: #A0703A; }
        .vm-btn:disabled { opacity: 0.65; cursor: not-allowed; }
        .vm-error { margin-top: 0.75rem; color: #dc2626; font-size: 0.8125rem; background: #fef2f2; border: 1px solid #fecaca; border-radius: 0.5rem; padding: 0.625rem 0.875rem; }
        .vm-result { margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid #E8E0D4; }
        .vm-result-label { font-size: 0.7rem; font-weight: 700; color: #6B6B7B; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.375rem; }
        .vm-result-desc { color: #1C1C2E; font-size: 0.9375rem; font-weight: 500; margin-bottom: 1.25rem; }
        .vm-result-desc strong { color: #A0703A; }
        .vm-result-box { background: linear-gradient(135deg, #1C1C2E, #2D2D44); border-radius: 1rem; padding: 1.5rem; max-width: 300px; }
        .vm-result-receive { color: rgba(255,255,255,0.55); font-size: 0.7rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.25rem; }
        .vm-result-value { color: #C9914A; font-size: clamp(1.625rem, 4vw, 2rem); font-weight: 900; line-height: 1; margin-bottom: 0.25rem; }
        .vm-result-rate { color: rgba(255,255,255,0.4); font-size: 0.75rem; margin-bottom: 1rem; }
        .vm-result-cta { display: flex; align-items: center; justify-content: center; gap: 0.5rem; background: #A0703A; color: #fff; padding: 0.7rem 1.125rem; border-radius: 9999px; font-weight: 700; font-size: 0.875rem; text-decoration: none; transition: background 0.2s; }
        .vm-result-cta:hover { background: #C9914A; }
        .vm-email-ok { display: inline-flex; align-items: center; gap: 0.4rem; background: rgba(34,197,94,0.08); border: 1px solid rgba(34,197,94,0.25); color: #16a34a; padding: 0.45rem 0.875rem; border-radius: 9999px; font-size: 0.8rem; font-weight: 600; margin-top: 1rem; }
        .vm-programs { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.875rem; max-width: 820px; margin: 1.25rem auto 0; padding: 0 1.5rem; }
        .vm-prog-card { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 0.875rem; padding: 1rem 1.125rem; cursor: pointer; transition: background 0.2s, border-color 0.2s; }
        .vm-prog-card:hover { background: rgba(255,255,255,0.09); }
        .vm-prog-card.active { background: rgba(160,112,58,0.15); border-color: rgba(160,112,58,0.5); }
        .vm-prog-emoji { font-size: 1.25rem; margin-bottom: 0.25rem; }
        .vm-prog-name { color: rgba(255,255,255,0.9); font-weight: 700; font-size: 0.875rem; }
        .vm-prog-price { color: #C9914A; font-weight: 800; font-size: 1rem; margin-top: 0.25rem; }
        .vm-prog-price span { color: rgba(255,255,255,0.35); font-size: 0.7rem; font-weight: 400; }
        .vm-features { border-top: 1px solid rgba(255,255,255,0.07); margin-top: 2.5rem; padding: 2rem 1.5rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.5rem; max-width: 820px; margin-left: auto; margin-right: auto; text-align: center; }
        .vm-feat-icon { font-size: 1.5rem; margin-bottom: 0.5rem; }
        .vm-feat-title { color: #fff; font-weight: 700; font-size: 0.875rem; margin-bottom: 0.25rem; }
        .vm-feat-desc { color: rgba(255,255,255,0.45); font-size: 0.8125rem; line-height: 1.55; }
        .vm-footer { border-top: 1px solid rgba(255,255,255,0.07); padding: 1.25rem 1.5rem; text-align: center; color: rgba(255,255,255,0.3); font-size: 0.8rem; }
        .vm-footer a { color: #A0703A; text-decoration: none; }
        .vm-wrap { max-width: 820px; margin: 0 auto; padding: 0 1.5rem; }
      `}</style>

      <div className="vm-page">
        {/* Header */}
        <header className="vm-header">
          <Link href="/" className="vm-logo">✈ Joca Viagens</Link>
          <Link href="/" className="vm-back">← Voltar ao início</Link>
        </header>

        {/* Hero */}
        <div className="vm-hero">
          <div className="vm-badge">🎫 Milhas Aéreas</div>
          <h1 className="vm-h1">
            Venda suas milhas<br />
            <span>com segurança</span>
          </h1>
          <p className="vm-sub">
            Cotação instantânea para Smiles, TudoAzul e LATAM Pass.{" "}
            <strong style={{ color: "#C9914A" }}>Melhor preço do mercado!</strong>
          </p>
          <div className="vm-stars">⭐⭐⭐⭐⭐ 4.9 de 5 · 200+ avaliações</div>
        </div>

        {/* Quotation card */}
        <div className="vm-wrap">
          <div className="vm-card">
            <p className="vm-card-title">💰 Saiba quanto valem suas milhas!</p>
            <p className="vm-card-sub">Preencha abaixo e receba o resultado no seu e-mail.</p>

            <form onSubmit={handleCotar}>
              <div className="vm-form-grid">
                {/* Email */}
                <div>
                  <label htmlFor="vm-email" className="vm-label">E-mail</label>
                  <input
                    id="vm-email"
                    className="vm-input"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Programa */}
                <div>
                  <label htmlFor="vm-programa" className="vm-label">Programa de Fidelidade</label>
                  <select
                    id="vm-programa"
                    className="vm-select"
                    value={programa}
                    onChange={e => setPrograma(e.target.value)}
                    required
                  >
                    <option value="" disabled>Selecione...</option>
                    {PROGRAMS.map(p => (
                      <option key={p.id} value={p.id}>
                        {p.emoji} {p.name} — R$ {p.preco.toFixed(2).replace(".", ",")}/mil
                      </option>
                    ))}
                  </select>
                </div>

                {/* Quantidade */}
                <div>
                  <label htmlFor="vm-quantidade" className="vm-label">Quantidade de Milhas</label>
                  <input
                    id="vm-quantidade"
                    className="vm-input"
                    type="number"
                    min={10000}
                    step={1000}
                    placeholder="Ex: 150000"
                    value={quantidade}
                    onChange={e => setQuantidade(e.target.value)}
                    required
                  />
                  <p style={{ color: "#9CA3AF", fontSize: "0.7rem", marginTop: "0.25rem" }}>Mín. 10.000 milhas</p>
                </div>

                {/* Button */}
                <div>
                  <button
                    id="btn-fazer-cotacao"
                    type="submit"
                    className="vm-btn"
                    disabled={loading}
                  >
                    {loading ? "Calculando..." : "Fazer cotação"}
                  </button>
                </div>
              </div>

              {error && <p className="vm-error">⚠️ {error}</p>}
            </form>

            {/* Result */}
            {result && (
              <div className="vm-result">
                <p className="vm-result-label">Sua cotação</p>
                <p className="vm-result-desc">
                  {result.quantidade} milhas do programa{" "}
                  <strong>{result.programa}</strong>
                </p>

                <div className="vm-result-box">
                  <p className="vm-result-receive">Você receberá</p>
                  <p className="vm-result-value">{result.valorTotal}</p>
                  <p className="vm-result-rate">
                    R$ {result.precoMilheiro.toFixed(2).replace(".", ",")}/milheiro
                  </p>
                  <a href={waLink} target="_blank" rel="noopener noreferrer" className="vm-result-cta">
                    💬 Vender minhas milhas
                  </a>
                </div>

                {emailSent && (
                  <p className="vm-email-ok">✅ Cotação enviada para o seu e-mail!</p>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Program cards */}
        <div className="vm-programs">
          {PROGRAMS.map(p => (
            <div
              key={p.id}
              className={`vm-prog-card${programa === p.id ? " active" : ""}`}
              onClick={() => setPrograma(p.id)}
            >
              <div className="vm-prog-emoji">{p.emoji}</div>
              <div className="vm-prog-name">{p.name}</div>
              <div className="vm-prog-price">
                R$ {p.preco.toFixed(2).replace(".", ",")}{" "}
                <span>/ milheiro</span>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="vm-features">
          <div>
            <div className="vm-feat-icon">🛡️</div>
            <p className="vm-feat-title">Cotação sem compromisso</p>
            <p className="vm-feat-desc">Saiba o valor antes de decidir qualquer coisa</p>
          </div>
          <div>
            <div className="vm-feat-icon">⚡</div>
            <p className="vm-feat-title">Resposta rápida</p>
            <p className="vm-feat-desc">Nossa equipe responde em até 30 min no horário comercial</p>
          </div>
          <div>
            <div className="vm-feat-icon">💰</div>
            <p className="vm-feat-title">Melhor preço</p>
            <p className="vm-feat-desc">Valores mais competitivos do mercado de milhas</p>
          </div>
        </div>

        {/* Footer */}
        <div className="vm-footer">
          © {new Date().getFullYear()} Joca Viagens ·{" "}
          <a href="https://wa.me/5561998079272" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>
    </>
  );
}
