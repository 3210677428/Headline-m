import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '@/views/login'
// 路由组件懒加载
// const Login=()=>import('@/views/login')


Vue.use(VueRouter)

// 路由表
const routes = [
  // 路由懒加载
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login')
  },
  {
    path: '/layout',
    component: () => import('../views/layout/'),
    children: [{
        // 默认子路由''
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/')
      },
      {
        path: '/QA',
        name: 'QA',
        component: () => import('@/views/QA/')
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/video/')
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my/')
      },
      {
        path:'/info',
        name:'info',
        component: () => import('@/views/info/')
      },
      {
        path:'/ai',
        name:'ai',
        component: () => import('@/views/ai/')
      },
      {
        path:'/collect',
        name:'collect',
        component: () => import('@/views/collect/')
      },
      {
        path:'/edit',
        name:'edit',
        component: () => import('@/views/edit/')
      },
      {
        path:'/history',
        name:'history',
        component: () => import('@/views/history/')
      },
    ]
  },
  {
    path: '/',
    redirect: 'login'
  }
  // ../views/layout/==@/views/layout/,@==src
]

const router = new VueRouter({
  // 去除路径上#
  mode: 'history',
  // base:process.env.BASE_URL,
  routes
})

export default router
