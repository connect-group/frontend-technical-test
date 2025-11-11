const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/*
 * CDN-based fonts would probably be better, as only an absolute URL is required to load them.
 *
 * Here, I've updated the config to load the font files from `src/fonts` with `file-loader`, but
 * that makes the font files part of the `/dist` output.
 *
 * If this component ends up being part of a package, I'd remove that in favour of a CDN URL, but
 * have left this approach in to get a working local demo going.
 */

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src', 'index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    hot: true,
    inline: true,
    open: true,

    // Join the public folder with the asset root folder for local development.
    contentBase: [
      path.join(__dirname, 'public'),
      path.join(__dirname, 'src', 'assets')
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // Overriding behaviour to cover `/fonts/` URLs
              url: (url) => !/^\//.test(url),
              esModule: false
            }
          },
          'sass-loader'
        ]
      },

      // Handle font-loading.
      {
        test: /\.(woff2?|ttf|eot|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[path][name].[ext]',
              context: path.resolve(__dirname, 'src')
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public', 'api'),
          to: 'api'
        },
        {
          from: path.resolve(__dirname, 'public', 'images'),
          to: 'images'
        }
      ],
    }),
  ]
};
