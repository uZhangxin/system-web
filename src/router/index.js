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
    component: () => import('@/view/z-login.vue')
  },
  {
    path: '/index',
    component: () => import('@/view/z-layout.vue'),
    meta: {}
  },
  {
    path: '/sys-config',
    component: () => import('@/view/z-layout.vue'),
    meta: {
      title: '系统设置'
    },
  },
  {
    path: '/echarts',
    component: () => import('@/view/z-layout.vue'),
    meta: {
      title: '图表'
    },
    children: [
      {
        path: 'echarts-pillar',
        component: () => import('@/components/z-echarts-bar.vue'),
        meta: {
          title: '柱状图'
        }
      },
      {
        path: 'echarts-line',
        component: () => import('@/components/z-echarts-line.vue'),
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