<template>
  <div class="add-movie-container">
    <form class="w-full max-w-sm">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-title"
          >
            Title
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
            id="inline-title"
            type="text"
            placeholder="Title"
            v-model="title"
          />
          <p v-if="errors.title" class="text-red-500 text-xs italic">
            {{ errors.title }}
          </p>
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-description"
          >
            Description
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
            id="inline-description"
            type="text"
            placeholder="Description"
            v-model="description"
          />
          <p v-if="errors.description" class="text-red-500 text-xs italic">
            {{ errors.description }}
          </p>
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button
            class="shadow bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
            @click="checkForm"
          >
            Add movie
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Movie, Errors } from '@/types/movies'

type DataType = {
  movie: Movie
  title: string
  description: string
  errors: Errors
}

export default Vue.extend({
  name: 'MovieForm',
  props: {
    selectedMovie: {
      type: Object as () => Movie
    }
  },
  data() {
    return {
      title: '',
      description: '',
      errors: {} as Errors,
      movie: {} as Movie
    }
  },
  mounted() {
    if (this.selectedMovie) {
      this.title = this.selectedMovie.title
      this.description = this.selectedMovie.description
    }
  },
  methods: {
    checkForm() {
      if (this.title && this.description) {
        this.movie = {
          id: this.selectedMovie ? this.selectedMovie.id : '',
          title: this.title,
          description: this.description
        }
        this.$emit('movie', this.movie)
      }

      this.errors = {}

      if (!this.title) {
        this.errors.title = 'Title required.'
      }
      if (!this.description) {
        this.errors.description = 'Description required.'
      }
    }
  }
})
</script>

<style scoped lang="scss">
.add-movie-container {
  margin-top: 20px;
}
</style>
