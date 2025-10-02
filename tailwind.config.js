/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0a1f44',
          gold: '#b08a3a',
          light: '#f5f7fb',
        },
        'brand-blue': '#0a1f44',
        'brand-gold': '#b08a3a',
        'brand-light': '#f5f7fb',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        glow: '0 20px 60px -20px rgba(10, 31, 68, 0.45)',
      },
    },
  },
  plugins: [],
};

export default config;
