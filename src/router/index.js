import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/song/:action',
    name: 'AddAndUpdate',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AddAndUpdate.vue'),
    props: true,
    // beforeEnter: (to, from, next) => {
    //   console.log(`local route interceptor, from: ${from} to ${to}`)
    //   next()
    // }
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=> {
  console.log(`Global route interceptor, from: ${from} to ${to}`)
  // Could verify if the user is logged, if not it could  redirect to login page -> nest(/login)
  next()
})

export default router
