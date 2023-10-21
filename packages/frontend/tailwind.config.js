module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "ice-0": "#4ee8d8",
        "ice-2": "#9ee0b2",
        "ice-3": "#e31185",
        "ice-5": "#0aeaa7",
        "ice-6": "#ed0d0d",
        "ice-7": "#f3faff",
        "ice-8": "#f17911",
      },
      margin: {
        "128px": "128px",
      },
      backgroundImage: {
        "water-background": "url('../public/water.gif')",
        "ice-full": "url('../public/ice0.png')",
        "ice-broken": "url('../public/ice9.png')",
      },
    },
  },
  plugins: [],
};
