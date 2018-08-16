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
      { src: '/js/jquery.themepunch.tools.min.js'},
      { src: '/js/jquery.themepunch.revolution.min.js'},
      { src: '/js/jquery.flexslider-min.js'},
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
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/prettyPhoto.css',
    '~/assets/css/font-awesome.min.css',
    '~/assets/css/less-style.css',
    '~/assets/css/style.css',
    '~/css/main.css'
  ],
  cache: {
    max: 1000,
    maxAge: 900000
  },
}



/**
 * <link href="css/bootstrap.min.css" rel="stylesheet">
 <!-- Portfolio CSS -->
 <link href="css/prettyPhoto.css" rel="stylesheet">
 <!-- Font awesome CSS -->
 <link href="css/font-awesome.min.css" rel="stylesheet">
 <!-- Custom Less -->
 <link href="css/less-style.css" rel="stylesheet">
 <!-- Custom CSS -->
 <link href="css/style.css" rel="stylesheet">
 <!--[if IE]><link rel="stylesheet" href="css/ie-style.css"><![endif]-->
 */
