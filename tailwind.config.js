/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container : {
      center : true,
      padding : '16px',
    },
    
    extend: {
      screens: {
        'sm': '600px',
  
        'md': '768px',
  
        'lg': '1024px',
  
        'xl': '1280px',
  
        '2xl': '1320px',
      },

      colors : {
        "black-primary" : "#1A1C20",
      },
      
    },

    fontFamily : {
      'signature' : ["Great Vibes"],
    },

  },

  plugins: [],
}