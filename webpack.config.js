const path = require("path");
const webpack = require("webpack");

const NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
  devtool: "eval",
  mode: NODE_ENV,
  entry: ["webpack-dev-server/client?http://localhost:3000", "./src/index"],
  output: {
    path: path.join(__dirname, "docs"),
    filename: "app.frontend.js",
    publicPath: "/static/"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      ENV: JSON.stringify("frontend"),
      NODE_ENV: JSON.stringify(NODE_ENV),
      "process.env": { NODE_ENV: JSON.stringify(NODE_ENV) }
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "postcss-loader"]
      },
      {
        test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: "file"
      }
    ]
  }
};
