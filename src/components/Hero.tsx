"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP || "5561998079272";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px", fill: "white", flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Hero() {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Olá Joca! Quero fazer um orçamento para minha próxima viagem!"
  )}`;

  return (
    <section
      id="inicio"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "linear-gradient(135deg, #F0EBE3 0%, #EAE0D5 40%, #F5E6D3 100%)",
        width: "100%",
      }}
    >
      {/* Dashed route decoration */}
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.08, pointerEvents: "none" }}
        viewBox="0 0 1400 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <path d="M 50 700 Q 500 100 900 350 Q 1100 450 1350 180" stroke="#A0703A" strokeWidth="2" strokeDasharray="10 10" />
        <circle cx="50" cy="700" r="8" fill="#A0703A" />
        <circle cx="1350" cy="180" r="8" fill="#A0703A" />
      </svg>

      {/* Animated plane */}
      <div className="jv-fly" style={{ position: "absolute", top: "28%", left: 0, pointerEvents: "none", zIndex: 1 }}>
        <svg viewBox="0 0 24 24" style={{ width: 28, height: 28, fill: "var(--copper)", opacity: 0.5, transform: "rotate(45deg)" }}>
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
      </div>

      <div className="jv-wrap" style={{ paddingTop: "8rem", paddingBottom: "4rem", width: "100%" }}>
        <div className="jv-grid-2" style={{ width: "100%" }}>
          {/* LEFT — Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <span className="jv-badge" style={{ marginBottom: "1.5rem", display: "inline-flex" }}>
                <Star size={13} fill="var(--copper)" />
                Agência de Viagens Especializada
                <Star size={13} fill="var(--copper)" />
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{ marginBottom: "1.25rem" }}
            >
              Sua próxima{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                <span style={{ color: "var(--copper)" }}>viagem</span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                  style={{
                    position: "absolute",
                    bottom: "-4px",
                    left: 0,
                    right: 0,
                    height: "3px",
                    backgroundColor: "var(--copper)",
                    borderRadius: "9999px",
                    transformOrigin: "left",
                  }}
                />
              </span>
              <br />
              começa aqui.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{
                color: "var(--text-muted)",
                fontSize: "clamp(1rem, 2vw, 1.125rem)",
                lineHeight: 1.75,
                maxWidth: "32rem",
                marginBottom: "2rem",
              }}
            >
              Realizamos o sonho da sua viagem com os melhores pacotes nacionais e
              internacionais. Passagens, hotéis e experiências inesquecíveis, tudo num só lugar!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem" }}
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" id="hero-whatsapp-cta" className="jv-btn">
                <WhatsAppIcon />
                Solicite sua proposta
              </a>
              <a href="#destinos" id="hero-destinations-cta" className="jv-btn-outline">
                <MapPin size={18} />
                Ver Destinos
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              style={{ display: "flex", gap: "2.5rem" }}
            >
              {[
                { value: "500+", label: "Clientes felizes" },
                { value: "50+", label: "Destinos" },
                { value: "5★", label: "Avaliação" },
              ].map((stat) => (
                <div key={stat.label} style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "1.75rem", fontWeight: 900, color: "var(--copper)", lineHeight: 1 }}>{stat.value}</p>
                  <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 500, marginTop: "0.25rem" }}>{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Services icons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              style={{ display: "flex", gap: "1rem", marginTop: "2.5rem", flexWrap: "wrap" }}
            >
              {[
                { icon: "✈️", label: "Passagens" },
                { icon: "🏨", label: "Hotéis" },
                { icon: "🧳", label: "Pacotes" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: "rgba(255,255,255,0.6)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "1rem",
                    padding: "1rem 1.25rem",
                    border: "1px solid rgba(160,112,58,0.2)",
                    minWidth: "80px",
                  }}
                >
                  <div
                    style={{
                      width: "3rem",
                      height: "3rem",
                      borderRadius: "9999px",
                      border: "2px solid rgba(160,112,58,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.375rem",
                    }}
                  >
                    {item.icon}
                  </div>
                  <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--navy)" }}>{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Mascot + Floating Cards */}
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              minHeight: "480px",
            }}
          >
            {/* Glow circle behind mascot */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                pointerEvents: "none",
              }}
            >
              <div
                style={{
                  width: "min(380px, 90%)",
                  height: "min(380px, 90%)",
                  borderRadius: "9999px",
                  background: "radial-gradient(circle, rgba(160,112,58,0.18) 0%, transparent 70%)",
                }}
              />
            </motion.div>

            {/* Mascote */}
            <motion.div
              className="jv-float"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              style={{ position: "relative", zIndex: 10, maxWidth: "360px", width: "100%", mixBlendMode: "multiply" }}
            >
              <Image
                src="/mascot.png"
                alt="Mascote Joca Viagens"
                width={400}
                height={520}
                style={{ objectFit: "contain", width: "100%", height: "auto", maxWidth: "360px", display: "block" }}
                priority
              />
            </motion.div>

            {/* Floating card — destination */}
            <motion.div
              initial={{ opacity: 0, y: 24, x: -16 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              style={{
                position: "absolute",
                top: "1.5rem",
                left: 0,
                background: "white",
                borderRadius: "1rem",
                boxShadow: "0 8px 32px rgba(28,28,46,0.14)",
                padding: "0.875rem 1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                zIndex: 20,
                border: "1px solid var(--cream)",
              }}
            >
              <div
                style={{
                  width: "2.75rem",
                  height: "2.75rem",
                  borderRadius: "0.75rem",
                  background: "rgba(160,112,58,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.375rem",
                  flexShrink: 0,
                }}
              >
                ✈️
              </div>
              <div>
                <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", fontWeight: 500 }}>Próximo voo</p>
                <p style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--navy)" }}>Paris, França</p>
                <p style={{ fontSize: "0.75rem", color: "var(--copper)", fontWeight: 600 }}>A partir de R$ 3.890</p>
              </div>
            </motion.div>

            {/* Floating card — review */}
            <motion.div
              initial={{ opacity: 0, y: -24, x: 16 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              style={{
                position: "absolute",
                bottom: "5rem",
                right: 0,
                background: "white",
                borderRadius: "1rem",
                boxShadow: "0 8px 32px rgba(28,28,46,0.14)",
                padding: "0.875rem 1rem",
                zIndex: 20,
                border: "1px solid var(--cream)",
                maxWidth: "200px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", marginBottom: "0.375rem" }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={11} fill="var(--copper)" style={{ color: "var(--copper)" }} />
                ))}
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--navy)" }}>5.0</span>
              </div>
              <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: 1.5 }}>
                &ldquo;Melhor agência que já usei! Perfeito do início ao fim.&rdquo;
              </p>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--copper)", marginTop: "0.25rem" }}>— Maria S.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          color: "var(--text-muted)",
        }}
      >
        <span style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>Role para ver</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{
            width: "1.25rem",
            height: "2rem",
            borderRadius: "9999px",
            border: "2px solid rgba(160,112,58,0.4)",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: "0.375rem",
          }}
        >
          <div style={{ width: "4px", height: "8px", background: "var(--copper)", borderRadius: "9999px" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
