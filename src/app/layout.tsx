import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap", weight: ["400", "700", "900"] });

export const metadata: Metadata = {
  title: {
    default: "Joca Viagens — Agência de Viagens | Pacotes Nacionais e Internacionais",
    template: "%s | Joca Viagens",
  },
  description:
    "Joca Viagens é a sua agência de viagens especializada em pacotes nacionais e internacionais. Passagens aéreas, hotéis, cruzeiros, roteiros sob medida e experiências inesquecíveis. Orçamento gratuito via WhatsApp!",
  keywords: [
    "agência de viagens",
    "pacotes de viagem",
    "pacotes nacionais",
    "pacotes internacionais",
    "passagens aéreas baratas",
    "hotéis com desconto",
    "cruzeiros",
    "lua de mel",
    "viagem de férias",
    "turismo nacional",
    "turismo internacional",
    "roteiro de viagem",
    "Paris",
    "Cancún",
    "Dubai",
    "Lisboa",
    "Fernando de Noronha",
    "Rio de Janeiro",
    "agência de turismo",
    "viagem barata",
    "melhor agência de viagens",
    "orçamento de viagem",
    "Brasília viagens",
    "viagem personalizada",
    "traslado aeroporto",
    "seguro viagem",
    "chip internacional",
    "passagem aérea parcelada",
    "hotel barato",
    "viagem em família",
    "viagem a dois",
    "intercâmbio",
    "Joca Viagens",
  ],
  authors: [{ name: "Joca Viagens", url: "https://jocaviagens.com.br" }],
  creator: "Joca Viagens",
  publisher: "Joca Viagens",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Joca Viagens — Agência de Viagens | Pacotes Nacionais e Internacionais",
    description:
      "Realize o sonho da sua próxima viagem com a Joca Viagens. Pacotes nacionais e internacionais, passagens, hotéis e cruzeiros. Orçamento 100% gratuito pelo WhatsApp!",
    siteName: "Joca Viagens",
    images: [
      {
        url: "/logo.png",
        width: 900,
        height: 600,
        alt: "Joca Viagens — Agência de Viagens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joca Viagens — Agência de Viagens",
    description:
      "Realize o sonho da sua próxima viagem com a Joca Viagens. Pacotes nacionais e internacionais, passagens, hotéis e cruzeiros.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png", sizes: "any" },
    ],
    apple: [
      { url: "/logo.png", type: "image/png", sizes: "180x180" },
    ],
    shortcut: "/logo.png",
  },
  category: "travel",
};

