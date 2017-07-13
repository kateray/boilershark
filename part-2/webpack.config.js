const path = require('path')

const config = {
  entry: './client/src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        include: __dirname,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}

module.exports = config
