const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HTMLWebpackPlugin(
            {
                filename: 'index.html',
                template: './src/index.html'
            }
        )
    ],
    // loader configuration
    module: {
        rules: [
            {
                // only js files
                test: /\.js$/,
                // dont apply transformations on node_modules/.js files
                exclude: /node_modules/,
                // which loader to use
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}