const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:'./vue-router/main.js',  //指定打包的入口文件
    output:{
        path:__dirname+"/dist", //__dirname是webpack文件所在路径的绝对路径
        filename:"build.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/, // 通过正则表达式匹配所有以.css后缀的文件
                use: [ // 要使用的加载器，这两个顺序一定不要乱
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: "首页",  //生成的页面标题<head><title>首页</title></head>
            filename: 'index.html', // dist目录下生成的文件名
            template: './vue-router/index.html' // 我们原来的index.html，作为模板
        })
    ]
}