const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');



module.exports = {
    entry: {
        site: './assets_development/js/script.js'
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'wwwroot', 'assets')
    },    
    devtool: 'source-map',
    mode: 'development',
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css',
        }),
        new CopyPlugin({
            patterns: [
                {
                    context: "./assets_development/",
                    to: "../",
                    from: "**/**.html",
                    force: true
                },
            ],
        }),
        new MergeIntoSingleFilePlugin({
            files: {
                "libs.js": [
                    './assets_development/lib/jquery-3.6.0.min.js',
                    './assets_development/lib/bootstrap.bundle.min.js'
                ],
                "libs.css": [
                    './assets_development/lib/bootstrap.min.css',                    
                ]
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,                
                use: [MiniCssExtractPlugin.loader, 'css-loader'],           
            },
            {
                test: /\.html$/i,
                type: "asset/resource",
            }
        ]
    }
};