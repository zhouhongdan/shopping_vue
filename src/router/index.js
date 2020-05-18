import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWord'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/fenlei',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
