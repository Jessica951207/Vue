import Vue from 'vue'
import Router from 'vue-router'
import secondhand from '../components/secondhand'
import car from '../components/car'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'secondhand',
      component: secondhand,
    },
    {
      path: '/car',
      name: 'car',
      component: car,
    },
  ]
})
