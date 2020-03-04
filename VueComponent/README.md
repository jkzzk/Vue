1.单位件组件
    -结构
        视图层 ： template，只能存在一个根元素
        逻辑层 ： script
        样式层 ： style
            scoped -- 声明局部样式
    -子父级组件
        .引入子组件
           1.import Son
           2.components 添加 Son
           3.视图层渲染 <Son />
        .子父级组件通信
            父 -> 子 ： 子通过props接收数据，父通过标签传递
                指定子组件获取的数据类型、是否必传、默认值（数组和对象是回调函数，reutrn一个默认值）
            子 -> 父 ： emit Event




