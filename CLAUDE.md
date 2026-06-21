# Sapore e Sapere - Claude Agent Configuration

> **Agent Configuration Reference**

For complete website structure and development guidelines, see `ai/AGENT.md`.

## Quick Start

This project uses a modular agent configuration:

```
.
├── AGENT.md          # Root reference (points to ai/AGENT.md)
├── ai/
│   └── AGENT.md      # Complete website structure & guidelines
└── .claude/
    └── skills/
        ├── restaurant-info/   # Canonical restaurant data
        └── restaurant-vision/  # Brand and design guidelines
```

## Agent Files

### Primary Configuration
- **`ai/AGENT.md`**: Complete technical documentation
  - Website structure
  - Page-by-page breakdown
  - Design system
  - Development workflow
  - Content organization

### Claude Skills
- **`.claude/skills/restaurant-info/`**: Restaurant facts and data
  - Business info, menu, chef bios, contact details
- **`.claude/skills/restaurant-vision/`**: Brand guidelines
  - Identity, voice, website planning

### Vibe Skills
- **`.vibe/skills/restaurant-vision/`**: Additional brand context
  - Used by Vibe agent for tone and style

## How to Use

1. **For Development**: Read `ai/AGENT.md` for technical structure
2. **For Content**: Check `.claude/skills/restaurant-info/` for restaurant data
3. **For Brand**: Check `.claude/skills/restaurant-vision/` for guidelines

## Local Development

```bash
# Install and run
npm install
npm run dev

# Or simple server
python3 -m http.server 8000
```

## Content Sources

| Content Type | Source | Location |
|-------------|--------|----------|
| Business Info | Restaurant Info Skill | `.claude/skills/restaurant-info/references/business-info.md` |
| Menu | Restaurant Info Skill | `.claude/skills/restaurant-info/references/menu.md` |
| Chef Bio | Restaurant Info Skill | `.claude/skills/restaurant-info/references/chef-and-wine.md` |
| Brand Voice | Restaurant Vision Skill | `.vibe/skills/restaurant-vision/references/tone-of-voice.md` |
| Website Plan | Restaurant Vision Skill | `.vibe/skills/restaurant-vision/references/website-plan.md` |

## Structure Overview

**7 Pages:**
1. `index.html` - Home
2. `ristorante.html` - Restaurant Story
3. `chef.html` - Chef Biography
4. `menu.html` - Complete Menu
5. `vini.html` - Wine Selection
6. `galleria.html` - Image Gallery
7. `contatti.html` - Contact & Reservations

**Technology:**
- HTML5 + CSS3 (Static)
- Vite 5.x (Dev server & build)
- Google Fonts (Cormorant Garamond + Jost)

## See Also

- [Full Agent Configuration](ai/AGENT.md)
- [Restaurant Data](.claude/skills/restaurant-info/SKILL.md)
- [Brand Vision](.claude/skills/restaurant-vision/SKILL.md)
- [Vite Instructions](README-VITE.md)

---

*Last Updated: 2026-06-21*