import Vue from 'vue'
import Router from 'vue-router'
import MoviesList from './views/MoviesList.vue'
import EditMovie from './views/EditMovie.vue'
import AddMovie from './views/AddMovie.vue'

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
      component: EditMovie
    },
    {
      path: '/add-movie',
      name: 'Add movie',
      component: AddMovie
    }
  ]
})
