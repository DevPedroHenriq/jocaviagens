"use client";

import Image from "next/image";
import { Camera, MapPin, Heart } from "lucide-react";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP;

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Destinos", href: "#destinos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Orçamento", href: "#orcamento" },
];

const destinations = [
  "Paris, França",
  "Cancún, México",
  "Rio de Janeiro",
  "Lisboa, Portugal",
  "Dubai, EAU",
  "Fernando de Noronha",
];

const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" style={{ width: size, height: size, fill: "white", flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Footer() {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Olá Joca! Gostaria de fazer um orçamento!"
  )}`;

  return (
    <footer style={{ background: "#12121E", color: "white", width: "100%" }}>
      {/* Main Footer */}
      <div className="jv-wrap" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem" }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ position: "relative", width: "140px", height: "44px", marginBottom: "1rem" }}>
              <Image src="/logo.png" alt="Joca Viagens" fill sizes="(max-width: 768px) 120px, 160px" style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }} />
            </div>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "1.5rem", maxWidth: "22rem" }}>
              Sua agência de viagens de confiança. Transformando sonhos em realidade com os melhores pacotes nacionais e internacionais.
            </p>
            <div style={{ display: "flex", gap: "0.625rem" }}>
              <a
                href="https://instagram.com/jocaviagens"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  width: "2.5rem", height: "2.5rem", borderRadius: "9999px",
                  background: "rgba(255,255,255,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "background 0.3s",
                  cursor: "pointer",
                }}
                onMouseOver={e => (e.currentTarget.style.background = "var(--copper)")}
                onMouseOut={e => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
              >
                <Camera size={16} color="white" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                style={{
                  width: "2.5rem", height: "2.5rem", borderRadius: "9999px",
                  background: "rgba(255,255,255,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "background 0.3s",
                  cursor: "pointer",
                }}
                onMouseOver={e => (e.currentTarget.style.background = "#25D366")}
                onMouseOut={e => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
              >
                <WhatsAppIcon size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--copper-light)", marginBottom: "1rem" }}>
              Navegação
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", transition: "color 0.2s" }}
                    onMouseOver={e => (e.currentTarget.style.color = "var(--copper-light)")}
                    onMouseOut={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--copper-light)", marginBottom: "1rem" }}>
              Destinos
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {destinations.map(dest => (
                <li key={dest}>
                  <a href="#destinos" style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", transition: "color 0.2s" }}
                    onMouseOver={e => (e.currentTarget.style.color = "var(--copper-light)")}
                    onMouseOut={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                  >
                    {dest}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--copper-light)", marginBottom: "1rem" }}>
              Contato
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ width: "2rem", height: "2rem", borderRadius: "0.5rem", background: "rgba(37,211,102,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: "#25D366" }}>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.7rem" }}>WhatsApp</p>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.875rem", fontWeight: 600 }}>(61) 9807-9272</p>
                </div>
              </a>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ width: "2rem", height: "2rem", borderRadius: "0.5rem", background: "rgba(160,112,58,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <MapPin size={13} color="var(--copper-light)" />
                </div>
                <div>
                  <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.7rem" }}>Localização</p>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.875rem", fontWeight: 600 }}>Brasília, DF — Brasil</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ width: "2rem", height: "2rem", borderRadius: "0.5rem", background: "rgba(160,112,58,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Camera size={13} color="var(--copper-light)" />
                </div>
                <div>
                  <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.7rem" }}>Instagram</p>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.875rem", fontWeight: 600 }}>@jocaviagens</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div
          className="jv-wrap"
          style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.75rem" }}
        >
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} Joca Viagens. Todos os direitos reservados.
          </p>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "0.25rem" }}>
            Feito com <Heart size={12} fill="var(--copper)" color="var(--copper)" /> para tornar sua viagem inesquecível
          </p>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp"
        className="jv-wa-pulse"
        style={{
          position: "fixed",
          bottom: "1.5rem",
          right: "1.5rem",
          zIndex: 99,
          width: "3.5rem",
          height: "3.5rem",
          background: "#25D366",
          borderRadius: "9999px",
          boxShadow: "0 6px 24px rgba(37,211,102,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.3s",
        }}
        aria-label="WhatsApp Joca Viagens"
        onMouseOver={e => (e.currentTarget.style.transform = "scale(1.12)")}
        onMouseOut={e => (e.currentTarget.style.transform = "scale(1)")}
      >
        <svg viewBox="0 0 24 24" style={{ width: 26, height: 26, fill: "white" }}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      <style jsx global>{`
        @media (min-width: 640px) {
          .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .footer-grid { grid-template-columns: 2fr 1fr 1fr 1.5fr !important; }
        }
      `}</style>
    </footer>
  );
}
