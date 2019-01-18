# Webpack4.x基础脚手架

## npm 命令
* `npm start`或则`npm run dev` 进入热开发模式
* `npm run build` 打包产品环境代码


## 规范
## 前言
* 正确使用const和let替代var
* 使用模板字符串`${this.data}`
* 箭头函数
* 使用Promise代替回掉，请多尽量使用async await语法
* 不能直接操作dom
* 静态资源引用不能使用绝对地址，请参考本项目的hello组件的图片引入方式

### 命名
* 文件全使用小写，并使用dash-case（单词之间使用'-'链接）命名方式
* components下每个组件应该有一个main.vue文件
* js代码使用camelCase（驼峰命名法）
* 组件声明使用dash-case如：`<app-nav></app-nav>`
* css类使用dash-case
* html元素的属性使用dash-case
