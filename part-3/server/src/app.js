const Express = require('express')
const path = require('path')
const fs = require('fs')
const manifestPath = `${process.cwd()}/dist/build-manifest.json`
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'))

const app = Express()

app.use('/dist', Express.static('dist'))

app.get('*', (req, res) => {
  const jsLink = manifest['main.js']
  const cssLink = manifest['main.css']
  fs.readFile(path.join(__dirname, '../../client/index.html'), 'utf8', (err, htmlData) => {
    if (err) {
      console.error('read err', err)
      return res.status(404).end()
    }
    const RenderedApp = htmlData
      .replace('{{JS}}', `/dist/${jsLink}`)
      .replace('{{CSS}}', `/dist/${cssLink}`)
    res.send(RenderedApp)
  })
})

module.exports = app
