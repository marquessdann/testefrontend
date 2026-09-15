# Della Distribuidora — Landing Page

Landing page única (single page) da Della Distribuidora, construída com
Next.js (App Router) + TypeScript + Tailwind CSS. Sem IA, sem backend —
apenas uma vitrine institucional rápida e fácil de hospedar.

## Stack

- Next.js 16 + React 19 + TypeScript
- Tailwind CSS (paleta customizada preto/branco/lilás/azul em `tailwind.config.ts`)
- Scroll-reveal leve via `IntersectionObserver` (sem dependências pesadas de animação)
- Zero backend, zero IA

## Estrutura

```
src/
  app/          # layout, página única e metadados (SEO/OG)
  components/   # peças reutilizáveis (Header, Footer, cards, ícones)
  sections/     # seções da landing page, em ordem de exibição
  data/         # conteúdo editável (produtos, categorias, contato, etc.)
  lib/          # hooks utilitários
public/
  images/       # insira aqui os assets reais (logo, fotos de produto)
```

## Onde inserir os assets reais

Os seguintes pontos usam placeholders visuais e estão comentados no código,
prontos para receber os arquivos originais em `public/images/`:

- `src/components/Logo.tsx` — logotipo oficial da Della
- `src/sections/Hero.tsx` — composição de produtos do hero
- `src/sections/About.tsx` — imagem institucional
- `src/components/ProductCard.tsx` — fotos de cada produto (`data.image`)
- `src/data/whereToBuy.ts` — links oficiais de Mercado Livre, Shopee e TikTok Shop

## Comandos

```bash
# instalar dependências (gera o package-lock.json localmente)
npm install

# rodar localmente (http://localhost:3000)
npm run dev

# build de produção
npm run build
npm run start
```

## Publicar no GitHub

```bash
git init
git add .
git commit -m "Della Distribuidora - landing page"
git branch -M main
git remote add origin <URL_DO_SEU_REPOSITORIO>
git push -u origin main
```

## Publicar na Vercel (gratuito)

1. Acesse https://vercel.com e importe o repositório do GitHub.
2. Framework preset: **Next.js** (detectado automaticamente).
3. Build command: `next build` — Output: `.next` (padrão, não alterar).
4. Clique em **Deploy**.

Ou via CLI:

```bash
npm i -g vercel
vercel        # deploy de preview
vercel --prod # deploy de produção
```
