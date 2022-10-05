import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/layout/Main.vue'
// import ProjectDetail from '../views/ProjectDetail.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/detail',
    name: 'detail',
    // route level code-splitting
    // this generates a separate chunk (detail.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "detail" */ '../views/ProjectDetail.vue')
    // component: ProjectDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
