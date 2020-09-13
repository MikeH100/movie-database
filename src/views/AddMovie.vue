<template>
  <div class="mt-8">
    Add movie
    <MovieForm @movie="addMovie" />
  </div>
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
  name: 'AddMovie',
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
  methods: {
    addMovie(movie: Movie) {
      this.$store.dispatch('addMovie', movie)
      this.$store.dispatch('resetMovies')
      this.$router.push(this.homeRoute)
    }
  }
})
</script>
