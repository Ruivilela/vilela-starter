const path = require('path')
const webpack = require('webpack')

const app = path.resolve(__dirname, 'src/app')
const state = path.resolve(__dirname, 'src/state')

module.exports = {
  entry: './src/app/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query:{
        presets:['react','es2015']
      }
    }]
  },
  resolve: {
    alias: {
      '@app': app,      
      '@state': state
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'PORT':JSON.stringify('www.justaURL.com')
      }
    })
  ],
}
