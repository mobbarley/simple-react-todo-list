const path = require('path');
const webpack = require('webpack');

module.exports = {

    entry: path.resolve(__dirname, 'src') + '/app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        rules: [
             {
                test: /\.jsx?$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                options: {
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
              use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
};
