import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        // 'sm': '640px',
        // => @media (min-width: 640px) { ... }

        // 'md': '768px',
        // => @media (min-width: 768px) { ... }

        // 'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        // 'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        "2xl": "1480px",
      },
      colors: {
        'primary': '#75A4DC',  // Example primary color (blue)
        // 'secondary': '#0075FF',  // Example secondary color (orange)
        // 'accent': '#0075FF',  // Example accent color (purple)
        'grey': '#393939',  // Dark gray for primary text
        'light-grey': '#555555',  // Lighter gray for secondary text
        'muted-grey': '#888888',  // Muted gray for less emphasis
        'dark-grey': '#F0F0F0',    // Light gray for primary text in dark theme
        'dark-light-grey': '#aaaaaa', // Lighter gray for secondary text in dark theme
        'dark-muted-grey': '#999999', // Less muted gray for emphasis in dark theme
        brand: {
          DEFAULT: "#75A4DC",
          light: "#E4F0FF"
        },
      },
    },
  },
  plugins: [],
};
export default config;
