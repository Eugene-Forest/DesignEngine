const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: './src/index.ts'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }, {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            }, {
                test: /\.(png|jpg|fnt|xml)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 80 * 1024,//80KB
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,//清空原来的输出
    },
    plugins: [new HtmlWebpackPlugin({
        filename: "index.html",//输出文件名
        template: "./public/index.html",//模板html
        inject: "head",//注入资源的位置
        chunks: ["main"],//注入资源的entry入口限定
    }),
        new MiniCssExtractPlugin()],
};