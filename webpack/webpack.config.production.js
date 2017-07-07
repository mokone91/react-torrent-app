const webpack = require("webpack");
const {module: {rules}, output, plugins, entry, resolve} = require("./webpack.config.base");

module.exports = {
  entry,
  plugins: [
    ...plugins,
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      },
    })
  ],
  output,
  resolve,
  module: {
    rules
  }
};

