export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: ["@vite-pwa/nuxt"],
  pwa: {
    manifest: {
      name: "Team Color Generator",
      short_name: "TCG",
      description: "Generate team colors for playstation games.",
      background_color: "#232323",
      theme_color: "#131313",
      lang: "en",
      display: "standalone",
      start_url: "/",
    },
  },
});
