import { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: "'Hedvig Letters Sans', sans-serif",
      code: "'Source Code Pro', monospace",
    },
    extend: {
      backgroundImage: {
        backdrop: "url(backdrop.png)",
        cdBg: `conic-gradient(from 90deg at 50% 50%, rgba(225,186,255,0.7), rgba(255,255,255,0.85), rgba(255,255,255,0.85), 
        rgba(174,255,246,1), rgba(255,255,255,0.5), rgba(255,255,255,0.5), rgba(255,255,255,0.85), rgba(255,218,251,1), rgba(255,255,255,0.85), 
        rgba(244,191,255,0.85), rgba(255,255,255,0.75), rgba(255,255,255,0.85), rgba(251,255,218,1), rgba(255,255,255,0.85), rgba(255,255,255,0.5), rgba(255,255,255,0.5), 
        rgba(201,255,248,0.85), rgba(255,255,255,0.5), rgba(250,250,250,0.85), rgba(225,186,255,0.7))`,
        whiteGradientToRight: "linear-gradient(to right, transparent, white)",
        whiteGradientToLeft: "linear-gradient(to left, transparent, white)"
      },
      colors: {
        primary: "#000000",
        accent: "#ffffff",
        background: "rgba(25,25,25,1)",
        textBackground: "rgba(0, 0, 0, 0.5)",
      },
      animation: {
        overshootSpin: "spin 2.5s cubic-bezier(.7, .1, .55, 1) infinite",
        blink: "blink 1s linear infinite",
        dashRight: "dash 2s linear infinite",
        dashLeft: "dash 2s linear infinite reverse",
      },
      keyframes: {
        spin: {
          "0%": {
            transform: "rotate(0deg)"
          },
          "100%": {
            transform: "rotate(360deg)"
          },
        },
        dash: {
          "0%": {
            transform: "translate(-400px, 0)"
          },
          "25%": {
            transform: "translate(-400px, 0)"
          },
          "75%": {
            transform: "translate(400px, 0)"
          },
          "100%": {
            transform: "translate(400px, 0)"
          }
        },
        blink: {
          "0%": {
            opacity: "100%"
          },
          "49%": {
            opacity: "100%"
          },
          "50%": {
            opacity: "0"
          },
          "100%": {
            opacity: "0"
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'animate-delay': (value: string) => ({
            animationDelay: value,
          }),
        },
        { values: theme('transitionDelay') }
      )
    }),
  ],
} as Config