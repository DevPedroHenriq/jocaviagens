import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vender suas Milhas | Joca Viagens",
  description:
    "Venda suas milhas aéreas com segurança e pelo melhor preço do mercado! Cotação instantânea para Smiles, TudoAzul e LATAM Pass. Receba o valor estimado direto no seu e-mail.",
  openGraph: {
    title: "Vender suas Milhas com Segurança — Joca Viagens",
    description:
      "Cotação gratuita e instantânea para Smiles, TudoAzul e LATAM Pass. Melhor preço do mercado!",
    type: "website",
  },
};

export default function VenderMilhasLayout({ children }: { children: React.ReactNode }) {
  return children;
}
