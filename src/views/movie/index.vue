<template>
  <div class="view-container movie">
    <div class="main">
      <movie-datail
        :movieData="movieData"
        v-loading="movieDetailLoading"
      ></movie-datail>
      <movie-introduction
        class="card"
        :movieData="movieData"
      ></movie-introduction>
      <related-resources
        class="card"
        :resources="resources"
        v-loading="resourcesLoading"
        :movieId="movieId"
      ></related-resources>
    </div>
    <div v-if="false" class="aside">
      <planet></planet>
    </div>
  </div>
</template>

<script>
import MovieDatail from './MovieDetail'
import MovieIntroduction from './MovieIntroduction'
import Planet from './Planet'
import RelatedResources from './RelatedResources'
import { getMovie, getMovieResources } from 'api/movies'
import { formatTime } from '../../filters'

export default {
  name: 'Movie',
  components: {
    'movie-datail': MovieDatail,
    'movie-introduction': MovieIntroduction,
    'planet': Planet,
    'related-resources': RelatedResources
  },
  data () {
    return {
      movieData: {},
      resources: [],
      movieDetailLoading: false,
      resourcesLoading: false,
      movieId: 1
    }
  },
  mounted () {
    this.movieDetailLoading = true
    this.resourcesLoading = true
    getMovie(this.$route.params.id)
      .then(response => this.setFetchMovieData(response))
      .catch(e => {
        console.log(e)
        this.movieDetailLoading = false
      })
    getMovieResources(this.$route.params.id)
      .then(response => this.setFetchResourcesData(response))
      .catch(e => {
        console.log(e)
        this.resourcesLoading = false
      })
    this.movieId = this.$route.params.id
  },
  methods: {
    setFetchResourcesData (res) {
      const { resources } = res
      const self = this
      this.resources = resources.map(item => {
        item.create_at = formatTime(item.create_at)
        item.mid = self.movieId
        return item
      })
      console.log(this.resources)
      this.resourcesLoading = false
    },
    setFetchMovieData (res) {
      this.movieData = res
      document.title = `${res.title} - 午安影视`
      this.movieDetailLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.movie{
  padding-top: 70px;
  padding-bottom: 30px;
}
.aside{
  margin-left: 58px;
}
.card{
  margin-top: 36px;
}
</style>
