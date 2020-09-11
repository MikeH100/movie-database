import Vue from 'vue'
import Vuex from 'vuex'
import { Movie } from '@/types/movies'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [
      {
        id: 'movie1',
        title: 'title 1',
        description: 'description 1'
      },
      {
        id: 'movie2',
        title: 'title 2',
        description: 'description 2'
      }
    ] as Movie[]
  },
  getters: {
    movies: state => {
      return state.movies
    }
  },
  mutations: {
    addMovie(state, movie) {
      state.movies.push(movie)
    },
    editMovie(state, movie) {
      let selectedMovie = state.movies.find(
        (oldMovie: Movie) => oldMovie.id === movie.id
      )
      if (selectedMovie) {
        selectedMovie.title = movie.title
        selectedMovie.description = movie.description
      }
    }
  },
  actions: {
    addMovie(context, movie) {
      movie.id = 'movie' + (this.state.movies.length + 1)
      context.commit('addMovie', movie)
    },
    editMovie(context, movie) {
      context.commit('editMovie', movie)
    }
  }
})
