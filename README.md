# Eude Ribeiro — Portfólio

Site estático (HTML + CSS + JavaScript, sem build) do portfólio de Eude Ribeiro.
Todo o CSS é próprio, os ícones são um sprite SVG inline e as fontes vêm do Google Fonts
(Barlow Semi Condensed e Barlow).

## Estrutura

```
.
├── index.html          # página principal (hero, sobre, marcas, projetos, serviços, contato)
├── 404.html            # página de erro
├── styles.css          # todo o CSS, animações e responsivo
├── script.js           # dados dos projetos, modal/galeria, menu, reveals, vídeos
├── assets/
│   ├── brands/         # logos das marcas (SVG)
│   ├── projects/       # imagens dos cases (wall, tsw, mapa, uci, uci-worlds)
│   ├── video/          # motion do topo (hero-motion.mp4) e vídeos dos cases
│   ├── favicon.svg
│   ├── logo-eude-horizontal.svg
│   ├── logo-eude-stacked.svg
│   └── eude-ribeiro.jpeg
├── og-image.png        # imagem de compartilhamento (1200×630)
├── robots.txt
├── sitemap.xml
├── .nojekyll           # evita o processamento Jekyll no GitHub Pages
└── .gitignore
```

## Pré-visualizar localmente

- Abrir `index.html` direto no navegador funciona, ou
- usar um servidor estático qualquer (VS Code "Live Server", `python -m http.server`, `npx serve`).

## Publicar no GitHub Pages

1. Crie um repositório **público** no GitHub (sem README, para não conflitar).
2. Envie **o conteúdo desta pasta** (o `index.html` precisa ficar na raiz do repositório).
   - Pelo site do GitHub: *Add file → Upload files*. O limite é de 100 arquivos por commit,
     então envie em duas partes (por exemplo, primeiro os arquivos da raiz e depois a pasta `assets`).
   - Ou use o GitHub Desktop: *Add local repository* apontando para esta pasta → *Publish repository*.
3. No repositório: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)` → Save**.
4. Em 1–2 minutos o site fica no ar em `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

### Domínio próprio (euderibeiro.com.br)

1. Em **Settings → Pages → Custom domain**, informe `euderibeiro.com.br` e salve
   (o GitHub cria o arquivo `CNAME` sozinho).
2. No DNS do domínio:
   - `A` do apex (`@`) para `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` de `www` para `SEU-USUARIO.github.io`
3. Marque **Enforce HTTPS**.

### Se publicar em `usuario.github.io/repositorio`

O site já usa apenas caminhos relativos, então funciona em subpasta. Nesse caso, troque o domínio
nas tags de SEO e nos arquivos de indexação:

- `index.html`: `canonical`, `og:url`, `og:image`, `twitter:image` e o JSON-LD;
- `robots.txt` e `sitemap.xml`.

O `404.html` se ajusta sozinho ao caminho do repositório.

## Como editar

- **Novo projeto:** copie um bloco `<a class="project" …>` em `index.html` e crie a entrada
  correspondente em `PROJECTS` (início de `script.js`), usando a mesma chave do `data-project`.
  Coloque as imagens em `assets/projects/<slug>/`.
  - Cards largos usam a classe `project--wide` e capa em ~2.15:1 no desktop (4:3 no mobile).
  - Cards normais usam capa 4:3.
- **Textos, links e WhatsApp:** `index.html` (o número aparece no rodapé e no botão flutuante).
- **Cores e tipografia:** variáveis em `:root`, no topo de `styles.css`.
- **Animações:** classes `reveal`, `reveal--left`, `reveal--right`, `reveal--scale` no HTML.
- **Motion do topo:** `assets/video/hero-motion.mp4` (1080×1350, 10 s, 30 fps, em loop, ~2,7 MB).
  Para trocar, substitua o arquivo mantendo o mesmo caminho — o `<video>` fica no `.hero-visual`
  do `index.html`. O vídeo pausa fora da tela e não toca quando o sistema está com
  “reduzir movimento” ativo. O `hero-motion-poster.jpg` é o frame exibido antes do vídeo carregar.

## Checklist antes de publicar

- [ ] Conferir `canonical`, `og:url` e `sitemap.xml` com o domínio final.
- [ ] Testar menu, modais/galerias, botão de WhatsApp e o 404.
- [ ] Testar no celular (o layout tem breakpoints em 400, 560, 600, 767 e 1024 px).
- [ ] Confirmar que imagens e vídeos estão otimizados (o repositório tem ~17 MB, sendo 2,7 MB do motion do topo).