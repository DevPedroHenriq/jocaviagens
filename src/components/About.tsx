"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || "5561998079272";
const instagram = process.env.NEXT_PUBLIC_INSTAGRAM ?? "@jocaviagens";

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" style={{ width: size, height: size, fill: "white", flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const differentials = [
  "Atendimento personalizado e humanizado",
  "Melhores preços do mercado garantidos",
  "Suporte antes, durante e depois da viagem",
  "Roteiros exclusivos sob medida para você",
  "Parcelamento facilitado em até 12x",
  "Mais de 500 clientes satisfeitos",
];

export default function About() {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá Joca! Quero conhecer mais sobre a agência e fazer um orçamento!")}`;
  const igUrl = `https://instagram.com/${instagram.replace("@", "")}`;

  return (
    <section id="sobre" style={{ background: "#FFFFFF", width: "100%", overflow: "hidden" }} className="jv-section">
      <div className="jv-wrap">
        <div className="about-grid">
          {/* LEFT — Mascot & Visual */}
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
            }}
          >
            {/* Background glow */}
            <div style={{ position: "absolute", width: "400px", height: "400px", borderRadius: "9999px", background: "radial-gradient(circle, rgba(160,112,58,0.1) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%, -50%)", pointerEvents: "none" }} />

            {/* Logo */}
            <div style={{ position: "relative", width: "280px", height: "84px", flexShrink: 0 }}>
              <Image src="/logo.png" alt="Logo Joca Viagens" fill sizes="(max-width: 768px) 200px, 300px" style={{ objectFit: "contain" }} />
            </div>

            {/* Mascot */}
            <div className="jv-float" style={{ position: "relative", zIndex: 2, width: "min(380px, 90%)", mixBlendMode: "multiply" }}>
              <Image
                src="/mascot.png"
                alt="Mascote Joca Viagens"
                width={420}
                height={540}
                style={{ objectFit: "contain", width: "100%", height: "auto", display: "block" }}
              />
            </div>

            {/* Instagram Badge */}
            <a
              href={igUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ig-btn"
            >
              <svg viewBox="0 0 24 24" style={{ width: 22, height: 22, fill: "white" }}>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span>{instagram}</span>
            </a>

            {/* Decorative dots */}
            <div style={{ position: "absolute", top: "1rem", right: "1rem", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "0.375rem", opacity: 0.2, pointerEvents: "none" }}>
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} style={{ width: "6px", height: "6px", borderRadius: "9999px", background: "#A0703A" }} />
              ))}
            </div>
          </div>

          {/* RIGHT — Text */}
          <div>
            <span className="jv-badge" style={{ marginBottom: "1.25rem", display: "inline-flex" }}>
              🙋 Sobre a Joca Viagens
            </span>

            <h2 className="jv-title" style={{ textAlign: "left", marginBottom: "1.25rem", lineHeight: 1.15, color: "#1C1C2E" }}>
              Sua parceira de{" "}
              <span style={{ color: "#A0703A" }}>viagem</span>{" "}
              de confiança
            </h2>

            <p style={{ color: "#6B6B7B", fontSize: "1rem", lineHeight: 1.8, marginBottom: "1rem" }}>
              Acabei de lançar minha agência de viagens e estou aqui para tornar o seu sonho realidade!
              A <strong style={{ color: "#1C1C2E" }}>Joca Viagens</strong> nasceu da paixão por viagens e
              do desejo de oferecer um atendimento personalizado, próximo e eficiente.
            </p>

            <p style={{ color: "#6B6B7B", fontSize: "1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
              Meu objetivo é simples: <strong style={{ color: "#1C1C2E" }}>fazer com que cada viagem seja inesquecível</strong>.
              Cuido de cada detalhe — passagem, hospedagem, traslados, cruzeiros e passeios — para que você
              só precise se preocupar em aproveitar cada momento.
            </p>

            {/* Differentials */}
            <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem 1.5rem", marginBottom: "2rem", listStyle: "none" }}>
              {differentials.map((item) => (
                <li
                  key={item}
                  style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.875rem", color: "#1C1C2E", fontWeight: 500, lineHeight: 1.45 }}
                >
                  <CheckCircle2 size={17} style={{ color: "#A0703A", flexShrink: 0, marginTop: "1px" }} />
                  {item}
                </li>
              ))}
            </ul>

            {/* Stats row */}
            <div style={{ display: "flex", gap: "2rem", marginBottom: "2rem", flexWrap: "wrap" }}>
              {[
                { value: "500+", label: "Clientes atendidos" },
                { value: "50+", label: "Destinos" },
                { value: "5★", label: "Avaliação média" },
              ].map(stat => (
                <div key={stat.label}>
                  <p style={{ fontSize: "1.75rem", fontWeight: 900, color: "#A0703A", lineHeight: 1 }}>{stat.value}</p>
                  <p style={{ fontSize: "0.75rem", color: "#6B6B7B", marginTop: "0.25rem" }}>{stat.label}</p>
                </div>
              ))}
            </div>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" id="about-whatsapp-cta" className="jv-btn">
              <WhatsAppIcon />
              Solicitar via WhatsApp
            </a>
          </div>
        </div>
      </div>
      <style>{`
        .ig-btn { display:inline-flex; align-items:center; gap:0.75rem; background:linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045); color:white; padding:0.875rem 1.75rem; border-radius:9999px; font-size:1.0625rem; font-weight:800; box-shadow:0 6px 24px rgba(131,58,180,0.35); transition:transform 0.3s,box-shadow 0.3s; text-decoration:none; }
        .ig-btn:hover { transform:scale(1.06); box-shadow:0 10px 32px rgba(131,58,180,0.45); }
      `}</style>
    </section>
  );
}
