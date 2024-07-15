import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        gray: "#666565",
        blue: "#2272AF",
        orange: "#F3682B", // Corrigido el color orange
      },
      maxHeight: {
        '10': '2.5rem',   // 10 * 0.25rem = 2.5rem
        '20': '5rem',     // 20 * 0.25rem = 5rem
        '24': '6rem',     // 24 * 0.25rem = 6rem
        '32': '8rem',     // 32 * 0.25rem = 8rem
        '40': '10rem',    // 40 * 0.25rem = 10rem
        '48': '12rem',    // 48 * 0.25rem = 12rem
        '56': '14rem',    // 56 * 0.25rem = 14rem
        '64': '16rem',    // 64 * 0.25rem = 16rem
        '72': '18rem',    // 72 * 0.25rem = 18rem
        '80': '20rem',    // 80 * 0.25rem = 20rem
        '96': '24rem',    // 96 * 0.25rem = 24rem
        '110': '28rem',   // Personalizado, 28rem
      },
    },
  },
  lightMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            background: "#f5f5f5",
            foreground: "#ffffff",
            primary: {
              50: "#3B096C",
              100: "#520F83",
              200: "#7318A2",
              300: "#9823C2",
              400: "#c031e2",
              500: "#DD62ED",
              600: "#F182F6",
              700: "#FCADF9",
              800: "#FDD5F9",
              900: "#FEECFE",
              DEFAULT: "#F5824F",
              foreground: "#ffffff",
            },
            focus: "#F182F6",
          }, // light theme colors
        }
        // ... custom themes
      },
    }),
  ],
};

export default config;