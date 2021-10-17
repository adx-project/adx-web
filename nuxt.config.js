export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ADX - The Anomalous Data Exchange',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'},
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Jost:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
        integrity: 'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC',
        crossorigin: 'anonymous'
      },
      /* todo: when present and active, this plugin makes the main page to not be loaded correctly when navigating to it.*/
      // {
      //   rel: 'stylesheet',
      //   type: 'text/css',
      //   href: 'https://unpkg.com/aos@2.3.1/dist/aos.css'
      // },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdn.jsdelivr.net/npm/glightbox@3.1.0/dist/css/glightbox.min.css',
        integrity: 'sha256-nDALb7/m03Ph9TsvDTPPnfhtkxDMYFMa0jHO6XrKK/A=',
        crossorigin: 'anonymous'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://unpkg.com/swiper@7/swiper-bundle.min.css'
      }
    ],
    script: []
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/dotenv'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    fallback: '404.html'
  }
}
