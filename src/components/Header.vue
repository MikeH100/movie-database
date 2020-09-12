<template>
  <header class="flex justify-between items-center flex-wrap bg-teal-500 p-6">
    <a
      @click="$router.push(homeRoute)"
      class="cursor-pointer text-white text-xl font-semibold"
    >
      Movie database
    </a>
    <nav>
      <button
        class="bg-transparent hover:bg-teal-700 text-white font-bold py-2 px-4 border border-white-700 rounded content-end"
        @click="$router.push(addMovieRoute)"
      >
        Add movie
      </button>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import Routes from '@/constants/routes'

type DataType = {
  homeRoute: string
  addMovieRoute: string
}

export default Vue.extend({
  name: 'Header',
  data(): DataType {
    return {
      homeRoute: Routes.HOME,
      addMovieRoute: Routes.ADD_MOVIE
    }
  }
})
</script>
