import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardPage from '../views/DashboardPage.vue'
import DetailsPage from '../views/DetailsPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: DashboardPage
  },
  {
    path: '/detailsPage/:id',
    name: 'detailsPage',
    component : DetailsPage    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
