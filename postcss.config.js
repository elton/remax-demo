// 参考示例
// https://github.com/sonofmagic/weapp-tailwindcss-webpack-plugin/blob/main/demo/remax-app/postcss.config.js
module.exports = ({ options }) => ({
  plugins: {
    // 继承 remax 默认的插件配置
    ...options.plugins,
    tailwindcss: {},
    autoprefixer: {},
    'postcss-rem-to-responsive-pixel/postcss7': {
      rootValue: 32,
      propList: ['*'],
      transformUnit: 'rpx',
    },
  },
});
