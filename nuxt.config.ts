// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  devServer: {port: 4001, host: '0.0.0.0'},
  css: ['./app/assets/css/main.css'],
  modules:['@nuxt/ui', '@pinia/nuxt'],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        }
      ]
    }
  }
})
