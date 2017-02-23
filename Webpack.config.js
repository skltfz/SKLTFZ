'use strict';

const webpack = require("webpack");
const glob = require("glob");
const path = require('path');
const pkg = require('./package');
const WebpackNotifierPlugin = require('webpack-notifier');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const DIST_FOLDER = 'dist';
const port = 8080;
const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : 'development';

//function getEntries() {
//    const files = glob.sync("./TypeScripts/src/entries/**/!(*.d).ts?(x)");
//    let entries = {}, entry, dirname, basename;

//    for (var i = 0; i < files.length; i++) {
//        entry = files[i];
//        dirname = path.dirname(entry).replace(/TypeScripts\/src/i, '');
//        basename = path.basename(entry, '.tsx');
//        basename = path.basename(basename, '.ts');

//        // entries[path.join(dirname, basename)] = [entry]; // for production
//        entries[path.join(dirname, basename)] = buildEntryPoint(entry);
//    }

//    return entries;
//}

//var entries = getEntries();

module.exports = {
        entry: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './Scripts/onepage/App.tsx',
        ],
    	output: {
    	    path: path.resolve(__dirname, './dist'),
    	    publicPath: 'http://localhost:8080/dist/', //dev
    	    filename: '[name].js',
            port: port,	   
    	},
    plugins: [
        new ExtractTextPlugin('vendor.css', {
            allChunks: true,
            disable: NODE_ENV !== 'production'
        }),
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.js"),
        new webpack.ProvidePlugin({
            //$: 'signalr',
            //$: 'jquery',
            //$: 'jquery-validation',
            //jQuery: 'jquery'
            _: 'lodash',
            moment: 'moment',
            math: 'mathjs',
            html2canvas: "html2canvas",
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(NODE_ENV)
            }
        }),
        //new webpack.HotModuleReplacementPlugin(),    // for dev
        new webpack.NoErrorsPlugin(),
        new WebpackNotifierPlugin(),
        //new webpack.DllReferencePlugin({
        //    context: __dirname,
        //    manifest: require('./Scripts/dll/manifest.json'),
        //}),
        new CleanWebpackPlugin([DIST_FOLDER], {
            "verbose": true
        })
    ],
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js']
    },
    devtool: 'source-map',
    module: {
        preLoaders: [
            { test: /\.ts(x?)$/, loader: "tslint", exclude: [/api.ts/] }
        ],
        loaders: [
            //{ test: /\.css$/, loader: "style!css" },
            //{ test: /\.ts(x?)$/, loader: 'ts-loader' }  // for production
            {
                test: /\.ts(x?)$/,
                loaders: ['react-hot', 'awesome-typescript-loader'],
                include: path.join(__dirname, './Scripts/onepage')
            },
            {
                include: /\.json$/,
                loaders: ["json-loader"]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'style-loader',
                    //'css-loader?modules&importLoaders=1&localIdentName=[local]!postcss-loader'
                    'css-loader!postcss-loader'
                ),
            },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
        ]
    },
    tslint: {
        emitErrors: false,
        failOnHint: false
    },
    postcss: function () {
        return [
            autoprefixer
        ];
    }
}

//if (process.env.NODE_ENV === 'production') {
//    console.log("reason to wrong?");
//    module.exports.devtool = '#source-map'
//    // http://vue-loader.vuejs.org/en/workflow/production.html
//    module.exports.plugins = (module.exports.plugins || []).concat([
//      new webpack.DefinePlugin({
//          'process.env': {
//              NODE_ENV: '"production"'
//          }
//      }),
//      new webpack.optimize.UglifyJsPlugin({
//          sourceMap: true,
//          compress: {
//              warnings: false
//          }
//      }),
//      new webpack.LoaderOptionsPlugin({
//          minimize: true
//      })
//    ])
//}
