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


// Generate Vue templates from markdown with components (*.comp.md)
// this.extendBuild(config => {
//   config.module.rules.push({
//     test: /\.comp\.md$/,
//     use: [
//       'vue-loader',
//       {
//         loader: resolve(__dirname, 'loader'),
//         options: {
//           componentsDir,
//           extensions: loaderComponentExtensions,
//           content,
//           parsers
//         }
//       }
//     ]
//   })
// })

// { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
//
// <link type="text/css" rel="stylesheet" href="//unpkg.com/bootstrap/dist/css/bootstrap.min.css"/>
// <link type="text/css" rel="stylesheet" href="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.css"/>
