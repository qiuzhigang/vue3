import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home.vue'),
      meta:{
        title:'首页'
      }
    },
    {
      path: '/HelloWorld',
      name: 'hello',
      component: () => import('../components/HelloWorld.vue'),
      meta:{
        title:'hello'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
      meta:{
        title:'自己'
      }
    },
    {
      path: '/',
      name: 'prent',
      component: () => import('../public/Prent.vue'),
      meta:{
        title:'首页'
      }
    },
    {
      path: '/chlid',
      name: 'chlid',
      component: () => import('../public/chlid.vue'),
      meta:{
        title:'首页'
      }
    },
    {
      path: '/Prent1',
      name: 'prent1',
      component: () => import('../public/Prent1.vue'),
      meta:{
        title:'首页'
      }
    },
    {
      path: '/chlid1',
      name: 'chlid1',
      component: () => import('../public/chlid1.vue'),
      meta:{
        title:'首页'
      }
    },
    {
      path: '/father',
      name: 'father',
      component: () => import('../public/father.vue'),
      meta:{
        title:'首页'
      }
    },
    {
      path: '/nofather',
      name: 'nofather',
      component: () => import('../public/nofather.vue'),
      meta:{
        title:'首页'
      }
    }
    
  ]
})
