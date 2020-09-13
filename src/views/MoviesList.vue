<template>
  <div class="flex flex-wrap justify-center">
    <div v-for="movie in movies" :key="movie.title">
      <MovieCard :movie="movie" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
import MovieCard from '@/components/MovieCard.vue'
import { Movie } from '@/types/types'

type DataType = {
  movies: Movie[]
}

export default Vue.extend({
  name: 'MoviesList',
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
