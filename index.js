const {server, config} = require("./server");

server.listen(config.port, function (err) {
  if (err) {
    return console.log(err);
  }
  console.log(`Server running on port: ${config.port}`);
});