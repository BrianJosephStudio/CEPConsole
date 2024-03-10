import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';
import path from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const webpackConfig = {
    target: "web",
    entry: './src/index.tsx',
    output: {
        filename: 'CEPTerminal.js',
        path: path.resolve(__dirname, "client"),
    },
    resolve: {
        alias: {
            '@root': __dirname,
            '@types': path.resolve(__dirname, 'types'),
            '@classes': path.resolve(__dirname, 'src', 'app-logic', 'classes'),
            '@utils': path.resolve(__dirname, 'src', 'app-logic', 'utils'),
            '@components': path.resolve(__dirname, 'src', 'components'),
            '@pages': path.resolve(__dirname, 'src', 'pages'),
            '@public': path.resolve(__dirname, 'src', 'public'),
            '@mocks': path.resolve(__dirname, 'src', 'app-logic', 'utils', 'mocks'),
        },
        extensions: ['.tsx', '.ts', '.js', 'jsx'],
    },
    // externals: {
    //     'fs/promises': 'commonjs2 fs/promises',
    //     'path': 'commonjs2 path',
    //     'os': 'commonjs2 os',
    // },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
    devServer: {
        port: 3001,
    },
};

export default webpackConfig;
