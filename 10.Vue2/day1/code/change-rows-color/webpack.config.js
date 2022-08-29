const path = require("path");

const HtmlPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlPlugin({
    template: './src/index.html',
    filename: './index.html'
})



module.exports = {
    // 用来构建模式   development 和 production  开发或生产
    mode: 'development',

    // 指定入口处理文件
    entry: path.join(__dirname, "./src/index1.js"),

    // 指定webpack输出js
    output: {
        path: path.join(__dirname, "./dist"),
        filename: 'bundle.js'
    },

    // 使用html plugin
    plugins: [htmlPlugin],

    // 使用节点devServer
    devServer: {
        // 首次打包成功后，自动打开浏览器
        open: true,
        // 在 http 协议中，如果端口号是 80，则可以被省略
        port: 80,
        // 指定运行的主机地址
        host: '127.0.0.1'
    },
    module: {
        rules: [
            // 定义了不同模块对应的 loader
            // 优先转交给最后一个loader：css   处理完之后转交给style-loader
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            // 处理 .less 文件的 loader
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            // 处理图片文件的 loader
            // 如果需要调用的 loader 只有一个，则只传递一个字符串也行，如果有多个loader，则必须指定数组
            // 在配置 url-loader 的时候，多个参数之间，使用 & 符号进行分隔
            { test: /\.jpg|png|gif$/, use: 'url-loader?limit=470&outputPath=images' },
            // 使用 babel-loader 处理高级的 JS 语法
            // 在配置 babel-loader 的时候，程序员只需要把自己的代码进行转换即可；一定要排除 node_modules 目录中的 JS 文件
            // 因为第三方包中的 JS 兼容性，不需要程序员关心
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    }
}