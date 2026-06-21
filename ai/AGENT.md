# Sapore e Sapere - Website Structure and Development Guidelines

> **Sapore e Sapere - Dove il sapore incontra il sapere**

This document describes the complete technical structure, development workflow, and content organization for the Sapore e Sapere restaurant website.

## Project Overview

**Sapore e Sapere** is a static website for a fine dining restaurant in Frosinone, Italy, specializing in creative seafood cuisine with innovative pairings. The website uses pure HTML/CSS with Vite for development convenience.

### Core Identity

- **Name**: Sapore e Sapere
- **Tagline**: Dove il sapore incontra il sapere
- **Location**: Via Marcello Mastroianni snc, 03100 Frosinone (FR), Italia
- **Phone**: +39 0775 1561428
- **Email**: Sapore.sapere@libero.it
- **Instagram**: @ristorantesaporeesapere
- **Opened**: 23 Maggio 2019
- **Founders**: Chef Marco Taglione and Pastry Chef/Maitre Marika Urbani

### Philosophy

Sapore e Sapere = Flavor born from knowledge. Every dish is the result of years of study and practice in Michelin-starred kitchens, translated into bold, original, accessible hospitality.

## Website Structure

### Directory Structure

```
sapore-esapere/
├── index.html           # Home - Hero, cucina highlights, story
├── ristorante.html      # Restaurant - Story, atmosphere, philosophy
├── chef.html            # Chef - Marco Taglione bio, timeline, Marika Urbani
├── menu.html            # Menu - Full menu with categories, prices, HACCP notes
├── vini.html            # Wine - Wine list by region, pairing options
├── galleria.html        # Gallery - Dish and wine images
├── contatti.html        # Contact - Hours, address, map, social, reservations
├── 
├── src/
│   └── main.js           # JavaScript entry point (ES module)
├── 
├── css/
│   ├── main.css          # Main stylesheet (25KB) - NEW design
│   └── style.css         # Old stylesheet (10KB) - Backup/legacy
├── 
├── assets/
│   ├── favicon.svg       # Site icon
│   └── images/           # All image assets
│       ├── restaurant/   # Restaurant interior photos
│       │   ├── restaurant_1.jpg
│       │   └── restaurant_2.jpg
│       ├── chef_taglione/ # Chef biography photos
│       │   ├── chef_taglione.jpg
│       │   ├── chef_taglione_2.jpg
│       │   ├── chef_taglione_3.jpg
│       │   ├── chef_taglione_4.jpg
│       │   └── chef_taglione_5.jpg
│       ├── dishes/        # Dish photos for menu/gallery
│       │   ├── dish_1.jpg
│       │   ├── dish_2.jpg
│       │   ├── dish_3.jpg
│       │   ├── dish_4.jpg
│       │   ├── dish_5.jpg
│       │   └── dish_6.jpg
│       ├── wines/         # Wine photos for vini/gallery
│       │   ├── wine_1.jpg
│       │   ├── wine_2.jpg
│       │   ├── ...
│       │   └── wine_16.jpg
│       └── certificates/ # Chef certifications
│           ├── best_young_chef.jpg
│           └── italian_accademy.png
│        
├── ai/                    # Agent configuration (THIS FILE)
│   └── AGENT.md
├── .claude/              # Claude Agent skills
│   └── skills/
│       ├── restaurant-info/    # Canonical restaurant data
│       │   ├── SKILL.md
│       │   └── references/
│       │       ├── business-info.md
│       │       ├── menu.md
│       │       └── chef-and-wine.md
│       └── restaurant-vision/  # Brand and vision guidelines
│           ├── SKILL.md
│           └── references/
│               ├── identity.md
│               ├── vision.md
│               ├── tone-of-voice.md
│               └── website-plan.md
├── .vibe/                # Vibe agent skills
│   └── skills/
│       └── restaurant-vision/
│           ├── SKILL.md
│           └── references/
│               └── [same as .claude]
├── 
├── package.json          # Vite dependencies and scripts
├── vite.config.js        # Vite configuration for multi-page app
├── README.md             # Project documentation
├── README-VITE.md        # Vite-specific instructions
├── .gitignore            # Git ignore rules
└── .nojekyll             # GitHub Pages compatibility
```

### Page Structure

#### Pages Overview

