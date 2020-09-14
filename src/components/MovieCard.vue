<template>
  <div
    @click="$router.push(editMovieRoute + movie.id)"
    class="relative max-w-sm rounded overflow-hidden m-4 dimensions shadow-lg cursor-pointer"
  >
    <button
      class="absolute m-2 bg-teal-500 hover:bg-teal-400 text-white text-xs font-bold py-2 px-4 rounded right-0"
    >
      Edit
    </button>
    <img
      class="w-full limited-dimensions"
      :src="movie.img ? movie.img : defaultImage"
      :alt="movie.title"
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
import Images from '@/constants/images'

type DataType = {
  editMovieRoute: string
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
      editMovieRoute: Routes.EDIT_MOVIE,
      defaultImage: Images.DEFAULT_IMAGE
    }
  }
})
</script>

<style scoped lang="scss">
.dimensions {
  height: 36em;
  min-width: 22em;
}

.limited-dimensions {
  min-height: 10em;
  max-height: 16em;
}
</style>
