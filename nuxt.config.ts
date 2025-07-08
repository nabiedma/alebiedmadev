import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
  ],
  devtools: { enabled: true },
  css: ["~/assets/css/app.css"],
  compatibilityDate: "2025-05-15",
  vite: {
    plugins: [tailwindcss()],
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  googleFonts: {
    families: {
      "Nunito+Sans": true,
    },
    display: "swap",
    preload: true,
    preconnect: true,
    prefetch: true,
  },
  colorMode: {
    dataValue: "theme",
    preference: "system",
    fallback: "light",
    storage: "localStorage",
  },
});
