# Sapore è Sapere

Sito web statico del ristorante **Sapore è Sapere** — Frosinone (FR), Italia.
Cucina creativa di pesce, piatti originali e abbinamenti inediti.

## Stack

Solo **HTML + CSS**. Nessun framework, nessun JavaScript di runtime, zero dipendenze
— per il massimo delle prestazioni e tempi di caricamento minimi.

## Struttura

```
.
├── index.html        # Home
├── menu.html         # Menù
├── vini.html         # Carta dei vini
├── chef.html         # Lo Chef
├── contatti.html     # Contatti & orari
├── css/
│   └── style.css     # Tema unico (dark elegante)
├── assets/
│   └── favicon.svg
├── .nojekyll         # GitHub Pages: serve i file così come sono
└── README.md
```

## Sviluppo locale

Apri `index.html` nel browser, oppure servi la cartella:

```bash
python3 -m http.server 8000
# poi apri http://localhost:8000
```

## Deploy su GitHub Pages

1. Esegui il push del codice sul branch `main`.
2. Su GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**.
3. Seleziona branch `main`, cartella `/ (root)`, salva.
4. Il sito sarà online su `https://andrearr18.github.io/sapere_sapore/`.

Il file `.nojekyll` evita che GitHub processi i file con Jekyll.

## Contenuti

I contenuti canonici (menù, prezzi, bio chef, contatti) sono mantenuti in
`.claude/skills/restaurant-info/`. Aggiorna prima quei file, poi propaga le
modifiche alle pagine HTML.
