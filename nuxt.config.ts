import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss", "@nuxt/icon"],
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
});
