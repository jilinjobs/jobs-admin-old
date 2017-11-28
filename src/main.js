import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './app.vue'
import routes from './routes'

Vue.use(ElementUI)
Vue.use(VueRouter)

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
})
