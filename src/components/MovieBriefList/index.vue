<template>
  <ul class="movie-brief-list">
    <movie-brief-item v-for="movie in movies" :key="movie.id" :movie="movie"></movie-brief-item>
  </ul>
</template>

<script >
import MovieBriefItem from './MovieBriefItem'
export default {
  components: {
    'movie-brief-item': MovieBriefItem
  },
  props: {
    movies: Array
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
.movie-brief-list {

}
</style>
