const path = require("path");
module.exports = {
  entry: {
    "bundle.js": [
      path.resolve(__dirname, "dist/insurance-payment/polyfills.js"),
      path.resolve(__dirname, "dist/insurance-payment/styles.css"),
      path.resolve(__dirname, "dist/insurance-payment/main.js"),
      path.resolve(__dirname, "dist/insurance-payment/572.js"),
    ],
  },
  output: { filename: "bundle.js", path: path.resolve(__dirname, "dist") },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};