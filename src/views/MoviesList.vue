<template>
  <div class="movie-container flex-wrap">
    <div v-for="movie in movies" :key="movie.title">
      <MovieCard :movie="movie" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import MovieCard from '@/components/MovieCard.vue'
import { Movie } from '@/types/movies'

type DataType = {
  movies: Movie[]
}

export default Vue.extend({
  name: 'MoviesList',
  data() {
    return {}
  },
  mounted() {},
  components: {
    MovieCard
  },
  computed: {
    ...mapGetters(['movies'])
  },
  methods: {}
})
</script>
<style lang="scss">
.movie-container {
  display: flex;
}
</style>
