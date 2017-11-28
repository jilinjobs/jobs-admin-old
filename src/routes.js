import Login from '~/views/login.vue'
import Main from '~/views/main.vue'
import Home from '~/views/demo/home.vue'
import Page1 from '~/views/demo/page1.vue'
import Page2 from '~/views/demo/page2.vue'
import Error403 from '~/components/error/403.vue'
import Error404 from '~/components/error/404.vue'
import Error500 from '~/components/error/500.vue'

const routes = [
  {
    path: '/login',
    component: Login,
    name: 'login',
    hidden: true
  },
  {
    path: '/',
    component: Main,
    meta: {requiresAuth: true},
    children: [
      {
        path: '',
        component: Home,
        name: 'home',
        hidden: true,
        meta: {requiresAuth: true},
          },
      {
        path: '/page1',
        component: Page1,
        name: '',
      },
      {
        path: '/page2',
        component: Page2,
        name: '',
      },
    ]
  },
  {
    path: '/403',
    component: Error403,
    name: '',
  },
  {
    path: '/404',
    component: Error404,
    name: '',
  },
  {
    path: '/500',
    component: Error500,
    name: '',
  },
]

export default routes;