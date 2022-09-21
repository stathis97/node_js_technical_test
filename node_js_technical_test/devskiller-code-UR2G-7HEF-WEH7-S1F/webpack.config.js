const path = require('path');

module.exports = {
    mode : 'development',
    entry: {
        main: './index.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'stage-0'],
                        plugins: ['transform-class-properties', 'transform-decorators-legacy']
                    }
                }
            }
        ]
    }
};