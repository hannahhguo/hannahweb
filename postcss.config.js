// postcss.config.js
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},   // ✅ Use the v4 plugin, NOT "tailwindcss"
    autoprefixer: {},
  },
};
