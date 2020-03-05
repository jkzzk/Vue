1.Axios库
    1.文档
        -中文 ： http://www.kancloud.cn/yunye/axios
    2.安装
        -npm install axios
    3.使用
        -引入
            import Axios from "axios";
        -挂在到原型上
            Vue.prototype.$axios = Axios;
        -调用
            created() {  //get请求
              this.$axios.get("http://localhost:8096/login",{
                params : {
                  username : "admin",
                  password : "123456"
                }
              })
              .then(function (res) {
                  console.log(res.data);
              })
              .catch(function (error) {
                  console.log(error);
              })
            }
            --post 请求
                axiios接受的post的参数请求格式，只能是form-data格式
                    form-data格式：?name="even"&age=12
                    x-www-form-urlencoded格式：{name="even",age=12}
    4.拦截器
        拦截请求之前和响应之后
            // 添加请求拦截器
            Axios.interceptors.request.use(function (config) {
              return config;
            }, function (error) {
              // 对请求错误做些什么
              return Promise.reject(error);
            });
            // 添加响应拦截器
            Axios.interceptors.response.use(function (response) {
              console.log(response);
              return response;
            }, function (error) {
              // 对响应错误做点什么
              return Promise.reject(error);
            });
    5.跨域问题解决
        配置config index.js
            proxyTable: {
              "/api" : {
                target : "http://localhost:8096",
                changeOrigin : true,
                pathRewrite : {
                  '^/api' : ''
                }
              }
            }
        设置代理
            Vue.prototype.HOST = "/api";
        请求时：
            url = this.HOST + "地址"
    6.
