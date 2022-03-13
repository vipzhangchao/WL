import Vue from 'vue'
import Router from 'vue-router'

import login from '@/page/login.vue'
import home from '@/page/home.vue'
import sub11 from '@/page/menu1/sub1.vue'
import sub12 from '@/page/menu1/sub2.vue'
import sub21 from '@/page/menu2/sub1.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: '/login',
      hidden: true
    },
    {
      path: '/login',
      component: login,
      name: '',
      hidden: true
    },
    {
      path: '/menu1',
      component: home,
      name: '菜單一',
      children: [
        {
          path: 'sub1',
          component: sub11,
          name: 'sub1'
        },
        {
          path: 'sub2',
          component: sub12,
          name: 'sub2'
        }
      ]
    },
    {
      path: '/menu2',
      component: home,
      name: '菜單二',
      children: [
        {
          path: 'sub21',
          component: sub21,
          name: 'sub21'
        }
      ]
    }
  ]
})
