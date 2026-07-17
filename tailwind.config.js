export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2.5rem" },
    },
    extend: {
      colors: {

        paper: "rgb(var(--c-paper) / <alpha-value>)",
        surface: "rgb(var(--c-surface) / <alpha-value>)",
        ink: "rgb(var(--c-ink) / <alpha-value>)",
        muted: "rgb(var(--c-muted) / <alpha-value>)",
        line: "rgb(var(--c-line) / <alpha-value>)",
        accent: "rgb(var(--c-accent) / <alpha-value>)",

        primary: "#0d9488",
      },
      fontFamily: {
        display: ['"Space Grotesk Variable"', "Space Grotesk", "sans-serif"],
        sans: ["Roboto", "system-ui", "sans-serif"],
      },
      fontSize: {

        hero: ["clamp(2.75rem, 11vw, 11rem)", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
        display: ["clamp(2rem, 6vw, 5.5rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        title: ["clamp(1.6rem, 3.5vw, 3rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        lead: ["clamp(1.05rem, 1.6vw, 1.5rem)", { lineHeight: "1.5" }],
      },
      screens: { "2xl": "1320px" },
      transitionTimingFunction: {

        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeY: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        grain: {
          "0%,100%": { transform: "translate(0,0)" },
          "50%": { transform: "translate(-5%, 5%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-y": "marqueeY 32s linear infinite",
      },
    },
  },
  plugins: [],
};
