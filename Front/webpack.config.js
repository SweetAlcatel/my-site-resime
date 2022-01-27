const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "index_bundle.js"
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            },
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          },
          {
            test: /\.(png|jp(e*)g|svg|gif)$/,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: "./public/index.html"
        })
    ],
    devServer: {
      proxy: {
        '/': 'http://localhost:3000'
      }
    }
};