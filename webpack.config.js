const path = require('path');

module.exports = {

    entry: path.resolve(__dirname, 'src') + '/app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/app'),
                loader: 'babel-loader',
                query: {
                        "presets": [
                            ["env", {
                                "loose": true,
                                "modules": false,
                                "useBuiltIns": true,
                                "debug": true,
                                "include": ["transform-es2015-classes"]
                            }],
                            "react"
                        ],
                        "plugins": [
                            "babel-plugin-transform-es2015-parameters",
                            "babel-plugin-transform-es2015-destructuring"
                        ]
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ],
        rules: [
            {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
};
