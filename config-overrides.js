const { override, addLessLoader, fixBabelImports, addDecoratorsLegacy } = require('customize-cra');
module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@brand-primary': 'rgba(17, 211, 198, 1)',
      '@brand-primary-tap': 'rgba(17, 111, 98, 1)'
     }
  }), //antd定制主题
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    libraryDirectory: 'es',
    style: true
  }), //antd按需加载
  addDecoratorsLegacy() //配置装饰器
);