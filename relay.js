var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./Webpack.config');


//new WebpackDevServer(webpack(config), {
//    // https://webpack.github.io/docs/webpack-dev-server.html
//    publicPath: config.output.publicPath,
//    hot: true,
//    historyApiFallback: true,
//    quiet: false,//???
//    noInfo: false,//???
//    // https://webpack.js.org/configuration/stats/
//    stats: {
//        colors: true,
//        hash: false,
//        version: false,
//        timings: true,
//        assets: true,
//        chunks: false,
//        modules: false,
//        reasons: true,//???
//        children: true,//???
//        source: false,
//        errors: true,
//        errorDetails: true,
//        warnings: true,
//        publicPath: false,
//        cached: false
//    }
//}).listen(config.output.port, 'localhost', function (err, result) {
//    if (err) {
//        return console.log(err);
//    }

//    console.log(`Listening at http://localhost:${config.output.port}/`);
//});