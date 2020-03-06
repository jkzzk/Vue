1.安装路由
    npm install --save vue-router
2.引用
    import router from 'vue-router'
    Vue.use(router);
3.显示
    <router-view/> 标签
4.跳转
    <router-linke to="路由地址">
5.嵌套
    routes : [
        {
            path : "",
            name : "",
            component : 组件名称,
            redirect : 默认重定向为子路由组件,
            children : [
                {
                    path : "",
                    name : "",
                    component : 组件名称
                }，......
            ]
        }
    ]
6.传参
    传递：
        1.<router-linke :to="{ name='路由名称', params='参数键值，键 = 值'}">
        2.路由设置上path后加 /:键名，如 path ： "/:count"
    接受： $route.params.键  获取该键对应的值
7.路由高亮
    <router-link exact />
    1.可以设置router-link-active的样式，当路由被点击时，应用该样式
    但是所有被点击过的路由都会应用该样式，所以加一个该属性 exact，
    精确匹配点击时间，应用router-link-active样式，从而达到路由高亮的效果
    2.自定义选中样式
        在全局配置下设置点击激活样式的类名
            linkActiveClass 与routes同级

