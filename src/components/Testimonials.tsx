"use client";

import { Star } from "lucide-react";

const testimonials = [
  { id: 1, name: "Maria Santos", location: "Brasília, DF", initials: "MS", rating: 5, text: "Incrível! O Joca organizou minha viagem para Paris dos sonhos. Cada detalhe foi perfeito, do voo ao hotel. Super recomendo!", destination: "Paris, França" },
  { id: 2, name: "Carlos Oliveira", location: "Goiânia, GO", initials: "CO", rating: 5, text: "Atendimento rápido e preço ótimo! Fui pra Cancún com minha família e foi a melhor viagem da minha vida. Obrigado Joca!", destination: "Cancún, México" },
  { id: 3, name: "Ana Rodrigues", location: "São Paulo, SP", initials: "AR", rating: 5, text: "Profissionalismo acima de tudo. O Joca me auxiliou em cada etapa da viagem. Já estou planejando o próximo destino com ele!", destination: "Fernando de Noronha" },
  { id: 4, name: "Roberto Lima", location: "Belo Horizonte, MG", initials: "RL", rating: 5, text: "Melhor agência que já usei. Preço justo, atendimento via WhatsApp super ágil. Nossa lua de mel em Lisboa foi perfeita!", destination: "Lisboa, Portugal" },
  { id: 5, name: "Fernanda Costa", location: "Curitiba, PR", initials: "FC", rating: 5, text: "Viajei para Dubai e foi surreal! Tudo organizado, hotel maravilhoso e passeios incríveis. Joca é o melhor!", destination: "Dubai, EAU" },
  { id: 6, name: "João Mendes", location: "Recife, PE", initials: "JM", rating: 5, text: "Recomendo de olhos fechados! Fui ao Rio com minha esposa e filhos, preço excelente e tudo correu muito bem!", destination: "Rio de Janeiro" },
];

export default function Testimonials() {
  return (
    <section style={{ background: "var(--cream)", width: "100%" }} className="jv-section">
      <div className="jv-wrap">
        {/* Header */}
        <div className="section-header">
          <span className="jv-badge" style={{ marginBottom: "1rem", display: "inline-flex" }}>⭐ Depoimentos</span>
          <h2 className="jv-title">O que dizem nossos clientes</h2>
          <p className="section-subtitle">
            Mais de 500 clientes já viveram experiências inesquecíveis com a Joca Viagens.
          </p>
          <div className="section-divider" />
        </div>

        {/* Testimonials Grid */}
        <div className="jv-grid-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="test-card"
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: "0.125rem" }}>
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} size={14} fill="var(--copper)" style={{ color: "var(--copper)" }} />
                ))}
              </div>

              {/* Text */}
              <p style={{ color: "var(--navy)", fontSize: "0.875rem", lineHeight: 1.7, fontStyle: "italic", flex: 1 }}>
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Destination badge */}
              <span style={{ display: "inline-block", background: "rgba(160,112,58,0.1)", color: "var(--copper)", fontSize: "0.72rem", fontWeight: 700, padding: "0.25rem 0.75rem", borderRadius: "9999px", alignSelf: "flex-start" }}>
                ✈️ {t.destination}
              </span>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", paddingTop: "0.75rem", borderTop: "1px solid var(--cream)" }}>
                <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "9999px", background: "linear-gradient(135deg, #A0703A, #C9914A)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "white", fontWeight: 700, fontSize: "0.75rem" }}>{t.initials}</span>
                </div>
                <div>
                  <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--navy)" }}>{t.name}</p>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .test-card { background:white; border-radius:1.5rem; padding:1.5rem; box-shadow:0 2px 16px rgba(28,28,46,0.06); border:1px solid var(--cream); display:flex; flex-direction:column; gap:0.875rem; transition:box-shadow 0.3s ease; }
        .test-card:hover { box-shadow:0 12px 32px rgba(28,28,46,0.12); }
      `}</style>
    </section>
  );
}
