import devConfig from "./webpack.dev.js";
import prodConfig from "./webpack.prod.js";

export default (env, argv) => {
  if (argv.mode === "production") {
    return prodConfig;
  }

  return devConfig;
};
