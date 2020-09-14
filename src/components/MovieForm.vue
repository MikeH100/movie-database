<template>
  <div class="mt-1">
    <form class="w-full p-2">
      <div class="md:flex justify-center">
        <label
          class="w-32 mb-0 mt-4 pr-0 md:mb-8 md:mt-2 text-left block text-gray-500 font-bold md:text-right pr-4"
          for="inline-title"
        >
          Title
        </label>
        <span class="container h-10 mb-8">
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
        </span>
      </div>
      <div class="md:flex justify-center">
        <label
          class="w-32 mb-0 mt-4 pr-0 md:mb-8 md:mt-4 text-left block text-gray-500 font-bold md:text-right pr-4"
          for="inline-description"
        >
          Description
        </label>
        <span class="container h-16 mb-8">
          <textarea
            class="bg-gray-200 resize-none appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
            id="inline-description"
            placeholder="Description"
            v-model="description"
          />
          <span v-if="errors.description" class="text-red-500 text-xs italic">
            {{ errors.description }}
          </span>
        </span>
      </div>
      <div class="md:flex justify-center">
        <label
          class="w-32 mb-0 mt-4 pr-0 md:mb-8 md:mt-2 md:pr-4 text-left block text-gray-500 font-bold md:text-right"
          for="inline-image"
        >
          Image url
        </label>
        <span class="container h-10 mb-8">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-teal-500"
            id="inline-image"
            type="text"
            placeholder="Image url"
            v-model="imageUrl"
          />
          <p v-if="errors.image" class="text-red-500 text-xs italic">
            {{ errors.image }}
          </p>
        </span>
      </div>
      <div class="md:flex md:items-center justify-center mb-6">
        <div v-for="(value, key, index) in genres" :key="index">
          <input class="mr-2" type="checkbox" :id="key" v-model="genres[key]" />
          <label class="mr-2 text-gray-500 font-bold" :for="key">{{
            key
          }}</label>
        </div>
        <span v-if="errors.genre" class="text-red-500 text-xs italic">
          {{ errors.genre }}
        </span>
      </div>
      <div class="md:flex md:items-center justify-center">
        <button
          class="shadow bg-teal-500 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="button"
          @click="checkForm"
        >
          <span v-if="selectedMovie">Edit movie</span>
          <span v-else>Add movie</span>
        </button>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Movie, Errors } from '@/types/types'

type DataType = {
  movie: Movie
  title: string
  description: string
  imageUrl: string
  errors: Errors
  selectedGenres: Array<string>
}

const urlPattern = new RegExp('^(http|https)://')

export default Vue.extend({
  name: 'MovieForm',
  props: {
    selectedMovie: {
      type: Object as () => Movie
    }
  },
  data(): DataType {
    return {
      title: '',
      description: '',
      imageUrl: '',
      errors: {},
      movie: {
        id: '',
        title: '',
        description: '',
        tags: []
      },
      selectedGenres: []
    }
  },
  computed: {
    genres(): Array<boolean> {
      return this.$store.state.genres.reduce(
        (obj: Object, genre: string) => ({
          ...obj,
          [genre]: false
        }),
        {}
      )
    }
  },
  mounted() {
    if (this.selectedMovie) {
      this.title = this.selectedMovie.title
      this.description = this.selectedMovie.description
      this.imageUrl = this.selectedMovie.img ? this.selectedMovie.img : ''
      for (let key in this.genres) {
        if (this.selectedMovie.tags.find(tag => tag === key)) {
          let value = (this.genres[key] = true)
        }
      }
    }
  },
  methods: {
    checkForm() {
      this.selectedGenres = []
      for (let key in this.genres) {
        let value = this.genres[key]
        if (value) {
          this.selectedGenres.push(key)
        }
      }
      if (
        this.title &&
        this.description &&
        this.description.length < 200 &&
        this.selectedGenres.length !== 0 &&
        ((this.imageUrl && urlPattern.test(this.imageUrl)) || !this.imageUrl)
      ) {
        if (this.selectedGenres.length) {
          this.movie = {
            id: this.selectedMovie ? this.selectedMovie.id : '',
            title: this.title,
            img: this.imageUrl,
            description: this.description,
            tags: this.selectedGenres
          }
          this.$emit('movie', this.movie)
        }
      }

      this.errors = {}

      if (!this.title) {
        this.errors.title = 'Title required.'
      }
      if (!this.description) {
        this.errors.description = 'Description required.'
      }
      if (this.description.length > 200) {
        this.errors.description = 'Number of characters cannot exceeds 200.'
      }
      if (this.selectedGenres.length === 0) {
        this.errors.genre = 'Genre required.'
      }

      if (this.imageUrl && !urlPattern.test(this.imageUrl)) {
        this.errors.image = 'Add http:// or https:// in front of the url.'
      }
    }
  }
})
</script>
