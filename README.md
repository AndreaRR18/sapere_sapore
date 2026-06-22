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
├── galleria.html       # Galleria - Immagini piatti e vini
├── contatti.html       # Contatti - Orari, indirizzo, prenotazioni
├── src/
│   └── main.js          # Entry point JavaScript (minimale)
├── css/
│   ├── main.css         # Tema principale (nuovo design)
│   └── style.css        # Tema vecchio (backup)
├── assets/
│   ├── favicon.svg
│   └── images/          # Immagini ristorante, chef, piatti, vini
├── package.json         # Dipendenze Vite
├── vite.config.js       # Configurazione Vite
├── README.md            # Questo file
├── .gitignore           # Files da ignorare
├── .nojekyll            # GitHub Pages
└── README-VITE.md       # Istruzioni Vite
```

## 🌐 Pagine

| Pagina | Descrizione | Nav |
|--------|-------------|-----|
| `index.html` | Home con hero, cucina, storia, degustazione | ✅ |
| `ristorante.html` | Storia, atmosfera, filosofia del ristorante | ✅ |
| `chef.html` | Biografia chef Marco Taglione e pasticcera Marika Urbani | ✅ |
| `menu.html` | Menù completo con antipasti, primi, secondi, dessert, prezzi | ✅ |
| `vini.html` | Selezione vini con regioni e bottiglie | ✅ |
| `galleria.html` | Galleria immagini di piatti e vini | ✅ |
| `contatti.html` | Orari, indirizzo, mappa, social, prenotazioni | ✅ |

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

I contenuti canonici (menù, prezzi, bio chef, contatti) sono mantenuti in `.claude/skills/restaurant-info/`. 

### Fonti principale:
- **Storia/Contatti**: `.claude/skills/restaurant-info/references/business-info.md`
- **Menù**: `.claude/skills/restaurant-info/references/menu.md`
- **Chef/Vini**: `.claude/skills/restaurant-info/references/chef-and-wine.md`

**Regola**: Aggiorna prima i file nel `restaurant-info` skill, poi propaga le modifiche alle pagine HTML.

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