const Express = require('express')

const app = Express()

app.get('/', (req, res) => {
  res.send('Hello Sharks!')
})

app.listen((process.env.PORT || 3000), () => {
  console.log('App listening on port 3000!')
})
