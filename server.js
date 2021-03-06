let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let config = require('./webpack.config.js');


let server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    proxy: config.devServer.proxy,
    contentBase: './dist',
		hot: true,
    stats: { colors: true },
    // hot: true,
    // historyApiFallback: true,
}).listen(3000, 'localhost', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Listening at localhost:3000');
});
