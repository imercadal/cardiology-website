# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Professional website for Dr. Enrique Mercadal Calaf (cardiologist). Built with Next.js 15 using the App Router. Single-page landing site with contact info, hours, and appointment links.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Run production server
npm run lint     # Run ESLint
```

Docker alternative:
```bash
docker-compose up  # Builds and runs dev server on port 3000 with hot reload
```

## Architecture

- **Framework**: Next.js 15 (App Router) with React 19
- **Styling**: Tailwind CSS 3 + custom classes in `globals.css`
- **Animations**: Framer Motion 12

### Directory Structure

```
app/
  layout.jsx        # Root layout with metadata and Google Font declarations
  page.jsx          # Main landing page (all content sections)
  globals.css       # Tailwind directives + custom .card / .rectangulo classes
  components/
    RectangleCard.jsx    # Animated card with Framer Motion (fade-in + scale)
    CopyLinkButton.jsx   # Clipboard copy button with visual feedback ('use client')
  styles/           # Font configuration
public/             # Static assets (images, SVGs)
```

### Key Patterns

- Components using browser APIs or interactivity require `'use client'` directive
- Custom Tailwind colors (blues/reds) defined in `tailwind.config.mjs`
- Font CSS variables set in `layout.jsx` and consumed via `globals.css`
- Files use `.jsx` extension (TypeScript is configured but not used in components)
