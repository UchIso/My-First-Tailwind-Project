/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      colors:{
        mycolor: `#1B1B1B`,
        mycolors:{
          100: `#1A1A1A`,
          200: `#1C1C1C`
        }
      },
      fontFamily:{
        myfont:["Jersey"]
      }
    },
  },
  plugins: [],
}
