const path = require('path');
const pkg = require('./package.json');
const rules = require('./configs/rules.config');
const { aliases } = require('./configs/aliases.config');

module.exports = {
   entry: './src/index.js',
   module: {
      rules: rules
  },
   output: {
      filename: pkg.main,
      library: '',
      libraryTarget: 'commonjs'
   },
   resolve: {
      alias: aliases,
      extensions: ['.js', '.jsx', '.json' ],
      modules: ['node_modules']
  },
   devServer: {
      historyApiFallback: true,
      port: 8081
   },
   devtool: 'inline-source-map'
   // module: {
   //    rules: [
   //       {
   //          test: /\.(js|jsx)$/,
   //          exclude: /node_modules/,
   //          resolve: {
   //             extensions: [".js", ".jsx"]
   //           },
   //           use: {
   //             loader: "babel-loader"
   //           }
   //       },
   //       {
   //          test: /\.css$/i,
   //          use: ["style-loader", "css-loader"],
   //        },
   //        {
   //          test: /\.(jpg|png)$/,
   //          use: {
   //            loader: 'url-loader',
   //          },
   //       }
   //    ]
   // }
}