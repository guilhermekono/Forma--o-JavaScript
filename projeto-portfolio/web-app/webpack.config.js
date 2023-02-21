const path = require('path');

module.exports = {
    entry: ["babel-polyfill", "./src/index.js"],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js' 
    },
    module: {
        rules: [
            { 
                test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader/url" },
                    { loader: "file-loader" }
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                        postcssOptions: {
                            plugins: [
                            [
                                "postcss-preset-env",
                                {
                                // Options
                                },
                            ],
                            ],
                        },
                        },
                    },
                ]    
            },
           /* {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              }*/
            /*{
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            }*/
        ]
    },
    devServer: {
        static: path.resolve(__dirname, 'src'),
        port: 5003,
        open: true,
        hot: true
    }
};