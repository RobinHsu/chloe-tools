const { resolve } = require('./utils/projectHelper');

module.exports = function(modules) {
  const plugins = [
    resolve('@babel/plugin-transform-member-expression-literals'), // 可以在属性里使用保留字
    resolve('@babel/plugin-transform-object-assign'), // Object.assign使用自实现
    resolve('@babel/plugin-transform-property-literals'), // 确保在对象属性键中引用保留字
    [
      resolve('@babel/plugin-transform-runtime'),
      {
        helpers: false
      }
    ],
    resolve('@babel/plugin-transform-spread'), // 编译ES2015扩展到ES5
    resolve('@babel/plugin-transform-template-literals'), // 模版字符串
    resolve('@babel/plugin-proposal-class-properties'), // 类静态属性
    resolve('@babel/plugin-proposal-export-default-from'), // 默认导出
    resolve('@babel/plugin-proposal-export-namespace-from'), // 命名空间导出 form * as xx import 'xx'
    resolve('@babel/plugin-proposal-object-rest-spread'),
    [
      resolve('@babel/plugin-proposal-decorators'), // 注解
      {
        decoratorsBeforeExport: true
      }
    ]
  ];

  return {
    presets: [
      resolve('@babel/preset-react'),
      [
        resolve('@babel/preset-env'),
        {
          modules,
          targets: {
            browsers: [
              'last 2 versions',
              'Firefox ESR',
              '> 1%',
              'id >= 9',
              'iOS >= 8',
              'Android >= 4'
            ]
          }
        }
      ]
    ],
    plugins
  };
}
