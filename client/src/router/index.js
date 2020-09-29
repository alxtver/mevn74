import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Register from '@/components/Register'

Vue.use(VueRouter)

function isLoggedIn(to, from, next) {
  if (localStorage.usertoken) {
    next();
  } else {
    next('/login');
  }
}

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: isLoggedIn
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router