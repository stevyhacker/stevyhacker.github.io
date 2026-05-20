/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'shadow-pill',
    'shadow-pill-hover',
    'shadow-btn',
    'shadow-btn-hover',
    'shadow-btn-primary',
    'shadow-btn-primary-hover',
    'shadow-card',
    'shadow-card-hover',
    'shadow-soft',
    'shadow-glow',
  ],
  theme: {
    fontFamily: {
      sans: ['"Google Sans Flex"', 'system-ui', 'sans-serif'],
      display: ['"Google Sans Flex"', 'system-ui', 'sans-serif'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: '#2f4858',
          muted: 'rgba(47, 72, 88, 0.72)',
          soft: 'rgba(47, 72, 88, 0.55)',
        },
        sage: {
          DEFAULT: '#58857c',
          dark: '#4a726a',
          light: '#83a186',
        },
        sand: {
          DEFAULT: '#f2d3ad',
          mid: '#e6c39d',
          deep: '#d9b48f',
        },
        cream: '#f7f3e9',
        leaf: '#a3bba5',
        moss: '#b8bb93',
      },
      boxShadow: {
        soft: '0 4px 16px rgba(47, 72, 88, 0.12), 0 1px 3px rgba(47, 72, 88, 0.08)',
        pill: '0 4px 14px rgba(47, 72, 88, 0.14), 0 1px 2px rgba(47, 72, 88, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.45)',
        'pill-hover':
          '0 8px 22px rgba(47, 72, 88, 0.18), 0 2px 4px rgba(47, 72, 88, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.55)',
        btn: '0 6px 20px rgba(47, 72, 88, 0.2), 0 2px 6px rgba(47, 72, 88, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.35)',
        'btn-hover': '0 10px 28px rgba(47, 72, 88, 0.26), 0 4px 10px rgba(47, 72, 88, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
        'btn-primary': '0 8px 26px rgba(47, 72, 88, 0.35), 0 3px 8px rgba(47, 72, 88, 0.2)',
        'btn-primary-hover': '0 14px 36px rgba(47, 72, 88, 0.42), 0 6px 14px rgba(47, 72, 88, 0.25)',
        card: '0 8px 32px rgba(47, 72, 88, 0.1), 0 1px 0 rgba(255, 255, 255, 0.4) inset',
        'card-hover': '0 20px 48px rgba(47, 72, 88, 0.14), 0 1px 0 rgba(255, 255, 255, 0.5) inset',
        glow: '0 0 0 1px rgba(255, 255, 255, 0.35), 0 12px 40px rgba(88, 133, 124, 0.2)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'page-mesh':
          'radial-gradient(ellipse 120% 80% at 10% 0%, rgba(88, 133, 124, 0.18), transparent 50%), radial-gradient(ellipse 90% 60% at 90% 10%, rgba(217, 180, 143, 0.35), transparent 45%), radial-gradient(ellipse 70% 50% at 50% 100%, rgba(131, 161, 134, 0.25), transparent 55%)',
      },
    },
  },
  plugins: [],
};
