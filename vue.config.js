const px2rem = require('postcss-px2rem');
const postcss = px2rem({
  remUnit: 32   //基准大小 baseSize，需要和rem.js中相同
})

module.exports ={
    baseUrl:'/',       //根路径
    outputDir:"dist2", //构建输出打包目录 此时打包文件名为dist2
    assetsDir:"assets", // 静态资源目录（css js img font）
    lintOnSave:false, // 是否开启eslint 保存检测 会非常严谨。
    devServer:{
        open:true,   // 项目跑起来之后，自动跳转页面
        host:"localhost", //主机名字  locahost 或 127.0.0.0 或 真机测试 0.0.0.0
        port:9090,      // 端口号
        https:false,   // 如果为true 会有警告。
        hotOnly:false,   // 热更新。
        proxy:{
            //配置跨域
            '/api':{
                target:'http//:localhost:5000/api/',
                ws:true,  // 是否跨域
                changOrigin:true,
                pathRewrite:{
                    '^/api':''
                }

            }
        },
    },

  // 配置rem
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
 
  
};