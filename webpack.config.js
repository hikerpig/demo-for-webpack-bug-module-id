const HtmlWebpackPlugin = require('html-webpack-plugin')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: {
    a: './src/index-a.js',
    b: './src/index-b.js',
  },
  mode: 'production',
  optimization: {
    minimize: false, // setting this to false will not solve this case but will make the output more readable
    // runtimeChunk: {
    //   name: (entrypoint) => `runtime-chunk-${entrypoint.name}`
    // }, // under multiple runtime chunk, this buggy case appears
    runtimeChunk: 'single', // single runtime chunk will make this bug disappear but I'm not sure if it is a good fix
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: '<body>Check the console</body>',
      chunks: ['b', 'a'],
    }),
  ],
}
