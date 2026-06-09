"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP;

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  phone: z.string().min(10, "Telefone inválido").max(15, "Telefone inválido"),
  email: z.string().email("Email inválido").optional().or(z.literal("")),
  destination: z.string().min(1, "Selecione um destino"),
  travelers: z.string().min(1, "Informe o número de viajantes"),
  period: z.string().min(1, "Informe o período desejado"),
  budget: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const destinationOptions = [
  "Paris, França",
  "Cancún, México",
  "Rio de Janeiro, Brasil",
  "Lisboa, Portugal",
  "Dubai, EAU",
  "Fernando de Noronha",
  "Outro destino",
];

const budgetOptions = [
  "Até R$ 2.000",
  "R$ 2.000 – R$ 4.000",
  "R$ 4.000 – R$ 8.000",
  "R$ 8.000 – R$ 15.000",
  "Acima de R$ 15.000",
  "Sem limite definido",
];

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" style={{ width: size, height: size, fill: "white", flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function QuoteForm() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    const msg =
      `🌍 *Solicitação de Orçamento — Joca Viagens*\n\n` +
      `👤 *Nome:* ${data.name}\n` +
      `📱 *Telefone:* ${data.phone}\n` +
      `${data.email ? `📧 *Email:* ${data.email}\n` : ""}` +
      `🗺️ *Destino:* ${data.destination}\n` +
      `👥 *Viajantes:* ${data.travelers}\n` +
      `📅 *Período:* ${data.period}\n` +
      `${data.budget ? `💰 *Orçamento:* ${data.budget}\n` : ""}` +
      `${data.message ? `📝 *Observações:* ${data.message}\n` : ""}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.18)",
    color: "white",
    padding: "0.875rem 1rem",
    borderRadius: "0.75rem",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "inherit",
    boxSizing: "border-box",
  };

  return (
    <section
      id="orcamento"
      style={{ background: "var(--navy)", width: "100%", position: "relative", overflow: "hidden" }}
      className="jv-section"
    >
      {/* Decorative radial */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(circle at 15% 50%, rgba(160,112,58,0.1) 0%, transparent 50%), radial-gradient(circle at 85% 20%, rgba(201,145,74,0.08) 0%, transparent 40%)",
      }} />

      <div className="jv-wrap" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "4rem", alignItems: "start" }}
          className="quote-grid"
        >
          {/* Left — Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="jv-badge" style={{ marginBottom: "1.5rem", display: "inline-flex", background: "rgba(160,112,58,0.2)", borderColor: "rgba(160,112,58,0.3)", color: "var(--copper-light)" }}>
              📋 Solicitar Orçamento
            </span>
            <h2 className="section-title font-playfair" style={{ color: "white", textAlign: "left", marginBottom: "1rem" }}>
              Solicitar via WhatsApp
              <span style={{ color: "var(--copper-light)" }}>É grátis e rápido.</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", lineHeight: 1.75, marginBottom: "2.5rem" }}>
              Preencha o formulário ao lado e receba um orçamento personalizado
              diretamente no seu WhatsApp em até 2 horas úteis!
            </p>

            {/* Contact items */}
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" style={{ width: 22, height: 22, fill: "#25D366" }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                ),
                bg: "rgba(37,211,102,0.15)",
                label: "WhatsApp",
                value: "(61) 9807-9272",
                href: `https://wa.me/${whatsappNumber}`,
              },
              { icon: "📍", bg: "rgba(160,112,58,0.15)", label: "Localização", value: "Brasília, DF — Brasil", href: undefined },
              { icon: "⏰", bg: "rgba(160,112,58,0.15)", label: "Horário", value: "Seg–Sáb: 8h às 20h", href: undefined },
            ].map((item, i) => {
              const content = (
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{
                    width: "3rem", height: "3rem", borderRadius: "0.875rem",
                    background: item.bg, display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.25rem", flexShrink: 0,
                  }}>
                    {typeof item.icon === "string" ? item.icon : item.icon}
                  </div>
                  <div>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>{item.label}</p>
                    <p style={{ color: "white", fontWeight: 700, fontSize: "0.9375rem" }}>{item.value}</p>
                  </div>
                </div>
              );
              return item.href ? (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" style={{ display: "block", marginBottom: "1rem", textDecoration: "none" }}>
                  {content}
                </a>
              ) : (
                <div key={i} style={{ marginBottom: "1rem" }}>{content}</div>
              );
            })}
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {submitted ? (
              <div style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "1.5rem",
                padding: "3rem 2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: "1rem",
              }}>
                <CheckCircle2 size={64} color="#25D366" />
                <h3 className="font-playfair" style={{ fontSize: "1.5rem", fontWeight: 900, color: "white" }}>
                  Mensagem enviada! 🎉
                </h3>
                <p style={{ color: "rgba(255,255,255,0.65)" }}>
                  Você foi redirecionado para o WhatsApp. O Joca entrará em contato em breve!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{ background: "none", border: "none", color: "var(--copper-light)", cursor: "pointer", fontSize: "0.875rem", textDecoration: "underline" }}
                >
                  Enviar outro orçamento
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "1.5rem",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {/* Name */}
                <div>
                  <label className="form-label">Seu Nome *</label>
                  <input {...register("name")} id="form-name" placeholder="Ex: João Silva" style={inputStyle} />
                  {errors.name && <p style={{ color: "#fc8181", fontSize: "0.75rem", marginTop: "0.25rem" }}>{errors.name.message}</p>}
                </div>

                {/* Phone + Email */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                  <div>
                    <label className="form-label">WhatsApp *</label>
                    <input {...register("phone")} id="form-phone" placeholder="(61) 9 9999-9999" style={inputStyle} />
                    {errors.phone && <p style={{ color: "#fc8181", fontSize: "0.75rem", marginTop: "0.25rem" }}>{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="form-label">Email (opcional)</label>
                    <input {...register("email")} id="form-email" type="email" placeholder="seu@email.com" style={inputStyle} />
                  </div>
                </div>

                {/* Destination */}
                <div>
                  <label className="form-label">Destino Desejado *</label>
                  <select {...register("destination")} id="form-destination" style={{ ...inputStyle, appearance: "none" as const }}>
                    <option value="" style={{ background: "var(--navy)" }}>Selecione um destino</option>
                    {destinationOptions.map(d => (
                      <option key={d} value={d} style={{ background: "var(--navy)" }}>{d}</option>
                    ))}
                  </select>
                  {errors.destination && <p style={{ color: "#fc8181", fontSize: "0.75rem", marginTop: "0.25rem" }}>{errors.destination.message}</p>}
                </div>

                {/* Travelers + Period */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                  <div>
                    <label className="form-label">Nº de Viajantes *</label>
                    <input {...register("travelers")} id="form-travelers" placeholder="Ex: 2 adultos" style={inputStyle} />
                    {errors.travelers && <p style={{ color: "#fc8181", fontSize: "0.75rem", marginTop: "0.25rem" }}>{errors.travelers.message}</p>}
                  </div>
                  <div>
                    <label className="form-label">Período Desejado *</label>
                    <input {...register("period")} id="form-period" placeholder="Ex: Janeiro 2025" style={inputStyle} />
                    {errors.period && <p style={{ color: "#fc8181", fontSize: "0.75rem", marginTop: "0.25rem" }}>{errors.period.message}</p>}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label className="form-label">Orçamento Aproximado</label>
                  <select {...register("budget")} id="form-budget" style={{ ...inputStyle, appearance: "none" as const }}>
                    <option value="" style={{ background: "var(--navy)" }}>Selecione uma faixa</option>
                    {budgetOptions.map(b => (
                      <option key={b} value={b} style={{ background: "var(--navy)" }}>{b}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="form-label">Alguma observação?</label>
                  <textarea
                    {...register("message")}
                    id="form-message"
                    rows={3}
                    placeholder="Ex: viagem de lua de mel, tenho criança pequena..."
                    style={{ ...inputStyle, resize: "none" as const }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  id="form-submit"
                  disabled={isSubmitting}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.75rem",
                    width: "100%",
                    background: "var(--copper)",
                    color: "white",
                    padding: "1rem",
                    borderRadius: "0.875rem",
                    fontWeight: 700,
                    fontSize: "1rem",
                    border: "none",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    opacity: isSubmitting ? 0.65 : 1,
                    transition: "all 0.3s",
                    fontFamily: "inherit",
                  }}
                  onMouseOver={e => !isSubmitting && ((e.currentTarget.style.background = "var(--copper-light)"), (e.currentTarget.style.transform = "scale(1.01)"))}
                  onMouseOut={e => ((e.currentTarget.style.background = "var(--copper)"), (e.currentTarget.style.transform = "scale(1)"))}
                >
                  {isSubmitting ? <><Loader2 size={20} style={{ animation: "spin 1s linear infinite" }} /> Preparando...</> : <><Send size={18} /> Enviar Orçamento pelo WhatsApp</>}
                </button>

                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.72rem", textAlign: "center" }}>
                  Ao enviar, você será redirecionado para o WhatsApp com todas as informações.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 1024px) {
          .quote-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 580px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
