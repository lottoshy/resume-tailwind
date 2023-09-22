/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "background" : "#0D1116",
        "card" : "rgba( 255, 255, 255, 0.05 )",
        "whites" : "rgba( 255, 255, 255, 0.18 )",
        "yellowish" : "#FBDA61",
        "pinkish" : "#FF5ACD"

      },
      borderRadius: {
        "small" : "10px",
      },
      margin: {
        "3px" : "3px",
      }
    },
  },
  plugins: [],
}