| Page | Purpose | Key Features |
|------|---------|--------------|
| `index.html` | Home | Hero, cuisine highlights, story, tasting menu CTA |
| `ristorante.html` | Restaurant | Story, atmosphere, philosophy sections |
| `chef.html` | Chef | Marco Taglione bio, timeline, Marika Urbani section |
| `menu.html` | Menu | Complete menu with categories, prices, allergen notes |
| `vini.html` | Wine | Wine list organized by region, pairing prices |
| `galleria.html` | Gallery | Responsive image grid of dishes and wines |
| `contatti.html` | Contact | Hours, address, map, social links, reservations |

#### Navigation Structure

```
Home | Ristorante | Chef | Menu | Vini | Galleria | Contatti
```

All pages include:
- Site header with hexagonal "S" logo
- Mobile-responsive navigation
- Floating WhatsApp button (+39 0775 1561428)
- Consistent footer with social links

## Technical Stack

### Core Technologies
- **HTML5**: Semantic structure (header, nav, main, footer, section, article)
- **CSS3**: Modern styling with CSS custom properties, flexbox, grid, clip-path
- **Vite**: Build tool and development server (version 5.x)

### Development Setup

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build", 
    "preview": "vite preview"
  },
  "devDependencies": {
    "vite": "^5.0.0"
  }
}
```

### Vite Configuration

The `vite.config.js` is configured for:
- Multi-page application with 7 entry points
- Development server on port 3000
- Static assets served from `/assets`
- Build output to `/dist` directory
- Relative paths (base: './') for GitHub Pages compatibility

## Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Background | #14110f | Primary dark background |
| Background Soft | #1d1916 | Card backgrounds |
| Background Soft 2 | #251f1b | Hover states |
| Text | #ece6dd | Primary text (ivory) |
| Text Muted | #a89f92 | Secondary text |
| Gold | #c9a24b | Primary accent |
| Gold Soft | #e3c987 | Hover states |
| Line | #342d27 | Borders and dividers |

### Typography

| Type | Font Family | Weights | Usage |
|------|-------------|---------|-------|
| Serif | Cormorant Garamond | 500, 600, 700 | Headings, titles, logos |
| Sans-Serif | Jost | 300, 400, 500, 600 | Body text, labels |
| Fallback Serif | Georgia, Times New Roman | - | Serif fallback |
| Fallback Sans | System fonts | - | Sans-serif fallback |

### Layout

- **Max Width**: 1240px (container)
- **Section Padding**: clamp(56px, 9vw, 96px)
- **Card Border Radius**: 4px
- **Button Border Radius**: 1px
- **Hero Height**: 80vh minimum

### Components

#### Logo
- Hexagonal shape using CSS clip-path
- Clip path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)
- Gold background with dark "S" character

#### Navigation
- **Desktop**: Horizontal layout with brand + links + CTA button
- **Mobile**: Hamburger menu (CSS checkbox toggle), slide-down panel
- **Breakpoint**: 900px

#### Buttons
- **Primary**: Gold background, dark text
- **Ghost**: Transparent background, gold text, gold border
- **CTA**: Nav button with gold background

#### Cards
- Background: var(--bg-soft)
- Border: 1px solid var(--line)
- Hover: Border color changes to gold, slight upward transform
- Padding: 32px 28px

#### Gallery
- Responsive grid: auto-fit, minmax(220px, 1fr)
- Image aspect ratio: 4/5
- Categories: "Piatto" (dish) and "Vino" (wine) badges
- Hover: Scale up effect

## Content Organization

### Source of Truth

All factual restaurant content comes from the skills system:

- **Restaurant Info**: `.claude/skills/restaurant-info/`
  - `business-info.md`: Story, contacts, opening hours
  - `menu.md`: Complete menu with prices, categories, allergen information
  - `chef-and-wine.md`: Chef Marco Taglione biography, Marika Urbani info, wine pairing prices

- **Brand Vision**: `.vibe/skills/restaurant-vision/`
  - `identity.md`: Brand pillars, visual identity guidelines
  - `vision.md`: Website purpose, goals, target audiences
  - `tone-of-voice.md`: Writing style, principles, vocabulary
  - `website-plan.md`: Implementation roadmap

### Maintenance Workflow

1. **Update Source**: Modify skill reference files with new information
2. **Propagate**: Update corresponding HTML files with new content
3. **Test**: Verify changes work correctly with Vite dev server
4. **Deploy**: Commit and push to GitHub

### Content Guidelines

- **Language**: All content is in Italian
- **Formatting**: Use proper Italian punctuation and typography
- **Accuracy**: Always use canonical data from skill files
- **Consistency**: Maintain consistent tone and style across all pages

## Development Scripts

### Available Commands

| Script | Command | Description | Port |
|--------|---------|-------------|------|
| Dev Server | `npm run dev` | Start Vite dev server | 3000 |
| Production Build | `npm run build` | Build optimized files | - |
| Preview | `npm run preview` | Preview production build | 4173 |

### Alternative Development Methods

1. **Python Simple Server** (no dependencies):
   ```bash
   python3 -m http.server 8000
   ```

2. **VS Code Live Server** (extension required)

3. **Any static file server**

## Page Details

### Home Page (index.html)

**Sections:**
1. Hero with restaurant background, logo, tagline, CTAs
2. La nostra cucina - 3 feature cards
3. La nostra storia - Restaurant background
4. Menu Degustazione highlight box

**Images:** restaurant_1.jpg (hero background)

### Restaurant Page (ristorante.html)

**Sections:**
1. Ogni piatto racconta una storia - Philosophy with image
2. L'Atmosfera - 3 feature cards (Ambiente, Servizio, Esperienza)
3. La nostra filosofia - Detailed philosophy with image
4. Pronto a viverla? - CTA section

**Images:** restaurant_2.jpg, restaurant_1.jpg

### Chef Page (chef.html)

**Sections:**
1. Chef Marco Taglione - Full biography
2. Career Timeline - 9 career stops from 2011 to 2019
3. Certifications - Chef credentials
4. Marika Urbani - Pastry chef section

**Images:** chef_taglione.jpg + 4 additional chef photos
**Certificates:** best_young_chef.jpg, italian_accademy.png

### Menu Page (menu.html)

**Sections:**
1. Tasting Menu highlight
2. Degustazione Sapere - 5 courses, 50 euro
3. Wine Pairing - 3 calici (20 euro), 5 calici (35 euro)
4. Categories: Antipasti, Primi Piatti, Secondi Piatti, Dessert
5. Cioccolato Artigianale - Chocolate selections
6. Coperto e supplementi - Service charges
7. Allergeni - CE 1169/2011 compliance

**Notes:** ^ symbol indicates HACCP temperature-controlled products

### Wine Page (vini.html)

**Sections:**
1. Introduction - 100+ labels, pairing philosophy
2. Tasting Options - 3 and 5 glass pairings
3. Wine List by Region - Piemonte, Toscana, Bianchi & Bollicine
4. Individual bottles with prices and details

**Sample Bottles:**
- Piemonte: Barolo DOCG 2019 (72 euro), Barbera d'Alba 2021 (34 euro)
- Toscana: Brunello di Montalcino 2018 (88 euro), Chianti Classico 2020 (30 euro)
- Bianchi: Soave Classico 2022 (26 euro), Franciacorta Brut NV (48 euro)

### Gallery Page (galleria.html)

**Structure:**
- Introduction: In sala e nel bicchiere
- Responsive grid layout
- 12+ gallery items with badges (Piatto/Vino)

**Images:**
- Dishes: dish_1 through dish_6.jpg
- Wines: wine_1 through wine_12+.jpg

### Contact Page (contatti.html)

**Sections:**
1. Orari - Complete opening hours table
2. Dove siamo - Full address and contact info
3. Mappa - Google Maps placeholder
4. Social - Instagram, Facebook, WhatsApp links

**Hours:**
- Monday-Thursday: 19:30-22:30 (dinner)
- Friday: 12:30-14:30 (lunch), 19:30-22:30 (dinner)
- Saturday: 12:30-14:30 (lunch), 19:30-22:30 (dinner)
- Sunday: 12:30-15:00 (lunch)

## Responsive Design

### Breakpoints

| Name | Width | Adaptations |
|------|-------|--------------|
| Mobile | <= 720px | Mobile nav, 1-column grids |
| Tablet | <= 860px | 1-column grids, compact layout |
| Small | <= 480px | Reduced font sizes |

### Mobile Features

- Hamburger menu (3-line icon)
- Slide-down navigation panel
- CSS-only toggle (no JavaScript)
- Full-width mobile menu links
- Optimized touch targets

## Accessibility

### Implemented Features

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Skip to content link (hidden, visible on focus)
- Keyboard-nulligable navigation
- Focus indicator styles (gold outline)
- Reduced motion support (prefers-reduced-motion)
- Color contrast meets WCAG AA standards
- Alternative text on all images
- Descriptive page titles and meta descriptions

### Standards Compliance

- WCAG 2.1 AA for color contrast
- All functionality available via keyboard
- Screen reader compatible (semantic HTML, ARIA)
- Motion preferences respected

## Performance

### Optimizations

- Pure HTML/CSS (zero runtime JavaScript)
- Optimized asset loading
- Lazy loading on images
- Preloaded Google Fonts
- Efficient CSS with custom properties
- Mobile-first approach

### Build Output

- Production build creates `dist/` directory
- Files are optimized and minified where applicable
- Asset references are updated for production

## Deployment

### GitHub Pages

1. Push code to `main` branch
2. GitHub Settings -> Pages -> Build and deployment
3. Select Source: Deploy from branch
4. Choose branch: `main`, folder: `/ (root)`
5. Site live at: https://andrearr18.github.io/sapere_sapore/

### Requirements

- `.nojekyll` file present in root
- Relative paths for all assets (handled by Vite config)
- Static file structure (HTML/CSS/images only)

### Alternative Hosting

Works with any static hosting:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any CDN or static host

## Development Workflow

### Local Development

1. Clone repository
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`
4. Make changes to HTML/CSS files
5. See changes instantly (HMR)

