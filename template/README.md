# {{ name }}

> {{ description }}

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```


# 内置功能
- 页面
  - 登陆页面
  - 主页面
  - 错误页面
- 布局
  - 默认布局，基于后台**厂**子型布局
  - 视口布局，整屏布局，用来处理404，登陆等
- 环境变量
  -  开发 `dev`
  -  调试 `test`
  -  预发布 `uat`
  -  生产 `prod`
- 导航菜单
  - 菜单权限
  - 菜单小红点、总数角标
  - 菜单选中，展开
- 路由
  - 权限列表
  - 路由和菜单关联
  - 无权限路由`700`
  - 不存在路由`404`
  - 刷新后选中菜单
- 部署
  - 生产环境移除`console.error`和`console.warn`

