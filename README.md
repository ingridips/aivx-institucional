# AIVX — Apresentação Institucional

Apresentação institucional com suporte a 3 idiomas (PT / EN / ES), estruturada para deploy no Vercel via GitHub.

---

## Estrutura do projeto

```
aivx/
├── index.html              # HTML principal (sem base64, leve)
├── css/
│   └── styles.css          # Todo o CSS da apresentação
├── js/
│   ├── i18n.js             # Traduções PT/EN/ES + lógica de troca
│   └── main.js             # Scroll snap, nav dots, teclado
├── assets/
│   ├── video/
│   │   └── hero.mp4        # Vídeo da capa
│   ├── fonts/              # Fonte Aeonik (6 pesos)
│   └── images/
│       ├── orgchart-pt.png # Organograma em PT
│       ├── orgchart-en.png # Organograma em EN
│       ├── orgchart-es.png # Organograma em ES
│       └── parceiros/      # Logos dos parceiros
└── vercel.json             # Cache headers para performance
```

---

## Como adicionar um novo idioma

1. Abra `js/i18n.js`
2. Copie o bloco `es: { ... }` e cole abaixo com um novo código (ex: `fr`)
3. Traduza todos os valores
4. No mesmo arquivo, adicione `['FR','fr']` no array da função `DOMContentLoaded`
5. Crie `assets/images/orgchart-fr.png` com o organograma traduzido

---

## Como atualizar um texto

1. Abra `js/i18n.js`
2. Encontre a chave do texto (ex: `s4_p` = parágrafo do Quem Somos)
3. Altere o valor nos 3 idiomas (pt, en, es)
4. Salve e faça push — o Vercel atualiza automaticamente

---

## Como atualizar uma imagem

1. Coloque o novo arquivo em `assets/images/`
2. Atualize o `src` correspondente em `index.html`
3. Push → deploy automático

---

## Passo a passo: subir no GitHub e conectar ao Vercel

### 1. Instale o Git (se ainda não tiver)
- **Windows:** https://git-scm.com/download/win
- **Mac:** `brew install git`

### 2. Crie um repositório no GitHub
1. Acesse https://github.com/new
2. Nome: `aivx-apresentacao` (ou o nome que preferir)
3. Deixe **Private** se quiser acesso restrito
4. Clique em **Create repository**

### 3. Suba os arquivos do projeto

Abra o terminal na pasta onde você extraiu o ZIP e rode:

```bash
git init
git add .
git commit -m "feat: apresentação institucional AIVX com i18n PT/EN/ES"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/aivx-apresentacao.git
git push -u origin main
```

> Substitua `SEU_USUARIO` pelo seu usuário do GitHub.

### 4. Conecte ao Vercel

1. Acesse https://vercel.com e faça login com sua conta GitHub
2. Clique em **Add New → Project**
3. Selecione o repositório `aivx-apresentacao`
4. Deixe todas as configurações padrão (Framework: **Other**)
5. Clique em **Deploy**

Em ~30 segundos a apresentação estará online com uma URL como:
`https://aivx-apresentacao.vercel.app`

### 5. Atualizações futuras (fluxo normal)

Sempre que quiser atualizar algo:

```bash
# Faça a alteração no arquivo desejado, depois:
git add .
git commit -m "descricao da alteracao"
git push
```

O Vercel detecta o push e faz o novo deploy automaticamente.

---

## Dicas de performance

- Imagens pesadas → converta para `.webp` (50% menor que PNG)
- O vídeo `hero.mp4` já está comprimido; não substitua por versão maior
- O `vercel.json` já configura cache agressivo para fonts e imagens
