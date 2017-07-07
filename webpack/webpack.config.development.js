const webpack = require("webpack");
const {projectRoot, module: {rules}, output, plugins, entry, resolve} = require("./webpack.config.base");

module.exports = {
  entry: [
    "webpack-hot-middleware/client?reload=true",
    "react-hot-loader/patch",
    ...entry
  ],
  devtool: 'source-map',
  devServer: {inline: false},
  plugins: [
    ...plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      },
    })
  ],
  output,
  resolve,
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        exclude: /node_modules/,
        include: projectRoot,
        loader: "eslint-loader"
      },
      ...rules
    ]
  }
};