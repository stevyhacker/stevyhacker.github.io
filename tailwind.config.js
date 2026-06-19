/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Söhne', 'Inter', 'system-ui', 'sans-serif'],
      display: ['"Söhne"', 'Inter', 'system-ui', 'sans-serif'],
      mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
    },
    extend: {
      colors: {
        paper: {
          DEFAULT: '#f7f5f0',
          deep: '#efece4',
          hairline: '#e2ded3',
        },
        ink: {
          DEFAULT: '#17171a',
          muted: 'rgba(23, 23, 26, 0.62)',
          soft: 'rgba(23, 23, 26, 0.45)',
          faint: 'rgba(23, 23, 26, 0.22)',
        },
        accent: {
          DEFAULT: '#3f6b54',
          dark: '#335846',
          soft: '#6b8f7a',
        },
      },
      boxShadow: {
        soft: '0 1px 2px rgba(23, 23, 26, 0.04)',
        lift: '0 1px 0 rgba(23, 23, 26, 0.04), 0 16px 40px -12px rgba(23, 23, 26, 0.14)',
        focus: '0 0 0 2px #f7f5f0, 0 0 0 4px #3f6b54',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        edge: '1240px',
      },
    },
  },
  plugins: [],
};
