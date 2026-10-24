import type { NextConfig } from "next";

/* No GitHub Pages o site sai como HTML estático e mora em /biodata (página de
   projeto), por isso o basePath e o export só entram nesse build. Em
   desenvolvimento e em outros hosts nada disso é aplicado. */
const githubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  // Fixa a raiz do workspace. Sem isso o Turbopack sobe a árvore de diretórios
  // e pode eleger uma pasta acima do projeto por causa de um lockfile solto.
  turbopack: { root: import.meta.dirname },
  // Chega ao código do cliente como `prefixo`, em src/data/site.ts.
  env: { NEXT_PUBLIC_BASE_PATH: githubPages ? "/biodata" : "" },
  ...(githubPages
    ? {
        output: "export",
        basePath: "/biodata",
        images: { unoptimized: true },
        // /en vira a pasta en/index.html, que o Pages serve sem depender de
        // reescrita de URL.
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
