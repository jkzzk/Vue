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
#VUE基础
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
    事件监听
      v-on : 监听事件的指令
      methods ： 事件处理放在其中，与data同级
        this
            1.使用该关键字来索引data中的数据
            2.this为该组件
        可以传递参数
            v-on:click="getItemInfo(index)"
            事件的简写方式：
                @代替v-on:
        事件修饰符：
            .stop : 阻止时间传播
            .once : 事件只生效一次
        按键监听
            给出一些按键的别名
            如：
                .enter
                .delete (捕获“删除”和“退格”键)
                .esc
       数组更新检测：数据的改变会引起视图的改变（MVVM框架的优势）
            一些变异方法才可以引起视图更新，而一些替换数组方法不会引起视图更新
       显示过滤/排序后的结果：
            filter方法
       计算属性和侦听器 :
            computed ： 计算属性 与 data和methods属于同级别
            计算属性会根据依赖进行缓存，如果值没有发生改变，其不会再次计算，这与methods是不同的
            表单输入绑定： v-model = 后面跟获取值存储的变量
                修饰符：
                    1. lazy  失去焦点后获取
                    2. number 输入后转为数字，不是数字不作处理
                    3. trim 去掉输入的前后空格
            watch : 侦听器
                - 可以监听变量值
       绑定样式
            v-bind:class = "{呈现1,呈现2,呈现3}"
            绑定样式可以是数组 [{呈现1},{呈现2},{呈现3}...]
            写在computed中也可以，返回对象
            将对象写在data区域也可以
            写成字符串也可以



