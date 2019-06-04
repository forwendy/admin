import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let baseRoute = [
  {
    path: '/login',
    name: '登录',
    component: (resolve) => require(['../views/common/Login.vue'], resolve)
  }, {
    path: '/401',
    name: '无权访问',
    component: (resolve) => require(['../views/common/401.vue'], resolve)
  }, {
    path: '/404',
    name: '找不到页面',
    component: (resolve) => require(['../views/common/404.vue'], resolve)
  }, {
    path: '/',
    component: (resolve) => require(['../views/common/Main.vue'], resolve),
    children: [
      {
        path: '/home',
        name: 'home',
        component:resolve=>require(['../views/home/Home.vue'],resolve)
      },
      {
        path: '/staff',
        name: 'staff',
        component:resolve=>require(['../views/staff/Staff.vue'],resolve)
      }
    ]
  }
];

let router = new Router({
  mode: 'history',
  routes: baseRoute
})


router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) { // 匹配前往的路由不存在
    // 判断此跳转路由的来源路由是否存在，存在的情况跳转到来源路由，否则跳转到404页面
    from.name ? next({name: from.name}) : next('/404')
  } else {
    // 如果匹配到正确跳转
    next()
  }
})

export default router
