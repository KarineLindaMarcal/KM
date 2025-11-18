# 💍 Casamento — Karine & Amor

Página de confirmação de presença para o casamento de Karine & Amor. Inclui contagem regressiva, galeria, playlist Spotify, timeline de programação e RSVP.

---

## 🚀 Deploy no Netlify (Recomendado)

### Opção 1: Drag & Drop (Mais Rápido — 30 segundos)

1. **Abra** https://app.netlify.com
2. **Crie/faça login** com sua conta (GitHub, Gmail, etc.)
3. **Arraste a pasta do projeto** (ou um ZIP com todos os arquivos) para a área de upload
4. **Pronto!** Netlify vai gerar um link público automático (ex: `seu-site-123456.netlify.app`)

#### Arquivos necessários:
- `index.html`
- `styles.css`
- `script.js`

### Opção 2: Git + GitHub (Mais Profissional)

1. **Crie um repositório GitHub:**
   - Acesse https://github.com/new
   - Nome: `casamento-karine-amor` (ou similar)
   - Deixe **Public**
   - Clique em **Create Repository**

2. **Suba seus arquivos para GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - wedding site"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/casamento-karine-amor.git
   git push -u origin main
   ```

3. **Conecte GitHub ao Netlify:**
   - Em https://app.netlify.com, clique em **New site from Git**
   - Selecione **GitHub**
   - Escolha seu repositório `casamento-karine-amor`
   - Clique em **Deploy site**

4. **Pronto!** Netlify vai fazer deploy automático a cada `git push`

---

## 📝 Como Personalizar

### Alterar Data e Hora

Abra `script.js` e mude a data na linha:
```javascript
const dataCasamento = new Date("2026-11-22T08:30:00").getTime();
```

Formato: `YYYY-MM-DDTHH:mm:ss`
- Exemplo: `"2025-06-15T16:00:00"` = 15 de junho de 2025 às 16h

### Mudar Nomes dos Noivos

Abra `index.html` e procure:
```html
<h1 class="titulo-principal">Karine & Amor</h1>
```

### Adicionar/Editar Seções

O site tem estas seções:
- **Nossa História** — biografia/apresentação dos noivos
- **Galeria** — fotos (atualmente usa imagens placeholder do Unsplash)
- **Programação** — timeline do dia
- **Playlist** — embed do Spotify
- **Confirme sua Presença** — RSVP via WhatsApp

Para editar conteúdo, abra `index.html` e procure as tags `<section>`.

### Customizar Cores (CSS)

Abra `styles.css` e busque:
- `background: #2f2f2f;` — cor de fundo do topo (escuro)
- `background: #3a3a3a;` — cor do menu
- `background: #f4f4f4;` — cor de fundo geral
- `color: white;` / `color: #222;` — cores de texto

Troque pelos códigos de cores desejados (ex: `#7fbf9e` = verde-claro).

### Configurar WhatsApp para RSVP

Abra `script.js` e procure:
```javascript
const numero = "5599999999999"; // coloque o seu número
```

Troque `5599999999999` pelo seu número com código do país (ex: Brasil: `55` + DDD + número).

---

## 🔗 Links Úteis

- **Netlify:** https://app.netlify.com
- **Editor CSS Online:** https://jsfiddle.net (para testar cores)
- **Emojis:** https://emojipedia.org

---

## ✅ Checklist Antes de Publicar

- [ ] Nomes dos noivos corretos
- [ ] Data e hora corretos (script.js)
- [ ] Número do WhatsApp atualizado (script.js)
- [ ] Galeria/fotos (opcional — atualmente usa Unsplash)
- [ ] Verificar no navegador local antes de fazer upload

---

## 📱 Testar Localmente

Simplesmente abra `index.html` em um navegador (clique duplo no arquivo).

Ou, para mais controle, use Python:
```bash
python -m http.server 8000
```

Depois acesse: http://localhost:8000

---

## 🎨 Estrutura de Arquivos

```
casamento/
├── index.html       # Conteúdo e estrutura
├── styles.css       # Estilos e design
├── script.js        # Lógica e interatividade
├── netlify.toml     # Configuração Netlify
├── .gitignore       # Arquivos a ignorar no git
└── README.md        # Este arquivo
```

---

## 💬 Dúvidas?

Se tiver problemas ao fazer upload ou personalizar, verifique:
1. Todos os três arquivos (index.html, styles.css, script.js) estão presentes
2. O link CSS no HTML aponta para `styles.css` (não `style.css`)
3. O número do WhatsApp tem o código de país (ex: +55 para Brasil)

Boa sorte! 💕