### Making Changes

1. Update content in skill reference files first
2. Modify corresponding HTML files
3. Test with `npm run dev`
4. Build with `npm run build`
5. Preview with `npm run preview`
6. Commit and push changes

### Content Update Process

For menu changes:
1. Edit `.claude/skills/restaurant-info/references/menu.md`
2. Update `menu.html` with new items/prices
3. Test responsive behavior
4. Update gallery if new dish photos added

For chef information:
1. Edit `.claude/skills/restaurant-info/references/chef-and-wine.md`
2. Update `chef.html` with new bio details
3. Add new photos to `assets/images/chef_taglione/` if available

For contact changes:
1. Edit `.claude/skills/restaurant-info/references/business-info.md`
2. Update all pages with new contact info
3. Update footer in all HTML files

## File Conventions

### Naming

- HTML files: lowercase, no spaces (ristorante.html, contatti.html)
- CSS files: lowercase, hyphens (main.css, style.css)
- Images: lowercase, underscores, sequential (restaurant_1.jpg, dish_2.jpg)
- Asset folders: lowercase, descriptive (chef_taglione/, dishes/)

### Structure

- Root level: HTML files, configuration files
- `css/`: Stylesheets (main.css is primary)
- `assets/`: Static assets (images, icons)
- `src/`: JavaScript source files
- `ai/`: Agent configuration
- `.claude/`: Restaurant data and skills
- `.vibe/`: Brand vision and guidelines

