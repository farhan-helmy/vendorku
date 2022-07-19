module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '300px',
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"]
  }
}