const CSS = `
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html, body { width: 100%; overflow-x: hidden; }
body { font-family: var(--font-inter), Inter, 'Segoe UI', system-ui, sans-serif; background: #F0EBE3; color: #1C1C2E; }

/* ── CONTAINER ── */
.jv-wrap { width: 100%; max-width: 1320px; margin-left: auto; margin-right: auto; padding-left: 1.5rem; padding-right: 1.5rem; }
@media (min-width: 640px) { .jv-wrap { padding-left: 2.5rem; padding-right: 2.5rem; } }
@media (min-width: 1024px) { .jv-wrap { padding-left: 4rem; padding-right: 4rem; } }

/* ── GRIDS ── */
.jv-grid-3 { display: grid; grid-template-columns: 1fr; gap: 1.75rem; }
@media (min-width: 640px) { .jv-grid-3 { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .jv-grid-3 { grid-template-columns: repeat(3, 1fr); } }
.jv-grid-2 { display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: center; }
@media (min-width: 1024px) { .jv-grid-2 { grid-template-columns: 1fr 1fr; } }
.about-grid { display: grid; grid-template-columns: 1fr; gap: 3rem; align-items: center; }
@media (min-width: 1024px) { .about-grid { grid-template-columns: 1fr 1fr; } }
.quote-grid { display: grid; grid-template-columns: 1fr; gap: 4rem; align-items: start; }
@media (min-width: 1024px) { .quote-grid { grid-template-columns: 1fr 1fr; } }
.footer-grid { display: grid; grid-template-columns: 1fr; gap: 2.5rem; }
@media (min-width: 640px) { .footer-grid { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .footer-grid { grid-template-columns: 2fr 1fr 1fr 1.5fr; } }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
@media (max-width: 560px) { .form-row { grid-template-columns: 1fr; } }

/* ── NAV RESPONSIVE ── */
.nav-desktop { display: none; }
@media (min-width: 768px) { .nav-desktop { display: flex; } }
.nav-mobile-btn { display: flex; }
@media (min-width: 768px) { .nav-mobile-btn { display: none; } }

/* ── SECTION ── */
.jv-section { padding-top: 5rem; padding-bottom: 5rem; width: 100%; }
@media (min-width: 768px) { .jv-section { padding-top: 7rem; padding-bottom: 7rem; } }

/* ── TYPOGRAPHY ── */
.jv-title { font-family: var(--font-playfair), 'Playfair Display', Georgia, serif; font-size: clamp(1.875rem, 4.5vw, 3rem); font-weight: 900; color: #1C1C2E; line-height: 1.15; }
.jv-hero-title { font-family: var(--font-playfair), 'Playfair Display', Georgia, serif; font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 900; color: #1C1C2E; line-height: 1.1; }

/* ── BADGE ── */
.jv-badge { display: inline-flex; align-items: center; gap: 0.375rem; background: rgba(160,112,58,0.12); border: 1px solid rgba(160,112,58,0.25); color: #A0703A; padding: 0.4rem 1.1rem; border-radius: 9999px; font-size: 0.8125rem; font-weight: 600; }

/* ── BUTTONS ── */
.jv-btn { display: inline-flex; align-items: center; justify-content: center; gap: 0.625rem; background: #A0703A; color: white; padding: 1rem 2rem; border-radius: 9999px; font-weight: 700; font-size: 0.9375rem; border: none; cursor: pointer; transition: all 0.3s ease; text-decoration: none; }
.jv-btn:hover { background: #C9914A; transform: scale(1.04); box-shadow: 0 12px 32px rgba(160,112,58,0.35); }
.jv-btn-outline { display: inline-flex; align-items: center; justify-content: center; gap: 0.625rem; background: transparent; color: #1C1C2E; padding: 1rem 2rem; border-radius: 9999px; font-weight: 700; font-size: 0.9375rem; border: 2px solid #1C1C2E; cursor: pointer; transition: all 0.3s ease; text-decoration: none; }
.jv-btn-outline:hover { background: #1C1C2E; color: white; transform: scale(1.04); }

/* ── MASCOT (remove white bg via multiply blend on cream background) ── */
.mascot-img { mix-blend-mode: multiply; display: block; }

/* ── CARDS ── */
.dest-card { transition: transform 0.35s ease, box-shadow 0.35s ease; }
.dest-card:hover { transform: translateY(-7px); box-shadow: 0 20px 48px rgba(28,28,46,0.18); }

/* ── ANIMATIONS ── */
@keyframes jv-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
.jv-float { animation: jv-float 3.5s ease-in-out infinite; }
@keyframes jv-fly { 0%{transform:translateX(-200px) translateY(20px);opacity:0} 10%{opacity:0.5} 90%{opacity:0.5} 100%{transform:translateX(calc(100vw + 200px)) translateY(-80px);opacity:0} }
.jv-fly { animation: jv-fly 8s linear infinite; }
@keyframes jv-pulse-wa { 0%,100%{box-shadow:0 0 0 0 rgba(37,211,102,0.4)} 50%{box-shadow:0 0 0 14px rgba(37,211,102,0)} }
.jv-wa-pulse { animation: jv-pulse-wa 2s infinite; }
@keyframes spin-btn { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
.spin { animation: spin-btn 1s linear infinite; }
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </head>
      <body className={`${inter.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
