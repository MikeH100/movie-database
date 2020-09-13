<template>
  <div class="flex mb-8">
    <input
      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
      id="inline-title"
      type="text"
      placeholder="Search by title"
      v-model="searchInput"
    />
    <button
      class="bg-teal-700 hover:bg-teal-400 text-white font-bold py-2 px-4"
      @click="searchMovies"
    >
      Search
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Routes from '@/constants/routes'

type DataType = {
  searchInput: string
}

export default Vue.extend({
  name: 'Search',
  data(): DataType {
    return {
      searchInput: ''
    }
  },
  methods: {
    searchMovies() {
      this.$store.dispatch('searchMovies', this.searchInput)
    }
  }
})
</script>
