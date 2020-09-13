<template>
  <div>
    <Search />
    <div class="flex flex-wrap justify-center">
      <div v-for="movie in filteredMovies" :key="movie.title">
        <MovieCard :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import MovieCard from '@/components/MovieCard.vue'
import Search from '@/components/Search.vue'

import { Movie } from '@/types/types'

export default Vue.extend({
  name: 'MoviesList',
  components: {
    MovieCard,
    Search
  },
  computed: {
    ...mapGetters(['filteredMovies'])
  },
  mounted() {
    this.$store.dispatch('resetMovies')
  }
})
</script>
