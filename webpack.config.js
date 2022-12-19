const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './main.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   devServer: {
      historyApiFallback: true,
      port: 8081
   },
   devtool: 'inline-source-map',
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            resolve: {
               extensions: [".js", ".jsx"]
             },
             use: {
               loader: "babel-loader"
             }
         },
         {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(jpg|png)$/,
            use: {
              loader: 'url-loader',
            },
         }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
}