const webpack = require("webpack"),
    path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "../", "app", "App.jsx"),
    output: {
        path: path.resolve(__dirname, "../", "public", "assets", "js"),
        filename: "app.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: ["env", "react", "stage-2"]
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    plugins: [
        new webpack.EnvironmentPlugin(["NODE_ENV"])
    ]
};
