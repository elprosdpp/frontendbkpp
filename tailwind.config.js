/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      link: '#6b7280',
      dLink: '#1f2937',
      hover: '#4b5563',
      navy: '#4F46E5',
      dBlue: '#344ba0',
      rBlue: '#a9bbff',
      yBlue: '#d4ddff'
    },
    extend: {
      screen: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      backgroundImage: {
        'waves': 'url("@/assets/img/wave1.png")',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    // require('daisyui')
  ],
}