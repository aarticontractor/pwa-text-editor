const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');



module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },

    //Added and configured workbox plugins for a service worker and manifest file

    plugins: [
      new InjectManifest({
          swSrc: './src-sw.js',
          swDest: 'src-sw.js', 
      }),  
      new HtmlWebpackPlugin({
          template: './index.html',
      }),
      new WebpackPwaManifest({
          // PWA Manifest configuration...
          inject: true,
          fingerprints: false,
          start_url: '/',
          publicPath: '/',
          name: 'Progressive Web App Text Editor',
          short_name: 'PWAEditor',
          description: 'My awesome Progressive Web App!',
          background_color: '#ffffff',
          crossorigin: 'use-credentials', 
          icons: [
              {
                  src: path.resolve('src/images/logo.png'),
                  sizes: [96, 128, 192, 256, 384, 512], 
                  destination: path.join('assets', 'icons')
              }
          ]
      }),
  ],
  // Added CSS loaders and babel to webpack.
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
      ],
    },
  };
};
