import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

/* Inter em títulos e corpo, como pede o manual da marca. */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const titulo = `${site.nome} | ${site.nomeCompleto}`;
const descricao =
  "Grupo de pesquisa da UFC em engenharia biomédica, com foco em inovação aplicada. Trabalha com IA, processamento de sinais e visão computacional. Vinculado ao PPGETI, nota 7 na CAPES, e parceiro do LESC/EMBRAPII.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: titulo, template: `%s | ${site.nome}` },
  description: descricao,
  applicationName: site.nome,
  keywords: [
    "engenharia biomédica",
    "inteligência artificial em saúde",
    "imagem médica",
    "processamento de sinais",
    "UFC",
    "PPGETI",
    "LESC",
    "EMBRAPII",
    "BioDatA",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.nome,
    title: titulo,
    description: descricao,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#062134",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ResearchOrganization",
    name: site.nomeCompleto,
    alternateName: site.nome,
    url: site.url,
    description: descricao,
    email: site.email,
    parentOrganization: {
      "@type": "CollegeOrUniversity",
      name: "Universidade Federal do Ceará",
      url: "https://www.ufc.br",
    },
    sameAs: [site.instagram, site.cnpq],
  };

  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
