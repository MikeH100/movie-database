<template>
  <MovieForm @movie="editMovie" :selectedMovie="movie" />
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
  name: 'MovieDetails',
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
  mounted() {
    console.log('test', this.$route.params.id)
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
