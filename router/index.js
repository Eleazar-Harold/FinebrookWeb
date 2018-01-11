import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Services from '@/components/Services'
import Partners from '@/components/Partners'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
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
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/partners',
      name: 'Partners',
      component: Partners
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
