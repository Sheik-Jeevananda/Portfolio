/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        body: ["'DM Sans'", "sans-serif"],
      },
      colors: {
        brand: { 50:"#ecfeff",100:"#cffafe",400:"#22d3ee",500:"#06b6d4",600:"#0891b2" },
        surface: { 900:"#050a14",800:"#081220",700:"#0d1e30",600:"#112435" },
      },
      animation: {
        "fade-up":    "fadeUp 0.6s ease forwards",
        "fade-in":    "fadeIn 0.5s ease forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4,0,0.6,1) infinite",
      },
      keyframes: {
        fadeUp: { "0%":{ opacity:"0", transform:"translateY(24px)" }, "100%":{ opacity:"1", transform:"translateY(0)" } },
        fadeIn: { "0%":{ opacity:"0" }, "100%":{ opacity:"1" } },
      },
    },
  },
  plugins: [],
};
