import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
    theme: {
    extend: {
      colors: {
        brand: "#1e40af",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      spacing: {
        '72': '18rem',
      },
    },
  },
  plugins: [
    tailwindcss(),
  ],
 
})