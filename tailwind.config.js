module.exports = {
  plugins: [require("@tailwindcss/aspect-ratio")],
  content: ["./src/**/*.{html,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      maxWidth: {
        layout: "950px",
      },
      colors: {
        light: {
          primary: "var(--tlp)",
          secondary: "var(--tls)",
          accent: "var(--tla)",
          body: "var(--tlb)",
          heading1: "var(--tlh1)",
          heading2: "var(--tlh2)",
          heading3: "var(--tlh3)",
          heading4: "var(--tlh4)",
          heading5: "var(--tlh5)",
          heading6: "var(--tlh6)",
          "selection-fg": "var(--sel-lfg)",
          "selection-bg": "var(--sel-lbg)",
        },
        dark: {
          primary: "var(--tdp)",
          secondary: "var(--tds)",
          accent: "var(--tda)",
          body: "var(--tdb)",
          heading1: "var(--tdh1)",
          heading2: "var(--tdh2)",
          heading3: "var(--tdh3)",
          heading4: "var(--tdh4)",
          heading5: "var(--tdh5)",
          heading6: "var(--tdh6)",
          "selection-fg": "var(--sel-dfg)",
          "selection-bg": "var(--sel-dbg)",
        },
      },
      fontFamily: {
        font0: ["var(--gf0)", "sans-serif"],
        font1: ["var(--gf1)", "var(--gf0)", "sans-serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
        160: "40rem",
        176: "44rem",
        192: "48rem",
        208: "52rem",
        224: "56rem",
        240: "60rem",
        256: "64rem",
      },
      borderRadius: {
        xl: "0.5rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        gbr: "var(--gbr)",
      },
      boxShadow: {
        "elevated-small-primary": "5px 5px  var(--tlp)",
        "elevated-small-secondary": "5px 5px  var(--tls)",
        "elevated-small-accent": "5px 5px  var(--tla)",

        "elevated-medium-primary": "7px 7px  var(--tlp)",
        "elevated-medium-secondary": "7px 7px  var(--tls)",
        "elevated-medium-accent": "7px 7px var(--tla)",

        "elevated-large-primary": "10px 10px var(--tlp)",
        "elevated-large-secondary": "10px 10px  var(--tls)",
        "elevated-large-accent": "10px 10px  var(--tla)",

        "elevated-small-primary-dark": "5px 5px  var(--tdp)",
        "elevated-small-secondary-dark": "5px 5px  var(--tds)",
        "elevated-small-accent-dark": "5px 5px  var(--tda)",

        "elevated-medium-primary-dark": "7px 7px  var(--tdp)",
        "elevated-medium-secondary-dark": "7px 7px  var(--tds)",
        "elevated-medium-accent-dark": "7px 7px var(--tda)",

        "elevated-large-primary-dark": "10px 10px m var(--tdp)",
        "elevated-large-secondary-dark": "10px 10px  var(--tds)",
        "elevated-large-accent-dark": "10px 10px  var(--tda)",

        // black and white
      },
      dropShadow: {
        "glow-small-primary": "0px 5px 10px var(--tlp)",
        "glow-small-secondary": "0px 5px 10px var(--tls)",
        "glow-small-accent": "0px 5px 10px var(--tla)",

        "glow-medium-primary": "0px 15px 15px var(--tlp)",
        "glow-medium-secondary": "0px 15px 15px var(--tls)",
        "glow-medium-accent": "0px 15px 15px var(--tla)",

        "glow-large-primary": "0px 20px 15px var(--tlp)",
        "glow-large-secondary": "0px 20px 15px var(--tls)",
        "glow-large-accent": "0px 20px 15px var(--tla)",

        "glow-small-primary-dark": "0px 5px 10px var(--tdp)",
        "glow-small-secondary-dark": "0px 5px 10px var(--tds)",
        "glow-small-accent-dark": "0px 5px 10px var(--tda)",

        "glow-medium-primary-dark": "0px 15px 10px var(--tdp)",
        "glow-medium-secondary-dark": "0px 15px 10px var(--tds)",
        "glow-medium-accent-dark": "0px 15px 10px var(--tda)",

        "glow-large-primary-dark": "0px 20px 15px var(--tdp)",
        "glow-large-secondary-dark": "0px 20px 15px var(--tds)",
        "glow-large-accent-dark": "0px 20px 15px var(--tda)",
      },
    },
  },
};
