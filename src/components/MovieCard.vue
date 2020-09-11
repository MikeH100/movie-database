<template>
  <div
    @click="$router.push('/movie-details/' + movie.id)"
    class="max-w-sm rounded overflow-hidden shadow-lg movie-card cursor-pointer"
  >
    <img class="w-full" src="../assets/images/card-top.jpg" alt="Movie" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">
        {{ movie.title }}
      </div>
      <p class="text-gray-700 text-base">
        {{ movie.description }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >#photography</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Movie } from '@/types/movies'

export default Vue.extend({
  name: 'MovieCard',
  props: {
    movie: {
      type: Object as () => Movie
    }
  }
})
</script>

<style scoped lang="scss">
.movie-card {
  margin: 20px;
  width: 350px;
}
</style>
