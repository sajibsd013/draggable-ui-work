// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "~/assets/styles/main.scss",
    "~/assets/styles/style.css",
    "~/assets/styles/themes.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  modules: ["@pinia/nuxt","@pinia-plugin-persistedstate/nuxt"],

  runtimeConfig: {
    public: {
      baseURL: process.env.API_BASE_URL || 'http://localhost:3000',
      accessTokenMaxAge: 3600,
    }
  },
  vite: {
    define:{
      "process.env.accessTokenMaxAge": 3600,
      "process.env.refreshTokenMaxAge":  60 * 60 * 24 * 7,
    }
  }
});
