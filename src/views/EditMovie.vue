<template>
  <MovieForm @movie="editMovie" :selectedMovie="movie" />
</template>

<script lang="ts">
import Vue from 'vue'
import { Movie, Errors } from '@/types/types'
import MovieForm from '@/components/MovieForm.vue'
import Routes from '@/constants/routes'

type DataType = {
  title: string
  description: string
  errors: Errors
  homeRoute: string
}

export default Vue.extend({
  name: 'EditMovie',
  data(): DataType {
    return {
      title: '',
      description: '',
      errors: {},
      homeRoute: Routes.HOME
    }
  },
  components: {
    MovieForm
  },
  computed: {
    movie() {
      return this.$store.state.movies.find(
        (movie: Movie) => movie.id === this.$route.params.id
      )
    }
  },
  methods: {
    editMovie(movie: Movie) {
      this.$store.dispatch('editMovie', movie)
      this.$router.push(this.homeRoute)
    }
  }
})
</script>
