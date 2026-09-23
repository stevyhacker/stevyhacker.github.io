/** Tailwind config for the /concept/ page only (see src/concept/concept.css). */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./concept/index.html', './src/concept/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Google Sans Flex"', 'system-ui', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
        'c-mono': ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        // Theme-aware tokens defined as RGB channels in concept.css.
        c: {
          paper: 'rgb(var(--c-paper) / <alpha-value>)',
          surface: 'rgb(var(--c-surface) / <alpha-value>)',
          ink: 'rgb(var(--c-ink) / <alpha-value>)',
          ink2: 'rgb(var(--c-ink2) / <alpha-value>)',
          muted: 'rgb(var(--c-muted) / <alpha-value>)',
          rule: 'rgb(var(--c-rule) / <alpha-value>)',
          accent: 'rgb(var(--c-accent) / <alpha-value>)',
          'accent-soft': 'rgb(var(--c-accent-soft) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
};
