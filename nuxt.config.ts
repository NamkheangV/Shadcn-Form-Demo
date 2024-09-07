export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    'shadcn-nuxt',
    '@nuxtjs/tailwindcss'
  ],

  typescript: {
    typeCheck: true
  },

  vite: {
    optimizeDeps: {
      exclude: ['vee-validate']
    }
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  },

  compatibilityDate: '2024-09-07'
})