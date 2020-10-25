
// CommonJS模块规范 只有 node 支持该导出
const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    app: './app.js',
    main: './main.js'
  }, // 入口文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]-[chunkhash].js',
    publicPath: 'http://gulu.top/' // 上线前配置
  },
  plugins: [new htmlWebpackPlugin({
    template: 'index.html',
//    filename: 'inex-[hash].html', //修改生成的模板名称
    inject: 'head', // 修改生成的 js 文件插入的位置
    title: 'webpack.config.js 添加参数，通过 ejs 模板在 index.html 中引用', // 这里的参数要在 html 模板中引用
    date: new Date(),
    minify: {
      'collapseWhitespace': true, // 压缩删除空格
      'removeComments': true, // 压缩去除注释
    }
  })]
}
