/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.tsx", "./src/components/**/*tsx"],
  safelist: [{ pattern: /from-(green|blue|gray)-(400|700)/ }, { pattern: /to-(green|blue|gray)-(400|700)/ }],
  theme: {
    extend: {},
  },
  plugins: [],
};
