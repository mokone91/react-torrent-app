const path = require("path");

const {projectRoot, NODE_ENV, webpackDir} = require("./webpack.config.base");

module.exports = require(path.join(projectRoot, webpackDir, `webpack.config.${NODE_ENV}.js`));