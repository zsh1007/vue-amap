const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry:{
        main: './src/index.js'
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, '..', 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js(\?.*)?$/,
                exclude: (file) => /node_modules/.test(file) && !/\.js/.test(file),
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../public/index.html'),
            favicon: path.join(__dirname, '../public/favicon.ico'), //favicon路径
            filename: 'index.html',
            chunks: ['main'],
            inject: true,
            minify: true,
            cache: false,
            hash: true //开启hash  ?[hash]
        }),
    ]
}