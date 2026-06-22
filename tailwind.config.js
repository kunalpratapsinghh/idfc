module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["font-inter", "sans-serif"]
      },
      keyframes: {
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" }
        },
        takeoff: {
          "0%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "1"
          },
          "100%": {
            transform: "translate(50px, -30px) scale(1.4)",
            opacity: "0"
          }
        }
      },
      animation: {
        "slide-up": "slide-up 220ms ease-out",
        takeoff: "takeoff 2s ease-in-out forwards"
        // use `infinite` for continuous loop: 'takeoff 2s ease-in-out infinite'
      }
    }
  },
  safeList: [
    "pt-6",
    "pt-10",
    "pb-6",
    "pb-10",
    "md:pt-10",
    "md:pt-14",
    "md:pt-16",
    "md:pt-20",
    "md:pb-10",
    "md:pb-14",
    "md:pb-16",
    "md:pb-20",
    "line-clamp-1",
    "line-clamp-2",
    "line-clamp-3",
    "line-clamp-4",
    "line-clamp-5"
  ],
  plugins: []
};
