'use strict'
const path = require('path');

// 소스 폴더 안에 있는 main.js가 엔트리포인트가 되고
module.exports = {
    entry: {
        main: ['./src/main.js']
    },
    output: {
        path: path.resolve(__dirname, '/.build'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, './src'),
            loaders: 'babel-loader'
        }]
    },
    plugins: [],
    devServer: {
        contentBase: './public',
        host: 'localhost',
        port: 8080
    }
}
