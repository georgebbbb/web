FrontEnd
===
###[node.js](http://nodejs.org/)
Node.js® is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications.

Node.js 用来方便地搭建快速的，易于扩展的网络应用。

Node.js的出现促进了前端在近几年的快速发展
###[npm](https://www.npmjs.com/)
##
###[bower](http://bower.io/)

自动化
---

###[grunt](http://gruntjs.com/)
The JavaScript Task Runner<br/>
avaScript世界的构建工具

测试、检查、合并、压缩、格式化、部署文件生成，并监听文件在改动.

NPM 10706

package.json  列出各种任务所依赖的插件。
Gruntfile.js  任务`配置`文件。

###[gulp](http://gulpjs.com/)
Automate and enhance your workflow<br/>
自动化和提高您的工作流程

通过把API降到最少，你能在很短的时间内学会Gulp。（API 5个）<br/>
Gulp相比Grunt更有设计感，核心设计基于Unix流的概念，通过管道连接，不需要写中间文件。<br/>

一个基于流的构建系统。

pipe 管道

水流

[插件列表](http://gratimax.net/search-gulp-plugins/)

NPM 3959


[npmjs-gulp](https://www.npmjs.com/package/gulp)

##

###[jade](http://jade-lang.com/)

###[sass](http://sass-lang.com/)

###[coffeescript](http://coffeescript.org/)

##

模块化
---

###[requirejs](http://requirejs.org/)
AMD（Asynchronous Module Definition 异步模块定义）规范 ，主要用于浏览器端

CommonJS规范 模块的同步加载，主要用于服务器端，即node.js环境。

requirejs

① 实现javascript异步加载，避免页面假死

② 管理模块之间的依赖性，便于代码编写与维护（这是重点啊）

###[seajs](http://seajs.org/docs/)

###[browserify](http://browserify.org/)
Browserify 可以让你使用类似于 node 的 require() 的方式来组织浏览器端的 Javascript 代码，通过预编译让前端 Javascript 可以直接使用 Node NPM 安装的一些库。

Browserify 跑在浏览器上的Node程序。

神器，做WebApp就更加方便了。

##
###[AngularJS](https://angularjs.org/)

Action 功能 操作

Controller 控制器

Model 模型

View 视图

###[REACT](http://facebook.github.io/react/)
Action
Dispatcher 是中心枢纽，管理着Flux应用中的所有数据流。
Store 包含了应用的所有数据
Action
View

当Action触发时，Dispatcher决定了Store如何更新。
当Store变化后，View同时被更新，
  还可以生成一个由Dispatcher处理的Action。

[Facebook：MVC不适合大规模应用，改用Flux](http://www.linuxeden.com/html/news/20140519/151836.html)

.
---

animate.css
D3.js
SVG