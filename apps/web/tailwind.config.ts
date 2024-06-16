// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets" | "theme"> = {
  content: ["./src/**/*.tsx"],
  presets: [sharedConfig],
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
        'text-base': '#333333',  // Dark gray for primary text
        'text-light': '#555555',  // Lighter gray for secondary text
        'text-muted': '#888888',  // Muted gray for less emphasis
        brand: {
          DEFAULT: "#75A4DC",
        },
      },
    },
  },
};

export default config;
