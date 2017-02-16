const webpack = require("webpack");
const WebpackNotifierPlugin = require('webpack-notifier');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require("path");
const DIST_FOLDER = 'dist';

module.exports = {
	entry: './Scripts/app/App.tsx',
	output: {
		filename: 'Scripts/app/bundle.js'
	},
	resolve: {
        extensions: ['', '.Webpack.js', '.web.js', '.ts', '.js', '.tsx']
	},
	plugins: [
        //new ExtractTextPlugin('vendor.css', {
        //    allChunks: true,
        //    disable: NODE_ENV !== 'production'
        //}),
        //new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.js"),
        //new webpack.ProvidePlugin({
        //    //$: 'signalr',
        //    //$: 'jquery',
        //    //$: 'jquery-validation',
        //    //jQuery: 'jquery'
        //    _: 'lodash',
        //    moment: 'moment',
        //    math: 'mathjs',
        //    html2canvas: "html2canvas",
        //}),
        //new webpack.DefinePlugin({
        //    'process.env': {
        //        'NODE_ENV': JSON.stringify(NODE_ENV)
        //    }
        //}),
        //new webpack.HotModuleReplacementPlugin(),    // for dev
        //new webpack.NoErrorsPlugin(),
        //new WebpackNotifierPlugin(),
        //new webpack.DllReferencePlugin({
        //    context: __dirname,
        //    manifest: require('./Scripts/dll/manifest.json'),
        //}),
        new CleanWebpackPlugin([DIST_FOLDER], {
            "verbose": true
        })
	],
    devtool: 'source-map',
	//devtool: 'cheap-module-eval-source-map',
    //devtool: 'inline-eval-cheap-source-map',
    module: {        
	    //preLoaders: [
        //    { test: /\.ts(x?)$/, loader: "tslint", exclude: [/api.ts/] }
	    //],
        loaders: [
            {
                test: /\.tsx?$/,
                exclude:    /(node_modules|bower_components)/,
                loader:'ts-loader'
            },
            //{ test: /\.css$/, loader: "style!css" },
            //{ test: /\.ts(x?)$/, loader: 'ts-loader' }  // for production
            {
                test: /\.ts(x?)$/,
                loaders: ['react-hot', 'awesome-typescript-loader'],
                include: path.join(__dirname, '/TypeScripts/src')
            },
            {
                test: /\.js(x?)$/,
                loaders: ['react-hot', 'awesome-typescript-loader?doTypeCheck=false&useBabel=true&useWebpackText=true'],
                include: path.join(__dirname, '/TypeScripts/src')
            },
            //{ test: /\.tsx?$/, loader: 'ts-loader?compiler=ntypescript' }
            {
                include: /\.json$/,
                loaders: ["json-loader"]
            },
            //{
            //    test: /\.css$/,
            //    loader: ExtractTextPlugin.extract(
            //        'style-loader',
            //        //'css-loader?modules&importLoaders=1&localIdentName=[local]!postcss-loader'
            //        'css-loader!postcss-loader'
            //    ),
            //},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
	    ]
	},
}
console.log("am i here?");