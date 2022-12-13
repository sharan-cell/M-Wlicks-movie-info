/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
          body: ['Zen Dots', 'cursive'],
          titil: ['Merienda', 'cursive'],
      },
      screens: {
        "3xl": "2000px",
        "xsm": "414px",

        
      },
      colors: {
        'web-black': '#252525',
      },
      height:{
        '90' : '90%',
        '2/5': '40%',
      },
      width:{
        '95' : '95%',
      },
      blur:{
        "xsm" : "1.5px",
      },

    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
