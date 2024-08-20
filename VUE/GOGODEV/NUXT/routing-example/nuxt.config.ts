// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    plugins: ["~/server/index.ts"],
    runtimeConfig: {
      mongodbUri: process.env.MONGODB_URI
    },
    prerender: {
      routes: ['/services', '/contact', '/about', '/']
    }
  }
})
