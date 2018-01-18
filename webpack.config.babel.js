import path from 'path';

export default {
  entry: './src/index.js',
  output: {
    libraryTarget: 'commonjs2',
    filename: 'webdav-js.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  externals: {
    axios: 'axios'
  }
};
