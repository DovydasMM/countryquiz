const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/js/controller.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: false,
    liveReload: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Quiz-master",
      filename: "index.html",
      template: "src/template.html",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
};
