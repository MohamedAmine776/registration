module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "login-image": "url('../src/assets/login-image.png')",
      },
      backgroundPosition: {
        "login": "left -14rem bottom"
      },
    },
  },
  plugins: [],
};
