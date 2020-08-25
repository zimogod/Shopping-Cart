import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../home.vue'),
    // 默认显示列表页
    redirect:'/list',
    children:[
      {
        path:'list',
        name:'list',
        alias:'列表',
        icon:'point-gift-o',
        component:() => import('../client/list.vue')
      },
      {
        path:'active',
        name:'active',
        alias:'活动',
        icon:'underway-o',
        component:() => import('../client/active.vue')
      },
      {
        path:'cart',
        name:'cart',
        alias:'购物车',
        icon:'shopping-cart-o',
        component:() => import('../client/cart.vue')
      },
      {
        path:'mine',
        name:'mine',
        alias:'我的',
        icon:'manager-o',
        component:() => import('../client/mine.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
