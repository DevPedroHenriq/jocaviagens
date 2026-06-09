"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Destinos", href: "#destinos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Orçamento", href: "#orcamento" },
];

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Quero saber mais sobre os pacotes da Joca Viagens!")}`;

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          transition: "all 0.4s ease",
          backgroundColor: scrolled ? "rgba(28,28,46,0.97)" : "rgba(240,235,227,0.92)",
          backdropFilter: "blur(16px)",
          boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.25)" : "0 2px 20px rgba(0,0,0,0.08)",
          borderBottom: scrolled ? "none" : "1px solid rgba(160,112,58,0.15)",
        }}
      >
        <div
          className="jv-wrap"
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "96px" }}
        >
          {/* Logo — bigger */}
          <a href="#inicio" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <div style={{ position: "relative", width: "200px", height: "60px" }}>
              <Image src="/logo.png" alt="Joca Viagens" fill sizes="(max-width: 768px) 120px, 160px" style={{ objectFit: "contain" }} priority />
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            className="nav-desktop"
            style={{ alignItems: "center", gap: "2.5rem" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontWeight: 600,
                  fontSize: "0.9375rem",
                  letterSpacing: "0.01em",
                  color: scrolled ? "rgba(255,255,255,0.85)" : "#1C1C2E",
                  transition: "color 0.2s",
                  position: "relative",
                }}
                onMouseOver={e => (e.currentTarget.style.color = "#A0703A")}
                onMouseOut={e => (e.currentTarget.style.color = scrolled ? "rgba(255,255,255,0.85)" : "#1C1C2E")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: services pill + WhatsApp */}
          <div className="nav-desktop" style={{ alignItems: "center", gap: "1rem" }}>
            <a
              href="#servicos"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                background: scrolled ? "rgba(160,112,58,0.15)" : "rgba(160,112,58,0.1)",
                border: "1px solid rgba(160,112,58,0.3)",
                color: scrolled ? "#C9914A" : "#A0703A",
                padding: "0.5rem 1rem",
                borderRadius: "9999px",
                fontSize: "0.8rem",
                fontWeight: 600,
                transition: "all 0.3s",
              }}
              onMouseOver={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(160,112,58,0.25)";
              }}
              onMouseOut={e => {
                (e.currentTarget as HTMLElement).style.background = scrolled ? "rgba(160,112,58,0.15)" : "rgba(160,112,58,0.1)";
              }}
            >
              ✈️ Ver Serviços
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                backgroundColor: "#A0703A",
                color: "white",
                padding: "0.75rem 1.5rem",
                borderRadius: "9999px",
                fontWeight: 700,
                fontSize: "0.9rem",
                transition: "all 0.3s",
                boxShadow: "0 4px 16px rgba(160,112,58,0.35)",
                whiteSpace: "nowrap",
              }}
              onMouseOver={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#C9914A";
                (e.currentTarget as HTMLElement).style.transform = "scale(1.05)";
              }}
              onMouseOut={e => {
                (e.currentTarget as HTMLElement).style.backgroundColor = "#A0703A";
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              }}
            >
              <Phone size={15} />
              Orçar no WhatsApp
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
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            style={{
              position: "fixed",
              top: "96px", left: 0, right: 0,
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
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                gap: "0.5rem", backgroundColor: "#A0703A", color: "white",
                padding: "1rem 1.5rem", borderRadius: "9999px", fontWeight: 700,
                marginTop: "0.5rem",
              }}
            >
              <Phone size={16} /> Orçar no WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
