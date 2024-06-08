const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",

  content: [
    "./pages/**/*.{ts,tsx,vue}",
    "./components/**/*.{ts,tsx,vue}",
    "./app/**/*.{ts,tsx,vue}",
    "./src/**/*.{ts,tsx,vue}",
  ],

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
        border: "hsla(var(--border), <alpha-value>)",
        input: "hsla(var(--input), <alpha-value>)",
        ring: "hsla(var(--ring), <alpha-value>)",
        background: "hsla(var(--background), <alpha-value>)",
        foreground: "hsla(var(--foreground), <alpha-value>)",
        dark: {
          100: "hsla(var(--dark-100), <alpha-value>)",
          200: "hsla(var(--dark-200), <alpha-value>)",
          300: "hsla(var(--dark-300), <alpha-value>)",
          400: "hsla(var(--dark-400), <alpha-value>)",
          500: "hsla(var(--dark-500), <alpha-value>)",
        },
        light: {
          100: "hsla(var(--light-100), <alpha-value>)",
          200: "hsla(var(--light-200), <alpha-value>)",
          300: "hsla(var(--light-300), <alpha-value>)",
          400: "hsla(var(--light-400), <alpha-value>)",
          500: "hsla(var(--light-500), <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsla(var(--primary), <alpha-value>)",
          foreground: "hsla(var(--primary-foreground), <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsla(var(--secondary), <alpha-value>)",
          foreground: "hsla(var(--secondary-foreground), <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsla(var(--destructive), <alpha-value>)",
          foreground: "hsla(var(--destructive-foreground), <alpha-value>)",
        },
        success: {
          DEFAULT: "hsla(var(--success), <alpha-value>)",
          foreground: "hsla(var(--success-foreground), <alpha-value>)",
        },
        warning: {
          DEFAULT: "hsla(var(--warning), <alpha-value>)",
          foreground: "hsla(var(--warning-foreground), <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsla(var(--muted), <alpha-value>)",
          foreground: "hsla(var(--muted-foreground), <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsla(var(--accent), <alpha-value>)",
          foreground: "hsla(var(--accent-foreground), <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsla(var(--popover), <alpha-value>)",
          foreground: "hsla(var(--popover-foreground), <alpha-value>)",
        },
        card: {
          DEFAULT: "hsla(var(--card), <alpha-value>)",
          foreground: "hsla(var(--card-foreground), <alpha-value>)",
        },
        sidebar: {
          DEFAULT: "hsla(var(--sidebar), <alpha-value>)",
          foreground: "hsla(var(--sidebar-foreground), <alpha-value>)",
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "collapsible-down": {
          from: { height: 0 },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
      fontFamily: {
        sans: ["Hanken Grotesk"],
      },
    },
  },
  plugins: [animate, require("@tailwindcss/typography")],
};
