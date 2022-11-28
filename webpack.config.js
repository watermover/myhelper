
var path = require('path');

module.exports = {
    entry: "./app/app.jsx", // входная точка - исходный файл
    mode: "development",
    output: {
        path: path.resolve(__dirname, './public'),     // путь к каталогу выходных файлов - папка public
        filename: "bundle.js"       // название создаваемого файла
    },
    watch: true, // следить за изменениями в файлах
    watchOptions: {
        aggregateTimeout: 100 // т.е. пересобирать файлы начнет только спустя указанное в миллисекундах время (в данном случае 100)
    },
    devServer: {
        historyApiFallback: true,
        port: 8081,
        open: true
    },
    module: {
        rules: [   //загрузчик для jsx
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]    // используемые плагины
                }
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
        ]
    }
}