module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: () => ({
        DEFAULT: {
          css: {
            maxWidth: "none",
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
