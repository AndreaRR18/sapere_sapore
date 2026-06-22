# Sapore è Sapere - Website Agent Configuration

> **Agent Configuration**: Complete technical documentation in `ai/AGENT.md`

This file serves as a reference point to the comprehensive agent configuration stored in the `ai/` directory.

## 🎯 Quick Reference

**Primary Configuration**: `ai/AGENT.md` contains the complete website structure and technical details.

### Agent Configuration Hierarchy

```
.
├── AGENT.md                    # This file (reference pointer)
├── ai/
│   └── AGENT.md                # COMPLETE technical documentation (PRIMARY)
├── .claude/                    # Claude Agent skills
│   └── skills/
│       ├── restaurant-info/    # Canonical restaurant data
│       │   ├── SKILL.md
│       │   └── references/
│       │       ├── business-info.md
│       │       ├── menu.md
│       │       └── chef-and-wine.md
│       └── restaurant-vision/  # Brand and design guidelines
│           ├── SKILL.md
│           └── references/
│               ├── identity.md
│               ├── vision.md
│               ├── tone-of-voice.md
│               └── website-plan.md
└── .vibe/                      # Vibe agent skills
    └── skills/
        └── restaurant-vision/  # Additional brand context
            ├── SKILL.md
            └── references/
                └── [same content as .claude/restaurant-vision]
```

## 🏗️ Project Structure Summary

### Core Files

| File | Purpose |
|------|---------|
| `ai/AGENT.md` | Complete technical documentation (550+ lines) |
| `README.md` | Project overview, structure, features |
| `README-VITE.md` | Vite-specific development instructions |
| `CLAUDE.md` | Agent configuration reference (this system) |

### Website Pages (6)

| Page | Description | File |
|------|-------------|------|
| Home | Hero, cuisine highlights, story, tasting menu CTA | `index.html` |
| Restaurant | Story, atmosphere, philosophy | `ristorante.html` |
| Chef | Marco Taglione + Marika Urbani biographies | `chef.html` |
| Menu | Complete menu with prices, HACCP compliance | `menu.html` |
| Wine | 100+ labels, regional organization, pairings | `vini.html` |
| Contact | Hours, address, map, social, reservations | `contatti.html` |

### Source Code

```
Source Code Structure:
├── src/main.js              # JavaScript entry point (ES module)
├── css/
│   ├── main.css             # Primary stylesheet (30KB+, new dark theme)
│   └── style.css            # Legacy stylesheet (10KB, backup)
└── assets/
    ├── favicon.svg
    └── images/
        ├── restaurant/       # Interior photos (2)
        ├── chef_taglione/    # Chef photos (5)
        ├── dishes/           # Dish photos (6)
        ├── wines/            # Wine photos (16+)
        ├── certificates/     # Chef credentials (2)
        └── logo/             # Brand logo
```

### Configuration Files

```
Configuration:
├── package.json             # Vite dependencies (Vite 5.x)
├── vite.config.js           # Vite multi-page configuration
├── .gitignore               # Git ignore rules
├── .nojekyll                # GitHub Pages compatibility
└── .github/                 # GitHub configuration
```

## 📋 Essential Information

### Restaurant Identity
- **Name**: Sapore è Sapere
- **Tagline**: Dove il sapore incontra il sapere
- **Location**: Via Marcello Mastroianni snc, 03100 Frosinone (FR), Italia
- **Phone**: +39 0775 1561428
- **Email**: Sapore.sapere@libero.it
- **Instagram**: @ristorantesaporeesapere
- **Opened**: 23 Maggio 2019
- **Chef**: Marco Taglione
- **Pastry Chef/Maitre**: Marika Urbani

### Technology Stack
- **Framework**: None (Pure static HTML/CSS)
- **Build Tool**: Vite 5.x (development server & build)
- **Language**: HTML5 + CSS3
- **Typography**: Cormorant Garamond (serif) + Jost (sans-serif)
- **Design**: Dark theme (#14110f, #c9a24b gold accents) with full accessibility

## 🔄 Development Commands

```bash
# Install dependencies (first time only)
npm install

# Vite development server with HMR
npm run dev              # http://localhost:3000

# Production build
npm run build

# Preview production build
npm run preview          # http://localhost:4173

# Simple Python server (no dependencies)
python3 -m http.server 8000
```

## 📚 Documentation Files

| File | Content | Use Case |
|------|---------|----------|
| **[ai/AGENT.md](ai/AGENT.md)** | Complete technical docs, structure, design system | Primary reference for development |
| **[README.md](README.md)** | Project overview, structure, features | Quick start and project info |
| **[README-VITE.md](README-VITE.md)** | Vite setup, configuration, scripts | Development workflow |
| **[CLAUDE.md](CLAUDE.md)** | Agent configuration system | Understanding where to find information |
| **[:claude/skills:](.claude/skills/)** | Restaurant data & brand | Content accuracy and consistency |

## ⚡ Quick Access

For **technical development**, always start with: `ai/AGENT.md`

For **restaurant content**, check: `.claude/skills/restaurant-info/references/`

For **brand guidelines**, see: `.claude/skills/restaurant-vision/`

## 🎯 Content Update Workflow

1. **Update canonical data** in skill reference files first
2. **Propagate changes** to corresponding HTML files
3. **Test** with Vite dev server (`npm run dev`)
4. **Build** for production (`npm run build`)
5. **Deploy** to GitHub Pages (push to `main` branch)

## 🎨 Key Design Decisions

### Why Dark Theme?
- Brand consistency with existing identity
- Complements sophisticated restaurant atmosphere
- Better contrast with gold accents (#c9a24b)
- User preference and established brand recognition

### Color Psychology
- **Charcoal (#14110f)**: Sophistication, elegance
- **Gold (#c9a24b)**: Luxury, quality, warmth
- **Ivory (#ece6dd)**: Readability, contrast, sophistication

### Responsive Breakpoints
- **900px**: Desktop ↔ Mobile navigation switch
- **720px**: Mobile layout optimizations
- **480px**: Small device adjustments

## 🔗 Related Files

- [Full Agent Configuration →](ai/AGENT.md)
- [Restaurant Data →](.claude/skills/restaurant-info/SKILL.md)
- [Brand Vision →](.claude/skills/restaurant-vision/SKILL.md)

---

**Project**: Sapore è Sapere Restaurant Website  
**Primary Config**: `ai/AGENT.md`  
**Last Updated**: June 22, 2026  
**Repository**: https://github.com/andrearr18/sapere_sapere