import type { NextConfig } from "next";

// Configuração para GitHub Pages (static export)
// 1. output: "export" gera HTML/CSS/JS estático em /out
// 2. images.unoptimized: true (GitHub Pages não tem otimização de imagem)
// 3. basePath/assetPrefix: ajuste conforme o nome do repositório no GitHub
//
// INSTRUÇÕES:
// - Se o repositório for: github.com/SEU_USUARIO/copa-2026
//   O site ficará em: https://SEU_USUARIO.github.io/copa-2026/
//   → Mantenha basePath: "/copa-2026"
//
// - Se for publicado em domínio próprio (user.github.io) ou com GitHub Pages
//   na raiz do domínio (custom domain), use basePath: ""
//
// O nome do repositório é derivado automaticamente de GITHUB_REPOSITORY
// (definido pelo GitHub Actions como "owner/repo"), então o mesmo código
// funciona em qualquer repo — ex.: valksandro/copa-2026 e Phanttro/copa2026.
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "copa-2026";

const nextConfig: NextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // GitHub Pages precisa de basePath para servir de subpath
  basePath: process.env.NODE_ENV === "production" ? `/${repoName}` : "",
  assetPrefix: process.env.NODE_ENV === "production" ? `/${repoName}/` : undefined,
  images: {
    unoptimized: true,
  },
  // Permite requisições cross-origin em desenvolvimento (preview)
  allowedDevOrigins: [
    "*.space-z.ai",
    "*.z.ai",
    "*.github.io",
    "localhost",
  ],
};

export default nextConfig;
