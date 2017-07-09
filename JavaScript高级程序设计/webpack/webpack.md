
## webpack
    1. 基于模块化开发的一个工程化开发工具。在webpack中，任何资源（image，css）都可以作为模块加载进来。
    2. webpack模块化规范基于Common.js，但也支持CMD、AMD规范。
    3. webpack是由react推动的（react文件都是呦webpack编译的）。

## 使用webpack

    - 安装webpack。
        - 全局安装  npm install -g webpack;
        - 局部安装  npm install --save-dev webpack
        - 安装特定版本 npm install --save-dev webpack@<version>
        - 查看版本  npm -v
        - *每使用一个插件时,都需要npm install 一下该插件。*

    1. 安装资源
       - 加载CSS          css-loader,style-loader.
       - 加载图片，字体     file-loader.
       - 加载数据          csv-loader,xml-loader.



    2. webpack.config.js 中
        1. entry


        *定义入口文件，可以是字符串，可以是对象（key表示发布的入口文件名称，value表示项目中开发的真实地址）*

        2. output

        *定义发布的位置*
        *值是一个对象。path，定义发布的目录，不定义该属性路径可以写在filename（文件发布的地址）中*
        *当是一个对象的时候，filename 的value为[name].js*
        1.rules配置：
           - 加载CSS
             "
                {
                  test: /\.css$/,
                  use: [
                    'style-loader',
                    'css-loader'
                  ]
                },
             "
           - 加载图片
             "
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [
                        'file-loader'
                    ]
                },
             "
             - 加载字体
             "
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/,
                    use: [
                        'file-loader'
                    ]
                }
             "
## webpack-dev-server
    - 安装
        npm install --save-dev webpack-dev-server

        默认情况下，安装的包都会在node_module文件夹下。





