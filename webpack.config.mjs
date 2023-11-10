import HtmlWebpackPlugin from "html-webpack-plugin";
<<<<<<< HEAD
=======
import linkerPlugin from '@angular/compiler-cli/linker/babel';
import { AngularWebpackPlugin } from "@ngtools/webpack";
>>>>>>> d40141f636819437d075ff89c0c2d20fe065015f

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
<<<<<<< HEAD
    entry: "./src/index.ts", // bundle's entry point
    resolve: {
        extensions: ['.js', '.ts']
    },
=======
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
>>>>>>> d40141f636819437d075ff89c0c2d20fe065015f
    output: {
        path: path.resolve(__dirname, 'dist'), // output directory
        filename: "[name].js" // name of the generated bundle
    },
<<<<<<< HEAD
    module: {
        rules: [
            {
=======

    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                loader: "@ngtools/webpack",
            },
            {
                test: /\.m?js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [linkerPlugin],
                        compact: false,
                        cacheDirectory: true,
                    }
                }
            },
            {
>>>>>>> d40141f636819437d075ff89c0c2d20fe065015f
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
<<<<<<< HEAD
        })
=======
        }),
        new AngularWebpackPlugin({
            tsconfig: "./tsconfig.json",
        }),
>>>>>>> d40141f636819437d075ff89c0c2d20fe065015f
    ],

};
