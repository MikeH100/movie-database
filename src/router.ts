import Vue from 'vue'
import Router from 'vue-router'
import MoviesList from './views/MoviesList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: MoviesList
    },
    {
      path: '/edit-movie/:id',
      name: 'Edit movie',
      component: () => import('./views/EditMovie.vue')
    },
    {
      path: '/add-movie',
      name: 'Add movie',
      component: () => import('./views/AddMovie.vue')
    }
  ]
})
