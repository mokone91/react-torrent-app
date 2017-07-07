const express = require("express");
const path = require("path");


const app = express();
const NODE_ENV = process.env.NODE_ENV;
const projectRoot = process.cwd();


if (NODE_ENV === "development") {
  const webpackConfig = require("../webpack");
  const compiler = require("webpack")(webpackConfig);
  const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);
  const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });
  
  app.use(webpackDevMiddleware);
  app.use(webpackHotMiddleware);

  app.get('*', function response(req, res) {
    res.write(webpackDevMiddleware.fileSystem.readFileSync(path.join(projectRoot, 'build/index.html')));
    res.end();
  });

} else {
  app.use(express.static(projectRoot + '/build'));
  app.get('*', function (req, res) {
    res.sendFile(path.join(projectRoot, '/build/index.html'));
  });
}

module.exports = app;