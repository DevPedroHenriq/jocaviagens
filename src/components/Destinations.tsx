"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Users, Star } from "lucide-react";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || "5561980792722";

const WhatsAppIcon = ({ size = 16 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" style={{ width: size, height: size, fill: "white", flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const destinations = [
  {
    id: 1,
    name: "Paris, França",
    emoji: "🗼",
    image: "/paris.png",
    price: "R$ 3.890",
    duration: "7 dias",
    rating: 4.9,
    reviews: 128,
    tags: ["Europa", "Romântico", "Cultural"],
    highlight: "Torre Eiffel & Museu do Louvre",
    message: "Olá Joca! Tenho interesse no pacote Paris, França. Pode me passar mais informações?",
  },
  {
    id: 2,
    name: "Cancún, México",
    emoji: "🏖️",
    image: "/cancun.png",
    price: "R$ 2.490",
    duration: "5 dias",
    rating: 4.8,
    reviews: 95,
    tags: ["Caribe", "Praia", "All Inclusive"],
    highlight: "Praias paradisíacas & Cenotes",
    message: "Olá Joca! Tenho interesse no pacote Cancún, México. Pode me passar mais informações?",
  },
  {
    id: 3,
    name: "Rio de Janeiro, Brasil",
    emoji: "🌆",
    image: "/rio.png",
    price: "R$ 1.290",
    duration: "4 dias",
    rating: 4.7,
    reviews: 210,
    tags: ["Brasil", "Carnaval", "Natureza"],
    highlight: "Cristo Redentor & Pão de Açúcar",
    message: "Olá Joca! Tenho interesse no pacote Rio de Janeiro. Pode me passar mais informações?",
  },
  {
    id: 4,
    name: "Lisboa, Portugal",
    emoji: "🏛️",
    image: "/lisboa.png",
    price: "R$ 4.200",
    duration: "8 dias",
    rating: 4.9,
    reviews: 76,
    tags: ["Europa", "História", "Gastronomia"],
    highlight: "Alfama & Belém",
    message: "Olá Joca! Tenho interesse no pacote Lisboa, Portugal. Pode me passar mais informações?",
  },
  {
    id: 5,
    name: "Dubai, EAU",
    emoji: "🌇",
    image: "/dubai.png",
    price: "R$ 5.890",
    duration: "6 dias",
    rating: 4.8,
    reviews: 52,
    tags: ["Luxo", "Arquitetura", "Compras"],
    highlight: "Burj Khalifa & Desert Safari",
    message: "Olá Joca! Tenho interesse no pacote Dubai. Pode me passar mais informações?",
  },
  {
    id: 6,
    name: "Fernando de Noronha",
    emoji: "🏝️",
    image: "/noronha.png",
    price: "R$ 3.100",
    duration: "5 dias",
    rating: 5.0,
    reviews: 164,
    tags: ["Brasil", "Natureza", "Mergulho"],
    highlight: "Baía dos Golfinhos & Enseada",
    message: "Olá Joca! Tenho interesse no pacote Fernando de Noronha. Pode me passar mais informações?",
  },
];

function DestinationCard({
  destination,
  index,
}: {
  destination: (typeof destinations)[0];
  index: number;
}) {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(destination.message)}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="destination-card"
      style={{
        background: "white",
        borderRadius: "1.5rem",
        overflow: "hidden",
        boxShadow: "0 2px 20px rgba(28,28,46,0.08)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: "220px", overflow: "hidden", flexShrink: 0 }}>
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: "cover", transition: "transform 0.6s ease" }}
          onMouseOver={e => (e.currentTarget.style.transform = "scale(1.08)")}
          onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.65), transparent 60%)" }} />

        {/* Price badge */}
        <div style={{
          position: "absolute", top: "0.875rem", right: "0.875rem",
          background: "var(--copper)", color: "white",
          padding: "0.375rem 0.75rem", borderRadius: "9999px",
          fontSize: "0.75rem", fontWeight: 700, boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        }}>
          A partir de {destination.price}
        </div>

        {/* Rating badge */}
        <div style={{
          position: "absolute", top: "0.875rem", left: "0.875rem",
          background: "rgba(255,255,255,0.92)", backdropFilter: "blur(4px)",
          padding: "0.3rem 0.625rem", borderRadius: "9999px",
          fontSize: "0.75rem", fontWeight: 700,
          display: "flex", alignItems: "center", gap: "0.25rem",
          color: "var(--navy)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}>
          <Star size={11} fill="var(--copper)" style={{ color: "var(--copper)" }} />
          {destination.rating} ({destination.reviews})
        </div>

        {/* Name on image */}
        <div style={{ position: "absolute", bottom: "0.75rem", left: "1rem", display: "flex", alignItems: "center", gap: "0.375rem" }}>
          <MapPin size={14} style={{ color: "white" }} />
          <p style={{ color: "white", fontWeight: 700, fontSize: "1rem", textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>
            {destination.name}
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem", flex: 1 }}>
        {/* Highlight */}
        <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontSize: "1.125rem" }}>{destination.emoji}</span>
          {destination.highlight}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
          {destination.tags.map((tag) => (
            <span key={tag} style={{
              background: "var(--copper-pale)", color: "var(--copper)",
              fontSize: "0.72rem", fontWeight: 600,
              padding: "0.25rem 0.625rem", borderRadius: "9999px",
            }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Info row */}
        <div style={{ display: "flex", gap: "1.25rem" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "0.75rem", color: "var(--text-muted)" }}>
            <Clock size={12} /> {destination.duration}
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "0.75rem", color: "var(--text-muted)" }}>
            <Users size={12} /> Individual ou grupo
          </span>
        </div>

        {/* CTA */}
        <div style={{ borderTop: "1px solid var(--cream)", paddingTop: "0.875rem", marginTop: "auto" }}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id={`whatsapp-dest-${destination.id}`}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              width: "100%",
              background: "var(--copper)",
              color: "white",
              padding: "0.75rem 1rem",
              borderRadius: "0.75rem",
              fontWeight: 700,
              fontSize: "0.875rem",
              transition: "all 0.3s",
              cursor: "pointer",
              textDecoration: "none",
            }}
            onMouseOver={e => {
              (e.currentTarget as HTMLElement).style.background = "var(--copper-light)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1.02)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(160,112,58,0.3)";
            }}
            onMouseOut={e => {
              (e.currentTarget as HTMLElement).style.background = "var(--copper)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <WhatsAppIcon size={16} />
            Solicitar via WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Destinations() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="destinos" style={{ background: "var(--gray-soft)", width: "100%" }} className="jv-section">
      <div className="jv-wrap">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="jv-badge" style={{ marginBottom: "1rem", display: "inline-flex" }}>✈️ Destinos em Destaque</span>
          <h2 className="jv-title">Onde você quer ir?</h2>
          <p className="section-subtitle">
            Explore os destinos mais incríveis com os melhores preços. Cada pacote inclui
            passagem, hotel e assistência personalizada.
          </p>
          <div className="section-divider" />
        </motion.div>

        {/* Cards Grid */}
        <div className="jv-grid-3">
          {destinations.map((dest, i) => (
            <DestinationCard key={dest.id} destination={dest} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginTop: "3.5rem" }}
        >
          <p style={{ color: "var(--text-muted)", marginBottom: "1rem" }}>Não achou o destino que queria?</p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá Joca! Quero saber sobre outros destinos que vocês trabalham!")}`}
            target="_blank"
            rel="noopener noreferrer"
            id="more-destinations-whatsapp"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              border: "2px solid var(--copper)",
              color: "var(--copper)",
              padding: "0.875rem 2rem",
              borderRadius: "9999px",
              fontWeight: 700,
              fontSize: "0.9375rem",
              transition: "all 0.3s",
              cursor: "pointer",
            }}
            onMouseOver={e => {
              (e.currentTarget as HTMLElement).style.background = "var(--copper)";
              (e.currentTarget as HTMLElement).style.color = "white";
              (e.currentTarget as HTMLElement).style.transform = "scale(1.04)";
            }}
            onMouseOut={e => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "var(--copper)";
              (e.currentTarget as HTMLElement).style.transform = "scale(1)";
            }}
          >
            Consulte outros destinos pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
