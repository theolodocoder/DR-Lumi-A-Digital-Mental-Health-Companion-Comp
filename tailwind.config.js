/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        Urbanist: ["Urbanist", "sans-serif"],
        UrbanistBold: ["Urbanist-Bold", "sans-serif"],
        UrbanistSemiBold: ["Urbanist-SemiBold", "sans-serif"],
        UrbanistMedium: ["Urbanist-Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
