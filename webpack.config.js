const webpack = require('webpack')
const path = require('path')

const config = {
  entry: [
    'whatwg-fetch',
    './js/App.js'
  ],
  output: {
    filename: 'minimal_viewer.js',
    path: '/minimal_viewer/dist/',
    library: 'MinimalViewer'
  },
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    root: [
      path.resolve('./js')
    ]
  }
}

const isDevelopment = process.env.NODE_ENV !== 'production'
if (isDevelopment) {
  config.entry = [
    'webpack-hot-middleware/client?reload=true',
    ...config.entry
  ]
  config.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    ...config.plugins
  ]
}

module.exports = config
