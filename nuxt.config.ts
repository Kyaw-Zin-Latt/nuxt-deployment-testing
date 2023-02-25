// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        head: {
            title: "Nuxt JS",
            meta: [
                {name: "description Nuxt JS", content: "content Nuxt JS"}
            ]
        }
    }
})
