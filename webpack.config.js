
let path = require('path')
let webpack = require('webpack')

//在内存中根据指定的末班页面，生成一份内存中的首页，同时自动把打包好的bundle注入到页面底部
//如果要配置插件，需要在导出的对象中，挂载一个plugin节点
let htmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: path.join(__dirname,'./src/main.js'),//入口文件
    output:{
        path:path.join(__dirname,'./dist'),//输出路径
        filename:'bundle.js'
    },
    plugins:[ //所有webpack 插件的配置节点
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),//指定模板文件路径
            filename:'index.html'//设置生成的内存页面的名称
        }),
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            $:"jquery",
            JQuery:"jquery"
        })
    ],
    module:{//配置所有第三方loader模块的
        rules:[//第三方模块的匹配规则
            {test:/\.css$/,use:['style-loader','css-loader']},//处理css文件的loader
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},//处理less文件的loader
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},//处理scss文件的loader
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader?limit=7000&name=[hash:8]-[name].[ext]'},//处理图片路径的loader
            //limit 给定的值 是图片的大小，单位是Byte 如果我们引用的图片大于或等于给定的limit值，则不会被转为base64格式的字符串，如果小于给定值，则会被转为base64字符串
            {test:/\.(ttf|eot|svg|woff|woff2)$/,use:'url-loader'},//处理字体的loader

            {test:/\.js$/,use:'babel-loader',exclude:/(node_moudules|bower_components)/},//配置babel来转换高级RS语法
            { test: /\.vue$/, use: 'vue-loader' }, // 处理 .vue 文件的 loader
        ]
    }

}