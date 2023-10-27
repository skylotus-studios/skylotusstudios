/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        skyblue: '#90ccef',
        whitish: '#f3f3f4',
        dark: '#0B3C49',
        light: '#6CAE75',
      },
      fontFamily: {
        'sans': ['Noto Sans', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

