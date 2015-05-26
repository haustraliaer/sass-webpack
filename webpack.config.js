var webpack = require('webpack')

module.exports = {
  entry: [ 'webpack/hot/dev-server', './app/index.jsx'],
  output: {
    path: './public/dev',
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: ['node_modules', './app/views', './app/css'],
    extensions: ['', '.js', '.jsx', '.scss'],
  },
  module: {
    loaders: [
      { test: /\.scss$/, loader: 'style!css!autoprefixer!sass' },
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.js$/, loader: 'babel' },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 8080,
    contentBase: './server/dev',
    hot: true,
    lazy: false,
    progress: true,
    colors: true,
  }
};
