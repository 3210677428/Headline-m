/*PostCss的配置文件
PostCss是基于Node.js运行的一个处理css工具
所以他的配置文件也是运行在node.js中 */
// 导出对象
 module.exports = {
    //  配置相关使用的插件
    plugins: {
    //     // 自动添加浏览器厂商前缀，兼容不同浏览器
    //     // VueCLI默认配置了autoprefixer
    //   autoprefixer: {
    //     browsers: ['Android >= 4.0', 'iOS >= 8'],
    //   },
    //   px转rem
      'postcss-pxtorem': {
        //   设计稿/10
        rootValue: 37.5,
        // *通配所有带px属性的
        propList: ['*'],
      },
    },
  }