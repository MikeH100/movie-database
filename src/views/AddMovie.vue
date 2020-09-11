<template>
  <MovieForm @movie="addMovie" />
</template>

<script lang="ts">
import Vue from 'vue'
import { Movie, Errors } from '@/types/movies'
import MovieForm from '@/components/MovieForm.vue'

type DataType = {
  title: string
  description: string
  errors: Errors
}

export default Vue.extend({
  name: 'AddMovie',
  data() {
    return {
      title: '',
      description: '',
      errors: {} as Errors
    }
  },
  components: {
    MovieForm
  },
  methods: {
    addMovie(movie: Movie) {
      this.$store.dispatch('addMovie', movie)
      this.$router.push('/')
    }
  }
})
</script>
<style lang="scss">
.movie-container {
  display: flex;
}
</style>
