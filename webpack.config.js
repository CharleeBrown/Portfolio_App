const path = require('path');
module.exports={
    entry:"./src/app.js",
    output:{
        filename:'./public/dist/awesome.js', 
        path:path.resolve(__dirname, 'dist'),
    }, 
    module:{
        rules:[
            {
                test: /\.scss$/,
                use:[
                    'style-loader',
                    'css-loader', 
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        // new BundleAnalyzerPlugin()
    ], 
    devServer:{
        static: path.join(__dirname, 'public'),
        port:3002
    }
};