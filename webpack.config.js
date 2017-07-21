const path = require('path')

module.exports = {
  entry: './src/app/app.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query:{
        presets:['react','es2015', 'react-hmre']
      }
    }]
  }
}
