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
    <div class="aside">
      <planet></planet>
    </div>
  </div>
</template>

<script>
import MovieDatail from 'components/MovieDetail'
import MovieIntroduction from 'components/MovieIntroduction'
import Planet from 'components/Planet'
import RelatedResources from 'components/RelatedResources'
import { getMovie, getMovieResources } from 'api/movies'
import { parseTime } from '../../filters'

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
    this.movieId = this.$route.params.id
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
  },
  methods: {
    setFetchResourcesData (res) {
      const { resources } = res
      const { id } = this.movieData
      resources.map(item => {
        item.create_at = parseTime(item.create_at)
        item.mid = id
      })
      this.resources = resources
      this.resourcesLoading = false
    },
    setFetchMovieData (res) {
      this.movieData = res
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
