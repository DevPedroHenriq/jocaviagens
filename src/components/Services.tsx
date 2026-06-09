"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Plane, Hotel, Bus, Ship, Compass, HeadphonesIcon } from "lucide-react";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || "5561980792722";

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" style={{ width: size, height: size, fill: "white", flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const services = [
  {
    Icon: Plane,
    emoji: "✈️",
    title: "Passagens Aéreas",
    description: "Melhores tarifas nacionais e internacionais com as principais companhias aéreas. Classe econômica, premium ou executiva.",
    features: ["Voos nacionais e internacionais", "Melhores tarifas garantidas", "Econômica, premium ou executiva"],
    message: "Olá Joca! Preciso de ajuda para encontrar passagens aéreas.",
  },
  {
    Icon: Hotel,
    emoji: "🏨",
    title: "Hospedagem",
    description: "Hotéis, pousadas e resorts selecionados para todos os perfis. De opções econômicas a luxo 5 estrelas.",
    features: ["Hotéis 2★ a 5★", "Pousadas e apart-hotéis", "All Inclusive disponível"],
    message: "Olá Joca! Preciso de ajuda para encontrar hospedagem.",
  },
  {
    Icon: Bus,
    emoji: "🚐",
    title: "Traslados",
    description: "Transfers aeroporto-hotel com pontualidade e conforto. Traslados privados ou compartilhados em todo o mundo.",
    features: ["Transfer aeroporto-hotel", "Traslados privativos", "Disponível 24 horas"],
    message: "Olá Joca! Preciso de informações sobre traslados.",
  },
  {
    Icon: Ship,
    emoji: "🚢",
    title: "Cruzeiros",
    description: "Pacotes de cruzeiros pelos melhores destinos do mundo. MSC, Royal Caribbean, Costa Cruises e muito mais.",
    features: ["Cruzeiros nacionais e internacionais", "Cabines de todos os tipos", "Pacotes com embarque incluso"],
    message: "Olá Joca! Tenho interesse em saber mais sobre cruzeiros.",
  },
  {
    Icon: Compass,
    emoji: "🧭",
    title: "Passeios & Experiências",
    description: "Roteiros exclusivos, city tours, excursões e experiências culturais únicas em cada destino que você visitar.",
    features: ["City tours e excursões", "Experiências culturais", "Aventura e gastronomia"],
    message: "Olá Joca! Quero saber mais sobre passeios e experiências.",
  },
  {
    Icon: HeadphonesIcon,
    emoji: "🎧",
    title: "Suporte Completo",
    description: "Atendimento personalizado antes, durante e depois da sua viagem. Estamos com você em cada etapa da jornada.",
    features: ["Suporte pré-viagem", "Assistência durante a viagem", "Acompanhamento pós-viagem"],
    message: "Olá Joca! Quero saber mais sobre o suporte que vocês oferecem.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá Joca! Quero saber mais sobre os serviços de vocês!")}`;

  return (
    <section id="servicos" style={{ background: "var(--cream, #F0EBE3)", width: "100%" }} className="jv-section">
      <div className="jv-wrap">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span className="jv-badge" style={{ marginBottom: "1rem", display: "inline-flex" }}>🌍 O que oferecemos</span>
          <h2 className="jv-title" style={{ marginBottom: "1rem" }}>Nossos Serviços</h2>
          <p style={{ color: "#6B6B7B", fontSize: "1.0625rem", maxWidth: "40rem", margin: "0 auto", lineHeight: 1.7 }}>
            Da passagem ao cruzeiro, cuidamos de cada detalhe da sua viagem com atenção e dedicação.
          </p>
          <div style={{ width: "4rem", height: "3px", background: "#A0703A", borderRadius: "9999px", margin: "1.5rem auto 0" }} />
        </motion.div>

        {/* Cards Grid */}
        <div className="jv-grid-3">
          {services.map((service, index) => {
            const { Icon } = service;
            const cardWhatsapp = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(service.message)}`;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  background: "#FFFFFF",
                  border: "1px solid rgba(160,112,58,0.18)",
                  borderRadius: "1.5rem",
                  padding: "2rem",
                  transition: "transform 0.35s ease, box-shadow 0.35s ease",
                  cursor: "default",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseOver={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 48px rgba(160,112,58,0.15)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(160,112,58,0.4)";
                }}
                onMouseOut={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(160,112,58,0.18)";
                }}
              >
                {/* Top decoration */}
                <div style={{
                  position: "absolute",
                  top: 0, right: 0,
                  width: "6rem",
                  height: "6rem",
                  background: "rgba(160,112,58,0.06)",
                  borderRadius: "0 1.5rem 0 6rem",
                  pointerEvents: "none",
                }} />

                {/* Icon row */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <div style={{
                    width: "3.25rem",
                    height: "3.25rem",
                    borderRadius: "1rem",
                    background: "linear-gradient(135deg, #A0703A, #C9914A)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 16px rgba(160,112,58,0.3)",
                    flexShrink: 0,
                  }}>
                    <Icon size={22} color="white" />
                  </div>
                  <span style={{ fontSize: "1.625rem" }}>{service.emoji}</span>
                </div>

                <div>
                  <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#1C1C2E", marginBottom: "0.5rem" }}>
                    {service.title}
                  </h3>
                  <p style={{ color: "#6B6B7B", fontSize: "0.875rem", lineHeight: 1.65 }}>
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.4rem", flex: 1 }}>
                  {service.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.8125rem", color: "#6B6B7B" }}>
                      <div style={{ width: "6px", height: "6px", borderRadius: "9999px", background: "#A0703A", flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Card CTA */}
                <a
                  href={cardWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    marginTop: "0.5rem",
                    background: "rgba(160,112,58,0.1)",
                    border: "1px solid rgba(160,112,58,0.25)",
                    color: "#A0703A",
                    padding: "0.625rem 1rem",
                    borderRadius: "0.75rem",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    transition: "all 0.3s",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                  onMouseOver={e => {
                    (e.currentTarget as HTMLElement).style.background = "#A0703A";
                    (e.currentTarget as HTMLElement).style.color = "white";
                  }}
                  onMouseOut={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(160,112,58,0.1)";
                    (e.currentTarget as HTMLElement).style.color = "#A0703A";
                  }}
                >
                  <svg viewBox="0 0 24 24" style={{ width: 14, height: 14, fill: "currentColor" }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Solicitar via WhatsApp
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            marginTop: "4.5rem",
            background: "#1C1C2E",
            borderRadius: "2rem",
            padding: "clamp(2rem, 4vw, 3rem) clamp(2rem, 5vw, 4rem)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
          }}
        >
          <div>
            <h3 style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontSize: "clamp(1.25rem, 3vw, 1.875rem)", fontWeight: 900, color: "white", marginBottom: "0.5rem" }}>
              Pronto para a sua próxima aventura?
            </h3>
            <p style={{ color: "rgba(255,255,255,0.62)", fontSize: "0.9375rem" }}>
              Fale agora com o Joca — orçamento personalizado em até 2 horas!
            </p>
          </div>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" id="services-whatsapp-cta" className="jv-btn">
            <WhatsAppIcon />
            Solicitar via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
