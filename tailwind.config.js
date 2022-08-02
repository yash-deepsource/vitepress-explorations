/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/*.{vue,js,ts,md}", "./docs/components/*.{vue,js,ts,md}"],
  theme: {
    extend: {},
    fontSize: {
      "step--1": ["var(--step--1)", "1.625"],
      base: ["var(--step-0)", "1.625"],
      "step-1": ["var(--step-1)", "1.5"],
      "step-2": ["var(--step-2)", "1.375"],
      "step-3": ["var(--step-3)", "1.375"],
      "step-4": ["var(--step-4)", "1.25"],
    },
  },
  plugins: [],
};
