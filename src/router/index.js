import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Profile from '../views/Profile.vue'

Vue.use(Router)


export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    { path: '*', redirect: '/' }
  ]
})


router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  // Not implemented
  next();
})


export default router
