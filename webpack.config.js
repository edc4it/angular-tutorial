const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        polyfills: "./src/polyfills.ts", // add this
        main: "./src/app.ts" //change this
    },
    resolve: {
        extensions: ['.js', '.ts']
    },
    devtool: "source-map",
    devServer: {
        historyApiFallback: true
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // output directory
        filename: "[name].js" // name of the generated bundle
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                loader: "html-loader",
                options: {
                    esModule: false,
                },
            },
{
    test: /\.scss$/,
    use: [
        {
            loader: "raw-loader",
            options: {
                esModule: false,
            }
        },
        {
            loader: "sass-loader",
            options: {
                sourceMap: true,
            },
        },
    ],
},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: "body",
            scriptLoading: "blocking"
        })
    ]
};
