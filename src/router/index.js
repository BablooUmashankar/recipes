import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardPage from '../views/DashboardPage.vue'
import DetailsPage from '../components/DetailsPage.vue'
import PageNotFound from '../components/PageNotFound.vue'
Vue.use(VueRouter)

const routes = [
  { path: '*', component: PageNotFound },
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
