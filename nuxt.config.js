const pkg = require('./package');
import axios from 'axios';

module.exports = {
    mode: 'universal',
    generate: {
        routes: function () {
            return axios.get("https://www.hotspringing.com/directus/public/_/items/hotsprings").then((res) => {
                return res.data.data.map(function(spring) {
                    return "/hotsprings/" + spring.condensed_page_name
                })
            })
        },
        interval: 1
    },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
        { hid: 'description', name: 'description', content: pkg.description },
        { hid: 'googlesiteverification', name: 'google-site-verification', content: '1qgetha3dlkMoB6k7clWlXmt2TLmqjApHABtHCPXuHs'}
    ],
    link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700' },
        { rel: 'icon', type: 'image/x-icon', href: 'https://www.hotspringing.com/directus/public/uploads/_/originals/favicon1.png' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
      {src: 'assets/css/allPages.css'},
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      "~/plugins/vue2-google-maps",
      {src: "~/plugins/vue-tiny-slider", ssr: false},
      '~/plugins/disqus'
  ],

  /*
  ** Nuxt.js modules
  */
    modules: [
        '@nuxtjs/axios',
        ['@nuxtjs/google-analytics', {
            id: "UA-125432766-1"
        }],
        '@nuxtjs/sitemap'
    ],
  axios: {
    // proxyHeaders: false
  },
  router: {
      base: '/'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
        transpile: [/^vue2-google-maps($|\/)/]
    }
  },
    sitemap: {
        path: '/sitemap.xml',
        hostname: 'https://www.hotspringing.com',
        cacheTime: 1000 * 60 * 15,
        gzip: true,
        generate: true, // Enable me when using nuxt generate
        routes: function () {
            return axios.get("https://www.hotspringing.com/directus/public/_/items/hotsprings").then((res) => {
                return res.data.data.map(function(spring) {
                    return "/hotsprings/" + spring.condensed_page_name
                })
            })
        }
    }
}