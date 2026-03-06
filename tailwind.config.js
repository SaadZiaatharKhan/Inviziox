/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",   // 🔑 MOST IMPORTANT
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
              Jakarta: ["Jakarta", "sans-serif"],
              JakartaBold: ["Jakarta-Bold", "sans-serif"],
              JakartaExtraBold: ["Jakarta-ExtraBold", "sans-serif"],
              JakartaExtraLight: ["Jakarta-ExtraLight", "sans-serif"],
              JakartaLight: ["Jakarta-Light", "sans-serif"],
              JakartaMedium: ["Jakarta-Medium", "sans-serif"],
              JakartaSemiBold: ["Jakarta-SemiBold", "sans-serif"],
              MontserratRegular: ["Montserrat-Regular", "sans-serif"],
              MontserratBold: ["Montserrat-Bold", "sans-serif"],
              Cowboys: ["Cowboys", "sans-serif"]
          },
      colors: {
        // Backgrounds
        background: {
          primary: '#18181a',   // App background
          secondary: '#12172A', // Cards / sections
          elevated: '#1A2040',  // Modals / dropdowns
        },

        pianoBlack:'#18181a',
        bunker:'#2a2b2f',
        cosmicCobalt:'#27288d',
        blueHepatica:'#625fee',
        lunarBasalt:'#676c66',
        lightPax:'#d5d3e3',
        raisinBlack:'#242426',
        darkCharcoal:'#37363B',
        positive: '#22c55e',
        negative: '#ef4444',

        // Text
        text: {
          primary: '#FFFFFF',
          secondary: '#9BA3B4',
          muted: '#6B7280',
        },

        // States
        success: '#00C896',
        warning: '#FFB547',
        error: '#FF4D4F',
        info: '#00E5FF',
      },
    },
  },
  plugins: [],
};
