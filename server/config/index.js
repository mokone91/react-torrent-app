const fs = require("fs");
const {join} = require("path");

let config = require("./config");

const localConfigFile = join(__dirname, "/config.local.js");

if (fs.existsSync(localConfigFile)) {
  console.log("local config in use");
  let configLocal = require(localConfigFile);
  
  config = Object.assign({}, config, configLocal);
  
}


module.exports = {
  config
};