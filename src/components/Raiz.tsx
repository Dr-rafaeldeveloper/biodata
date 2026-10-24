import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { site } from "@/data/comum";
import type { Conteudo } from "@/data/pt";

/* Inter em títulos e corpo, como pede o manual da marca. */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const viewport: Viewport = { themeColor: "#062134" };

/** Metadados de uma versão do site, com as alternativas de idioma. */
export function metadados(c: Conteudo): Metadata {
  return {
    metadataBase: new URL(site.url),
    title: { default: c.meta.titulo, template: `%s | ${site.nome}` },
    description: c.meta.descricao,
    applicationName: site.nome,
    keywords: c.meta.palavrasChave,
    alternates: {
      canonical: c.caminho,
      languages: {
        [c.lang]: c.caminho,
        [c.outroIdioma.lang]: c.outroIdioma.caminho,
      },
    },
    openGraph: {
      type: "website",
      locale: c.lang.replace("-", "_"),
      url: c.caminho,
      siteName: site.nome,
      title: c.meta.titulo,
      description: c.meta.descricao,
    },
    robots: { index: true, follow: true },
  };
}

/**
 * Casca comum das duas versões do site. Cada idioma tem o próprio layout
 * raiz (grupos de rota) só para o <html lang> ser o certo.
 */
export default function Raiz({
  c,
  children,
}: {
  c: Conteudo;
  children: ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ResearchOrganization",
    name: site.nomeCompleto,
    alternateName: site.nome,
    url: site.url,
    description: c.meta.descricao,
    email: site.email,
    parentOrganization: {
      "@type": "CollegeOrUniversity",
      name: c.meta.universidade,
      url: site.ufc,
    },
    sameAs: [site.instagram, site.cnpq],
  };

  return (
    <html lang={c.lang} className={`${inter.variable} h-full antialiased`}>
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
