import type { Config } from "tailwindcss"

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Brand colors - refined for better visual appeal
        teal: {
          50: "#eefbfa",
          100: "#d4f5f3",
          200: "#aeebe8",
          300: "#7ddbd7",
          400: "#5ebfb7", // Main teal color from logo
          500: "#3aa49c",
          600: "#2f8680",
          700: "#296c68",
          800: "#265655",
          900: "#234847",
          950: "#0f2a2a",
        },
        purple: {
          50: "#f5f3ff",
          100: "#ede8ff",
          200: "#dcd5ff",
          300: "#c3b4fe",
          400: "#a78bfc",
          500: "#8a5cf7",
          600: "#6a3d99", // Main purple color from logo
          700: "#5e31a2",
          800: "#4f2d85",
          900: "#42276c",
          950: "#2a1752",
        },
        magenta: {
          50: "#fdf2f7",
          100: "#fce7f2",
          200: "#fbcfe5",
          300: "#f8a8ce",
          400: "#f272ac",
          500: "#e93d82",
          600: "#c1285d", // Main magenta color from logo
          700: "#a41e4a",
          800: "#891c40",
          900: "#731b3c",
          950: "#450a1f",
        },
        orange: {
          50: "#fff8ed",
          100: "#ffefd4",
          200: "#ffdca8",
          300: "#ffc470",
          400: "#f39c35", // Main orange color from logo
          500: "#f97e16",
          600: "#ea600c",
          700: "#c1470d",
          800: "#9a3912",
          900: "#7c3013",
          950: "#431606",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
