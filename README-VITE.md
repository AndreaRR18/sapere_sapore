# Sapore è Sapere - Development with Vite

This project now uses Vite for local development and building.

## 🚀 Quick Start

### Install Dependencies

```bash
npm install
```

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

This will start Vite on port 3000 and open `http://localhost:3000` in your browser.

### Production Build

Build the site for production:

```bash
npm run build
```

This creates a `dist/` directory with optimized files.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
Sapore è Sapere/
├── src/
│   └── main.js          # Main JavaScript entry point (can be empty)
├── css/
│   ├── main.css         # Main stylesheet (new design)
│   └── style.css        # Old stylesheet (backup)
├── assets/
│   └── images/          # All images (restaurant, chef, dishes, wines)
├── *.html              # All 7 HTML pages
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies and scripts
└── README.md            # Original README
```

## 🌐 Available Pages

- `/index.html` - Home page
- `/ristorante.html` - Restaurant story and atmosphere
- `/chef.html` - Chef Marco Taglione biography
- `/menu.html` - Complete menu with prices
- `/vini.html` - Wine selection
- `/galleria.html` - Image gallery
- `/contatti.html` - Contact information and reservations

## 🔧 Configuration

### Vite Configuration

The `vite.config.js` file is configured for:
- Multi-page application (7 entry points)
- Development server on port 3000
- Static assets in `/assets` directory
- Output to `/dist` directory

### Base Path

The site uses `base: './'` which means all paths are relative. This works well for:
- Local development
- GitHub Pages
- Any static hosting

## 💡 Development Tips

### Adding JavaScript

If you need to add JavaScript functionality, you can:
1. Add it to `src/main.js` (imported by all pages)
2. Create separate JS files and import them in specific pages
3. Use Vite's ES module system

### Adding CSS

For additional CSS:
1. Add to `css/main.css` (recommended for shared styles)
2. Create separate CSS files and import them
3. Use CSS pre-processors (Sass, Less) by installing the appropriate Vite plugin

### Adding Pages

To add a new page:
1. Create a new `.html` file in the root directory
2. Add it to the `rollupOptions.input` in `vite.config.js`
3. Add navigation link to all other pages

## 📋 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 🔄 Going Back to Simple HTML

If you prefer to go back to the simple static HTML approach without Vite:

1. Remove the `<script type="module" src="/src/main.js"></script>` from all HTML files
2. Run `python3 -m http.server 8000` to serve locally
3. Delete `node_modules/`, `package.json`, `vite.config.js`, and `src/`

## 📝 Notes

- This setup uses Vite 5.x
- All HTML files are treated as entry points
- The site works perfectly as static HTML/CSS - Vite just adds development convenience
- No runtime JavaScript is required for the site to function