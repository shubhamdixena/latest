import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
        kazimir: ['Kazimir', 'serif'],
        proxima: ['Proxima Nova', 'sans-serif'],
      },
      colors: {
        'charity-blue': '#2A5C8B',
        'charity-text': '#2D3748',
        'charity-bg': '#F8F9FA',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      fontSize: {
        '4.5xl': ['2.5rem', '1.15'],
      },
      lineHeight: {
        'relaxed': '1.75',
      },
    },
  },
  plugins: [],
};

export default config; 