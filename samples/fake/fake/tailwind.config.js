/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // src 밑의 모든 경로에서 4개의 확장자에대해 적용한다.
  ],
  theme: {
    extend: {},
  },
  safelist: [{ pattern: /^line-clamp (\d+)$/ }],
  plugins: [require("@tailwindcss/line-clamp"), require("daisyui")],
};
