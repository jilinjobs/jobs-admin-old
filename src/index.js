import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync }  from 'vuex-router-sync'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './app.vue'
import routes from './routes'
import store from './store'
import styles from './index.less'


Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    let {login} = store.state;
    if (!login.authorized) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

let app = new Vue({
  el: '#app',
  data: {
    login: false,
  },
  // computed: {
  //   ViewComponent () {
  //     return this.login ? Main : Login
  //   }
  // },
  render: function(h) {return h(App)},
  router,
  store,
})

const unsync = sync(store, router) // done. Returns an unsync callback fn

