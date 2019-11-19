import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
Vue.config.productionTip = false,


// 设置路由拦截
router.beforeEach((to,from,next) =>{

  /*路由变化修改title*/
  if(to.meta.title){
      document.title=to.meta.title
   }
   next()
   
  }),



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
