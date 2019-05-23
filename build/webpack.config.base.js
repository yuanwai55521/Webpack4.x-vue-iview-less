const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const resolve = dir => path.join(__dirname, '..', dir);
const production = process.env.NODE_ENV === 'production';

const env_vars = env => {
  return Object.assign(
    {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    },
    production ? require('./config.prod') : require('./config'),
    env
  );
};

module.exports = env => ({
  entry: [resolve('src/main.js')],
  output: {
    path: resolve('dist'),
    filename: 'js/[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader?cacheDirectory',
        exclude: /node_modules/,
      },
      {
        test: /\.l?(c|e)ss$/,
        use: [
          production ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: { javascriptEnabled: true }
          }
        ]
      },
      {
        test: /\.(woff|svg|eot|ttf)\??.*$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 50000,
              name: 'assets/[name].[ext]',
              publicPath: production ? '../' : './'
            }
          }
        ]
      },
      {
        test: /\.(gif|jpg|jpeg|png)\??.*$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 50000,
              name: 'assets/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader',
        exclude: /node_modules/
      }
    ]
  },
  devtool: production ? false : 'cheap-eval-source-map',
  mode: production ? 'production' : 'development',
  resolve: {
    extensions: ['.vue', '.js', '.json', '.css', '.less'],
    alias: {
      vue: 'vue/dist/vue.js',
      store: resolve('src/store/modules'),
      '@': resolve('src')
    },
    modules: ['node_modules', 'styles']
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(['dist'], {
      root: resolve('.'),
      verbose: true,
      dry: false
    }),
    new webpack.DefinePlugin({
      'process.env': env_vars(env)
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: production ? 'css/[name].[hash].css' : '[name].css',
      chunkFilename: production ? 'css/[id].[hash].css' : '[id].css'
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
});
