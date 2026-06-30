"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Destinos", href: "#destinos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Orçamento", href: "#orcamento" },
];

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || "5561998079272";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Quero saber mais sobre os pacotes da Joca Viagens!")}`;

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          transition: "background-color 0.4s ease, box-shadow 0.4s ease",
          backgroundColor: scrolled ? "rgba(28,28,46,0.97)" : "rgba(240,235,227,0.92)",
          backdropFilter: "blur(16px)",
          boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.25)" : "0 2px 20px rgba(0,0,0,0.08)",
          borderBottom: scrolled ? "none" : "1px solid rgba(160,112,58,0.15)",
        }}
      >
        <div
          className="jv-wrap"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "80px", gap: "1rem" }}
        >
          {/* Logo */}
          <a href="#inicio" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <div style={{ position: "relative", width: "180px", height: "54px" }}>
              <Image src="/logo.png" alt="Joca Viagens" fill sizes="(max-width: 768px) 120px, 180px" style={{ objectFit: "contain" }} priority />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="nav-desktop" style={{ alignItems: "center", gap: "2rem" }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link${scrolled ? " nav-link--dark" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="nav-desktop" style={{ alignItems: "center", gap: "0.75rem" }}>
            {/* Divider before "Vender Milhas" */}
            <div style={{ width: "1px", height: "28px", background: scrolled ? "rgba(255,255,255,0.15)" : "rgba(28,28,46,0.15)" }} />

            {/* Vender suas milhas */}
            <a
              href="/vender-milhas"
              id="nav-btn-vender-milhas"
              className="nav-milhas-btn"
            >
              🎫 Venda suas milhas
            </a>

            {/* Divider */}
            <div style={{ width: "1px", height: "28px", background: scrolled ? "rgba(255,255,255,0.15)" : "rgba(28,28,46,0.15)" }} />

            {/* Ver Serviços pill */}
            <a
              href="#servicos"
              className={`nav-pill${scrolled ? " nav-pill--dark" : ""}`}
            >
              ✈️ Ver Serviços
            </a>

            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta"
            >
              <Phone size={15} />
              Solicite sua proposta
            </a>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="nav-mobile-btn"
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "0.5rem", borderRadius: "0.5rem",
              color: scrolled ? "white" : "#1C1C2E",
            }}
            aria-label="Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "80px", left: 0, right: 0,
            zIndex: 40,
            backgroundColor: "rgba(28,28,46,0.99)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 16px 40px rgba(0,0,0,0.35)",
            padding: "1.75rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "rgba(255,255,255,0.85)",
                fontWeight: 600,
                fontSize: "1.0625rem",
                padding: "0.75rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                transition: "color 0.2s",
              }}
              onMouseOver={e => (e.currentTarget.style.color = "#C9914A")}
              onMouseOut={e => (e.currentTarget.style.color = "rgba(255,255,255,0.85)")}
            >
              {link.label}
            </a>
          ))}

          {/* Vender milhas — mobile */}
          <a
            href="/vender-milhas"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              gap: "0.5rem",
              background: "linear-gradient(135deg, #A0703A, #C9914A)",
              color: "white",
              padding: "1rem 1.5rem", borderRadius: "9999px", fontWeight: 700,
              marginTop: "0.25rem",
              textDecoration: "none",
            }}
          >
            🎫 Venda suas milhas
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              gap: "0.5rem", backgroundColor: "#25D366", color: "white",
              padding: "1rem 1.5rem", borderRadius: "9999px", fontWeight: 700,
              textDecoration: "none",
            }}
          >
            <Phone size={16} /> Orçar no WhatsApp
          </a>
        </div>
      )}

      <style>{`
        .nav-link { font-weight:600; font-size:0.9rem; letter-spacing:0.01em; color:#1C1C2E; transition:color 0.2s; text-decoration:none; }
        .nav-link--dark { color:rgba(255,255,255,0.85); }
        .nav-link:hover, .nav-link--dark:hover { color:#A0703A; }
        .nav-milhas-btn { display:inline-flex; align-items:center; gap:0.4rem; background:linear-gradient(135deg,#1C1C2E,#2D2D44); color:white; padding:0.55rem 1.1rem; border-radius:9999px; font-size:0.8rem; font-weight:700; transition:transform 0.2s,box-shadow 0.2s; white-space:nowrap; border:1.5px solid rgba(160,112,58,0.5); text-decoration:none; }
        .nav-milhas-btn:hover { transform:scale(1.05); box-shadow:0 6px 20px rgba(160,112,58,0.35); background:linear-gradient(135deg,#A0703A,#C9914A); }
        .nav-pill { display:inline-flex; align-items:center; gap:0.4rem; background:rgba(160,112,58,0.1); border:1px solid rgba(160,112,58,0.3); color:#A0703A; padding:0.6rem 1.3rem; border-radius:9999px; font-size:0.875rem; font-weight:700; transition:background 0.2s; text-decoration:none; white-space:nowrap; }
        .nav-pill--dark { background:rgba(160,112,58,0.15); color:#C9914A; }
        .nav-pill:hover { background:rgba(160,112,58,0.25); }
        .nav-cta { display:inline-flex; align-items:center; gap:0.5rem; background:#A0703A; color:white; padding:0.7rem 1.4rem; border-radius:9999px; font-weight:700; font-size:0.875rem; transition:background 0.2s,transform 0.2s; box-shadow:0 4px 16px rgba(160,112,58,0.35); white-space:nowrap; text-decoration:none; }
        .nav-cta:hover { background:#C9914A; transform:scale(1.05); }
      `}</style>
    </>
  );
}
