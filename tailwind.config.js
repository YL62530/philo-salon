/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: '#fdfbf7',
          100: '#f9f5ec',
          200: '#f2ebd6',
          300: '#e8dcc0',
          400: '#d9c8a3',
        },
        warm: {
          brown: '#8b6f5c',
          caramel: '#c4a882',
          coffee: '#6b5344',
          rust: '#a0522d',
          brick: '#8b4513',
        },
        ink: {
          light: '#7a6f5b',
          DEFAULT: '#3d3630',
          dark: '#2a2520',
        },
        accent: {
          gold: '#c9a96e',
          copper: '#b87333',
          cream: '#f5f0e6',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'paper-texture': "url('data:image/svg+xml,%3Csvg width=\\'100\\' height=\\'100\\' viewBox=\\'0 0 100 100\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'noise\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.8\\' numOctaves=\\'4\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100\\' height=\\'100\\' filter=\\'url(%23noise)\\' opacity=\\'0.03\\'/%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
}
