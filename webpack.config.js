const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
      main: './src/index.js'
    },
    output: {
      // `filename` provides a template for naming your bundles (remember to use `[name]`)
      filename: '[name].js',
      // `chunkFilename` provides a template for naming code-split bundles (optional)
      chunkFilename: '[name].bundle.js',
      // `path` is the folder where Webpack will place your bundles
      path: path.resolve(__dirname, 'dist'),
      // `publicPath` is where Webpack will load your bundles from (optional)
      publicPath: 'dist/'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            "presets": ["@babel/preset-env", "@babel/preset-react"],
            "plugins": ["syntax-dynamic-import"]
          }
        },
        {
          test: /\.css$/, loader: "style-loader!css-loader"
        }
      ]
    }
  };