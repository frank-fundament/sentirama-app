/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Emotion primary colors
        emotion: {
          mad: {
            DEFAULT: '#C85A54',
            light: '#E8D4CF',
            dark: '#A04841'
          },
          peaceful: {
            DEFAULT: '#7DB57D',
            light: '#D4E8D4',
            dark: '#5E8F5E'
          },
          sad: {
            DEFAULT: '#4A7C8C',
            light: '#CFD4E8',
            dark: '#3A6270'
          },
          thoughtful: {
            DEFAULT: '#A8D5BA',
            light: '#E0F2E6',
            dark: '#7FB591'
          },
          scared: {
            DEFAULT: '#D4A574',
            light: '#F0E6D8',
            dark: '#B8895C'
          },
          powerful: {
            DEFAULT: '#B57D7D',
            light: '#E8D4D4',
            dark: '#8F5E5E'
          },
          joyful: {
            DEFAULT: '#F4C542',
            light: '#FDF4D3',
            dark: '#D4A93A'
          },
          surprised: {
            DEFAULT: '#F28C82',
            light: '#FBDBD8',
            dark: '#D46B61'
          }
        }
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      fontSize: {
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'h2': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['1.75rem', { lineHeight: '1.4', fontWeight: '600' }],
        'h4': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }],
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.05)',
        'default': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'elevated': '0 8px 24px rgba(0, 0, 0, 0.15)',
        'modal': '0 16px 48px rgba(0, 0, 0, 0.2)',
      },
      borderRadius: {
        'card': '1rem',
        'button': '0.75rem',
        'input': '0.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
