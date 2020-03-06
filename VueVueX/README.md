Vuex(数据共享)
    1.安装
        npm install vuex --save--dev
    2.引入与创建stroe仓库
        import Vuex from 'vuex'
        const store = new Vuex.Store({
            state : {
              count : 10
            },
            //修改共享数据数据的方法
            mutations : {
              increment(state) {
                state.count++;
              }
            },
            //通过action层调用修改方法
            //Action 提交的是 mutation，而不是直接变更状态。
            //Action 可以包含任意异步操作。
            actions ： {
                increment (context) {
                  context.commit('increment')
                }
            },
            //获取共享数据时，进行顾虑或基础处理
            getters : {
              getState (state) {
                return state.count > 0 ? state.count : 0;
              }
            }
        });
    3.获取共享数值
        this.$store.state.count
