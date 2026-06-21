/**
 * Vite Configuration for Sapore è Sapere Static Website
 * 
 * This configuration sets up Vite to serve the static HTML/CSS website
 * with development server and build capabilities.
 * 
 * Usage:
 *   npm run dev    - Start development server
 *   npm run build  - Build for production
 *   npm run preview - Preview production build
 */

import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  // Project root
  root: '.',
  
  // Base public path
  base: './',
  
  // Development server configuration
  server: {
    port: 3000,
    open: '/index.html'
  },
  
  // Build configuration for multi-page static site
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    
    rollupOptions: {
      // Define all HTML files as entry points
      input: {
        index: resolve(__dirname, 'index.html'),
        ristorante: resolve(__dirname, 'ristorante.html'),
        chef: resolve(__dirname, 'chef.html'),
        menu: resolve(__dirname, 'menu.html'),
        vini: resolve(__dirname, 'vini.html'),
        galleria: resolve(__dirname, 'galleria.html'),
        contatti: resolve(__dirname, 'contatti.html')
      }
    }
  },
  
  // Public directory for static assets
  publicDir: 'assets'
});
