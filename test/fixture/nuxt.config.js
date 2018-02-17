const { resolve } = require('path')

module.exports = {
  head: {
    titleTemplate: '%s - David Royer - Front End Web Developer',
    link: [
      {
        rel: "stylesheet",
        href: "https://cdn.rawgit.com/mblode/marx/master/css/marx.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto"
      }
    ]
  },
  rootDir: resolve(__dirname, '../..'),
  srcDir: __dirname,
  dev: false,
  render: {
    resourceHints: false
  },
  modules: ['@@']
}
