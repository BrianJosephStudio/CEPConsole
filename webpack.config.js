import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { VueLoaderPlugin } from 'vue-loader';
import { fileURLToPath } from 'url';
import path from "path"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const webpackConfig = {
    target: "web",
    entry: './src/main.ts',
    output: {
        filename: 'bundle.js',
        // chunkFilename: "sourcemap",
        path: path.resolve(__dirname, "client"),
    },
    // devtool: "source-map",
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
        extensions: ['.js', '.ts', '.vue'],
    },
    externals: {
        'fs/promises': 'commonjs2 fs/promises',
        'path': 'commonjs2 path',
        'os': 'commonjs2 os',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.ts$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/], // This line specifies the appendTsSuffixTo option
                    },
                },
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            '__VUE_OPTIONS_API__': true, // or false, depending on your usage
            '__VUE_PROD_DEVTOOLS__': false,
        })
    ],
    devServer: {
        port: 3001,
    },
};

export default webpackConfig;
