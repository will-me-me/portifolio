// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // plugins: ["~/plugins/tsparticles.js"],
  devtools: { enabled: true },
  modules: [
    "vuetify-nuxt-module",
    "@vueuse/nuxt",
    "@vueuse/nuxt",
    // "nuxt-particles",
    // "~/plugins/tsparticles.js",
  ],
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      /* vuetify options */
    },
  },
});
