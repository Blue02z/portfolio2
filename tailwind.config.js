/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      Poppins: ["Poppins-bold", "sans-serif"], "Poppins-semiBold": ["Poppins-semiBold", "sans-serif"],"Poppins-medium": ["Poppins-medium", "sans-serif"], "Poppins-extraBold": ["Poppins-extraBold", "sans-serif"],


    },
    extend: {},
    boxShadow: {
      'custom-drop-shadow': '-20px 0 4px rgba(0, 0, 0, 0.25)',
    },
  },
  plugins: [],
}

