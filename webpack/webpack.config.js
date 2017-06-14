const webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '../', 'app', 'App.jsx'),
    output: {
        path: path.resolve(__dirname, '../', 'public', 'assets', 'js'),
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new webpack.EnvironmentPlugin(['NODE_ENV'])
    ]
};
