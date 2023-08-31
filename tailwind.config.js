/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './style/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'default-bg': '#111111',
        'primary': '#febc69',
        'light-gray': 'rgba(195, 195, 197, 0.2)',
        'dark-gray': '#1e1e20',
        'card-bg': '#222223',
        'white-1': '#fffffff0',
        'white-2': '#ffffffcc',
        'white-3': '#ffffff78',
      },
      boxShadow: {
        'default': '-1px -1px 0px 0px #3c3c3c',
        'shadow-2': '-2px 1px 5px #febc69',
      },
      fontFamily: {
        'header': 'Inconsolata, monospace',
        'links-1': 'Titillium Web, sans-serif',
      },
      transitionDelay: {
        'transition-1': '0.5s ease-in-out;'
      },
      backdropBlur: {
        'blur-1': '3px',
      }
    },
  },
  plugins: [],
}
