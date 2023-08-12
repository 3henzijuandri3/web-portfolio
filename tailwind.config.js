/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container : {
      center : true,
      padding : '12px',
    },
    
    extend: {
      screens: {
        'sm': '600px',
  
        'md': '768px',
  
        'lg': '1024px',
  
        'xl': '1280px',
  
        '2xl': '1320px',
      },
      
    },
  },
  plugins: [],
}