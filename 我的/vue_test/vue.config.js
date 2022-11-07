module.exports = {
    //方式一
    // devServer: {
    //   proxy: 'http://localhost:5000'
    //   //写想要访问服务器的地址 不要写student
    //   //自动生成一个8080(前端当前页面)的中间服务器
    // }

    //方式二
    devServer: {
      proxy: {
        '/myserver': {
          target: 'http://localhost:5000',
          pathRewrite:{'^/myserver':''}//路径重写 /myserver变成空字符串 
          //写想要访问服务器的地址 不要写student
          //自动生成一个8080(前端当前页面)的中间服务器
          // ws: true, //支持websocket
          // changeOrigin: true //
        },



        //为什么名字是myserver2会出错?
        '/demo': {
          target: 'http://localhost:5001',
          pathRewrite:{'^/demo':''}
        },
        //配置多个代理


        // '/foo': {
        //   target: '<other_url>'
        // }
      }
    }
  }