import Vue from "vue"
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let routeConfig = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/view/login.vue')
  },
  {
    path: '/dashboard',
    component: () => import('@/view/layout.vue'),
    name: 'dashboard',
    meta: { title: '首页', affix: true }
  },
  {
    path: '/sys-config',
    name: 'sys-config',
    component: () => import('@/view/layout.vue'),
    meta: {
      title: '系统设置'
    },
  },
  {
    path: '/echarts',
    component: () => import('@/view/layout.vue'),
    meta: {
      title: '图表'
    },
    children: [
      {
        path: 'echarts-pillar',
        name: 'echarts-pillar',
        component: () => import('@/components/echartsbar.vue'),
        meta: {
          title: '柱状图'
        }
      },
      {
        path: 'echarts-line',
        name: 'echarts-line',
        component: () => import('@/components/echartsline.vue'),
        meta: {
          title: '折线图'
        }
      }
    ]
  }
]

let routers = new VueRouter({
  routes: routeConfig
})


export default routers