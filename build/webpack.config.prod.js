const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.config.base');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const resolve = dir => path.join(__dirname, '..', dir);

module.exports = env =>
  merge(baseConfig(env), {
    optimization: {
      minimize: true,
      runtimeChunk: {
        name: 'manifest'
      },
      splitChunks: {
        chunks: 'all',
        minSize: 30000,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        name: true,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'initial',
            priority: 1,
            reuseExistingChunk: false,
          },
          styles: {
            name: 'style',
            test: /\.css$/,
            chunks: 'all',
            enforce: true,
            minChunks: 1,
            reuseExistingChunk: true
          }
        }
      },
      minimizer: [
        new OptimizeCSSAssetsPlugin({
          assetNameRegExp: /\.css$/g,
          cssProcessor: require('cssnano'),
          cssProcessorPluginOptions: {
            preset: ['default', {
              discardComments: {
                removeAll: true,
              },
              normalizeUnicode: false
            }]
          },
          canPrint: true
        })
      ]
    },
    plugins: [
      new CopyWebpackPlugin([
        {
          context: 'src/assets/static',
          from: '**/*',
          to: resolve('dist/assets/'),
          toType: 'dir'
        }
      ])
    ]
  });
