<template>
  <div
    @click="$router.push(movieDetailsRoute + movie.id)"
    class="max-w-sm rounded overflow-hidden m-4 height shadow-lg cursor-pointer"
  >
    <img
      class="w-full"
      :src="movie.img ? movie.img : defaultImage"
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
import { Movie } from '@/types/types'
import Routes from '@/constants/routes'

type DataType = {
  movieDetailsRoute: string
  defaultImage: string
}

export default Vue.extend({
  name: 'MovieCard',
  props: {
    movie: {
      type: Object as () => Movie
    }
  },
  data(): DataType {
    return {
      movieDetailsRoute: Routes.MOVIE_DETAILS,
      defaultImage:
        'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
    }
  }
})
</script>

<style scoped lang="scss">
.height {
  height: 500px;
}
</style>
