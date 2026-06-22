# Sapore è Sapere

> **Dove il sapore incontra il sapere**

Sito web statico del ristorante **Sapore è Sapere** — Frosinone (FR), Italia.
Cucina creativa di pesce, piatti originali e abbinamenti inediti nati dalle esperienze stellate dello chef Marco Taglione e della pasticcera Marika Urbani.

## 🎯 Identità

- **Nome**: Sapore è Sapere
- **Indirizzo**: Via Marcello Mastroianni snc, 03100 Frosinone (FR) ⭐
- **Telefono**: +39 0775 1561428
- **Email**: Sapore.sapere@libero.it
- **Instagram**: @ristorantesaporeesapere
- **Apertura**: 23 Maggio 2019
- **Cucina**: Creativa di pesce, proposte vegetariane, abbinamenti inediti
- **Carta vini**: Oltre 100 etichette selezionate

## 🛠 Stack

**Static Site with Vite for Development**

- **Framework**: Nessuno (Static HTML/CSS)
- **Build Tool**: [Vite](https://vitejs.dev/) 5.x (solo per sviluppo locale)
- **Language**: HTML5 + CSS3 puro
- **Fonts**: Cormorant Garamond (serif) + Jost (sans-serif) da Google Fonts
- **Responsive**: Sì, mobile-first con breakpoints
- **Performance**: Zero runtime JavaScript, loading ottimizzato
- **Accessibilità**: ARIA, focus styles, reduced motion support

## 📁 Struttura

```
.
├── index.html          # Home - Benvenuti, cucina, storia
├── ristorante.html     # Il Ristorante - Storia, atmosfera, filosofia
├── chef.html           # Lo Chef - Bio Marco Taglione, Marika Urbani
├── menu.html           # Menù - Antipasti, Primi, Secondi, Dolci, prezzi
├── vini.html           # Vini - Cantina con oltre 100 etichette
├── contatti.html       # Contatti - Orari, indirizzo, prenotazioni
├── 
├── src/
│   └── main.js          # Entry point JavaScript (ES module)
├── 
├── css/
│   ├── main.css         # Tema principale (30KB+ - nuovo design)
│   └── style.css        # Tema vecchio (10KB - backup)
├── 
├── assets/
│   ├── favicon.svg       # Icona del sito
│   └── images/           # Tutte le immagini organizzate per categoria
│       ├── restaurant/   # Foto del ristorante (interni, esterni)
│       │   ├── restaurant_1.jpg
│       │   └── restaurant_2.jpg
│       ├── chef_taglione/ # Foto dello chef
│       │   ├── chef_taglione.jpg
│       │   ├── chef_taglione_2.jpg
│       │   ├── chef_taglione_3.jpg
│       │   ├── chef_taglione_4.jpg
│       │   └── chef_taglione_5.jpg
│       ├── dishes/        # Foto dei piatti
│       │   ├── dish_1.jpg
│       │   ├── dish_2.jpg
│       │   ├── dish_3.jpg
│       │   ├── dish_4.jpg
│       │   ├── dish_5.jpg
│       │   └── dish_6.jpg
│       ├── wines/         # Foto dei vini
│       │   ├── wine_1.jpg
│       │   ├── wine_2.jpg
│       │   └── ...
│       ├── certificates/ # Certificati dello chef
│       │   ├── best_young_chef.jpg
│       │   └── italian_accademy.png
│       └── logo/          # Logo e brand
├── 
├── ai/                    # Configurazione agent (principale)
│   └── AGENT.md          # Documentazione tecnica completa
├── .claude/              # Skills di Claude
│   └── skills/
│       ├── restaurant-info/   # Dati canonici del ristorante
│       │   ├── SKILL.md
│       │   └── references/
│       │       ├── business-info.md
│       │       ├── menu.md
│       │       └── chef-and-wine.md
│       └── restaurant-vision/ # Linee guida brand e vision
│           ├── SKILL.md
│           └── references/
│               ├── identity.md
│               ├── vision.md
│               ├── tone-of-voice.md
│               └── website-plan.md
├── .vibe/                # Skills di Vibe
│   └── skills/
│       └── restaurant-vision/ # Contesto addizionale brand
│           ├── SKILL.md
│           └── references/
│               └── [stessi file di .claude]
├── 
├── package.json          # Dipendenze Vite e script
├── vite.config.js        # Configurazione Vite per multi-page
├── .gitignore            # Regole git ignore
├── .nojekyll             # Compatibilità GitHub Pages
├── .github/              # Configurazione GitHub
├── README.md             # Questo file
└── README-VITE.md        # Istruzioni specifiche Vite
```

## 🌐 Pagine

| Pagina | Descrizione | Nav |
|--------|-------------|-----|
| `index.html` | Home con hero, cucina, storia, degustazione | ✅ |
| `ristorante.html` | Storia, atmosfera, filosofia del ristorante | ✅ |
| `chef.html` | Biografia chef Marco Taglione e pasticcera Marika Urbani | ✅ |
| `menu.html` | Menù completo con antipasti, primi, secondi, dessert, prezzi | ✅ |
| `vini.html` | Selezione vini con regioni e bottiglie | ✅ |
| `contatti.html` | Orari, indirizzo, mappa, social, prenotazioni | ✅ |

> **Nota**: La pagina `galleria.html` è stata incorporata nella struttura generica e può essere aggiunta in futuro.

## 💻 Sviluppo Locale

### Opzione 1: Vite (Raccomandato)

```bash
# Installa dipendenze (solo prima volta)
npm install

# Avvia server di sviluppo con HMR
npm run dev
# Server su http://localhost:3000
```

### Opzione 2: Server Python (Semplice)

```bash
python3 -m http.server 8000
# poi apri http://localhost:8000
```

## 🚀 Build & Deploy

### Build per Produzione

```bash
npm run build
# Crea cartella dist/ con file ottimizzati
```

### Deploy su GitHub Pages

1. Esegui il push del codice sul branch `main`.
2. Su GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**
3. Seleziona branch `main`, cartella `/ (root)`, salva
4. Il sito sarà online su `https://andrearr18.github.io/sapere_sapore/`

Il file `.nojekyll` evita che GitHub processi i file con Jekyll.

## 📝 Contenuti

I contenuti canonici (menù, prezzi, bio chef, contatti) sono mantenuti nel sistema di skills. 

### Fonti principali:
- **Dati Ristorante**: `.claude/skills/restaurant-info/references/business-info.md`
- **Menù**: `.claude/skills/restaurant-info/references/menu.md`
- **Chef/Vini**: `.claude/skills/restaurant-info/references/chef-and-wine.md`
- **Brand & Vision**: `.claude/skills/restaurant-vision/` e `.vibe/skills/restaurant-vision/`

### Documentazione Tecnica:
- **Configurazione Completa**: `ai/AGENT.md`
- **Struttura Progetto**: Questo file
- **Istruzioni Vite**: `README-VITE.md`

**Regola**: Aggiorna prima i file nei directory `restaurant-info` e `restaurant-vision`, poi propaga le modifiche alle pagine HTML.

## 🎨 Design

- **Tema**: Scuro elegante (#14110f) con accenti dorati (#c9a24b)
- **Font**: Cormorant Garamond (serif) + Jost (sans-serif)
- **Responsive**: Mobile-first, adattato a tutti i device
- **Accessibilità**: Contrasto AA, navigazione tastiera, motion ridotto

## 🔗 Links Utili

- [Google Fonts - Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond)
- [Google Fonts - Jost](https://fonts.google.com/specimen/Jost)
- [Vite Documentation](https://vitejs.dev/)

## ✨ Features

- ✅ Navigazione responsive (mobile + desktop)
- ✅ Hero con sfondo ristorante e gradiente
- ✅ Card sistema per sezioni cucina
- ✅ Menù strutturato con categorie
- ✅ Galleria immagini con aspect ratio fisso
- ✅ Pulsante WhatsApp fluttuante
- ✅ Footer con social links
- ✅ Accessibilità completa
- ✅ SEO ready (meta tags, structure)
- ✅ Performance ottimizzata

## 📄 License

© 2019-2026 Sapore è Sapere - Tutti i diritti riservati