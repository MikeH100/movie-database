<template>
  <div
    @click="$router.push('/movie-details/' + movie.id)"
    class="max-w-sm rounded overflow-hidden m-4 height shadow-lg cursor-pointer"
  >
    <img
      class="w-full"
      :src="movie.img ? movie.img : '/img/card-top.5183bb28.jpg'"
      alt="Movie"
    />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">
        {{ movie.title }}
      </div>
      <p class="text-gray-700 h-30 text-base">
        {{ movie.description }}
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        v-for="genre in movie.tags"
        :key="genre"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >#{{ genre }}</span
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
.height {
  height: 500px;
}
</style>
