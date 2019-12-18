#项目初始化
  1.安装vue-cli
      npm install -g vue-cli
  2.初始化项目
      vue init webpack my-project
  3.进入项目
      cd my-project
  4.安装依赖
      npm install
  5.启动vue项目
      npm run dev
#目录结构
  1.index.html 项目根目录视图
  2..postcsssrc.js postcss 的配置文件
  3.static静态文件目录
  4.config 服务器配置
  5.build webpack和vue的配置
#模板语法
  Vue模板包含三个部分
      1.template：视图
      2.script：逻辑
      3.style：样式
  1.Mustache：模板
    表现形式: {{语法}}
      注意：
        1.语法只能显示单行表达式
        2.不能作用在html属性上
  2.VUE的基本指令
    v-html：渲染文本，也可以渲染html文本
    v-text：渲染文本，只能渲染普通文本
    v-bind：动态绑定属性
    可有简写为冒号 :
    条件渲染：
      v-if：
      v-else：
      template标签之承载内容，不渲染为组件
      v-if-else：
      v-show：
        与v-if效果一样，但是v-if为懒加载，条件不成立时，不会将其内容加载进html页面，而v-show会将其中内容加载进html页面
      并通过dispaly:none; 该属性将其隐藏
    列表渲染：
      v-for：循环一个数组
      每个列表或元素最好加一个key值
