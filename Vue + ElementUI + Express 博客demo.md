# Vue + ElementUI + Express 博客demo

## 1. 创建Vue-cli项目

## 2. 使用vue add element添加elementUI

## 3. 具体的Vue项目

1. 项目运行在8080端口上，创建组件component后，使用elementui直接对页面进行相应的渲染

elementui官网

https://element.eleme.io/#/zh-CN

2. 部署路由route.js文件，将基础路由配置完成

## 4. Node项目

	1. 项目运行在3000端口上面，定义接口以供调用，因为和8000端口号不同，使用cors包进行跨域访问
 	2. 使用mongoose定义模型Article，进行相关的操作
 	3. 定义各种接口，分别完成创建，修改，删除，展示的操作
 	4. 创建使用post，修改push， 删除delete， 展示get
 	5. 请求数据使用axios包，可以封装一个network，也可以直接在Vue的原型链上定义一个$http，方便全局上都可以进行相关的调用