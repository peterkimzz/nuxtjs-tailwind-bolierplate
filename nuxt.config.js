module.exports = {
  telemetry: false,
  mode: 'universal',
  target: 'server',
  server: {
    port: process.env.PORT
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'robots', content: 'index, follow' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, minimum-scale=1, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  env: process.env,
  css: [],
  loading: { color: '#0057ff', height: '3px' },
  plugins: [{ src: '~/plugins/logger' }, { src: '~/plugins/axios' }],
  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-analytics'],
  modules: ['@nuxtjs/axios'],
  components: [
    { path: '~/components/atoms', prefix: 'vue' },
    { path: '~/components/molecules', prefix: 'vue' },
    { path: '~/components/organisms', prefix: 'vue' },
    { path: '~/components/templates', prefix: 'vue' }
  ],
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
    debug: {
      sendHitTask: process.env.NODE_ENV === 'production'
    }
  },
  tailwindcss: {},
  build: {}
}
