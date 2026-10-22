# Ovni Rent a Car

Landing page da Ovni Rent a Car — *Alugou, decolou!*

Feita com React, TypeScript e Vite, publicada no GitHub Pages.

## Rodando localmente

```bash
npm install
npm run dev
```

A página abre em `http://localhost:5173/Ovini/`.

## Scripts

| Comando           | O que faz                              |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Servidor de desenvolvimento            |
| `npm run build`   | Checagem de tipos e build em `dist/`   |
| `npm run preview` | Serve o build de `dist/` localmente    |
| `npm run lint`    | Lint com oxlint                        |

## Estrutura

```
src/
  assets/        logo
  components/    Header, Footer, botão do WhatsApp, barra de progresso, contador
  hooks/         useVisivel e useRevelar (animação de entrada ao rolar)
  sections/      seções da página (Hero, Quem somos, Planos, Dúvidas...)
  config.ts      WhatsApp, Instagram, site e links dos formulários
  index.css      tema (cores claro/escuro), tipografia e classes globais
```

## Alterando contatos e formulários

Número do WhatsApp, mensagem inicial, Instagram, site e links dos formulários ficam em `src/config.ts`.

## Deploy

Todo push na branch `master` dispara o workflow `.github/workflows/deploy.yml`, que gera o build e publica no GitHub Pages.

No repositório, em **Settings → Pages**, a origem (*Source*) deve estar como **GitHub Actions**.

O site fica em `https://actioncsd.github.io/Ovini/`. Se o nome do repositório mudar, ajuste o `base` em `vite.config.ts`.
