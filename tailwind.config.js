/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta de colores basada en el diseño de ParchaFace
        primary: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308', // Dorado principal
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7', // Púrpura principal
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        accent: {
          50: '#fef7ed',
          100: '#fdedd3',
          200: '#fbd9a5',
          300: '#f8c06d',
          400: '#f5a332',
          500: '#f28c0f', // Naranja/dorado más cálido
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        // Colores de fondo beige
        background: {
          DEFAULT: '#fdfbf7', // Beige muy claro
          secondary: '#f9f6f0', // Beige ligeramente más oscuro
          tertiary: '#f5f1e8', // Beige para cards
        },
        // Colores de texto
        foreground: {
          DEFAULT: '#333333', // Gris oscuro para texto principal
          secondary: '#666666', // Gris medio
          muted: '#999999', // Gris claro
        },
        // Colores para cards y elementos
        card: {
          DEFAULT: '#f9f6f0',
          foreground: '#333333',
        },
        border: {
          DEFAULT: '#e5e0d6',
          secondary: '#d4c4a8',
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)' },
        }
      }
    },
  },
  plugins: [],
}
