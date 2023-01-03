export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    port: process.env.PORT || 3000, // default: 3000
  },
  head: {
    title: process.env.APP_NAME || 'Indigo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', content: 'danixsofyan' },
      { hid: 'description', name: 'description', content: 'Indigo by Telkom Indonesia' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700' },
    ],
    script: [
      { src: "/plugins/global/plugins.bundle.js" },
      { src: "/js/scripts.bundle.js" },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/app-notification'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    //https://auth.nuxtjs.org/
    '@nuxtjs/auth-next'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_URL || 'http://localhost:3000',
  },

  router: {
    middleware: ['auth']
  },

  auth: {
    google: {
      clientId: '80071008966-mopchf4ao48hi2jdlj05g8gen4nmg5i2.apps.googleusercontent.com',
      codeChallengeMethod: '',
      responseType: 'code',
      endpoints: {
        token: 'http://localhost:8000/user/google/', // somm backend url to resolve your auth with google and give you the token back
        userInfo: 'http://localhost:8000/auth/user/' // the endpoint to get the user info after you recived the token
      },
    },
    strategies: {
      local: {
        token: {
          property: 'data.token',
          global: true,
          type: 'Bearer'
        },
        user: {
          property: 'data',
        },
        endpoints: {
          login: { url: process.env.URL_LOGIN ||'/api/v1/auth/login', method: 'post' },
          user: { url: process.env.URL_USER ||'/api/v1/auth/user', method: 'get' },
          logout: process.env.URL_LOGOUT ||'/logout'
        }
      }
    },
    redirect: {
      login: '/login',
      logout: '/',
      home: '/home'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
