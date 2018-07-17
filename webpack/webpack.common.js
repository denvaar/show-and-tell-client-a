const path = require('path')

module.exports = {
  entry: {
    app: './app/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      images: path.resolve(__dirname, '..', 'app/images'),
      utils: path.resolve(__dirname, '..', 'app/utils'),
      contexts: path.resolve(__dirname, '..', 'app/contexts'),
      components: path.resolve(__dirname, '..', 'app/components/'),
      containers: path.resolve(__dirname, '..', 'app/containers/')
    }
  },
  module: {
    rules: [
      {
        test: /\.js?|\.jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.png?|\.jpg$/,
        use: ['url-loader']
      }
    ]
  }
};
