# 🏆 Copa do Mundo 2026 — Site (Static Export para GitHub Pages)

Site completo e interativo sobre a Copa do Mundo de Futebol 2026, configurado para deploy estático no **GitHub Pages**.

## 🚀 Deploy rápido no GitHub Pages

### Passo a passo (5 minutos)

1. **Crie um repositório no GitHub**
   - Nome sugerido: `copa-2026`
   - Público ou privado (deve estar público para GitHub Pages gratuito)

2. **Suba os arquivos**

   ```bash
   git init
   git add .
   git commit -m "⚽ Copa do Mundo 2026 — site estático"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/copa-2026.git
   git push -u origin main
   ```

3. **Configure o GitHub Pages**
   - Vá em **Settings** → **Pages**
   - Em **Build and deployment** → **Source**: escolha **GitHub Actions**
   - O workflow em `.github/workflows/deploy.yml` será detectado automaticamente

4. **Dispare o deploy**
   - Vá em **Actions** → **🚀 Deploy no GitHub Pages** → **Run workflow**
   - Aguarde ~2 minutos (build + deploy)

5. **Acesse seu site** 🎉
   ```
   https://SEU_USUARIO.github.io/copa-2026/
   ```

## ⚙️ Configuração importante

O arquivo `next.config.ts` contém:

```typescript
const repoName = "copa-2026"; // ← ALTERE AQUI se seu repositório tiver outro nome
const nextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: { unoptimized: true },
};
```

### 📌 Se você renomear o repositório:

Atualize a variável `repoName` no `next.config.ts` para o nome correto do repo.

### 📌 Se usar GitHub Pages em domínio próprio (user.github.io) ou custom domain:

Mude o `basePath` para vazio:

```typescript
basePath: "",
assetPrefix: undefined,
```

## 🛠️ Rodar localmente

```bash
# Instalar dependências
npm install
# ou: bun install

# Desenvolvimento (com hot reload)
npm run dev
# Acesse http://localhost:3000

# Build estático (gera pasta /out)
npm run build
# A pasta /out conterá HTML/CSS/JS estáticos prontos para servir
```

### Testar o build estático localmente

```bash
npm run build
npx serve out
# Acesse http://localhost:3000
```

## 📂 Estrutura

```
.
├── .github/workflows/
│   └── deploy.yml            # Workflow de deploy automático
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Layout raiz
│   │   ├── page.tsx          # Página principal
│   │   ├── not-found.tsx     # Página 404 customizada
│   │   └── globals.css       # Estilos + animações
│   ├── components/
│   │   ├── effects/          # Countdown, confete, bandeiras, troféu 3D
│   │   ├── sections/         # Hero, Groups, Teams, Bracket, Stadiums, etc
│   │   └── ui/               # Componentes shadcn/ui (não obrigatórios)
│   └── lib/
│       └── worldcup-data.ts  # Dados REAIS: 48 seleções, 72 jogos, bracket
├── public/                   # Assets estáticos
├── next.config.ts            # ⚙️ Configuração para GitHub Pages
├── package-github-pages.json # package.json minimalista (opcional)
└── README.md
```

## 📋 O que mudou em relação à versão Next.js server

✅ **Removido**: API routes (não funcionam em estático)
✅ **Removido**: Prisma/database (não necessário para site estático)
✅ **Removido**: `output: "standalone"` (substituído por `output: "export"`)
✅ **Adicionado**: `basePath` e `assetPrefix` para GitHub Pages
✅ **Adicionado**: `images.unoptimized: true` (GitHub Pages não otimiza imagens)
✅ **Adicionado**: Workflow do GitHub Actions para deploy automático
✅ **Adicionado**: Página 404 customizada (GitHub Pages usa `404.html`)
✅ **Adicionado**: `.nojekyll` (impede o Jekyll de processar `_next`)

## 🎯 Recursos do site

- **Hero épico** com troféu 3D e contagem regressiva ao vivo até 11/06/2026
- **12 Grupos (A–L)** com as 48 seleções classificadas reais
- **48 Seleções** com filtros por confederação, busca, bandeiras animadas
- **Chaves do mata-mata** (Rodada de 32 → Oitavas → Quartas → Semifinal → Final)
- **16 Estádios** com filtros por país
- **Calendário** com 72 jogos da fase de grupos filtráveis por data
- **História**: top 15 artilheiros + 22 campeões + ranking de títulos
- **Curiosidades**: mascote, bola oficial e banner das 3 sedes

## 🇧🇷 Brasil no Grupo C

| Data | Jogo | Local | Horário |
|------|------|-------|---------|
| 13/06 (sáb) | Brasil x Marrocos | MetLife Stadium (Nova York) | 19h |
| 19/06 (sex) | Brasil x Haiti | Lincoln Financial Field (Filadélfia) | 21h30 |
| 24/06 (qua) | Escócia x Brasil | Hard Rock Stadium (Miami) | 19h |

## ❓ Troubleshooting

### O site aparece sem CSS / imagens quebradas
→ Verifique se o `basePath` em `next.config.ts` corresponde ao nome do repositório.

### Build falha com erro de TypeScript
→ O `next.config.ts` tem `ignoreBuildErrors: true` para evitar isso. Se quiser types estritos, remova essa linha e corrija os erros.

### Erro 404 ao acessar links internos
→ GitHub Pages não tem rewrite de rotas. O Next.js static export gera `404.html` automaticamente e o site usa `<Link>` do Next que respeita o `basePath`.

### As fontes não carregam
→ O Next.js 16 usa `next/font` que self-hosts as fontes. Em static export, as fontes vão para `/_next/static/media/` e funcionam normalmente.

## 📝 Notas

- Site não-oficial, feito para fins informativos
- Dados coletados em 18/06/2026 de fontes oficiais (FIFA, GE Globo, ESPN, CBF)
- Layout responsivo (mobile-first)
- Tema dark premium com glassmorphism

---

⚽ Feito com paixão pelo futebol • 2026
