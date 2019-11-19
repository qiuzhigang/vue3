import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {    // 相当于组件中的data 专门用来存储数据的。
    mont:'阿湖是狗'
  },
  mutations: {
      instare(state,c){
        console.log(c)
        state.mont = '阿湖不是够'+c;
      }
  },
  getters:{
      // 注意，这里的getters 只负责对外提供数据，不负责修改数据，如果想修改state里面的数据，请找mutations
     // 外面痛过这个方法来拿值   $store.getters.opter 不在通过  $store.state.值  来取值了。
     // getters 和组件中的过滤器比较相似，因为过滤器和 getters都没有修改过原数据，把元数据提供一成包裹，提供给调用者。
     // getters 和 computed 比较像，只要state中的数据发生改变，那么getter也正好引用了这个数据，那么就会立即出发 getters 并重新求值。
        opter:function(state){
            return '123456阿湖zz';
       }

  },
  actions: {

  }
})
