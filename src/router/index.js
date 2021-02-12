import Vue from 'vue'
import VueRouter from "vue-router";
import Chapter05 from '../components/Chapter05/Chapter05.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/ch05',
    component: Chapter05
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router