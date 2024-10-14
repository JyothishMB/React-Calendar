const path = require("path")

module.exports = {
    entry: "/src/calendar-month.js",
    mode: 'production',
    output: {
        path: path.resolve("dist"),
        filename: "main.js",
        libraryTarget: "commonjs"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-react"]
                }
            },
            {
                test: /\.css?$/,
                use: ["style-loader","css-loader"]
            }
        ]
    },
    externals: {
        "react": "react",
        "react-dom": "react-dom"
     },
}