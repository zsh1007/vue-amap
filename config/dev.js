const path = require('path');
const webpack = require('webpack');
module.exports = {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        // 启动devServer，不会在本地生成文件，所有文件会编译在内存中(读取速度快)
        contentBase: path.join(__dirname, '../dist'), //静态文件根目录
        overlay: true, // 错误信息直接显示在浏览器窗口中
        port: 1556,
        publicPath: '/',
        inline: true, // 实时重载的脚本被插入到你的包(bundle)中，并且构建消息将会出现在浏览器控制台
        hot: true, // 配合webpack.NamedModulesPlugin、webpack.HotModuleReplacementPlugin完成MHR
        host: '0.0.0.0', // 设置为0.0.0.0并配合useLocalIp可以局域网访问
        useLocalIp: true, // 使用本机IP打开devServer，而不是localhost
        open: 'chrome',
        historyApiFallback: true,
    },
};
