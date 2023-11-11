// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "~/assets/styles/main.scss",
    "~/assets/styles/style.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  modules: ["@pinia/nuxt","@pinia-plugin-persistedstate/nuxt"],

  runtimeConfig: {
    public: {
      baseURL: process.env.API_BASE_URL || 'http://localhost:3000'
    }
  },
});
