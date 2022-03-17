import Vue from 'vue'
import Router from 'vue-router'

import login from '@/page/login.vue'
import home from '@/page/home.vue'
import sub11 from '@/page/menu1/sub1.vue'
import sub12 from '@/page/menu1/sub2.vue'
import sub21 from '@/page/menu2/sub1.vue'
import relation from '@/page/relation/index.vue'
import user from '@/page/user/index.vue'

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
      path: '/main',
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
      path: '/main',
      component: home,
      name: '菜單二',
      children: [
        {
          path: 'sub21',
          component: sub21,
          name: 'sub21'
        }
      ]
    },
    { 
      path: '/main',
      component: home,
      name: '关系管理',
      children: [
        {
          path: 'relation',
          component: relation,
          name: 'relation'
        }
      ]
    },
    { 
      path: '/main',
      component: home,
      name: '用户管理',
      children: [
        {
          path: 'user',
          component: user,
          name: 'user'
        }
      ]
    }
  ]
})
