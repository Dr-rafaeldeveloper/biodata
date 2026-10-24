import type { NextConfig } from "next";

/* No GitHub Pages o site sai como HTML estático e mora em /biodata (página de
   projeto), por isso o basePath e o export só entram nesse build. Em
   desenvolvimento e em outros hosts nada disso é aplicado. */
const githubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  // Fixa a raiz do workspace. Sem isso o Turbopack sobe a árvore de diretórios
  // e pode eleger uma pasta acima do projeto por causa de um lockfile solto.
  turbopack: { root: import.meta.dirname },
  ...(githubPages
    ? { output: "export", basePath: "/biodata", images: { unoptimized: true } }
    : {}),
};

export default nextConfig;
