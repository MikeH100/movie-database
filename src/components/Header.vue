<template>
  <header class="flex justify-between flex-wrap bg-teal-500 p-6">
    <a
      @click="redirectHome"
      class="cursor-pointer text-white text-xl font-semibold mt-2"
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
  },
  methods: {
    redirectHome() {
      this.$store.dispatch('resetMovies')
      this.$router.push(this.homeRoute)
    }
  }
})
</script>
