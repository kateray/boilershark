const Express = require('express')
const path = require('path')

const app = Express()

app.use('/dist', Express.static('dist'))

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, '../../client')})
})

app.listen((process.env.PORT || 3000), () => {
  console.log('App listening on port 3000!')
})
