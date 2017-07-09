/**
 * Created by ranwei on 2017/7/4.
 */


//在webpack的配置文件中 ，通常将配置暴露在接口中。
var path=require('path');
var webpack=require('webpack');
var UglifyJsPlugin= webpack.optimize.UglifyJsPlugin;
module.exports={
    //定义入口文件
    entry:'./js/app.js',
    output:{
        filename:'dist/bundle.js'
    },
    module:{
        rules:[
            {
                //加载css
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                //加载img
                test:/\.(gif|png|svg|jpg)$/,
                use:'url-loader'
            }


        ],
        plugins:[
            //一个成员代表一个插件。
            new UglifyJsPlugin(
                {
                    compress:{
                        warning:false
                    }
                }
            )
        ]
    }
};