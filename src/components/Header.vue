<template>
  <header class="flex justify-between items-center flex-wrap bg-teal-500 p-6">
    <a
      @click="$router.push('/')"
      class="cursor-pointer text-white text-xl font-semibold"
    >
      Movie database
    </a>
    <nav>
      <button
        class="bg-transparent hover:bg-teal-700 text-white-700 text-white font-bold py-2 px-4 border border-white-700 rounded content-end"
        @click="$router.push('/add-movie')"
      >
        Add movie
      </button>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Header'
})
</script>
