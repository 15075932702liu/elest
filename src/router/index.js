import Vue from 'vue'
import VueRouter from 'vue-router'
import Root from '../views/Root.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Root',
    component: Root,
    children:[
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
      },
      {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: '/find',
        name: 'find',
        component: () => import(/* webpackChunkName: "find" */ '../views/find.vue')
      }
    ]
  },
  {
    path: '/del/:id',
    name: '/del',
    component: () => import(/* webpackChunkName: "del" */ '../views/del.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
