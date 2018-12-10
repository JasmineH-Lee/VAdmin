import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/bread',
      name: '面包',
      component: () => import('@/test/bread')
    },
    {
      path: '/table',
      name: '表格',
      component: () => import('@/test/table')
    },
    {
      path: '/test',
      name: '测试',
      children: [
        {
          path: '/bread',
          name: '面包',
          component: () => import('@/test/bread')
        }
      ]
    }
  ]
})
