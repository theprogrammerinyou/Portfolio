const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", ...defaultTheme.fontFamily.sans],
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
        mono: ["IBM Plex Mono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        ink: "#07080d",
        mist: "#e8edf7",
        lime: "#b6ff4a",
        aqua: "#5ce1ff",
        violet: "#9b7dff",
        "terminal-green": "#b6ff4a",
      },
      boxShadow: {
        glow: "0 0 80px rgba(182, 255, 74, 0.18)",
        card: "0 24px 80px rgba(0, 0, 0, 0.35)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.45 },
          "50%": { opacity: 0.9 },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
