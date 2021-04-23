// webpack.common.js
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const resolve = (...filePath) => path.resolve(__dirname, ...filePath);

module.exports = {
  optimization: { // 防止重复
    // splitChunks: {
    //   chunks: 'all'
    // },
    usedExports: true, // 标记去掉未使用方法
  },
  resolve: {
    extensions: [".tsx", '.jsx', ".ts", ".js", ".less", ".css"],
    alias: {
      lib: resolve('./src/lib'),
      src: resolve("./src")
    },
  },
  mode: "development",
  externals: {
    react: 'var window.React',
  },
  entry: {
    app: path.join(__dirname, './src/index.tsx'),
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: `[name].min.js`,
    libraryTarget: "umd",
    library: "where-input-render"
  },
  module: {
    rules: [
      {
        test: /\.(tsx|tx|js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ],
  }
};