## Design Decisions

### Dark Theme Choice

The website uses a dark theme instead of the light theme from the prototype because:
- **Brand Consistency**: Maintains existing dark, elegant identity
- **Atmosphere**: Complements the restaurant's sophisticated atmosphere
- **Accessibility**: Better contrast with gold accents for all patrons
- **User Preference**: Matches the original established brand

### Color Psychology

- **Charcoal (#14110f)**: Sophistication, elegance, professionalism
- **Gold (#c9a24b)**: luxury, quality, warmth
- **Ivory (#ece6dd)**: Readability, contrast, sophistication

### Typography Choices

- **Cormorant Garamond**: Elegant, classic serif with good readability
- **Jost**: Modern, clean sans-serif that pairs well with Garamond
- This combination provides both sophistication and approachability

## Version Information

- **Project Version**: 1.0.0
- **Vite Version**: 5.x
- **Last Updated**: 2026-06-21
- **Original Creation**: 2024-05-23 (legacy site)

## Links and Resources

- **Repository**: https://github.com/andrearr18/sapere_sapere
- **Google Fonts - Cormorant Garamond**: https://fonts.google.com/specimen/Cormorant+Garamond
- **Google Fonts - Jost**: https://fonts.google.com/specimen/Jost
- **Vite Documentation**: https://vitejs.dev/

## Quick Reference Commands

```bash
# Development
npm install           # Install dependencies
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build

# Simple alternative
python3 -m http.server 8000  # No dependencies needed
```

---

**Maintained**: Sapore e Sapere Restaurant
**Configuration file**: `ai/AGENT.md`
**Last Updated**: June 21, 2026