import HtmlWebpackPlugin from "html-webpack-plugin";

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: "./src/index.ts", // bundle's entry point
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
    plugins : [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject : "body",
            scriptLoading: "blocking"
        })
    ],

};
