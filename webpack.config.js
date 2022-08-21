const path = require('path')

const prod = process.env.NODE_ENV === 'production'

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: prod ? 'production' : 'development',
  entry: './core/ui/src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist/ui')
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        resolve: {
          extensions: ['.ts', '.tsx', '.js', '.json']
        },
        use: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  devtool: prod ? undefined : 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'core/ui/src/index.html'
    }),
    new MiniCssExtractPlugin()
  ],
  resolve: {
    plugins: [ new TsconfigPathsPlugin()]
  }
}
