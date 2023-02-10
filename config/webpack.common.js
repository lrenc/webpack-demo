const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { rootPath } = require('./constants');

module.exports = {
  // 入口文件
  entry: {
    index: './src/index.tsx'
  },
  // 输出
  output: {
    filename: '[name].build.js',
    path: path.resolve(rootPath, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(rootPath, 'index.html')
    }),
    new MiniCssExtractPlugin()
  ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  module: {
    rules: [
      // 加载js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
            ]
          }
        }
      },
      {
        test: /\.m?[jt]s$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-typescript',
            ]
          }
        }
      },
      {
        test: /\.m?[jt]sx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ]
          }
        }
      },
      // 加载css
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          'css-loader'
        ],
      },
      // 加载less
      {
        test: /\.less$/i,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          'css-loader',
          'less-loader',
        ],
      },
      // 加载sass
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      // 加载图片
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      // 加载字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      // 加载其他文件
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
      },
      {
        test: /\.toml$/i,
        type: 'json',
        parser: {
          parse: require('toml').parse,
        },
      },
      {
        test: /\.yaml$/i,
        type: 'json',
        parser: {
          parse: require('yamljs').parse,
        },
      },
      {
        test: /\.json5$/i,
        type: 'json',
        parser: {
          parse: require('json5').parse,
        },
      },
    ]
  },
  optimization: {
    moduleIds: 'deterministic',
    usedExports: true,
    runtimeChunk: 'single', // 将runtime代码拆分成单独的chunk
    splitChunks: {
      chunks: 'all', // 对所有chunks 进行优化
      minChunks: 1,
      cacheGroups: {
        // 将 node_modules 中的代码单独打包
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
}