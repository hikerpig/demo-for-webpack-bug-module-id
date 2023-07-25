const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        a: './src/index-a.js',
        b: './src/index-b.js'
    },
    mode: "production",
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['b', 'a']
        })
    ]
}
