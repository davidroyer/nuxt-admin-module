const path = require('path')
const { resolve } = require('path')
const _ = require('lodash');
const axios = require('axios');

const addRoutes = (nuxtOpts, postRoutes) => {

  if (!nuxtOpts.generate) {
    nuxtOpts.generate = {}
  }
  if (!nuxtOpts.generate.routes) {
    nuxtOpts.generate.routes = []
  }

  const { routes } = nuxtOpts.generate
  if (Array.isArray(routes)) {
    nuxtOpts.generate.routes = postRoutes
  } else {
    throw new Error(`"generate.routes" must be an array`)
  }
}

const postRoutes = () => {
  return axios.get('https://fire-tests.firebaseio.com/posts.json')
  .then((res) => {
    return _.map(res.data, function(post, key) {
      return `/posts/${post.slug}`
    })
  })
}



module.exports = function nuxtBootstrapVue (moduleOptions) {

  // this.options.head.link.push({ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' })
  // this.options.head.link.push({ rel: 'stylesheet', href: 'https://unpkg.com/vuetify/dist/vuetify.min.css' })


  // Register `plugin.js` template
  this.addPlugin( resolve(__dirname, '../lib/plugins/vuetify.js') )
  this.addPlugin( { src: resolve(__dirname, '../lib/plugins/vue2-editor.js'), ssr: false } )


  this.extendRoutes(routes => {
    routes.push({
      name: 'admin',
      path: '/admin',
      component: resolve(__dirname, '../lib/admin.vue')
    })
  })

  addRoutes(this.options, postRoutes)
}
