import Vue from 'vue'
import Vuex from 'vuex'
import { Movie } from '@/types/types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [
      {
        id: 'movie1',
        title: 'Jurassic Park',
        description:
          "A pragmatic paleontologist visiting an almost complete theme park is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
        tags: ['Action', 'Drama'],
        img:
          'https://images-na.ssl-images-amazon.com/images/I/51EeZ5y%2Bu5L._AC_SL1024_.jpg'
      },
      {
        id: 'movie2',
        title: 'Back to the Future',
        description:
          'Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.',
        tags: ['Action', 'Fantasy'],
        img:
          'https://academycenter.org/wp-content/uploads/2018/12/back-to-the-future-trilogy-1122951-1280x0.jpg'
      },
      {
        id: 'movie3',
        title: 'Tokyo',
        description: 'Tokyo a movie about Tokyo',
        tags: ['Action']
      }
    ] as Movie[],
    genres: [
      'Action',
      'Comedy',
      'Drama',
      'Fantasy',
      'Horror',
      'Mystery',
      'Romance',
      'Thriller'
    ]
  },
  getters: {
    movies: state => {
      return state.movies
    },
    genres: state => {
      return state.genres
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
        selectedMovie.tags = movie.tags
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
