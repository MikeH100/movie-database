<template>
  <div id="app" class="text-center">
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '@/components/Header.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Header
  }
})
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
