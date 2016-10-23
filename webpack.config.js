const path = require('path');
const webpack = require('webpack');
const cssnext = require('postcss-cssnext');

const NODE_ENV = process.env.NODE_ENV || 'development';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

let webpackConfig = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'app.frontend.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      ENV: JSON.stringify('frontend'),
      NODE_ENV: JSON.stringify(NODE_ENV),
      'process.env': {NODE_ENV: JSON.stringify(NODE_ENV)}
    })
    // new ExtractTextPlugin("style.css", {allChunks: true}) //TODO: add at prod env
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: 'style!css!postcss'
        // loader: ExtractTextPlugin.extract("css!postcss") //TODO: add at prod env
      },
      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: 'file'
      }
    ]
  },
  postcss: () => [cssnext]
};


if (NODE_ENV === 'production') {
  let frontend = webpackConfig;
  frontend.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings : false,
        drop_console: true,
        unsafe: true
      }
    })
  );
}

module.exports = webpackConfig;