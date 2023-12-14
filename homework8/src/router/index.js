import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../components/MainPage.vue'
import BlogDetails from '../components/BlogDetails.vue'
import BlogPosts from '../components/BlogPosts.vue'
import ProjectPage from '../components/ProjectPage.vue'
import ProjectDetails from '../components/ProjectDetails.vue'
import NotFound from '../components/404.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: MainPage
  },
  {
    path: '/Blog',
    name: 'blog',
    component: BlogPosts
  },
  {
    path: '/Blog/Details',
    name: 'blogdetails',
    component: BlogDetails
  },
  {
    path: '/Project',
    name: 'project',
    component: ProjectPage
  },
  {
    path: '/Project/Details',
    name: 'projectdetails',
    component: ProjectDetails,
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFound
  }
  ]

})
