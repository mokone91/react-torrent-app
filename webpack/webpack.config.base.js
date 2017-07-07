const webpack = require("webpack");
const {join} = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const projectRoot = process.cwd();
const webpackDir = "webpack";

const config = {
  NODE_ENV,
  projectRoot,
  webpackDir,
  entry: [
    join(projectRoot, "/src/index.js")
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: join(projectRoot, "/src/index.html"),
      filename: "index.html"
    }),
    new webpack.DefinePlugin({
      APP_ENV: JSON.stringify(NODE_ENV)
    })
  ],
  output: {
    path: join(projectRoot, "build"),
    publicPath: "/",
    filename: "bundle.js",
  },
  resolve: {
    modules: ['node_modules', 'src/app'],
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ["babel-loader"],
        exclude: /node_modules/,
        include: projectRoot
      },
      {
        test: /\.less$/,
        loaders: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          "style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.(otf|eot|png|svg|ttf|woff|woff2|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=8192"
      }
    ]
  }
};

module.exports = config;