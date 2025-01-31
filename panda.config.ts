import { defineConfig } from "@pandacss/dev";
import { animationStyles } from './animation-styles'
 
export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/components/**/*.{ts,tsx,js,jsx}", "./src/app/**/*.{ts,tsx,js,jsx}", "./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  
  // Files to exclude
  exclude: [],
  jsxFramework: "react",
  
  // Useful for theme customization
  theme: {
    extend: {
      animationStyles
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
