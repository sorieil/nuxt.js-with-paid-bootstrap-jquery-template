const webpack = require('webpack')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'fatboysandwiches',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Droid+Serif:400,700' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,300,600' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700' }

    ],
    script: [
      { src: '/js/jquery.js' },
      { src: '/js/bootstrap.min.js'},
      { src: '/js/jquery.prettyPhoto.js'},
      { src: '/js/respond.min.js'},
      { src: '/js/html5shiv.js'},
      { src: '/js/custom.js'}
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    postcss: [
      require('postcss-nested')(),
      require('postcss-responsive-type')(),
      require('postcss-hexrgba')(),
    ],
    vendor: [
      'babel-polyfill'
    ]
  },
  css: [
    '~/static/css/bootstrap.min.css',
    '~/static/css/prettyPhoto.css',
    '~/static/css/font-awesome.min.css',
    '~/static/css/less-style.css',
    '~/static/css/style.css',
    '~/css/main.css'
  ],
  cache: {
    max: 1000,
    maxAge: 900000
  },
}
