[toc]
# npm指令
> 这里普及一下npm常用指令。
```
npm install <package-name>
npm uninstall <package-name>
npm update <package-name>
```
> 这里着重说一下参数
```
common options: [-S|--save|-D|--save-dev|-O|--save-optional] [-E|--save-exact] [--dry-run]
// -S, --save 安装包信息将加入到dependencies（生产阶段的依赖)
// -D, --save-dev 安装包信息将加入到devDependencies（开发阶段的依赖），所以开发阶段一般使用它
// -O, --save-optional 安装包信息将加入到optionalDependencies（可选阶段的依赖）
// -E, --save-exact 精确安装指定模块版本
// 全局安装（global）,使用 -g 或 --global
```

# 初始化项目中遇到的问题
1. 引入Bootstrap
> 这是因为Bootstrap4.1.0依赖了jQuery和popper.js
```
$ npm install jquery --save-dev
$ npm install bootstrap --save-dev
$ npm install popper.js --save-dev

```
