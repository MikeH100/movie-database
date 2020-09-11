<template>
  <div id="nav" class="flex justify-end items-center flex-wrap bg-teal-500 p-6">
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded content-end"
      @click="$router.push('/add-movie')"
    >
      Add movie
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Navigation'
})
</script>
