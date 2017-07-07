const app_env = APP_ENV;

const config = require("./config." + app_env+ ".js").default;

export default {
  ...config,
  app_env
};
