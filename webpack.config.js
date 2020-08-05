const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('style.css');

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }]
        },
        plugins: [

        ],
        devtool: 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    }
}

// ------------------------------------------------------------------------------------

// const path = require('path')
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// module.exports = (env) => {
//     const isProduction = env === 'production';
//     const CSSExtract = new ExtractTextPlugin('style.css');

//     return {
//         entry: './src/app.js',
//         output: {
//             path: path.join(__dirname, 'public', 'dist'),
//             filename: 'bundle.js'
//         },
//         module: {
//             rules: [{
//                 loader: 'babel-loader',
//                 test: /\.js$/,
//                 exclude: /node_modules/
//             }, {
//                 test: /\.s?css$/,
//                 use: ExtractTextPlugin.extract({
//                     fallback: 'style-loader',
//                     use: [
//                         'style-loader',
//                         {
//                             loader: 'css-loader',
//                             options: {
//                                 sourceMap: true
//                             }
//                         },
//                         {
//                             loader: 'sass-loader',
//                             options: {
//                                 sourceMap: true
//                             }
//                         }
//                     ]
//                 })
//             }]
//         },
//         plugins: [
//             new ExtractTextPlugin("style.css", {
//                 disable: false,
//                 allChunks: true
//             })
//         ],
//         devtool: isProduction ? 'source-map' : 'inline-source-map',
//         devServer: {
//             contentBase: path.join(__dirname, 'public'),
//             historyApiFallback: true,
//             publicPath: '/dist/'
//         }
//     }
// }

