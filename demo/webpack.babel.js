import webpack from 'webpack'

export default {

  devtool: 'sourcemap',

  entry: [
    './demo/index.js',
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server',
  ],

  output: {
    filename: 'bundle.js',
    path: './demo',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/,
    }],
  },

  devServer: {
    quiet: false,
    noInfo: false,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false,
    },
  },

}
