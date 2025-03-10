/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    "./src/App.{js,jsx,ts,tsx}",  // Update path for App.tsx
    "./src/components/**/*.{js,jsx,ts,tsx}", // Update components path
    "./src/screens/**/*.{js,jsx,ts,tsx}" // Include screens folder
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
