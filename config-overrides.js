const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias
} = require("customize-cra");
const rewireReactHotLoader = require("react-app-rewire-hot-loader");
// const paths = require('react-scripts/config/paths');
// const path = require('path');
// paths.appBuild = path.join(path.dirname(paths.appBuild), '../../resources/static/seven-style');
module.exports = override(
  addWebpackAlias({
    "react-dom": "@hot-loader/react-dom"
  }),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@table-padding-vertical": "10px",
      "@table-padding-horizontal": "10px",
      // "@card-head-padding":"10px",
      "@tabs-bar-margin": "5px",
      "@form-item-margin-bottom": "15px"
    }
  }),
  // addPostcssPlugins(postcssPlugin),

  (config, env) => rewireReactHotLoader(config, env),
);
