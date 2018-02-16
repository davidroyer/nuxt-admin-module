const path = require('path')
const { resolve } = require('path')

module.exports = function nuxtBootstrapVue (moduleOptions) {

  this.options.head.link.push({ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' })
  this.options.head.link.push({ rel: 'stylesheet', href: 'https://unpkg.com/vuetify/dist/vuetify.min.css' })


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
}
