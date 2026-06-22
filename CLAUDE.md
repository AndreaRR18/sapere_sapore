# Sapore è Sapere - Agent Configuration Reference

> **Agent Configuration for Claude and Vibe**

This document provides a complete reference for the agent configuration system used in the Sapore è Sapere restaurant website project.

## 🎯 Quick Start

This project uses a modular agent configuration with a clear hierarchy:

```
.
├── AGENT.md              # Root reference (points to ai/AGENT.md)
├── ai/
│   └── AGENT.md          # Complete technical documentation (PRIMARY)
├── .claude/              # Claude Agent skills
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
└── .vibe/                # Vibe agent skills
    └── skills/
        └── restaurant-vision/  # Additional brand context
            ├── SKILL.md
            └── references/
                └── [same as .claude/restaurant-vision]
```

## 📚 Primary Configuration Files

### 1. ai/AGENT.md - Complete Technical Documentation
**Purpose**: Master configuration file containing:
- Complete website structure
- Page-by-page technical breakdown
- Design system (colors, typography, layout)
- Development workflow
- Content organization
- Responsive design details
- Accessibility features
- Performance optimizations
- Deployment instructions

**Use this file for**: Complete technical understanding, development guidelines, architecture decisions

### 2. .claude/skills/restaurant-info/SKILL.md
**Purpose**: Canonical restaurant data and facts
**Key References**:
- `references/business-info.md` - Business information, contacts, opening hours
- `references/menu.md` - Complete menu with categories, prices, allergen information
- `references/chef-and-wine.md` - Chef Marco Taglione biography, Marika Urbani info, wine pairing prices

**Use this for**: All factual content about the restaurant

### 3. .claude/skills/restaurant-vision/SKILL.md
**Purpose**: Brand vision, identity, and tone guidelines
**Key References**:
- `references/identity.md` - Brand pillars, visual identity
- `references/vision.md` - Website purpose, goals, target audiences
- `references/tone-of-voice.md` - Writing style, principles, vocabulary
- `references/website-plan.md` - Implementation roadmap

**Use this for**: Brand consistency, messaging, voice and tone decisions

### 4. .vibe/skills/restaurant-vision/SKILL.md
**Purpose**: Additional brand context for Vibe agent

## 🏗️ Project Structure

### Directory Layout

```
sapore-esapere/
├── HTML Pages (6)
│   ├── index.html           # Home - Hero, cuisine, story, tasting CTA
│   ├── ristorante.html      # Restaurant - Story, atmosphere, philosophy
│   ├── chef.html            # Chef Marco Taglione + Marika Urbani bio
│   ├── menu.html            # Complete menu with HACCP compliance
│   ├── vini.html            # Wine selection, 100+ labels, pairings
│   └── contatti.html        # Contact, hours, location, reservations
│
├── Source Code
│   ├── src/main.js          # JavaScript entry (ES module, minimal)
│   ├── css/
│   │   ├── main.css         # Primary stylesheet (30KB+ dark theme)
│   │   └── style.css        # Legacy stylesheet (10KB backup)
│   └── assets/
│       ├── favicon.svg
│       └── images/
│           ├── restaurant/   # Interior photos
│           ├── chef_taglione/ # 5 chef photos
│           ├── dishes/       # 6 dish photos
│           ├── wines/        # 16+ wine photos
│           ├── certificates/ # 2 chef certifications
│           └── logo/         # Brand logo
│
├── Agent Configuration
│   ├── ai/AGENT.md         # PRIMARY technical documentation
│   ├── .claude/skills/      # Restaurant data & brand guidelines
│   └── .vibe/skills/        # Additional brand context
│
└── Project Management
    ├── package.json
    ├── vite.config.js
    ├── README.md
    ├── README-VITE.md
    ├── .gitignore
    ├── .nojekyll
    └── .github/
```

### Pages Summary

| Page | Purpose | Key Features |
|------|---------|--------------|
| `index.html` | Home | Hero, cucina highlights, story, tasting menu CTA |
| `ristorante.html` | Restaurant | Story, atmosphere, philosophy, 3 feature cards |
| `chef.html` | Chef | Marco Taglione bio, 9-career-stop timeline, Marika Urbani, certifications |
| `menu.html` | Menu | Degustazione Sapere (5 courses, 50€), wine pairings, categories, allergen compliance |
| `vini.html` | Wine | 100+ labels, regional organization (Piemonte, Toscana, Bianchi), pairing options |
| `contatti.html` | Contact | Complete hours, address, Google Maps placeholder, social links |

## 🎨 Design System

**Colors**: #14110f (bg), #1d1916 (cards), #c9a24b (gold), #ece6dd (text)  
**Fonts**: Cormorant Garamond (serif), Jost (sans-serif)  
**Layout**: 1240px max-width, mobile-first, responsive  
**Components**: Hexagonal logo, CSS-only mobile nav, cards with gold hover

## 🔄 Development Workflow

### Content Update Process

1. **Update canonical data first** in skill reference files
2. **Propagate** changes to corresponding HTML files
3. **Test** with Vite dev server

### Content Sources

| Type | Location | Priority |
|------|----------|----------|
| Business/Contact Info | `.claude/skills/restaurant-info/references/business-info.md` | High |
| Menu | `.claude/skills/restaurant-info/references/menu.md` | High |
| Chef/Wine | `.claude/skills/restaurant-info/references/chef-and-wine.md` | High |
| Brand Identity | `.claude/skills/restaurant-vision/references/identity.md` | Medium |
| Brand Voice | `.claude/skills/restaurant-vision/references/tone-of-voice.md` | Medium |

### Commands

```bash
# Vite development
npm install
npm run dev          # Port 3000
npm run build        # Production build
npm run preview      # Port 4173

# Simple server
python3 -m http.server 8000
```

## 🎯 Hierarchy of Truth

1. **ai/AGENT.md** - Technical architecture
2. **.claude/skills/restaurant-info/** - Factual data
3. **.claude/skills/restaurant-vision/** - Brand guidelines
4. **.vibe/skills/restaurant-vision/** - Additional context
5. **HTML files** - Implementation

## 🔗 Related Documentation

- **[Full Technical Docs](ai/AGENT.md)**
- **[Restaurant Data](.claude/skills/restaurant-info/SKILL.md)**
- **[Brand Vision](.claude/skills/restaurant-vision/SKILL.md)**
- **[Vite Instructions](README-VITE.md)**
- **[Project Overview](README.md)**

---

**Project**: Sapore è Sapere Restaurant Website  
**Version**: 1.0.0  
**Last Updated**: June 22, 2026  
**Primary Config**: `ai/AGENT.md`