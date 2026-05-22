module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
          surface: "var(--bg-surface)",
          elevation: "var(--bg-elevation)",
        },
        brand: {
          emerald: "var(--brand-emerald)",
          "emerald-dim": "var(--brand-emerald-dim)",
          "emerald-light": "var(--brand-emerald-light)",
        },
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-muted)",
        },
        border: {
          subtle: "var(--border-subtle)",
        },
        method: {
          post: "var(--method-post)",
          get: "var(--method-get)",
          patch: "var(--method-patch)",
          delete: "var(--method-delete)",
        },
      },
      fontFamily: {
        sans: "var(--font-sans)",
        mono: "var(--font-mono)",
      },
    },
  },
  plugins: [],
};
