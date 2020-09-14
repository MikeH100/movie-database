<template>
  <div>
    <Search />
    <div class="flex flex-wrap justify-center" v-if="filteredMovies.length > 0">
      <div v-for="movie in filteredMovies" :key="movie.id">
        <MovieCard :movie="movie" />
      </div>
    </div>
    <h1 v-else>No records found</h1>
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
